import type { Metadata } from "next";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects · Calvin Isch",
};

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-8">Projects</h1>

      {projects.length === 0 ? (
        <p className="text-[var(--muted)] text-sm">Coming soon.</p>
      ) : (
        <ul className="space-y-8 list-none m-0 p-0">
          {projects.map((project, i) => (
            <li key={i} className="border-b border-[var(--border)] pb-8 last:border-0 last:pb-0">
              <h2 className="font-semibold text-base mb-1">
                {(() => {
                  const internal = project.links.find((l) => !l.href.startsWith("http"));
                  return internal ? (
                    <a
                      href={internal.href}
                      className="hover:underline underline-offset-2"
                      style={{ textDecoration: "none" }}
                    >
                      {project.title}
                    </a>
                  ) : project.title;
                })()}
              </h2>

              <p className="text-sm leading-relaxed text-[var(--foreground)] mb-3 max-w-prose">
                {project.description}
              </p>

              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-gray-100 text-[var(--muted)] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {project.links.length > 0 && (
                <div className="flex gap-3">
                  {project.links.map((link) => {
                    const external = link.href.startsWith("http");
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                        style={{ textDecoration: "none" }}
                      >
                        [{link.label}]
                      </a>
                    );
                  })}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
