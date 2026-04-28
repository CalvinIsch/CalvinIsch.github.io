import type { Metadata } from "next";
import { papers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papers · Calvin Isch",
};

function groupByYear(items: typeof papers) {
  const groups: Record<number, typeof papers> = {};
  for (const item of items) {
    if (!groups[item.year]) groups[item.year] = [];
    groups[item.year].push(item);
  }
  return Object.entries(groups)
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([year, items]) => ({ year: Number(year), items }));
}

export default function PapersPage() {
  const grouped = groupByYear(papers);

  return (
    <div>
      <h1 className="text-xl font-semibold mb-8">Papers</h1>

      {papers.length === 0 ? (
        <p className="text-[var(--muted)] text-sm">Coming soon.</p>
      ) : (
        <div className="space-y-10">
          {grouped.map(({ year, items }) => (
            <section key={year}>
              <h2 className="text-sm font-semibold text-[var(--muted)] mb-4 border-b border-[var(--border)] pb-2">
                {year}
              </h2>
              <ul className="space-y-6 list-none m-0 p-0">
                {items.map((paper, i) => (
                  <li key={i}>
                    <p className="text-sm leading-relaxed mb-0.5">
                      {paper.authors.map((author, ai) => (
                        <span key={ai}>
                          <span
                            className={
                              author === "Calvin Isch"
                                ? "font-medium"
                                : "text-[var(--foreground)]"
                            }
                          >
                            {author}
                          </span>
                          {ai < paper.authors.length - 1 && ", "}
                        </span>
                      ))}
                      .
                    </p>
                    <h3 className="font-medium text-base mb-0.5">{paper.title}</h3>
                    <p className="text-sm text-[var(--muted)] mb-1.5">{paper.venue}</p>
                    {paper.links.length > 0 && (
                      <div className="flex gap-3">
                        {paper.links.map((link) => (
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
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
