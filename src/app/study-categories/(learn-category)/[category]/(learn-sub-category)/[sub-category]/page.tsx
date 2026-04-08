import { notFound } from "next/navigation";
import { getStudyCategories, getSubCategoryData, getLearningStepData } from "@/lib/study-categories";
import type { LearningStepDetail } from "@/lib/study-categories";
import SubCategoryView from "@/app/_client-components/sub-category-view";

interface SubCategoryPageProps {
    params: Promise<{ category: string; "sub-category": string }>;
}

export default async function SubCategoryPage({ params }: SubCategoryPageProps) {
    const { category, "sub-category": subCategorySlug } = await params;
    const categories = await getStudyCategories();
    const found = categories.find(
        (c) => c.category.toLowerCase().replace(/\s+/g, "-") === category
    );
    if (!found) notFound();

    const subCategoryName = found.subcategories.find(
        (s) => s.toLowerCase().replace(/\s+/g, "-") === subCategorySlug
    );
    if (!subCategoryName) notFound();

    const learningSteps = await getSubCategoryData(subCategoryName);

    // Fetch detail for every step in parallel
    const detailResults = await Promise.all(
        learningSteps.map((step) => getLearningStepData(step.learningStep))
    );
    const stepDetails: Record<string, LearningStepDetail> = {};
    learningSteps.forEach((step, i) => {
        const detail = detailResults[i];
        if (detail) stepDetails[step.learningStep] = detail;
    });

    return (
        <main className="flex flex-1 flex-col gap-4 p-8">
            <h1 className="text-2xl font-semibold">{subCategoryName}</h1>
            <SubCategoryView learningSteps={learningSteps} stepDetails={stepDetails} />
        </main>
    );
}

