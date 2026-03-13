import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center bg-slate-50">
      <div className="relative">
        <h1 className="text-9xl md:text-[12rem] font-black text-slate-200 tracking-tighter">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full border border-slate-100 shadow-sm">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Erro</span>
          </div>
        </div>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-8 mb-4">
        Página não encontrada
      </h2>
      
      <p className="text-lg text-slate-600 max-w-md mx-auto mb-10 leading-relaxed">
        Desculpe, a página que procura não existe, foi movida ou o endereço está incorreto.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:text-slate-900 transition-all shadow-sm hover:shadow"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar atrás
        </button>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          <Home className="w-5 h-5 mr-2" />
          Página Inicial
        </Link>
      </div>
    </div>
  );
}
