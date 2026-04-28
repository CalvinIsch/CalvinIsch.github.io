import type { Metadata } from "next";
import { talks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Talks · Calvin Isch",
};

export default function TalksPage() {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-8">Talks</h1>

      {talks.length === 0 ? (
        <p className="text-[var(--muted)] text-sm">Coming soon.</p>
      ) : (
        <ul className="space-y-6 list-none m-0 p-0">
          {talks.map((talk, i) => (
            <li key={i} className="border-b border-[var(--border)] pb-6 last:border-0 last:pb-0">
              <h2 className="font-medium text-base mb-0.5">{talk.title}</h2>
              <p className="text-sm text-[var(--muted)] mb-1.5">
                {talk.event} · {talk.location} · {talk.date}
              </p>
              {talk.links.length > 0 && (
                <div className="flex gap-3">
                  {talk.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                      style={{ textDecoration: "none" }}
                    >
                      [{link.label}]
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
