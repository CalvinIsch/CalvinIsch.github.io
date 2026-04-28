import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";
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
        {children}
        <footer className="max-w-3xl mx-auto px-6 pb-8 w-full">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Calvin Isch
          </p>
        </footer>
      </body>
    </html>
  );
}
