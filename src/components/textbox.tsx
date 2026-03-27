interface TextBoxProps {
  heading: string;
  subheading: string;
  infoText: string;
  x?: number;
  y?: number;
}

export default function TextBox({ heading, subheading, infoText, x = 0, y = 0 }: TextBoxProps) {
  return (
    <div style={{ left: x, top: y }} className="absolute flex flex-col gap-2 p-6 rounded-xl bg-zinc-900">
      <h1 className="heading text-white">{heading}</h1>
      <h2 className="subheading text-zinc-400">{subheading}</h2>
      <p className="text-sm text-zinc-500 leading-relaxed">{infoText}</p>
    </div>
  );
}
