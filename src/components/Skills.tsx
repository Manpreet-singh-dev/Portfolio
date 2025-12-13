const skills = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Languages" },
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "Python", level: 82, category: "Languages" },
  { name: "PostgreSQL", level: 85, category: "Database" },
  { name: "Docker", level: 78, category: "DevOps" },
  { name: "AWS", level: 75, category: "Cloud" },
  { name: "GraphQL", level: 80, category: "API" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
            <div className="flex-1 h-px bg-border/50" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                      {skill.category}
                    </span>
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out group-hover:glow-box"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Years Experience", value: "5+" },
              { label: "Projects Completed", value: "50+" },
              { label: "Open Source Contributions", value: "100+" },
              { label: "GitHub Stars", value: "2K+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center skill-card">
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
