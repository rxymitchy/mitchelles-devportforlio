
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Check, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const portfolioPackages = [
    {
      title: "Basic Package",
      price: "Ksh 10,000",
      description: "WordPress/Wix (For simple portfolios)",
      features: [
        "Responsive Design",
        "Up to 5 Pages",
        "Contact Form",
        "Basic SEO Setup",
        "Social Media Integration",
        "Custom Domain Setup",
        "Content Management System",
      ],
      popular: false,
    },
    {
      title: "Premium Package",
      price: "Ksh 20,000",
      description: "Webflow (For high-end, interactive designs)",
      features: [
        "Responsive Design",
        "Up to 10 Pages",
        "Advanced Contact Form",
        "Comprehensive SEO Setup",
        "Social Media Integration",
        "Custom Domain Setup",
        "Content Management System",
        "Premium Hosting",
        "Advanced SEO & Analytics",
        "Custom Animations",
      ],
      popular: true,
    },
  ];

  const ecommercePackages = [
    {
      title: "Shopify Store Setup",
      price: "Ksh 20,000",
      description: "Custom Shopify store setup & customization",
      features: [
        "Responsive Design",
        "Product Catalog (up to 50 products)",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Tracking System",
        "SEO Optimization",
        "Email Marketing Integration",
      ],
      popular: false,
    },
    {
      title: "WooCommerce Development",
      price: "Ksh 20,000",
      description: "WordPress with WooCommerce integration",
      features: [
        "Responsive Design",
        "Product Catalog Setup",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Management",
        "SEO Optimization",
        "Custom Theme Integration",
      ],
      popular: false,
    },
  ];

  const customPackages = [
    {
      title: "MERN Stack Solutions",
      price: "Custom Pricing",
      description: "Full-stack applications with MongoDB, Express, React, Node.js",
      features: [
        "Custom Frontend & Backend",
        "User Authentication",
        "Database Design & Implementation",
        "API Development",
        "Admin Dashboard",
        "Responsive Design",
        "Deployment Setup",
      ],
      popular: false,
    },
    {
      title: "AI Integration",
      price: "Custom Pricing",
      description: "Chatbots, predictive models, and other AI solutions",
      features: [
        "Custom AI Model Development",
        "Integration with Existing Systems",
        "Chatbot Development",
        "Data Analysis & Reporting",
        "Predictive Modeling",
        "Machine Learning Integration",
        "Ongoing Support & Maintenance",
      ],
      popular: true,
    },
    {
      title: "Client-Specified Tech Stack",
      price: "Pricing Varies with Complexity",
      description: "Custom solutions based on your preferred technologies",
      features: [
        "Technology Stack of Your Choice",
        "Custom Design & Development",
        "Database Architecture",
        "API Integration",
        "Third-party Service Integration",
        "Advanced Security Implementation",
        "Comprehensive Documentation",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Pricing Hero Section */}
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
              Pricing & Packages
            </h1>
            <p className="text-xl text-muted-foreground">
              Transparent pricing options to fit your project needs and budget
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tabs Section */}
      <section className="py-8 md:py-16">
        <div className="layout-container">
          <Tabs defaultValue="portfolio" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-12">
              <TabsTrigger value="portfolio" className="gap-2">
                <User size={16} className="hidden md:inline-block" /> Portfolio
              </TabsTrigger>
              <TabsTrigger value="ecommerce" className="gap-2">
                <ShoppingBag size={16} className="hidden md:inline-block" /> E-commerce
              </TabsTrigger>
              <TabsTrigger value="custom" className="gap-2">
                <Briefcase size={16} className="hidden md:inline-block" /> Custom Dev
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="portfolio" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                {portfolioPackages.map((pkg, index) => (
                  <motion.div
                    key={pkg.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`glass p-8 relative ${
                      pkg.popular ? "border-primary/30 shadow-lg" : ""
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 right-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                        Popular
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                    <div className="text-3xl font-bold mb-2">{pkg.price}</div>
                    <p className="text-muted-foreground mb-6">{pkg.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link to="/contact">
                      <Button className="w-full">Get Started</Button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="ecommerce" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                {ecommercePackages.map((pkg, index) => (
                  <motion.div
                    key={pkg.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`glass p-8 relative ${
                      pkg.popular ? "border-primary/30 shadow-lg" : ""
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 right-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                        Popular
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                    <div className="text-3xl font-bold mb-2">{pkg.price}</div>
                    <p className="text-muted-foreground mb-6">{pkg.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link to="/contact">
                      <Button className="w-full">Get Started</Button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="custom" className="mt-0">
              <div className="grid md:grid-cols-3 gap-8">
                {customPackages.map((pkg, index) => (
                  <motion.div
                    key={pkg.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`glass p-8 relative ${
                      pkg.popular ? "border-primary/30 shadow-lg" : ""
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 right-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                        Popular
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                    <div className="text-3xl font-bold mb-2">{pkg.price}</div>
                    <p className="text-muted-foreground mb-6">{pkg.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link to="/contact">
                      <Button className="w-full">Get Started</Button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Custom Quote Section */}
      <section className="py-16 bg-secondary/30">
        <div className="layout-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Need a Custom Quote?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every project is unique. Contact me for a personalized quote that fits your specific requirements.
            </p>
            <Link to="/contact">
              <Button size="lg">Request a Custom Quote</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
