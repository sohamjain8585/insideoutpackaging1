import { Layout } from "@/components/layout/Layout";
import { useSEO } from "@/hooks/use-seo";
import { motion } from "framer-motion";

import img7 from "@assets/img7_1781094388916.png";
import img_rool from "@assets/img_rool_1781094388917.png";
import img14 from "@assets/img14_1781094388915.png";
import img10 from "@assets/img10_1781094388915.png";
import img18 from "@assets/img18_1781094388914.png";
import img5 from "@assets/img5_1781094388916.png";
import pos_rolls from "@assets/WhatsApp_Image_2026-01-09_at_11.00.09_AM_1781094388918.jpeg";
import promo from "@assets/ChatGPT_Image_Jun_2,_2026,_12_40_34_PM_1781094388917.png";

const images = [
  { src: img18, span: "col-span-1 md:col-span-2 row-span-2", alt: "Warehouse Operation" },
  { src: img7, span: "col-span-1 row-span-1", alt: "Barcode labels" },
  { src: img14, span: "col-span-1 row-span-1", alt: "Thermal Ribbons" },
  { src: promo, span: "col-span-1 md:col-span-2 row-span-1", alt: "Promo Graphic" },
  { src: img5, span: "col-span-1 md:col-span-2 row-span-2", alt: "Logistics Worker" },
  { src: img_rool, span: "col-span-1 row-span-1", alt: "Blank Labels" },
  { src: img10, span: "col-span-1 row-span-1", alt: "Wax Resin Ribbons" },
  { src: pos_rolls, span: "col-span-1 md:col-span-2 row-span-1", alt: "POS Rolls" },
];

export default function Gallery() {
  useSEO({
    title: "Gallery",
    description: "Visuals of our manufacturing facility, product lines, and industrial applications.",
  });

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-[#0F2747] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Gallery</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A closer look at our products and operations.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`${img.span} rounded-2xl overflow-hidden group relative bg-slate-100`}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#0F2747]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-lg px-4 text-center">{img.alt}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
