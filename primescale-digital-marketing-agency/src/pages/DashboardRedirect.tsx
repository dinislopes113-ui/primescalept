import { useEffect, useState } from 'react';

const DASHBOARD_URL: string =
  (import.meta.env.VITE_DASHBOARD_URL as string | undefined) ||
  'http://localhost:3010/dashboard';

export default function DashboardRedirect() {
  const [countdown, setCountdown] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(interval);
          window.location.href = DASHBOARD_URL;
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[100dvh] bg-slate-950 flex items-center justify-center px-4">
      <div className="text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2.5 mb-12">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-base">
            P
          </div>
          <span className="font-bold text-xl tracking-tight text-white">
            Prime<span className="text-blue-500">Scale</span>
          </span>
        </div>

        {/* Spinner */}
        <div className="relative w-16 h-16 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border-2 border-slate-800" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 animate-spin" />
        </div>

        <h1 className="text-xl font-semibold text-white mb-2">
          A entrar na Dashboard...
        </h1>
        <p className="text-sm text-slate-500">
          Redirecionar em {countdown} segundo{countdown !== 1 ? 's' : ''}.
        </p>

        {/* Manual link fallback */}
        <div className="mt-8">
          <a
            href={DASHBOARD_URL}
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4"
          >
            Clique aqui se nao for redirecionado
          </a>
        </div>
      </div>
    </div>
  );
}
