import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] bg-slate-950 flex items-center justify-center px-4 pt-[72px]">
      <div className="text-center max-w-md">
        <p className="text-[120px] font-black text-slate-800/60 leading-none select-none mb-4">404</p>
        <h1 className="text-2xl font-bold text-white mb-3">Pagina nao encontrada.</h1>
        <p className="text-slate-400 mb-8 text-sm">
          A pagina que procura nao existe ou foi movida.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full text-sm transition-all active:scale-[0.98]"
        >
          Voltar ao inicio
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
