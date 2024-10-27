"use client";

import Link from "next/link";
import { BricolageGrotesque } from "@/app/ui/fonts";
import { usePathname } from "next/navigation";

const Header = () => {
  const links = [
    { href: "/", label: "About" },
    { href: "/projects", label: "Projects" },
  ];
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-end">
      <ul
        className={`${BricolageGrotesque.className} list-none flex items-center gap-2`}
      >
        {links.map((link, index) => (
          <li
            key={index}
            className={`${
              pathname !== link.href ? "underline" : ""
            } underline-offset-4`}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
