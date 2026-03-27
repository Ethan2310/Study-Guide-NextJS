import TextBox from "@/components/textbox";
import { getWelcomeContent } from "@/lib/welcome";

export default async function WelcomePage() {
  const content = await getWelcomeContent();

  return (
    <main
      style={{ backgroundImage: "url('/welcome-background.jpg')" }}
      className="flex min-h-screen items-center justify-center bg-cover bg-center"
    >
      <TextBox
        heading={content.heading}
        subheading={content.subheading}
        infoText={content.infoText}
        infoTextWidth={600}
      />
    </main>
  );
}
