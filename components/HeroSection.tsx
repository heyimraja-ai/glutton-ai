'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onCTAClick: () => void;
  onScrollClick: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.14, duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroSection({ onCTAClick, onScrollClick }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#08080a' }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(255,255,255,0.015) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(255,255,255,0.015) 60px)',
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(220,60,30,0.4), transparent)' }} />

      <div
        className="absolute inset-y-0 right-0 z-10"
        style={{ width: '58%' }}
      >
        <div className="absolute inset-0">
          <Image
            src="/herosection.JPG"
            alt="Smash burger"
            fill
            className="object-cover object-center"
            sizes="58vw"
            priority
          />
        </div>

        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #08080a 0%, rgba(8,8,10,0.55) 30%, rgba(8,8,10,0.1) 65%, rgba(8,8,10,0.4) 100%)',
          }}
        />

        <div
          className="absolute inset-x-0 top-0"
          style={{
            height: '30%',
            background: 'linear-gradient(to bottom, #08080a 0%, rgba(8,8,10,0.85) 40%, rgba(8,8,10,0.4) 70%, transparent 100%)',
          }}
        />

        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: '25%',
            background: 'linear-gradient(to top, #08080a 0%, rgba(8,8,10,0.5) 60%, transparent 100%)',
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(8,8,10,0.45) 100%)',
          }}
        />

        <div className="absolute left-6 right-6" style={{ bottom: '18%' }}>
          <div
            className="flex items-center justify-between px-4 py-2.5 rounded-lg"
            style={{
              background: 'rgba(8,8,10,0.8)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-mono tracking-wider" style={{ color: 'rgba(240,236,228,0.6)' }}>
                SMASH BURGER / LAMB / TOMATO RELISH
              </span>
            </div>
            <span className="text-xs font-mono" style={{ color: 'rgba(220,60,30,0.8)' }}>CLASSIFIED</span>
          </div>
        </div>

        <div className="absolute flex flex-row gap-2" style={{ top: '18%', right: '6%' }}>
          <motion.div
            className="px-3 py-1.5 rounded-lg"
            style={{
              background: 'rgba(220,60,30,0.12)',
              border: '1px solid rgba(220,60,30,0.25)',
              backdropFilter: 'blur(8px)',
            }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#e05530' }}>2,847 cal</span>
          </motion.div>

          <motion.div
            className="px-3 py-1.5 rounded-lg"
            style={{
              background: 'rgba(8,8,10,0.6)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(8px)',
            }}
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          >
            <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'rgba(240,236,228,0.45)' }}>PERFECTION</span>
          </motion.div>
        </div>
      </div>

      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 pt-32 pb-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="flex-1 flex flex-col items-start gap-6 lg:max-w-xl">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2.5"
          >
            <div
              className="px-3 py-1 rounded-full text-xs tracking-widest uppercase font-medium"
              style={{
                background: 'rgba(220,60,30,0.1)',
                border: '1px solid rgba(220,60,30,0.25)',
                color: '#e05530',
                fontFamily: 'ui-monospace, monospace',
              }}
            >
              Protocol Active
            </div>
            <div className="w-px h-3 bg-white/10" />
            <span className="text-xs text-white/25 tracking-widest uppercase font-mono">v2.4.1</span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl lg:text-7xl font-black leading-[1.0] tracking-tight"
            style={{
              fontFamily: '"Inter", "Geist", ui-sans-serif, system-ui, sans-serif',
              color: '#f0ece4',
              textShadow: '0 0 80px rgba(220,60,30,0.15)',
            }}
          >
            What will the
            <br />
            <span
              className="relative inline-block"
              style={{
                background: 'linear-gradient(135deg, #ff4520 0%, #e03010 40%, #ff6b35 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Fat Bastard
            </span>
            <br />
            eat today?
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg lg:text-xl leading-relaxed max-w-md"
            style={{
              color: 'rgba(240,236,228,0.45)',
              fontFamily: '"Inter", ui-sans-serif, sans-serif',
              letterSpacing: '-0.01em',
            }}
          >
            Algorithmic gluttony for the modern wasteland.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2"
          >
            <motion.button
              onClick={onCTAClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative flex items-center gap-3 px-7 py-4 rounded-lg font-semibold text-sm tracking-wide overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #dc3c1e 0%, #b82d10 100%)',
                color: '#fff',
                fontFamily: '"Inter", ui-sans-serif, sans-serif',
                boxShadow: '0 0 40px rgba(220,60,30,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,80,40,0.4)',
              }}
            >
              <span className="relative z-10">Fuck you, lemme eat</span>
              <ChevronRight size={16} className="relative z-10 transition-transform group-hover:translate-x-0.5" />
              <motion.div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(255,100,60,0.3) 0%, transparent 60%)' }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>

          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-8 mt-4 pt-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            {[['10K+', 'Meals Devoured'], ['99.9%', 'Uptime Gluttony'], ['0', 'Regrets Logged']].map(([val, label]) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="text-xl font-bold" style={{ color: '#f0ece4', fontFamily: '"Inter", sans-serif' }}>{val}</span>
                <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'ui-monospace, monospace' }}>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="hidden lg:block flex-1" />
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{ background: 'linear-gradient(to bottom, transparent, #08080a)' }}
      />

      <motion.button
        onClick={onScrollClick}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        style={{ color: 'rgba(255,255,255,0.3)', fontFamily: '"Inter", ui-sans-serif, sans-serif', background: 'none', border: 'none', cursor: 'pointer' }}
        whileHover={{ color: 'rgba(255,255,255,0.6)' }}
      >
        <span className="text-sm tracking-wide">scroll to consume</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  );
}
