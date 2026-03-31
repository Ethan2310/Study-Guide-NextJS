interface LearnCategoryPageProps {
    params: Promise<{ category: string }>;
}

export default async function LearnCategoryPage({ params }: LearnCategoryPageProps) {
    const { category } = await params;

    return (
        <main className="flex flex-1 flex-col gap-4 p-8">
            <h1 className="text-2xl font-semibold capitalize">
                {category.replace(/-/g, " ")}
            </h1>
        </main>
    );
}
