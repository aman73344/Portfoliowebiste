"use client";

import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground">
            Get to know me better
          </p>
        </div>

        <Card className="max-w-3xl">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg mt-1">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a Computer Science graduate from UCP Lahore (CGPA 3.21) with a passion for building LLM-powered applications and AI chatbots that solve real problems.
                </p>
                <p>
                  Through my data analyst internship and hands-on projects like HEROIX, I've gained experience in building full-stack AI products — from conversational interfaces to deployed web applications.
                </p>
                <p>
                  I'm currently looking for opportunities as an AI Engineer or Full-Stack Developer where I can apply my skills in machine learning and modern web technologies.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
