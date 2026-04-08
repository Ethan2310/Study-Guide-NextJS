"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type EditorJS from "@editorjs/editorjs";
import type Undo from "editorjs-undo";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn, downloadJson } from "@/utils/utils";

export default function TextEditor() {
    const holderRef = useRef<HTMLDivElement>(null);
    const editorRef = useRef<EditorJS | null>(null);
    const undoRef = useRef<Undo | null>(null);

    const [activeTab, setActiveTab] = useState("");
    const [showSaveAs, setShowSaveAs] = useState(false);
    const [saveAsName, setSaveAsName] = useState("");
    const [statusMsg, setStatusMsg] = useState<string | null>(null);

    const showStatus = useCallback((msg: string) => {
        setStatusMsg(msg);
        setTimeout(() => setStatusMsg(null), 2000);
    }, []);

    useEffect(() => {
        if (!holderRef.current) return;

        let destroyed = false;

        const init = async () => {
            const [{ default: EditorJSClass }, { default: Header }, { default: List }, { default: UndoClass }] =
                await Promise.all([
                    import("@editorjs/editorjs"),
                    import("@editorjs/header"),
                    import("@editorjs/list"),
                    import("editorjs-undo"),
                ]);

            if (destroyed || !holderRef.current || editorRef.current) return;

            const editor = new EditorJSClass({
                holder: holderRef.current,
                tools: {
                    header: Header,
                    list: List,
                },
                placeholder: "Start writing...",
                onReady: () => {
                    if (!destroyed) {
                        undoRef.current = new UndoClass({ editor });
                    }
                },
            });

            editorRef.current = editor;
        };

        init();

        return () => {
            destroyed = true;
            undoRef.current = null;
            editorRef.current?.destroy();
            editorRef.current = null;
        };
    }, []);

    // ── Actions ──────────────────────────────────────────────────────────────

    const handleSave = useCallback(async () => {
        if (!editorRef.current) return;
        const data = await editorRef.current.save();
        console.log("Editor save:", data);
        showStatus("Saved (console)");
    }, [showStatus]);

    const handleSaveAsSubmit = useCallback(async () => {
        const name = saveAsName.trim();
        if (!name || !editorRef.current) return;
        const data = await editorRef.current.save();
        downloadJson(data, name);
        showStatus(`Downloaded "${name}.json"`);
        setSaveAsName("");
        setShowSaveAs(false);
    }, [saveAsName, showStatus]);

    const handleUndo = useCallback(() => {
        undoRef.current?.undo();
    }, []);

    const handleRedo = useCallback(() => {
        undoRef.current?.redo();
    }, []);

    const handleClear = useCallback(async () => {
        if (!editorRef.current) return;
        await editorRef.current.clear();
        showStatus("Cleared");
    }, [showStatus]);

    // ── Tab dispatch ─────────────────────────────────────────────────────────

    const handleTabChange = useCallback(
        (value: string) => {
            setActiveTab(value);
            setTimeout(() => setActiveTab(""), 150);

            switch (value) {
                case "save":
                    handleSave();
                    break;
                case "save-as":
                    setShowSaveAs((prev) => !prev);
                    break;
                case "undo":
                    handleUndo();
                    break;
                case "redo":
                    handleRedo();
                    break;
                case "clear":
                    handleClear();
                    break;
            }
        },
        [handleSave, handleUndo, handleRedo, handleClear],
    );

    // ── Render ───────────────────────────────────────────────────────────────

    return (
        <div className="flex flex-col rounded-lg border bg-background">
            {/* Toolbar */}
            <div className="flex items-center justify-between border-b px-3 py-2">
                <Tabs value={activeTab} onValueChange={handleTabChange}>
                    <TabsList>
                        <TabsTrigger value="save">Save</TabsTrigger>
                        <TabsTrigger value="save-as">Save As</TabsTrigger>
                        <TabsTrigger value="undo">Undo</TabsTrigger>
                        <TabsTrigger value="redo">Redo</TabsTrigger>
                        <TabsTrigger value="clear">Clear</TabsTrigger>
                    </TabsList>
                </Tabs>

                {statusMsg && (
                    <span className="text-sm text-muted-foreground">{statusMsg}</span>
                )}
            </div>

            {/* Save As panel */}
            {showSaveAs && (
                <div className="flex items-center gap-2 border-b px-3 py-2">
                    <input
                        type="text"
                        value={saveAsName}
                        onChange={(e) => setSaveAsName(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSaveAsSubmit()}
                        placeholder="Enter file name…"
                        className={cn(
                            "flex-1 rounded-md border bg-background px-3 py-1 text-sm outline-none",
                            "focus:ring-1 focus:ring-ring",
                        )}
                    />
                    <button
                        onClick={handleSaveAsSubmit}
                        className="rounded-md bg-primary px-3 py-1 text-sm text-primary-foreground hover:bg-primary/90"
                    >
                        Save
                    </button>
                    <button
                        onClick={() => {
                            setShowSaveAs(false);
                            setSaveAsName("");
                        }}
                        className="rounded-md px-3 py-1 text-sm hover:bg-muted"
                    >
                        Cancel
                    </button>
                </div>
            )}

            {/* Editor canvas */}
            <div ref={holderRef} className="min-h-[400px] px-4 py-3" />
        </div>
    );
}
