import { ArrowRight, MessageSquare, Users, Calendar, BarChart3, Zap, Shield, Clock, CheckCircle, ChevronDown } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import WhatsAppMock from '../components/WhatsAppMock';

const FEATURES = [
  {
    icon: MessageSquare,
    title: 'Respostas inteligentes por IA',
    desc: 'O bot aprende com os dados do seu negocio e responde como um atendente humano experiente, sem desviar do tema.',
  },
  {
    icon: Users,
    title: 'Captacao e qualificacao de leads',
    desc: 'Cada conversa gera um lead com nome, numero e servico de interesse. Tudo organizado na dashboard por score de conversao.',
  },
  {
    icon: Calendar,
    title: 'Marcacoes automaticas',
    desc: 'Confirma, reagenda e cancela marcacoes em tempo real. O cliente recebe confirmacao e lembrete automatico.',
  },
  {
    icon: BarChart3,
    title: 'Dashboard de gestao',
    desc: 'Visao completa do seu pipeline de clientes, metricas de conversacao e desempenho do bot em tempo real.',
  },
  {
    icon: Clock,
    title: 'Memoria de conversas',
    desc: 'O bot recorda o historico de cada cliente, tornando cada interacao mais personalizada e eficiente.',
  },
  {
    icon: Shield,
    title: 'Respostas controladas',
    desc: 'O bot responde apenas sobre o seu negocio. Perguntas fora do contexto sao redirecionadas adequadamente.',
  },
];

const PLANS = [
  {
    name: 'Starter',
    price: '175',
    period: '/mes',
    desc: 'Ideal para comecar a automatizar o atendimento.',
    features: [
      '1 numero WhatsApp',
      'Ate 500 conversas por mes',
      'Respostas IA 24/7',
      'Captacao de leads',
      'Dashboard basica',
      'Suporte por email',
      'Periodo de teste 14 dias',
    ],
    notIncluded: ['Marcacoes automaticas', 'Relatorios mensais', 'Integracao CRM'],
    highlight: false,
    cta: 'Comecar',
  },
  {
    name: 'Growth',
    price: '350',
    period: '/mes',
    desc: 'O mais escolhido por clinicas, saloes e consultórios.',
    features: [
      '1 numero WhatsApp',
      'Conversas ilimitadas',
      'Respostas IA 24/7',
      'Captacao de leads',
      'Marcacoes automaticas',
      'Dashboard completa',
      'Relatorios mensais',
      'Suporte prioritario',
      'Periodo de teste 14 dias',
    ],
    notIncluded: ['Integracao CRM', '2 numeros WhatsApp'],
    highlight: true,
    cta: 'Comecar',
  },
  {
    name: 'Premium',
    price: '525',
    period: '/mes',
    desc: 'Para negocios com volume alto ou multiplas unidades.',
    features: [
      '2 numeros WhatsApp',
      'Conversas ilimitadas',
      'Tudo do Growth',
      'Integracao CRM',
      'Setup personalizado',
      'Gestor de conta dedicado',
      'SLA de resposta garantido',
      'Periodo de teste 14 dias',
    ],
    notIncluded: [],
    highlight: false,
    cta: 'Falar com equipa',
  },
];

const FAQS = [
  {
    q: 'O bot funciona com o meu numero de WhatsApp atual?',
    a: 'Sim. Conectamos ao seu numero de WhatsApp Business existente sem necessidade de mudar o numero ou perder o historico de conversas.',
  },
  {
    q: 'Quanto tempo demora a configuracao inicial?',
    a: 'Entre 24 a 48 horas apos recebermos as informacoes do seu negocio. Tratamos de toda a configuracao, sem trabalho da sua parte.',
  },
  {
    q: 'O bot responde a qualquer pergunta dos clientes?',
    a: 'Nao, propositadamente. O bot responde apenas sobre os servicos, precos, horarios e marcacoes do seu negocio. Questoes fora desse contexto sao gentilmente redirecionadas, mantendo a qualidade do atendimento.',
  },
  {
    q: 'Consigo ver as conversas em tempo real?',
    a: 'Sim. A dashboard mostra todas as conversas, leads captadas e marcacoes em tempo real. Recebe tambem notificacoes para situacoes que requeiram a sua atencao.',
  },
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Sim. Sem contratos anuais nem penalizacoes. Cancela com 30 dias de aviso previo.',
  },
  {
    q: 'Que acontece durante o periodo de teste?',
    a: 'Durante os 14 dias tem acesso completo ao plano escolhido. Nos configuramos o bot com os dados do seu negocio e acompanhamos o desempenho. Sem cartao de credito necessario para comecar.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-800/60">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-sm md:text-base font-medium text-white group-hover:text-blue-400 transition-colors pr-4">
          {q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <p className="pb-5 text-sm text-slate-400 leading-relaxed pr-8">{a}</p>
      )}
    </div>
  );
}

export default function Bot() {
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
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-blue-600/8 blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 {...inView()} className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.08] tracking-tight mb-5">
                O atendente que
                <br />
                <span className="text-blue-500">nunca descansa.</span>
              </motion.h1>
              <motion.p {...inView(0.08)} className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
                Bot de WhatsApp alimentado por IA generativa. Configurado com os dados reais do seu negocio, para responder como um especialista da sua equipa.
              </motion.p>
              <motion.div {...inView(0.14)} className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://calendly.com/primescale-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all active:scale-[0.98]"
                >
                  Marcar Chamada
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#precos"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all active:scale-[0.98] border border-slate-700/60"
                >
                  Ver Precos
                </a>
              </motion.div>
            </div>
            <motion.div {...inView(0.1)} className="flex justify-center lg:justify-end">
              <WhatsAppMock />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────── */}
      <section id="funcionalidades" className="py-24 lg:py-32 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...inView()} className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Funcionalidades que fazem a diferenca.
            </h2>
            <p className="text-slate-400 text-lg max-w-lg">
              Cada detalhe foi pensado para o contexto de negocios locais portugueses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800/40 rounded-2xl overflow-hidden border border-slate-800/40">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                {...inView(i * 0.06)}
                className="bg-slate-900/80 p-6 hover:bg-slate-800/60 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/15 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-600/25 transition-colors">
                  <f.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS (vertical timeline) ────────────── */}
      <section className="py-24 lg:py-32 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...inView()} className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Simples de comecar.
            </h2>
            <p className="text-slate-400 text-lg">Tres passos. Zero codigo.</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[27px] top-10 bottom-10 w-px bg-gradient-to-b from-blue-600/60 via-blue-600/20 to-transparent hidden md:block" />
            <div className="space-y-10">
              {[
                {
                  step: '01',
                  title: 'Partilha os dados do negocio',
                  desc: 'Enviamos um formulario simples: servicos, horarios, precos, tom de voz e instrucoes especificas. Sem tecnicalidades.',
                },
                {
                  step: '02',
                  title: 'Nos configuramos tudo',
                  desc: 'Em 48h o bot esta treinado com os dados do seu negocio, testado e pronto. Configuramos a ligacao ao WhatsApp e fazemos o onboarding com a sua equipa.',
                },
                {
                  step: '03',
                  title: 'Ativa e monitoriza',
                  desc: 'O bot entra em producao e comeca a atender. Acompanha tudo na dashboard: conversas, leads e marcacoes em tempo real. Pode ajustar a qualquer momento.',
                },
              ].map((s, i) => (
                <motion.div key={s.step} {...inView(i * 0.1)} className="flex gap-6 md:gap-8 items-start">
                  <div className="w-14 h-14 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center text-blue-400 font-black text-sm shrink-0 relative z-10">
                    {s.step}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm md:text-base">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────── */}
      <section id="precos" className="py-24 lg:py-32 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...inView()} className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Planos e precos.</h2>
            <p className="text-slate-400 text-lg">
              Sem contratos anuais. Cancela a qualquer momento com 30 dias de aviso.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                {...inView(i * 0.08)}
                className={`rounded-2xl p-7 relative ${
                  plan.highlight
                    ? 'bg-blue-600 ring-1 ring-blue-400/30'
                    : 'bg-slate-900 border border-slate-800'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-blue-600 text-xs font-bold rounded-full shadow">
                    Mais popular
                  </span>
                )}

                <div className="mb-6">
                  <p className={`text-sm font-semibold mb-2 ${plan.highlight ? 'text-blue-200' : 'text-slate-400'}`}>
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-black text-white">€{plan.price}</span>
                    <span className={`text-sm ${plan.highlight ? 'text-blue-200' : 'text-slate-500'}`}>{plan.period}</span>
                  </div>
                  <p className={`text-sm ${plan.highlight ? 'text-blue-100' : 'text-slate-400'}`}>{plan.desc}</p>
                </div>

                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlight ? 'text-white/80' : 'text-blue-500'}`} />
                      <span className={plan.highlight ? 'text-blue-50' : 'text-slate-300'}>{f}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm opacity-40">
                      <span className="w-4 h-4 shrink-0 mt-0.5 flex items-center justify-center text-slate-500">-</span>
                      <span className={plan.highlight ? 'text-blue-200' : 'text-slate-500'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://calendly.com/primescale-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 rounded-full font-semibold text-sm transition-all active:scale-[0.98] ${
                    plan.highlight
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700/60'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.p {...inView(0.28)} className="text-center text-sm text-slate-500 mt-8">
            Todos os planos incluem 14 dias de teste gratuito, onboarding e configuracao inicial.
          </motion.p>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...inView()} className="text-3xl md:text-4xl font-bold text-white mb-10">
            Perguntas frequentes.
          </motion.h2>
          <div>
            {FAQS.map((faq, i) => (
              <motion.div key={faq.q} {...inView(i * 0.05)}>
                <FaqItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-blue-600/10 blur-[80px] rounded-full" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 {...inView()} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comece o seu periodo de teste gratuito.
          </motion.h2>
          <motion.p {...inView(0.08)} className="text-slate-400 text-lg mb-10">
            14 dias sem risco. Cancelamento simples. Configuracao e onboarding incluidos.
          </motion.p>
          <motion.div {...inView(0.14)}>
            <a
              href="https://calendly.com/primescale-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all text-base active:scale-[0.98]"
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
