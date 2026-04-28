import { news } from "@/lib/data";

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Description */}
      <section className="space-y-4 text-base leading-relaxed">
        <p>
          I am a Ph.D. student in the{" "}
          <a href="https://www.asc.upenn.edu/" target="_blank" rel="noopener noreferrer">
            Annenberg School for Communication
          </a>{" "}
          at the University of Pennsylvania, where I work with{" "}
          <a href="https://duncanjwatts.com/" target="_blank" rel="noopener noreferrer">
            Duncan Watts
          </a>{" "}
          in the{" "}
          <a href="https://css.seas.upenn.edu/" target="_blank" rel="noopener noreferrer">
            Computational Social Science Lab
          </a>{" "}
          and{" "}
          <a href="https://en.wikipedia.org/wiki/Philip_E._Tetlock" target="_blank" rel="noopener noreferrer">
            Phil Tetlock
          </a>{" "}
          with the{" "}
          <a href="https://web.sas.upenn.edu/adcollabproject/" target="_blank" rel="noopener noreferrer">
            Adversarial Collaboration Project
          </a>
          .
        </p>
        <p>
          My dissertation focuses on metascience. Specifically, I study how empirical
          scholarship can fall into &ldquo;
          <a href="https://css.seas.upenn.edu/research/narrative-license/" target="_blank" rel="noopener noreferrer">
            Narrative License
          </a>
          ,&rdquo; favoring simple stories over evidentiary restraint, and I explore this
          at scale through computational analysis, experiments, and survey research. I also
          explore methodological reforms to improve science communication, such as{" "}
          <a href="https://doi.org/10.1007/s11186-025-09634-2" target="_blank" rel="noopener noreferrer">
            adversarial collaborations
          </a>
          ,{" "}
          <a href="https://doi.org/10.1073/pnas.2304862120" target="_blank" rel="noopener noreferrer">
            Open Science
          </a>
          , and AI-integrated workflows.
        </p>
        <p>
          Additionally, I have a long-standing research interest in how people think about
          and prepare for the future, focusing on both the individual (e.g.,{" "}
          <a href="https://doi.org/10.14434/iujur.v5i1.27227" target="_blank" rel="noopener noreferrer">
            healthy habits
          </a>
          ) and societal levels (e.g.,{" "}
          <a href="https://doi.org/10.3758/s13428-021-01785-1" target="_blank" rel="noopener noreferrer">
            collective attitudes
          </a>
          , reducing existential risks). Much of this work is conducted with my undergraduate
          advisor,{" "}
          <a href="https://psych.indiana.edu/directory/faculty/todd-peter.html" target="_blank" rel="noopener noreferrer">
            Peter Todd
          </a>
          .
        </p>
        <p>
          Recently, I&apos;ve been fascinated by agentic workflows and have been building a
          range of projects, which I&apos;m beginning to feature on my projects page. Learning
          how to work effectively with LLM agents is the top skill I&apos;m working to develop.
          I follow{" "}
          <a href="https://github.com/karpathy" target="_blank" rel="noopener noreferrer">
            Andrej Karpathy&apos;s
          </a>{" "}
          methodologies.
        </p>
        <p>
          Before the PhD, I taught middle school math through{" "}
          <a href="https://www.teachforamerica.org/" target="_blank" rel="noopener noreferrer">
            Teach For America
          </a>
          . Prior to that, I studied{" "}
          <a href="https://cogs.indiana.edu/index.html" target="_blank" rel="noopener noreferrer">
            Cognitive Science at Indiana University
          </a>
          .
        </p>
        <p>
          Outside of scholarship, I love traveling, rock climbing, reading, and long-distance
          running.{" "}
          <a
            href="https://ultrasignup.com/results_participant.aspx?fname=Calvin&lname=Isch&age=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            My best effort
          </a>{" "}
          is a 100-mile ultramarathon in 16:35:58—though I got rhabdomyolysis after that, so
          I&apos;m toning it back.
        </p>
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
