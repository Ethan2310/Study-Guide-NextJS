import { getStudyCategories } from "@/lib/study-categories";
import { getCurrentUser } from "@/lib/user";
import LearnSidebar from "@/app/_client-components/learn-sidebar";

export default async function LearnCategoryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [categories, user] = await Promise.all([
        getStudyCategories(),
        getCurrentUser(),
    ]);

    return (
        <LearnSidebar categories={categories} user={user}>
            {children}
        </LearnSidebar>
    );
}
