"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    type CarouselApi,
} from "@/components/ui/carousel";
import CategoryCard, { type SubCategoryEntry } from "./category-card";
import type { StudyCategory } from "@/lib/study-categories";
import type { SubCategoryData } from "@/lib/study-categories";
import { useLoadSubCategories } from "@/context/sub-categories-context";

interface Props {
    categories: StudyCategory[];
    fetchSubCategoryData: (sub: string) => Promise<SubCategoryData[]>;
}

export default function StudyCategoriesCarousel({ categories, fetchSubCategoryData }: Props) {
    const [api, setApi] = useState<CarouselApi>();
    const [loadedData, setLoadedData] = useState<Record<string, SubCategoryData[]>>({});
    // Tracks in-flight or completed fetches to prevent duplicate requests
    const fetchedRef = useRef(new Set<string>());

    const loadSubCategories = useLoadSubCategories();

    const loadSubCategory = useCallback(async (sub: string) => {
        if (fetchedRef.current.has(sub)) return;
        fetchedRef.current.add(sub);
        const data = await fetchSubCategoryData(sub);
        setLoadedData((prev) => ({ ...prev, [sub]: data }));
    }, [fetchSubCategoryData]);

    // On carousel slide change, pre-fetch the first subcategory of the visible card
    useEffect(() => {
        if (!api) return;

        const onSelect = () => {
            const index = api.selectedScrollSnap();
            const category = categories[index];
            if (category) {
                loadSubCategories(category);
                const firstSub = category.subcategories[0];
                if (firstSub) loadSubCategory(firstSub);
            }
        };

        api.on("select", onSelect);
        onSelect(); // trigger for the initial slide on mount

        return () => {
            api.off("select", onSelect);
        };
    }, [api, categories, loadSubCategory, loadSubCategories]);

    return (
        <Carousel setApi={setApi} className="w-full max-w-4xl">
            <CarouselContent>
                {categories.map((item) => {
                    const subcategoryDataMap: Record<string, SubCategoryEntry> = Object.fromEntries(
                        item.subcategories.map((sub) => [
                            sub,
                            {
                                data: loadedData[sub] ?? null,
                                onEnterSubCategory: () => loadSubCategory(sub),
                            },
                        ])
                    );

                    return (
                        <CarouselItem key={item.category}>
                            <CategoryCard
                                category={item}
                                subcategoryDataMap={subcategoryDataMap}
                            />
                        </CarouselItem>
                    );
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
