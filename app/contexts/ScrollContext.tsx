'use client';

import React, { createContext, useRef, useContext, ReactNode } from 'react';

// Define the shape of the context data
export type SectionId = 'introduction' | 'bio' | 'products' | 'experience' | 'certification' | 'contact';

interface ScrollContextType {
    refs: Record<SectionId, React.RefObject<HTMLDivElement | null>>;
    scrollToSection: (sectionId: SectionId) => void;
}

// Create the context with a default null value
const ScrollContext = createContext<ScrollContextType | null>(null);

// Create a Provider component
export const ScrollProvider = ({ children }: { children: ReactNode }) => {
    const refs: Record<SectionId, React.RefObject<HTMLDivElement | null>> = {
        introduction: useRef<HTMLDivElement>(null),
        bio: useRef<HTMLDivElement>(null),
        products: useRef<HTMLDivElement>(null),
        experience: useRef<HTMLDivElement>(null),
        // Add placeholders for future sections
        certification: useRef<HTMLDivElement>(null),
        contact: useRef<HTMLDivElement>(null),
    };

    const scrollToSection = (sectionId: SectionId) => {
        const ref = refs[sectionId];
        ref.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <ScrollContext.Provider value={{ refs, scrollToSection }}>
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