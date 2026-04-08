"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";
import type { StudyCategory } from "@/lib/study-categories";

/** Map of category name → its sub-category names (populated lazily via carousel). */
type SubCategoriesMap = Record<string, string[]>;

interface SubCategoriesContextValue {
    subCategories: SubCategoriesMap;
    loadSubCategories: (category: StudyCategory) => void;
}

const SubCategoriesContext = createContext<SubCategoriesContextValue | null>(null);

export function SubCategoriesProvider({ children }: { children: React.ReactNode }) {
    const [subCategories, setSubCategories] = useState<SubCategoriesMap>({});
    // Prevent duplicate stores if the same category is visited more than once
    const storedRef = useRef(new Set<string>());

    const loadSubCategories = useCallback((category: StudyCategory) => {
        if (storedRef.current.has(category.category)) return;
        storedRef.current.add(category.category);
        setSubCategories((prev) => ({
            ...prev,
            [category.category]: category.subcategories,
        }));
    }, []);

    return (
        <SubCategoriesContext.Provider value={{ subCategories, loadSubCategories }}>
            {children}
        </SubCategoriesContext.Provider>
    );
}

/** Returns the cached sub-categories map (only contains categories visited via the carousel). */
export function useSubCategories(): SubCategoriesMap {
    const ctx = useContext(SubCategoriesContext);
    if (!ctx) throw new Error("useSubCategories must be used within SubCategoriesProvider");
    return ctx.subCategories;
}

/** Returns the function used to cache a category's sub-categories on first visit. */
export function useLoadSubCategories(): (category: StudyCategory) => void {
    const ctx = useContext(SubCategoriesContext);
    if (!ctx) throw new Error("useLoadSubCategories must be used within SubCategoriesProvider");
    return ctx.loadSubCategories;
}
