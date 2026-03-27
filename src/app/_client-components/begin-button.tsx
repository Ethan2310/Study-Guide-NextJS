"use client";

import Button from "@/components/button";

export default function BeginButton() {
    return (
        <Button
            text="Lets Begin"
            color="black"
            width={150}
            height={50}
            onClick={() => {}}
            onFocus={() => console.log("Button is focused")}
            onBlur={() => console.log("Button is blurred")}
        />
    );
}
