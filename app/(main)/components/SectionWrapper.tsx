// components/IntroSectionWrapper.tsx
"use client";

import { useState } from 'react';
import { Sidebar } from '@/components/SideBar';
import HeaderSection from './headerSection';
import IntroSectionContent from './IntroSection';
import BioSectionWrapper from './bio/BioSectionWrapper';

export function SectionWrapper() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full h-screen '>
      <Sidebar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      <HeaderSection isOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <div className="h-full  no-scrollbar overflow-scroll">

        <IntroSectionContent />
        <BioSectionWrapper />
      </div>
    </div>
  );
}