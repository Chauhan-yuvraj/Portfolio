import Separator from "@/components/Separator";
import DottedBackground from "@/components/DottedBackground";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import ChatBody from "./ChatBody";

const ChatSection = () => {
  return (
    <div className="h-full flex w-full">
      <div className="w-8 h-screen overflow-hidden">
        <Separator rotation="rotate-90" />
      </div>

      {/* Using the reusable component */}
      <DottedBackground className="flex justify-center items-center">
        <ChatHeader />
        <ChatBody />
        <div className="absolute bottom-1 w-full">
          <ChatFooter />
        </div>
      </DottedBackground>
    </div>
  );
};

export default ChatSection;
