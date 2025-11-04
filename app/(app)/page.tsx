import ChatSection from "../(chat)/ChatSection";
import CenterContent from "../(main)/CenterContent";
import SideBar from "../(sidebar)/SideBar";
import { ScrollProvider } from "../contexts/ScrollContext"; // Import the provider

export default function Home() {
  return (
    // Wrap the entire page with the provider
    <ScrollProvider>
      <div className="bg-background w-full h-screen lg:grid lg:grid-cols-[1fr_2fr_1fr] overflow-y-hidden ">
        <div className="lg:flex hidden justify-between">
          <SideBar />
        </div>
        <div className="">
          <CenterContent />
        </div>
        <div className="lg:flex hidden justify-between borde-x h-full">
          <ChatSection />
        </div>
      </div>
    </ScrollProvider>
  );
}