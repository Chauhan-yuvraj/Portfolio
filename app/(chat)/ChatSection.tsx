"use client";
import React, { useState, useEffect } from "react";
import Separator from "@/components/Separator";
import DottedBackground from "@/components/DottedBackground";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import ChatBody from "./ChatBody";
import { chatService } from "@/services/chatService";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

// Add props interface
interface ChatSectionProps {
  onClose?: () => void; // Optional prop
}

const ChatSection = ({ onClose }: ChatSectionProps) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I am UV. Can I know your name?", sender: "bot" },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userAvatar, setUserAvatar] = useState<string>("");
  const [userName, setUserName] = useState<string | null>(null);
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const storedName = chatService.getStoredName();
    setUserName(storedName);
    setUserAvatar(chatService.getAvatarUrl(storedName));

    if (storedName) {
      setMessages([{ id: 1, text: `Welcome back, ${storedName}!`, sender: "bot" }]);
    }
    setIsAppLoading(false);
  }, []);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;
    const userMsg: Message = { id: Date.now(), text: inputText, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsLoading(true);

    try {
      const { reply, updatedUsername } = await chatService.sendMessage(userMsg.text);
      if (updatedUsername) {
        setUserName(updatedUsername);
        setUserAvatar(chatService.getAvatarUrl(updatedUsername));
      }
      setMessages((prev) => [...prev, { id: Date.now() + 1, text: reply, sender: "bot" }]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex w-full bg-background"> 
      <div className="w-8 h-screen overflow-hidden">
        <Separator rotation="rotate-90" />
      </div>

      <DottedBackground className="flex justify-center items-center relative w-full">
        <div className="w-full max-w-3xl h-screen flex flex-col">
          
          {/* Pass onClose to Header */}
          <ChatHeader 
            userName={userName} 
            userAvatar={userAvatar} 
            isLoading={isAppLoading} 
            onClose={onClose} 
          />

          <ChatBody messages={messages} isLoading={isLoading} />

          <div className="w-full shrink-0">
            <ChatFooter value={inputText} onChange={setInputText} onSend={handleSendMessage} />
          </div>
        </div>
      </DottedBackground>
    </div>
  );
};

export default ChatSection;