'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-12 px-8 flex flex-col items-center gap-4"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.04)',
        background: '#08080a',
      }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(220,60,30,0.3), transparent)' }}
      />

      <p
        className="text-sm tracking-[0.35em] uppercase"
        style={{
          color: 'rgba(255,255,255,0.18)',
          fontFamily: 'ui-monospace, "Geist Mono", monospace',
          letterSpacing: '0.3em',
        }}
      >
        Consume.&nbsp;&nbsp;Obey.&nbsp;&nbsp;Digest.
      </p>

      <p
        className="text-xs"
        style={{
          color: 'rgba(255,255,255,0.1)',
          fontFamily: 'ui-monospace, monospace',
        }}
      >
        &copy; {new Date().getFullYear()} GLUTTON_AI — All consumption rights reserved.
      </p>
    </motion.footer>
  );
}
