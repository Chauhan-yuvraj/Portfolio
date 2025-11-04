'use client'
import React, { useState } from "react";
import { useScroll, SectionId } from "@/app/contexts/ScrollContext"; // Import hook and type

const SideBarBodySection = () => {
    // Use an array of objects to map names to IDs
    const sections: { name: string; id: SectionId }[] = [
        { name: "Introduction", id: "introduction" },
        { name: "Bio", id: "bio" },
        { name: "Products", id: "products" },
        { name: "Experience", id: "experience" },
        { name: "Certification", id: "certification" },
        { name: "Contact", id: "contact" },
    ];

    const { scrollToSection } = useScroll(); // Use the hook
    const [selected, setSelected] = useState("Introduction");

    const handleClick = (section: { name: string; id: SectionId }) => {
        setSelected(section.name);
        scrollToSection(section.id); // Trigger the scroll
    };

    return (
        <div className="grid grid-cols-[1fr_3.9fr_1fr] w-full h-full">
            <div className="border-r" />
            <div className="border-r flex flex-col gap-4 pt-16 ">
                {sections.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => handleClick(item)}
                        className={`border-y py-2 border-edge w-full text-center cursor-pointer transition-colors ${selected === item.name
                            ? "bg-selection text-selection-foreground font-semibold"
                            : "hover:bg-accent"
                            }`}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
            <div className="border-r" />
        </div>
    );
};

export default SideBarBodySection;