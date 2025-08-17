
import { useState } from "react";
import { motion } from "framer-motion";
import { projects, skills } from "@/utils/data";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Cpu, Database, FileSpreadsheet, Palette, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SkillCard from "@/components/SkillCard";

const Works = () => {
  const [filter, setFilter] = useState("all");

  // Filter projects by tag
  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.tags.some(tag => 
        tag.toLowerCase().includes(filter.toLowerCase())
      ));

  const projectFilters = [
    { id: "all", label: "All Projects" },
    { id: "graphic design", label: "Graphic Design", icon: <Palette size={18} className="mr-1" /> },
    { id: "javascript", label: "JavaScript", icon: <Code size={18} className="mr-1" /> },
    { id: "python", label: "Python" },
    { id: "react", label: "React" },
    { id: "wordpress", label: "WordPress" },
    { id: "data analysis", label: "Data Analysis", icon: <FileSpreadsheet size={18} className="mr-1" /> },
  ];

  // Map skill categories to icons
  const skillIcons = {
    "Frontend": <Code size={20} />,
    "Backend": <Database size={20} />,
    "CMS & E-commerce": <Zap size={20} />,
    "AI & ML": <Cpu size={20} />,
    "Other": <Cpu size={20} />,
  };

  return (
    <div>
      {/* Works Hero Section */}
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
              Works & Skills
            </h1>
            <p className="text-xl text-muted-foreground">
              A curated showcase of my projects and technical expertise across
              various platforms and technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="layout-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Featured Projects
            </h2>

            <div className="flex justify-center mb-8 overflow-x-auto pb-4">
              <div className="flex flex-wrap justify-center gap-2">
                {projectFilters.map((item) => (
                  <Badge
                    key={item.id}
                    variant={filter === item.id ? "default" : "outline"}
                    className={`cursor-pointer px-4 py-2 text-sm transition-all duration-300 flex items-center ${
                      item.id === "javascript" ? "ring-2 ring-yellow-500/30" : ""
                    }`}
                    onClick={() => setFilter(item.id)}
                  >
                    {item.icon}
                    {item.label}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
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
                  delay={index * 100}
                />
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <Palette className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">No projects found</h3>
              <p className="text-muted-foreground">
                No projects match the selected filter. Try another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
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
              Technical Skills
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and
              proficiencies.
            </p>
          </motion.div>

          <Tabs defaultValue="Frontend" className="w-full">
            <TabsList className="w-full flex justify-center mb-8 overflow-x-auto">
              {skills.map((category) => (
                <TabsTrigger
                  key={category.category}
                  value={category.category}
                  className="px-6"
                >
                  <span className="flex items-center gap-2">
                    {skillIcons[category.category as keyof typeof skillIcons]}
                    {category.category}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {skills.map((category) => (
              <TabsContent
                key={category.category}
                value={category.category}
                className="mt-0"
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      title={skill.name}
                      level={skill.level}
                      icon={<div className={`w-4 h-4 rounded-full ${skill.color}`} />}
                      color={skill.color}
                      delay={index * 100}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Development Process Section */}
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
              My Development Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach to bringing your digital vision to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your goals, requirements, and target audience through in-depth discussions.",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Creating a detailed roadmap with milestones, technologies, and design concepts.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Building your solution with clean code, regular updates, and collaborative refinement.",
              },
              {
                step: "04",
                title: "Launch & Support",
                description:
                  "Deploying your project and providing ongoing maintenance and enhancements as needed.",
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-lg relative"
              >
                <div className="text-6xl font-bold text-primary/10 absolute top-6 right-6">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
