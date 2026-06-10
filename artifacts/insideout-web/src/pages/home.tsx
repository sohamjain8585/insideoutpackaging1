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
  Headphones, Award, ChevronDown, Star, Package, Layers, Printer,
  ScanBarcode, BadgeCheck, Gauge, FlaskConical
} from "lucide-react";

import heroImg from "@assets/img18_1781094388914.png";
import barcodeLabelsImg from "@assets/img7_1781094388916.png";
import logisticsImg from "@assets/img5_1781094388916.png";
import ribbonsImg from "@assets/img14_1781094388915.png";
import posRollsImg from "@assets/WhatsApp_Image_2026-01-09_at_11.00.09_AM_1781094388918.jpeg";
import colorRibbonsImg from "@assets/img10_1781094388915.png";
import labelRollImg from "@assets/img_rool_1781094388917.png";

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "17+", label: "Product Variants" },
  { value: "48hr", label: "Order Dispatch" },
  { value: "100%", label: "QC Certified Stock" },
];

const whyChooseUs = [
  {
    icon: ScanBarcode,
    title: "GS1-Grade Barcode Clarity",
    desc: "Every label ships scan-tested. Our print parameters are calibrated to achieve Grade A barcode contrast — zero read failures on your production scanners, handheld readers, or automated conveyors.",
  },
  {
    icon: Shield,
    title: "Adhesive Engineered Per Surface",
    desc: "Permanent, removable, freezer-grade, or high-tack — our adhesive specifications are matched to your exact surface: corrugated carton, HDPE drum, glass bottle, or powder-coated metal.",
  },
  {
    icon: Settings,
    title: "Manufactured to Your Spec",
    desc: "Custom core diameter, outer diameter, label gap, black mark sensing, wind direction, and die-cut shape. We manufacture to your printer's exact media spec — no shimming, no workarounds.",
  },
  {
    icon: Truck,
    title: "Reliable Pan-India Dispatch",
    desc: "Standard stock orders leave our facility within 48 hours. We supply to Maharashtra, Gujarat, Karnataka, Delhi, and across India through our established courier network.",
  },
  {
    icon: FlaskConical,
    title: "Substrate-Ribbon Matching",
    desc: "The wrong ribbon on the right label destroys print durability. Our team matches your label substrate — paper, PP, PET, polyester — to the exact ribbon formulation for maximum smudge and scratch resistance.",
  },
  {
    icon: BadgeCheck,
    title: "Consistent Batch-to-Batch Quality",
    desc: "Industrial buyers cannot afford quality variance between orders. Our multi-stage QC — adhesive peel test, print density check, dimensional tolerance, roll end count — ensures every re-order matches the last.",
  },
];

const productCategories = [
  {
    name: "Barcode & Thermal Labels",
    icon: Package,
    count: "10 Variants",
    image: barcodeLabelsImg,
    desc: "Barcode Labels, Thermal Labels, Direct Thermal, Semi Gloss, PP, PET, Asset, Void, Shipping & Product Labels. All substrates, all adhesive grades.",
    gradient: "from-[#0F2747] to-[#1a3a6b]",
  },
  {
    name: "Thermal Transfer Ribbons",
    icon: Layers,
    count: "4 Variants",
    image: ribbonsImg,
    desc: "Wax, Wax-Resin, Resin, and standard TTR ribbons. Compatible with Zebra, TSC, Honeywell, Argox, Godex, Citizen, and all major printer brands.",
    gradient: "from-[#1a3a6b] to-[#0F2747]",
  },
  {
    name: "POS & Billing Rolls",
    icon: Printer,
    count: "3 Variants",
    image: posRollsImg,
    desc: "Thermal Paper Rolls, Billing Rolls, and POS Rolls for EDC machines, cash registers, billing counters — all standard widths and lengths.",
    gradient: "from-[#0F2747] to-[#0a1e3d]",
  },
];

const testimonials = [
  {
    name: "Rajesh Sharma",
    company: "Sharma Logistics Pvt. Ltd., Pune",
    role: "Procurement Manager",
    text: "We've been sourcing our shipping labels and billing rolls from Inside Out for our entire fulfillment operation. The adhesive holds perfectly across every carton type — not a single peel in transit. Consistent quality, fast dispatch, and their team actually understands what a logistics operation needs.",
    rating: 5,
  },
  {
    name: "Priya Deshmukh",
    company: "MedChoice Pharmaceuticals, Nashik",
    role: "Production Head",
    text: "Pharma labeling has zero tolerance for print failure or tamper issues. Inside Out's void labels and resin ribbons have passed every internal QC audit we run. The print stays legible through sterilization cycles — that's not something every supplier can deliver.",
    rating: 5,
  },
  {
    name: "Anil Patil",
    company: "GreenFresh Foods, Pune",
    role: "Operations Director",
    text: "Our cold-storage operations need labels that stay bonded and readable at -18°C. Inside Out specified the right adhesive grade and direct thermal material without us even asking — that kind of product knowledge is rare. Three years in, zero label failures.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "What is the minimum order quantity for barcode labels?",
    a: "Our standard MOQ starts at 1,000 labels for stock sizes. For custom die-cut shapes or special substrates, MOQ depends on tooling complexity. We accommodate trial orders — contact us to discuss your volume.",
  },
  {
    q: "Which thermal transfer printer brands are your ribbons compatible with?",
    a: "Our ribbons are manufactured to universal dimensional standards and are compatible with Zebra, Honeywell, TSC, Argox, Godex, Citizen, Sato, and Datamax printers. Mention your printer model and we'll confirm the correct ribbon width and formulation.",
  },
  {
    q: "Can you supply labels pre-printed with our artwork, logo, and variable barcodes?",
    a: "Yes. We support full custom print — fixed artwork (logo, brand, static text) combined with variable data (sequential barcodes, serial numbers, expiry dates). Provide your artwork in AI, PDF, or CDR format and we'll produce a print proof before production.",
  },
  {
    q: "What is the standard lead time for bulk orders?",
    a: "In-stock standard labels and rolls are dispatched within 24–48 hours. Custom printed labels or special-specification substrates require 3–5 working days. Production-line urgent orders are handled on priority — call us directly for critical requirements.",
  },
  {
    q: "Do your labels perform in cold storage and freezer environments?",
    a: "Yes. We supply freezer-grade thermal labels with low-temperature adhesives rated for -25°C to +70°C. These are widely used in cold chain logistics, frozen food processing, and pharmaceutical cold storage. Specify 'freezer grade' when ordering.",
  },
  {
    q: "What is the technical difference between Wax, Wax-Resin, and Resin ribbons?",
    a: "Wax ribbons are cost-optimized for standard paper labels in normal environments — high-speed printing, good density. Wax-Resin ribbons add smudge, scratch, and mild chemical resistance — ideal for semi-gloss or coated paper substrates. Resin ribbons provide maximum chemical, heat, and abrasion resistance — required for PP, PET, and polyester labels in harsh industrial or automotive environments.",
  },
  {
    q: "Do your billing rolls and POS rolls work on all machine types?",
    a: "We supply thermal paper rolls and billing rolls in all standard widths (57mm, 79mm, 80mm) and diameters to fit cash registers, EDC terminals, billing machines, and POS printers across all major brands. Specify your machine's media spec and we'll supply the exact match.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Send Your Requirements",
    desc: "Share your label size, substrate, printer model, adhesive type, and quantity via WhatsApp, call, or our quote form. The more detail you provide, the faster we quote.",
  },
  {
    step: "02",
    title: "Receive Quote and Samples",
    desc: "You receive a detailed quotation within 2–4 business hours. Sample rolls are available before bulk commitment — evaluate print quality on your own printer before you order.",
  },
  {
    step: "03",
    title: "Production, Pack and Dispatch",
    desc: "Confirmed orders go into production immediately. Each roll is inspected, packed dust-free, and dispatched through our pan-India courier network within 48 hours.",
  },
];

const trustBadges = [
  { label: "ISO-Grade QC Process", icon: BadgeCheck },
  { label: "GS1 Barcode Compliance", icon: ScanBarcode },
  { label: "Pan-India Delivery", icon: Globe2 },
  { label: "Custom Specification", icon: Settings },
  { label: "Technical Advisory", icon: Headphones },
  { label: "Bulk Production Capability", icon: Gauge },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useSEO({
    title: "Barcode Labels & Thermal Ribbons Manufacturer — Pune, Maharashtra",
    description: "Inside Out Packaging Industries — manufacturer and supplier of barcode labels, thermal transfer ribbons, billing rolls, and POS rolls. Based in Koregaon Bhima, Pune. Precision Printed. Perfectly Packed.",
    keywords: "Barcode Labels Manufacturer Pune, Thermal Transfer Ribbon Supplier Maharashtra, Wax Ribbon Supplier India, Billing Rolls Pune, POS Rolls Supplier, Barcode Labels Koregaon Bhima",
  });

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Warehouse labeling operations" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#0F2747]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2747] via-[#0F2747]/30 to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-24">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Manufacturer & Supplier — Koregaon Bhima, Pune
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                PRECISION PRINTED.<br />
                <span className="text-primary">PERFECTLY PACKED.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-4 max-w-2xl leading-relaxed">
                Industrial-grade barcode labels, thermal transfer ribbons, billing rolls, and POS rolls — manufactured and supplied across India from our facility in Pune.
              </p>
              <p className="text-base text-slate-400 mb-10 max-w-2xl">
                Every roll we ship is quality-checked, scan-tested, and packed to reach your production line without downtime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" data-testid="link-hero-products">
                  <Button size="lg" className="h-14 px-8 text-lg font-semibold w-full sm:w-auto gap-2">
                    Explore Products <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <a href="https://wa.me/918530658864" target="_blank" rel="noreferrer" data-testid="link-hero-whatsapp">
                  <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto gap-2">
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
      <section className="bg-white py-12 border-b border-gray-100">
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

      {/* ── Trust Badge Strip ── */}
      <section className="bg-[#0F2747] py-5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                <badge.icon className="h-4 w-4 text-primary flex-shrink-0" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Categories ── */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-sm uppercase tracking-wider mb-4">Product Range</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2747] mb-4">Three Core Product Lines</h2>
            <p className="text-lg text-slate-600">Labels, ribbons, and rolls — every consumable your thermal printing operation requires, from one source.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productCategories.map((cat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-slate-100">
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
                Built for Industrial Buyers Who Cannot Afford Label Failures
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Inside Out Packaging Industries is a specialized manufacturer and supplier of thermal labels, thermal transfer ribbons, and POS rolls based in Koregaon Bhima, Pune. We serve procurement teams, production managers, and operations heads who need dependable consumables — not excuses.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Under the leadership of <strong className="text-[#0F2747]">Er. Soham Sanjay Jain</strong>, our facility manufactures to tight tolerances with multi-stage quality verification. Whether you need 2,000 custom barcode labels or 50,000 POS rolls for a retail chain, we treat every order with the same technical rigour.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Substrate-to-ribbon matching advisory — free with every order",
                  "Custom die-cut sizes, core diameter, and wind direction",
                  "Stock orders dispatched within 48 hours",
                  "Pan-India delivery via established courier network",
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
                    Our Full Story <ArrowRight className="h-4 w-4" />
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
              <div className="absolute inset-0 bg-primary/60 translate-x-4 translate-y-4 rounded-2xl -z-10" />
              <img src={barcodeLabelsImg} alt="Barcode label rolls manufactured by Inside Out Packaging Industries" className="rounded-2xl shadow-xl w-full h-[460px] object-contain bg-slate-50 p-6" />
              <div className="absolute -bottom-6 -left-6 bg-[#0F2747] text-white p-6 rounded-xl shadow-xl hidden md:block max-w-[220px]">
                <div className="text-3xl font-extrabold text-primary mb-1">500+</div>
                <div className="text-sm font-medium text-slate-300">Procurement teams across India trust our labels on their production lines</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 bg-[#0F2747] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary font-bold rounded-full text-sm uppercase tracking-wider mb-4">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets Inside Out Apart</h2>
            <p className="text-lg text-slate-300">Six technical and operational reasons why industrial buyers return to us order after order.</p>
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
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-sm uppercase tracking-wider mb-4">Catalog</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2747] mb-4">Most Demanded Products</h2>
            <p className="text-lg text-slate-600">The four consumables our clients reorder most — because their operations depend on them never failing.</p>
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

      {/* ── Industries Served ── */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src={logisticsImg} alt="Logistics shipping label application" className="rounded-2xl shadow-xl object-cover h-[480px] w-full" />
              <div className="absolute -bottom-6 -right-6 bg-[#0F2747] text-white p-6 rounded-xl shadow-xl hidden md:block max-w-[220px]">
                <Globe2 className="h-9 w-9 text-primary mb-3" />
                <h3 className="text-lg font-bold mb-1">Pan-India Delivery</h3>
                <p className="text-slate-400 text-sm">From Pune to every production line in India. Never let your operation wait for labels.</p>
              </div>
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-sm uppercase tracking-wider mb-4">Industries</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2747] mb-4">Trusted Across 9 Industry Sectors</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Sub-zero cold chain, pharmaceutical clean rooms, automotive production lines, FMCG high-speed packaging — our products are specified for environments where standard labels fail.
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
                  See All Industries <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── How to Order ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-sm uppercase tracking-wider mb-4">Simple Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2747] mb-4">Order in 3 Steps</h2>
            <p className="text-lg text-slate-600">Getting the right labels for your operation should not be complicated. Here's exactly how it works.</p>
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
            <a href="https://wa.me/918530658864" target="_blank" rel="noreferrer" data-testid="link-process-whatsapp">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2747] mb-4">What Procurement Teams Say</h2>
            <p className="text-lg text-slate-600">Logistics providers, pharmaceutical manufacturers, and food processors — here's why they keep reordering.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2747] mb-4">Common Technical Questions</h2>
            <p className="text-lg text-slate-600">Answers to what procurement teams and production managers ask before their first order.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
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
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
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
            <p className="text-slate-500 mb-4">Have a technical question not answered here?</p>
            <a href="tel:8530658864">
              <Button variant="outline" className="gap-2 border-[#0F2747] text-[#0F2747] hover:bg-[#0F2747] hover:text-white">
                <Phone className="h-4 w-4" /> Speak to Er. Soham Jain — +91 8530658864
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready to Source Industrial Labels That Won't Let You Down?</h2>
          <p className="text-xl text-white/90 mb-3 max-w-2xl mx-auto">Get a customized quote with substrate recommendations, pricing, and lead time — within 2 to 4 business hours.</p>
          <p className="text-white/70 mb-10 text-sm">Er. Soham Sanjay Jain &nbsp;·&nbsp; +91 8530658864 &nbsp;·&nbsp; SJ.insideout@gmail.com &nbsp;·&nbsp; Koregaon Bhima, Pune 412216</p>
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
