export interface User {
    username: string;
    email: string;
    profilePicPath: string;
}

// Mock API – replace with a real data source when ready
export async function getCurrentUser(): Promise<User> {
    return {
        username: "Ethan",
        email: "ethan@example.com",
        profilePicPath: "/profile-pic.png",
    };
}
