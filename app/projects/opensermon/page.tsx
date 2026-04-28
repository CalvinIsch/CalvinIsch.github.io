import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OpenSermon · Calvin Isch",
};

export default function OpenSermonPage() {
  return (
    <div>
      <Link
        href="/projects"
        className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-6 inline-block"
        style={{ textDecoration: "none" }}
      >
        ← Projects
      </Link>

      <h1 className="text-xl font-semibold mb-2">OpenSermon</h1>
      <p className="text-sm text-[var(--muted)] mb-8">
        With{" "}
          <a href="https://github.com/tdmiller1" target="_blank" rel="noopener noreferrer">
            Tucker
          </a>{" "}
          ·{" "}
        <a href="https://open-sermon.com" target="_blank" rel="noopener noreferrer">
          open-sermon.com
        </a>
      </p>

      <div className="space-y-6 text-base leading-relaxed">
        <p>
          Churches are a major part of American public life. Roughly{" "}
          <a
            href="https://bfi.uchicago.edu/working-paper/religious-worship-attendance-in-america-evidence-from-cellphone-data/"
            target="_blank"
            rel="noopener noreferrer"
          >
            45 million Americans
          </a>{" "}
          attend a place of worship each week, and about 73% attend at least once a year.
          Pastors rank among the{" "}
          <a
            href="https://www.pewresearch.org/religion/2019/11/15/most-congregants-trust-clergy-to-give-advice-about-religious-issues-fewer-trust-clergy-on-personal-matters/"
            target="_blank"
            rel="noopener noreferrer"
          >
            most trusted
          </a>{" "}
          figures in public life, more trusted than journalists and many other
          professionals—especially among churchgoers—making sermons a consequential form of
          public communication in the USA.
        </p>

        <p>
          However, no large-scale resource exists for systematically studying sermon
          content. With{" "}
          <a
            href="https://www.usreligioncensus.org/node/1641"
            target="_blank"
            rel="noopener noreferrer"
          >
            over 350,000 congregations
          </a>{" "}
          nationwide, the challenge of identifying, collecting, and organizing sermon media
          has historically been prohibitive, seriously limiting previous research and making
          it difficult for congregation members to take a systematic look at their church
          relative to others. Recent advances in AI now make large-scale data collection and
          analysis possible.
        </p>

        <p>
          To respond to this opportunity, my friend{" "}
          <a href="https://github.com/tdmiller1" target="_blank" rel="noopener noreferrer">
            Tucker
          </a>{" "}
          and I are building OpenSermon,
          targeting two aims. First, we are building a systematic database of American
          church sermons: identifying congregations, locating published sermon media,
          transcribing the content, and organizing it into a unified corpus that is open to
          researchers and the public. Second, we are developing an accessible online
          platform to make these materials generally accessible. Check out our beta platform
          here:{" "}
          <a href="https://open-sermon.com" target="_blank" rel="noopener noreferrer">
            open-sermon.com
          </a>
          .
        </p>

        <figure className="my-8">
          <Image
            src="/OpenSermon/OS_1.png"
            alt="Church profile page on OpenSermon"
            width={2014}
            height={882}
            className="w-full h-auto rounded border border-[var(--border)]"
          />
          <figcaption className="text-sm text-[var(--muted)] mt-2">
            Churches have profile pages that highlight key patterns in how they reference
            and interpret scripture, which people and themes they emphasize, and other
            recurring features of their sermons.
          </figcaption>
        </figure>

        <figure className="my-8">
          <Image
            src="/OpenSermon/OS_2.png"
            alt="Clicking into sermon insights on OpenSermon"
            width={1740}
            height={580}
            className="w-full h-auto rounded border border-[var(--border)]"
          />
          <figcaption className="text-sm text-[var(--muted)] mt-2">
            Each of these insights can be clicked into for a deeper look. Users can quickly
            find direct sermon references and see how the same passage, theme, or biblical
            figure has been discussed differently over time.
          </figcaption>
        </figure>

        <figure className="my-8">
          <Image
            src="/OpenSermon/OS_3.png"
            alt="Individual sermon page on OpenSermon"
            width={1698}
            height={1336}
            className="w-full h-auto rounded border border-[var(--border)]"
          />
          <figcaption className="text-sm text-[var(--muted)] mt-2">
            Users can also move from these broader insights to individual sermon pages,
            where they can see high-level summaries, reflection questions, transcripts, and
            other sermon-specific details.
          </figcaption>
        </figure>

        <figure className="my-8">
          <Image
            src="/OpenSermon/OS_4.png"
            alt="Comparing churches on OpenSermon"
            width={2022}
            height={856}
            className="w-full h-auto rounded border border-[var(--border)]"
          />
          <figcaption className="text-sm text-[var(--muted)] mt-2">
            Users can currently compare churches across these dimensions as well.
          </figcaption>
        </figure>

        <p>
          We&apos;re excited about the potential to expand these visualizations as the
          archive grows. We also recognize that the current dashboard is designed more for
          &ldquo;power users,&rdquo; and we&apos;re actively thinking about ways to make
          the display simpler and more accessible. Ideally, those two goals will grow
          together.
        </p>

        <p>
          Beyond the research contribution, developing OpenSermon has been a major learning
          experience in web development and applied AI. We use traditional web crawlers,
          agentic scraping, and{" "}
          <a
            href="https://scrapling.readthedocs.io/en/latest/tutorials/replacing_ai.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Scrapling
          </a>{" "}
          to collect sermon media from congregations across the U.S. We then transcribe the
          media with a distilled version of Whisper and analyze the sermons using dedicated
          prompts developed for DeepSeek. The web platform was built alongside Claude Code
          using TSX and Tailwind, and we host everything on AWS, hoping usage scales
          quickly.
        </p>

        <p>
          If you&apos;re interested in the project or have ideas for improvements, please
          reach out! We are actively seeking founding grants to expand our impact.
        </p>
      </div>
    </div>
  );
}
