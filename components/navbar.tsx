"use client";

import { useState, useEffect } from 'react';
import { Moon, Sun, Search, Menu } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="max-w-5xl mx-auto relative mt-3">
        <div className="flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 transition-opacity hover:opacity-80"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/30 rounded-full blur" />
              <div className="relative h-8 w-8 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
                <span className="font-bold text-background">AI</span>
              </div>
            </div>
            <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              AIToolbox
            </span>
          </Link>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {mounted && (
              <>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-9 w-9 rounded-full hover:bg-white/10"
                >
                  <Search className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-white/10"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  {theme === "light" ? (
                    <Moon className="h-4 w-4" />
                  ) : (
                    <Sun className="h-4 w-4" />
                  )}
                </Button>
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4 h-9"
                >
                  Submit Tool
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-9 w-9 rounded-full hover:bg-white/10 md:hidden"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}