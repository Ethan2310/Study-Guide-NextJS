import TextBox from "@/components/textbox";
import BeginButton from "@/app/_client-components/begin-button";
import { getWelcomeContent } from "@/lib/welcome";

export default async function WelcomePage() {
  const content = await getWelcomeContent();

  return (
    <main
      style={{ backgroundImage: "url('/welcome-background.jpg')" }}
      className="flex flex-col min-h-screen items-center justify-center gap-8 bg-cover bg-center"
    >
      <TextBox
        heading={content.heading}
        subheading={content.subheading}
        infoText={content.infoText}
        infoTextWidth={600}
      />
      <BeginButton />
    </main>
  );
}
