// components/DottedBackground.tsx
import React from "react";

const DottedBackground = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`relative h-full w-full bg-white dark:bg-neutral-950 ${className}`}
    >
      {/* The Dot Pattern Layer */}
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] dark:bg-[radial-gradient(#171717_1px,transparent_1px)] pointer-events-none"></div>

      {/* Content Layer */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
};

export default DottedBackground;
