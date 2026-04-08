"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { SubCategoryData } from "@/lib/study-categories";

interface LearningStepsTabsProps {
    learningSteps: SubCategoryData[];
    activeStep: string;
    onStepChange: (stepName: string) => void;
}

export default function LearningStepsTabs({ learningSteps, activeStep, onStepChange }: LearningStepsTabsProps) {
    return (
        <Tabs
            value={activeStep.toLowerCase().replace(/\s+/g, "-")}
            onValueChange={(slug) => {
                const step = learningSteps.find(
                    (s) => s.learningStep.toLowerCase().replace(/\s+/g, "-") === slug
                );
                if (step) onStepChange(step.learningStep);
            }}
        >
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
        </Tabs>
    );
}

