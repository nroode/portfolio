import { EmailIcon, GithubIcon, LinkedInIcon } from "@/components/icons/Icons";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/natalieroode/",
    Icon: LinkedInIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com/nroode",
    Icon: GithubIcon,
  },
  {
    name: "Email",
    href: "mailto:nroode@gmail.com",
    Icon: EmailIcon,
  },
];

export default function SocialLinks({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`flex gap-3 ${className}`}>
      {socialLinks.map(({ name, href, Icon }) => {
        const isExternal = href.startsWith("http");
        return (
          <a
            key={name}
            href={href}
            aria-label={name}
            className="flex items-center justify-center size-10 rounded-full border-(length:--line-width) border-mauve/25 transition-colors duration-(--motion-fast) hover:bg-white/40"
            {...(isExternal && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
          >
            <Icon width={20} height={20} />
          </a>
        );
      })}
    </div>
  );
}
