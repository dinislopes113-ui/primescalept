import { ArrowRight, CheckCircle2, TrendingUp, Users, Target, Award, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-800/[0.2] bg-[bottom_1px_center]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            A Nossa Missão
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ajudar negócios locais a crescer de forma previsível, rentável e escalável através de estratégias de marketing digital focadas em resultados reais.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Quem Somos
              </h2>
              <div className="prose prose-lg text-slate-600">
                <p>
                  A PrimeScale nasceu de uma frustração comum: ver excelentes negócios locais com serviços incríveis a lutar para conseguir clientes, enquanto concorrentes inferiores dominavam o mercado apenas porque sabiam fazer marketing.
                </p>
                <p>
                  Acreditamos que o marketing digital não deve ser um "custo" ou uma "aposta", mas sim um investimento previsível. Se colocar 1€ numa máquina, deve saber exatamente quanto vai sair do outro lado.
                </p>
                <p>
                  Não somos uma agência tradicional focada em métricas de vaidade como "gostos" ou "alcance". O nosso único foco é o crescimento do seu negócio: mais leads qualificadas, mais vendas e maior rentabilidade.
                </p>
              </div>
              <div className="pt-4">
                <a
                  href="https://calendly.com/primescale-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                >
                  Conhecer a Equipa
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 relative shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                  alt="Equipa PrimeScale em reunião" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Os Nossos Valores
            </h2>
            <p className="text-lg text-slate-600">
              Os princípios que guiam o nosso trabalho diário e a nossa relação com cada cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Transparência Total',
                description: 'Sem métricas confusas ou relatórios complexos. Mostramos exatamente onde o seu dinheiro está a ser investido e qual o retorno gerado.',
                icon: Search,
              },
              {
                title: 'Foco em Resultados',
                description: 'Não celebramos "likes" ou "impressões". Celebramos leads qualificadas, vendas fechadas e crescimento do seu negócio.',
                icon: Target,
              },
              {
                title: 'Parceria Verdadeira',
                description: 'Trabalhamos como uma extensão da sua equipa. O seu sucesso é o nosso sucesso. Se o seu negócio não crescer, nós também não crescemos.',
                icon: Users,
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-center">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Descubra como a nossa equipa pode ajudar o seu negócio a alcançar o próximo nível.
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
