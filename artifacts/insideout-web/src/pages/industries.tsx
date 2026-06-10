import { Layout } from "@/components/layout/Layout";
import { useSEO } from "@/hooks/use-seo";
import { motion } from "framer-motion";
import { INDUSTRIES } from "@/data/constants";
import { Building2, Car, ShoppingCart, PackageOpen, Store, Plane, HeartPulse, HardHat, Box } from "lucide-react";

const industryDetails = [
  { name: "Manufacturing", icon: Building2, desc: "High-durability labels for work-in-progress tracking and asset management." },
  { name: "Automotive", icon: Car, desc: "Heat and chemical resistant labels for parts identification under the hood." },
  { name: "FMCG", icon: ShoppingCart, desc: "High-volume, vibrant product labels and batch tracking solutions." },
  { name: "Warehousing", icon: PackageOpen, desc: "Retro-reflective bin labels and scannable pallet tags for massive facilities." },
  { name: "Retail", icon: Store, desc: "Clear, crisp POS billing rolls and shelf pricing labels." },
  { name: "Logistics & E-Commerce", icon: Plane, desc: "Tear-resistant shipping labels that survive the courier network." },
  { name: "Pharmaceutical", icon: HeartPulse, desc: "Sterile, tamper-evident void labels for compliance and safety." },
  { name: "Food Processing", icon: HardHat, desc: "Cold-storage compatible adhesives for freezer environments." },
  { name: "Packaging Industry", icon: Box, desc: "Primary and secondary packaging identification solutions." },
];

export default function Industries() {
  useSEO({
    title: "Industries Served",
    description: "We provide specialized labeling and packaging solutions for Manufacturing, Logistics, FMCG, Automotive, and Pharmaceutical industries.",
  });

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-[#0F2747] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Industries We Serve</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Tailored tracking and identification solutions for specialized sectors.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryDetails.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <ind.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F2747] mb-3">{ind.name}</h3>
                <p className="text-slate-600 leading-relaxed">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
