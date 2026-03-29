export interface SubCategoryData {
    learningStep: string;
    status: "Not started" | "In progress" | "Completed";
    progressCompleted: string;
    description: string;
}

const subcategoryDataMap: Record<string, SubCategoryData[]> = {
    // Mathematics
    Algebra: [
        {
            learningStep: "Introduction to Algebra",
            status: "In progress",
            progressCompleted: "80%",
            description: "A quick introduction to the basics of algebra.",
        },
        {
            learningStep: "Linear Equations",
            status: "Completed",
            progressCompleted: "100%",
            description: "Solving and graphing linear equations.",
        },
        {
            learningStep: "Quadratic Equations",
            status: "Not started",
            progressCompleted: "0%",
            description: "Factoring and solving quadratic equations.",
        },
    ],
    Calculus: [
        {
            learningStep: "Limits and Continuity",
            status: "Completed",
            progressCompleted: "100%",
            description: "Understanding limits and the concept of continuity.",
        },
        {
            learningStep: "Differentiation",
            status: "In progress",
            progressCompleted: "60%",
            description: "Rules and techniques for finding derivatives.",
        },
        {
            learningStep: "Integration",
            status: "Not started",
            progressCompleted: "0%",
            description: "Definite and indefinite integrals.",
        },
    ],
    Statistics: [
        {
            learningStep: "Descriptive Statistics",
            status: "Completed",
            progressCompleted: "100%",
            description: "Mean, median, mode and standard deviation.",
        },
        {
            learningStep: "Probability",
            status: "In progress",
            progressCompleted: "45%",
            description: "Basic probability theory and distributions.",
        },
        {
            learningStep: "Hypothesis Testing",
            status: "Not started",
            progressCompleted: "0%",
            description: "Setting up and evaluating statistical hypotheses.",
        },
    ],
    Geometry: [
        {
            learningStep: "Euclidean Geometry",
            status: "In progress",
            progressCompleted: "70%",
            description: "Points, lines, angles and basic shapes.",
        },
        {
            learningStep: "Trigonometry",
            status: "Not started",
            progressCompleted: "0%",
            description: "Sine, cosine, tangent and their applications.",
        },
    ],
    // Computer Science
    Algorithms: [
        {
            learningStep: "Introduction to Algorithms",
            status: "Completed",
            progressCompleted: "100%",
            description: "Big-O notation and algorithm analysis.",
        },
        {
            learningStep: "Sorting Algorithms",
            status: "In progress",
            progressCompleted: "55%",
            description: "Bubble sort, merge sort, quicksort and more.",
        },
        {
            learningStep: "Graph Algorithms",
            status: "Not started",
            progressCompleted: "0%",
            description: "BFS, DFS, Dijkstra and shortest path problems.",
        },
    ],
    "Data Structures": [
        {
            learningStep: "Arrays and Linked Lists",
            status: "Completed",
            progressCompleted: "100%",
            description: "Fundamentals of arrays and linked list operations.",
        },
        {
            learningStep: "Trees and Heaps",
            status: "In progress",
            progressCompleted: "40%",
            description: "Binary trees, BSTs and heap data structures.",
        },
        {
            learningStep: "Hash Tables",
            status: "Not started",
            progressCompleted: "0%",
            description: "Hashing, collision resolution and hash maps.",
        },
    ],
    "Software Design": [
        {
            learningStep: "SOLID Principles",
            status: "In progress",
            progressCompleted: "50%",
            description: "Core principles of object-oriented software design.",
        },
        {
            learningStep: "Design Patterns",
            status: "Not started",
            progressCompleted: "0%",
            description: "Common patterns like Factory, Observer, and Strategy.",
        },
    ],
    Networking: [
        {
            learningStep: "OSI Model",
            status: "Completed",
            progressCompleted: "100%",
            description: "The seven layers of the OSI networking model.",
        },
        {
            learningStep: "TCP/IP",
            status: "In progress",
            progressCompleted: "65%",
            description: "How data is transmitted across the internet.",
        },
    ],
    // Physics
    "Classical Mechanics": [
        {
            learningStep: "Newton's Laws",
            status: "Completed",
            progressCompleted: "100%",
            description: "The three laws of motion and their applications.",
        },
        {
            learningStep: "Work, Energy and Power",
            status: "In progress",
            progressCompleted: "75%",
            description: "Conservation of energy and power calculations.",
        },
        {
            learningStep: "Rotational Motion",
            status: "Not started",
            progressCompleted: "0%",
            description: "Torque, angular momentum and rotational dynamics.",
        },
    ],
    Electromagnetism: [
        {
            learningStep: "Electric Fields",
            status: "In progress",
            progressCompleted: "30%",
            description: "Coulomb's law and electric field calculations.",
        },
        {
            learningStep: "Magnetic Fields",
            status: "Not started",
            progressCompleted: "0%",
            description: "Magnetic flux, induction and Maxwell's equations.",
        },
    ],
    "Quantum Theory": [
        {
            learningStep: "Wave-Particle Duality",
            status: "In progress",
            progressCompleted: "20%",
            description: "The dual nature of light and matter.",
        },
        {
            learningStep: "Schrödinger Equation",
            status: "Not started",
            progressCompleted: "0%",
            description: "The fundamental equation of quantum mechanics.",
        },
    ],
    Thermodynamics: [
        {
            learningStep: "Laws of Thermodynamics",
            status: "Completed",
            progressCompleted: "100%",
            description: "The four laws governing heat and energy transfer.",
        },
        {
            learningStep: "Entropy",
            status: "In progress",
            progressCompleted: "50%",
            description: "Entropy, disorder and the arrow of time.",
        },
    ],
    // History
    "Ancient History": [
        {
            learningStep: "Ancient Egypt",
            status: "Completed",
            progressCompleted: "100%",
            description: "Pharaohs, pyramids and Egyptian civilisation.",
        },
        {
            learningStep: "Ancient Greece",
            status: "In progress",
            progressCompleted: "60%",
            description: "City-states, philosophy and the Greek empire.",
        },
        {
            learningStep: "Ancient Rome",
            status: "Not started",
            progressCompleted: "0%",
            description: "The rise and fall of the Roman Republic and Empire.",
        },
    ],
    "Medieval History": [
        {
            learningStep: "The Feudal System",
            status: "Completed",
            progressCompleted: "100%",
            description: "Social hierarchy and land ownership in medieval Europe.",
        },
        {
            learningStep: "The Crusades",
            status: "In progress",
            progressCompleted: "40%",
            description: "Religious wars and their impact on Europe and the Middle East.",
        },
    ],
    "Modern History": [
        {
            learningStep: "The Enlightenment",
            status: "In progress",
            progressCompleted: "55%",
            description: "The age of reason and its influence on Western society.",
        },
        {
            learningStep: "The Industrial Revolution",
            status: "Not started",
            progressCompleted: "0%",
            description: "Industrialisation and its social and economic effects.",
        },
    ],
    "World Wars": [
        {
            learningStep: "World War I",
            status: "Completed",
            progressCompleted: "100%",
            description: "Causes, key battles and aftermath of the First World War.",
        },
        {
            learningStep: "World War II",
            status: "In progress",
            progressCompleted: "80%",
            description: "The global conflict, the Holocaust and the Allied victory.",
        },
        {
            learningStep: "The Cold War",
            status: "Not started",
            progressCompleted: "0%",
            description: "US-Soviet rivalry and proxy conflicts post-1945.",
        },
    ],
    // Languages
    Grammar: [
        {
            learningStep: "Parts of Speech",
            status: "Completed",
            progressCompleted: "100%",
            description: "Nouns, verbs, adjectives, adverbs and more.",
        },
        {
            learningStep: "Sentence Structure",
            status: "In progress",
            progressCompleted: "70%",
            description: "Building correct and varied sentences.",
        },
        {
            learningStep: "Punctuation",
            status: "Not started",
            progressCompleted: "0%",
            description: "Using punctuation correctly in written English.",
        },
    ],
    Vocabulary: [
        {
            learningStep: "Root Words",
            status: "In progress",
            progressCompleted: "45%",
            description: "Understanding Latin and Greek roots to expand vocabulary.",
        },
        {
            learningStep: "Synonyms and Antonyms",
            status: "Not started",
            progressCompleted: "0%",
            description: "Expanding word choice through synonyms and antonyms.",
        },
    ],
    Writing: [
        {
            learningStep: "Essay Structure",
            status: "Completed",
            progressCompleted: "100%",
            description: "Introduction, body paragraphs and conclusion.",
        },
        {
            learningStep: "Persuasive Writing",
            status: "In progress",
            progressCompleted: "35%",
            description: "Techniques for writing compelling arguments.",
        },
    ],
    Speaking: [
        {
            learningStep: "Public Speaking Basics",
            status: "In progress",
            progressCompleted: "50%",
            description: "Confidence, clarity and structure in spoken communication.",
        },
        {
            learningStep: "Presentations",
            status: "Not started",
            progressCompleted: "0%",
            description: "Planning and delivering effective presentations.",
        },
    ],
};

export async function getSubCategoryData(subcategory: string): Promise<SubCategoryData[]> {
    return subcategoryDataMap[subcategory] ?? [];
}
