"use server";

import { getSubCategoryData } from "@/lib/study-categories";

export async function fetchSubCategoryData(subcategory: string) {
    return getSubCategoryData(subcategory);
}
