import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight, Phone, Mail, MessageCircle } from "lucide-react";
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
    { name: "Barcode Printers", href: "/barcode-printers" },
    { name: "Applications", href: "/applications" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="hidden lg:block bg-[#111f36] text-white text-[11px] py-2.5 z-50 relative border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-slate-300">
              <Phone className="h-3 w-3 text-primary" />
              <a href="tel:8530658864" className="hover:text-white transition-colors">+91 8530658864</a>
            </span>
              <span className="flex items-center gap-2 text-slate-300">
              <Mail className="h-3 w-3 text-primary" />
              <a href="mailto:SJ.insideout@gmail.com" className="hover:text-white transition-colors">SJ.insideout@gmail.com</a>
            </span>
              <span className="flex items-center gap-2 text-slate-300">
              <MessageCircle className="h-3 w-3 text-green-400" />
              <a href="https://wa.me/918530658864" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp Us</a>
            </span>
          </div>
          <div className="flex items-center gap-6 text-slate-300">
            <span>Mon - Sat: 9:00 AM - 6:00 PM IST</span>
             <span className="bg-primary/15 text-primary px-2.5 py-1 rounded-sm font-mono font-bold tracking-wide">MAHARASHTRA, INDIA</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
          className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ease-out border-b ${
          isScrolled || location !== "/"
             ? "bg-[#fbfaf7]/95 backdrop-blur-md shadow-[0_10px_28px_rgba(17,31,54,.08)] border-[#dfe2e0] py-2.5"
             : "bg-[#fbfaf7]/90 backdrop-blur-md shadow-none border-transparent py-4"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 z-50 transition-transform duration-300 hover:scale-[1.02]" data-testid="link-logo">
            <img src={logoPng} alt="Inside Out Packaging Industries" className="h-9 md:h-11 w-auto object-contain transition-all duration-300" />
            <span className="hidden xl:block pl-3 border-l border-[#dfe2e0] text-[10px] leading-tight font-mono font-bold tracking-[.16em] text-[#111f36] uppercase">Industrial<br />Identification</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                   className={`text-[13px] font-semibold transition-colors hover:text-primary relative group ${
                    location === link.href
                      ? "text-primary font-semibold"
                      : "text-slate-700"
                  }`}
                  data-testid={`link-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${location === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3 border-l border-[#dfe2e0] pl-5">
              <a href="tel:8530658864" data-testid="link-nav-call" className="inline-flex items-center gap-2 rounded-lg border border-[#111f36] px-3 py-2 text-xs font-bold text-[#111f36] transition-colors hover:bg-[#111f36] hover:text-white">
                <Phone className="h-3.5 w-3.5" /> Call Now
              </a>
              <Link href="/contact" data-testid="button-nav-quote" className="inline-flex items-center rounded-lg bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-[0_7px_18px_rgba(239,111,35,.22)] transition-all hover:-translate-y-0.5 hover:bg-[#d95f19]">
                Get Free Quote
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
              <X className="h-6 w-6 text-slate-900" />
            ) : (
              <Menu className="h-6 w-6 text-slate-900" />
            )}
          </button>

          {/* Mobile Nav */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-0 left-0 right-0 bg-white shadow-xl p-6 pt-20 border-b border-gray-100 lg:hidden flex flex-col gap-4 h-[100dvh] overflow-y-auto"
              >
                {/* Mobile top contact */}
                <div className="bg-slate-50 rounded-xl p-4 flex flex-col gap-2 mb-2">
                  <a href="tel:8530658864" className="flex items-center gap-2 text-sm text-[#0F2747] font-medium">
                    <Phone className="h-4 w-4 text-primary" /> +91 8530658864
                  </a>
                  <a href="https://wa.me/918530658864" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-[#0F2747] font-medium">
                    <MessageCircle className="h-4 w-4 text-green-500" /> WhatsApp Us
                  </a>
                </div>

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
    </>
  );
}
