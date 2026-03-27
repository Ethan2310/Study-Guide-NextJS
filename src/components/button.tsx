"use client";

import { useState } from "react";

interface ButtonProps {
    text: string;
    onClick: () => void;
    width: number;
    height: number;
    color?: string;
    onFocus?: () => void;
    onBlur?: () => void;
}

export default function Button({ text, onClick, width, height, color = "transparent", onFocus, onBlur }: ButtonProps) {
    const [hovered, setHovered] = useState(false);

    function handleMouseEnter() {
        setHovered(true);
        onFocus?.();
    }

    function handleMouseLeave() {
        setHovered(false);
        onBlur?.();
    }

    return (
        <div
            style={{
                width,
                height,
                backgroundColor: color,
                border: hovered ? "2px solid white" : "2px solid transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
            }}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className={`subheading text-white ${hovered ? "font-bold" : "font-medium"}`}>
                {text}
            </span>
        </div>
    );
}