import { BricolageGrotesque } from "@/app/ui/fonts";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    {
      href: "https://linkedin.com/in/ahmadgirach",
      icon: <FaLinkedinIn className="size-5" />,
    },
    {
      href: "https://twitter.com/MrAhmadGirach",
      icon: <FaTwitter className="size-5" />,
    },
    {
      href: "https://github.com/ahmadgirach",
      icon: <FaGithub className="size-5" />,
    },
  ];
  return (
    <ul
      className={`${BricolageGrotesque.className} list-none flex items-center gap-5`}
    >
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
