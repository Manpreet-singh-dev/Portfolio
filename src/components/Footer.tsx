import { Github, Linkedin, Twitter } from "lucide-react";
import { MediumIcon } from "./../ui/MediumIcon";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Manpreet-singh-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/manpreet-singh-045b4b252"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://manpreetsingh53535.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              
            <MediumIcon size={24} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="font-mono text-sm text-muted-foreground">
              Designed & Built by{" "}
              <a href="#home" className="text-primary hover:underline">
                Manpreet Singh
              </a>
            </p>
            <p className="font-mono text-xs text-muted-foreground/60 mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
