export interface StudyCategory {
    category: string;
    description: string;
}

export async function getStudyCategories(): Promise<StudyCategory[]> {
    return [
        {
            category: "Mathematics",
            description: "Algebra, calculus, statistics and more.",
        },
        {
            category: "Computer Science",
            description: "Algorithms, data structures and software design.",
        },
        {
            category: "Physics",
            description: "Classical mechanics, electromagnetism and quantum theory.",
        },
        {
            category: "History",
            description: "World events, civilisations and historical analysis.",
        },
        {
            category: "Languages",
            description: "Grammar, vocabulary and communication skills.",
        },
    ];
}
