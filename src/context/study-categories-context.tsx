"use client";

import { createContext, useContext } from "react";
import type { StudyCategory } from "@/lib/study-categories";

const StudyCategoriesContext = createContext<StudyCategory[] | null>(null);

export function StudyCategoriesProvider({
    categories,
    children,
}: {
    categories: StudyCategory[];
    children: React.ReactNode;
}) {
    return (
        <StudyCategoriesContext.Provider value={categories}>
            {children}
        </StudyCategoriesContext.Provider>
    );
}

export function useStudyCategories(): StudyCategory[] {
    const ctx = useContext(StudyCategoriesContext);
    if (!ctx) throw new Error("useStudyCategories must be used within StudyCategoriesProvider");
    return ctx;
}
