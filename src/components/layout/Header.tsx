import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, User, Youtube, LogOut, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, loading, logout } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Qawwali", path: "/qawwali" },
    { name: "History", path: "/history" },
    { name: "Reviews", path: "/reviews" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = async () => {
    try {
      await logout();
      toast({
        title: "Signed out",
        description: "You have been successfully signed out.",
      });
      navigate("/");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to sign out. Please try again.",
      });
    }
  };

  const getInitials = (name: string | null | undefined) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className={`navbar-sticky sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif text-xl md:text-2xl font-bold">ص</span>
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
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors link-underline ${
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

            {loading ? (
              <Button size="sm" disabled>
                <Loader2 className="h-4 w-4 animate-spin" />
              </Button>
            ) : user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2 px-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.photoURL || undefined} alt={user.displayName || "User"} />
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                        {getInitials(user.displayName || user.email)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden xl:inline-block max-w-[100px] truncate">
                      {user.displayName || user.email?.split("@")[0]}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">{user.displayName || "User"}</p>
                    <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-destructive focus:text-destructive">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild size="sm" className="gap-2">
                <Link to="/auth">
                  <User className="h-4 w-4" />
                  Login
                </Link>
              </Button>
            )}
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

                {/* User info in mobile menu */}
                {user && (
                  <div className="flex items-center gap-3 p-3 mb-4 bg-muted rounded-lg">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={user.photoURL || undefined} alt={user.displayName || "User"} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {getInitials(user.displayName || user.email)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{user.displayName || "User"}</p>
                      <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                    </div>
                  </div>
                )}

                <nav className="flex flex-col gap-2 flex-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-md text-base font-medium transition-colors link-underline ${
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
                  
                  {loading ? (
                    <Button disabled className="w-full">
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </Button>
                  ) : user ? (
                    <Button
                      variant="outline"
                      className="w-full gap-2"
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                    >
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </Button>
                  ) : (
                    <Button asChild className="w-full gap-2">
                      <Link to="/auth" onClick={() => setIsOpen(false)}>
                        <User className="h-4 w-4" />
                        Login
                      </Link>
                    </Button>
                  )}
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
