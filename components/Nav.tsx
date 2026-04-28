"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/papers", label: "Papers" },
  { href: "/talks", label: "Talks" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[var(--border)]">
      <nav className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="font-semibold text-[var(--foreground)] no-underline hover:opacity-70 transition-opacity"
          style={{ textDecoration: "none" }}
        >
          Calvin Isch
        </Link>
        <ul className="flex items-center gap-5 list-none m-0 p-0">
          {navLinks.map(({ href, label }) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm transition-opacity ${
                    active
                      ? "text-[var(--foreground)] font-medium"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                  style={{ textDecoration: "none" }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
