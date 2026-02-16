'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const skillCategories = [
  {
    category: 'Data Analysis & Visualization',
    skills: ['Power BI', 'Tableau', 'Data Visualization', 'Statistical Analysis', 'Insights Generation'],
  },
  {
    category: 'Programming Languages',
    skills: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'Java'],
  },
  {
    category: 'Data Tools & Frameworks',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'TensorFlow'],
  },
  {
    category: 'Platforms & Tools',
    skills: ['SQL Server', 'MySQL', 'Git', 'GitHub', 'Jupyter Notebook', 'Excel', 'VS Code'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I'm proficient in
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.category}>
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
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
          ))}
        </div>
      </div>
    </section>
  )
}
