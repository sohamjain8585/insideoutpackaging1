import { Link } from "wouter";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import logoPng from "@assets/Logo_(8)_1781094388919.png";
import { PRODUCTS } from "@/data/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0F2747] text-slate-300 pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block bg-white p-4 rounded-md w-fit">
              <img src={logoPng} alt="Inside Out Packaging Industries" className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Leading manufacturer and supplier of barcode labels, thermal transfer ribbons, 
              billing rolls, and POS rolls in Maharashtra, India. 
              Precision printed, perfectly packed.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://wa.me/918530658864" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors text-white">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="mailto:SJ.insideout@gmail.com" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors text-white">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "All Products", href: "/products" },
                { name: "Applications", href: "/applications" },
                { name: "Industries Served", href: "/industries" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/50"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Our Products</h3>
            <ul className="flex flex-col gap-3">
              {PRODUCTS.slice(0, 6).map((product) => (
                <li key={product.id}>
                  <Link href="/products" className="text-sm hover:text-primary transition-colors inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/50"></span>
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong>Inside Out Packaging Industries</strong><br />
                  Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <span>Er. Soham Sanjay Jain</span>
                  <a href="tel:8530658864" className="hover:text-white transition-colors">+91 8530658864</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:SJ.insideout@gmail.com" className="hover:text-white transition-colors">
                  SJ.insideout@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {currentYear} Inside Out Packaging Industries. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>ISO 9001:2015 Certified</span>
            <span className="w-1 h-1 rounded-full bg-slate-500"></span>
            <span>Made in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
