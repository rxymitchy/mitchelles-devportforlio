
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

      {/* Project Showcase Section */}
      <section className="py-12 md:py-20 overflow-hidden">
        <div className="layout-container">
          <div className="max-w-5xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-center mb-12"
            >
              My Projects
            </motion.h2>

            {/* Web Applications Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-20"
            >
              <h3 className="text-xl font-semibold text-center mb-8">Web Applications</h3>
              <div className="h-[360px] relative perspective-1000 mb-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 border border-white/10 rounded-xl" />
                  
                  {/* Web Project 1 */}
                  <motion.div
                    className="absolute w-[280px] h-[200px] bg-gradient-to-br from-blue-600/90 to-violet-600/90 rounded-lg overflow-hidden shadow-xl border border-white/20"
                    animate={{ 
                      x: [0, -40, 0], 
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
                        Species Web App
                      </div>
                    </div>
                  </motion.div>

                  {/* Web Project 2 */}
                  <motion.div
                    className="absolute w-[260px] h-[180px] bg-gradient-to-br from-purple-600/90 to-pink-600/90 rounded-lg overflow-hidden shadow-xl border border-white/20"
                    animate={{ 
                      x: [0, 60, 0], 
                      y: [0, -20, 0],
                      rotateX: [0, -5, 0],
                      rotateY: [0, 15, 0],
                      z: [0, 40, 0]
                    }}
                    transition={{ 
                      duration: 12,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 1
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
                        <img src="/lovable-uploads/4bb40c0c-eaa2-4f0d-ba10-f11d3e69fdab.png" alt="Web Portfolio" className="max-w-full max-h-full object-contain" />
                      </div>
                      <div className="mt-2 text-center text-white font-medium text-sm">
                        Portfolio Website
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Analytics Dashboards Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-20"
            >
              <h3 className="text-xl font-semibold text-center mb-8">Analytics Dashboards</h3>
              <div className="h-[360px] relative perspective-1000 mb-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 border border-white/10 rounded-xl" />
                  
                  {/* Analytics Dashboard 1 */}
                  <motion.div
                    className="absolute w-[320px] h-[200px] bg-gradient-to-br from-indigo-600/90 to-purple-600/90 rounded-lg overflow-hidden shadow-xl border border-white/20"
                    animate={{ 
                      x: [0, 50, 0], 
                      y: [0, -30, 0],
                      rotateX: [0, -8, 0],
                      rotateY: [0, 12, 0],
                      z: [0, 30, 0]
                    }}
                    transition={{ 
                      duration: 14,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    style={{ translateZ: "30px" }}
                  >
                    <div className="absolute inset-0 p-4 flex flex-col">
                      <div className="flex space-x-1 mb-2">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <div className="w-full h-full bg-black/20 rounded flex flex-col p-2">
                          <div className="w-full h-8 bg-white/10 rounded mb-2"></div>
                          <div className="flex gap-2 flex-1">
                            <div className="w-1/3 bg-white/10 rounded"></div>
                            <div className="w-2/3 bg-blue-500/30 rounded flex items-center justify-center">
                              <div className="w-4/5 h-3/5 border-b border-white/40 relative">
                                <div className="absolute bottom-0 left-0 w-1 h-4/5 bg-green-400/80"></div>
                                <div className="absolute bottom-0 left-[20%] w-1 h-2/5 bg-green-400/80"></div>
                                <div className="absolute bottom-0 left-[40%] w-1 h-3/5 bg-green-400/80"></div>
                                <div className="absolute bottom-0 left-[60%] w-1 h-1/5 bg-green-400/80"></div>
                                <div className="absolute bottom-0 left-[80%] w-1 h-4/5 bg-green-400/80"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 text-center text-white font-medium text-sm">
                        Performance Analytics
                      </div>
                    </div>
                  </motion.div>

                  {/* Analytics Dashboard 2 */}
                  <motion.div
                    className="absolute w-[280px] h-[180px] bg-gradient-to-br from-cyan-600/90 to-blue-600/90 rounded-lg overflow-hidden shadow-xl border border-white/20"
                    animate={{ 
                      x: [0, -60, 0], 
                      y: [0, 20, 0],
                      rotateX: [0, 10, 0],
                      rotateY: [0, -12, 0],
                      z: [0, 20, 0]
                    }}
                    transition={{ 
                      duration: 12,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 0.5
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
                        <div className="w-full h-full bg-black/20 rounded flex flex-col p-2">
                          <div className="w-full h-6 bg-white/10 rounded mb-2"></div>
                          <div className="flex-1 bg-blue-500/20 rounded flex items-center justify-center">
                            <div className="w-4/5 h-4/5 flex items-end justify-around">
                              <div className="w-4 h-[30%] bg-purple-400/80 rounded-t"></div>
                              <div className="w-4 h-[70%] bg-purple-400/80 rounded-t"></div>
                              <div className="w-4 h-[40%] bg-purple-400/80 rounded-t"></div>
                              <div className="w-4 h-[90%] bg-purple-400/80 rounded-t"></div>
                              <div className="w-4 h-[60%] bg-purple-400/80 rounded-t"></div>
                              <div className="w-4 h-[45%] bg-purple-400/80 rounded-t"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 text-center text-white font-medium text-sm">
                        Sales Dashboard
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Mobile Apps Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold text-center mb-8">Mobile Applications</h3>
              <div className="h-[360px] relative perspective-1000">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 border border-white/10 rounded-xl" />
                  
                  {/* Mobile App 1 */}
                  <motion.div
                    className="absolute w-[140px] h-[280px] bg-gradient-to-br from-emerald-600/90 to-blue-600/90 rounded-3xl overflow-hidden shadow-xl border border-white/20"
                    animate={{ 
                      x: [0, -80, 0], 
                      y: [0, -20, 0],
                      rotateX: [0, 8, 0],
                      rotateY: [0, -5, 0],
                      z: [0, 60, 0]
                    }}
                    transition={{ 
                      duration: 16,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    style={{ translateZ: "60px" }}
                  >
                    <div className="absolute inset-0 p-2 flex flex-col">
                      <div className="mx-auto w-16 h-2 bg-gray-300/50 rounded-full mb-2"></div>
                      <div className="flex-1 flex items-center justify-center">
                        <div className="w-full h-full bg-black/30 rounded-2xl p-2 flex flex-col">
                          <div className="w-full h-6 bg-white/10 rounded mb-2"></div>
                          <div className="flex-1 flex flex-col gap-2">
                            <div className="h-12 bg-white/10 rounded"></div>
                            <div className="h-12 bg-white/10 rounded"></div>
                            <div className="h-12 bg-white/10 rounded"></div>
                            <div className="h-12 bg-white/10 rounded"></div>
                          </div>
                          <div className="h-10 mt-2 bg-blue-400/30 rounded flex items-center justify-center">
                            <div className="w-1/2 h-6 bg-white/20 rounded"></div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 text-center text-white font-medium text-xs">
                        Fitness App
                      </div>
                    </div>
                  </motion.div>

                  {/* Mobile App 2 */}
                  <motion.div
                    className="absolute w-[140px] h-[280px] bg-gradient-to-br from-rose-600/90 to-orange-600/90 rounded-3xl overflow-hidden shadow-xl border border-white/20"
                    animate={{ 
                      x: [0, 90, 0], 
                      y: [0, 30, 0],
                      rotateX: [0, 5, 0],
                      rotateY: [0, 10, 0],
                      z: [0, 40, 0]
                    }}
                    transition={{ 
                      duration: 14,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 1
                    }}
                    style={{ translateZ: "40px" }}
                  >
                    <div className="absolute inset-0 p-2 flex flex-col">
                      <div className="mx-auto w-16 h-2 bg-gray-300/50 rounded-full mb-2"></div>
                      <div className="flex-1 flex items-center justify-center">
                        <div className="w-full h-full bg-black/30 rounded-2xl p-2 flex flex-col">
                          <div className="w-full h-8 bg-white/10 rounded-xl mb-3 flex items-center justify-center">
                            <div className="w-3/5 h-3 bg-white/30 rounded-full"></div>
                          </div>
                          <div className="w-16 h-16 mx-auto bg-orange-300/30 rounded-full mb-3 flex items-center justify-center">
                            <div className="w-12 h-12 bg-orange-400/40 rounded-full"></div>
                          </div>
                          <div className="flex-1 flex flex-col gap-2">
                            <div className="h-6 bg-white/10 rounded-full w-4/5 mx-auto"></div>
                            <div className="h-6 bg-white/10 rounded-full w-3/5 mx-auto"></div>
                            <div className="h-10 bg-orange-400/30 rounded-xl mt-3 flex items-center justify-center">
                              <div className="w-1/2 h-5 bg-white/20 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 text-center text-white font-medium text-xs">
                        Food Delivery
                      </div>
                    </div>
                  </motion.div>

                  {/* Mobile App 3 */}
                  <motion.div
                    className="absolute w-[130px] h-[260px] bg-gradient-to-br from-violet-600/90 to-purple-600/90 rounded-3xl overflow-hidden shadow-xl border border-white/20"
                    animate={{ 
                      x: [0, 0, 0], 
                      y: [0, -60, 0],
                      rotateX: [0, 3, 0],
                      rotateY: [0, 0, 0],
                      z: [0, 80, 0]
                    }}
                    transition={{ 
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 0.5
                    }}
                    style={{ translateZ: "80px" }}
                  >
                    <div className="absolute inset-0 p-2 flex flex-col">
                      <div className="mx-auto w-14 h-1.5 bg-gray-300/50 rounded-full mb-2"></div>
                      <div className="flex-1 flex items-center justify-center">
                        <div className="w-full h-full bg-black/30 rounded-2xl p-2 flex flex-col">
                          <div className="w-full h-6 bg-white/10 rounded-xl mb-2 flex items-center">
                            <div className="w-5 h-5 ml-1 bg-white/20 rounded-full"></div>
                            <div className="w-3/5 h-3 mx-auto bg-white/30 rounded-full"></div>
                          </div>
                          <div className="flex-1 grid grid-cols-2 gap-2">
                            <div className="bg-purple-300/20 rounded-lg flex items-center justify-center">
                              <div className="w-8 h-8 bg-purple-400/30 rounded-full"></div>
                            </div>
                            <div className="bg-purple-300/20 rounded-lg flex items-center justify-center">
                              <div className="w-8 h-8 bg-purple-400/30 rounded-full"></div>
                            </div>
                            <div className="bg-purple-300/20 rounded-lg flex items-center justify-center">
                              <div className="w-8 h-8 bg-purple-400/30 rounded-full"></div>
                            </div>
                            <div className="bg-purple-300/20 rounded-lg flex items-center justify-center">
                              <div className="w-8 h-8 bg-purple-400/30 rounded-full"></div>
                            </div>
                          </div>
                          <div className="h-10 mt-2 flex items-center justify-around">
                            <div className="w-6 h-6 bg-white/10 rounded-full"></div>
                            <div className="w-6 h-6 bg-white/10 rounded-full"></div>
                            <div className="w-6 h-6 bg-white/10 rounded-full"></div>
                            <div className="w-6 h-6 bg-purple-400/30 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 text-center text-white font-medium text-xs">
                        Finance App
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 md:py-20">
        <div className="layout-container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Contact Info Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="glass p-8 rounded-xl"
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

              {/* Let's Connect Message */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="order-first md:order-last"
              >
                <div className="relative h-[340px] rounded-2xl shadow-lg overflow-hidden perspective-1000">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 border border-white/10 rounded-xl" />
                    
                    {/* Ready to bring your ideas to life? text */}
                    <motion.div 
                      className="absolute bottom-8 left-0 right-0 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.8 }}
                    >
                      <p className="text-2xl font-semibold text-white/90 drop-shadow-lg px-4">
                        Ready to bring your ideas to life?
                      </p>
                      <p className="text-lg mt-4 text-white/80 drop-shadow-lg px-4 max-w-sm mx-auto">
                        Let's collaborate and create something amazing together
                      </p>
                    </motion.div>
                  </div>
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
