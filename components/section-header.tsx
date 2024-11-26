"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  gradient: string;
  description: string;
  actionLabel: string;
  iconColor: string;
  hoverColor: string;
}

export function SectionHeader({
  icon: Icon,
  title,
  gradient,
  description,
  actionLabel,
  iconColor,
  hoverColor,
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-12">
      <div className="space-y-1">
        <div className="flex items-center gap-3 mb-2">
          <div className="relative">
            <div className={`absolute -inset-1 ${gradient} rounded-xl blur opacity-75`} />
            <div className="relative bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg p-2">
              <div className="relative">
                <Icon className={`h-5 w-5 ${iconColor} animate-pulse`} />
                <motion.div
                  className="absolute -inset-1 bg-primary/20 rounded-lg"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <h2 className="text-3xl font-bold tracking-tight">
              <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                {title.split(' ')[0]}
              </span>{" "}
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {title.split(' ')[1]}
              </span>
            </h2>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
      <Button 
        variant="ghost" 
        className={`hidden sm:flex items-center gap-2 group hover:${hoverColor}`}
      >
        {actionLabel}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Button>
    </div>
  );
}