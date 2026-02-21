'use client';

import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import type { MenuSection as MenuSectionType } from '@/data/menuData';

interface MenuSectionProps {
  section: MenuSectionType;
}

export default function MenuSection({ section }: MenuSectionProps) {
  return (
    <section
      id={section.id}
      className="py-16 px-6 md:px-10 scroll-mt-20"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10"
      >
        <div className="flex items-center gap-4 mb-3">
          <div className="w-1 h-8 rounded-full" style={{ background: 'linear-gradient(180deg, #dc3c1e, #a82b0e)' }} />
          <h2
            className="text-2xl md:text-3xl font-black tracking-tight uppercase"
            style={{
              color: '#f0ece4',
              fontFamily: '"Inter", ui-sans-serif, sans-serif',
              letterSpacing: '-0.01em',
            }}
          >
            {section.label}
          </h2>
        </div>
        <div
          className="ml-5 h-px"
          style={{ background: 'linear-gradient(90deg, rgba(220,60,30,0.3), transparent)' }}
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {section.items.map((item, i) => (
          <ProductCard key={item.name} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
