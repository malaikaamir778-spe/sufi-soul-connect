import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Qawwali", path: "/qawwali" },
    { name: "History", path: "/history" },
    { name: "Reviews", path: "/reviews" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif text-lg md:text-xl font-bold">ص</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-lg md:text-xl font-bold text-foreground">Sufi Qawwali</h1>
              <p className="text-xs text-muted-foreground">Divine Music Journey</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-destructive text-destructive hover:bg-destructive hover:text-white"
              asChild
            >
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-4 w-4" />
                Subscribe
              </a>
            </Button>
            <Button asChild size="sm" className="gap-2">
              <Link to="/auth">
                <User className="h-4 w-4" />
                Login
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-serif text-lg font-bold">ص</span>
                    </div>
                    <span className="font-serif text-lg font-bold">Sufi Qawwali</span>
                  </div>
                </div>

                <nav className="flex flex-col gap-2 flex-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                        isActive(link.path)
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-border">
                  <Button
                    variant="outline"
                    className="w-full gap-2 border-destructive text-destructive hover:bg-destructive hover:text-white"
                    asChild
                  >
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                      <Youtube className="h-4 w-4" />
                      Subscribe on YouTube
                    </a>
                  </Button>
                  <Button asChild className="w-full gap-2">
                    <Link to="/auth" onClick={() => setIsOpen(false)}>
                      <User className="h-4 w-4" />
                      Login
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
