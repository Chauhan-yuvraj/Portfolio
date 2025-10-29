// components/Sidebar.tsx
"use client";

import { useEffect } from "react"; // <-- Import useEffect
import { cn } from "@/lib/utils";
import Separator from "./Separator";
import SideBarBodySection from "@/app/(sidebar)/components/SideBarBodySection";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  // items: NavItem[]; 
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const handleClose = () => setIsOpen(false);

  // --- Scroll Lock Logic ---
  useEffect(() => {
    // Check if we are in a browser environment
    if (typeof window !== 'undefined') {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }

    return () => {
      if (typeof window !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  }, [isOpen]);


  return (
    <>
      {/* 1. Backdrop/Overlay (Re-enabled for better UX) */}
      <div
        className={cn(
          "fixed inset-0 top-12 z-55 bg-background/80 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={handleClose}
      />

      <div
        className={cn(
          "fixed top-12 right-0 z-60 h-screen  w-svw max-w-md border-t  border-edge bg-background shadow-2xl transition-transform duration-300 ",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >

        <div className="py-8 h-full">
          <div className="border-y border-edge overflow-hidden">
            <Separator />
          </div>
          <div className="">
            <div className="pointer-events-none fixed inset-0 w-full px-3">
              <div className="w-full h-full border-x"></div>
            </div>
          </div>
          <div className="h-full">
            <SideBarBodySection />
          </div>
        </div>
      </div>
    </>
  );
}