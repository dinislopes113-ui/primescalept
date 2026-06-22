import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type Msg = { id: number; type: 'user' | 'bot'; text: string; time: string };

const MESSAGES: Msg[] = [
  { id: 1, type: 'user', text: 'Olá! Queria marcar uma sessão de crioterapia esta semana', time: '14:32' },
  { id: 2, type: 'bot',  text: 'Olá! Bem-vinda. Temos disponibilidade na quinta às 14h ou sexta às 10h. Qual prefere?', time: '14:32' },
  { id: 3, type: 'user', text: 'Quinta às 14h, obrigada!', time: '14:33' },
  { id: 4, type: 'bot',  text: 'Marcação confirmada para quinta, 19 Jun às 14h00. Enviamos lembrete amanha.', time: '14:33' },
];

export default function WhatsAppMock() {
  const [shown, setShown] = useState<Set<number>>(new Set());
  const [isTyping, setIsTyping] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const runCycle = () => {
      if (!mountedRef.current) return;
      setShown(new Set());
      setIsTyping(false);

      let t = 700;

      for (const msg of MESSAGES) {
        const id = msg.id;
        if (msg.type === 'bot') {
          const t1 = t;
          timers.push(setTimeout(() => { if (mountedRef.current) setIsTyping(true); }, t1));
          t += 1300;
          const t2 = t;
          timers.push(setTimeout(() => {
            if (!mountedRef.current) return;
            setIsTyping(false);
            setShown((prev) => new Set([...prev, id]));
          }, t2));
        } else {
          const tx = t;
          timers.push(setTimeout(() => {
            if (mountedRef.current) setShown((prev) => new Set([...prev, id]));
          }, tx));
        }
        t += 1800;
      }

      const tid = setTimeout(runCycle, t + 2800);
      timers.push(tid);
    };

    runCycle();
    return () => {
      mountedRef.current = false;
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[320px] mx-auto select-none">
      <div
        className="rounded-3xl overflow-hidden border border-slate-700/40"
        style={{
          background: '#111b21',
          boxShadow: '0 0 80px rgba(37,99,235,0.18), 0 30px 60px rgba(0,0,0,0.6)',
        }}
      >
        {/* Status bar */}
        <div className="bg-[#202c33] px-5 pt-3 pb-1 flex items-center justify-between">
          <span className="text-[10px] font-semibold text-slate-300">14:33</span>
          <div className="flex items-center gap-1">
            <div className="w-3.5 h-2 border border-slate-400 rounded-[2px] relative">
              <div className="absolute inset-[1.5px] right-auto w-[55%] bg-green-400 rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* WA header */}
        <div className="bg-[#202c33] px-4 pb-3 flex items-center gap-3 border-b border-white/5">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
            C
          </div>
          <div>
            <p className="text-white text-[13px] font-semibold leading-tight">Estetica Lisboa</p>
            <p className="text-green-400 text-[10px]">online</p>
          </div>
        </div>

        {/* Chat area */}
        <div className="bg-[#0d1117] px-3 py-3 space-y-2" style={{ minHeight: 272 }}>
          <AnimatePresence>
            {MESSAGES.map((msg) =>
              shown.has(msg.id) ? (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[82%] rounded-xl px-3 py-1.5 text-[12px] leading-relaxed ${
                      msg.type === 'user'
                        ? 'bg-[#005c4b] text-white rounded-tr-none'
                        : 'bg-[#202c33] text-[#e9edef] rounded-tl-none'
                    }`}
                  >
                    <span>{msg.text}</span>
                    <span
                      className={`text-[9.5px] ml-2 float-right mt-1 ${
                        msg.type === 'user' ? 'text-[#53d769]/60' : 'text-slate-500'
                      }`}
                    >
                      {msg.time}
                      {msg.type === 'user' && (
                        <span className="ml-0.5 text-blue-400"> ✓✓</span>
                      )}
                    </span>
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex justify-start"
              >
                <div className="bg-[#202c33] rounded-xl rounded-tl-none px-3 py-2 flex items-center gap-1">
                  {[0, 0.18, 0.36].map((d) => (
                    <motion.div
                      key={d}
                      className="w-1.5 h-1.5 rounded-full bg-slate-400"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.55, repeat: Infinity, delay: d, ease: 'easeInOut' }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input bar */}
        <div className="bg-[#202c33] px-3 py-2 flex items-center gap-2">
          <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-1.5 text-[11px] text-slate-500">
            Mensagem
          </div>
          <div className="w-8 h-8 rounded-full bg-[#00a884] flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
              <path d="M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
