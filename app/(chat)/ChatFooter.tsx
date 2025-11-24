import Separator from "@/components/Separator";
import { Send } from "lucide-react";
import React from "react";

function ChatFooter({ value, onChange, onSend }: {
  value: string;
  onChange: (newValue: string) => void;
  onSend: () => void;
}) {
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSend();
    }
  };

  return (
    <div>
      <div className="overflow-hidden bg-background">
        <Separator />
      </div>
      <div className="flex w-full">
        <div className="flex-1 flex items-center bg-background border border-edge">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
            className="flex-1 bg-background px-4 py-2 outline-none text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400"
          />
        </div>
        <button 
            onClick={onSend}
            className="bg-background text-white p-4 h-full hover:bg-neutral-800 transition cursor-pointer border border-l-0 border-edge"
        >
          {/* Note: I assumed white text, but based on your theme you might want a different color for the icon */}
          <Send size={24} className="text-black dark:text-white" />
        </button>
      </div>
      <div className="overflow-hidden bg-background">
        <Separator />
      </div>
    </div>
  );
}

export default ChatFooter;