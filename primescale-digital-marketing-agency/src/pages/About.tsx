import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export default function About() {
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
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-slate-900/40 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...inView()} className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.08] tracking-tight mb-5">
              Nascemos para fazer negocios locais crescerem.
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              A PrimeScale combina marketing digital e automacao por IA para dar a PMEs portuguesas as ferramentas que so as grandes empresas tinham acesso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STORY ───────────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...inView()} className="space-y-6">
              <h2 className="text-3xl font-bold text-white">A nossa historia</h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  A PrimeScale nasceu de uma frustracao: ver negocios locais excelentes a perder clientes para concorrentes mediocres, apenas porque sabiam fazer marketing.
                </p>
                <p>
                  Decidimos mudar isso. Combinamos estrategia de marketing digital com tecnologia de IA para criar solucoes que antes so estavam ao alcance de grandes empresas.
                </p>
                <p>
                  O nosso produto principal, o WhatsApp Bot IA, e o culminar desta visao: automacao de atendimento acessivel a qualquer negocio local, sem equipas tecnicas nem investimentos enormes.
                </p>
              </div>
              <div className="pt-4">
                <a
                  href="https://calendly.com/primescale-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full text-sm transition-all active:scale-[0.98]"
                >
                  Falar com a equipa
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div {...inView(0.1)} className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800/60 bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                  alt="Equipa PrimeScale"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 hidden md:block bg-slate-800 border border-slate-700/50 rounded-xl px-5 py-4 shadow-xl">
                <p className="text-xs text-slate-400">Fundada em</p>
                <p className="text-2xl font-black text-white">2024</p>
                <p className="text-xs text-blue-400 font-medium">Portugal</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VALUES ──────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...inView()} className="text-3xl font-bold text-white mb-12">
            O que nos guia.
          </motion.h2>
          <div className="space-y-0 border border-slate-800/60 rounded-2xl overflow-hidden">
            {[
              {
                n: '01',
                title: 'Resultados acima de tudo',
                desc: 'Nao trabalhamos com metricas de vaidade. O nosso sucesso mede-se em leads geradas, marcacoes confirmadas e crescimento real do seu negocio.',
              },
              {
                n: '02',
                title: 'Transparencia total',
                desc: 'Sem linguagem tecnica nem relatorios confusos. Mostramos exatamente onde o seu investimento esta a ir e o que esta a gerar.',
              },
              {
                n: '03',
                title: 'Tecnologia acessivel',
                desc: 'IA e automacao nao devem ser exclusivo de grandes empresas. O nosso objetivo e democratizar estas ferramentas para todos os negocios portugueses.',
              },
            ].map((v, i) => (
              <motion.div
                key={v.n}
                {...inView(i * 0.07)}
                className="flex gap-6 md:gap-10 p-6 md:p-8 border-b border-slate-800/60 last:border-b-0 hover:bg-slate-800/20 transition-colors"
              >
                <span className="text-3xl font-black text-slate-700 shrink-0 leading-none">{v.n}</span>
                <div>
                  <h3 className="text-base font-semibold text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="py-20 bg-slate-950 border-t border-slate-800/60">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 {...inView()} className="text-2xl md:text-3xl font-bold text-white mb-4">
            Vamos trabalhar juntos?
          </motion.h2>
          <motion.p {...inView(0.08)} className="text-slate-400 mb-8">
            Marque uma chamada gratuita. Analisamos o seu negocio e mostramos o que e possivel.
          </motion.p>
          <motion.div {...inView(0.14)}>
            <a
              href="https://calendly.com/primescale-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all active:scale-[0.98]"
            >
              Marcar Chamada Gratuita
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
