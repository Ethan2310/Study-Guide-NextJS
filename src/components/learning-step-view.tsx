"use client";

import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import type { LearningStepDetail } from "@/lib/study-categories";

interface LearningStepViewProps {
    detail: LearningStepDetail;
}

export default function LearningStepView({ detail }: LearningStepViewProps) {
    const router = useRouter();

    return (
        <div className="aspect-square w-full border border-black rounded-lg flex overflow-hidden">
            {/* ── Left half: Links (top) + Notes (bottom) ─────────────────── */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* Links */}
                <div className="flex flex-col gap-2 p-4 h-[45%]">
                    <div>
                        <p className="text-sm font-semibold">Links</p>
                        <p className="text-xs text-muted-foreground">
                            External resources for this learning step
                        </p>
                    </div>
                    <ul className="flex flex-col gap-1.5 overflow-y-auto flex-1">
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
                    <button
                        onClick={() => console.log("Add link: to be implemented")}
                        className="mt-auto w-full rounded-md border border-dashed border-muted-foreground/50 py-1.5 text-xs text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
                    >
                        + Add Link
                    </button>
                </div>

                {/* Horizontal separator between links and notes */}
                <Separator />

                {/* Notes */}
                <div className="flex flex-col gap-2 p-4 h-[45%]">
                    <div>
                        <p className="text-sm font-semibold">Notes</p>
                        <p className="text-xs text-muted-foreground">
                            Saved note files attached to this step
                        </p>
                    </div>
                    <ul className="flex flex-col gap-1.5 overflow-y-auto flex-1">
                        {detail.notes.map((note) => (
                            <li key={note} className="text-xs">
                                <button
                                    onClick={() => router.push(`/notes/${encodeURIComponent(note)}`)}
                                    className="text-left text-blue-600 underline underline-offset-2 hover:text-blue-800"
                                >
                                    {note}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={() => router.push("/notes/new-note")}
                        className="mt-auto w-full rounded-md border border-dashed border-muted-foreground/50 py-1.5 text-xs text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
                    >
                        + Add Note
                    </button>
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
