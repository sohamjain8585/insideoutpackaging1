import { Layout } from "@/components/layout/Layout";
import { useSEO } from "@/hooks/use-seo";
import { motion } from "framer-motion";
import { APPLICATIONS } from "@/data/constants";
import logisticsImg from "@assets/img5_1781094388916.png";
import warehouseImg from "@assets/img18_1781094388914.png";

const applicationsData = [
  {
    title: "Shipping & Dispatch Labels",
    description: "Ensure your packages reach their destination with high-contrast, smudge-proof shipping labels. Designed to withstand rough handling and varied weather conditions across global logistics networks.",
    image: logisticsImg,
  },
  {
    title: "Inventory & Asset Tracking",
    description: "Maintain perfect visibility of your warehouse stock and fixed assets. Our durable PET and PP labels adhere permanently to shelving, bins, and machinery, providing reliable scans year after year.",
    image: warehouseImg,
  },
  {
    title: "Product Identification",
    description: "Present your brand flawlessly. From crisp barcodes to vibrant custom product labels, our printing ensures compliance with retail standards while enhancing your packaging's aesthetic.",
    image: "@assets/img7_1781094388916.png",
  },
  {
    title: "Industrial Labelling",
    description: "Labels that survive the factory floor. Heat, chemicals, and abrasion are no match for our specialized resin ribbons and high-temperature synthetic labels.",
    image: "@assets/ChatGPT_Image_Jun_2,_2026,_12_40_34_PM_1781094388917.png",
  }
];

export default function Applications() {
  useSEO({
    title: "Use Cases & Applications",
    description: "Discover how Inside Out Packaging Industries' labels and ribbons are applied across shipping, inventory tracking, and industrial identification.",
  });

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-[#0F2747] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Applications & Use Cases</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Where precision meets real-world performance.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {applicationsData.map((app, i) => (
              <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 !== 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2"
                >
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-slate-100 relative">
                    <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 border border-black/5 rounded-2xl" />
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 !== 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 space-y-6"
                >
                  <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-sm uppercase tracking-wider">
                    Application 0{i + 1}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0F2747]">{app.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">{app.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
