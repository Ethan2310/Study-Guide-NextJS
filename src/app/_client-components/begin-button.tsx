"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/button";

export default function BeginButton() {
    const router = useRouter();

    return (
        <Button
            text="Lets Begin"
            color="black"
            width={150}
            height={50}
            onClick={() => router.push("/study-categories")}
            onFocus={() => console.log("Button is focused")}
            onBlur={() => console.log("Button is blurred")}
        />
    );
}
