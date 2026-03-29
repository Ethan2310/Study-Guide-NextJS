export interface StudyCategory {
    category: string;
    description: string;
    subcategories: string[];
}

export async function getStudyCategories(): Promise<StudyCategory[]> {
    return [
        {
            category: "Mathematics",
            description: "Algebra, calculus, statistics and more.",
            subcategories: ["Algebra", "Calculus", "Statistics", "Geometry"],
        },
        {
            category: "Computer Science",
            description: "Algorithms, data structures and software design.",
            subcategories: ["Algorithms", "Data Structures", "Software Design", "Networking"],
        },
        {
            category: "Physics",
            description: "Classical mechanics, electromagnetism and quantum theory.",
            subcategories: ["Classical Mechanics", "Electromagnetism", "Quantum Theory", "Thermodynamics"],
        },
        {
            category: "History",
            description: "World events, civilisations and historical analysis.",
            subcategories: ["Ancient History", "Medieval History", "Modern History", "World Wars"],
        },
        {
            category: "Languages",
            description: "Grammar, vocabulary and communication skills.",
            subcategories: ["Grammar", "Vocabulary", "Writing", "Speaking"],
        },
    ];
}
