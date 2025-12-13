import { ExternalLink, Github, Folder } from "lucide-react";

const featuredProjects = [
  {
    title: "Cloud Platform Dashboard",
    description:
      "A comprehensive dashboard for managing cloud infrastructure with real-time monitoring, automated scaling, and cost optimization features.",
    tech: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
  },
  {
    title: "AI Code Assistant",
    description:
      "An intelligent coding assistant powered by machine learning that provides real-time code suggestions, bug detection, and automated refactoring.",
    tech: ["Python", "TensorFlow", "FastAPI", "React", "Docker"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
  },
  {
    title: "E-Commerce Microservices",
    description:
      "A scalable e-commerce platform built with microservices architecture, featuring real-time inventory management and payment processing.",
    tech: ["Node.js", "GraphQL", "Redis", "Kubernetes", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
  },
];

const otherProjects = [
  {
    title: "CLI Task Manager",
    description: "A powerful command-line tool for managing tasks and projects with Git integration.",
    tech: ["Rust", "SQLite"],
    github: "https://github.com",
  },
  {
    title: "Real-time Chat App",
    description: "WebSocket-based chat application with end-to-end encryption and file sharing.",
    tech: ["React", "Socket.io", "Node.js"],
    github: "https://github.com",
  },
  {
    title: "Portfolio Generator",
    description: "Automated portfolio website generator from GitHub profile and repositories.",
    tech: ["Next.js", "GitHub API"],
    github: "https://github.com",
  },
  {
    title: "VS Code Extension",
    description: "Productivity extension for VS Code with custom snippets and automation.",
    tech: ["TypeScript", "VS Code API"],
    github: "https://github.com",
  },
  {
    title: "API Rate Limiter",
    description: "Distributed rate limiting library with Redis backend for microservices.",
    tech: ["Go", "Redis"],
    github: "https://github.com",
  },
  {
    title: "Data Visualization",
    description: "Interactive data visualization dashboard for analytics and reporting.",
    tech: ["D3.js", "React", "Python"],
    github: "https://github.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <div className="flex-1 h-px bg-border/50" />
          </div>

          {/* Featured Projects */}
          <div className="space-y-24 mb-24">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                <div
                  className={`md:col-span-7 relative group ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div
                  className={`md:col-span-5 ${
                    index % 2 === 1 ? "md:order-1 md:pr-4" : "md:pl-4"
                  }`}
                >
                  <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                  <div className="bg-card p-6 rounded-xl shadow-lg mb-4 border border-border/50">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div
                    className={`flex flex-wrap gap-2 mb-4 ${
                      index % 2 === 1 ? "md:justify-end" : ""
                    }`}
                  >
                    {project.tech.map((tech) => (
                      <span key={tech} className="font-mono text-xs text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`flex gap-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground">Other Noteworthy Projects</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div key={project.title} className="project-card p-6 group">
                <div className="flex items-center justify-between mb-4">
                  <Folder className="text-primary" size={40} />
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="font-mono text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

