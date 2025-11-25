Here is a professional, detailed **README.md** specifically for your **Frontend** repository.

You can place this in the root of your Next.js project.

```markdown
# 🎨 Yuvraj's Portfolio & AI Chatbot

A modern, highly interactive portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

The highlight of this project is the integrated **AI Assistant (UV)**. Unlike standard chatbots, UV uses the **Model Context Protocol (MCP)** via a custom backend to fetch real-time data about my GitHub activity, read my resume, and answer questions about my specific tech stack.

## ✨ Key Features

- **🤖 AI Agent Integration:** Embeds a custom MCP-powered chatbot that acts as a "living" interface to my portfolio.
- **📊 Real-time Data:** The bot can fetch live GitHub stars, streaks, and repository lists.
- **💾 Persistent Memory:** Remembers the user's name across sessions using LocalStorage.
- **📱 Responsive Design:** Features a dedicated mobile drawer for the chat interface and a persistent sidebar for desktop.
- **🎭 Animations:** Smooth transitions, entrance effects, and "dust" text effects using **Framer Motion**.
- **🖼️ Dynamic Avatars:** Generates custom pixel-art avatars for users based on their name via the DiceBear API.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Backend Connection:** REST API (connecting to Python/FastAPI)

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Chauhan-yuvraj/my-portfolio-frontend.git
cd my-portfolio-frontend
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure the Backend
This frontend needs to talk to the MCP Backend to handle chat requests.

Open `src/services/chatService.ts` and ensure the `API_URL` points to your backend (either localhost for development or your Render URL for production).

```typescript
// src/services/chatService.ts

// For Local Development:
// const API_URL = "http://127.0.0.1:8000/chat";

// For Production (Render):
const API_URL = "https://mcp-for-portfolio.onrender.com/chat";
```

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```text
/src
├── app/
│   ├── (chat)/         # Chatbot specific pages/layouts
│   ├── (main)/         # Main portfolio content
│   └── page.tsx        # Entry point
├── components/         # Reusable UI components (Buttons, Separators)
├── services/           # API calls (chatService.ts)
├── types/              # TypeScript interfaces (User, Projects, Blogs)
└── data/               # Static data constants (PROJECTS, USER, BLOGS)
```

## 🧠 How the Chat Works

1. **User Input:** The user types a message (e.g., *"What is his GitHub streak?"*) in `ChatSection.tsx`.
2. **Context Packaging:** The frontend bundles the current message + conversation history + user's name (from LocalStorage).
3. **API Request:** `chatService.ts` sends this payload to the Python/FastAPI backend.
4. **AI Processing:** The backend uses Google Gemini + MCP to decide if it needs to fetch live data (like GitHub stats) or read static files.
5. **Response:** The frontend receives the answer (and potential name updates) and renders it with a typing animation.

## 📄 License

This project is open-source and available under the MIT License.
```