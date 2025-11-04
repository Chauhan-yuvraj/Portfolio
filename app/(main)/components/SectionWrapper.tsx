"use client";

import { useState } from 'react';
import { Sidebar } from '@/components/SideBar';
import HeaderSection from './headerSection';
import IntroSectionContent from './IntroSection';
import BioSectionWrapper from './bio/index';
import { Projects } from './projects';
import Separator from '@/components/Separator';
import { Experiences } from './experiences';
import { useScroll } from '@/app/contexts/ScrollContext';

export function SectionWrapper() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { refs } = useScroll();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full h-screen '>
      <Sidebar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <HeaderSection isOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <div className="h-full  no-scrollbar overflow-y-scroll">
        
        {/* eslint-disable-next-line react-hooks/refs */}
        <div ref={refs.introduction}>
          <IntroSectionContent />
        </div>

        {/* eslint-disable-next-line react-hooks/refs */}
        <div ref={refs.bio}>
          <BioSectionWrapper />
        </div>

        {/* eslint-disable-next-line react-hooks/refs */}
        <div ref={refs.products}>
          <Projects />
          <Separator />
        </div>

        {/* eslint-disable-next-line react-hooks/refs */}
        <div ref={refs.experience}>
          <Experiences />
          <Separator />
        </div>
        
        {/* eslint-disable-next-line react-hooks/refs */}
        <div ref={refs.certification}>
          {/* Your Certification components would go here */}
        </div>

        {/* eslint-disable-next-line react-hooks/refs */}
        <div ref={refs.contact}>
          {/* Your Contact components would go here */}
          <Separator />
          <Separator />
        </div>
      </div>
    </div>
  );
}