// src/services/chatService.ts

const API_URL = "https://mcp-for-portfolio.onrender.com/chat";
const STORAGE_KEY = "uv_username";

export interface ChatResponse {
  reply: string;
  updatedUsername?: string;
}

// 1. Define the structure of messages coming from your UI
export interface UIMessage {
  text: string;
  sender: "user" | "bot";
}

// 2. Define the structure of history expected by the Backend
interface HistoryItem {
  role: "user" | "model";
  content: string;
}

export const chatService = {
  getStoredName: (): string | null => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(STORAGE_KEY);
    }
    return null;
  },

  setStoredName: (name: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, name);
    }
  },

  getAvatarUrl: (name: string | null): string => {
    const seed = name ? name : "guest";
    return `https://api.dicebear.com/9.x/pixel-art/svg?seed=${encodeURIComponent(seed)}&colors[]=000000&colors[]=ffffff`;
  },

  // 3. UPDATE: Accept 'previousMessages' array
  sendMessage: async (message: string, previousMessages: UIMessage[]): Promise<ChatResponse> => {
    const currentUsername = chatService.getStoredName();

    // 4. Format History:
    // - Take the last 10 messages (to save tokens/performance)
    // - Map 'bot' to 'model' (Gemini standard)
    // - Map 'text' to 'content'
    const history: HistoryItem[] = previousMessages
      .slice(-10) 
      .map((msg) => ({
        role: msg.sender === "user" ? "user" : "model",
        content: msg.text,
      }));

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: message,
        username: currentUsername,
        history: history, // <--- SEND HISTORY TO BACKEND
      }),
    });

    if (!response.ok) throw new Error("Failed to connect");

    const data = await response.json();
    const result: ChatResponse = { reply: data.reply };

    if (data.set_username) {
      chatService.setStoredName(data.set_username);
      result.updatedUsername = data.set_username;
    }

    return result;
  },
};