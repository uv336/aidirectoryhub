"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visiblePages = pages.slice(
    Math.max(0, Math.min(currentPage - 2, totalPages - 5)),
    Math.min(totalPages, Math.max(5, currentPage + 2))
  );

  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-primary/10 hover:text-primary"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        <ChevronsLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-primary/10 hover:text-primary"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {visiblePages[0] > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-primary/10 hover:text-primary"
            onClick={() => onPageChange(1)}
          >
            1
          </Button>
          {visiblePages[0] > 2 && <span className="text-muted-foreground">...</span>}
        </>
      )}

      {visiblePages.map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? "default" : "outline"}
          size="icon"
          className={`h-8 w-8 ${
            currentPage === page
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-background/80 backdrop-blur-sm border-border/50 hover:bg-primary/10 hover:text-primary"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      ))}

      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <span className="text-muted-foreground">...</span>
          )}
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-primary/10 hover:text-primary"
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </Button>
        </>
      )}

      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-primary/10 hover:text-primary"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-primary/10 hover:text-primary"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        <ChevronsRight className="h-4 w-4" />
      </Button>
    </div>
  );
}