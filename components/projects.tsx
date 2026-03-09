"use client";

import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  isComingSoon?: boolean;
}

const projects: Project[] = [
  {
    id: "globeassist",
    title: "Globeassist (FYP)",
    description:
      "Final Year Project - A comprehensive application for global assistance.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://globe-assist.vercel.app/",
  },
  {
    id: "smog-detection",
    title: "Smog Detection & Classification",
    description:
      "Deep learning model for detecting and classifying smog levels using computer vision.",
    technologies: ["Deep Learning", "Python", "TensorFlow", "OpenCV"],
    link: "https://github.com/aman73344/Deep-learning-Smog-detection-",
  },
  {
    id: "retail-data",
    title: "Online Retail Data Cleaning & Analysis",
    description:
      "Data preprocessing and analysis project for e-commerce retail datasets.",
    technologies: ["Python", "Pandas", "Data Analysis", "SQL"],
    link: "https://github.com/aman73344/Online-Retail-Data-Cleaning-and-Analysis",
  },
  {
    id: "titanic",
    title: "Titanic Data Preprocessing",
    description:
      "Comprehensive data preprocessing and handling of missing values in the Titanic dataset.",
    technologies: ["Python", "Pandas", "NumPy", "Data Science"],
    link: "https://github.com/aman73344/Titanic-Data-Preprocessing-Handling-Missing-Values",
  },
  {
    id: "bi-dashboard",
    title: "Supermarket Sales Analysis Dashboard",
    description:
      "Interactive Power BI dashboard for analyzing sales trends, profits, and customer behavior.",
    technologies: ["Power BI", "SQL", "Analytics", "Data Visualization"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiYmJlMjYyYTgtYTNlMC00OTliLWEzNDUtZDI0ZDAzNzA0NzhiIiwidCI6IjEyYjIyMWIzLTA0NjQtNDIyMy04OWU1LTg4ODgzNTc3OGI1OCIsImMiOjl9",
    isComingSoon: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground">
            A collection of my recent projects showcasing my skills and
            experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-2xl">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Project Link or Coming Soon */}
        {project.isComingSoon ? (
          <Button disabled className="w-full">
            Coming Soon!
          </Button>
        ) : (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full">
              View Project
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        )}
      </CardContent>
    </Card>
  );
}
