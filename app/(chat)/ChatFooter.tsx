import Separator from "@/components/Separator";
import { Send } from "lucide-react";
import React from "react";

function ChatFooter() {
  return (
    <div>
      <div className="overflow-hidden bg-background">
        <Separator />
      </div>
      <div className="flex w-full ">
        <div className="flex-1 flex items-center  bg-background border border-edge  ">
          <input
            type="text"
            placeholder="Ask me anything..."
            className="flex-1 bg-background px-4 py-2 outline-none text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400"
          />
        </div>
        <button className="bg-background text-white p-4  h-full hover:bg-primary/90 transition cursor-pointer">
          <Send size={24} className="" />
        </button>
      </div>
      <div className="overflow-hidden bg-background">
        <Separator />
      </div>
    </div>
  );
}

export default ChatFooter;
