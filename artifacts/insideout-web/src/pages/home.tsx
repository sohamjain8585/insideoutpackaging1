import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { useSEO } from "@/hooks/use-seo";
import { PRODUCTS, INDUSTRIES } from "@/data/constants";
import {
  ArrowRight, Factory, Globe2, CheckCircle2, ChevronRight,
  Phone, MessageCircle, Zap, Shield, Settings, Truck,
  Headphones, Award, ChevronDown, Star, Package, Layers, Printer
} from "lucide-react";

import heroImg from "@assets/img18_1781094388914.png";
import logisticsImg from "@assets/img5_1781094388916.png";
import barcodeLabelsImg from "@assets/img7_1781094388916.png";
import ribbonsImg from "@assets/img14_1781094388915.png";
import posRollsImg from "@assets/WhatsApp_Image_2026-01-09_at_11.00.09_AM_1781094388918.jpeg";

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "17+", label: "Product Variants" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Quality Guaranteed" },
];

const whyChooseUs = [
  {
    icon: Zap,
    title: "Sharp, Scannable Print — Every Time",
    desc: "Every label we produce meets or exceeds GS1 barcode grade requirements. Our print resolution and contrast ensure zero scan failures in any environment.",
  },
  {
    icon: Shield,
    title: "Strong Adhesion That Lasts",
    desc: "We use only high-grade adhesives engineered for the substrate — paper, polyester, polypropylene — and the surface: metal, glass, plastic, or corrugated.",
  },
  {
    icon: Settings,
    title: "Custom Sizes & Specifications",
    desc: "No standard size? No problem. We manufacture to your exact die-cut, core size, OD, and wind direction. Minimum order quantities are flexible.",
  },
  {
    icon: Truck,
    title: "Fast Pan-India Delivery",
    desc: "With our established logistics network, bulk orders are dispatched within 48 hours. Emergency supply for production line requirements handled on priority.",
  },
  {
    icon: Headphones,
    title: "Expert Technical Support",
    desc: "Our team understands material science, printer compatibility, and ribbon-label matching. We advise, not just sell — ensuring you never waste a roll.",
  },
  {
    icon: Award,
    title: "ISO-Grade Quality Assurance",
    desc: "Multi-stage quality checks: adhesive peel test, print contrast measurement, dimensional accuracy, and roll wind consistency before every shipment.",
  },
];

const productCategories = [
  {
    name: "Barcode & Thermal Labels",
    icon: Package,
    count: "10 Variants",
    image: barcodeLabelsImg,
    desc: "Barcode Labels, Thermal Labels, Direct Thermal, Semi Gloss, PP, PET, Asset, Void, Shipping & Product Labels",
    gradient: "from-[#0F2747] to-[#1a3a6b]",
  },
  {
    name: "Thermal Transfer Ribbons",
    icon: Layers,
    count: "4 Variants",
    image: ribbonsImg,
    desc: "Wax Ribbons, Wax-Resin Ribbons, Resin Ribbons, and standard Thermal Transfer Ribbons for every substrate",
    gradient: "from-[#1a3a6b] to-[#0F2747]",
  },
  {
    name: "POS & Billing Rolls",
    icon: Printer,
    count: "3 Variants",
    image: posRollsImg,
    desc: "Billing Rolls, Thermal Paper Rolls, and POS Rolls for all standard machines and EDC terminals",
    gradient: "from-[#0F2747] to-[#0a1e3d]",
  },
];

const testimonials = [
  {
    name: "Rajesh Sharma",
    company: "Sharma Logistics Pvt. Ltd.",
    role: "Procurement Manager",
    text: "We source all our shipping labels from Inside Out Packaging Industries. The adhesive quality is exceptional — labels stick perfectly to every carton type and survive our entire distribution chain without a single peel.",
    rating: 5,
  },
  {
    name: "Priya Deshmukh",
    company: "MedChoice Pharmaceuticals",
    role: "Production Head",
    text: "For pharma labeling, tamper-evidence and print clarity are critical. Inside Out delivers void labels with flawless print quality that meets our compliance checklist every single time.",
    rating: 5,
  },
  {
    name: "Anil Patil",
    company: "GreenFresh Foods",
    role: "Operations Director",
    text: "Their cold-storage compatible direct thermal labels have been a game-changer for our freezer inventory management. Never had a label peel or print fade in three years of business.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "What is the minimum order quantity for barcode labels?",
    a: "Our minimum order quantity starts at 1,000 labels for standard sizes. For custom die-cut labels, MOQ depends on the complexity of the tooling. We are flexible for regular clients and trial orders.",
  },
  {
    q: "Do you supply thermal transfer ribbons that fit Zebra, Honeywell, and TSC printers?",
    a: "Yes. Our ribbons are manufactured to be compatible with all major thermal transfer printer brands including Zebra, Honeywell, TSC, Argox, Sato, Godex, and Citizen. Just mention your printer model when ordering.",
  },
  {
    q: "Can you print and supply custom-printed labels with our artwork?",
    a: "Absolutely. We support custom printing with your logo, text, variable data, and barcodes. Share your artwork file (AI, PDF, or CDR) and we provide a proof before production.",
  },
  {
    q: "What is the typical lead time for bulk orders?",
    a: "Standard label rolls are dispatched within 24-48 hours. Custom printed labels or special substrates take 3-5 working days. Urgent orders are handled on priority with prior coordination.",
  },
  {
    q: "Do your labels work in cold storage or freezer environments?",
    a: "Yes. We supply freezer-grade direct thermal and thermal transfer labels with special adhesives that maintain bond strength from -20°C to +70°C, suitable for cold chain and frozen food applications.",
  },
  {
    q: "What is the difference between Wax, Wax-Resin, and Resin ribbons?",
    a: "Wax ribbons are economical and ideal for standard paper labels. Wax-Resin ribbons offer better smudge and scratch resistance on semi-gloss or coated papers. Resin ribbons provide maximum durability on synthetic substrates like PET or PP labels for harsh environments.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Share Your Requirements",
    desc: "Tell us your label size, substrate, adhesive type, printer model, and quantity. WhatsApp, call, or fill our quick quote form.",
  },
  {
    step: "02",
    title: "Get Your Quote & Samples",
    desc: "We send a detailed quotation within 2 hours. Sample rolls available for quality verification before placing bulk orders.",
  },
  {
    step: "03",
    title: "Confirmed, Packed & Delivered",
    desc: "Once approved, your order goes into production. Packed securely and dispatched via our pan-India courier network.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useSEO({
    title: "Barcode Labels Manufacturer & Supplier in Maharashtra",
    description: "Inside Out Packaging Industries — Maharashtra's leading manufacturer of barcode labels, thermal transfer ribbons, billing rolls, and POS rolls. Precision Printed. Perfectly Packed.",
    keywords: "Barcode Labels Manufacturer, Barcode Labels Supplier, Thermal Transfer Ribbon Supplier, Barcode Labels Pune, Barcode Labels Maharashtra, Wax Ribbon Supplier India",
  });

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Warehouse operations" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#0F2747]/78" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2747] via-[#0F2747]/40 to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-24">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Maharashtra's Leading Label Manufacturer
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                PRECISION PRINTED.<br />
                <span className="text-primary">PERFECTLY PACKED.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                Manufacturer and supplier of barcode labels, thermal transfer ribbons, billing rolls, and POS rolls. Powering supply chains across India with zero-error precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" data-testid="link-hero-products">
                  <Button size="lg" className="h-14 px-8 text-lg font-semibold w-full sm:w-auto">
                    Explore Products <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                <a href="https://wa.me/918530658864" target="_blank" rel="noreferrer" data-testid="link-hero-whatsapp">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold bg-green-500/20 text-white border-green-400/40 hover:bg-green-500/30 w-full sm:w-auto backdrop-blur-sm gap-2">
                    <MessageCircle className="h-5 w-5" /> WhatsApp Us
                  </Button>
                </a>
                <Link href="/contact" data-testid="link-hero-quote">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold bg-white/10 text-white border-white/20 hover:bg-white/20 w-full sm:w-auto backdrop-blur-sm">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white py-12 relative z-20 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-[#0F2747] mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Categories ── */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-sm uppercase tracking-wider mb-4">Our Product Range</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2747] mb-4">Three Core Product Lines</h2>
            <p className="text-lg text-slate-600">Everything your labeling operation needs — sourced from one trusted manufacturer.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productCategories.map((cat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border border-slate-100">
                <div className="relative h-52 overflow-hidden bg-slate-50 flex items-center justify-center p-4">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.gradient}`} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <cat.icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold bg-primary/10 text-primary px-2 py-1 rounded-full uppercase tracking-wider">{cat.count}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F2747] mb-2">{cat.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <Link href="/products" className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:gap-2 transition-all">
                    View Products <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Teaser ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-sm uppercase tracking-wider">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2747]">
                Industrial Grade Solutions for Modern Supply Chains
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At Inside Out Packaging Industries, we don't just print labels — we build the foundational tracking systems that keep modern commerce moving. From FMCG to Automotive, our products are engineered to withstand harsh environments while delivering perfect scannability.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "ISO-grade manufacturing quality controls",
                  "Custom specifications and bulk production capability",
                  "Pan-India delivery network — orders dispatched in 48 hours",
                  "Technical consultation on material and ribbon selection",
                  "Compatible with all major thermal printer brands",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4 flex items-center gap-4">
                <Link href="/about">
                  <Button variant="outline" className="gap-2 border-[#0F2747] text-[#0F2747] hover:bg-[#0F2747] hover:text-white">
                    Read Our Story <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:8530658864">
                  <Button className="gap-2">
                    <Phone className="h-4 w-4" /> Call Now
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-2xl -z-10 opacity-60" />
              <img src={logisticsImg} alt="Logistics labeling in action" className="rounded-2xl shadow-xl w-full h-[460px] object-cover object-center" />
              <div className="absolute -bottom-6 -left-6 bg-[#0F2747] text-white p-6 rounded-xl shadow-xl hidden md:block max-w-[200px]">
                <div className="text-4xl font-extrabold text-primary mb-1">10+</div>
                <div className="text-sm font-medium text-slate-300">Years of industrial excellence in Maharashtra</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 bg-[#0F2747] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary font-bold rounded-full text-sm uppercase tracking-wider mb-4">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Inside Out Difference</h2>
            <p className="text-lg text-slate-300">Six reasons why Maharashtra's leading manufacturers, logistics providers, and retailers trust us.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group">
                <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                  <item.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-sm uppercase tracking-wider mb-4">Products</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2747] mb-4">Featured Products</h2>
            <p className="text-lg text-slate-600">Engineered for durability. Designed for precision. Discover our most demanded industrial products.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.slice(0, 4).map((product, i) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col bg-white"
                data-testid={`card-featured-${product.id}`}>
                <div className="aspect-[4/3] bg-white relative overflow-hidden flex items-center justify-center p-4 border-b border-slate-50">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-[#0F2747] mb-2">{product.name}</h3>
                  <p className="text-slate-500 mb-4 flex-1 text-sm">{product.description}</p>
                  <Link href="/products" className="inline-flex items-center gap-1 text-sm font-bold text-[#0F2747] group-hover:text-primary transition-colors mt-auto">
                    View Details <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products">
              <Button size="lg" className="h-12 px-10 text-base">View All 17 Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-sm uppercase tracking-wider mb-4">Industries</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2747] mb-4">Trusted Across 9 Industries</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Whether it's the sub-zero temperatures of cold-chain logistics or the chemical exposure in pharmaceutical manufacturing — our labels are built to perform without fail.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {INDUSTRIES.slice(0, 8).map((ind, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white border border-slate-100 p-3 rounded-lg shadow-sm">
                    <Factory className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="font-medium text-sm text-slate-700">{ind}</span>
                  </div>
                ))}
              </div>
              <Link href="/industries">
                <Button variant="outline" className="gap-2 border-[#0F2747] text-[#0F2747] hover:bg-[#0F2747] hover:text-white">
                  View All Industries <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img src={logisticsImg} alt="Logistics Application" className="rounded-2xl shadow-xl object-cover h-[480px] w-full" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-[240px] hidden md:block border border-slate-100">
                <Globe2 className="h-10 w-10 text-primary mb-3" />
                <h3 className="text-[#0F2747] text-lg font-bold mb-1">Pan-India Delivery</h3>
                <p className="text-slate-500 text-sm">Reliable supply to every pin code. Never let your line stop waiting for labels.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How to Order ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-sm uppercase tracking-wider mb-4">Simple Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2747] mb-4">How to Order in 3 Steps</h2>
            <p className="text-lg text-slate-600">Getting the right labels for your operation is simple and fast.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-0.5 bg-gradient-to-r from-primary/30 via-primary to-primary/30" />
            {processSteps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="text-center relative">
                <div className="w-24 h-24 rounded-full bg-[#0F2747] text-white flex items-center justify-center mx-auto mb-6 text-3xl font-extrabold border-4 border-white shadow-lg z-10 relative">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-[#0F2747] mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/918530658864" target="_blank" rel="noreferrer">
              <Button size="lg" className="h-12 px-8 gap-2 bg-green-500 hover:bg-green-600 text-white">
                <MessageCircle className="h-5 w-5" /> WhatsApp Your Requirements
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-12 px-8 gap-2 border-[#0F2747] text-[#0F2747] hover:bg-[#0F2747] hover:text-white">
                Fill Quote Form
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-sm uppercase tracking-wider mb-4">Client Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2747] mb-4">What Our Clients Say</h2>
            <p className="text-lg text-slate-600">Trusted by logistics companies, pharmaceutical manufacturers, and retailers across Maharashtra.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col"
                data-testid={`card-testimonial-${i}`}>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed flex-1 mb-6 italic">"{t.text}"</p>
                <div className="border-t border-slate-100 pt-5">
                  <div className="font-bold text-[#0F2747]">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                  <div className="text-xs font-bold text-primary mt-1">{t.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-sm uppercase tracking-wider mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2747] mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Everything you need to know before placing your first order.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className={`border rounded-xl overflow-hidden transition-all duration-200 ${openFaq === i ? "border-primary shadow-sm" : "border-slate-200 hover:border-slate-300"}`}
                data-testid={`accordion-faq-${i}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                  data-testid={`button-faq-${i}`}
                >
                  <span className="font-semibold text-[#0F2747] pr-4">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}
                      className="overflow-hidden">
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-slate-500 mb-4">Still have questions? We're here to help.</p>
            <a href="tel:8530658864">
              <Button variant="outline" className="gap-2 border-[#0F2747] text-[#0F2747] hover:bg-[#0F2747] hover:text-white">
                <Phone className="h-4 w-4" /> Call +91 8530658864
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready to upgrade your packaging standards?</h2>
          <p className="text-xl text-white/90 mb-4 max-w-2xl mx-auto">Get in touch with our experts today for a customized quote tailored to your industrial requirements.</p>
          <p className="text-white/70 mb-10 text-sm">Er. Soham Sanjay Jain · +91 8530658864 · SJ.insideout@gmail.com</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-lg font-bold bg-[#0F2747] text-white hover:bg-[#0F2747]/90">
                Request a Quote
              </Button>
            </Link>
            <a href="https://wa.me/918530658864" target="_blank" rel="noreferrer">
              <Button size="lg" className="h-14 px-8 text-lg font-bold bg-green-500 hover:bg-green-600 text-white gap-2">
                <MessageCircle className="h-5 w-5" /> WhatsApp Now
              </Button>
            </a>
            <a href="tel:8530658864">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold bg-transparent text-white border-white/30 hover:bg-white hover:text-[#0F2747]">
                Call +91 8530658864
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
