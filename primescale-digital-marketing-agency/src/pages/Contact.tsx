import { ArrowRight, Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="pt-32 pb-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactos</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Estamos prontos para ajudar o seu negócio a crescer. Entre em contacto connosco ou marque diretamente uma chamada estratégica.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Fale Connosco</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Tem dúvidas sobre os nossos serviços ou quer saber como podemos ajudar o seu negócio específico? A nossa equipa está disponível para responder a todas as suas questões.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-bold text-slate-900">Email</h3>
                    <p className="text-slate-600 mt-1">Envie-nos um email e responderemos em 24h.</p>
                    <a href="mailto:info@primescale.pt" className="text-blue-600 font-medium hover:text-blue-700 mt-2 inline-block">
                      info@primescale.pt
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-bold text-slate-900">Telefone</h3>
                    <a href="tel:+351919839748" className="text-blue-600 font-medium hover:text-blue-700 mt-2 inline-block">
                      +351 919839748
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking CTA Card */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100 flex flex-col justify-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-slate-50 rounded-tr-full -z-10"></div>
              
              <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-200 rotate-3">
                <MessageSquare className="h-10 w-10" />
              </div>
              
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                A forma mais rápida de começar
              </h2>
              
              <p className="text-slate-600 mb-10 leading-relaxed">
                Não perca tempo com emails de ida e volta. Marque diretamente uma chamada estratégica gratuita de 30 minutos com um dos nossos especialistas. Vamos analisar o seu negócio e mostrar-lhe o caminho para o crescimento.
              </p>
              
              <a
                href="https://calendly.com/primescale-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full"
              >
                Marcar Chamada Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <p className="mt-6 text-sm text-slate-500">
                100% Gratuito. Sem compromisso.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
