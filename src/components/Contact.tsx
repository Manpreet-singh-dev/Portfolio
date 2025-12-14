import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="font-mono text-primary">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          </div>

          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            I'm currently open to new opportunities and collaborations. Whether you have a 
            question or just want to say hi, my inbox is always open!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="text-primary" size={20} />
              <span className="font-mono">Manpreetsingh53535@gmail.com</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="text-primary" size={20} />
              <span className="font-mono">Punjab, India</span>
            </div>
          </div>

          <a
            href="mailto:Manpreetsingh53535@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-primary text-primary font-mono rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-box hover:glow-box-strong"
          >
            <span>Say Hello</span>
            <Send size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
