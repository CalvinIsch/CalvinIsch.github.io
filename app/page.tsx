import { bio, news } from "@/lib/data";

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Description */}
      <section>
        <p className="text-base leading-relaxed">{bio.description}</p>
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
