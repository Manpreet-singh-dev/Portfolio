import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const roles = ["Full Stack Developer", "Open Source Contributor", "UI/UX Enthusiast"];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float delay-300" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-primary mb-4 animate-fade-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            Hello, my name is
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            <span className="text-gradient">Manpreet Singh</span>
          </h1>

          <div className="h-12 mb-8 animate-fade-up opacity-0" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
            <span className="font-mono text-xl md:text-2xl text-muted-foreground">
              {displayText}
              <span className="typing-cursor" />
            </span>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up opacity-0" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
            Passionate about building exceptional digital experiences. 
            I craft clean, elegant solutions to complex problems.
          </p>

          <div className="flex items-center justify-center gap-6 mb-16 animate-fade-up opacity-0" style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:glow-box transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:glow-box transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:Manpreetsingh53535@gmail.com"
              className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:glow-box transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>

          <a
            href="#about"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-fade-up opacity-0"
            style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}
          >
            <span className="font-mono text-sm">Scroll to explore</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
