import { getStudyCategories } from "@/lib/study-categories";
import { fetchSubCategoryData } from "@/app/actions/subcategory";
import StudyCategoriesCarousel from "@/app/_client-components/study-categories-carousel";
import { SubCategoriesProvider } from "@/context/sub-categories-context";

export default async function StudyCategoriesPage() {
    const categories = await getStudyCategories();

    return (
        <main className="flex flex-col min-h-screen items-center justify-center gap-8 px-4" style={{ backgroundImage: "url('/welcome-background.jpg')" }}>
            <h1 className="heading !text-white">Study Categories</h1>
            <SubCategoriesProvider>
                <StudyCategoriesCarousel
                    categories={categories}
                    fetchSubCategoryData={fetchSubCategoryData}
                />
            </SubCategoriesProvider>
        </main>
    );
}


