export default function ContactButton({
  label,
  url,
}: {
  label: string;
  url: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center rounded-lg bg-primary-button px-4 py-2 text-sm font-medium shadow-md transition-colors border border-border hover:bg-hover active:scale-95"
    >
      {label}
    </a>
  );
}
