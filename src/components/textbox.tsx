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
      <h2 className="subheading text-white">{subheading}</h2>
      <p style={{ maxWidth: infoTextWidth }} className="text-sm text-white leading-relaxed">{infoText}</p>
    </div>
  );
}
