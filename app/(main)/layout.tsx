import Sidebar from "@/components/Sidebar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 w-full flex-1 flex flex-col sm:flex-row gap-10 sm:gap-14">
      <Sidebar />
      <main className="flex-1 min-w-0">{children}</main>
    </div>
  );
}
