"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import type { StudyCategory } from "@/lib/study-categories";
import type { SubCategoryData } from "@/lib/study-categories";

export interface SubCategoryEntry {
    data: SubCategoryData[] | null;
    onEnterSubCategory: () => Promise<void>;
}

interface CategoryCardProps {
    category: StudyCategory;
    subcategoryDataMap: Record<string, SubCategoryEntry>;
}

export default function CategoryCard({ category, subcategoryDataMap }: CategoryCardProps) {
    const [activeTab, setActiveTab] = useState(category.subcategories[0]);

    const handleTabChange = (sub: string) => {
        setActiveTab(sub);
        subcategoryDataMap[sub]?.onEnterSubCategory();
    };

    const rows = subcategoryDataMap[activeTab]?.data;

    return (
        <Card className="w-full">
            <CardHeader>
                <div className="flex flex-col gap-1">
                    <h2 className="text-base font-semibold">{category.category}</h2>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
                <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                    <TabsList>
                        {category.subcategories.map((sub) => (
                            <TabsTrigger key={sub} value={sub}>
                                {sub}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {category.subcategories.map((sub) => (
                        <TabsContent key={sub} value={sub} />
                    ))}
                </Tabs>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Learning Step</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Progress Completed</TableHead>
                            <TableHead>Description</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {rows === null || rows === undefined ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center text-muted-foreground">
                                    Loading...
                                </TableCell>
                            </TableRow>
                        ) : rows.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center text-muted-foreground">
                                    No data available.
                                </TableCell>
                            </TableRow>
                        ) : (
                            rows.map((row) => (
                                <TableRow key={row.learningStep}>
                                    <TableCell>{row.learningStep}</TableCell>
                                    <TableCell>{row.status}</TableCell>
                                    <TableCell>{row.progressCompleted}</TableCell>
                                    <TableCell>{row.description}</TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                <Button>Continue Learning</Button>
            </CardFooter>
        </Card>
    );
}
