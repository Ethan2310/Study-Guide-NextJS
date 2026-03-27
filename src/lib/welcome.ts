export interface WelcomeContent {
  heading: string;
  subheading: string;
  infoText: string;
}

// In a real app this would call a database or external API
export async function getWelcomeContent(): Promise<WelcomeContent> {
  return {
    heading: "Welcome",
    subheading: "Good to have you here",
    infoText: "This content was fetched on the server before the page rendered.",
  };
}
