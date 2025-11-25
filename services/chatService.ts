// src/services/chatService.ts

const API_URL = "http://127.0.0.1:8000/chat";
const STORAGE_KEY = "uv_username";

export interface ChatResponse {
  reply: string;
  updatedUsername?: string; // We add this to pass the name back to UI
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

  // 1. NEW: Logic to generate the DiceBear URL
  getAvatarUrl: (name: string | null): string => {
    const seed = name ? name : "guest"; // Default to 'guest' if no name
    return `https://api.dicebear.com/9.x/pixel-art/svg?seed=${encodeURIComponent(seed)}&colors[]=000000&colors[]=ffffff`;
  },

  sendMessage: async (message: string): Promise<ChatResponse> => {
    const currentUsername = chatService.getStoredName();

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: message,
        username: currentUsername,
      }),
    });

    if (!response.ok) throw new Error("Failed to connect");

    const data = await response.json();
    const result: ChatResponse = { reply: data.reply };

    // If backend sends a new name, save it and add to result
    if (data.set_username) {
      chatService.setStoredName(data.set_username);
      result.updatedUsername = data.set_username; // Pass back to component
    }

    return result;
  },
};