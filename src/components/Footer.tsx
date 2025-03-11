
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 py-12 backdrop-blur-sm">
      <div className="layout-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link
              to="/"
              className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
            >
              <span className="text-primary">Portfolio</span>
              <span className="text-muted-foreground">.dev</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Building powerful systems and websites using MERN stack and other modern technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/rxymitchy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/works"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Works & Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Pricing & Packages
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-primary mb-4">Live Projects</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://malprimescents.myshopify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  <span>MalPrime Scents</span>
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://infoamulaw.wordpress.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  <span>Info Amulaw</span>
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://puritymureithiadvocates.wordpress.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  <span>Purity Mureithi Advocates</span>
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Portfolio.dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
