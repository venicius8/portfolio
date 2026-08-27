function PrettyTag({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-5xl font-extrabold tracking-tight my-10">
      <span className="text-cyan-300">&lt;</span>
      {children}
      <span className="text-cyan-500"> /&gt;</span>
    </h2>
  );
}

export default PrettyTag;
