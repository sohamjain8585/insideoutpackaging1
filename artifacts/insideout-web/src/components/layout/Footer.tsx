import { Link } from "wouter";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import logoPng from "@assets/Logo_(8)_1781094388919.png";
import { PRODUCTS } from "@/data/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111f36] text-slate-300 pt-16 pb-8 border-t-2 border-primary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.35fr_.8fr_1fr_1.2fr] gap-10 lg:gap-14 mb-14">

          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block bg-[#fbfaf7] p-3 rounded-lg w-fit">
              <img src={logoPng} alt="Inside Out Packaging Industries" className="h-11 w-auto object-contain" />
            </Link>
            <p className="text-slate-400 text-[13px] leading-relaxed max-w-sm">
              Manufacturer and supplier of barcode labels, thermal transfer ribbons, billing rolls, and POS rolls. Based in Koregaon Bhima, Pune — supplying industrial operations across India.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/918530658864"
                target="_blank"
                rel="noreferrer"
                className="bg-green-600/20 p-2.5 rounded-full hover:bg-green-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 text-green-400 hover:text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="mailto:SJ.insideout@gmail.com"
                className="bg-white/10 p-2.5 rounded-full hover:bg-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-slate-300 hover:text-white"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:8530658864"
                className="bg-white/10 p-2.5 rounded-full hover:bg-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-slate-300 hover:text-white"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-[.14em] mb-6">Quick Links</h3>
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
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors inline-flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-[.14em] mb-6">Our Products</h3>
            <ul className="flex flex-col gap-3">
              {PRODUCTS.slice(0, 6).map((product) => (
                <li key={product.id}>
                  <Link
                    href="/products"
                    className="text-sm hover:text-primary transition-colors inline-flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-[.14em] mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block mb-0.5">Inside Out Packaging Industries</strong>
                  Janki Furniture, Koregaon Bhima<br />
                  Tal-Shirur, Pune – 412216<br />
                  Maharashtra, India
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <a href="tel:8530658864" className="hover:text-white transition-colors font-medium">
                    +91 8530658864
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:SJ.insideout@gmail.com" className="hover:text-white transition-colors break-all">
                  SJ.insideout@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MessageCircle className="h-5 w-5 text-green-400 shrink-0" />
                <a
                  href="https://wa.me/918530658864"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors text-green-400"
                >
                  WhatsApp: +91 8530658864
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Inside Out Packaging Industries. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>ISO-Grade Quality Process</span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span>Koregaon Bhima, Pune 412216</span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span>Made in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
