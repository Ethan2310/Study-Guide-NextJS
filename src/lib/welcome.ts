export interface WelcomeContent {
  heading: string;
  subheading: string;
  infoText: string;
}

// In a real app this would call a database or external API
export async function getWelcomeContent(): Promise<WelcomeContent> {
  return {
    heading: "Welcome to your study hub",
    subheading: "Create a mindscape for all your learning materials",
    infoText: "This is a work in progress - but the goal for this website is to create a comprehensive platform for organizing and accessing your study materials.",
  };
}
