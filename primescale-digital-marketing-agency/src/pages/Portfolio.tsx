import { ArrowRight, Target, BarChart3, Building2, Droplets, Wrench, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const projects = [
    {
      id: 'construction',
      client: 'Construtora Silva & Filhos',
      industry: 'Construção & Remodelações',
      challenge: 'A empresa dependia quase exclusivamente do passa-a-palavra. Precisavam de um fluxo constante de pedidos de orçamento para obras de remodelação de interiores.',
      solution: 'Implementámos uma estratégia de Google Ads focada em intenção de pesquisa local ("remodelação de casas [cidade]") + Landing Page otimizada para captura de orçamentos.',
      results: [
        { metric: '+215%', label: 'Pedidos de Orçamento' },
        { metric: '-35%', label: 'Custo por Lead' },
        { metric: '8', label: 'Novas Obras/Mês' }
      ],
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop'
    },
    {
      id: 'pools',
      client: 'Oásis Piscinas',
      industry: 'Instalação de Piscinas',
      challenge: 'A empresa tinha dificuldades em gerar leads qualificadas durante os meses de inverno para garantir a agenda cheia na primavera e verão.',
      solution: 'Criámos campanhas no Meta Ads (Facebook/Instagram) com ofertas de planeamento antecipado + funil de email marketing para nutrição de potenciais clientes.',
      results: [
        { metric: '45', label: 'Leads Qualificadas' },
        { metric: '4.2x', label: 'Retorno do Investimento' },
        { metric: '+60%', label: 'Vendas Fora de Época' }
      ],
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1576013551627-11971f36b9ea?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'hvac',
      client: 'ClimaTech Soluções',
      industry: 'Climatização & AVAC',
      challenge: 'A empresa precisava de aumentar os contratos de manutenção preventiva e instalações de ar condicionado para clientes residenciais e comerciais.',
      solution: 'Desenvolvemos um sistema de geração de leads com campanhas de pesquisa no Google e retargeting no Meta Ads para utilizadores que visitaram a página de serviços.',
      results: [
        { metric: '62', label: 'Novos Contratos' },
        { metric: '15', label: 'Instalações/Mês' },
        { metric: '+85%', label: 'Crescimento Anual' }
      ],
      icon: Wrench,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop'
    },
    {
      id: 'solar',
      client: 'EcoEnergia Solar',
      industry: 'Energias Renováveis',
      challenge: 'A empresa enfrentava forte concorrência local e os anúncios antigos não estavam a gerar contactos com real intenção de compra.',
      solution: 'Reformulámos toda a estratégia digital: nova Landing Page com simulador de poupança + campanhas de Google Ads altamente segmentadas por código postal.',
      results: [
        { metric: '+180%', label: 'Leads Fechadas' },
        { metric: '4.8', label: 'Classificação Google' },
        { metric: '+45%', label: 'Faturação Mensal' }
      ],
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="pt-32 pb-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Casos de Sucesso</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Resultados reais de negócios locais que confiaram na PrimeScale para escalar as suas vendas.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {projects.map((project, index) => (
            <div key={project.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                  <project.icon className="h-4 w-4" />
                  {project.industry}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{project.client}</h2>
                
                <div className="space-y-4 pt-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Target className="h-5 w-5 text-red-500" />
                      O Desafio
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{project.challenge}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-blue-500" />
                      A Solução
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{project.solution}</p>
                  </div>
                </div>
                
                {/* Results Grid */}
                <div className="pt-6 grid grid-cols-3 gap-4">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
                      <p className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{result.metric}</p>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{result.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 relative shadow-xl">
                  <img 
                    src={project.image} 
                    alt={`Projeto ${project.client}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
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
            Quer ser o nosso próximo caso de sucesso?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Descubra como podemos replicar estes resultados no seu negócio. Agende uma chamada estratégica gratuita.
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
