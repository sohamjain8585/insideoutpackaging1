import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { useSEO } from "@/hooks/use-seo";
import { PRODUCTS, INDUSTRIES } from "@/data/constants";
import {
  ArrowRight, Factory, Globe2, CheckCircle2, ChevronRight,
  Phone, MessageCircle, Zap, Shield, Settings, Truck,
  Headphones, Award, ChevronDown, Star, Package, Layers, Printer,
  ScanBarcode, BadgeCheck, Gauge, FlaskConical, ArrowDown
} from "lucide-react";

import heroImg from "@assets/img18_1781094388914.png";
import barcodeLabelsImg from "@assets/img7_1781094388916.png";
import logisticsImg from "@assets/img5_1781094388916.png";
import ribbonsImg from "@assets/img14_1781094388915.png";
import posRollsImg from "@assets/WhatsApp_Image_2026-01-09_at_11.00.09_AM_1781094388918.jpeg";
import colorRibbonsImg from "@assets/img10_1781094388915.png";
import labelRollImg from "@assets/img_rool_1781094388917.png";

const stats = [
  { value: "17+", label: "Product Variants" },
  { value: "Grade A", label: "Barcode Quality" },
  { value: "9+", label: "Industries Served" },
  { value: "100%", label: "QC Certified Stock" },
];

const heroWords = ["Manufacturing", "Logistics", "Retail", "Pharma", "Industrial"];

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
    desc: "We supply to Maharashtra, Gujarat, Karnataka, Delhi, and across India through our established courier network. Contact us to confirm lead time for your order.",
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
    role: "Procurement Manager, Logistics Industry",
    text: "We've been sourcing our shipping labels and billing rolls from Inside Out for our entire fulfillment operation. The adhesive holds perfectly across every carton type — not a single peel in transit. Consistent quality, fast dispatch, and their team actually understands what a logistics operation needs.",
    rating: 5,
  },
  {
    name: "Priya Deshmukh",
    role: "Production Head, Pharmaceutical Industry",
    text: "Pharma labeling has zero tolerance for print failure or tamper issues. Inside Out's void labels and resin ribbons have passed every internal QC audit we run. The print stays legible through sterilization cycles — that's not something every supplier can deliver.",
    rating: 5,
  },
  {
    name: "Anil Patil",
    role: "Operations Director, Food Processing Industry",
    text: "Our cold-storage operations need labels that stay bonded and readable at -18°C. Inside Out specified the right adhesive grade and direct thermal material without us even asking — that kind of product knowledge is rare. Zero label failures since we switched.",
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
    a: "Lead time depends on order size and specifications. Standard stock items ship quickly; custom printed labels or special substrates require additional production time. Contact us directly for an accurate lead time for your specific requirement.",
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
    desc: "Confirmed orders go into production immediately. Each roll is inspected, packed dust-free, and dispatched through our pan-India courier network.",
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

// Floating particles config
const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 2 + Math.random() * 4,
  duration: 6 + Math.random() * 8,
  delay: Math.random() * 4,
}));

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [heroWordIndex, setHeroWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroWordIndex(i => (i + 1) % heroWords.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  useSEO({
    title: "Inside Out Packaging Industries — Barcode Labels & Thermal Ribbons, Pune",
    description: "Inside Out Packaging Industries — manufacturer and supplier of barcode labels, thermal transfer ribbons, billing rolls, and POS rolls. Precision Labels. Reliable Performance. Trusted Partnership. Based in Koregaon Bhima, Pune.",
    keywords: "Barcode Labels Manufacturer Pune, Thermal Transfer Ribbon Supplier Maharashtra, Wax Ribbon Supplier India, Billing Rolls Pune, POS Rolls Supplier, Barcode Labels Koregaon Bhima",
  });

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        {/* Background image + overlay */}
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Warehouse labeling operations" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#0F2747]/85" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F2747] via-[#0F2747]/60 to-[#0a1e3d]/90" />
        </div>

        {/* Floating animated particles */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          {particles.map(p => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-primary/30"
              style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
              animate={{
                y: [0, -30, 0],
                x: [0, 10, -10, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          {/* Glowing orbs */}
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl"
            style={{ right: "5%", top: "10%" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-blue-400/10 blur-3xl"
            style={{ left: "5%", bottom: "15%" }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>

        {/* Floating label card animation (right side, desktop) */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-[2] pointer-events-none">
          {[
            { label: "Barcode Label", spec: "100×50mm • Code128 • Grade A" },
            { label: "Wax Ribbon", spec: "110mm×300m • All Printers" },
            { label: "POS Roll", spec: "80mm×80m • Thermal" },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 w-52"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.3, duration: 0.7 }}
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              >
                <div className="text-xs text-primary font-bold uppercase tracking-wider mb-1">{card.label}</div>
                <div className="text-white text-sm font-medium">{card.spec}</div>
                <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.5 + i * 0.3, duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Hero content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-24">
          <div className="max-w-3xl">
            {/* Company name badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold mb-6"
            >
              <motion.span
                className="h-2 w-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-bold text-primary">Inside Out Packaging Industries</span>
              <span className="text-white/60">·</span>
              <span>Pune, Maharashtra</span>
            </motion.div>

            {/* Main headline — word by word reveal */}
            <div className="mb-6">
              {["Precision Labels.", "Reliable Performance.", "Trusted Partnership."].map((line, li) => (
                <motion.div
                  key={li}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + li * 0.2 }}
                >
                  <span
                    className={`block text-4xl md:text-6xl font-extrabold leading-tight tracking-tight ${
                      li === 1 ? "text-primary" : "text-white"
                    }`}
                  >
                    {line}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Cycling industry word */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="text-slate-300 text-lg md:text-xl">Precision solutions for</span>
              <div className="relative overflow-hidden h-8 w-36">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={heroWordIndex}
                    initial={{ y: 32, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -32, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute text-primary font-bold text-lg md:text-xl whitespace-nowrap"
                  >
                    {heroWords[heroWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="text-base md:text-lg text-slate-300 mb-10 max-w-2xl leading-relaxed"
            >
              High-Quality Barcode Labels, Thermal Transfer Ribbons &amp; Identification Solutions for Manufacturing, Logistics, Retail and Industrial Applications. Every roll quality-checked and scan-tested before it leaves our facility.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/products" data-testid="link-hero-products">
                <Button size="lg" className="h-14 px-8 text-base font-semibold w-full sm:w-auto gap-2 shadow-lg shadow-primary/30">
                  Explore Products <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <a href="https://wa.me/918530658864" target="_blank" rel="noreferrer" data-testid="link-hero-whatsapp">
                <Button size="lg" className="h-14 px-8 text-base font-semibold bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto gap-2">
                  <MessageCircle className="h-5 w-5" /> WhatsApp Us
                </Button>
              </a>
              <Link href="/contact" data-testid="link-hero-quote">
                <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold bg-white/10 text-white border-white/25 hover:bg-white/20 w-full sm:w-auto backdrop-blur-sm">
                  Get Free Quote
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-extrabold text-[#0F2747] mb-2"
                  whileInView={{ scale: [0.8, 1.05, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Badge Strip ── */}
      <section className="bg-[#0F2747] py-5 overflow-hidden">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {[...trustBadges, ...trustBadges].map((badge, i) => (
            <div key={i} className="inline-flex items-center gap-2 text-slate-300 text-sm flex-shrink-0 px-4">
              <badge.icon className="h-4 w-4 text-primary flex-shrink-0" />
              <span>{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Product Categories ── */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-sm uppercase tracking-wider mb-4">Product Range</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2747] mb-4">Three Core Product Lines</h2>
              <p className="text-lg text-slate-600">Labels, ribbons, and rolls — every consumable your thermal printing operation requires, from one source.</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-slate-100 cursor-pointer"
              >
                <div className="relative h-52 overflow-hidden bg-slate-50 flex items-center justify-center p-4">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.gradient}`} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <cat.icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold bg-primary/10 text-primary px-2 py-1 rounded-full uppercase tracking-wider">{cat.count}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F2747] mb-2">{cat.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <Link href="/products" className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all">
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
                Inside Out Packaging Industries is a specialized manufacturer and supplier of thermal labels, thermal transfer ribbons, and POS rolls based in Koregaon Bhima, Pune. We serve production managers, operations heads, and supply chain teams who need dependable consumables — not excuses.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Under the leadership of <strong className="text-[#0F2747]">Er. Soham Sanjay Jain</strong>, our facility manufactures to tight tolerances with multi-stage quality verification. Whether you need 2,000 custom barcode labels or 50,000 POS rolls for a retail chain, we treat every order with the same technical rigour.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Substrate-to-ribbon matching advisory — free with every order",
                  "Custom die-cut sizes, core diameter, and wind direction",
                  "Fast dispatch via pan-India courier network",
                  "Compatible with all major thermal printer brands",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3 text-slate-700 font-medium"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    {item}
                  </motion.li>
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
                <div className="text-3xl font-extrabold text-primary mb-1">Grade A</div>
                <div className="text-sm font-medium text-slate-300">Barcode print quality verified on every batch before dispatch</div>
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
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group"
              >
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
            <p className="text-lg text-slate-600">The consumables our clients reorder most — because their operations depend on them never failing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.slice(0, 4).map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col bg-white"
                data-testid={`card-featured-${product.id}`}
              >
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
              <Button size="lg" className="h-12 px-10 text-base gap-2">
                View All 17 Products <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Industries Served ── */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <img src={logisticsImg} alt="Logistics shipping label application" className="rounded-2xl shadow-xl object-cover h-[480px] w-full" />
              <div className="absolute -bottom-6 -right-6 bg-[#0F2747] text-white p-6 rounded-xl shadow-xl hidden md:block max-w-[220px]">
                <Globe2 className="h-9 w-9 text-primary mb-3" />
                <h3 className="text-lg font-bold mb-1">Pan-India Delivery</h3>
                <p className="text-slate-400 text-sm">From Pune to every production line in India. Never let your operation wait for labels.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-sm uppercase tracking-wider mb-4">Industries</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2747] mb-4">Trusted Across 9 Industry Sectors</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Sub-zero cold chain, pharmaceutical clean rooms, automotive production lines, FMCG high-speed packaging — our products are specified for environments where standard labels fail.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {INDUSTRIES.slice(0, 8).map((ind, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-3 bg-white border border-slate-100 p-3 rounded-lg shadow-sm hover:border-primary/30 hover:shadow-md transition-all"
                  >
                    <Factory className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="font-medium text-sm text-slate-700">{ind}</span>
                  </motion.div>
                ))}
              </div>
              <Link href="/industries">
                <Button variant="outline" className="gap-2 border-[#0F2747] text-[#0F2747] hover:bg-[#0F2747] hover:text-white">
                  See All Industries <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
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
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center relative"
              >
                <motion.div
                  className="w-24 h-24 rounded-full bg-[#0F2747] text-white flex items-center justify-center mx-auto mb-6 text-3xl font-extrabold border-4 border-white shadow-lg z-10 relative"
                  whileInView={{ rotate: [0, 5, -5, 0] }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                >
                  {step.step}
                </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2747] mb-4">What Our Clients Say</h2>
            <p className="text-lg text-slate-600">Logistics providers, pharmaceutical manufacturers, and food processors — here's what they say about working with us.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 flex flex-col"
                data-testid={`card-testimonial-${i}`}
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed flex-1 mb-6 italic">"{t.text}"</p>
                <div className="border-t border-slate-100 pt-5">
                  <div className="font-bold text-[#0F2747]">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
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
            <p className="text-lg text-slate-600">Answers to what production managers and operations heads ask before their first order.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`border rounded-xl overflow-hidden transition-all duration-200 ${openFaq === i ? "border-primary shadow-sm" : "border-slate-200 hover:border-slate-300"}`}
                data-testid={`accordion-faq-${i}`}
              >
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
          {/* Animated ring */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/10"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
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
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
