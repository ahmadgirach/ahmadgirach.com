"use client";

import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import {
  AngularIcon,
  AWSIcon,
  DjangoIcon,
  DockerIcon,
  ExpressIcon,
  FastAPIIcon,
  FlaskIcon,
  GitHubIcon,
  JavaScriptIcon,
  JiraIcon,
  MongoDBIcon,
  NextjsIcon,
  NodejsIcon,
  PostgresIcon,
  PythonIcon,
  ReactIcon,
  TypeScriptIcon,
  VercelIcon,
  TailwindCSSIcon,
  SupabaseIcon,
} from "../icons";

const skills = [
  { name: "Python", icon: PythonIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "Django", icon: DjangoIcon },
  { name: "Flask", icon: FlaskIcon },
  { name: "FastAPI", icon: FastAPIIcon },
  { name: "Node.js", icon: NodejsIcon },
  { name: "Express", icon: ExpressIcon },
  { name: "Angular", icon: AngularIcon },
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextjsIcon },
  { name: "Tailwind CSS", icon: TailwindCSSIcon },
  { name: "PostgreSQL", icon: PostgresIcon },
  { name: "MongoDB", icon: MongoDBIcon },
  { name: "Docker", icon: DockerIcon },
  { name: "AWS", icon: AWSIcon },
  { name: "Vercel", icon: VercelIcon },
  { name: "GitHub", icon: GitHubIcon },
  { name: "Jira", icon: JiraIcon },
  { name: "Supabase", icon: SupabaseIcon },
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

export function AboutSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gray-200 dark:bg-gray-700 py-12 md:py-24"
    >
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Tech Stack / Tools I work with
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="flex flex-col justify-center items-center aspect-square gap-2"
              >
                <skill.icon size={50} />
                <span className="text-sm text-muted-foreground">
                  {skill.name}
                </span>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
