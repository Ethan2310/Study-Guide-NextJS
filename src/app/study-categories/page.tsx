import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";
import { getStudyCategories } from "@/lib/study-categories";
import { getSubCategoryData, type SubCategoryData } from "@/lib/subcategory-data";
import CategoryCard from "@/app/_client-components/category-card";

export default async function StudyCategoriesPage() {
    const categories = await getStudyCategories();

    const subcategoryDataMap: Record<string, SubCategoryData[]> = {};
    await Promise.all(
        categories.flatMap((cat) =>
            cat.subcategories.map(async (sub) => {
                subcategoryDataMap[sub] = await getSubCategoryData(sub);
            })
        )
    );

    return (
        <main className="flex flex-col min-h-screen items-center justify-center gap-8 px-4">
            <h1 className="heading">Study Categories</h1>
            <Carousel className="w-full max-w-4xl">
                <CarouselContent>
                    {categories.map((item) => (
                        <CarouselItem key={item.category}>
                            <CategoryCard
                                category={item}
                                subcategoryDataMap={subcategoryDataMap}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </main>
    );
}
