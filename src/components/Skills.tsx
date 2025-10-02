import { Code, Database, Cloud, GitBranch, Monitor, Smartphone } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages: Core",
      icon: Code,
      skills: [
        { name: "Java", level: "Expert" },
        { name: "C", level: "Advanced" },
        { name: "Python", level: "Advanced" },
        { name: "Dart", level: "Intermediate" },
        { name: "JavaScript", level: "Advanced" },
        { name: "SQL", level: "Advanced" }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development: Java",
      icon: Cloud,
      skills: [
        { name: "Spring", level: "Advanced" },
        { name: "Spring Boot", level: "Advanced" },
        { name: "Maven", level: "Intermediate" },
        { name: "REST APIs", level: "Advanced" }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Frontend Development",
      icon: Monitor,
      skills: [
        { name: "HTML", level: "Expert" },
        { name: "CSS", level: "Advanced" },
        { name: "React", level: "Advanced" },
        { name: "Flutter", level: "Intermediate" }
      ],
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MySQL", level: "Advanced" },
        { name: "SQLite", level: "Intermediate" },
        { name: "PostgreSQL", level: "Intermediate" }
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Tools & Version Control",
      icon: GitBranch,
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
        { name: "Android SDK", level: "Advanced" },
        { name: "Postman", level: "Advanced" },
        { name: "Tableau", level: "Intermediate" }
      ],
      color: "from-pink-500 to-rose-500"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-primary text-primary-foreground";
      case "Advanced": return "bg-accent text-accent-foreground";
      case "Intermediate": return "bg-blue-600 text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };


  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels 
            across various programming languages, frameworks, and tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card p-8 hover-lift">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold gradient-text-accent">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="mt-16 text-center">
          <Card className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 gradient-text-primary">
              Key Technical Achievements
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">6+</div>
                <p className="text-muted-foreground">Programming Languages</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">9+</div>
                <p className="text-muted-foreground">Professional Certifications</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <p className="text-muted-foreground">Major Projects</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;