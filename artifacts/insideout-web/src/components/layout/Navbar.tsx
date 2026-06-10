import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoPng from "@assets/Logo_(8)_1781094388919.png";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Applications", href: "/applications" },
    { name: "Industries", href: "/industries" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location !== "/"
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50" data-testid="link-logo">
          <img src={logoPng} alt="Inside Out Packaging Industries" className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href
                    ? "text-primary font-semibold"
                    : isScrolled || location !== "/"
                    ? "text-slate-700"
                    : "text-white"
                }`}
                data-testid={`link-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4 border-l border-white/20 pl-6">
            <Link href="/contact" data-testid="button-nav-quote">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled || location !== "/" ? "text-slate-900" : "text-slate-900 lg:text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled || location !== "/" ? "text-slate-900" : "text-white"}`} />
          )}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 bg-white shadow-xl p-6 pt-24 border-b border-gray-100 lg:hidden flex flex-col gap-4 h-[100dvh] overflow-y-auto"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3 border-b border-gray-50 text-lg font-medium ${
                    location === link.href ? "text-primary" : "text-slate-800"
                  }`}
                  data-testid={`link-mobile-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </Link>
              ))}
              <div className="mt-6 flex flex-col gap-4">
                <a
                  href="tel:8530658864"
                  className="flex items-center justify-center gap-2 py-3 rounded-md bg-slate-100 text-slate-800 font-medium"
                  data-testid="link-mobile-call"
                >
                  <Phone className="h-4 w-4" />
                  Call Us
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full"
                >
                  <Button className="w-full py-6 text-lg bg-primary hover:bg-primary/90">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
