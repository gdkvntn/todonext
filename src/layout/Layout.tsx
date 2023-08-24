export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" max-w-3xl m-auto">
      <div>{children}</div>
    </div>
  );
}
