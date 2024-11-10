"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout, Server } from "lucide-react";
import {
  TbBrandNextjs,
  TbBrandAngular,
  TbBrandReact,
  TbBrandPython,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandDjango,
  TbBrandNodejs,
  TbBrandMongodb,
  TbBrandTailwind,
} from "react-icons/tb";
import { SiExpress, SiPostgresql, SiSabanci, SiShadcnui } from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    icon: Layout,
    items: [
      { name: "Angular", icon: <TbBrandAngular className="size-10" /> },
      { name: "React", icon: <TbBrandReact className="size-10" /> },
      { name: "Next.js", icon: <TbBrandNextjs className="size-10" /> },
      { name: "JavaScript", icon: <TbBrandJavascript className="size-10" /> },
      { name: "TypeScript", icon: <TbBrandTypescript className="size-10" /> },
      { name: "Tailwind CSS", icon: <TbBrandTailwind className="size-10" /> },
      { name: "Shadcn UI", icon: <SiShadcnui className="size-10" /> },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    items: [
      { name: "Python", icon: <TbBrandPython className="size-10" /> },
      { name: "Django", icon: <TbBrandDjango className="size-10" /> },
      { name: "Node.js", icon: <TbBrandNodejs className="size-10" /> },
      { name: "Express", icon: <SiExpress className="size-10" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="size-10" /> },
      { name: "MongoDB", icon: <TbBrandMongodb className="size-10" /> },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-muted/40 py-24 dark:bg-muted/10"
    >
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I specialize in building modern web applications with a focus on
            performance, accessibility, and user experience.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          {skills.map((skill) => (
            <motion.div key={skill.category} variants={item}>
              <Card className="relative overflow-hidden border-2 p-6 transition-colors hover:border-primary/50 space-y-4">
                <div className="flex items-center w-fit gap-2 rounded-lg bg-primary/10 px-4 py-3">
                  <skill.icon className="size-5 text-primary" />
                  <h3 className="text-lg font-semibold">{skill.category}</h3>
                </div>
                <p className="text-muted-foreground">
                  Technologies I use for {skill.category.toLowerCase()}{" "}
                  development.
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <div
                      className="flex flex-col items-center gap-2 min-w-[8rem] md:min-w-[6rem]"
                      key={item.name}
                    >
                      {item.icon}
                      <Badge variant="secondary" className="rounded-full px-3">
                        {item.name}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
