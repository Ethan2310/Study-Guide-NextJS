"use client";

import { useState } from "react";
import Link from "next/link";

interface ButtonProps {
    text: string;
    href?: string;
    onClick?: () => void;
    width: number;
    height: number;
    color?: string;
    onFocus?: () => void;
    onBlur?: () => void;
}

export default function Button({ text, href, onClick, width, height, color = "transparent", onFocus, onBlur }: ButtonProps) {
    const [hovered, setHovered] = useState(false);

    function handleMouseEnter() {
        setHovered(true);
        onFocus?.();
    }

    function handleMouseLeave() {
        setHovered(false);
        onBlur?.();
    }

    const sharedStyle = {
        width,
        height,
        backgroundColor: color,
        border: hovered ? "2px solid white" : "2px solid transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
    };

    const content = (
        <span className={`subheading text-white ${hovered ? "font-bold" : "font-medium"}`}>
            {text}
        </span>
    );

    if (href) {
        return (
            <Link
                href={href}
                style={sharedStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {content}
            </Link>
        );
    }

    return (
        <div
            style={sharedStyle}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {content}
        </div>
    );
}