import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Defensive check for window.fetch to prevent "Cannot set property fetch of #<Window> which has only a getter"
if (typeof window !== 'undefined') {
  try {
    const descriptor = Object.getOwnPropertyDescriptor(window, 'fetch') || 
                       Object.getOwnPropertyDescriptor(Window.prototype, 'fetch');
    
    if (descriptor && !descriptor.writable && !descriptor.set && descriptor.configurable) {
      const originalFetch = window.fetch;
      Object.defineProperty(window, 'fetch', {
        get() { return originalFetch; },
        set(v) { 
          console.warn("Intercepted attempt to overwrite window.fetch. This is usually caused by a polyfill conflict.", v);
        },
        configurable: true,
        enumerable: true
      });
    }
  } catch (e) {
    // Ignore errors during protection setup
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
