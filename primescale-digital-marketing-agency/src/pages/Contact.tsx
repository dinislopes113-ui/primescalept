import { ArrowRight, Mail, Phone, MessageSquare } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export default function Contact() {
  const reduce = useReducedMotion();

  const inView = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <div className="flex flex-col bg-slate-950 text-white">

      {/* ── PAGE HERO ───────────────────────────────────── */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-slate-900/40 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...inView()} className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Vamos conversar.
            </h1>
            <p className="text-lg text-slate-400">
              Fale connosco por email, telefone ou marque uma chamada estrategica gratuita de 30 minutos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Left: contact details */}
            <motion.div {...inView()} className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Formas de contacto</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/15 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-0.5">Email</p>
                      <a
                        href="mailto:info@primescale.pt"
                        className="text-white font-medium hover:text-blue-400 transition-colors"
                      >
                        info@primescale.pt
                      </a>
                      <p className="text-xs text-slate-500 mt-1">Respondemos em menos de 24 horas.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/15 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-0.5">Telefone</p>
                      <a
                        href="tel:+351919839748"
                        className="text-white font-medium hover:text-blue-400 transition-colors"
                      >
                        +351 919 839 748
                      </a>
                      <p className="text-xs text-slate-500 mt-1">Horario de atendimento: seg-sex, 09h-18h.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/15 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-0.5">WhatsApp</p>
                      <a
                        href="https://wa.me/351919839748"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-medium hover:text-blue-400 transition-colors"
                      >
                        +351 919 839 748
                      </a>
                      <p className="text-xs text-slate-500 mt-1">Para questoes rapidas.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-800/60 pt-8">
                <h3 className="text-sm font-semibold text-white mb-3">Onde estamos</h3>
                <p className="text-sm text-slate-400">
                  Operamos remotamente com clientes em todo o territorio nacional. Reunioes presenciais mediante agendamento previo.
                </p>
              </div>
            </motion.div>

            {/* Right: booking card */}
            <motion.div {...inView(0.1)}>
              <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 md:p-10">
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  A forma mais rapida de comecar.
                </h2>
                <p className="text-slate-400 leading-relaxed mb-8 text-sm">
                  Marque diretamente uma chamada estrategica gratuita de 30 minutos. Analisamos o seu negocio e mostramos exatamente como o bot pode ajudar, sem compromisso.
                </p>

                <a
                  href="https://calendly.com/primescale-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all active:scale-[0.98]"
                >
                  Marcar Chamada Gratuita
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="text-center text-xs text-slate-500 mt-4">
                  Gratuito. Sem compromisso. Cancelamento simples.
                </p>

                <div className="mt-8 pt-8 border-t border-slate-800 grid grid-cols-3 gap-4 text-center">
                  {[
                    { val: '30 min', label: 'Duracao' },
                    { val: '0€', label: 'Custo' },
                    { val: '48h', label: 'Para comecar' },
                  ].map((s) => (
                    <div key={s.val}>
                      <p className="text-lg font-bold text-white">{s.val}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
