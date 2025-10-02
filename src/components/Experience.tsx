import { Building, Award, GraduationCap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'project',
      company: 'Industrial Project',
      role: 'Full-Stack Developer',
      platform: 'Current Work',
      period: 'Aug 2025 - Present',
      description: 'Currently developing an industrial-grade application with modern technologies and best practices.',
      achievements: [
        'Building scalable backend architecture with Spring Boot',
        'Implementing responsive frontend with React and TypeScript',
        'Integrating real-time features and database optimization',
        'Following industry-standard development practices'
      ],
      icon: Building,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 2,
      type: 'internship',
      company: 'Walmart USA',
      role: 'Advanced Software Engineering Virtual Internship',
      platform: 'Forage',
      period: 'Feb 2025 - Mar 2025',
      description: 'Focused on advanced software engineering practices and system optimization.',
      achievements: [
        'Designed and optimized Java heap data structures for logistics systems',
        'Created comprehensive UML & ER diagrams for scalable system architecture',
        'Implemented efficient algorithms for supply chain optimization'
      ],
      icon: Building,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 3,
      type: 'internship',
      company: 'Tata',
      role: 'Data Visualization Virtual Internship',
      platform: 'Forage',
      period: 'Jan 2025 - Feb 2025',
      description: 'Specialized in executive-level data visualization and business intelligence.',
      achievements: [
        'Designed executive-level visual insights for strategic decision-making',
        'Built interactive data dashboards using advanced analytics',
        'Applied storytelling techniques to complex data presentations'
      ],
      icon: Building,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology',
      institution: 'ABES Institute of Technology, Ghaziabad',
      period: 'Current',
      cgpa: '7.6 / 10',
      icon: GraduationCap,
      color: 'from-green-500 to-green-600'
    },
    {
      degree: 'Senior Secondary',
      institution: 'Vanasthali Public School, Noida',
      period: 'Completed',
      cgpa: '8.7 / 10',
      icon: GraduationCap,
      color: 'from-orange-500 to-orange-600'
    }
  ];


  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text-primary">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My experience through strategic internships, continuous learning, and 
            practical application of cutting-edge technologies.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center gradient-text-accent">
            Professional Experience
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>
            
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background z-10 flex items-center justify-center">
                  <exp.icon className="h-4 w-4 text-white" />
                </div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="glass-card p-6 hover-lift transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${exp.color} rounded-lg flex items-center justify-center mr-3`}>
                        <exp.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-foreground">{exp.company}</h4>
                        <p className="text-accent font-medium">{exp.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {exp.platform}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {exp.period}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center gradient-text-accent">
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="glass-card p-6 hover-lift transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${edu.color} rounded-lg flex items-center justify-center mr-4`}>
                    <edu.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <Badge variant="outline">{edu.period}</Badge>
                  <Badge className="bg-primary/20 text-primary">
                    CGPA: {edu.cgpa}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;