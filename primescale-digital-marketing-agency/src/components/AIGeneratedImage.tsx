import { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { get, set } from 'idb-keyval';
import { Loader2 } from 'lucide-react';

// Global queue to prevent hitting rate limits when multiple images are requested at once
const imageQueue: (() => Promise<void>)[] = [];
let isProcessingQueue = false;

async function processQueue() {
  if (isProcessingQueue || imageQueue.length === 0) return;
  isProcessingQueue = true;
  
  while (imageQueue.length > 0) {
    const task = imageQueue.shift();
    if (task) {
      try {
        await task();
      } catch (e) {
        console.error("Task failed in queue", e);
      }
      // Wait 3 seconds between requests to respect rate limits
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  }
  
  isProcessingQueue = false;
}

interface AIGeneratedImageProps {
  id: string;
  prompt: string;
  alt: string;
  className?: string;
}

export default function AIGeneratedImage({ id, prompt, alt, className = '' }: AIGeneratedImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Helper function to get a fallback image based on the ID
  const getFallbackImage = (imageId: string) => {
    const fallbacks: Record<string, string> = {
      'ads': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      'social': 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
      'strategy': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
      'leads': 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800',
      'web': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
      'default': 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800'
    };
    return fallbacks[imageId] || fallbacks['default'];
  };

  useEffect(() => {
    let isMounted = true;

    async function fetchImage() {
      try {
        // Simple hash to ensure new prompt generates new image
        const hashCode = (s: string) => s.split('').reduce((a,b) => (((a << 5) - a) + b.charCodeAt(0))|0, 0);
        const cacheKey = `ai-image-${id}-${hashCode(prompt)}`;

        // Check cache first
        const cachedImage = await get(cacheKey);
        if (cachedImage) {
          if (isMounted) {
            setImageUrl(cachedImage);
            setLoading(false);
          }
          return;
        }

        // Add to global queue instead of executing immediately
        const generateTask = async () => {
          if (!isMounted) return;
          
          try {
            const apiKey = process.env.GEMINI_API_KEY;
            if (!apiKey) {
              throw new Error('GEMINI_API_KEY is not set');
            }

            const ai = new GoogleGenAI({ apiKey });
            
            // Retry logic for 429 errors
            let response;
            let retries = 3;
            while (retries > 0) {
              try {
                response = await ai.models.generateContent({
                  model: 'gemini-2.5-flash-image',
                  contents: prompt,
                  config: {
                    imageConfig: {
                      aspectRatio: "4:3",
                    }
                  }
                });
                break; // Success
              } catch (error: any) {
                if (error?.status === 'RESOURCE_EXHAUSTED' || error?.message?.includes('429')) {
                  retries--;
                  if (retries === 0) throw error;
                  console.log(`Rate limited for ${id}. Retrying in 5s...`);
                  await new Promise(resolve => setTimeout(resolve, 5000));
                } else {
                  throw error;
                }
              }
            }

            let base64Data = null;
            for (const part of response?.candidates?.[0]?.content?.parts || []) {
              if (part.inlineData) {
                base64Data = part.inlineData.data;
                break;
              }
            }

            if (base64Data) {
              const newImageUrl = `data:image/png;base64,${base64Data}`;
              await set(cacheKey, newImageUrl);
              if (isMounted) {
                setImageUrl(newImageUrl);
                setLoading(false);
              }
            } else {
              throw new Error('No image data returned from API');
            }
          } catch (err: any) {
            console.error(`Error generating image for ${id}:`, err);
            
            // If quota is exhausted or generation fails, use fallback image
            if (isMounted) {
              const fallbackUrl = getFallbackImage(id);
              setImageUrl(fallbackUrl);
              setLoading(false);
              // We don't set error here so the fallback image displays instead of the error message
            }
          }
        };

        imageQueue.push(generateTask);
        processQueue();
      } catch (err) {
        console.error(`Error setting up image generation for ${id}:`, err);
        if (isMounted) {
          const fallbackUrl = getFallbackImage(id);
          setImageUrl(fallbackUrl);
          setLoading(false);
        }
      }
    }

    fetchImage();

    return () => {
      isMounted = false;
    };
  }, [id, prompt]);

  if (loading) {
    return (
      <div className={`flex items-center justify-center bg-slate-100 animate-pulse ${className}`}>
        <div className="flex flex-col items-center gap-3 text-slate-400">
          <Loader2 className="w-8 h-8 animate-spin" />
          <span className="text-sm font-medium text-center px-4">A gerar ilustração com IA...</span>
        </div>
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <div className={`flex items-center justify-center bg-slate-100 ${className}`}>
        <span className="text-slate-400 text-sm font-medium text-center px-4">{error || 'Imagem indisponível'}</span>
      </div>
    );
  }

  return (
    <img 
      src={imageUrl} 
      alt={alt} 
      className={`object-cover ${className}`}
      referrerPolicy="no-referrer"
    />
  );
}
