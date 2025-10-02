import { Code, Database, Cloud, Smartphone, Users, TrendingUp, Award, GraduationCap, Building, ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import { useState } from 'react';

const About = () => {
  const [currentCertIndex, setCertCurrentIndex] = useState(0);
  const certificationsPerView = 3;

  // Certifications ordered by importance and value
  const certifications = [
    // AWS Certifications (Highest Value - Cloud Computing)
    {
      id: 'aws-cloud-practitioner',
      title: 'AWS Cloud Practitioner Essentials',
      organization: 'AWS Training & Certification',
      icon: '☁️',
      color: 'from-orange-500/10 to-yellow-500/10',
      borderColor: 'border-orange-500/20',
      date: 'September 24, 2025',
      details: 'Certified by: Michelle Vaz',
      description: 'AWS fundamentals & cloud computing essentials',
      priority: 1
    },
    {
      id: 'aws-solutions-architecture',
      title: 'Solutions Architecture Job Simulation',
      organization: 'AWS - Forage',
      icon: '☁️',
      color: 'from-orange-500/10 to-yellow-500/10',
      borderColor: 'border-orange-500/20',
      date: 'March 18th, 2025',
      details: 'Focus: Scalable hosting architecture',
      description: 'Cloud architecture design & implementation',
      priority: 1
    },
    
    // NPTEL IIT Certifications (High Academic Value)
    {
      id: 'nptel-machine-learning',
      title: 'Machine Learning',
      organization: 'NPTEL - IIT Kharagpur',
      icon: '🧠',
      color: 'from-red-500/10 to-orange-500/10',
      borderColor: 'border-red-500/20',
      date: 'Jul-Sep 2024',
      details: 'Score: 72%',
      description: 'Elite certification from IIT Kharagpur',
      priority: 2
    },
    {
      id: 'nptel-data-science',
      title: 'Data Science for Engineers',
      organization: 'NPTEL - IIT Madras',
      icon: '📊',
      color: 'from-red-500/10 to-orange-500/10',
      borderColor: 'border-red-500/20',
      date: 'Jan-Mar 2024',
      details: 'Score: 66%',
      description: 'Elite certification from IIT Madras',
      priority: 2
    },

    // Major Company Job Simulations (High Industry Value)
    {
      id: 'jpmorgan-software-engineering',
      title: 'Software Engineering Job Simulation',
      organization: 'JPMorgan Chase & Co. - Forage',
      icon: '🏦',
      color: 'from-blue-600/10 to-navy-500/10',
      borderColor: 'border-blue-600/20',
      date: 'March 16th, 2025',
      details: 'Tasks: Kafka, H2, REST APIs',
      description: 'Financial technology & enterprise software development',
      priority: 3
    },
    {
      id: 'electronic-arts-software-engineering',
      title: 'Software Engineering Job Simulation',
      organization: 'Electronic Arts (EA) - Forage',
      icon: '🎮',
      color: 'from-blue-500/10 to-indigo-500/10',
      borderColor: 'border-blue-500/20',
      date: 'May 4th, 2025',
      details: 'Tasks: Feature Proposal, Game Objects, Inventory System',
      description: 'Game development & software engineering simulation',
      priority: 3
    },

    // Innovation Challenges & Workshops
    {
      id: 'accenture-innovation-challenge',
      title: 'Innovation Challenge',
      organization: 'Accenture Bootcamp',
      icon: '🚀',
      color: 'from-purple-500/10 to-blue-500/10',
      borderColor: 'border-purple-500/20',
      date: '2024',
      details: 'Program: Online Bootcamp',
      description: 'Innovation & problem-solving bootcamp',
      priority: 4
    },
    {
      id: 'be10x-ai-tools',
      title: 'AI Tools Workshop',
      organization: 'be10x',
      icon: '🤖',
      color: 'from-gray-500/10 to-black/10',
      borderColor: 'border-gray-500/20',
      date: 'December 8th, 2024',
      details: 'AI presentations, data analysis & debugging',
      description: 'AI presentations, data analysis & debugging',
      priority: 4
    }
  ];

  const nextCertifications = () => {
    setCertCurrentIndex((prevIndex) => 
      prevIndex + certificationsPerView >= certifications.length ? 0 : prevIndex + certificationsPerView
    );
  };

  const prevCertifications = () => {
    setCertCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, certifications.length - certificationsPerView) : Math.max(0, prevIndex - certificationsPerView)
    );
  };

  const visibleCertifications = certifications.slice(currentCertIndex, currentCertIndex + certificationsPerView);
  const highlights = [
    {
      icon: Code,
      title: "Backend Development",
      description: "Expertise in Java, Spring Boot, REST APIs, and system architecture"
    },
    {
      icon: Globe,
      title: "Frontend Development", 
      description: "Building responsive UIs with React, HTML, CSS, and modern frameworks"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Proficient in MySQL, PostgreSQL, MongoDB, and Redis optimization"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile apps using Flutter and native technologies"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate software engineer with a strong foundation in full-stack development, 
            dedicated to creating efficient, scalable solutions that make a real impact.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6 animate-fade-in text-center">
            <h3 className="text-2xl font-semibold gradient-text-accent">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing Bachelor of Technology at ABES Institute of Technology, 
              I've maintained a strong academic record while gaining practical experience 
              through internships at industry leaders like Walmart USA and Tata.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A dedicated software engineer with expertise in full-stack development, specializing in 
              Java, Spring Boot, and modern web technologies. With 9+ professional certifications from 
              industry leaders like AWS, IIT institutions, and major companies, I bring both academic 
              excellence and practical experience to every project. Currently working on industrial-grade 
              applications while continuously expanding my technical horizons.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                CGPA: 7.6/10
              </span>
              <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium">
                5+ Projects
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-600 rounded-full text-sm font-medium border border-yellow-500/30">
                🏆 Hack Genesis '25 Finalist
              </span>
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                9+ Professional Certifications
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-lg hover-lift hover-glow transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 rounded-xl animate-scale-in mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center gradient-text-accent">
            🏆 Achievements & Certifications
          </h3>
          
          {/* Main Achievements */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-6 rounded-lg border border-yellow-500/20">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">🏆</span>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-600">Hack Genesis '25 Finalist</h4>
                  <p className="text-sm text-muted-foreground">International Level Hackathon</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Organizer:</strong> CHRIST (Deemed to be University), Delhi NCR
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Date:</strong> September 23, 2025
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Sponsors:</strong> TP-Link, Intel, Loft
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-blue-500/20">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">💼</span>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600">Industrial Project</h4>
                  <p className="text-sm text-muted-foreground">Current Development</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Role:</strong> Full-Stack Developer
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Duration:</strong> August 2025 - Present
              </p>
              <p className="text-sm text-muted-foreground">
                Building scalable industrial-grade applications with modern tech stack
              </p>
            </div>
          </div>

          {/* Professional Certifications with Scroll */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-4 text-center text-accent">Professional Certifications</h4>
            
            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-4 mb-6">
              <button
                onClick={prevCertifications}
                disabled={currentCertIndex === 0}
                className="p-2 rounded-full bg-accent/10 text-accent hover:bg-accent/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              
              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(certifications.length / certificationsPerView) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCertCurrentIndex(index * certificationsPerView)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      Math.floor(currentCertIndex / certificationsPerView) === index
                        ? 'bg-accent'
                        : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextCertifications}
                disabled={currentCertIndex + certificationsPerView >= certifications.length}
                className="p-2 rounded-full bg-accent/10 text-accent hover:bg-accent/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Certifications Grid */}
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4 min-h-[200px]">
              {visibleCertifications.map((cert) => (
                <div key={cert.id} className={`bg-gradient-to-r ${cert.color} p-4 rounded-lg border ${cert.borderColor} hover:scale-105 transition-transform duration-300`}>
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-black rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">{cert.icon}</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm">{cert.title}</h5>
                      <p className="text-xs text-muted-foreground">{cert.organization}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">
                    <strong>Date:</strong> {cert.date} | <strong>{cert.details}</strong>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>

            {/* ABES Innovator's Knockout - Special Achievement */}
            <div className="mt-6">
              <div className="bg-gradient-to-r from-yellow-500/10 to-green-500/10 p-6 rounded-lg border border-yellow-500/20 text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">🥈</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">🏆 Innovator's Knockout - 2nd Prize Winner</h5>
                    <p className="text-sm text-muted-foreground">ABES Institute of Technology</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Achievement:</strong> 2nd Prize Winner | <strong>Date:</strong> August 2025
                </p>
                <p className="text-sm text-muted-foreground">
                  Innovation & Technology Competition - Outstanding Performance & Recognition
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;