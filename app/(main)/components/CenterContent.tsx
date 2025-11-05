/* eslint-disable react-hooks/refs */
"use client";

import { useState } from 'react';
import { Sidebar } from '@/components/SideBar'; // Assuming path
import HeaderSection from './headerSection';
import IntroSectionContent from './IntroSection';
import BioSectionWrapper from './bio/index';
import { Projects } from './projects';
import Separator from '@/components/Separator'; // Assuming path
import { Experiences } from './experiences';
import { useScroll } from '@/app/contexts/ScrollContext';

// Renaming to CenterContent to match the component in Home, or assuming SectionWrapper is correct.
export function CenterContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Get both refs and the new scrollContainerRef from the context
  const { refs, scrollContainerRef } = useScroll();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full h-screen'>
      <Sidebar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <HeaderSection isOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Attach the scrollContainerRef to the scrollable div */}
      <div
        ref={scrollContainerRef}
        className="h-full no-scrollbar overflow-y-scroll"
      >
        <div ref={refs.introduction}>
          <IntroSectionContent />
        </div>

        <div ref={refs.bio}>
          <BioSectionWrapper />
        </div>

        <div ref={refs.products}>
          <Projects />
          <Separator />
        </div>

        <div ref={refs.experience}>
          <Experiences />
          <Separator />
        </div>

        <div ref={refs.certification}>
            {/* Add certification content here */}
        </div>

        <div ref={refs.contact}>
          <Separator />
            {/* Add contact content here */}
          <Separator />
        </div>
      </div>
    </div>
  );
}

// NOTE: Ensure that your `CenterContent` component is rendering this `SectionWrapper` component.
// For example:
//
// import { SectionWrapper } from './path/to/SectionWrapper';
//
// export default function CenterContent() {
//   return <SectionWrapper />;
// }