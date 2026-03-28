import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";
import { getStudyCategories } from "@/lib/study-categories";

export default async function StudyCategoriesPage() {
    const categories = await getStudyCategories();

    return (
        <main className="flex flex-col min-h-screen items-center justify-center gap-8">
            <h1 className="heading">Study Categories</h1>
            <Carousel className="w-full max-w-md">
                <CarouselContent>
                    {categories.map((item) => (
                        <CarouselItem key={item.category}>
                            <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-border bg-card p-10 text-center shadow-sm">
                                <h2 className="subheading text-card-foreground">{item.category}</h2>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </main>
    );
}
