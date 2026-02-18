"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-sm font-medium text-primary">
                  Data Analyst & Developer
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                I'm <span className="text-primary">Aman</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Data Analyst with expertise in transforming complex datasets
                into actionable insights. I specialize in data visualization,
                statistical analysis, and building intelligent solutions using
                Python, SQL, and modern analytics tools.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#projects">
                <Button size="lg" className="gap-2">
                  Explore Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline">
                  Contact Me
                </Button>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div>
                <p className="text-2xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">8+</p>
                <p className="text-sm text-muted-foreground">Skills</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">6mo+</p>
                <p className="text-sm text-muted-foreground">Experience</p>
              </div>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform -rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl transform rotate-3"></div>
              <Image
                src="/profile.jpg"
                alt="Aman - Data Analyst"
                fill
                className="object-cover rounded-2xl relative z-10 shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
