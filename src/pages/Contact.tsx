
import { motion } from "framer-motion";
import { AtSign, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Contact Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -z-10 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] bg-gradient-radial from-accent/20 via-accent/5 to-transparent blur-3xl" />
        
        <div className="layout-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Have a project in mind? Let's build something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16">
        <div className="layout-container">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Send Me a Message
              </h2>
              
              <ContactForm />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Contact Information
              </h2>
              
              <div className="glass p-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <a href="mailto:lucianamitchell19@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        lucianamitchell19@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">LinkedIn</h3>
                      <a 
                        href="https://www.linkedin.com/in/mitchelle-ashimosi/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Mitchelle Ashimosi
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">GitHub</h3>
                      <a 
                        href="https://github.com/rxymitchy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        rxymitchy
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-3">Let's Connect</h3>
                <p className="text-muted-foreground">
                  Whether you have a specific project in mind, want to discuss a potential collaboration, or just have questions about my services, I'm here to help. Feel free to reach out, and I'll get back to you as soon as possible.
                </p>
                <p className="text-muted-foreground">
                  Looking forward to working with you!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
