import { Link } from "react-router-dom";
import { Youtube, Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Qawwali", path: "/qawwali" },
    { name: "History", path: "/history" },
    { name: "Reviews", path: "/reviews" },
  ];

  const resources = [
    { name: "Blog", path: "/blog" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact Us", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ];

  const socialLinks = [
    { icon: Youtube, href: "https://youtube.com", label: "YouTube", color: "hover:text-red-500" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook", color: "hover:text-blue-500" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:text-pink-500" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-sky-500" },
  ];

  return (
    <footer className="bg-sufi-maroon text-sufi-cream">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-serif text-xl font-bold">ص</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">Sufi Qawwali</h3>
                <p className="text-sm opacity-80">Divine Music Journey</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-6 leading-relaxed">
              Experience the spiritual transcendence through the mystical sounds of Sufi Qawwali. 
              Join us on a journey of divine love and enlightenment.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center transition-all hover:bg-primary-foreground/20 icon-hover ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 link-underline transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 link-underline transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-sm opacity-90 mb-4">
              Subscribe to receive updates on new qawwalis and spiritual content.
            </p>
            <form className="flex gap-2 mb-6">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="secondary" size="sm" className="shrink-0">
                Subscribe
              </Button>
            </form>
            <div className="space-y-2 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contact@sufiqawwali.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-80">
            <p>© {new Date().getFullYear()} Sufi Qawwali. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-400 fill-red-400" /> for Sufi Music Lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
