'use client';

import { useRef } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import GrainOverlay from '@/components/GrainOverlay';
import StickySidebar, { useSectionObserver } from '@/components/menu/StickySidebar';
import MobileNavBar from '@/components/menu/MobileNavBar';
import MenuSection from '@/components/menu/MenuSection';
import { menuSections } from '@/data/menuData';

function MenuContent() {
  const activeId = useSectionObserver();

  return (
    <>
      <MobileNavBar activeId={activeId} />
      <div className="flex" style={{ minHeight: '100vh' }}>
        <StickySidebar activeId={activeId} />
        <main className="flex-1 min-w-0">
          {menuSections.map((section) => (
            <MenuSection key={section.id} section={section} />
          ))}
        </main>
      </div>
    </>
  );
}

export default function Home() {
  const chatRef = useRef<HTMLDivElement>(null);

  const handleCTAClick = () => {
    const btn = document.querySelector<HTMLElement>('.n8n-chat-toggle');
    if (btn) {
      btn.click();
    } else {
      chatRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollClick = () => {
    document.getElementById('meal-deals')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="relative min-h-screen"
      style={{ background: '#08080a', color: '#f0ece4' }}
    >
      <GrainOverlay />
      <Header />
      <HeroSection onCTAClick={handleCTAClick} onScrollClick={handleScrollClick} />
      <MenuContent />
      <div ref={chatRef} />
      <Footer />
    </div>
  );
}
