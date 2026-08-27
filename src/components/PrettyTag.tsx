function PrettyTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10">
      <span className="text-cyan-300">&lt;</span>
      {children}
      <span className="text-cyan-500"> /&gt;</span>
    </div>
  );
}

export default PrettyTag;
