import { Link } from 'react-router-dom';
import { ArrowRight, Zap, MessageSquare, Calendar, BarChart3, Users, Clock, CheckCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import WhatsAppMock from '../components/WhatsAppMock';

const MARQUEE_ITEMS = [
  'Captacao de leads',
  'Marcacoes automaticas',
  'Respostas 24/7',
  'Dashboard em tempo real',
  'Zero recrutamentos',
  'Qualificacao de clientes',
  'Configuracao em 48h',
  'Multi-servico',
  'Historial de conversas',
  'Notificacoes ao dono',
];

const BENTO = [
  {
    id: 'sempre',
    col: 'md:col-span-2',
    style: { background: 'linear-gradient(135deg, #1e3a8a 0%, #312e81 60%, #1e1b4b 100%)' },
    icon: Clock,
    label: 'Sempre disponivel',
    desc: 'O bot responde a qualquer hora, incluindo fins de semana e feriados. Sem pausas.',
    big: '24/7',
  },
  {
    id: 'leads',
    col: 'md:col-span-1',
    bg: 'bg-slate-800',
    imageSeed: 'beauty-salon-clients',
    icon: Users,
    label: 'Captacao de leads',
    desc: 'Cada conversa gera um lead qualificado na sua dashboard.',
    big: null,
  },
  {
    id: 'marcacoes',
    col: 'md:col-span-1',
    bg: 'bg-slate-900',
    icon: Calendar,
    label: 'Marcacoes sem esforco',
    desc: 'Confirma, reagenda e cancela marcacoes diretamente no WhatsApp.',
    big: null,
  },
  {
    id: 'dashboard',
    col: 'md:col-span-1',
    bg: 'bg-slate-800',
    icon: BarChart3,
    label: 'Dashboard completa',
    desc: 'Metricas, pipeline de clientes e conversas num so ecrã.',
    big: null,
  },
  {
    id: 'staff',
    col: 'md:col-span-1',
    style: { background: 'linear-gradient(135deg, #0c4a6e 0%, #164e63 100%)' },
    icon: Zap,
    label: 'Zero funcionarios extra',
    desc: 'O bot substitui um atendente a tempo inteiro.',
    big: '€0',
  },
];

const STEPS = [
  {
    n: '01',
    title: 'Configuramos o bot',
    desc: 'Em 48 horas configuramos o bot com a informacao do seu negocio: servicos, horarios e estilo de resposta.',
    icon: MessageSquare,
  },
  {
    n: '02',
    title: 'Liga ao WhatsApp',
    desc: 'Conectamos ao seu numero de WhatsApp Business existente, sem mudar o numero nem perder contactos.',
    icon: Zap,
  },
  {
    n: '03',
    title: 'O bot faz o resto',
    desc: 'A partir dai o bot atende, qualifica e agenda por si. Acompanhe tudo na dashboard em tempo real.',
    icon: BarChart3,
  },
];

const PLANS = [
  {
    name: 'Starter',
    price: '175',
    desc: 'Para negocios a comecar com automacao.',
    features: ['1 numero WhatsApp', 'Ate 500 conversas/mes', 'Captacao de leads', 'Dashboard basica', 'Suporte por email'],
    cta: 'Comecar',
    highlight: false,
    border: false,
  },
  {
    name: 'Growth',
    price: '350',
    desc: 'O plano mais escolhido por clinicas e saloes.',
    features: ['1 numero WhatsApp', 'Conversas ilimitadas', 'Marcacoes automaticas', 'Dashboard completa', 'Relatorios mensais', 'Suporte prioritario'],
    cta: 'Comecar',
    highlight: true,
    border: false,
  },
  {
    name: 'Premium',
    price: '525',
    desc: 'Para negocios com volume alto e multiplos espacos.',
    features: ['2 numeros WhatsApp', 'Tudo do Growth', 'Integracao CRM', 'Setup personalizado', 'Gestor de conta dedicado', 'SLA garantido'],
    cta: 'Falar com equipa',
    highlight: false,
    border: true,
  },
];

export default function Home() {
  const reduce = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  const inView = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <div className="flex flex-col bg-slate-950 text-white">

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-[72px]">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-600/6 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: copy */}
            <div className="order-1 lg:order-1">
              <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/15 border border-blue-500/25 text-blue-400 text-sm font-medium mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                Bot IA para WhatsApp
              </motion.div>

              <motion.h1
                {...fadeUp(0.08)}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold leading-[1.06] tracking-tight mb-6"
              >
                Ganhe clientes
                <br />
                <span className="text-blue-500">enquanto dorme.</span>
              </motion.h1>

              <motion.p {...fadeUp(0.16)} className="text-lg text-slate-400 leading-relaxed mb-8 max-w-[480px]">
                Bot de IA no WhatsApp que capta leads, responde e confirma marcacoes automaticamente.
              </motion.p>

              <motion.div {...fadeUp(0.22)} className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/bot"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all active:scale-[0.98]"
                >
                  Ver o Bot em Acao
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://calendly.com/primescale-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all active:scale-[0.98] border border-slate-700/60"
                >
                  Marcar Chamada
                </a>
              </motion.div>

              <motion.div {...fadeUp(0.28)} className="flex items-center gap-6 mt-8 pt-8 border-t border-slate-800/60">
                {[
                  { val: '24/7', label: 'Disponivel' },
                  { val: '48h', label: 'Para comecar' },
                  { val: '100%', label: 'Automatico' },
                ].map((s) => (
                  <div key={s.val}>
                    <p className="text-xl font-bold text-white">{s.val}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: WhatsApp mock */}
            <motion.div
              {...fadeUp(0.12)}
              className="order-2 lg:order-2 flex justify-center lg:justify-end relative"
            >
              <div className="relative">
                <WhatsAppMock />
                {/* Floating stat card top-left */}
                <motion.div
                  initial={reduce ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute -left-6 top-16 hidden lg:block bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-xl px-3.5 py-2.5 shadow-xl"
                >
                  <p className="text-[11px] text-slate-400">Satisfacao media</p>
                  <p className="text-lg font-bold text-white">4.9 / 5.0</p>
                </motion.div>
                {/* Floating stat card bottom-right */}
                <motion.div
                  initial={reduce ? false : { opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="absolute -right-6 bottom-20 hidden lg:block bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-xl px-3.5 py-2.5 shadow-xl"
                >
                  <p className="text-[11px] text-slate-400">Leads este mes</p>
                  <p className="text-lg font-bold text-green-400">+127</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────── */}
      <div className="border-y border-slate-800/60 py-4 overflow-hidden bg-slate-900/40">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="flex gap-0 whitespace-nowrap"
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-6 text-sm text-slate-400 font-medium">
              <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── BENTO FEATURES ──────────────────────────────── */}
      <section id="funcionalidades" className="py-24 lg:py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...inView()} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Tudo o que o seu negocio precisa.
            </h2>
            <p className="text-slate-400 text-lg max-w-xl">
              Uma plataforma completa de atendimento, captacao e gestao de clientes via WhatsApp.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {BENTO.map((cell, i) => (
              <motion.div
                key={cell.id}
                {...inView(i * 0.07)}
                className={`${cell.col ?? ''} rounded-2xl p-6 relative overflow-hidden border border-slate-700/30 ${cell.bg ?? ''}`}
                style={cell.style}
                whileHover={reduce ? {} : { scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                {cell.imageSeed && (
                  <div className="absolute inset-0">
                    <img
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&q=80"
                      alt=""
                      className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/80 to-transparent" />
                  </div>
                )}
                <div className="relative z-10 flex flex-col h-full min-h-[160px]">
                  <div className="flex items-start justify-between mb-auto">
                    <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/20 flex items-center justify-center">
                      <cell.icon className="w-4 h-4 text-blue-400" />
                    </div>
                    {cell.big && (
                      <span className="text-4xl md:text-5xl font-black text-white/90 leading-none">{cell.big}</span>
                    )}
                  </div>
                  <div className="mt-6">
                    <h3 className="text-base font-semibold text-white mb-1.5">{cell.label}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{cell.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...inView()} className="mb-16 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Pronto em 48 horas.
            </h2>
            <p className="text-slate-400 text-lg">
              Sem codigo, sem integrações complexas. Nos tratamos de tudo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line desktop */}
            <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-blue-600/40 to-transparent" />

            {STEPS.map((step, i) => (
              <motion.div key={step.n} {...inView(i * 0.1)} className="relative">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center relative z-10">
                    <step.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-2xl font-black text-slate-700">{step.n}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────── */}
      <section id="precos" className="py-24 lg:py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...inView()} className="mb-14 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Precos simples e previsíveis.
            </h2>
            <p className="text-slate-400 text-lg">
              Sem contratos anuais. Cancela a qualquer momento.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                {...inView(i * 0.08)}
                className={`rounded-2xl p-7 relative ${
                  plan.highlight
                    ? 'bg-blue-600'
                    : plan.border
                    ? 'bg-slate-900 border-2 border-blue-500/50'
                    : 'bg-slate-900 border border-slate-800'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-blue-600 text-xs font-bold rounded-full">
                    Mais popular
                  </span>
                )}
                <div className="mb-6">
                  <p className={`text-sm font-semibold mb-1 ${plan.highlight ? 'text-blue-200' : 'text-slate-400'}`}>
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-black text-white">€{plan.price}</span>
                    <span className={`text-sm ${plan.highlight ? 'text-blue-200' : 'text-slate-500'}`}>/mes</span>
                  </div>
                  <p className={`text-sm ${plan.highlight ? 'text-blue-100' : 'text-slate-400'}`}>{plan.desc}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlight ? 'text-white/80' : 'text-blue-500'}`} />
                      <span className={plan.highlight ? 'text-blue-50' : 'text-slate-300'}>{f}</span>
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

          <motion.p {...inView(0.25)} className="text-center text-sm text-slate-500 mt-8">
            Todos os planos incluem periodo de teste de 14 dias. Configuracao e onboarding incluidos.
          </motion.p>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────── */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-blue-600/10 blur-[80px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 {...inView()} className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Pronto para automatizar o seu atendimento?
          </motion.h2>
          <motion.p {...inView(0.08)} className="text-lg text-slate-400 mb-10">
            Fale com a nossa equipa e veja o bot a trabalhar com os dados do seu negocio.
          </motion.p>
          <motion.div {...inView(0.14)} className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://calendly.com/primescale-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all active:scale-[0.98]"
            >
              Marcar Chamada Gratuita
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/bot"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all active:scale-[0.98] border border-slate-700/60"
            >
              Explorar o Bot
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
