"use client";

import { useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface SubCategoryTabsProps {
    categorySlug: string;
    subcategories: string[];
    activeSlug: string;
}

export default function SubCategoryTabs({ categorySlug, subcategories, activeSlug }: SubCategoryTabsProps) {
    const router = useRouter();

    const handleChange = (value: string) => {
        router.push(`/study-categories/learn-category/${categorySlug}/learn-sub-category/${value}`);
    };

    return (
        <Tabs value={activeSlug} onValueChange={handleChange}>
            <TabsList>
                {subcategories.map((sub) => {
                    const slug = sub.toLowerCase().replace(/\s+/g, "-");
                    return (
                        <TabsTrigger key={slug} value={slug}>
                            {sub}
                        </TabsTrigger>
                    );
                })}
            </TabsList>
            {subcategories.map((sub) => {
                const slug = sub.toLowerCase().replace(/\s+/g, "-");
                return (
                    <TabsContent key={slug} value={slug}>
                        {sub}
                    </TabsContent>
                );
            })}
        </Tabs>
    );
}
