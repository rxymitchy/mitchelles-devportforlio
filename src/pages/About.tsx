
import { motion } from "framer-motion";
import { Award, Code, FileCode, FileText, Globe, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const experiences = [
    {
      period: "2020 - Present",
      role: "Freelance Full-Stack Developer",
      company: "Self-employed",
      description:
        "Designing and developing custom web applications and websites for clients across various industries. Implementing MERN stack solutions, e-commerce platforms, and WordPress websites tailored to client requirements.",
    },
    {
      period: "2018 - 2020",
      role: "Web Developer",
      company: "Tech Solutions Inc.",
      description:
        "Collaborated with a team to build responsive web applications using React and Node.js. Implemented RESTful APIs and integrated third-party services to enhance functionality.",
    },
    {
      period: "2016 - 2018",
      role: "Junior Developer",
      company: "Digital Innovations Ltd.",
      description:
        "Assisted in the development of websites and simple web applications. Gained experience in HTML, CSS, JavaScript, and WordPress development.",
    },
  ];

  const education = [
    {
      period: "2014 - 2018",
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      description:
        "Focused on web development, algorithms, and software engineering principles. Participated in coding competitions and hackathons.",
    },
    {
      period: "2022",
      degree: "MERN Stack Certification",
      institution: "Tech Academy",
      description:
        "Intensive program covering MongoDB, Express.js, React, and Node.js for full-stack application development.",
    },
    {
      period: "2019",
      degree: "Advanced WordPress Development",
      institution: "Online Learning Platform",
      description:
        "Specialized course on custom theme and plugin development, WordPress optimization, and security best practices.",
    },
  ];

  const values = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Quality Code",
      description:
        "I write clean, maintainable code that follows industry best practices and standards.",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "User-Centric Design",
      description:
        "Creating intuitive and accessible user experiences is at the core of my development philosophy.",
    },
    {
      icon: <Server className="h-6 w-6 text-primary" />,
      title: "Scalable Solutions",
      description:
        "I build applications that can grow with your business, considering future needs from the start.",
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Clear Communication",
      description:
        "Regular updates and transparent discussions ensure we're always on the same page throughout the project.",
    },
  ];

  return (
    <div>
      {/* About Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -z-10 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] bg-gradient-radial from-accent/20 via-accent/5 to-transparent blur-3xl" />
        
        <div className="layout-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                About Me
              </h1>
              <div className="text-muted-foreground space-y-4">
                <p>
                  I'm a passionate full-stack developer with expertise in
                  building powerful web applications and websites that solve real
                  problems for businesses and individuals.
                </p>
                <p>
                  With over 6 years of experience in web development, I
                  specialize in MERN stack applications, WordPress solutions, and
                  e-commerce platforms that combine elegant design with powerful
                  functionality.
                </p>
                <p>
                  I believe in creating digital experiences that not only look
                  great but also deliver tangible results for clients. Whether
                  it's increasing conversions, streamlining processes, or
                  creating a memorable brand presence, I focus on outcomes that
                  matter.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/works">View My Work</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544725121-be3f8c33e47f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80"
                  alt="Developer working"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-lg shadow-subtle border border-border">
                <div className="flex items-center gap-4">
                  <Award className="text-primary h-12 w-12" />
                  <div>
                    <p className="text-2xl font-bold">6+ Years</p>
                    <p className="text-muted-foreground">of Experience</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Values Section */}
      <section className="py-16 bg-secondary/30">
        <div className="layout-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide my development process and client
              relationships.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-lg hover:shadow-subtle transition-all duration-300"
              >
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="layout-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Experience
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My journey in the world of web development.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid md:grid-cols-[200px_1fr] gap-6 p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm"
              >
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {exp.period}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-primary font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
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
              Education & Certifications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic background and professional development.
            </p>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid md:grid-cols-[200px_1fr] gap-6 p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm"
              >
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {edu.period}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-primary font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="layout-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-secondary/80 via-secondary to-secondary/80 p-8 md:p-12 rounded-2xl text-center max-w-3xl mx-auto"
          >
            <FileCode className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Looking for a developer who can bring your ideas to life with
              quality code and thoughtful design? I'd love to discuss your
              project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Contact Me</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">View Packages</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
