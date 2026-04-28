import Image from "next/image";
import { bio } from "@/lib/data";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFileAlt,
  FaFilePdf,
} from "react-icons/fa";
import { SiGooglescholar, SiSemanticscholar, SiOrcid } from "react-icons/si";

const socialLinks = [
  {
    label: "Email",
    href: `mailto:${bio.email}`,
    icon: FaEnvelope,
  },
  {
    label: "Google Scholar",
    href: bio.links.googleScholar,
    icon: SiGooglescholar,
  },
  {
    label: "Semantic Scholar",
    href: bio.links.semanticScholar,
    icon: SiSemanticscholar,
  },
  {
    label: "ORCID",
    href: bio.links.orcid,
    icon: SiOrcid,
  },
  {
    label: "LinkedIn",
    href: bio.links.linkedin,
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: bio.links.github,
    icon: FaGithub,
  },
  {
    label: "CV",
    href: bio.links.cv,
    icon: FaFileAlt,
  },
  {
    label: "Resume",
    href: bio.links.resume,
    icon: FaFilePdf,
  },
];

export default function Sidebar() {
  return (
    <aside className="flex flex-col items-center sm:items-start gap-4 sm:w-44 shrink-0 sm:sticky sm:top-12 sm:self-start">
      {/* Photo */}
      <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-gray-100 shrink-0">
        <Image
          src="/profile.jpg"
          alt={bio.name}
          width={144}
          height={144}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Name & role */}
      <div className="text-center sm:text-left">
        <p className="font-semibold text-base leading-snug">{bio.name}</p>
        <p className="text-sm text-[var(--muted)] leading-snug mt-0.5">{bio.role}</p>
        <p className="text-sm text-[var(--muted)] leading-snug">{bio.affiliation}</p>
      </div>

      {/* Social links */}
      <ul className="flex flex-col gap-2 list-none m-0 p-0 w-full">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors group"
              style={{ textDecoration: "none" }}
            >
              <Icon className="shrink-0 text-base" />
              <span className="group-hover:underline underline-offset-2">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
