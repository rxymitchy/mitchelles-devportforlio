
import { motion } from "framer-motion";
import { Award, BookOpen, Briefcase, GraduationCap, Laptop } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* About Hero Section */}
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
              About Me
            </h1>
            <p className="text-xl text-muted-foreground">
              Software engineer, AI enthusiast, and web developer on a mission to build remarkable digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16">
        <div className="layout-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/1558977d-b9fc-4321-af70-d70f7223569f.png" 
                  alt="Mitchelle A." 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Mitchelle A.</h2>
              <p className="text-lg mb-6">
                I'm a passionate software engineer, AI enthusiast, and web developer specializing in building scalable systems, AI-integrated applications, and business websites.
              </p>
              <p className="text-lg mb-6">
                I focus on delivering custom, lightweight, and future-proof digital solutions that align with business and individual needs. Whether you need a portfolio, an e-commerce store, or an AI-enhanced system, I've got you covered.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <Laptop size={20} className="text-primary" />
                  <span>Web Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen size={20} className="text-primary" />
                  <span>AI Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={20} className="text-primary" />
                  <span>E-commerce</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={20} className="text-primary" />
                  <span>Custom Solutions</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 bg-secondary/30">
        <div className="layout-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The path that led me to where I am today
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                {
                  year: "Present",
                  icon: <Laptop className="text-white" />,
                  title: "Software Engineer & AI Enthusiast",
                  description: "Building scalable systems and AI-integrated applications for businesses and individuals.",
                },
                {
                  year: "2025",
                  icon: <Briefcase className="text-white" />,
                  title: "Full-Stack Developer",
                  description: "Working with MERN stack and other technologies to create full-stack applications.",
                },
                {
                  year: "2020",
                  icon: <GraduationCap className="text-white" />,
                  title: "Web Development Journey",
                  description: "Started exploring web development with HTML, CSS, JavaScript, and modern frameworks.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative md:w-1/2 ${
                    index % 2 === 0 ? "md:ml-auto" : ""
                  } pl-10 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-auto md:top-0 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center -ml-4 md:ml-0 md:-translate-x-1/2">
                    {item.icon}
                  </div>

                  <div className="glass p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16">
        <div className="layout-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">My Philosophy</h2>
            <p className="text-xl text-muted-foreground italic">
              "I believe in creating digital solutions that are not only functional and beautiful but also scalable, maintainable, and future-proof. My goal is to build systems that grow with your business and adapt to your evolving needs."
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
