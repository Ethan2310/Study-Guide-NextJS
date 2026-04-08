"use client";

import { useState } from "react";
import LearningStepsTabs from "./learning-steps-tabs";
import LearningStepView from "@/components/learning-step-view";
import type { SubCategoryData, LearningStepDetail } from "@/lib/study-categories";

interface SubCategoryViewProps {
    learningSteps: SubCategoryData[];
    stepDetails: Record<string, LearningStepDetail>;
}

export default function SubCategoryView({ learningSteps, stepDetails }: SubCategoryViewProps) {
    const [activeStepName, setActiveStepName] = useState(learningSteps[0]?.learningStep ?? "");

    const activeStep = learningSteps.find((s) => s.learningStep === activeStepName);
    const activeDetail = activeStep ? stepDetails[activeStep.learningStep] : undefined;

    return (
        <div className="flex flex-col gap-4">
            <LearningStepsTabs
                learningSteps={learningSteps}
                activeStep={activeStepName}
                onStepChange={setActiveStepName}
            />

            {activeStep && (
                <div className="flex flex-col gap-1">
                    <p className="text-sm text-muted-foreground">{activeStep.description}</p>
                    <p className="text-sm">
                        Status: <span className="font-medium">{activeStep.status}</span>
                    </p>
                    <p className="text-sm">
                        Progress: <span className="font-medium">{activeStep.progressCompleted}</span>
                    </p>
                </div>
            )}

            {activeDetail && <LearningStepView detail={activeDetail} />}
        </div>
    );
}
