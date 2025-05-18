
import { motion } from "framer-motion";
import { AtSign, Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Contact Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -z-10 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] bg-gradient-radial from-accent/20 via-accent/5 to-transparent blur-3xl" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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

      {/* Contact Info Section with Multi-Project Animated Display */}
      <section className="py-8 md:py-16">
        <div className="layout-container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Professional Multi-Project Animated Display */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 md:order-1"
              >
                <div className="relative h-[400px] rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-primary/10 to-accent/5 border border-white/10">
                  {/* Project Showcase - Animated Stack of Projects */}
                  <div className="absolute inset-0 p-4">
                    {/* Project 1 - Mobile App */}
                    <motion.div 
                      className="absolute w-[45%] h-[55%] top-[10%] right-[10%] rounded-lg shadow-lg overflow-hidden"
                      initial={{ x: 20, opacity: 0, rotateY: 10, rotateZ: 2 }}
                      animate={{ 
                        x: 0, 
                        opacity: 1,
                        rotateY: [10, 0, 5, 0],
                        rotateZ: [2, 0, 1, 0],
                        y: [-5, 0, -3, 0]
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 0.2
                      }}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                        alt="Mobile app project" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-2">
                        <p className="text-sm font-medium text-white">Mobile App</p>
                      </div>
                    </motion.div>

                    {/* Project 2 - Web Dashboard */}
                    <motion.div 
                      className="absolute w-[60%] h-[60%] top-[25%] left-[5%] rounded-lg shadow-lg overflow-hidden"
                      initial={{ y: 20, opacity: 0, rotateY: -5, rotateZ: -1 }}
                      animate={{ 
                        y: 0, 
                        opacity: 1,
                        rotateY: [-5, 0, -3, 0],
                        rotateZ: [-1, 0, -0.5, 0],
                        x: [0, 5, 0, 3]
                      }}
                      transition={{ 
                        duration: 10, 
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                        alt="Web dashboard project" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-accent/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-2">
                        <p className="text-sm font-medium text-white">Analytics Dashboard</p>
                      </div>
                    </motion.div>

                    {/* Project 3 - Code Editor */}
                    <motion.div 
                      className="absolute w-[50%] h-[40%] top-[5%] left-[15%] rounded-lg shadow-lg overflow-hidden"
                      initial={{ y: -20, opacity: 0, rotateY: 8, rotateZ: 1 }}
                      animate={{ 
                        y: 0, 
                        opacity: 1,
                        rotateY: [8, 0, 4, 0],
                        rotateZ: [1, 0, 0.5, 0],
                        x: [0, -5, 0, -3]
                      }}
                      transition={{ 
                        duration: 9, 
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                        alt="Code editor project" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-2">
                        <p className="text-sm font-medium text-white">Web Application</p>
                      </div>
                    </motion.div>

                    {/* Project Light Reflection Effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"
                      initial={{ opacity: 0, rotate: -10 }}
                      animate={{ 
                        opacity: [0, 0.1, 0.05, 0],
                        rotate: [-10, 0, 5, -5],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                    />
                  </div>

                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.7 }}
                  >
                    <p className="text-lg font-medium text-white">Ready to bring your ideas to life?</p>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Contact Info Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass p-8 rounded-xl order-1 md:order-2"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <a href="mailto:lucianamitchell19@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        lucianamitchell19@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
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
                  </div>
                  
                  <div className="flex items-start gap-4">
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
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
