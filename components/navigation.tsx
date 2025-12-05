"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

type NavItem = {
  label: string;
  path: string;
};

const navItems: NavItem[] = [
  { label: "Skills", path: "#skills" },
  { label: "Projects", path: "#projects" },
  { label: "Testimonials", path: "#testimonials" },
];

export function Navigation() {
  const { setTheme, theme } = useTheme();
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setHasScrolled(latest > 0);
    });
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div
        className={`absolute inset-0 transition-colors duration-200 ${
          hasScrolled
            ? "bg-background/80 backdrop-blur-md backdrop-saturate-150 border-b"
            : "bg-transparent"
        }`}
      />
      <div className="container max-w-7xl relative mx-auto flex h-20 items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight hover:opacity-80"
        >
          Ahmad Girach.
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navItems.map((navItem) => (
              <Link
                key={navItem.path}
                href={navItem.path}
                className="hover:text-foreground/80 transition-colors"
              >
                {navItem.label}
              </Link>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <Moon className="size-4" />
            ) : (
              <Sun className="size-4" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
