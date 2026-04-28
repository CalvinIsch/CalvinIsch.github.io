export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 w-full flex-1">
      <main>{children}</main>
    </div>
  );
}
