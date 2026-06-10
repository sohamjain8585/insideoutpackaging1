import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { useSEO } from "@/hooks/use-seo";
import { PRODUCTS, INDUSTRIES } from "@/data/constants";
import { ArrowRight, ShieldCheck, Factory, Globe2, CheckCircle2, ChevronRight } from "lucide-react";

import heroImg from "@assets/img18_1781094388914.png";
import logisticsImg from "@assets/img5_1781094388916.png";
import promoImg from "@assets/img5_1781094388916.png";

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "50+", label: "Product Variants" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Quality Guaranteed" },
];

export default function Home() {
  useSEO({
    title: "Barcode Labels Manufacturer & Supplier",
    description: "Inside Out Packaging Industries is Maharashtra's leading manufacturer of barcode labels, thermal transfer ribbons, and POS rolls. Precision Printed. Perfectly Packed.",
    keywords: "Barcode Labels Manufacturer, Barcode Labels Supplier, Thermal Transfer Ribbon Supplier, Barcode Labels Pune, Barcode Labels Maharashtra"
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Warehouse operations" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0F2747]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2747] to-transparent opacity-80" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Maharashtra's Leading Label Manufacturer
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                PRECISION PRINTED.<br />
                <span className="text-primary">PERFECTLY PACKED.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                Enterprise-grade manufacturing of barcode labels, thermal transfer ribbons, and POS rolls. Powering supply chains with zero-error precision and uncompromising quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" data-testid="link-hero-products">
                  <Button size="lg" className="h-14 px-8 text-lg font-semibold w-full sm:w-auto">
                    Explore Products
                  </Button>
                </Link>
                <Link href="/contact" data-testid="link-hero-quote">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white w-full sm:w-auto backdrop-blur-sm">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 relative -mt-16 z-20 mx-4 md:mx-auto md:max-w-6xl rounded-2xl shadow-xl border border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-[#0F2747] mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2747]">
                Industrial Grade Solutions for Modern Supply Chains
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At Inside Out Packaging Industries, we don't just print labels; we build the foundational tracking systems that keep modern commerce moving. From FMCG to Automotive, our products are engineered to withstand harsh environments while delivering perfect scannability.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "ISO Certified Manufacturing Facility",
                  "Custom specifications & bulk production",
                  "Dedicated pan-India delivery network",
                  "Uncompromising multi-stage quality checks"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <Link href="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                  Read our full story <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-2xl -z-10" />
              <img 
                src={promoImg} 
                alt="Inside Out Packaging Team" 
                className="rounded-2xl shadow-lg border border-gray-100 object-cover w-full h-[500px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2747] mb-4">Featured Products</h2>
            <p className="text-lg text-slate-600">Engineered for durability. Designed for precision. Discover our most demanded industrial products.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.slice(0, 4).map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-white"
              >
                <div className="aspect-[4/3] bg-white relative overflow-hidden flex items-center justify-center p-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-[#0F2747] mb-2">{product.name}</h3>
                  <p className="text-slate-600 mb-4 flex-1 text-sm">{product.description}</p>
                  <Link href={`/products`} className="inline-flex items-center gap-2 text-sm font-bold text-[#0F2747] group-hover:text-primary transition-colors mt-auto">
                    View Details <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button size="lg" className="h-12 px-8">View Full Catalog</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals & Industries */}
      <section className="py-24 bg-[#0F2747] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted Across Industries</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Every sector has unique challenges. Whether it's the sub-zero temperatures of cold-chain logistics or the chemical exposure in pharmaceutical manufacturing, our labels are built to perform without fail.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {INDUSTRIES.slice(0, 8).map((ind, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg backdrop-blur-sm">
                    <Factory className="h-5 w-5 text-primary" />
                    <span className="font-medium text-sm">{ind}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/industries">
                <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white hover:text-[#0F2747]">
                  View All Industries
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src={logisticsImg} 
                alt="Logistics Application" 
                className="rounded-2xl shadow-2xl object-cover h-[600px] w-full"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-xl shadow-xl max-w-sm hidden md:block">
                <Globe2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-[#0F2747] text-xl font-bold mb-2">Pan-India Delivery</h3>
                <p className="text-slate-600 text-sm">Ensuring your supply chain never stops with our robust logistics and delivery network.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready to upgrade your packaging standards?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">Get in touch with our experts today for a customized quote tailored to your industrial requirements.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-lg font-bold bg-[#0F2747] text-white hover:bg-[#0F2747]/90">
                Request a Quote
              </Button>
            </Link>
            <a href="tel:8530658864">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold bg-transparent text-[#0F2747] border-[#0F2747] hover:bg-[#0F2747] hover:text-white">
                Call +91 8530658864
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
