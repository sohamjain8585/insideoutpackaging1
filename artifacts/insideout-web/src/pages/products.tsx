import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { useSEO } from "@/hooks/use-seo";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/data/constants";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Check, Filter } from "lucide-react";

export default function Products() {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  const filteredProducts = filter === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  useSEO({
    title: "Our Products",
    description: "Browse our complete catalog of industrial barcode labels, thermal ribbons, billing rolls, and POS supplies.",
    keywords: "Barcode Labels, Thermal Transfer Ribbons, Billing Rolls, POS Rolls, Wax Resin Ribbon"
  });

  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-[#0F2747] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Product Catalog</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Industrial-grade tracking and packaging solutions engineered for performance.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <div className="flex items-center gap-2 mr-4 text-slate-500 font-medium">
              <Filter className="h-4 w-4" /> Filter:
            </div>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  filter === cat 
                    ? "bg-primary text-white shadow-md" 
                    : "bg-white text-slate-600 border border-slate-200 hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[4/3] bg-white relative p-4 flex items-center justify-center overflow-hidden group">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-100 text-[#0F2747] text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {product.category}
                  </div>
                </div>
                
                <div className="p-6 border-t border-slate-100 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-[#0F2747] mb-2">{product.name}</h3>
                  <p className="text-slate-600 text-sm mb-6 flex-1">{product.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full font-bold" data-testid={`button-enquire-${product.id}`}>
                        Enquire Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl p-0 overflow-hidden">
                      <div className="bg-[#0F2747] p-6 text-white">
                        <DialogTitle className="text-2xl">Enquire about {product.name}</DialogTitle>
                        <DialogDescription className="text-slate-300 mt-2">
                          Fill out the form below and our team will get back to you with pricing and details.
                        </DialogDescription>
                      </div>
                      <div className="p-6 max-h-[80vh] overflow-y-auto">
                        <InquiryForm defaultProduct={product.name} />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              No products found for this category.
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
