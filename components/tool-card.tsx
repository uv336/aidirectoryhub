"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import { toolCardVariants } from "@/components/animations";

interface ToolCardProps {
  name: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  pricing: string;
  index: number;
}

export function ToolCard({ name, description, image, category, rating, pricing, index }: ToolCardProps) {
  return (
    <motion.div
      variants={toolCardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      custom={index}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
      
      <Card className="relative overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="relative flex-shrink-0">
              <div className="h-14 w-14 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-0.5">
                <div className="h-full w-full rounded-[10px] overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-base truncate group-hover:text-primary transition-colors duration-300">
                    {name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge 
                      variant="outline" 
                      className="bg-background/50 text-xs border-primary/20 text-primary/80 px-2 py-0"
                    >
                      {category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                      <span className="text-xs text-muted-foreground">{rating}</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:bg-primary/10 -mt-1"
                >
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground line-clamp-2 mt-2 group-hover:text-muted-foreground/80 transition-colors duration-300">
                {description}
              </p>
              
              <div className="flex items-center justify-between gap-2 mt-4">
                <Badge 
                  variant="outline" 
                  className="bg-secondary/50 text-xs border-primary/20 text-primary"
                >
                  {pricing}
                </Badge>
                <Button 
                  size="sm" 
                  className="h-8 px-4 text-xs gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full transition-all duration-300 group/btn"
                >
                  Visit Tool
                  <ExternalLink className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}