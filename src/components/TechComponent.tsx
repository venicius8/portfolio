interface TechComponentProps {
  stacks: string[];
  color: string;
  title: string;
}

export default function TechComponent({
  stacks,
  color,
  title,
}: TechComponentProps) {
  return (
    <div className={`p-4 ${color} flex flex-col`}>
      <h3 className="text-2xl font-bold">{title}</h3>
      {stacks.map((tech) => (
        <span key={tech} className="text-xl">
          {tech}{" "}
        </span>
      ))}
    </div>
  );
}
