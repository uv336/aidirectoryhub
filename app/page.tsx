"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, ArrowUpRight, Sparkles, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { ToolCard } from "@/components/tool-card";
import { SectionHeader } from "@/components/section-header";
import { containerVariants, itemVariants, searchBarVariants } from "@/components/animations";
import { popularTools, featuredTools } from "@/lib/data";
import { ExploreSection } from "@/components/explore-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/50" />
        <div className="absolute inset-0 bg-grid-pattern opacity-100" />
        <div className="absolute h-full w-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        
        <div className="relative w-full">
          <motion.div 
            className="max-w-5xl mx-auto px-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-col items-center justify-center text-center space-y-8">
              <motion.div 
                className="space-y-5"
                variants={itemVariants}
              >
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                  <motion.span 
                    className="inline-block bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent"
                    variants={itemVariants}
                  >
                    Unleash the Power of
                  </motion.span>
                  <motion.span 
                    className="block mt-2 relative"
                    variants={itemVariants}
                  >
                    <span className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-2xl opacity-50" />
                    <span className="relative bg-gradient-to-r from-primary via-yellow-500 to-orange-500 text-transparent bg-clip-text">
                      AI Innovation
                    </span>
                  </motion.span>
                </h1>
                
                <motion.p 
                  className="text-2xl text-muted-foreground max-w-xl mx-auto"
                  variants={itemVariants}
                >
                  Explore our curated collection of premium AI tools.
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="w-full max-w-3xl"
                variants={searchBarVariants}
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl blur opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-center bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg shadow-2xl transition-all duration-300">
                    <div className="flex items-center justify-center pl-4">
                      <Search className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <Input
                      placeholder="Search AI tools by name, category, or use case..."
                      className="h-12 px-4 text-base bg-transparent border-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/70"
                    />
                    <div className="hidden sm:flex items-center gap-2 pr-4">
                      <kbd className="hidden sm:inline-flex h-6 select-none items-center gap-1 rounded border border-border/40 bg-background px-2 text-[10px] font-medium text-muted-foreground opacity-100">
                        <span className="text-xs">⌘</span>K
                      </kbd>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-3"
                variants={itemVariants}
              >
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto h-11 px-6 text-base bg-primary text-primary-foreground hover:bg-primary/90 group transition-all duration-300"
                >
                  Explore Tools
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto h-11 px-6 text-base border-primary/20 hover:bg-primary/10 transition-all duration-300"
                >
                  Submit Tool
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Tools Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <motion.div 
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            icon={Zap}
            title="Popular Tools"
            gradient="from-primary/50 to-primary/30"
            description="Discover the most loved AI tools by our community"
            actionLabel="View All Tools"
            iconColor="text-primary"
            hoverColor="bg-primary/10"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTools.map((tool, index) => (
              <ToolCard key={tool.name} {...tool} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Tools Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <motion.div 
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            icon={Star}
            title="Featured Tools"
            gradient="from-yellow-500/50 to-orange-500/30"
            description="Hand-picked selection of exceptional AI tools"
            actionLabel="View All Featured"
            iconColor="text-yellow-500"
            hoverColor="bg-yellow-500/10"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool, index) => (
              <ToolCard key={tool.name} {...tool} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Explore Tools Section */}
      <ExploreSection />
    </main>
  );
}