import Image from "next/image";
import TextBox from "@/components/textbox";
import BeginButton from "@/app/_client-components/begin-button";
import { getWelcomeContent } from "@/lib/welcome";
import { WELCOME_BG_BLUR_DATA_URL } from "@/lib/constants";

export default async function WelcomePage() {
  const content = await getWelcomeContent();

  return (
    <main className="relative flex flex-col min-h-screen items-center justify-center gap-8">
      <Image
        src="/welcome-background.jpg"
        alt=""
        fill
        fetchPriority="high"
        loading="eager"
        placeholder="blur"
        blurDataURL={WELCOME_BG_BLUR_DATA_URL}
        className="object-cover object-center -z-10"
      />
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
