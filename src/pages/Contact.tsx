
import { motion } from "framer-motion";
import { AtSign, Github, Linkedin, Mail, Smartphone, ChartBar, Monitor } from "lucide-react";
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
              {/* Project Showcase with Smooth Animations */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="order-2 md:order-1"
              >
                <div className="relative h-[460px] rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 border border-white/10">
                  {/* Carousel of Projects */}
                  <motion.div 
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="flex flex-col h-full">
                      {/* Tabs for different project types */}
                      <div className="flex bg-background/80 backdrop-blur-sm border-b border-white/20 px-3 py-2">
                        <motion.div 
                          className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-primary/10 text-sm font-medium"
                          whileHover={{ backgroundColor: "rgba(var(--primary), 0.2)" }}
                        >
                          <Monitor className="h-4 w-4" />
                          <span>Website</span>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-muted-foreground ml-2"
                          whileHover={{ color: "hsl(var(--primary))" }}
                        >
                          <ChartBar className="h-4 w-4" />
                          <span>Dashboard</span>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-muted-foreground ml-2"
                          whileHover={{ color: "hsl(var(--primary))" }}
                        >
                          <Smartphone className="h-4 w-4" />
                          <span>Mobile App</span>
                        </motion.div>
                      </div>
                      
                      {/* Website Preview */}
                      <div className="flex-1 relative overflow-hidden">
                        <motion.div
                          className="absolute inset-0"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          {/* Actual Website Preview */}
                          <div className="relative h-full w-full overflow-hidden">
                            {/* Modern Website Design */}
                            <div className="h-full w-full overflow-y-auto">
                              {/* Hero Section */}
                              <div className="h-[180px] bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                                <motion.div 
                                  className="text-center text-white px-6"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.6, duration: 0.4 }}
                                >
                                  <h2 className="text-2xl font-bold">Modern Web Solutions</h2>
                                  <p className="text-white/80 mt-2">Responsive designs for every device</p>
                                </motion.div>
                              </div>
                              
                              {/* Features Section */}
                              <div className="bg-white dark:bg-gray-900 py-8 px-6">
                                <motion.div
                                  variants={staggerContainer}
                                  initial="hidden"
                                  animate="visible"
                                >
                                  <h3 className="text-lg font-medium mb-4 dark:text-white">Our Services</h3>
                                  
                                  <div className="grid grid-cols-2 gap-4">
                                    {[
                                      { title: "Web Design", icon: "🎨" },
                                      { title: "Development", icon: "💻" },
                                      { title: "E-commerce", icon: "🛒" },
                                      { title: "SEO", icon: "🔍" }
                                    ].map((item, index) => (
                                      <motion.div 
                                        key={item.title}
                                        variants={fadeInUp}
                                        className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg flex items-center gap-3"
                                      >
                                        <div className="w-8 h-8 flex items-center justify-center rounded-md bg-primary/10">
                                          <span className="text-lg">{item.icon}</span>
                                        </div>
                                        <span className="text-sm font-medium dark:text-white">{item.title}</span>
                                      </motion.div>
                                    ))}
                                  </div>
                                </motion.div>
                              </div>
                              
                              {/* Portfolio Preview */}
                              <div className="py-6 px-6 bg-gray-50 dark:bg-gray-800/50">
                                <h3 className="text-lg font-medium mb-4 dark:text-white">Recent Projects</h3>
                                <div className="grid grid-cols-2 gap-3">
                                  {[1, 2, 3, 4].map((item) => (
                                    <motion.div
                                      key={item}
                                      className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg overflow-hidden"
                                      whileHover={{ y: -4, scale: 1.02 }}
                                      transition={{ duration: 0.2 }}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Floating Elements Animation */}
                            <motion.div
                              className="absolute top-16 right-6 w-14 h-14 bg-gradient-to-br from-primary/40 to-accent/20 backdrop-blur-sm rounded-lg border border-white/10"
                              animate={{ 
                                y: [0, -8, 0],
                                rotate: [0, 5, 0],
                              }}
                              transition={{ 
                                duration: 5, 
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                              }}
                            />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-white font-medium">Ready to get started?</p>
                      <motion.div 
                        className="px-3 py-1 rounded-full bg-primary/20 text-xs font-medium text-white backdrop-blur-sm border border-white/10"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.3)" }}
                      >
                        View Projects
                      </motion.div>
                    </div>
                  </motion.div>
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
