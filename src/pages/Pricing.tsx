import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";
import PricingCard from "@/components/PricingCard";
import { pricingPackages } from "@/utils/data";

const Pricing = () => {
  const portfolioPackages = [
    {
      title: "Basic Package",
      price: "Ksh 10,000",
      description: "WordPress/Wix (For simple portfolios)",
      features: [
        { text: "Responsive Design", included: true },
        { text: "Up to 5 Pages", included: true },
        { text: "Contact Form", included: true },
        { text: "Basic SEO Setup", included: true },
        { text: "Social Media Integration", included: true },
        { text: "Custom Domain Setup", included: true },
        { text: "Content Management System", included: true },
        { text: "Premium Hosting", included: false },
        { text: "Advanced SEO & Analytics", included: false },
        { text: "Custom Animations", included: false },
      ],
      ctaText: "Get Started",
      popular: false,
      showPricingDisclaimer: true,
    },
    {
      title: "Premium Package",
      price: "Ksh 20,000",
      description: "Webflow (For high-end, interactive designs)",
      features: [
        { text: "Responsive Design", included: true },
        { text: "Up to 10 Pages", included: true },
        { text: "Advanced Contact Form", included: true },
        { text: "Comprehensive SEO Setup", included: true },
        { text: "Social Media Integration", included: true },
        { text: "Custom Domain Setup", included: true },
        { text: "Content Management System", included: true },
        { text: "Premium Hosting", included: true },
        { text: "Advanced SEO & Analytics", included: true },
        { text: "Custom Animations", included: true },
      ],
      ctaText: "Get Started",
      popular: true,
      showPricingDisclaimer: true,
    },
  ];

  const ecommercePackages = [
    {
      title: "Shopify Store Setup",
      price: "Ksh 20,000",
      description: "Custom Shopify store setup & customization",
      features: [
        { text: "Responsive Design", included: true },
        { text: "Product Catalog (up to 50 products)", included: true },
        { text: "Payment Gateway Integration", included: true },
        { text: "Inventory Management", included: true },
        { text: "Order Tracking System", included: true },
        { text: "SEO Optimization", included: true },
        { text: "Email Marketing Integration", included: true },
        { text: "Custom Theme Integration", included: true },
        { text: "Multi-currency Support", included: false },
        { text: "Advanced Analytics Dashboard", included: false },
      ],
      ctaText: "Start Selling",
      popular: false,
      showPricingDisclaimer: true,
    },
    {
      title: "WooCommerce Development",
      price: "Ksh 20,000",
      description: "WordPress with WooCommerce integration",
      features: [
        { text: "Responsive Design", included: true },
        { text: "Product Catalog Setup", included: true },
        { text: "Payment Gateway Integration", included: true },
        { text: "Inventory Management", included: true },
        { text: "Order Management", included: true },
        { text: "SEO Optimization", included: true },
        { text: "Custom Theme Integration", included: true },
      ],
      ctaText: "Start Selling",
      popular: false,
      showPricingDisclaimer: true,
    },
  ];

  const customPackages = [
    {
      title: "MERN Stack Solutions",
      price: "Custom Pricing",
      description: "Full-stack applications with MongoDB, Express, React, Node.js",
      features: [
        { text: "Custom Frontend & Backend", included: true },
        { text: "User Authentication", included: true },
        { text: "Database Design & Implementation", included: true },
        { text: "API Development", included: true },
        { text: "Admin Dashboard", included: true },
        { text: "Responsive Design", included: true },
        { text: "Deployment Setup", included: true },
      ],
      ctaText: "Request Quote",
      popular: false,
      showPricingDisclaimer: false,
    },
    {
      title: "AI Integration",
      price: "Custom Pricing",
      description: "Chatbots, predictive models, and other AI solutions",
      features: [
        { text: "Custom AI Model Development", included: true },
        { text: "Integration with Existing Systems", included: true },
        { text: "Chatbot Development", included: true },
        { text: "Data Analysis & Reporting", included: true },
        { text: "Predictive Modeling", included: true },
        { text: "Machine Learning Integration", included: true },
        { text: "Ongoing Support & Maintenance", included: true },
      ],
      ctaText: "Let's Discuss",
      popular: true,
      showPricingDisclaimer: false,
    },
    {
      title: "Client-Specified Tech Stack",
      price: "Custom Pricing",
      description: "Custom solutions based on your preferred technologies",
      features: [
        { text: "Technology Stack of Your Choice", included: true },
        { text: "Custom Design & Development", included: true },
        { text: "Database Architecture", included: true },
        { text: "API Integration", included: true },
        { text: "Third-party Service Integration", included: true },
        { text: "Advanced Security Implementation", included: true },
        { text: "Comprehensive Documentation", included: true },
      ],
      ctaText: "Get in Touch",
      popular: false,
      showPricingDisclaimer: false,
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
                  >
                    <PricingCard 
                      title={pkg.title}
                      price={pkg.price}
                      description={pkg.description}
                      features={pkg.features}
                      ctaText={pkg.ctaText}
                      popular={pkg.popular}
                      delay={index * 100}
                      showPricingDisclaimer={pkg.showPricingDisclaimer}
                    />
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
                  >
                    <PricingCard 
                      title={pkg.title}
                      price={pkg.price}
                      description={pkg.description}
                      features={pkg.features}
                      ctaText={pkg.ctaText}
                      popular={pkg.popular}
                      delay={index * 100}
                      showPricingDisclaimer={pkg.showPricingDisclaimer}
                    />
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
                  >
                    <PricingCard 
                      title={pkg.title}
                      price={pkg.price}
                      description={pkg.description}
                      features={pkg.features}
                      ctaText={pkg.ctaText}
                      popular={pkg.popular}
                      delay={index * 100}
                      showPricingDisclaimer={pkg.showPricingDisclaimer}
                    />
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
