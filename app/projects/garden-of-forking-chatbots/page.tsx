import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Garden of Forking Chatbots · Calvin Isch",
};

// Self-contained page served from public/; a plain <a> (not <Link>) since it isn't a Next route.
const SITE = "/garden-of-forking-chatbots.html";
const ACL_PAPER = "https://aclanthology.org/2026.acl-long.746/";

export default function GardenOfForkingChatbotsPage() {
  return (
    <div>
      <Link
        href="/projects"
        className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-6 inline-block"
        style={{ textDecoration: "none" }}
      >
        ← Projects
      </Link>

      <h1 className="text-xl font-semibold mb-2">Garden of Forking Chatbots</h1>
      <p className="text-sm text-[var(--muted)] mb-8">
        <a href={SITE}>Explore the garden →</a>
      </p>

      <div className="space-y-6 text-base leading-relaxed">
        <p>
          I love working with language models, but one fear I have is that they can be
          sycophantic, telling me things that I like to hear. This is especially worrying
          when I ask for empirical information about the world. Objectivity may be
          impossible, but I&apos;d like the models to try! How sycophantic are they in
          practice?
        </p>

        <p>
          I&apos;ve explored this systematically by looking at how model summaries of
          academic papers vary with users&apos; memory and stances (in my{" "}
          <a href={ACL_PAPER} target="_blank" rel="noopener noreferrer">
            ACL paper
          </a>
          ). The issue with publications is that they collapse all of the findings: the
          messy examples disappear, replaced by high-level charts.
        </p>

        <p>
          With Claude Code, we shouldn&apos;t rely solely on that: interactive visuals are
          too easy to make; we can&apos;t not do it anymore! So I built this little
          platform, the <a href={SITE}>Garden of Forking Chatbots</a>{" "}
          (blame Borges if you don&apos;t like the name…actually don&apos;t, he&apos;s
          awesome!).
        </p>

        <p>
          The idea is simple: I created three user profiles, people with strong and
          different opinions on a variety of topics: the impact of AI on jobs, whether the
          COVID school closures were worth it, who is the greatest athlete of all time, etc.
          I then had Claude role-play these people in conversations with different GPT
          models and made a site where you can explore these chats directly and click
          through different paths to see how much the model responses differ. I also worked
          with Claude to generate high-level takeaways and highlight specific examples that
          illustrate key differences.
        </p>

        <p>
          <a href={SITE}>Check it out!</a> Do you think the models are sycophantic, or
          just providing effective personalized advice? How can you tell the difference?
        </p>
      </div>
    </div>
  );
}
