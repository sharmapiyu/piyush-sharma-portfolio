import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Software Engineer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/50 to-background/90" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 animate-float blur-sm" />
      <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-accent/20 animate-float delay-1000 blur-sm" />
      <div className="absolute bottom-32 left-20 w-12 h-12 rounded-full bg-primary/30 animate-float delay-500 blur-sm" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Profile Photo Section */}
            <div className="flex justify-center md:order-2 animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-30 animate-glow-pulse"></div>
                <img 
                  src={profilePhoto} 
                  alt="Piyush Sharma - Software Engineer" 
                  className="relative w-72 h-72 md:w-96 md:h-96 object-cover object-center rounded-full border-4 border-primary/30 shadow-2xl hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="text-center md:text-left md:order-1 flex flex-col justify-center">
              <div className="mb-8">
                <h2 className="text-lg md:text-xl text-muted-foreground mb-3 animate-fade-in">
                  Hello, I'm
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-in-left leading-tight">
                  <span className="gradient-text-primary">Piyush</span>{' '}
                  <span className="text-foreground">Sharma</span>
                </h1>
                <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-accent animate-slide-in-right mb-6">
                  <span className="typing-cursor">{displayText}</span>
                </div>
              </div>

              <p className="text-base md:text-lg text-muted-foreground mb-10 animate-fade-in delay-1000 leading-relaxed max-w-2xl mx-auto md:mx-0">
                Passionate about building scalable backend systems and full-stack applications 
                with expertise in Java, Spring Boot, and modern web technologies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8 animate-scale-in delay-1500">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary hover-lift"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-accent text-accent hover:bg-accent/10 hover-lift"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </Button>
              </div>

              <div className="flex justify-center md:justify-start space-x-6 mb-8 animate-fade-in delay-2000">
                <a 
                  href="https://github.com/sharmapiyu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 glass-card rounded-full hover-glow hover-lift transition-all duration-300"
                >
                  <Github className="h-6 w-6 text-foreground" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/piyush-sharma-665332288" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 glass-card rounded-full hover-glow hover-lift transition-all duration-300"
                >
                  <Linkedin className="h-6 w-6 text-foreground" />
                </a>
                <a 
                  href="mailto:piyush.sharma73032@gmail.com"
                  className="p-3 glass-card rounded-full hover-glow hover-lift transition-all duration-300"
                >
                  <Mail className="h-6 w-6 text-foreground" />
                </a>
              </div>

              <button 
                onClick={() => scrollToSection('about')}
                className="animate-bounce cursor-pointer p-2 rounded-full hover:bg-white/10 transition-colors mx-auto md:mx-0 block"
                aria-label="Scroll to about section"
              >
                <ArrowDown className="h-8 w-8 text-accent" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;