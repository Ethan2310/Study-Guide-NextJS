import { notFound } from "next/navigation";
import { getStudyCategories, getSubCategoryData } from "@/lib/study-categories";
import LearningStepsTabs from "@/app/_client-components/learning-steps-tabs";

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

    return (
        <main className="flex flex-1 flex-col gap-4 p-8">
            <h1 className="text-2xl font-semibold">{subCategoryName}</h1>
            <LearningStepsTabs learningSteps={learningSteps} />
        </main>
    );
}
