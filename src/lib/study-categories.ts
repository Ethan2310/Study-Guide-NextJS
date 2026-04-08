import { cache } from "react";

export interface StudyCategory {
    category: string;
    description: string;
    subcategories: string[];
}

export interface SubCategoryData {
    learningStep: string;
    status: "Not started" | "In progress" | "Completed";
    progressCompleted: string;
    description: string;
}

export interface Goal {
    goalProgressCompleted: string;
    goalDescription: string;
    goalDueDate: string;
}

export interface LearningStepDetail {
    summary: SubCategoryData;
    links: string[];
    notes: string[];
    goals: Goal[];
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

// ── Learning-step detail map (links, notes, goals) ────────────────────────────
// The summary field is derived at runtime from subcategoryDataMap.

type LearningStepPartial = Omit<LearningStepDetail, "summary">;

const learningStepDetailMap: Record<string, LearningStepPartial> = {
    // Mathematics — Algebra
    "Introduction to Algebra": {
        links: [
            "https://www.khanacademy.org/math/algebra",
            "https://www.mathsisfun.com/algebra/introduction.html",
        ],
        notes: ["intro-algebra-overview"],
        goals: [
            { goalProgressCompleted: "100%", goalDescription: "Understand variables and constants", goalDueDate: "2026-01-15" },
            { goalProgressCompleted: "80%", goalDescription: "Evaluate simple algebraic expressions", goalDueDate: "2026-02-01" },
        ],
    },
    "Linear Equations": {
        links: [
            "https://www.khanacademy.org/math/algebra/linear-equations",
            "https://www.mathsisfun.com/algebra/linear-equations.html",
        ],
        notes: ["linear-equations-notes"],
        goals: [
            { goalProgressCompleted: "100%", goalDescription: "Solve one-variable linear equations", goalDueDate: "2026-01-20" },
            { goalProgressCompleted: "100%", goalDescription: "Graph linear equations on a coordinate plane", goalDueDate: "2026-02-10" },
        ],
    },
    "Quadratic Equations": {
        links: [
            "https://www.khanacademy.org/math/algebra/quadratic-equations",
            "https://www.purplemath.com/modules/solvquad.htm",
        ],
        notes: ["quadratics-notes"],
        goals: [
            { goalProgressCompleted: "0%", goalDescription: "Factor quadratic expressions", goalDueDate: "2026-05-01" },
            { goalProgressCompleted: "0%", goalDescription: "Apply the quadratic formula", goalDueDate: "2026-05-15" },
        ],
    },
    // Mathematics — Calculus
    "Limits and Continuity": {
        links: [
            "https://www.khanacademy.org/math/calculus-1/limits-basics",
            "https://tutorial.math.lamar.edu/classes/calci/limitsintro.aspx",
        ],
        notes: ["limits-continuity-notes"],
        goals: [
            { goalProgressCompleted: "100%", goalDescription: "Evaluate limits algebraically", goalDueDate: "2026-01-10" },
            { goalProgressCompleted: "100%", goalDescription: "Identify points of discontinuity", goalDueDate: "2026-01-25" },
        ],
    },
    "Differentiation": {
        links: [
            "https://www.khanacademy.org/math/calculus-1/taking-derivatives",
            "https://tutorial.math.lamar.edu/classes/calci/derivativeintro.aspx",
        ],
        notes: ["differentiation-rules-notes"],
        goals: [
            { goalProgressCompleted: "60%", goalDescription: "Apply power, product and chain rules", goalDueDate: "2026-04-20" },
            { goalProgressCompleted: "0%", goalDescription: "Differentiate trigonometric functions", goalDueDate: "2026-05-10" },
        ],
    },
    "Integration": {
        links: [
            "https://www.khanacademy.org/math/calculus-1/integration",
            "https://tutorial.math.lamar.edu/classes/calci/integralsintro.aspx",
        ],
        notes: ["integration-techniques-notes"],
        goals: [
            { goalProgressCompleted: "0%", goalDescription: "Compute definite integrals", goalDueDate: "2026-06-01" },
            { goalProgressCompleted: "0%", goalDescription: "Apply integration by substitution", goalDueDate: "2026-06-20" },
        ],
    },
    // Mathematics — Statistics
    "Descriptive Statistics": {
        links: [
            "https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data",
            "https://www.statisticshowto.com/descriptive-statistics/",
        ],
        notes: ["descriptive-stats-notes"],
        goals: [
            { goalProgressCompleted: "100%", goalDescription: "Calculate mean, median and mode", goalDueDate: "2026-01-05" },
            { goalProgressCompleted: "100%", goalDescription: "Interpret standard deviation", goalDueDate: "2026-01-18" },
        ],
    },
    "Probability": {
        links: [
            "https://www.khanacademy.org/math/statistics-probability/probability-library",
            "https://www.mathsisfun.com/data/probability.html",
        ],
        notes: ["probability-foundations-notes"],
        goals: [
            { goalProgressCompleted: "45%", goalDescription: "Apply addition and multiplication rules", goalDueDate: "2026-04-30" },
            { goalProgressCompleted: "0%", goalDescription: "Work with conditional probability", goalDueDate: "2026-05-20" },
        ],
    },
    "Hypothesis Testing": {
        links: [
            "https://www.khanacademy.org/math/statistics-probability/significance-tests",
            "https://www.statisticshowto.com/probability-and-statistics/hypothesis-testing/",
        ],
        notes: ["hypothesis-testing-notes"],
        goals: [
            { goalProgressCompleted: "0%", goalDescription: "Formulate null and alternative hypotheses", goalDueDate: "2026-06-10" },
            { goalProgressCompleted: "0%", goalDescription: "Interpret p-values correctly", goalDueDate: "2026-06-25" },
        ],
    },
    // Mathematics — Geometry
    "Euclidean Geometry": {
        links: [
            "https://www.khanacademy.org/math/geometry",
            "https://www.mathsisfun.com/geometry/",
        ],
        notes: ["euclidean-geometry-notes"],
        goals: [
            { goalProgressCompleted: "70%", goalDescription: "Prove congruence of triangles", goalDueDate: "2026-04-25" },
            { goalProgressCompleted: "0%", goalDescription: "Calculate area and perimeter of polygons", goalDueDate: "2026-05-05" },
        ],
    },
    "Trigonometry": {
        links: [
            "https://www.khanacademy.org/math/trigonometry",
            "https://www.mathsisfun.com/algebra/trigonometry.html",
        ],
        notes: ["trigonometry-notes"],
        goals: [
            { goalProgressCompleted: "0%", goalDescription: "Memorise key trig identities", goalDueDate: "2026-06-01" },
            { goalProgressCompleted: "0%", goalDescription: "Solve right-angled triangle problems", goalDueDate: "2026-06-15" },
        ],
    },
    // Computer Science — Algorithms
    "Introduction to Algorithms": {
        links: [
            "https://www.khanacademy.org/computing/computer-science/algorithms",
            "https://www.geeksforgeeks.org/introduction-to-algorithms/",
        ],
        notes: ["algorithms-intro-notes"],
        goals: [
            { goalProgressCompleted: "100%", goalDescription: "Understand Big-O notation", goalDueDate: "2026-01-12" },
            { goalProgressCompleted: "100%", goalDescription: "Analyse time and space complexity", goalDueDate: "2026-01-28" },
        ],
    },
    "Sorting Algorithms": {
        links: [
            "https://visualgo.net/en/sorting",
            "https://www.geeksforgeeks.org/sorting-algorithms/",
        ],
        notes: ["sorting-algorithms-notes"],
        goals: [
            { goalProgressCompleted: "55%", goalDescription: "Implement merge sort from scratch", goalDueDate: "2026-04-22" },
            { goalProgressCompleted: "0%", goalDescription: "Compare quicksort vs merge sort trade-offs", goalDueDate: "2026-05-08" },
        ],
    },
    "Graph Algorithms": {
        links: [
            "https://visualgo.net/en/graphds",
            "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",
        ],
        notes: ["graph-algorithms-notes"],
        goals: [
            { goalProgressCompleted: "0%", goalDescription: "Implement BFS and DFS", goalDueDate: "2026-06-05" },
            { goalProgressCompleted: "0%", goalDescription: "Solve shortest path with Dijkstra", goalDueDate: "2026-06-20" },
        ],
    },
    // Computer Science — Data Structures
    "Arrays and Linked Lists": {
        links: [
            "https://www.geeksforgeeks.org/arrays-in-java/",
            "https://www.geeksforgeeks.org/data-structures/linked-list/",
        ],
        notes: ["arrays-linked-lists-notes"],
        goals: [
            { goalProgressCompleted: "100%", goalDescription: "Implement singly linked list operations", goalDueDate: "2026-01-08" },
            { goalProgressCompleted: "100%", goalDescription: "Compare array vs linked list trade-offs", goalDueDate: "2026-01-22" },
        ],
    },
    "Trees and Heaps": {
        links: [
            "https://visualgo.net/en/bst",
            "https://www.geeksforgeeks.org/binary-tree-data-structure/",
        ],
        notes: ["trees-heaps-notes"],
        goals: [
            { goalProgressCompleted: "40%", goalDescription: "Implement a binary search tree", goalDueDate: "2026-05-01" },
            { goalProgressCompleted: "0%", goalDescription: "Understand heap property and heapify", goalDueDate: "2026-05-18" },
        ],
    },
    "Hash Tables": {
        links: [
            "https://visualgo.net/en/hashtable",
            "https://www.geeksforgeeks.org/hashing-data-structure/",
        ],
        notes: ["hash-tables-notes"],
        goals: [
            { goalProgressCompleted: "0%", goalDescription: "Implement a hash map with chaining", goalDueDate: "2026-06-10" },
            { goalProgressCompleted: "0%", goalDescription: "Handle hash collisions with open addressing", goalDueDate: "2026-06-25" },
        ],
    },
    // Computer Science — Software Design
    "SOLID Principles": {
        links: [
            "https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design",
            "https://www.geeksforgeeks.org/solid-principle-in-programming-understand-with-real-life-examples/",
        ],
        notes: ["solid-principles-notes"],
        goals: [
            { goalProgressCompleted: "50%", goalDescription: "Refactor a class to satisfy Single Responsibility", goalDueDate: "2026-04-28" },
            { goalProgressCompleted: "0%", goalDescription: "Design a module using Dependency Inversion", goalDueDate: "2026-05-15" },
        ],
    },
    "Design Patterns": {
        links: [
            "https://refactoring.guru/design-patterns",
            "https://www.geeksforgeeks.org/software-design-patterns/",
        ],
        notes: ["design-patterns-notes"],
        goals: [
            { goalProgressCompleted: "0%", goalDescription: "Implement the Observer pattern", goalDueDate: "2026-06-08" },
            { goalProgressCompleted: "0%", goalDescription: "Apply the Factory pattern to a real project", goalDueDate: "2026-06-22" },
        ],
    },
    // Computer Science — Networking
    "OSI Model": {
        links: [
            "https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/",
            "https://www.geeksforgeeks.org/layers-of-osi-model/",
        ],
        notes: ["osi-model-notes"],
        goals: [
            { goalProgressCompleted: "100%", goalDescription: "Name and describe all 7 OSI layers", goalDueDate: "2026-01-14" },
            { goalProgressCompleted: "100%", goalDescription: "Trace a packet through the OSI stack", goalDueDate: "2026-01-30" },
        ],
    },
    "TCP/IP": {
        links: [
            "https://www.cloudflare.com/learning/ddos/glossary/tcp-ip/",
            "https://www.geeksforgeeks.org/tcp-ip-model/",
        ],
        notes: ["tcp-ip-notes"],
        goals: [
            { goalProgressCompleted: "65%", goalDescription: "Understand the TCP three-way handshake", goalDueDate: "2026-04-20" },
            { goalProgressCompleted: "0%", goalDescription: "Compare TCP vs UDP use cases", goalDueDate: "2026-05-05" },
        ],
    },
    // Physics — Classical Mechanics
    "Newton's Laws": {
        links: [
            "https://www.khanacademy.org/science/physics/forces-newtons-laws",
            "https://www.physicsclassroom.com/class/newtlaws",
        ],
        notes: ["newtons-laws-notes"],
        goals: [
            { goalProgressCompleted: "100%", goalDescription: "Apply Newton's second law to force problems", goalDueDate: "2026-01-10" },
            { goalProgressCompleted: "100%", goalDescription: "Identify action-reaction pairs", goalDueDate: "2026-01-24" },
        ],
    },
    "Work, Energy and Power": {
        links: [
            "https://www.khanacademy.org/science/physics/work-and-energy",
            "https://www.physicsclassroom.com/class/energy",
        ],
        notes: ["work-energy-power-notes"],
        goals: [
            { goalProgressCompleted: "75%", goalDescription: "Solve work-energy theorem problems", goalDueDate: "2026-04-22" },
            { goalProgressCompleted: "0%", goalDescription: "Apply conservation of energy", goalDueDate: "2026-05-08" },
        ],
    },
    "Rotational Motion": {
        links: [
            "https://www.khanacademy.org/science/physics/torque-angular-momentum",
            "https://www.physicsclassroom.com/class/circles",
        ],
        notes: ["rotational-motion-notes"],
        goals: [
            { goalProgressCompleted: "0%", goalDescription: "Calculate torque and angular acceleration", goalDueDate: "2026-06-05" },
            { goalProgressCompleted: "0%", goalDescription: "Apply conservation of angular momentum", goalDueDate: "2026-06-20" },
        ],
    },
    // Physics — Electromagnetism
    "Electric Fields": {
        links: [
            "https://www.khanacademy.org/science/physics/electric-charge-electric-force-and-voltage",
            "https://www.physicsclassroom.com/class/estatics",
        ],
        notes: ["electric-fields-notes"],
        goals: [
            { goalProgressCompleted: "30%", goalDescription: "Apply Coulomb's law to charge problems", goalDueDate: "2026-04-30" },
            { goalProgressCompleted: "0%", goalDescription: "Draw and interpret electric field lines", goalDueDate: "2026-05-18" },
        ],
    },
    "Magnetic Fields": {
        links: [
            "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields",
            "https://www.physicsclassroom.com/class/circuits",
        ],
        notes: ["magnetic-fields-notes"],
        goals: [
            { goalProgressCompleted: "0%", goalDescription: "Describe magnetic flux and Faraday's law", goalDueDate: "2026-06-08" },
            { goalProgressCompleted: "0%", goalDescription: "Derive Maxwell's equations conceptually", goalDueDate: "2026-06-25" },
        ],
    },
    // Physics — Quantum Theory
    "Wave-Particle Duality": {
        links: [
            "https://www.khanacademy.org/science/physics/quantum-physics",
            "https://www.physicsoftheuniverse.com/topics_quantum_waveparticle.html",
        ],
        notes: ["wave-particle-duality-notes"],
        goals: [
            { goalProgressCompleted: "20%", goalDescription: "Explain the double-slit experiment", goalDueDate: "2026-05-05" },
            { goalProgressCompleted: "0%", goalDescription: "Describe de Broglie wavelength", goalDueDate: "2026-05-22" },
        ],
    },
    "Schrödinger Equation": {
        links: [
            "https://www.khanacademy.org/science/physics/quantum-physics/quantum-numbers-and-orbitals",
            "https://www.physicsoftheuniverse.com/topics_quantum_schrodinger.html",
        ],
        notes: ["schrodinger-equation-notes"],
        goals: [
            { goalProgressCompleted: "0%", goalDescription: "Understand the time-dependent Schrödinger equation", goalDueDate: "2026-06-12" },
            { goalProgressCompleted: "0%", goalDescription: "Solve the equation for a particle in a box", goalDueDate: "2026-07-01" },
        ],
    },
    // Physics — Thermodynamics
    "Laws of Thermodynamics": {
        links: [
            "https://www.khanacademy.org/science/physics/thermodynamics",
            "https://www.physicsclassroom.com/class/thermalP",
        ],
        notes: ["thermodynamics-laws-notes"],
        goals: [
            { goalProgressCompleted: "100%", goalDescription: "State and explain all four laws", goalDueDate: "2026-01-16" },
            { goalProgressCompleted: "100%", goalDescription: "Apply the first law to heat engine problems", goalDueDate: "2026-02-02" },
        ],
    },
    "Entropy": {
        links: [
            "https://www.khanacademy.org/science/physics/thermodynamics/entropy-and-gibbs",
            "https://www.physicsoftheuniverse.com/topics_quantum_entropy.html",
        ],
        notes: ["entropy-notes"],
        goals: [
            { goalProgressCompleted: "50%", goalDescription: "Define entropy and explain its directionality", goalDueDate: "2026-04-28" },
            { goalProgressCompleted: "0%", goalDescription: "Calculate entropy change in a reversible process", goalDueDate: "2026-05-15" },
        ],
    },
    // History — Ancient History
    "Ancient Egypt": {
        links: [
            "https://www.bbc.co.uk/history/ancient/egyptians/",
            "https://www.khanacademy.org/humanities/world-history/ancient-medieval/ancient-egypt",
        ],
        notes: ["ancient-egypt-notes"],
        goals: [
            { goalProgressCompleted: "100%", goalDescription: "Describe the Old, Middle, and New Kingdoms", goalDueDate: "2026-01-12" },
            { goalProgressCompleted: "100%", goalDescription: "Explain the role of pharaohs in Egyptian society", goalDueDate: "2026-01-26" },
        ],
    },
    "Ancient Greece": {
        links: [
            "https://www.bbc.co.uk/history/ancient/greeks/",
            "https://www.khanacademy.org/humanities/world-history/ancient-medieval/ancient-greece",
        ],
        notes: ["ancient-greece-notes"],
        goals: [
            { goalProgressCompleted: "60%", goalDescription: "Compare Athenian and Spartan society", goalDueDate: "2026-04-25" },
            { goalProgressCompleted: "0%", goalDescription: "Explain the influence of Greek philosophy", goalDueDate: "2026-05-12" },
        ],
    },
    "Ancient Rome": {
        links: [
            "https://www.bbc.co.uk/history/ancient/romans/",
            "https://www.khanacademy.org/humanities/world-history/ancient-medieval/roman-empire",
        ],
        notes: ["ancient-rome-notes"],
        goals: [
            { goalProgressCompleted: "0%", goalDescription: "Trace the transition from Republic to Empire", goalDueDate: "2026-06-05" },
            { goalProgressCompleted: "0%", goalDescription: "Explain reasons for the fall of the Western Empire", goalDueDate: "2026-06-22" },
        ],
    },
    // History — Medieval History
    "The Feudal System": {
        links: [
            "https://www.bbc.co.uk/bitesize/guides/zp4frdm",
            "https://www.khanacademy.org/humanities/world-history/ancient-medieval/medieval-europe",
        ],
        notes: ["feudal-system-notes"],
        goals: [
            { goalProgressCompleted: "100%", goalDescription: "Describe the hierarchy of feudal society", goalDueDate: "2026-01-14" },
            { goalProgressCompleted: "100%", goalDescription: "Explain obligations between lords and vassals", goalDueDate: "2026-02-01" },
        ],
    },
    "The Crusades": {
        links: [
            "https://www.bbc.co.uk/history/british/middle_ages/crusades_01.shtml",
            "https://www.khanacademy.org/humanities/world-history/ancient-medieval/crusades",
        ],
        notes: ["crusades-notes"],
        goals: [
            { goalProgressCompleted: "40%", goalDescription: "Identify causes of the First Crusade", goalDueDate: "2026-04-28" },
            { goalProgressCompleted: "0%", goalDescription: "Assess long-term impact on East-West relations", goalDueDate: "2026-05-15" },
        ],
    },
    // History — Modern History
    "The Enlightenment": {
        links: [
            "https://www.bbc.co.uk/history/british/empire_seapower/enlightenment_01.shtml",
            "https://www.khanacademy.org/humanities/world-history/1600s-1800s/enlightenment-era",
        ],
        notes: ["enlightenment-notes"],
        goals: [
            { goalProgressCompleted: "55%", goalDescription: "Summarise key ideas of major Enlightenment thinkers", goalDueDate: "2026-04-22" },
            { goalProgressCompleted: "0%", goalDescription: "Trace Enlightenment influence on political revolutions", goalDueDate: "2026-05-08" },
        ],
    },
    "The Industrial Revolution": {
        links: [
            "https://www.bbc.co.uk/history/british/victorians/",
            "https://www.khanacademy.org/humanities/world-history/1600s-1800s/industrial-revolution",
        ],
        notes: ["industrial-revolution-notes"],
        goals: [
            { goalProgressCompleted: "0%", goalDescription: "Identify key inventions and their social impact", goalDueDate: "2026-06-05" },
            { goalProgressCompleted: "0%", goalDescription: "Explain urbanisation caused by industrialisation", goalDueDate: "2026-06-20" },
        ],
    },
    // History — World Wars
    "World War I": {
        links: [
            "https://www.bbc.co.uk/history/worldwars/wwone/",
            "https://www.khanacademy.org/humanities/world-history/euro-hist/world-war-i",
        ],
        notes: ["ww1-notes"],
        goals: [
            { goalProgressCompleted: "100%", goalDescription: "Explain the MAIN causes of WW1", goalDueDate: "2026-01-10" },
            { goalProgressCompleted: "100%", goalDescription: "Describe the impact of the Treaty of Versailles", goalDueDate: "2026-01-24" },
        ],
    },
    "World War II": {
        links: [
            "https://www.bbc.co.uk/history/worldwars/wwtwo/",
            "https://www.khanacademy.org/humanities/world-history/euro-hist/world-war-ii",
        ],
        notes: ["ww2-notes"],
        goals: [
            { goalProgressCompleted: "80%", goalDescription: "Trace the major turning points of WW2", goalDueDate: "2026-04-20" },
            { goalProgressCompleted: "0%", goalDescription: "Analyse the causes and consequences of the Holocaust", goalDueDate: "2026-05-05" },
        ],
    },
    "The Cold War": {
        links: [
            "https://www.bbc.co.uk/history/coldwar/",
            "https://www.khanacademy.org/humanities/world-history/euro-hist/cold-war",
        ],
        notes: ["cold-war-notes"],
        goals: [
            { goalProgressCompleted: "0%", goalDescription: "Describe the key phases of US-Soviet rivalry", goalDueDate: "2026-06-10" },
            { goalProgressCompleted: "0%", goalDescription: "Explain the role of proxy wars", goalDueDate: "2026-06-28" },
        ],
    },
    // Languages — Grammar
    "Parts of Speech": {
        links: [
            "https://www.grammarly.com/blog/parts-of-speech/",
            "https://www.khanacademy.org/humanities/grammar/parts-of-speech",
        ],
        notes: ["parts-of-speech-notes"],
        goals: [
            { goalProgressCompleted: "100%", goalDescription: "Identify all 8 parts of speech in a sentence", goalDueDate: "2026-01-12" },
            { goalProgressCompleted: "100%", goalDescription: "Correctly use nouns and pronouns in writing", goalDueDate: "2026-01-28" },
        ],
    },
    "Sentence Structure": {
        links: [
            "https://www.grammarly.com/blog/sentence-structure/",
            "https://www.khanacademy.org/humanities/grammar/syntax-sentences",
        ],
        notes: ["sentence-structure-notes"],
        goals: [
            { goalProgressCompleted: "70%", goalDescription: "Write complex and compound sentences correctly", goalDueDate: "2026-04-22" },
            { goalProgressCompleted: "0%", goalDescription: "Avoid run-on sentences and comma splices", goalDueDate: "2026-05-10" },
        ],
    },
    "Punctuation": {
        links: [
            "https://www.grammarly.com/blog/punctuation/",
            "https://www.khanacademy.org/humanities/grammar/punctuation",
        ],
        notes: ["punctuation-notes"],
        goals: [
            { goalProgressCompleted: "0%", goalDescription: "Use commas and semicolons correctly", goalDueDate: "2026-06-05" },
            { goalProgressCompleted: "0%", goalDescription: "Apply apostrophe rules for possession", goalDueDate: "2026-06-18" },
        ],
    },
    // Languages — Vocabulary
    "Root Words": {
        links: [
            "https://www.vocabulary.com/lists/root-words",
            "https://www.khanacademy.org/humanities/grammar/vocabulary",
        ],
        notes: ["root-words-notes"],
        goals: [
            { goalProgressCompleted: "45%", goalDescription: "Learn 50 common Latin and Greek roots", goalDueDate: "2026-04-30" },
            { goalProgressCompleted: "0%", goalDescription: "Derive word meanings from unfamiliar roots", goalDueDate: "2026-05-20" },
        ],
    },
    "Synonyms and Antonyms": {
        links: [
            "https://www.thesaurus.com/",
            "https://www.vocabulary.com/",
        ],
        notes: ["synonyms-antonyms-notes"],
        goals: [
            { goalProgressCompleted: "0%", goalDescription: "Build a personal synonym reference list", goalDueDate: "2026-06-05" },
            { goalProgressCompleted: "0%", goalDescription: "Use precise vocabulary in writing exercises", goalDueDate: "2026-06-22" },
        ],
    },
    // Languages — Writing
    "Essay Structure": {
        links: [
            "https://owl.purdue.edu/owl/general_writing/the_writing_process/essay_writing/",
            "https://www.khanacademy.org/humanities/grammar/style-and-usage/grammar-style/essay-writing",
        ],
        notes: ["essay-structure-notes"],
        goals: [
            { goalProgressCompleted: "100%", goalDescription: "Write a 5-paragraph essay with clear structure", goalDueDate: "2026-01-15" },
            { goalProgressCompleted: "100%", goalDescription: "Craft strong thesis statements", goalDueDate: "2026-01-30" },
        ],
    },
    "Persuasive Writing": {
        links: [
            "https://owl.purdue.edu/owl/general_writing/academic_writing/essay_writing/argumentative_essays.html",
            "https://www.grammarly.com/blog/persuasive-essay/",
        ],
        notes: ["persuasive-writing-notes"],
        goals: [
            { goalProgressCompleted: "35%", goalDescription: "Write an argument with counter-argument rebuttal", goalDueDate: "2026-04-28" },
            { goalProgressCompleted: "0%", goalDescription: "Use rhetorical devices effectively", goalDueDate: "2026-05-15" },
        ],
    },
    // Languages — Speaking
    "Public Speaking Basics": {
        links: [
            "https://www.toastmasters.org/resources/public-speaking-tips",
            "https://www.khanacademy.org/humanities/grammar/speaking",
        ],
        notes: ["public-speaking-basics-notes"],
        goals: [
            { goalProgressCompleted: "50%", goalDescription: "Deliver a 2-minute speech without notes", goalDueDate: "2026-04-25" },
            { goalProgressCompleted: "0%", goalDescription: "Manage vocal pace and tone", goalDueDate: "2026-05-10" },
        ],
    },
    "Presentations": {
        links: [
            "https://www.toastmasters.org/resources",
            "https://www.ted.com/playlists/574/how_to_make_a_great_presentation",
        ],
        notes: ["presentations-notes"],
        goals: [
            { goalProgressCompleted: "0%", goalDescription: "Design a slide deck with clear visual hierarchy", goalDueDate: "2026-06-10" },
            { goalProgressCompleted: "0%", goalDescription: "Deliver a 10-minute presentation to an audience", goalDueDate: "2026-06-28" },
        ],
    },
};

// ── Mock APIs ─────────────────────────────────────────────────────────────────

/** Returns the sub-category names for a given top-level category. */
export async function getSubCategories(category: string): Promise<string[]> {
    const categories = await getStudyCategories();
    return categories.find((c) => c.category === category)?.subcategories ?? [];
}

/** Returns the learning-step names for a given sub-category. */
export async function getLearningSteps(subCategory: string): Promise<string[]> {
    return (subcategoryDataMap[subCategory] ?? []).map((s) => s.learningStep);
}

/**
 * Returns full detail for a learning step: summary, links, notes, and goals.
 * Returns null if the learning step is not found.
 */
export async function getLearningStepData(learningStep: string): Promise<LearningStepDetail | null> {
    const partial = learningStepDetailMap[learningStep];
    if (!partial) return null;

    let summary: SubCategoryData | undefined;
    for (const steps of Object.values(subcategoryDataMap)) {
        summary = steps.find((s) => s.learningStep === learningStep);
        if (summary) break;
    }
    if (!summary) return null;

    return { summary, ...partial };
}

export const getStudyCategories = cache(async function getStudyCategories(): Promise<StudyCategory[]> {
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
});
