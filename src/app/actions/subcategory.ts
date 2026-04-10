"use server";

import {
    getSubCategoryData,
    getSubCategories,
    getLearningSteps,
    getLearningStepData,
} from "@/lib/study-categories";

export async function fetchSubCategoryData(subcategory: string) {
    return getSubCategoryData(subcategory);
}

export async function fetchSubCategories(category: string) {
    return getSubCategories(category);
}

export async function fetchLearningSteps(subCategory: string) {
    return getLearningSteps(subCategory);
}

export async function fetchLearningStepData(learningStep: string) {
    return getLearningStepData(learningStep);
}

