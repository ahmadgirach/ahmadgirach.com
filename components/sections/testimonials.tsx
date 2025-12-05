"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback } from "../ui/avatar";

const testimonials = [
  {
    name: "Karunakar P.",
    role: "Client from Upwork",
    content:
      "Ahmad is an outstanding full-stack developer who exceeded my expectations. He played a crucial role in developing my web application in a short timeframe, demonstrating exceptional technical skills and problem-solving abilities.",
  },
  {
    name: "Nikunj G.",
    role: "Former Project Manager",
    content:
      "In my 7+ years of experience, I've never met a professional with such strong work ethics as Ahmed.",
  },
  {
    name: "Thomas K.",
    role: "Client from Upwork",
    content:
      "Ahmad was very good and very efficient with a lot of availability. Don't hesitate to propose your projects to him.",
  },
  {
    name: "Omar A.",
    role: "Client from Upwork",
    content:
      "Ahmad is very knowledgeable in his areas and was able to understand quickly our complicated case...",
  },
  {
    name: "Siddharth D.",
    role: "Client from Upwork",
    content:
      "Ahmad was fast and reliable with tasks assigned. Would be great to work together again.",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for previous

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonials"
      className="container mx-auto px-4  py-12 md:py-24 bg-muted/50"
    >
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          What Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Testimonials from clients and colleagues I&apos;ve had the pleasure to
          work with
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              <Card className="p-8 h-auto sm:h-300 lg:h-80">
                <CardContent className="text-center space-y-6">
                  <Quote className="size-12 mx-auto text-primary" />
                  <blockquote className="text-lg md:text-xl leading-relaxed">
                    &quot;{testimonials[currentIndex].content}&quot;
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <Avatar className="size-16">
                      <AvatarFallback>
                        {testimonials[currentIndex].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <div className="font-semibold">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="size-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`size-2 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-primary"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
