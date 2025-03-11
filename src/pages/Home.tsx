
import { motion } from "framer-motion";
import { ArrowRight, Code, ShoppingBag, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { projects, testimonials } from "@/utils/data";
import ProjectCard from "@/components/ProjectCard";

const Home = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="layout-container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Building <span className="text-gradient">powerful systems</span>{" "}
                and stunning websites
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Full-stack developer specializing in MERN stack, WordPress, and
                custom solutions that drive results for businesses and
                individuals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild className="gap-2">
                  <Link to="/works">
                    View My Work
                    <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Contact Me</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute -z-10 top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-background via-background to-background opacity-80" />
        <div className="absolute -z-20 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] bg-gradient-radial from-accent/20 via-accent/5 to-transparent blur-3xl" />
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="layout-container">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Expert Solutions for Every Need
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I offer a comprehensive range of services to bring your digital
                vision to life.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-lg hover:shadow-subtle-hover transition-all duration-300"
            >
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Code className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Custom Development
              </h3>
              <p className="text-muted-foreground mb-4">
                Bespoke web applications and systems built with MERN stack and
                other modern frameworks.
              </p>
              <Link
                to="/pricing"
                className="text-primary font-medium inline-flex items-center hover:underline"
              >
                Learn more <ArrowRight size={14} className="ml-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-lg hover:shadow-subtle-hover transition-all duration-300"
            >
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <ShoppingBag className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                E-commerce Solutions
              </h3>
              <p className="text-muted-foreground mb-4">
                Shopify and custom e-commerce platforms designed for conversion
                and seamless customer experience.
              </p>
              <Link
                to="/pricing"
                className="text-primary font-medium inline-flex items-center hover:underline"
              >
                Learn more <ArrowRight size={14} className="ml-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-lg hover:shadow-subtle-hover transition-all duration-300"
            >
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Zap className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                WordPress Expertise
              </h3>
              <p className="text-muted-foreground mb-4">
                Professional WordPress websites with custom themes and
                functionality for businesses of all sizes.
              </p>
              <Link
                to="/pricing"
                className="text-primary font-medium inline-flex items-center hover:underline"
              >
                Learn more <ArrowRight size={14} className="ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-secondary/30">
        <div className="layout-container">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A showcase of my recent work across various technologies and
                industries.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  github={project.github}
                  live={project.live}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/works">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="layout-container">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Client Testimonials
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                What clients say about working with me.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-lg"
              >
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 mr-1">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-gradient-radial from-accent/20 via-accent/5 to-transparent blur-3xl" />
        
        <div className="layout-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Bring Your Project to Life?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's collaborate to create something exceptional that meets your
              specific needs and goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
