import { notFound, redirect } from "next/navigation";
import { getStudyCategories } from "@/lib/study-categories";

interface LearnCategoryPageProps {
    params: Promise<{ category: string }>;
}

export default async function LearnCategoryPage({ params }: LearnCategoryPageProps) {
    const { category } = await params;
    const categories = await getStudyCategories();
    const found = categories.find(
        (c) => c.category.toLowerCase().replace(/\s+/g, "-") === category
    );
    if (!found) notFound();
    const firstSub = found.subcategories[0].toLowerCase().replace(/\s+/g, "-");
    redirect(`/study-categories/learn-category/${category}/learn-sub-category/${firstSub}`);
}
