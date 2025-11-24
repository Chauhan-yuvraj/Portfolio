'use client'
import React, { useState } from "react";
import Separator from "@/components/Separator";
import DottedBackground from "@/components/DottedBackground";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import ChatBody from "./ChatBody";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const ChatSection = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I am UV, Yuvraj's AI assistant. How can I help you?", sender: "bot" },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text: inputText,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMsg.text }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();

      const botMsg: Message = {
        id: Date.now() + 1,
        text: data.reply,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMsg]);

    } catch (error) {
      console.error("Error fetching chat:", error);
      const errorMsg: Message = {
        id: Date.now() + 1,
        text: "Sorry, I am having trouble connecting to the server.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex w-full">
      <div className="w-8 h-screen overflow-hidden">
        <Separator rotation="rotate-90" />
      </div>

      <DottedBackground className="flex justify-center items-center relative w-full">
        <div className="w-full max-w-3xl h-screen flex flex-col">
          <ChatHeader />
          
          {/* Key fix: Remove extra wrapper, let ChatBody handle its own height */}
          <ChatBody messages={messages} isLoading={isLoading} />
          
          <div className="w-full  shrink-0">
            <ChatFooter 
              value={inputText} 
              onChange={setInputText} 
              onSend={handleSendMessage} 
            />
          </div>
        </div>
      </DottedBackground>
    </div>
  );
};

export default ChatSection;