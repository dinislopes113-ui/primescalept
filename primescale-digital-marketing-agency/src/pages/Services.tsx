import { ArrowRight, Target, Users, BarChart3, Megaphone, LayoutTemplate, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 'ads',
      title: 'Gestão de Anúncios Pagos',
      subtitle: 'Meta Ads & Google Ads',
      description: 'Criamos, gerimos e otimizamos campanhas de publicidade altamente segmentadas para colocar o seu negócio à frente das pessoas certas, no momento exato em que procuram pelos seus serviços.',
      features: [
        'Pesquisa de palavras-chave e segmentação de público',
        'Criação de criativos (imagens e vídeos) que convertem',
        'Testes A/B contínuos para maximizar o ROI',
        'Retargeting para recuperar visitantes que não compraram',
        'Relatórios detalhados de performance'
      ],
      icon: Target,
      color: 'blue',
      image: '/payments.png'
    },
    {
      id: 'social',
      title: 'Gestão de Redes Sociais',
      subtitle: 'Instagram, Facebook & LinkedIn',
      description: 'Construímos uma presença online forte e profissional que gera confiança, educa o seu público-alvo e transforma seguidores em clientes fiéis.',
      features: [
        'Estratégia de conteúdo alinhada com os objetivos de negócio',
        'Design profissional e consistente com a sua marca',
        'Gestão de comunidade e resposta a comentários',
        'Crescimento orgânico e engajamento',
        'Análise de métricas e otimização'
      ],
      icon: Users,
      color: 'indigo',
      image: '/social_media.png'
    },
    {
      id: 'strategy',
      title: 'Estratégia de Marketing Digital',
      subtitle: 'Planeamento & Consultoria',
      description: 'Não basta fazer anúncios. Desenvolvemos um plano de ação completo, desde a atração até à retenção, garantindo que cada euro investido gera o máximo retorno.',
      features: [
        'Auditoria completa à sua presença digital atual',
        'Análise da concorrência e identificação de oportunidades',
        'Definição do funil de vendas ideal para o seu negócio',
        'Mapeamento da jornada do cliente',
        'Consultoria estratégica mensal'
      ],
      icon: BarChart3,
      color: 'emerald',
      image: '/marketing.png'
    },
    {
      id: 'leads',
      title: 'Sistemas de Geração de Leads',
      subtitle: 'Automação & Captura',
      description: 'Implementamos máquinas de aquisição de clientes que funcionam 24/7, capturando contactos qualificados e nutrindo-os até estarem prontos para comprar.',
      features: [
        'Criação de iscas digitais (Lead Magnets)',
        'Configuração de funis de email marketing',
        'Automação de mensagens e follow-up',
        'Qualificação automática de leads',
        'Integração com o seu CRM'
      ],
      icon: Megaphone,
      color: 'orange',
      image: '/lead.png'
    },
    {
      id: 'web',
      title: 'Criação de Websites',
      subtitle: 'Design Orientado para Conversão',
      description: 'O seu website não deve ser apenas um cartão de visita digital. Desenvolvemos páginas rápidas, modernas e otimizadas especificamente para transformar visitantes em clientes.',
      features: [
        'Design moderno, limpo e responsivo (mobile-first)',
        'Copywriting persuasivo focado na conversão',
        'Otimização de velocidade e performance',
        'Otimização básica para motores de busca (SEO)',
        'Integração com ferramentas de tracking e analytics'
      ],
      icon: LayoutTemplate,
      color: 'slate',
      image: '/sites.png'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="pt-32 pb-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Os Nossos Serviços</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Soluções completas de marketing digital desenhadas especificamente para escalar negócios locais.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium">
                  <service.icon className="h-4 w-4" />
                  {service.subtitle}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{service.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="pt-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">O que está incluído:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                          </div>
                        </div>
                        <span className="ml-3 text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-8">
                  <a
                    href="https://calendly.com/primescale-info/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                  >
                    Falar sobre este serviço
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
              
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 relative shadow-lg border border-slate-100">
                  <img 
                    src={service.image} 
                    alt={`Ilustração para ${service.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Não sabe por onde começar?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Agende uma chamada gratuita. Analisamos o seu negócio e dizemos-lhe exatamente qual a melhor estratégia para o seu caso específico.
          </p>
          <a
            href="https://calendly.com/primescale-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-blue-600 bg-white rounded-full hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Marcar Chamada Estratégica
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
