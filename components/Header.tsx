'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
      style={{
        background: 'rgba(8, 8, 10, 0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div className="flex items-center gap-2.5">
        <div
          className="w-7 h-7 flex items-center justify-center rounded-md"
          style={{ background: 'rgba(220, 60, 30, 0.15)', border: '1px solid rgba(220, 60, 30, 0.3)' }}
        >
          <Zap size={14} className="text-red-500" strokeWidth={2.5} />
        </div>
        <span
          className="text-sm font-bold tracking-[0.2em] uppercase"
          style={{ color: '#e8e8e8', fontFamily: 'ui-monospace, "Geist Mono", monospace', letterSpacing: '0.18em' }}
        >
          GLUTTON_AI
        </span>
      </div>

      <div className="flex items-center gap-6">
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'ui-monospace, monospace', letterSpacing: '0.15em' }}
        >
          SYSTEM ONLINE
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
      </div>
    </motion.header>
  );
}
