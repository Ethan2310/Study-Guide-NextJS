import TextEditor from "@/components/text-editor";

interface NotePageProps {
    params: Promise<{ note: string }>;
}

export default async function NotePage({ params }: NotePageProps) {
    const { note } = await params;
    const noteName = decodeURIComponent(note);

    return (
        <div className="mx-auto max-w-4xl px-6 py-8">
            <h1 className="mb-6 text-xl font-semibold">{noteName}</h1>
            <TextEditor />
        </div>
    );
}
