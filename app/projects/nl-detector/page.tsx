import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NL Detector · Calvin Isch",
};

const SITE = "https://nl-detector.calvinisch.com";

export default function NLDetectorPage() {
  return (
    <div>
      <Link
        href="/projects"
        className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-6 inline-block"
        style={{ textDecoration: "none" }}
      >
        ← Projects
      </Link>

      <div className="flex items-center gap-3 mb-2">
        <Image
          src="/NL-Detector/NL_icon.svg"
          alt=""
          width={40}
          height={40}
          className="rounded"
        />
        <h1 className="text-xl font-semibold">NL Detector</h1>
      </div>
      <p className="text-sm text-[var(--muted)] mb-8">
        <a href={SITE} target="_blank" rel="noopener noreferrer">
          nl-detector.calvinisch.com
        </a>
      </p>

      <div className="space-y-6 text-base leading-relaxed">
        <p>
          My research often focuses on identifying overclaiming in writing, whether
          that&apos;s{" "}
          <a
            href="/papers/Causal_Claims_in_Social_Science_Main.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            causal claims in academic work
          </a>{" "}
          or overreaching language in{" "}
          <a
            href="/papers/1726_Narrative_License_and_Mod.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            LLM summaries of scholarly literature
          </a>
          . However, I&apos;d like my work to do more than point out problems. I also want
          to help people find solutions. That&apos;s why I built a tool that helps authors
          and readers find overclaiming themselves, publicly available at{" "}
          <a href={SITE} target="_blank" rel="noopener noreferrer">
            nl-detector.calvinisch.com
          </a>
          .
        </p>

        <p>
          Overclaiming is hard to resist, and the chatbots many of us already use can be
          subtly sycophantic. I wanted a platform where anyone could use our tailored
          prompts to identify specific forms of{" "}
          <a
            href="https://css.seas.upenn.edu/research/narrative-license/"
            target="_blank"
            rel="noopener noreferrer"
          >
            narrative license
          </a>
          , the tendency to favor simple stories over evidentiary restraint. Authors can
          use it to improve their own writing, and students can use it to practice
          spotting overclaiming in what they read.
        </p>

        <h2 className="text-base font-semibold pt-4">How it works</h2>

        <h3 className="font-medium">1. Find or upload a paper</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Anyone with a .edu email can make an account for free.</li>
          <li>Browse every public paper on the platform, or upload a PDF of your own.</li>
          <li>If you confirm a paper is open access, you can make it visible to everyone.</li>
        </ul>

        <figure className="my-8">
          <Image
            src="/NL-Detector/Upload_Papers.png"
            alt="Search and upload screen on NL Detector"
            width={2204}
            height={654}
            className="w-full h-auto rounded border border-[var(--border)]"
          />
          <figcaption className="text-sm text-[var(--muted)] mt-2">
            Search for a paper by title or drop in a PDF. New uploads are checked against
            papers already on the platform before they&apos;re added.
          </figcaption>
        </figure>

        <h3 className="font-medium">2. Highlight and comment</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Write your own notes on a paper.</li>
          <li>Highlight specific passages and attach a comment to each one.</li>
          <li>
            Highlights are private by default. Share them and other readers will see your
            highlight and comment too.
          </li>
        </ul>

        <figure className="my-8">
          <Image
            src="/NL-Detector/Highlight%20and%20comment.png"
            alt="Highlighting a passage and adding a comment on NL Detector"
            width={2110}
            height={772}
            className="w-full h-auto rounded border border-[var(--border)]"
          />
          <figcaption className="text-sm text-[var(--muted)] mt-2">
            Select text, pick a color, and add a note. Check &ldquo;Share with other
            readers&rdquo; to make the highlight public.
          </figcaption>
        </figure>

        <h3 className="font-medium">3. Check for narrative license</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Run prespecified LLM prompts, each looking for one form of narrative license,
            such as causal overreach, overgeneralization, or rhetorical flourishes.
          </li>
          <li>
            Every account starts with about 200 tokens, enough for roughly 50 prompts
            depending on the length of the paper.
          </li>
          <li>The site explains what each prompt looks for.</li>
        </ul>

        <figure className="my-8">
          <Image
            src="/NL-Detector/LLMOptions.png"
            alt="Menu of narrative license checks on NL Detector"
            width={2172}
            height={870}
            className="w-full h-auto rounded border border-[var(--border)]"
          />
          <figcaption className="text-sm text-[var(--muted)] mt-2">
            Each check in the menu targets one form of narrative license. Checks you&apos;ve
            already run are marked &ldquo;Analyzed.&rdquo;
          </figcaption>
        </figure>

        <h3 className="font-medium">4. Respond to the model</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>See what the LLM (GPT-5.6 Sol) reports for that form of narrative license.</li>
          <li>Add your own comments on where you agree or disagree.</li>
          <li>
            The model works like a tutor. It points you to passages worth a closer look,
            and the reasoning stays with you.
          </li>
        </ul>

        <figure className="my-8">
          <Image
            src="/NL-Detector/LLM_Labels.png"
            alt="Overall evaluation results on NL Detector"
            width={2110}
            height={1268}
            className="w-full h-auto rounded border border-[var(--border)]"
          />
          <figcaption className="text-sm text-[var(--muted)] mt-2">
            The overall evaluation, run on our causal claims paper. It gives a single
            narrative license score from 1 to 100 (higher means more overreach), along with
            the study&apos;s strengths and design concerns.
          </figcaption>
        </figure>

        <p>
          I hope a tool like this lays the groundwork for people to think about narrative
          license more critically. Try it out at{" "}
          <a href={SITE} target="_blank" rel="noopener noreferrer">
            nl-detector.calvinisch.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
