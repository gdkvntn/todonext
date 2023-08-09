export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background h-screen">
      <div>{children}</div>
    </div>
  );
}
