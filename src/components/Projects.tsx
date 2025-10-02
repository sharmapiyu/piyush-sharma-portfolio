import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Database, Smartphone, Users, TrendingUp, Eye, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerView = 3;

  const projects = [
    {
      id: 1,
      title: "Journal App",
      subtitle: "Full-stack Spring Boot Application",
      description: "A comprehensive journal application with JWT authentication and Weather API integration",
      longDescription: "Built a full-stack journal application using Spring Boot, MongoDB, and Redis. Features include user registration, secure authentication with JWT tokens, and contextual weather information for journal entries. Implemented Redis caching for improved performance and integrated Weather API for real-time weather data.",
      icon: Database,
      technologies: ["Spring Boot", "MongoDB", "Redis", "JWT", "Weather API", "Java"],
      features: [
        "Secure JWT authentication system",
        "Real-time weather integration",
        "Redis caching for performance",
        "RESTful API architecture",
        "Data persistence with MongoDB"
      ],
      metrics: {
        users: "Scalable architecture",
        performance: "50% faster with Redis",
        security: "JWT secured endpoints"
      }
    },
    {
      id: 2,
      title: "Bluetooth Monitoring App",
      subtitle: "Real-time Mobile Application",
      description: "Flutter app for real-time sensor monitoring via Bluetooth SPP protocol",
      longDescription: "Developed a sophisticated mobile application using Flutter and Dart for real-time sensor data monitoring. The app connects to external sensors via Bluetooth SPP protocol, stores data locally using SQLite, and provides live visual monitoring with fl_chart library.",
      icon: Smartphone,
      technologies: ["Flutter", "Dart", "SQLite", "Bluetooth SPP", "fl_chart"],
      features: [
        "Real-time Bluetooth communication",
        "Local SQLite data storage",
        "Live data visualization charts",
        "Cross-platform compatibility",
        "Sensor data analytics"
      ],
      metrics: {
        accessibility: "60% improved data access",
        efficiency: "80% reduced manual logging",
        platforms: "iOS & Android support"
      }
    },
    {
      id: 3,
      title: "Food Share Platform",
      subtitle: "Community-driven Food Sharing",
      description: "Platform to sell or donate excess food, reducing waste and supporting community",
      longDescription: "Created Food Share, a comprehensive platform addressing food waste while supporting community needs. Users can create profiles, list excess or near-expiry food items, and track their contribution statistics. The platform encourages sustainable practices and community engagement.",
      icon: Users,
      technologies: ["React", "Node.js", "MySQL", "Express", "JWT"],
      features: [
        "User profile management",
        "Food listing and categorization",
        "Donation tracking system",
        "Community engagement features",
        "Impact analytics dashboard"
      ],
      metrics: {
        impact: "Community-focused design",
        sustainability: "Reduce food waste",
        engagement: "Social impact tracking"
      }
    },
    {
      id: 4,
      title: "Multi-Person Face Recognition",
      subtitle: "AI/ML Computer Vision System",
      description: "Real-time multi-person face detection and recognition using YOLOv11 and OpenCV",
      longDescription: "Built an advanced computer vision system for real-time multi-person face recognition using YOLOv11 for face detection and face_recognition library for identification. The system processes webcam or video streams, detects multiple faces simultaneously, and matches them against a stored dataset using facial embeddings. Features scalable architecture for easy dataset expansion and Jupyter Notebook integration for experimentation.",
      icon: Eye,
      technologies: ["Python", "YOLOv11", "OpenCV", "face_recognition", "dlib", "NumPy", "Jupyter"],
      features: [
        "Real-time multi-face detection with YOLOv11",
        "Face recognition using facial embeddings",
        "Webcam and video file support",
        "Scalable dataset management",
        "Jupyter Notebook integration",
        "High-accuracy face matching"
      ],
      metrics: {
        accuracy: "High-precision recognition",
        performance: "Real-time processing",
        scalability: "Easy dataset expansion"
      }
    },
    {
      id: 5,
      title: "Expense Tracker Fullstack",
      subtitle: "Modern Financial Management App",
      description: "Full-stack expense tracking application with Spring Boot backend and React frontend",
      longDescription: "Developed a comprehensive expense tracking application using Spring Boot 3.5.4 with Java 21 for the backend and React 18 with Vite for the frontend. Features include JWT-based authentication, secure expense management, responsive UI with Tailwind CSS, and complete Docker containerization. The application uses PostgreSQL for data persistence and implements modern security practices including BCrypt password encryption and CORS configuration.",
      icon: DollarSign,
      technologies: ["Spring Boot", "React", "Java 21", "PostgreSQL", "JWT", "Tailwind CSS", "Docker"],
      features: [
        "JWT-based user authentication",
        "Complete expense CRUD operations",
        "Responsive modern UI design",
        "Secure API with Spring Security",
        "Docker containerization",
        "PostgreSQL database integration"
      ],
      metrics: {
        security: "JWT & BCrypt secured",
        architecture: "Full-stack separation",
        deployment: "Docker-ready production"
      }
    }
  ];

  const nextProjects = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + projectsPerView >= projects.length ? 0 : prevIndex + projectsPerView
    );
  };

  const prevProjects = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, projects.length - projectsPerView) : Math.max(0, prevIndex - projectsPerView)
    );
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + projectsPerView);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical expertise and problem-solving abilities across 
            full-stack development, mobile applications, and system architecture.
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={prevProjects}
            className="border-accent text-accent hover:bg-accent/10"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(projects.length / projectsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * projectsPerView)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  Math.floor(currentIndex / projectsPerView) === index
                    ? 'bg-primary'
                    : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={nextProjects}
            className="border-accent text-accent hover:bg-accent/10"
            disabled={currentIndex + projectsPerView >= projects.length}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          {visibleProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="glass-card p-6 hover-lift hover-glow transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                  <project.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{project.technologies.length - 3} more
                  </Badge>
                )}
              </div>

              <Button 
                variant="ghost" 
                className="w-full text-accent hover:text-accent hover:bg-accent/10"
              >
                View Details
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <Button 
            variant="outline"
            className="border-accent text-accent hover:bg-accent/10"
            onClick={() => window.open('https://github.com/sharmapiyu', '_blank')}
          >
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                    <selectedProject.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                    <DialogDescription className="text-lg">
                      {selectedProject.subtitle}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-accent">Project Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-accent">Key Features</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-accent">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-accent">Impact & Metrics</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {Object.entries(selectedProject.metrics).map(([key, value]: [string, string]) => (
                      <div key={key} className="glass-card p-4 rounded-lg text-center">
                        <TrendingUp className="h-6 w-6 text-primary mx-auto mb-2" />
                        <p className="font-semibold text-foreground">{value}</p>
                        <p className="text-sm text-muted-foreground capitalize">{key}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;