/* eslint-disable @next/next/no-img-element */
"use client";
import Separator from "@/components/Separator";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X } from "lucide-react"; // Import Close Icon

interface ChatHeaderProps {
  userName: string | null;
  userAvatar: string;
  isLoading: boolean;
  onClose?: () => void; // New Prop
}

const dustVariants: Variants = {
  initial: { opacity: 0, filter: "blur(10px)", y: 10, scale: 0.9 },
  animate: { opacity: 1, filter: "blur(0px)", y: 0, scale: 1 },
  exit: { 
    opacity: 0, 
    filter: "blur(12px)", 
    y: -15, 
    scale: 1.1, 
    transition: { duration: 0.4, ease: "easeInOut" }
  }
};

function ChatHeader({ userName, userAvatar, isLoading, onClose }: ChatHeaderProps) {
  return (
    <div className="">
      <div className="overflow-hidden bg-background">
        <Separator />
        <div className="bg-background w-full flex h-14 relative">
          
          {/* Left Side: Avatar */}
          <div className="border border-edge p-2 flex items-center justify-center w-16 shrink-0 overflow-hidden">
            {isLoading ? (
              <div className="h-10 w-10 bg-neutral-200 dark:bg-neutral-800 animate-pulse rounded-md" />
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={userAvatar}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full"
                >
                  <img src={userAvatar} alt="User Avatar" className="h-full w-full object-cover" />
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          {/* Right Side: User Name */}
          <div className="border border-edge w-full flex items-center px-4 gap-3 overflow-hidden justify-between">
             {/* Name Container */}
             <div className="relative w-full h-6 flex items-center"> 
                {isLoading ? (
                    <div className="h-4 w-32 bg-neutral-200 dark:bg-neutral-800 animate-pulse rounded" />
                ) : (
                    <AnimatePresence mode="wait">
                    <motion.span
                        key={userName || "guest"} 
                        variants={dustVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.5, ease: "circOut" }}
                        className="font-normal text-sm uppercase tracking-wider truncate absolute inset-0 flex items-center"
                    >
                        {userName || "GUEST_USER"}
                    </motion.span>
                    </AnimatePresence>
                )}
            </div>

            {/* NEW: Close Button (Only visible if onClose is passed) */}
            {onClose && (
                <button 
                    onClick={onClose}
                    className="p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full transition-colors"
                >
                    <X className="w-5 h-5 text-neutral-500" />
                </button>
            )}
          </div>
        </div>
        <Separator />
      </div>
    </div>
  );
}

export default ChatHeader;