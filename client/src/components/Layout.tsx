import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MapPin, Phone, Mail, Facebook, Instagram, ShoppingBag, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop Parts", href: "/shop" },
    { name: "Garage Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300 border-b border-transparent",
          scrolled ? "bg-black/95 backdrop-blur-sm border-primary/20 py-2" : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-3 group">
              <img
                src="https://i.ibb.co/d4QmDmTR/B-L-Motorcycles-Logo-Design.png"
                alt="B&L Motorcycles"
                className="w-12 h-12 object-contain transition-transform group-hover:scale-105"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-heading font-bold text-primary tracking-wider leading-none">
                  B&L MOTORCYCLES
                </h1>
                <p className="text-[10px] font-mono text-gray-400 tracking-[0.2em] uppercase">
                  Parts & Repairs
                </p>
              </div>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className={cn(
                    "text-sm font-heading font-medium uppercase tracking-wider transition-colors hover:text-primary relative py-1",
                    location === link.href ? "text-primary" : "text-white"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-[1px] bg-primary transform scale-x-0 transition-transform duration-300 origin-right",
                    location === link.href && "scale-x-100 origin-left"
                  )} />
                </a>
              </Link>
            ))}
            <a 
              href="https://ebay.us/m/zVcLaj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-black px-4 py-2 font-heading font-bold text-sm uppercase tracking-wider clip-chamfer hover:bg-white transition-colors"
            >
              eBay Store
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/98 border-b border-primary/20 backdrop-blur-xl animate-in slide-in-from-top-5">
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <a
                    className="text-lg font-heading font-bold uppercase text-white hover:text-primary transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
              <a 
                href="https://ebay.us/m/zVcLaj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-heading font-bold uppercase text-primary hover:text-white transition-colors flex items-center gap-2"
              >
                Visit eBay Store <ShoppingBag className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-primary/20 pt-16 pb-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <img
                src="https://i.ibb.co/d4QmDmTR/B-L-Motorcycles-Logo-Design.png"
                alt="B&L Motorcycles"
                className="w-24 h-auto mb-6"
              />
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Proudly family-run and based in Hampshire, UK. We live and breathe motorcycles, offering quality used parts and expert repairs.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Search className="w-5 h-5" /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-primary font-heading font-bold text-lg uppercase tracking-wider mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <a className="text-gray-400 hover:text-primary transition-colors text-sm uppercase tracking-wide flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full" />
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-primary font-heading font-bold text-lg uppercase tracking-wider mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span>95 Newgate Lane, Peel Common,<br />Fareham, PO14 1BA,<br />United Kingdom</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <ShoppingBag className="w-5 h-5 text-primary shrink-0" />
                  <a href="https://ebay.us/m/zVcLaj" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Visit eBay Store
                  </a>
                </li>
              </ul>
            </div>

            {/* Opening Hours (Placeholder based on typical garage hours) */}
            <div>
              <h4 className="text-primary font-heading font-bold text-lg uppercase tracking-wider mb-6">Opening Hours</h4>
              <ul className="space-y-2 text-sm text-gray-400 font-mono">
                <li className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span className="text-white">09:00 - 17:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white">09:00 - 13:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-primary">Closed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono uppercase tracking-wider">
            <p>© 2025 B&L Motorcycles Ltd. All rights reserved.</p>
            <p>B&L Motorcycles – Trusted Parts & Repairs UK</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
