
import { motion } from "framer-motion";
import { AtSign, Github, Linkedin, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Contact Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -z-10 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] bg-gradient-radial from-accent/20 via-accent/5 to-transparent blur-3xl" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="layout-container text-center max-w-3xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            Have a project in mind? Let's build something amazing together.
          </p>
        </motion.div>
      </section>

      {/* Contact Info Section with Actual Website Display */}
      <section className="py-8 md:py-16">
        <div className="layout-container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Actual Website Display with Smooth Animations */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="order-2 md:order-1"
              >
                <div className="relative h-[400px] rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-primary/10 to-accent/5 border border-white/10">
                  {/* Featured Website Display with Browser Frame */}
                  <div className="absolute inset-0 flex flex-col">
                    {/* Browser Top Bar */}
                    <motion.div 
                      className="h-8 bg-background/90 border-b border-white/10 flex items-center px-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="mx-auto bg-background/50 px-4 py-0.5 rounded text-xs text-muted-foreground">
                        portfolio.mitchelle-ashimosi.com
                      </div>
                    </motion.div>
                    
                    {/* Website Content */}
                    <div className="flex-1 overflow-hidden relative">
                      {/* Main Content */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.7 }}
                        className="absolute inset-0"
                      >
                        <img 
                          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                          alt="Portfolio website" 
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Overlay with Content */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex flex-col justify-end p-6">
                          <motion.div 
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                          >
                            <h3 className="text-xl font-bold text-white mb-2">Portfolio Website</h3>
                            <p className="text-white/80 text-sm">Responsive design with modern animations</p>
                            
                            {/* Technologies Used */}
                            <div className="flex gap-2 mt-3">
                              {["React", "TypeScript", "Tailwind"].map((tech, index) => (
                                <motion.span
                                  key={tech}
                                  className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs text-white"
                                  initial={{ opacity: 0, y: 5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Floating Element Animation */}
                      <motion.div
                        className="absolute top-8 right-8 w-16 h-16 bg-accent/20 backdrop-blur-sm rounded-lg border border-white/10"
                        animate={{ 
                          y: [0, -8, 0],
                          rotate: [0, 5, 0],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          duration: 5, 
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                      />
                      
                      <motion.div
                        className="absolute bottom-24 left-8 w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full border border-white/10"
                        animate={{ 
                          y: [0, 8, 0],
                          x: [0, 5, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      />
                    </div>
                  </div>

                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.7 }}
                  >
                    <p className="text-lg font-medium text-white">Ready to bring your vision to life?</p>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Contact Info Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                className="glass p-8 rounded-xl order-1 md:order-2"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <a href="mailto:lucianamitchell19@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        lucianamitchell19@gmail.com
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="h-6 w-6 text-primary" />
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
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Github className="h-6 w-6 text-primary" />
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
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-16 relative">
        <div className="absolute -z-10 top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vh] bg-gradient-radial from-primary/10 via-accent/5 to-transparent blur-3xl" />
        
        <motion.div 
          className="layout-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Send Me a Message</h2>
            <p className="text-muted-foreground">I'll get back to you as soon as possible</p>
          </div>
          
          <ContactForm />
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
