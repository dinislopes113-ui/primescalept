import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LogoFull } from './Logo';

const NAV_LINKS = [
  { name: 'Bot IA', href: '/bot' },
  { name: 'Servicos', href: '/servicos' },
  { name: 'Sobre Nos', href: '/sobre-nos' },
  { name: 'Contactos', href: '/contactos' },
];

const FOOTER_LINKS = [
  { name: 'Bot IA', href: '/bot' },
  { name: 'Servicos', href: '/servicos' },
  { name: 'Sobre Nos', href: '/sobre-nos' },
  { name: 'Contactos', href: '/contactos' },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-950 text-white">
      {/* Nav */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/60' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <LogoFull iconSize={34} textSize="text-[16px]" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.href || location.pathname.startsWith(item.href + '/')
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/acesso"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-colors"
              >
                Dashboard
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} />
              </Link>
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="md:hidden bg-slate-900 border-b border-slate-800"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
                {NAV_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'bg-slate-800 text-white'
                        : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-2">
                  <Link
                    to="/acesso"
                    className="flex items-center justify-center gap-1.5 w-full px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-colors"
                  >
                    Acesso Dashboard
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/60 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center mb-4">
                <LogoFull iconSize={28} textSize="text-[14px]" />
              </Link>
              <p className="text-sm text-slate-500 leading-relaxed">
                Automacao com IA para negócios locais. WhatsApp Bot que capta leads e confirma marcacoes 24/7.
              </p>
            </div>

            {/* Produto */}
            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Produto</h3>
              <ul className="space-y-2.5">
                <li><Link to="/bot" className="text-sm text-slate-500 hover:text-white transition-colors">WhatsApp Bot IA</Link></li>
                <li><Link to="/bot#precos" className="text-sm text-slate-500 hover:text-white transition-colors">Precos</Link></li>
                <li><Link to="/bot#funcionalidades" className="text-sm text-slate-500 hover:text-white transition-colors">Funcionalidades</Link></li>
                <li><Link to="/acesso" className="text-sm text-slate-500 hover:text-white transition-colors">Acesso Dashboard</Link></li>
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Empresa</h3>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link to={item.href} className="text-sm text-slate-500 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Contacto</h3>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:info@primescale.pt" className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                    <Mail className="w-3.5 h-3.5 shrink-0" />
                    info@primescale.pt
                  </a>
                </li>
                <li>
                  <a href="tel:+351919839748" className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5 shrink-0" />
                    +351 919 839 748
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800/60 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-600">
              &copy; {new Date().getFullYear()} PrimeScale. Todos os direitos reservados.
            </p>
            <div className="flex gap-5 text-xs text-slate-600">
              <a href="#" className="hover:text-slate-400 transition-colors">Politica de Privacidade</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Termos e Condicoes</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
