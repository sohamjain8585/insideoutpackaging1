import { Layout } from "@/components/layout/Layout";
import { useSEO } from "@/hooks/use-seo";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Target, Eye, Shield, Users, Truck, ScanBarcode, BadgeCheck, FlaskConical } from "lucide-react";
import warehouseImg from "@assets/img18_1781094388914.png";
import colorRibbonsImg from "@assets/img10_1781094388915.png";

export default function About() {
  useSEO({
    title: "About Us",
    description: "Inside Out Packaging Industries — manufacturer and supplier of barcode labels, thermal transfer ribbons, and POS rolls in Koregaon Bhima, Pune, Maharashtra.",
    keywords: "Inside Out Packaging Industries, Barcode Labels Manufacturer Pune, Thermal Ribbon Supplier Maharashtra, Koregaon Bhima"
  });

  return (
    <Layout>
      {/* Page Header */}
      <section className="page-hero pt-32 pb-20 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
             <span className="site-eyebrow mb-5">
              Koregaon Bhima, Pune
            </span>
             <h1 className="text-5xl md:text-6xl font-extrabold tracking-[-.04em] mb-5">Our Story</h1>
             <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Building the foundations of modern supply chains through precision printing and unyielding quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={warehouseImg}
                  alt="Inside Out Packaging Industries facility"
                  className="w-full h-[420px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#0F2747]/10 pointer-events-none rounded-2xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl hidden md:block max-w-[200px]">
                <div className="text-3xl font-extrabold mb-1">Grade A</div>
                <div className="font-medium text-white/90 text-sm">GS1 barcode quality standard — every batch, every order</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-sm uppercase tracking-wider">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2747]">
                One Partner for All Your Barcode Labeling Needs
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At Inside Out Packaging Industries, we manufacture high-quality barcode labels and provide complete barcode labeling solutions that help businesses track, identify and manage their products with accuracy.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Serving retail and FMCG, logistics and warehousing, manufacturing, and healthcare and pharma, we understand that every industry has its own labeling needs. That is why we offer a full range of products and services under one roof: custom barcode label printing, barcode printers and ribbons, and scanners and software. Each part works together so your system runs smoothly from the first label to the final scan.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We focus on precision printing, durable materials and consistent quality, so every label scans right the first time. Whether you need a small custom order or large-volume production, our team delivers on time, at competitive prices, with support you can rely on.
              </p>
              <div className="space-y-4 pt-2">
                <p className="font-semibold text-[#0F2747]">
                  Inside Out Packaging Industries: one partner for all your barcode labeling needs.
                </p>
                <Link href="/contact">
                  <Button className="h-12 px-6 rounded-xl font-semibold shadow-sm transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
                    Contact Us for a Free Quote
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
               className="industrial-card bg-[#f5f4ef] p-10 rounded-2xl relative overflow-hidden">
              <Target className="h-14 w-14 text-primary mb-6 opacity-80" />
              <h3 className="text-2xl font-bold text-[#0F2747] mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To help businesses label, track and ship with confidence by manufacturing precise, durable barcode labels and supplying the printers, ribbons and scanners that go with them, delivered on time and backed by responsive support.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
               className="bg-[#111f36] text-white p-10 rounded-2xl relative overflow-hidden shadow-xl">
              <Eye className="h-14 w-14 text-primary mb-6 opacity-80" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                To become a dependable, long-term labeling partner for businesses across retail, logistics, manufacturing and healthcare, where every label we make helps our customers work with greater accuracy and less downtime.
              </p>
            </motion.div>
          </div>

          {/* Manufacturing Excellence */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="order-2 lg:order-1 space-y-8">
              <div>
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-sm uppercase tracking-wider mb-4">Our Standards</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F2747] mb-4">
                  Manufacturing Standards That Matter
                </h2>
                <p className="text-lg text-slate-600">
                  The technical pillars that make us a preferred supply partner for industrial operations teams.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Multi-Stage Quality Verification",
                    desc: "Adhesive peel test, barcode grade measurement (GS1 standards), dimensional tolerance check, and roll end count — performed on every batch before dispatch.",
                  },
                  {
                    icon: FlaskConical,
                    title: "Substrate-Ribbon Technical Matching",
                    desc: "We advise on the correct ribbon formulation — Wax, Wax-Resin, or Resin — for your specific label substrate and operating environment. No guesswork, no wastage.",
                  },
                  {
                    icon: Truck,
                    title: "Pan-India Dispatch Network",
                    desc: "Orders are packed and dispatched through our established pan-India courier network, from Pune to every production center across Maharashtra and beyond.",
                  },
                  {
                    icon: Users,
                    title: "Technical Advisory Included",
                    desc: "Material selection, printer compatibility checks, and specification review are provided as standard with every inquiry — not an upsell.",
                  },
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0F2747] mb-1">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-slate-50 p-6 flex items-center justify-center h-[460px]">
                <img
                  src={colorRibbonsImg}
                  alt="Color coded wax resin ribbons manufactured by Inside Out Packaging Industries"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* Capabilities Grid */}
           <div className="bg-[#111f36] rounded-2xl p-10 text-white shadow-[0_18px_48px_rgba(17,31,54,.16)]">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">What We Manufacture</h2>
              <p className="text-slate-300">A complete range of thermal printing consumables for every industrial requirement.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: ScanBarcode,
                  title: "Barcode & Thermal Labels",
                  items: ["Barcode Labels", "Thermal Labels", "Direct Thermal Labels", "Semi Gloss Labels", "PP (Polypropylene) Labels", "PET (Polyester) Labels", "Asset Labels", "Void / Security Labels", "Shipping Labels", "Product Labels"],
                },
                {
                  icon: BadgeCheck,
                  title: "Thermal Transfer Ribbons",
                  items: ["Standard Thermal Transfer Ribbon", "Wax Ribbon (Economy Grade)", "Wax-Resin Ribbon (Enhanced Durability)", "Full Resin Ribbon (Maximum Durability)"],
                },
                {
                  icon: FlaskConical,
                  title: "POS & Billing Rolls",
                  items: ["Billing Rolls (Cash Register)", "Thermal Paper Rolls (EDC/POS)", "POS Rolls (All Standard Widths)", "Available: 57mm, 79mm, 80mm widths", "End-of-roll sensing options"],
                },
              ].map((col, i) => (
                <div key={i}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <col.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">{col.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {col.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
