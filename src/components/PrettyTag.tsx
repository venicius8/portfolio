function PrettyTag({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span className="text-cyan-300">&lt;</span>
      {children}
      <span className="text-cyan-500"> /&gt;</span>
    </>
  );
}

export default PrettyTag;
