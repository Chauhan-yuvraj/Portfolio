'use client'
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface ChatBodyProps {
  messages: { id: number; text: string; sender: string }[];
  isLoading: boolean;
}

function ChatBody({ messages, isLoading }: ChatBodyProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ 
        behavior: "smooth", 
        block: "end"
      });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [messages, isLoading]);

  return (

    <div className="flex-1 min-h-0 mb-4 w-full px-4">
      {/* This div now properly scrolls */}
      <div className="h-full overflow-y-auto no-scrollbar space-y-4">
        {messages.map((msg) => {
          const isUser = msg.sender === "user";
          return (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, x: isUser ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`p-3 max-w-[75%] border border-edge shadow-sm text-sm ${
                isUser
                  ? "bg-primary text-white ml-auto border-r-0 rounded-l-xl rounded-tr-xl"
                  : "bg-background text-neutral-800 dark:text-neutral-200 mr-auto border-l-0 rounded-r-xl rounded-tl-xl"
              }`}
            >
              <div className="whitespace-pre-wrap">{msg.text}</div>
            </motion.div>
          );
        })}

        {isLoading && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-background border border-edge border-l-0 mr-auto p-4 rounded-r-xl rounded-tl-xl w-fit"
          >
            <div className="flex space-x-1">
              <motion.div
                className="w-2 h-2 bg-neutral-400 rounded-full"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="w-2 h-2 bg-neutral-400 rounded-full"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
              />
              <motion.div
                className="w-2 h-2 bg-neutral-400 rounded-full"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
              />
            </div>
          </motion.div>
        )}
        
        {/* Invisible element to scroll to */}
        <div ref={messagesEndRef} className="h-1" />
      </div>
    </div>
  );
}

export default ChatBody;