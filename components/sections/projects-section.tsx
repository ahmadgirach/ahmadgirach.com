"use client";

import Link from "next/link";
import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";

const projects = [
  {
    title: "MiniDrive",
    description:
      "A File Manager app that allow users to create folders, upload files and more..",
    image: "/minidrive.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Cloudinary",
      "MongoDB",
    ],
    github: "https://github.com",
    demo: "https://minidrive.vercel.app/",
  },
  {
    title: "Millionaire Success Stories",
    description:
      "A platform where you can see the journey of some of the wealthiest individuals going from zero to million.",
    image: "/mss.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    github: "https://github.com",
    demo: "https://www.millionairesuccessstories.com/",
  },
  {
    title: "Platforms Directory",
    description:
      "A web app to showcase various platfroms where users can submit their product and drive traffic.",
    image: "/platforms-dir.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "MongoDB"],
    github: "https://github.com",
    demo: "https://platforms-dir.vercel.app",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Here are some of my recent projects that showcase my skills and
            expertise in web development.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={item}>
              <Card className="group overflow-hidden border-2 transition-colors hover:border-primary/50">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-muted-foreground min-h-20">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-full px-3"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-4">
                    <Button className="group rounded-full w-full" asChild>
                      <Link href={project.demo} target="_blank">
                        Visit{" "}
                        <span className="transition-all group-hover:mr-2">
                          &rarr;
                        </span>
                      </Link>
                    </Button>
                    {/* <Button
                      variant="outline"
                      className="group/btn rounded-full"
                      asChild
                    >
                      <Link href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:rotate-12" />
                        Source
                      </Link>
                    </Button> */}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
