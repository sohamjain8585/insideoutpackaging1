import { Layout } from "@/components/layout/Layout";
import { useSEO } from "@/hooks/use-seo";
import { motion } from "framer-motion";

import warehouseImg from "@assets/img18_1781094388914.png";
import barcodeLabelsImg from "@assets/img7_1781094388916.png";
import ttrBlueImg from "@assets/img14_1781094388915.png";
import colorRibbonsImg from "@assets/img10_1781094388915.png";
import logisticsImg from "@assets/img5_1781094388916.png";
import posRollsImg from "@assets/WhatsApp_Image_2026-01-09_at_11.00.09_AM_1781094388918.jpeg";
import labelRollImg from "@assets/img_rool_1781094388917.png";

const productImages = [
  {
    src: barcodeLabelsImg,
    alt: "Barcode Label Rolls",
    caption: "Barcode Label Rolls",
    sub: "Direct Thermal & Thermal Transfer — all sizes",
    fit: "object-contain p-4",
    bg: "bg-white",
  },
  {
    src: labelRollImg,
    alt: "Direct Thermal Label Roll",
    caption: "Thermal Label Roll",
    sub: "Blank & pre-printed direct thermal labels",
    fit: "object-contain p-4",
    bg: "bg-white",
  },
  {
    src: posRollsImg,
    alt: "POS Printer with Thermal Billing Rolls",
    caption: "POS & Billing Rolls",
    sub: "57mm / 79mm / 80mm — EDC & POS terminals",
    fit: "object-contain p-4",
    bg: "bg-slate-50",
  },
];

const ribbonImages = [
  {
    src: ttrBlueImg,
    alt: "Thermal Transfer Ribbons — Blue Core",
    caption: "Standard Thermal Transfer Ribbons",
    sub: "Wax ribbons — 110mm × 300m, universal core",
    fit: "object-contain p-6",
    bg: "bg-white",
  },
  {
    src: colorRibbonsImg,
    alt: "Wax Resin Color Ribbons — Assorted",
    caption: "Wax Resin Ribbons",
    sub: "Wax-Resin & Resin — multiple widths and lengths",
    fit: "object-contain p-6",
    bg: "bg-white",
  },
];

const equipmentCards = [
  {
    category: "Thermal Label Printer",
    model: "TSC TTP-244 Plus",
    specs: ["203 DPI print resolution", "4 inch (104mm) print width", "Thermal Transfer & Direct Thermal", "USB + Serial + Parallel interface", "Compatible with Wax & Wax-Resin ribbons"],
    note: "Most widely used entry to mid-range thermal label printer in India — our labels are manufactured to its exact media spec.",
  },
  {
    category: "Thermal Label Printer",
    model: "Zebra ZD220 / ZD420",
    specs: ["203 DPI / 300 DPI options", "4 inch print width", "Thermal Transfer & Direct Thermal", "USB interface standard", "ZPL/EPL command language"],
    note: "Global industry standard for enterprise labeling — our labels match Zebra's media specification requirements for ZD series.",
  },
  {
    category: "Barcode Scanner",
    model: "1D Handheld Scanner",
    specs: ["Reads Code 128, EAN-13, EAN-8, Code 39", "USB or wireless (Bluetooth) interface", "300 scans per second decode speed", "IP42 dust and splash resistant", "Compatible: Honeywell 1250g, Symbol LS2208"],
    note: "All our barcode labels are tested for Grade A scan rate with standard 1D handheld scanners before production batch approval.",
  },
  {
    category: "Barcode Scanner",
    model: "2D Imager Scanner",
    specs: ["Reads QR Code, DataMatrix, PDF417", "Omnidirectional scan pattern", "USB + RS-232 interface", "Suitable for pharmaceutical serialization", "Compatible: Zebra DS2208, Honeywell Xenon"],
    note: "For pharma and e-commerce clients requiring 2D code scanning — our labels are GS1 DataMatrix compliant.",
  },
];

export default function Gallery() {
  useSEO({
    title: "Product Gallery — Labels, Ribbons & POS Rolls",
    description: "Gallery of barcode labels, thermal transfer ribbons, POS rolls, and compatible thermal printer equipment from Inside Out Packaging Industries, Pune.",
  });

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-[#0F2747] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary to-transparent" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Product Gallery</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A visual reference of our labels, ribbons, POS rolls, and compatible printing equipment.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 space-y-14">

          {/* Full-width warehouse hero */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-1 w-8 bg-primary rounded-full" />
              <h2 className="text-lg font-bold text-[#0F2747] uppercase tracking-widest">Operations</h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl relative group bg-slate-800"
            >
              <img
                src={warehouseImg}
                alt="Barcode-labeled warehouse storage facility"
                className="w-full h-80 md:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2747]/80 to-transparent flex items-end p-8">
                <div>
                  <div className="text-primary font-bold text-sm uppercase tracking-widest mb-1">Warehouse Labeling</div>
                  <div className="text-white font-bold text-2xl">Bin, Rack & Pallet Barcode Systems</div>
                  <div className="text-slate-300 text-sm mt-1">High-density storage operations rely on our scannable labels for every location, carton, and pallet.</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Labels row */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-1 w-8 bg-primary rounded-full" />
              <h2 className="text-lg font-bold text-[#0F2747] uppercase tracking-widest">Barcode Labels & Thermal Paper</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {productImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-2xl overflow-hidden shadow-md group relative border border-slate-100 ${img.bg}`}
                >
                  <div className="h-56 md:h-64 flex items-center justify-center overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className={`w-full h-full ${img.fit} group-hover:scale-105 transition-transform duration-500`}
                    />
                  </div>
                  <div className="px-5 py-4 bg-white border-t border-slate-100">
                    <div className="font-bold text-[#0F2747]">{img.caption}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{img.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ribbons row */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-1 w-8 bg-primary rounded-full" />
              <h2 className="text-lg font-bold text-[#0F2747] uppercase tracking-widest">Thermal Transfer Ribbons</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {ribbonImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-2xl overflow-hidden shadow-md group relative border border-slate-100 ${img.bg}`}
                >
                  <div className="h-64 md:h-72 flex items-center justify-center overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className={`w-full h-full ${img.fit} group-hover:scale-105 transition-transform duration-500`}
                    />
                  </div>
                  <div className="px-5 py-4 bg-white border-t border-slate-100">
                    <div className="font-bold text-[#0F2747]">{img.caption}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{img.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Logistics scene */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-1 w-8 bg-primary rounded-full" />
              <h2 className="text-lg font-bold text-[#0F2747] uppercase tracking-widest">In the Field</h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl relative group bg-slate-800"
            >
              <img
                src={logisticsImg}
                alt="Logistics worker applying barcode shipping label to parcel"
                className="w-full h-72 md:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2747]/80 to-transparent flex items-end p-8">
                <div>
                  <div className="text-primary font-bold text-sm uppercase tracking-widest mb-1">Shipping & Dispatch</div>
                  <div className="text-white font-bold text-2xl">Courier & E-Commerce Label Application</div>
                  <div className="text-slate-300 text-sm mt-1">High-tack shipping labels that survive multi-point handling, rain exposure, and automated scanning conveyors.</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Equipment Cards */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-1 w-8 bg-primary rounded-full" />
              <h2 className="text-lg font-bold text-[#0F2747] uppercase tracking-widest">Compatible Equipment</h2>
            </div>
            <p className="text-slate-500 text-sm mb-5 ml-11">Our labels and ribbons are manufactured to match the media specification of these widely used printers and scanners.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {equipmentCards.map((eq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  data-testid={`card-equipment-${i}`}
                >
                  <div className="bg-[#0F2747] px-6 py-4">
                    <div className="text-xs text-primary font-bold uppercase tracking-widest mb-1">{eq.category}</div>
                    <div className="text-white font-bold text-xl">{eq.model}</div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-1.5 mb-4">
                      {eq.specs.map((spec, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-primary/5 border border-primary/10 rounded-lg p-3 text-xs text-slate-600 italic">
                      {eq.note}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
