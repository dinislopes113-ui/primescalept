import { ArrowRight, CheckCircle2, TrendingUp, Users, Target, BarChart3, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-900/[0.04] dark:bg-bottom dark:border-b dark:border-slate-100/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
              Transformamos o seu negócio local numa <span className="text-blue-600">máquina de clientes</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Ajudamos empresas a crescer de forma previsível através de publicidade paga e estratégias de marketing digital comprovadas. Construímos um fluxo constante de clientes qualificados para que se possa focar no que realmente importa: gerir e expandir o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="https://calendly.com/primescale-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Marcar Chamada Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link
                to="/servicos"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                Ver Serviços
              </Link>
            </div>
            <div className="mt-10 flex items-center justify-center gap-2 text-sm text-slate-500 font-medium">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Sem compromisso</span>
              <span className="mx-2">•</span>
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Estratégia personalizada</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              O seu negócio está estagnado?
            </h2>
            <p className="text-lg text-slate-600">
              Muitos negócios locais lutam diariamente com os mesmos problemas. Reconhece algum destes cenários?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Falta de clientes consistentes',
                description: 'Tem meses excelentes e meses terríveis. Não consegue prever a faturação do próximo mês com segurança.',
                icon: Users,
              },
              {
                title: 'Dependência de recomendações',
                description: 'O passa-a-palavra é ótimo, mas não é escalável. Não tem controlo sobre quando o próximo cliente vai aparecer.',
                icon: MessageSquare,
              },
              {
                title: 'Anúncios sem retorno',
                description: 'Já tentou "impulsionar publicações" ou fazer anúncios, mas sentiu que estava apenas a queimar dinheiro.',
                icon: TrendingUp,
              },
            ].map((problem, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
                  <problem.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{problem.title}</h3>
                <p className="text-slate-600 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section (Growth System) */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O Sistema de Crescimento PrimeScale
            </h2>
            <p className="text-lg text-slate-400">
              Uma metodologia testada e comprovada para transformar desconhecidos em clientes fiéis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>

            {[
              {
                step: '01',
                title: 'Atração',
                description: 'Criamos anúncios altamente segmentados no Meta e Google para atrair o seu cliente ideal.',
              },
              {
                step: '02',
                title: 'Captura',
                description: 'Direcionamos o tráfego para páginas otimizadas para converter visitantes em leads.',
              },
              {
                step: '03',
                title: 'Nutrição',
                description: 'Implementamos sistemas de acompanhamento para aquecer os contactos até estarem prontos a comprar.',
              },
              {
                step: '04',
                title: 'Conversão',
                description: 'Entregamos-lhe clientes qualificados, prontos para fechar negócio consigo.',
              },
            ].map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-blue-900/50 border-4 border-slate-900">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Como podemos ajudar o seu negócio
              </h2>
              <p className="text-lg text-slate-600">
                Soluções completas de marketing digital focadas exclusivamente em gerar resultados reais e mensuráveis.
              </p>
            </div>
            <Link
              to="/servicos"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Ver todos os serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Gestão de Anúncios Pagos',
                description: 'Campanhas de alta performance no Facebook, Instagram e Google Ads para gerar leads qualificadas.',
                icon: Target,
              },
              {
                title: 'Gestão de Redes Sociais',
                description: 'Criação de conteúdo estratégico e gestão da sua presença online para construir autoridade e confiança.',
                icon: Users,
              },
              {
                title: 'Websites de Conversão',
                description: 'Desenvolvimento de landing pages e websites rápidos, modernos e otimizados para converter visitantes em clientes.',
                icon: BarChart3,
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                <Link to="/servicos" className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors inline-flex items-center">
                  Saber mais <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Porquê escolher a PrimeScale?
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Não somos apenas mais uma agência que promete "likes" e "alcance". Somos o seu parceiro de crescimento focado no que realmente importa: o aumento da sua faturação.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Estratégias orientadas a resultados',
                    description: 'O nosso sucesso é medido pelo seu sucesso. Focamo-nos em métricas de negócio reais (leads, vendas, ROI) e não em métricas de vaidade.',
                  },
                  {
                    title: 'Acompanhamento contínuo',
                    description: 'Não lançamos campanhas e desaparecemos. Otimizamos diariamente e enviamos relatórios claros sobre o desempenho do seu investimento.',
                  },
                  {
                    title: 'Foco em crescimento real',
                    description: 'Trabalhamos como uma extensão da sua equipa, compreendendo o seu negócio a fundo para criar estratégias que geram crescimento sustentável.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                  alt="Equipa a trabalhar em estratégia" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent"></div>
              </div>
              
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Aumento médio</p>
                    <p className="text-2xl font-bold text-slate-900">+145%</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600">Em leads qualificadas nos primeiros 90 dias.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto para escalar o seu negócio?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Marque uma chamada estratégica gratuita de 30 minutos. Vamos analisar o seu negócio e mostrar-lhe exatamente como podemos ajudar a gerar mais clientes.
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
          <p className="mt-6 text-sm text-blue-200">
            Sem compromisso. Apenas valor e estratégia para o seu negócio.
          </p>
        </div>
      </section>
    </div>
  );
}
