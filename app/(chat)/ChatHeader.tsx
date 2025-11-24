import Separator from "@/components/Separator";
import Image from "next/image";
import React from "react";

function ChatHeader() {
  return (
    <div className="">
      <div className="overflow-hidden bg-background">
        <Separator />
        <div className="bg-background w-full flex ">
          <div className="border border-edge h-full  p-2 ">
            <Image src={"/skull.jpg"} height={48} width={48} alt="Skull" />
          </div>
          <div className="border border-edge w-full inline-flex justify-center items-center font-normal">
            USERNAME001
          </div>
        </div>
        <Separator />
      </div>
    </div>
  );
}

export default ChatHeader;
