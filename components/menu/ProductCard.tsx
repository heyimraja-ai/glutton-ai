'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Plus, Check } from 'lucide-react';
import type { MenuItem } from '@/data/menuData';

interface ProductCardProps {
  item: MenuItem;
  index: number;
}

export default function ProductCard({ item, index }: ProductCardProps) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group flex flex-col rounded-xl overflow-hidden"
      style={{
        background: '#0d0d10',
        border: '1px solid rgba(255,255,255,0.06)',
        boxShadow: '0 2px 20px rgba(0,0,0,0.4)',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(220,60,30,0.2)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(220,60,30,0.08)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 20px rgba(0,0,0,0.4)';
      }}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ filter: 'brightness(0.85)' }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(13,13,16,0.8) 100%)' }}
        />
      </div>

      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-start justify-between gap-3">
          <h3
            className="text-sm font-bold leading-snug"
            style={{
              color: '#f0ece4',
              fontFamily: '"Inter", ui-sans-serif, sans-serif',
              letterSpacing: '-0.01em',
            }}
          >
            {item.name}
          </h3>
          <span
            className="shrink-0 text-sm font-bold tabular-nums"
            style={{
              color: '#dc3c1e',
              fontFamily: '"Inter", sans-serif',
            }}
          >
            {item.price}
          </span>
        </div>

        <p
          className="text-xs leading-relaxed flex-1"
          style={{
            color: 'rgba(240,236,228,0.38)',
            fontFamily: '"Inter", ui-sans-serif, sans-serif',
          }}
        >
          {item.description}
        </p>

        <motion.button
          onClick={handleAdd}
          whileTap={{ scale: 0.96 }}
          className="mt-1 flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200"
          style={
            added
              ? {
                  background: 'rgba(220,60,30,0.15)',
                  border: '1px solid rgba(220,60,30,0.5)',
                  color: '#dc3c1e',
                  fontFamily: '"Inter", sans-serif',
                }
              : {
                  background: 'transparent',
                  border: '1px solid rgba(220,60,30,0.3)',
                  color: 'rgba(220,60,30,0.7)',
                  fontFamily: '"Inter", sans-serif',
                }
          }
          onMouseEnter={(e) => {
            if (!added) {
              (e.currentTarget as HTMLElement).style.background = 'rgba(220,60,30,0.12)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(220,60,30,0.6)';
              (e.currentTarget as HTMLElement).style.color = '#dc3c1e';
            }
          }}
          onMouseLeave={(e) => {
            if (!added) {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(220,60,30,0.3)';
              (e.currentTarget as HTMLElement).style.color = 'rgba(220,60,30,0.7)';
            }
          }}
        >
          {added ? (
            <>
              <Check size={13} />
              Added
            </>
          ) : (
            <>
              <Plus size={13} />
              Add to Order
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
