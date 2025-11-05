// app/contexts/ScrollContext.tsx

'use client';

import React, { createContext, useRef, useContext, ReactNode } from 'react';

// Define the shape of the context data
export type SectionId = 'introduction' | 'bio' | 'products' | 'experience' | 'certification' | 'contact';

interface ScrollContextType {
    // FIX: Allow the refs to be null initially
    refs: Record<SectionId, React.RefObject<HTMLDivElement | null>>;
    scrollContainerRef: React.RefObject<HTMLDivElement | null>;
    scrollToSection: (sectionId: SectionId) => void;
}

// Create the context with a default null value
const ScrollContext = createContext<ScrollContextType | null>(null);

// Create a Provider component
export const ScrollProvider = ({ children }: { children: ReactNode }) => {
    // This ref's type is `RefObject<HTMLDivElement | null>`
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // FIX: The type annotation here should also allow for null
    const refs: Record<SectionId, React.RefObject<HTMLDivElement | null>> = {
        introduction: useRef<HTMLDivElement>(null),
        bio: useRef<HTMLDivElement>(null),
        products: useRef<HTMLDivElement>(null),
        experience: useRef<HTMLDivElement>(null),
        certification: useRef<HTMLDivElement>(null),
        contact: useRef<HTMLDivElement>(null),
    };

    const scrollToSection = (sectionId: SectionId) => {
        const container = scrollContainerRef.current;
        const section = refs[sectionId].current;

        // This `if` check is what makes the logic safe, and now our types reflect this
        if (container && section) {
            const topPosition = section.offsetTop;
            container.scrollTo({
                top: topPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <ScrollContext.Provider value={{ refs, scrollContainerRef, scrollToSection }}>
            {children}
        </ScrollContext.Provider>
    );
};

// Custom hook to easily use the context
export const useScroll = () => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error('useScroll must be used within a ScrollProvider');
    }
    return context;
};