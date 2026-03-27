import TextBox from "@/components/textbox";
import { getWelcomeContent } from "@/lib/welcome";

export default async function WelcomePage() {
  const content = await getWelcomeContent();

  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <TextBox
        heading={content.heading}
        subheading={content.subheading}
        infoText={content.infoText}
      />
    </main>
  );
}
