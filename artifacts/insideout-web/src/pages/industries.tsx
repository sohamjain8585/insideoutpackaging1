import { Layout } from "@/components/layout/Layout";
import { useSEO } from "@/hooks/use-seo";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Building2, Car, ShoppingCart, PackageOpen, Store,
  Plane, HeartPulse, Utensils, Box, ArrowRight, CheckCircle2
} from "lucide-react";

const industryDetails = [
  {
    name: "Manufacturing",
    icon: Building2,
    color: "bg-blue-50 text-blue-700",
    desc: "In high-volume production environments, label failure causes line stoppages and costly rework. Our industrial labels are built for conveyor speeds, robotic applicators, and extreme temperature zones.",
    products: ["Asset Labels", "Barcode Labels", "PET Labels", "Wax Resin Ribbons"],
    useCases: ["Work-in-progress tracking", "Parts identification", "Equipment asset tags", "Finished goods labeling"],
  },
  {
    name: "Automotive",
    icon: Car,
    color: "bg-slate-100 text-slate-700",
    desc: "Under-the-hood environments demand labels that resist engine heat, brake fluid, and lubricants. Our resin ribbons and polyester substrates are tested for automotive-grade compliance.",
    products: ["PET Labels", "Resin Ribbons", "Void Labels", "Asset Labels"],
    useCases: ["Parts & component ID", "VIN tracking", "Service & warranty labels", "Hazmat identification"],
  },
  {
    name: "FMCG",
    icon: ShoppingCart,
    color: "bg-orange-50 text-orange-700",
    desc: "High-volume, brand-critical labeling for consumer goods. Speed, color accuracy, and shelf durability are non-negotiable in FMCG supply chains.",
    products: ["Semi Gloss Labels", "Product Labels", "Thermal Labels", "Wax Ribbons"],
    useCases: ["Product identification", "Batch & expiry printing", "Price marking", "Promotional labels"],
  },
  {
    name: "Warehousing & Logistics",
    icon: PackageOpen,
    color: "bg-yellow-50 text-yellow-700",
    desc: "From inbound receiving to last-mile dispatch, every scan matters. Our labels are engineered for retro-reflective bin tagging, pallet identification, and courier-proof shipping.",
    products: ["Shipping Labels", "Barcode Labels", "Direct Thermal Labels", "Thermal Transfer Ribbons"],
    useCases: ["Pallet & bin labels", "Inbound/outbound tracking", "Rack location tags", "Courier shipping labels"],
  },
  {
    name: "Retail",
    icon: Store,
    color: "bg-green-50 text-green-700",
    desc: "Speed at the checkout and clarity on the shelf defines the retail experience. Our POS billing rolls and shelf-edge labels deliver consistent print quality across millions of transactions.",
    products: ["POS Rolls", "Billing Rolls", "Thermal Paper Rolls", "Product Labels"],
    useCases: ["Point-of-sale receipts", "Shelf price labels", "EAN barcode stickers", "Discount & promotion tags"],
  },
  {
    name: "E-Commerce",
    icon: Plane,
    color: "bg-purple-50 text-purple-700",
    desc: "E-commerce fulfillment runs at machine speed. Our direct thermal shipping labels and high-tack adhesives ensure every parcel is tracked from pick to delivery.",
    products: ["Shipping Labels", "Direct Thermal Labels", "Thermal Transfer Ribbons", "Barcode Labels"],
    useCases: ["AWB & shipping labels", "Returns & exchange labels", "Fragile & COD stickers", "QR code labels"],
  },
  {
    name: "Pharmaceutical",
    icon: HeartPulse,
    color: "bg-red-50 text-red-700",
    desc: "Compliance is non-negotiable in pharma. Our tamper-evident void labels, sterile packaging substrates, and smudge-proof resin ribbons meet stringent regulatory requirements.",
    products: ["Void Labels", "PET Labels", "Resin Ribbons", "Barcode Labels"],
    useCases: ["Drug & vial labeling", "Batch traceability", "Tamper-evident seals", "Cold-chain compatible labels"],
  },
  {
    name: "Food Processing",
    icon: Utensils,
    color: "bg-lime-50 text-lime-700",
    desc: "Food-safe adhesives, freezer-compatible substrates, and water-resistant coatings are the standard for our food processing label range.",
    products: ["Direct Thermal Labels", "PP Labels", "Wax Ribbons", "Thermal Paper Rolls"],
    useCases: ["Batch & expiry date printing", "Cold storage bin labels", "Allergen & nutrition tags", "QC inspection labels"],
  },
  {
    name: "Packaging Industry",
    icon: Box,
    color: "bg-amber-50 text-amber-700",
    desc: "Primary and secondary packaging lines require labels that adhere to films, foils, and corrugated materials at production speeds. Our solutions cover every substrate.",
    products: ["PP Labels", "PET Labels", "Wax Resin Ribbons", "Barcode Labels"],
    useCases: ["Primary pack identification", "Carton & case coding", "Logistics barcodes", "Brand compliance labels"],
  },
];

export default function Industries() {
  useSEO({
    title: "Industries Served",
    description: "We provide specialized labeling and packaging solutions for Manufacturing, Logistics, FMCG, Automotive, and Pharmaceutical industries across India.",
    keywords: "Barcode Labels Manufacturer India, Pharmaceutical Labels, FMCG Barcode Labels, Automotive Labels, Warehouse Labels Maharashtra"
  });

  return (
    <Layout>
      {/* Header */}
      <section className="page-hero pt-32 pb-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/20 to-transparent opacity-50" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
             <span className="site-eyebrow mb-5">
              9 Industry Verticals
            </span>
             <h1 className="text-5xl md:text-6xl font-extrabold tracking-[-.04em] mb-5">Industries We Serve</h1>
             <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Precision labeling solutions engineered for every sector — from factory floor to pharmacy shelf.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {industryDetails.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                 className={`industrial-card grid grid-cols-1 lg:grid-cols-5 gap-8 items-start rounded-2xl overflow-hidden ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Left/Header Panel */}
                  <div className={`lg:col-span-2 p-8 flex flex-col justify-center h-full bg-[#111f36] text-white`}>
                  <div className={`h-14 w-14 rounded-xl flex items-center justify-center mb-6 bg-white/10`}>
                    <ind.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{ind.name}</h2>
                  <p className="text-slate-300 leading-relaxed">{ind.desc}</p>
                </div>

                {/* Right Panel — Use Cases + Products */}
                <div className="lg:col-span-3 p-8 bg-white grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Key Use Cases</h3>
                    <ul className="space-y-3">
                      {ind.useCases.map((uc, j) => (
                        <li key={j} className="flex items-start gap-3 text-slate-700">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{uc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Recommended Products</h3>
                    <div className="flex flex-wrap gap-2">
                      {ind.products.map((p, j) => (
                        <span key={j} className="bg-slate-100 text-[#0F2747] text-sm font-medium px-3 py-1.5 rounded-lg">
                          {p}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Link href="/contact">
                        <Button size="sm" className="gap-2">
                          Get {ind.name} Quote <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
       <section className="py-20 bg-[#111f36] text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Don't See Your Industry?</h2>
          <p className="text-slate-300 text-lg mb-8">
            We manufacture custom label solutions for virtually every sector. Share your requirements and our engineers will specify the right product for your exact environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="h-12 px-8 font-bold">Request Custom Solution</Button>
            </Link>
            <a href="tel:8530658864">
              <Button size="lg" variant="outline" className="h-12 px-8 font-bold bg-transparent border-white/30 text-white hover:bg-white hover:text-[#0F2747]">
                Call +91 8530658864
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
