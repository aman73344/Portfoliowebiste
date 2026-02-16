'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Experience {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
}

const experiences: Experience[] = [
  {
    title: 'Intern - Data Analytics',
    company: 'Elevvo Pathways',
    period: '6 Months (Current)',
    description: 'Working on data analysis and visualization projects. Developing SQL queries to extract and analyze organizational data. Creating Power BI dashboards and reports to support data-driven decision making. Performing statistical analysis on datasets and translating insights into actionable recommendations.',
    skills: ['SQL', 'Power BI', 'Data Analysis', 'Python', 'Excel'],
  },
  {
    title: 'Personal Projects Developer',
    company: 'GitHub Portfolio',
    period: 'Ongoing',
    description: 'Building and maintaining multiple data analysis and web development projects on GitHub. Creating end-to-end solutions from data collection to visualization. Implementing best practices in code organization, documentation, and version control. Contributing to open-source projects and continuously learning new technologies.',
    skills: ['GitHub', 'Python', 'JavaScript', 'Data Analysis', 'Version Control'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground">
            My professional journey and work experience
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-0">
                  <div>
                    <CardTitle className="text-2xl">{exp.title}</CardTitle>
                    <CardDescription className="text-base">{exp.company}</CardDescription>
                  </div>
                  <span className="text-sm font-semibold text-primary whitespace-nowrap">{exp.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
