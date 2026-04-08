declare module "editorjs-undo" {
    import type EditorJS from "@editorjs/editorjs";

    interface UndoConfig {
        shortcuts?: {
            undo?: string;
            redo?: string;
        };
        debounceTimer?: number;
    }

    interface UndoOptions {
        editor: EditorJS;
        maxLength?: number;
        onUpdate?: () => void;
        config?: UndoConfig;
    }

    export default class Undo {
        constructor(options: UndoOptions);
        initialize(initialData: object): void;
        undo(): void;
        redo(): void;
        canUndo: boolean;
        canRedo: boolean;
        destroy(): void;
    }
}
