import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

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

      {/* Contact Content Section */}
      <section className="py-12 md:py-20">
        <div className="layout-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left column - Interactive Projects Display */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7 }}
                className="relative h-[350px] rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 border border-border/50 rounded-xl backdrop-blur-sm">
                  {/* Web Application */}
                  <motion.div
                    className="absolute w-[200px] h-[140px] rounded-lg overflow-hidden shadow-lg border border-border bg-card"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotateY: [-2, 2, -2],
                      x: [-5, 5, -5],
                      y: [-3, 3, -3]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                    style={{
                      left: '50%',
                      top: '40%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <img 
                      src="/lovable-uploads/8dcadd45-8ca3-4253-af64-74722fd81d86.png" 
                      alt="Web Application" 
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                  
                  {/* Analytics Dashboard */}
                  <motion.div
                    className="absolute w-[100px] h-[70px] rounded-lg border border-border/50 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotateY: [3, -3, 3],
                      x: [8, -8, 8],
                      y: [5, -5, 5]
                    }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: 1
                    }}
                    style={{
                      right: '30px',
                      top: '60px'
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-4 h-4 rounded bg-blue-400/60 mx-auto mb-1" />
                        <div className="text-xs text-blue-200 font-medium">Analytics</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Mobile App */}
                  <motion.div
                    className="absolute w-[70px] h-[90px] rounded-lg border border-border/50 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm"
                    animate={{ 
                      scale: [1, 1.08, 1],
                      rotateY: [-4, 4, -4],
                      x: [-6, 6, -6],
                      y: [7, -7, 7]
                    }}
                    transition={{ 
                      duration: 7,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: 2
                    }}
                    style={{
                      left: '40px',
                      bottom: '80px'
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-3 h-3 rounded bg-purple-400/60 mx-auto mb-1" />
                        <div className="text-xs text-purple-200 font-medium">Mobile</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Call to action */}
                  <motion.div 
                    className="absolute bottom-6 left-0 right-0 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <p className="text-lg font-medium text-foreground/90 px-4">
                      Ready to bring your ideas to life?
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right column - Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="bg-card/50 backdrop-blur-sm border border-border p-8 rounded-xl"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Contact Information
                </h2>
                
                <motion.div 
                  className="space-y-6"
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
                        Mitchell Ashimosi
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
    </div>
  );
};

export default Contact;
