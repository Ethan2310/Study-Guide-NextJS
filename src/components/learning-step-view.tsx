"use client";

import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import type { LearningStepDetail } from "@/lib/study-categories";

interface LearningStepViewProps {
    detail: LearningStepDetail;
}

export default function LearningStepView({ detail }: LearningStepViewProps) {
    return (
        <div className="aspect-square w-full border border-black rounded-lg flex overflow-hidden">
            {/* ── Left half: Links (top) + Notes (bottom) ─────────────────── */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* Links */}
                <div className="flex flex-1 flex-col gap-2 overflow-y-auto p-4">
                    <div>
                        <p className="text-sm font-semibold">Links</p>
                        <p className="text-xs text-muted-foreground">
                            External resources for this learning step
                        </p>
                    </div>
                    <ul className="flex flex-col gap-1.5">
                        {detail.links.map((link) => (
                            <li key={link} className="text-xs">
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline underline-offset-2 hover:text-blue-800 break-all"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Horizontal separator between links and notes */}
                <Separator />

                {/* Notes */}
                <div className="flex flex-1 flex-col gap-2 overflow-y-auto p-4">
                    <div>
                        <p className="text-sm font-semibold">Notes</p>
                        <p className="text-xs text-muted-foreground">
                            Saved note files attached to this step
                        </p>
                    </div>
                    <Textarea
                        readOnly
                        value={detail.notes.join("\n")}
                        className="flex-1 resize-none text-xs"
                    />
                </div>
            </div>

            {/* Blue vertical separator */}
            <Separator orientation="vertical" className="w-0.5 bg-blue-500" />

            {/* ── Right half: Goals ──────────────────────────────────────── */}
            <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
                <p className="text-sm font-semibold">Goals</p>

                {detail.goals.map((goal, i) => (
                    <div key={i} className="flex flex-col gap-2">
                        <div className="flex flex-col gap-1">
                            <p className="text-sm">{goal.goalDescription}</p>
                            <p className="text-xs text-muted-foreground">
                                Progress: {goal.goalProgressCompleted}
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Due: {goal.goalDueDate}
                            </p>
                        </div>

                        {i < detail.goals.length - 1 && (
                            <Separator className="bg-purple-500" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
