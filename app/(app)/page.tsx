
import ChatSection from "../(chat)/ChatSection";
import CenterContent from "../(main)/CenterContent";
import SideBar from "../(sidebar)/SideBar";

export default function Home() {
  return (
    <div className="bg-background w-full h-screen grid grid-cols-[1fr_4fr_1fr] ">
      <div className="flex justify-between">
        <SideBar />
      </div>
      <div className="border ">
        <CenterContent />
      </div>
      <div className="border">
        <ChatSection />
      </div>
    </div>
  );
}
