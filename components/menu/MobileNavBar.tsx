'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { menuSections } from '@/data/menuData';

interface MobileNavBarProps {
  activeId: string;
}

export default function MobileNavBar({ activeId }: MobileNavBarProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const btn = scrollerRef.current?.querySelector<HTMLElement>(`[data-id="${id}"]`);
    if (btn) btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  return (
    <div
      className="md:hidden sticky z-40"
      style={{
        top: '64px',
        background: 'rgba(10,10,12,0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div
        ref={scrollerRef}
        className="flex items-center gap-1 overflow-x-auto px-4 py-2.5 no-scrollbar"
        style={{ scrollbarWidth: 'none' }}
      >
        {menuSections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <motion.button
              key={section.id}
              data-id={section.id}
              onClick={() => scrollTo(section.id)}
              whileTap={{ scale: 0.95 }}
              className="relative shrink-0 px-3.5 py-1.5 rounded-md text-xs tracking-widest uppercase whitespace-nowrap transition-all duration-150"
              style={{
                fontFamily: 'ui-monospace, monospace',
                background: isActive ? 'rgba(220,60,30,0.12)' : 'transparent',
                border: isActive ? '1px solid rgba(220,60,30,0.35)' : '1px solid transparent',
                color: isActive ? '#dc3c1e' : 'rgba(255,255,255,0.3)',
                fontWeight: isActive ? 600 : 400,
              }}
            >
              {section.label}
            </motion.button>
          );
        })}
      </div>
      <div
        className="h-px"
        style={{ background: 'linear-gradient(90deg, rgba(220,60,30,0.2), transparent 60%)' }}
      />
    </div>
  );
}
