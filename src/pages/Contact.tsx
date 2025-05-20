
import { motion } from "framer-motion";
import { AtSign, Github, Linkedin, Mail, Smartphone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  // Animation variants for smoother transitions
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

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

      {/* Contact Info Section with Project Showcase */}
      <section className="py-12 md:py-20">
        <div className="layout-container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* 3D Project Showcase */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="order-2 md:order-1"
              >
                <div className="relative h-[460px] rounded-2xl shadow-lg overflow-hidden perspective-1000">
                  {/* 3D Floating Projects */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 border border-white/10 rounded-xl" />
                    
                    {/* Web Project */}
                    <motion.div
                      className="absolute w-64 h-48 bg-gradient-to-br from-blue-600/90 to-violet-600/90 rounded-lg overflow-hidden shadow-xl border border-white/20"
                      animate={{ 
                        x: [0, -20, 0], 
                        y: [0, 15, 0],
                        rotateX: [0, 5, 0],
                        rotateY: [0, -10, 0],
                        z: [0, 20, 0]
                      }}
                      transition={{ 
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse" 
                      }}
                      style={{ translateZ: "20px" }}
                    >
                      <div className="absolute inset-0 p-4 flex flex-col">
                        <div className="flex space-x-1 mb-2">
                          <div className="w-2 h-2 rounded-full bg-red-400"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                          <img src="/lovable-uploads/4bb40c0c-eaa2-4f0d-ba10-f11d3e69fdab.png" alt="Web Application" className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="mt-2 text-center text-white font-medium text-sm">
                          Web Application
                        </div>
                      </div>
                    </motion.div>

                    {/* Dashboard Project */}
                    <motion.div
                      className="absolute w-60 h-44 bg-gradient-to-br from-indigo-600/90 to-purple-600/90 rounded-lg overflow-hidden shadow-xl border border-white/20"
                      animate={{ 
                        x: [0, 30, 0], 
                        y: [0, -20, 0],
                        rotateX: [0, -5, 0],
                        rotateY: [0, 15, 0],
                        z: [0, 40, 0]
                      }}
                      transition={{ 
                        duration: 12,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 0.5
                      }}
                      style={{ translateZ: "40px" }}
                    >
                      <div className="absolute inset-0 p-4 flex flex-col">
                        <div className="flex space-x-1 mb-2">
                          <div className="w-2 h-2 rounded-full bg-red-400"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                          <img src="/lovable-uploads/4bb40c0c-eaa2-4f0d-ba10-f11d3e69fdab.png" alt="Analytics Dashboard" className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="mt-2 text-center text-white font-medium text-sm">
                          Analytics Dashboard
                        </div>
                      </div>
                    </motion.div>

                    {/* Mobile App Project */}
                    <motion.div
                      className="absolute w-36 h-56 bg-gradient-to-br from-emerald-600/90 to-blue-600/90 rounded-lg overflow-hidden shadow-xl border border-white/20"
                      animate={{ 
                        x: [0, -25, 0], 
                        y: [0, -35, 0],
                        rotateX: [0, 10, 0],
                        rotateY: [0, -5, 0],
                        z: [0, 60, 0]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 1
                      }}
                      style={{ translateZ: "60px" }}
                    >
                      <div className="absolute inset-0 p-2 flex flex-col">
                        <div className="mx-auto w-10 h-1 bg-gray-300/50 rounded-full mb-2"></div>
                        <div className="flex-1 flex items-center justify-center">
                          <img src="/lovable-uploads/4bb40c0c-eaa2-4f0d-ba10-f11d3e69fdab.png" alt="Mobile App" className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="mt-2 text-center text-white font-medium text-xs">
                          Mobile App
                        </div>
                      </div>
                    </motion.div>

                    {/* "Ready to bring your ideas to life?" text */}
                    <motion.div 
                      className="absolute bottom-8 left-0 right-0 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.8 }}
                    >
                      <p className="text-lg font-medium text-white/90 drop-shadow-lg px-4">
                        Ready to bring your ideas to life?
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Info Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="glass p-8 rounded-xl order-1 md:order-2"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Contact Information
                </h2>
                
                <motion.div 
                  className="space-y-6"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="flex items-start gap-4"
                    variants={fadeInUp}
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
                    variants={fadeInUp}
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
                    variants={fadeInUp}
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
                </motion.div>
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
