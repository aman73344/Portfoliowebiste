'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Brain, Code2, Database } from 'lucide-react'

const skillCategories = [
  {
    category: 'AI & ML',
    icon: Brain,
    skills: ['LLMs', 'NLP', 'Deep Learning', 'CNNs', 'Scikit-learn'],
  },
  {
    category: 'Full-Stack',
    icon: Code2,
    skills: ['Next.js', 'React', 'Python', 'REST APIs', 'Tailwind'],
  },
  {
    category: 'Data',
    icon: Database,
    skills: ['SQL', 'PostgreSQL', 'Redis', 'Power BI', 'Pandas'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <p className="text-lg text-muted-foreground">
            Technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.category} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
