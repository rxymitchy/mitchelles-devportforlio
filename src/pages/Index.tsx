
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Palette, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute -z-10 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] bg-gradient-radial from-accent/20 via-accent/5 to-transparent blur-3xl" />
        
        <div className="layout-container grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-gradient">Mitchelle</span> Ashimosi
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Software engineer, AI enthusiast, and web developer specializing in
              building scalable systems and business websites.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/works">
                <Button className="gap-2">
                  View My Work <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="gap-2">
                  Contact Me <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/10 shadow-xl">
              <img 
                src="/lovable-uploads/1558977d-b9fc-4321-af70-d70f7223569f.png" 
                alt="Mitchelle Ashimosi" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-secondary/30">
        <div className="layout-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Custom, lightweight, and future-proof digital solutions for your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Palette className="h-8 w-8 mb-4 text-primary" />,
                title: "Web Development",
                description: "Custom websites, portfolios, and e-commerce solutions using modern technologies.",
              },
              {
                icon: <Database className="h-8 w-8 mb-4 text-primary" />,
                title: "Backend & Systems",
                description: "Scalable backend systems, APIs, and database architectures for your applications.",
              },
              {
                icon: <Sparkles className="h-8 w-8 mb-4 text-primary" />,
                title: "AI Integration",
                description: "Custom AI solutions, chatbots, and predictive models to enhance your business.",
              },
              {
                icon: <Code className="h-8 w-8 mb-4 text-primary" />,
                title: "Full-Stack Development",
                description: "End-to-end application development with MERN stack and other technologies.",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 hover:bg-primary/5 transition-all"
              >
                {service.icon}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vh] bg-gradient-radial from-primary/10 via-accent/5 to-transparent blur-3xl" />
        
        <div className="layout-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Bring Your Ideas to Life?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's collaborate to create something amazing that perfectly matches your vision and goals.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gap-2">
                Get in Touch <ArrowRight size={16} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
