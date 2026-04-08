import Image from "next/image";
import Link from "next/link";
import { getStudyCategories } from "@/lib/study-categories";
import { getCurrentUser } from "@/lib/user";
import { StudyCategoriesProvider } from "@/context/study-categories-context";
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
        <StudyCategoriesProvider categories={categories}>
            <LearnSidebar user={user}>
                {children}
            </LearnSidebar>
            <Link
                href="/study-categories"
                className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg hover:opacity-80 transition-opacity"
            >
                <Image
                    src="/home-icon.png"
                    alt="Home"
                    width={56}
                    height={56}
                    className="rounded-full"
                />
            </Link>
        </StudyCategoriesProvider>
    );
}
