import { Code2, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code is my passion.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Agile methodologies and efficient workflows for rapid development.",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborative approach with excellent communication skills.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="flex-1 h-px bg-border/50" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate developer with over 5 years of experience in building 
                web applications. My journey started with curiosity about how things work 
                on the internet, and it evolved into a career that I truly love.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in JavaScript ecosystems, particularly React, Node.js, and 
                TypeScript. I'm also deeply interested in cloud technologies and DevOps 
                practices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me contributing to open-source projects, 
                writing technical blog posts, or exploring new technologies.
              </p>

              <div className="pt-4">
                <p className="font-mono text-sm text-primary mb-3">Technologies I work with:</p>
                <div className="grid grid-cols-2 gap-2">
                  {["JavaScript (ES6+)", "TypeScript", "React", "Node.js", "Python", "PostgreSQL"].map((tech) => (
                    <div key={tech} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="text-primary">▹</span>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="skill-card group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
