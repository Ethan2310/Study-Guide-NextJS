"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import type { SubCategoryData } from "@/lib/study-categories";

interface LearningStepsTabsProps {
    learningSteps: SubCategoryData[];
}

export default function LearningStepsTabs({ learningSteps }: LearningStepsTabsProps) {
    const firstSlug = learningSteps[0]?.learningStep.toLowerCase().replace(/\s+/g, "-") ?? "";
    const [active, setActive] = useState(firstSlug);

    return (
        <Tabs value={active} onValueChange={setActive}>
            <TabsList>
                {learningSteps.map((step) => {
                    const slug = step.learningStep.toLowerCase().replace(/\s+/g, "-");
                    return (
                        <TabsTrigger key={slug} value={slug}>
                            {step.learningStep}
                        </TabsTrigger>
                    );
                })}
            </TabsList>

            {learningSteps.map((step) => {
                const slug = step.learningStep.toLowerCase().replace(/\s+/g, "-");
                return (
                    <TabsContent key={slug} value={slug}>
                        <div className="flex flex-col gap-2 pt-4">
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                            <p className="text-sm">
                                Status: <span className="font-medium">{step.status}</span>
                            </p>
                            <p className="text-sm">
                                Progress: <span className="font-medium">{step.progressCompleted}</span>
                            </p>
                        </div>
                    </TabsContent>
                );
            })}
        </Tabs>
    );
}
