import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { useSEO } from "@/hooks/use-seo";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS } from "@/data/constants";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Check, Filter, ChevronRight, Tag, Package2, ScanBarcode, Layers, Receipt } from "lucide-react";
import { Link } from "wouter";

const categoryMeta: Record<string, { color: string; icon: typeof Tag }> = {
  Labels: { color: "bg-blue-50 text-blue-700 border-blue-100", icon: Tag },
  Ribbons: { color: "bg-orange-50 text-orange-700 border-orange-100", icon: Package2 },
  Rolls: { color: "bg-green-50 text-green-700 border-green-100", icon: Package2 },
};

const categoryIcons = [
  { label: "Barcode Labels", filter: "Labels", icon: ScanBarcode },
  { label: "Synthetic Labels", filter: "Labels", icon: Tag },
  { label: "Thermal Ribbons", filter: "Ribbons", icon: Layers },
  { label: "Billing Rolls", filter: "Rolls", icon: Receipt },
  { label: "POS Rolls", filter: "Rolls", icon: Package2 },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

export default function Products() {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", ...Array.from(new Set(PRODUCTS.map(p => p.category)))];
  const filteredProducts = filter === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  useSEO({
    title: "Product Catalog — Barcode Labels, Thermal Ribbons & POS Rolls",
    description: "Browse our complete catalog: 10 label variants, 4 ribbon types, 3 POS roll formats. Manufactured for industrial thermal printing operations across India.",
    keywords: "Barcode Labels, Thermal Transfer Ribbons, Billing Rolls, POS Rolls, Wax Resin Ribbon, TSC Labels India",
  });

  return (
    <Layout>
      {/* Page Header */}
      <section className="page-hero pt-32 pb-20 text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px] translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
             <span className="site-eyebrow mb-5">
              17 Product Variants
            </span>
             <h1 className="text-5xl md:text-6xl font-extrabold tracking-[-.04em] mb-5">Product Catalog</h1>
             <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Industrial-grade thermal printing consumables — labels, ribbons, and rolls engineered to spec.
            </p>
          </motion.div>

          {/* Category summary pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            {[
              { label: "10 Label Variants", sub: "Paper, Synthetic, Specialty" },
              { label: "4 Ribbon Types", sub: "Wax · Wax-Resin · Resin" },
              { label: "3 Roll Formats", sub: "57mm · 79mm · 80mm" },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3 text-center">
                <div className="font-bold text-white">{item.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{item.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Icon Strip */}
      <section className="py-10 bg-[#fbfaf7] border-b border-[#e2e4df]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {categoryIcons.map((cat, i) => (
              <motion.button
                key={i}
                onClick={() => setFilter(cat.filter)}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="flex flex-col items-center gap-2.5 group"
                data-testid={`icon-category-${i}`}
              >
                <div className="h-16 w-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-colors duration-200">
                  <cat.icon className="h-7 w-7 text-[#0F2747] group-hover:text-primary transition-colors duration-200" />
                </div>
                <span className="text-xs font-semibold text-slate-600 group-hover:text-primary text-center max-w-[90px] leading-tight">
                  {cat.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products-grid" className="py-16 surface-grid min-h-screen">
        <div className="container mx-auto px-4 md:px-6">

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-12"
          >
            <div className="flex items-center gap-2 mr-2 text-slate-400 font-medium text-sm">
              <Filter className="h-4 w-4" /> Filter by:
            </div>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                data-testid={`filter-${cat.toLowerCase()}`}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  filter === cat
                    ? "bg-[#0F2747] text-white border-[#0F2747] shadow-md"
                    : "bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product) => {
                const meta = categoryMeta[product.category] ?? { color: "bg-slate-50 text-slate-600 border-slate-100", icon: Tag };
                return (
                  <motion.div
                    key={product.id}
                    variants={cardVariants}
                    layout
                     className="industrial-card rounded-2xl overflow-hidden flex flex-col group"
                    data-testid={`card-product-${product.id}`}
                  >
                    {/* Image area */}
                    <div className="aspect-[4/3] bg-white relative flex items-center justify-center overflow-hidden p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Category badge */}
                      <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full border ${meta.color}`}>
                        {product.category}
                      </span>
                      {/* Hover overlay CTA */}
                      <div className="absolute inset-0 bg-[#0F2747]/0 group-hover:bg-[#0F2747]/5 transition-colors duration-300" />
                    </div>

                    <div className="p-5 border-t border-slate-50 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-[#0F2747] mb-1.5 leading-snug">{product.name}</h3>
                      <p className="text-slate-500 text-sm mb-4 flex-1 leading-relaxed">{product.description}</p>

                      <ul className="space-y-1.5 mb-5">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                            <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className="w-full font-semibold group/btn gap-2"
                            data-testid={`button-enquire-${product.id}`}
                          >
                            Enquire Now
                            <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl p-0 overflow-hidden">
                          <div className="bg-[#0F2747] p-6 text-white">
                            <DialogTitle className="text-2xl">Enquire about {product.name}</DialogTitle>
                            <DialogDescription className="text-slate-300 mt-2">
                              Fill out the form below and our team will get back to you with pricing and details within 2–4 hours.
                            </DialogDescription>
                          </div>
                          <div className="p-6 max-h-[80vh] overflow-y-auto">
                            <InquiryForm defaultProduct={product.name} />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-slate-500">No products found for this category.</div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#0F2747]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Need a Custom Specification?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">Custom label size, adhesive grade, substrate material, core diameter — we manufacture to your exact printer's media spec.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="h-12 px-8 font-semibold">Get Custom Quote</Button>
            </Link>
            <a href="https://wa.me/918530658864" target="_blank" rel="noreferrer">
              <Button size="lg" className="h-12 px-8 font-semibold bg-green-500 hover:bg-green-600 text-white gap-2">
                WhatsApp Your Specs
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
