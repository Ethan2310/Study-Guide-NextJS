import { redirect } from "next/navigation";
import { getStudyCategories } from "@/lib/study-categories";

export default async function LearnCategoryIndex() {
    const categories = await getStudyCategories();
    const first = categories[0].category.toLowerCase().replace(/\s+/g, "-");
    redirect(`/study-categories/learn-category/${first}`);
}
