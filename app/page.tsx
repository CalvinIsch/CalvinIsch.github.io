import { bio, news } from "@/lib/data";

const socialLinks = [
  { label: "Email", href: `mailto:${bio.email}` },
  { label: "Google Scholar", href: bio.links.googleScholar },
  { label: "LinkedIn", href: bio.links.linkedin },
  { label: "GitHub", href: bio.links.github },
  { label: "CV", href: bio.links.cv },
];

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Bio */}
      <section>
        <h1 className="text-xl font-semibold mb-1">{bio.name}</h1>
        <p className="text-sm text-[var(--muted)] mb-4">
          {bio.role} · {bio.department} · {bio.affiliation}
        </p>
        <p className="text-base leading-relaxed max-w-prose">{bio.description}</p>

        {/* Social links */}
        <ul className="flex flex-wrap gap-x-4 gap-y-1 mt-5 list-none m-0 p-0">
          {socialLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                style={{ textDecoration: "none" }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* News */}
      {news.length > 0 && (
        <section>
          <h2 className="text-base font-semibold mb-4 border-b border-[var(--border)] pb-2">
            News
          </h2>
          <ul className="space-y-2 list-none m-0 p-0">
            {news.map((item, i) => (
              <li key={i} className="flex gap-4 text-sm leading-relaxed">
                <span className="text-[var(--muted)] shrink-0 font-mono text-xs pt-0.5">
                  {item.date}
                </span>
                <span>
                  {item.text}
                  {item.links?.map((link) => (
                    <span key={link.label}>
                      {" "}
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
