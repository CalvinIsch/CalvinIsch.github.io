import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calvin Isch",
  description:
    "PhD student at the Annenberg School for Communication, University of Pennsylvania.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Nav />
        <div className="max-w-3xl mx-auto px-6 py-12 w-full flex-1 flex flex-col sm:flex-row gap-10 sm:gap-14">
          <Sidebar />
          <main className="flex-1 min-w-0">{children}</main>
        </div>
        <footer className="max-w-3xl mx-auto px-6 pb-8 w-full">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Calvin Isch
          </p>
        </footer>
      </body>
    </html>
  );
}
