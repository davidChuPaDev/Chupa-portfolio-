import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#" className="text-xl font-bold text-primary tracking-tight">
            ChuPa
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Button asChild className="bg-primary text-black hover:bg-primary/90 font-semibold" data-testid="button-hire-me">
            <a href="https://wa.me/254797968578" target="_blank" rel="noopener noreferrer">
              Hire Me
            </a>
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-foreground/80 hover:text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          data-testid="button-menu-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-border/40 bg-background px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="w-full bg-primary text-black hover:bg-primary/90 font-semibold" data-testid="button-hire-me-mobile">
            <a href="https://wa.me/254797968578" target="_blank" rel="noopener noreferrer">
              Hire Me
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}