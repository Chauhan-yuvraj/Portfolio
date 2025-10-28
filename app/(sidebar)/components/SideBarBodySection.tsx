'use client'
import React, { useState } from "react";

const SideBarBodySection = () => {
    const sections = [
        "Introduction",
        "Bio",
        "Products",
        "Experience",
        "Certification",
        "Contact",
    ];

    const [selected, setSelected] = useState("Introduction");

    return (
        <div className="grid grid-cols-[1fr_3.9fr_1fr] w-full h-full">
            <div className="border-r" />
            <div className="border-r flex flex-col gap-4 pt-16">
                {sections.map((item) => (
                    <div
                        key={item}
                        onClick={() => setSelected(item)}
                        className={`border-y py-2 border-edge w-full text-center cursor-pointer transition-colors ${selected === item
                            ? "bg-selection text-selection-foreground font-semibold"
                            : "hover:bg-accent"
                            }`}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <div className="border-r" />
        </div>
    );
};

export default SideBarBodySection;
