"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import Avatar from "@/public/avatar.png";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container relative grid gap-8 px-4 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8 inline-block w-fit rounded-full bg-muted px-4 py-1.5 text-sm"
          >
            🚀 Sr. Full-Stack Engineer
          </motion.div>
          <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl">
            Creating{" "}
            <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
              Digital
            </span>{" "}
            Experiences
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Hi, I&apos;m Ahmad Girach. I craft beautiful web experiences with
            modern technologies and thoughtful design.
          </p>
          <div className="flex items-center  gap-4">
            <Button size="lg" asChild>
              <a
                href="https://cal.com/ahmadgirach/15min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a FREE 15 min call &rarr;
              </a>
            </Button>
            <Button
              size="lg"
              className="w-full border-2"
              variant={"secondary"}
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative hidden aspect-square md:block"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/0" />
          <Image
            src={Avatar}
            alt="Profile Pic"
            className="rounded-full object-cover"
          />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.a>
    </section>
  );
}
