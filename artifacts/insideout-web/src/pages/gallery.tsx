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

const images = [
  {
    src: img18,
    alt: "Warehouse Operations",
    caption: "Full-Scale Warehouse Operations",
    fit: "object-cover",
    bg: "bg-slate-800",
  },
  {
    src: img7,
    alt: "Barcode Label Rolls",
    caption: "Barcode Label Rolls",
    fit: "object-contain",
    bg: "bg-white",
  },
  {
    src: img14,
    alt: "Thermal Transfer Ribbons",
    caption: "Thermal Transfer Ribbons",
    fit: "object-contain",
    bg: "bg-white",
  },
  {
    src: img5,
    alt: "Logistics Shipping Label Application",
    caption: "Shipping Label Application",
    fit: "object-cover",
    bg: "bg-slate-800",
  },
  {
    src: img_rool,
    alt: "Blank Label Roll",
    caption: "Direct Thermal Label Roll",
    fit: "object-contain",
    bg: "bg-white",
  },
  {
    src: img10,
    alt: "Wax Resin Ribbons",
    caption: "Color Wax Resin Ribbons",
    fit: "object-contain",
    bg: "bg-white",
  },
  {
    src: pos_rolls,
    alt: "POS Thermal Printer with Billing Rolls",
    caption: "POS & Billing Roll Solutions",
    fit: "object-contain",
    bg: "bg-slate-50",
  },
];

const CARD_HEIGHT = "h-64 md:h-72";

export default function Gallery() {
  useSEO({
    title: "Gallery",
    description:
      "Visuals of our manufacturing facility, product lines, and industrial applications.",
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

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero image full-width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl mb-6 group relative bg-slate-800"
          >
            <img
              src={img18}
              alt="Warehouse Operations"
              className="w-full h-80 md:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-[#0F2747]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-bold text-xl">
                Full-Scale Warehouse Operations
              </span>
            </div>
          </motion.div>

          {/* 3-column product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {[img7, img14, img10].map((src, i) => {
              const labels = [
                "Barcode Label Rolls",
                "Thermal Transfer Ribbons",
                "Color Wax Resin Ribbons",
              ];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-2xl overflow-hidden shadow-md group relative bg-white border border-slate-100 ${CARD_HEIGHT}`}
                >
                  <img
                    src={src}
                    alt={labels[i]}
                    className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0F2747]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-base px-4 text-center">
                      {labels[i]}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* 2-column row: logistics worker + POS rolls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[
              { src: img5, alt: "Shipping Label Application", fit: "object-cover object-center", bg: "bg-slate-800" },
              { src: pos_rolls, alt: "POS & Billing Roll Solutions", fit: "object-contain p-6", bg: "bg-slate-50 border border-slate-100" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl overflow-hidden shadow-md group relative ${item.bg} h-64 md:h-80`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`w-full h-full ${item.fit} group-hover:scale-105 transition-transform duration-500`}
                />
                <div className="absolute inset-0 bg-[#0F2747]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-base px-4 text-center">
                    {item.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Blank label roll — full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-md group relative bg-white border border-slate-100 h-64 md:h-72"
          >
            <img
              src={img_rool}
              alt="Direct Thermal Label Roll"
              className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[#0F2747]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-bold text-xl">
                Direct Thermal Label Roll
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
