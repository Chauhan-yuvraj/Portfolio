"use client";
import { BotMessageSquare } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import { ScrollProvider } from "../contexts/ScrollContext";
import SideBar from "../(sidebar)/SideBar";
import { CenterContent } from "../(main)/components/CenterContent";
import ChatSection from "../(chat)/ChatSection";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <ScrollProvider>
      <div className="bg-background w-full h-screen lg:grid lg:grid-cols-[1fr_2fr_1fr] overflow-y-hidden relative">
        
        {/* 1. Sidebar (Desktop only) */}
        <div className="lg:flex hidden justify-between">
          <SideBar />
        </div>

        {/* 2. Center Content */}
        <div className="min-w-0">
          <CenterContent />
        </div>

        {/* 3. Chat Section (Desktop: Always Visible) */}
        <div className="lg:flex hidden justify-between border-l h-full">
          <ChatSection />
        </div>

        {/* 4. Chat Section (Mobile: Overlay) */}
        <AnimatePresence>
          {chatOpen && (
            <motion.div 
              initial={{ y: "100%" }} 
              animate={{ y: 0 }} 
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-100 bg-background lg:hidden flex flex-col"
            >
              {/* Pass the close handler here */}
              <ChatSection onClose={() => setChatOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 5. Floating Button (Visible ONLY on Mobile/Tablet) */}
      {/* 'lg:hidden' hides it on desktop, 'flex' shows it on mobile */}
      <div 
        onClick={() => setChatOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-background border border-edge rounded-full shadow-xl cursor-pointer active:scale-95 transition-transform"
      >
        <BotMessageSquare className="w-6 h-6" />
      </div>
    </ScrollProvider>
  );
}