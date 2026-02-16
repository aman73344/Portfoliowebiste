'use client'

export default function Education() {
  const education = [
    {
      school: 'University of Central Punjab, Lahore',
      degree: 'Bachelor of Science in Computer Science',
      major: 'Major: Data Analytics | Minor: Software Development',
      period: 'Oct 2022 - Completed',
      cgpa: 'CGPA: 3.21',
    },
    {
      school: 'Canal Road Punjab Group Of College, Lahore',
      degree: 'Intermediate in Computer Sciences',
      period: 'Mar 2020 – May 2021',
    },
  ]

  return (
    <section id="education" className="py-16 px-4 md:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-balance">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-background border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{edu.school}</h3>
                  <p className="text-primary font-medium">{edu.degree}</p>
                </div>
                <span className="text-sm text-muted-foreground">{edu.period}</span>
              </div>
              {edu.major && <p className="text-sm text-muted-foreground mb-2">{edu.major}</p>}
              {edu.cgpa && <p className="text-sm text-muted-foreground">{edu.cgpa}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
