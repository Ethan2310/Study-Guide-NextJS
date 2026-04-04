import { notFound } from "next/navigation";
import { getStudyCategories } from "@/lib/study-categories";
import SubCategoryTabs from "@/app/_client-components/sub-category-tabs";

interface SubCategoryPageProps {
    params: Promise<{ category: string; "sub-category": string }>;
}

export default async function SubCategoryPage({ params }: SubCategoryPageProps) {
    const { category, "sub-category": subCategory } = await params;
    const categories = await getStudyCategories();
    const found = categories.find(
        (c) => c.category.toLowerCase().replace(/\s+/g, "-") === category
    );
    if (!found) notFound();

    return (
        <main className="flex flex-1 flex-col gap-4 p-8">
            <h1 className="text-2xl font-semibold capitalize">
                {category.replace(/-/g, " ")}
            </h1>
            <SubCategoryTabs
                categorySlug={category}
                subcategories={found.subcategories}
                activeSlug={subCategory}
            />
        </main>
    );
}
