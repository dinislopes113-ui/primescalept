import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Mail, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Página Inicial', href: '/' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Sobre Nós', href: '/sobre-nos' },
    // { name: 'Portefólio', href: '/portefolio' }, // Temporariamente oculto
    { name: 'Contactos', href: '/contactos' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-white">
      {/* Navigation */}
      <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Placeholder */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-blue-600 transition-colors">
                  P
                </div>
                <span className="font-bold text-xl tracking-tight text-slate-900">
                  Prime<span className="text-blue-600">Scale</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === item.href ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://calendly.com/primescale-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-blue-600 transition-colors shadow-sm"
              >
                Marcar Chamada
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
              >
                <span className="sr-only">Abrir menu principal</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100">
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    location.pathname === item.href
                      ? 'bg-slate-50 text-blue-600'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-6 px-3">
                <a
                  href="https://calendly.com/primescale-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-900 hover:bg-blue-600"
                >
                  Marcar Chamada Gratuita
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-slate-900 font-bold text-lg">
                  P
                </div>
                <span className="font-bold text-xl tracking-tight text-white">
                  Prime<span className="text-blue-400">Scale</span>
                </span>
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Ajudamos negócios locais a crescer e a obter mais clientes através de publicidade paga e estratégia de marketing digital.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Navegação</h3>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-sm hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Serviços</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/servicos" className="text-sm hover:text-white transition-colors">
                    Gestão de Anúncios Pagos
                  </Link>
                </li>
                <li>
                  <Link to="/servicos" className="text-sm hover:text-white transition-colors">
                    Gestão de Redes Sociais
                  </Link>
                </li>
                <li>
                  <Link to="/servicos" className="text-sm hover:text-white transition-colors">
                    Estratégia de Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/servicos" className="text-sm hover:text-white transition-colors">
                    Geração de Leads
                  </Link>
                </li>
                <li>
                  <Link to="/servicos" className="text-sm hover:text-white transition-colors">
                    Criação de Websites
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contactos</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mail className="flex-shrink-0 h-5 w-5 text-slate-400 mr-3" />
                  <span className="text-sm">info@primescale.pt</span>
                </li>
                <li className="flex items-start">
                  <Phone className="flex-shrink-0 h-5 w-5 text-slate-400 mr-3" />
                  <span className="text-sm">+351 919839748</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} PrimeScale. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos e Condições</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
