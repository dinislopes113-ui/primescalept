import { ArrowRight, Target, Users, LayoutTemplate } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

const SERVICES = [
  {
    icon: Target,
    tag: 'Meta Ads · Google Ads',
    title: 'Gestao de Anuncios Pagos',
    desc: 'Campanhas de publicidade segmentadas que colocam o seu negocio à frente das pessoas certas, no momento exato em que procuram pelos seus servicos.',
    features: [
      'Pesquisa de audiencias e segmentacao avancada',
      'Criacao de criativos orientados para conversao',
      'Testes A/B continuos para maximizar ROI',
      'Retargeting para recuperar visitantes',
      'Relatorios mensais detalhados',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80',
  },
  {
    icon: Users,
    tag: 'Instagram · Facebook · LinkedIn',
    title: 'Gestao de Redes Sociais',
    desc: 'Presenca online consistente e profissional que constroi autoridade, gera confianca e transforma seguidores em clientes.',
    features: [
      'Estrategia de conteudo alinhada com o negocio',
      'Design consistente com a identidade da marca',
      'Gestao de comunidade e mensagens',
      'Crescimento organico e engajamento real',
      'Analise mensal de metricas',
    ],
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=500&fit=crop&q=80',
  },
  {
    icon: LayoutTemplate,
    tag: 'Design · Desenvolvimento · SEO',
    title: 'Criacao de Websites',
    desc: 'Websites rapidos, modernos e desenvolvidos para converter visitantes em clientes. Nao apenas cartoes de visita digitais.',
    features: [
      'Design responsivo e mobile-first',
      'Copywriting orientado para conversao',
      'Otimizacao de performance e velocidade',
      'SEO basico integrado',
      'Integracao com ferramentas de analytics',
    ],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop&q=80',
  },
];

export default function Services() {
  const reduce = useReducedMotion();

  const inView = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <div className="flex flex-col bg-slate-950 text-white">

      {/* ── PAGE HERO ───────────────────────────────────── */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-slate-900/50 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...inView()}>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Servicos de marketing digital.
            </h1>
            <p className="text-lg text-slate-400 max-w-xl">
              Para alem do WhatsApp Bot, a PrimeScale oferece gestao completa da presenca digital do seu negocio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES LIST ───────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {SERVICES.map((svc, i) => (
            <motion.article
              key={svc.title}
              {...inView(0.05)}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* Content */}
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
                  <svc.icon className="w-3.5 h-3.5" />
                  {svc.tag}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{svc.title}</h2>
                <p className="text-slate-400 leading-relaxed">{svc.desc}</p>
                <ul className="space-y-2.5 pt-2">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <a
                    href="https://calendly.com/primescale-info/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
                  >
                    Falar sobre este servico
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Image */}
              <div className={i % 2 !== 0 ? 'lg:order-first' : ''}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/40">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover opacity-70 hover:opacity-80 transition-opacity"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── BOT CTA ─────────────────────────────────────── */}
      <section className="py-20 bg-slate-900 border-t border-slate-800/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...inView()}
            className="rounded-2xl bg-gradient-to-br from-blue-900/50 to-slate-900 border border-blue-500/20 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10"
          >
            <div className="flex-1">
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">Produto proprio</p>
              <h3 className="text-2xl font-bold text-white mb-2">WhatsApp Bot IA</h3>
              <p className="text-slate-400 text-sm">
                O nosso produto SaaS que automatiza o atendimento 24/7. Diferente dos outros servicos, este e gerido pela plataforma PrimeScale.
              </p>
            </div>
            <a
              href="/bot"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all shrink-0 text-sm active:scale-[0.98]"
            >
              Ver Bot IA
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
