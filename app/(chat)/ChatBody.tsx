import React from "react";

function ChatBody() {
  return (
    <div className="">
      <div className="h-[65vh] overflow-y-auto no-scrollbar space-y-4">
        <div className="p-2 bg-background  border border-edge border-l-0  max-w-[60%]">
          Hello! How can I assist you today?
        </div>
        <div className="p-2 bg-background  border border-edge border-r-0  max-w-[60%] ml-auto">
          I would like to know more about your services.
        </div>
      </div>
    </div>
  );
}

export default ChatBody;
