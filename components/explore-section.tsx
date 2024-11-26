"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Sparkles, ArrowRight, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ToolCard } from "@/components/tool-card";
import { Pagination } from "@/components/pagination";
import { allTools, categories, pricingOptions } from "@/lib/data";

interface ExploreSectionProps {
  showAllTools?: boolean;
}

export function ExploreSection({ showAllTools = false }: ExploreSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPricing, setSelectedPricing] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const itemsPerPage = 9;

  const filteredTools = allTools.filter((tool) => {
    const matchesCategory = selectedCategory === "all" || 
      tool.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
    const matchesPricing = selectedPricing === "all" ||
      tool.pricing.toLowerCase() === selectedPricing.toLowerCase();
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPricing && matchesSearch;
  });

  const totalPages = Math.ceil(filteredTools.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedTools = showAllTools 
    ? filteredTools.slice(startIndex, startIndex + itemsPerPage)
    : filteredTools.slice(0, 6);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setCurrentPage(1);
  };

  const handlePricingChange = (value: string) => {
    setSelectedPricing(value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl blur opacity-75" />
              <div className="relative bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg p-2">
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary/50 to-primary/30 bg-clip-text text-transparent">
                Explore
              </span>{" "}
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                AI Tools
              </span>
            </h2>
          </div>

          {showAllTools && (
            <div className="max-w-4xl mx-auto mt-8">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search Bar */}
                <div className="relative flex-1 group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="relative flex items-center bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg">
                    <Search className="h-4 w-4 text-muted-foreground ml-4" />
                    <Input
                      placeholder="Search AI tools..."
                      className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent h-12"
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                  </div>
                </div>

                {/* Category Dropdown */}
                <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                  <SelectTrigger className="w-[180px] h-12 bg-background/80 backdrop-blur-sm border-border/50 rounded-lg">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent className="bg-background/95 backdrop-blur-sm border-border/50">
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem 
                        key={category} 
                        value={category.toLowerCase().replace(/\s+/g, '-')}
                      >
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Filter Button */}
                <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      className="h-12 px-4 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                    >
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      Filters
                      {selectedPricing !== "all" && (
                        <Badge variant="secondary" className="ml-2 bg-primary/20 text-primary">
                          1
                        </Badge>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="w-[300px] sm:w-[540px]">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="py-6">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-sm font-medium mb-4">Pricing</h3>
                          <div className="grid grid-cols-2 gap-2">
                            {pricingOptions.map((price) => (
                              <Button
                                key={price}
                                variant={selectedPricing === price.toLowerCase() ? "default" : "outline"}
                                className="justify-start"
                                onClick={() => handlePricingChange(price.toLowerCase())}
                              >
                                {price}
                              </Button>
                            ))}
                          </div>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                          <Button
                            variant="ghost"
                            onClick={() => {
                              setSelectedPricing("all");
                              setIsFilterOpen(false);
                            }}
                          >
                            Reset filters
                          </Button>
                          <Button
                            onClick={() => setIsFilterOpen(false)}
                          >
                            Show results
                          </Button>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          )}
        </motion.div>

        {/* Tools Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {displayedTools.map((tool, index) => (
            <ToolCard key={tool.name} {...tool} index={index} />
          ))}
        </motion.div>

        {/* Empty State */}
        {displayedTools.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-muted-foreground">No tools found matching your criteria.</p>
          </motion.div>
        )}

        {/* Pagination */}
        {showAllTools && filteredTools.length > itemsPerPage && (
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </motion.div>
        )}

        {/* View All Tools Button */}
        {!showAllTools && (
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              size="lg"
              className="h-11 px-6 text-base bg-primary text-primary-foreground hover:bg-primary/90 group transition-all duration-300"
              asChild
            >
              <Link href="/tools">
                View All Tools
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}