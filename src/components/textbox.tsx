interface TextBoxProps {
  heading: string;
  subheading: string;
  infoText: string;
  infoTextWidth?: number;
}

export default function TextBox({ heading, subheading, infoText, infoTextWidth = 400 }: TextBoxProps) {
  return (
    <div className="flex flex-col gap-2 items-center text-center">
      <h1 className="heading text-white">{heading}</h1>
      <h2 className="subheading text-zinc-400">{subheading}</h2>
      <p style={{ maxWidth: infoTextWidth }} className="text-sm text-zinc-500 leading-relaxed">{infoText}</p>
    </div>
  );
}
