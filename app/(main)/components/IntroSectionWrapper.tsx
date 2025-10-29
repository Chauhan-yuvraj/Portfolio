// components/IntroSectionWrapper.tsx
"use client";

import { useState } from 'react';
import { Sidebar } from '@/components/SideBar';
import HeaderSection from './headerSection';
import IntroSectionContent from './IntroSection';

export function IntroSectionWrapper() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full h-screen '>
      {/* The Sidebar component (Client side) */}
      <Sidebar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      {/* HeaderSection (Client side) */}
      <HeaderSection isOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Rest of the content (Server side) */}
      <IntroSectionContent />
    </div>
  );
}