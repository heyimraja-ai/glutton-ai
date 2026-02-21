'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { menuSections } from '@/data/menuData';

interface StickySidebarProps {
  activeId: string;
}

export default function StickySidebar({ activeId }: StickySidebarProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <aside
      className="hidden md:flex flex-col"
      style={{
        width: '200px',
        minWidth: '200px',
        position: 'sticky',
        top: '5rem',
        height: 'fit-content',
        background: '#0d0d0f',
        borderRight: '1px solid #1a1a1e',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        alignSelf: 'flex-start',
      }}
    >
      <div
        className="px-5 pb-4 mb-2"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{
            color: 'rgba(255,255,255,0.2)',
            fontFamily: 'ui-monospace, "Geist Mono", monospace',
          }}
        >
          Menu
        </span>
      </div>

      <nav className="flex flex-col">
        {menuSections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <motion.button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              whileTap={{ scale: 0.97 }}
              className="relative flex items-center text-left w-full px-5 py-2.5 transition-colors duration-150"
              style={{
                background: isActive ? 'rgba(220,60,30,0.06)' : 'transparent',
                borderLeft: isActive ? '2px solid #dc3c1e' : '2px solid transparent',
              }}
            >
              <span
                className="text-xs tracking-widest uppercase transition-colors duration-150"
                style={{
                  fontFamily: 'ui-monospace, "Geist Mono", monospace',
                  color: isActive ? '#f0ece4' : 'rgba(255,255,255,0.28)',
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {section.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="sidebar-active-dot"
                  className="absolute right-4 w-1.5 h-1.5 rounded-full"
                  style={{ background: '#dc3c1e' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </nav>
    </aside>
  );
}

export function useSectionObserver() {
  const [activeId, setActiveId] = useState(menuSections[0].id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const sectionIds = menuSections.map((s) => s.id);
    const visible = new Map<string, number>();

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visible.set(id, entry.intersectionRatio);
          } else {
            visible.delete(id);
          }
          if (visible.size > 0) {
            let best = '';
            let bestRatio = -1;
            visible.forEach((ratio, visId) => {
              if (ratio > bestRatio) {
                bestRatio = ratio;
                best = visId;
              }
            });
            if (best) setActiveId(best);
          }
        },
        { threshold: [0, 0.1, 0.25, 0.5], rootMargin: '-80px 0px -30% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return activeId;
}
