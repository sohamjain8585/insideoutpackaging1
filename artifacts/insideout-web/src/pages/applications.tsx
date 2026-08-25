import { Layout } from "@/components/layout/Layout";
import { useSEO } from "@/hooks/use-seo";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Cpu, ScanLine, ArrowRight, Zap } from "lucide-react";

import barcodeLabelsImg from "@assets/img7_1781094388916.png";
import warehouseImg from "@assets/img18_1781094388914.png";
import logisticsImg from "@assets/img5_1781094388916.png";
import labelRollImg from "@assets/img_rool_1781094388917.png";
import ribbonsImg from "@assets/img14_1781094388915.png";
import colorRibbonsImg from "@assets/img10_1781094388915.png";
import posRollsImg from "@assets/WhatsApp_Image_2026-01-09_at_11.00.09_AM_1781094388918.jpeg";

const applicationsData = [
  {
    tag: "Retail & Product Labels",
    title: "Retail Shelf & Product Price Labeling",
    image: barcodeLabelsImg,
    imageStyle: "object-contain p-8",
    imageBg: "bg-white",
    accent: "from-orange-500 to-amber-400",
    details: [
      "EAN-13 and EAN-8 barcodes on direct thermal or semi-gloss labels for MRP and product marking",
      "Shelf-edge price labels with permanent adhesive for wooden, metal, and plastic gondola surfaces",
      "QR code labels for product pages, traceability, and scan-to-shop retail systems",
      "Label widths from 20mm to 100mm; standard cores of 25mm or 38mm for shelf-label printers",
    ],
    products: ["Barcode Labels", "Semi Gloss Labels", "Direct Thermal Labels"],
  },
  {
    tag: "Warehouse Inventory Labels",
    title: "Warehouse Bin, Rack & Inventory Labeling",
    image: warehouseImg,
    imageStyle: "object-cover object-center",
    imageBg: "bg-slate-900",
    accent: "from-blue-600 to-sky-400",
    details: [
      "Bin location barcodes in Code 128 or GS1-128 format for WMS (warehouse management system) scanning",
      "Retro-reflective labels for high-bay racking — scanned by long-range readers at 5–10 metre distance",
      "Pallet ID labels and carton barcodes for inbound receipt, put-away, pick, and dispatch operations",
      "Oversized labels (100mm × 150mm and larger) for floor markings and dock door identification",
    ],
    products: ["Barcode Labels", "Shipping Labels", "Asset Labels"],
  },
  {
    tag: "E-Commerce Dispatch Labels",
    title: "E-Commerce & Courier Dispatch Labels",
    image: logisticsImg,
    imageStyle: "object-cover object-center",
    imageBg: "bg-slate-800",
    accent: "from-emerald-500 to-teal-400",
    details: [
      "AWB (air waybill) and courier labels in 100mm × 150mm direct thermal format for Delhivery, Blue Dart, DTDC, Ekart",
      "High-tack adhesive that bonds to polybagged parcels, corrugated cartons, and padded envelopes without peeling",
      "Thermal transfer shipping labels for smudge-proof print surviving multi-point scanning conveyors",
      "Pre-printed address label books and fanfold packs for high-volume fulfilment centre operations",
    ],
    products: ["Shipping Labels", "Direct Thermal Labels", "Thermal Transfer Ribbons"],
  },
  {
    tag: "Pharma Compliance Labels",
    title: "Pharmaceutical Batch & Compliance Labeling",
    image: labelRollImg,
    imageStyle: "object-contain p-8",
    imageBg: "bg-white",
    accent: "from-violet-600 to-purple-400",
    details: [
      "Batch number, manufacturing date, expiry date, and serial number labels for drug vials, blister packs, outer cartons",
      "Tamper-evident void labels that display a 'VOID' pattern on the substrate when removal is attempted",
      "Resin ribbon printing on PET (polyester) labels for chemical resistance through sterilization cycles",
      "GS1 DataMatrix and 2D barcodes for track-and-trace compliance under Schedule M serialization requirements",
    ],
    products: ["Void Labels", "PET Labels", "Resin Ribbons", "Barcode Labels"],
  },
  {
    tag: "POS Billing Rolls",
    title: "POS Billing & Receipt Printing",
    image: posRollsImg,
    imageStyle: "object-contain p-6",
    imageBg: "bg-slate-50",
    accent: "from-rose-500 to-pink-400",
    details: [
      "Thermal paper rolls in 57mm, 79mm, and 80mm widths for cash registers, EDC/POS terminals, billing counters",
      "BPA-free thermal coating options for retail, hospitality, and healthcare billing environments",
      "End-of-roll red warning sensor strip to alert cashiers before paper runout mid-transaction",
      "Precision-cut rolls packed dust-free — guaranteed to run without jams in Epson, Citizen, TVS, Posiflex machines",
    ],
    products: ["POS Rolls", "Thermal Paper Rolls", "Billing Rolls"],
  },
  {
    tag: "Thermal Transfer Ribbons",
    title: "Thermal Transfer Ribbon Printing",
    image: ribbonsImg,
    imageStyle: "object-contain p-8",
    imageBg: "bg-white",
    accent: "from-cyan-500 to-blue-400",
    details: [
      "Wax ribbons for high-speed printing on standard paper labels — cost-efficient at speeds up to 300mm/sec",
      "Wax-Resin ribbons for smudge, scratch, and mild chemical resistance on coated paper and semi-synthetic substrates",
      "Full Resin ribbons for maximum durability on PP (polypropylene), PET (polyester), and synthetic label materials",
      "Available in widths from 25mm to 220mm; lengths of 300m, 450m, and 600m to match your printer's specifications",
    ],
    products: ["Wax Ribbon", "Wax Resin Ribbon", "Resin Ribbon", "Thermal Transfer Ribbon"],
  },
  {
    tag: "Manufacturing Asset Tracking",
    title: "Manufacturing Floor & Asset Tracking",
    image: colorRibbonsImg,
    imageStyle: "object-contain p-6",
    imageBg: "bg-white",
    accent: "from-amber-500 to-orange-400",
    details: [
      "Work-in-progress (WIP) traveler labels that track assembly stages, operator IDs, and batch numbers on production lines",
      "Metallic and polyester asset labels with permanent aggressive adhesive for tagging fixed equipment and IT assets",
      "Color-coded ribbon printing for visual management — different colors to distinguish product families or hazard zones",
      "Chemical and heat-resistant labels for under-bonnet automotive parts, PCB assemblies, and metal component ID",
    ],
    products: ["Asset Labels", "PET Labels", "Resin Ribbons", "Wax Resin Ribbons"],
  },
];

const compatiblePrinters = [
  {
    brand: "TSC",
    model: "TTP-244 Plus",
    color: "bg-orange-50 border-orange-100",
    headerColor: "bg-orange-500",
    specs: [
      "Print Method: Thermal Transfer / Direct Thermal",
      "Print Resolution: 203 DPI (8 dots/mm)",
      "Print Speed: Up to 127mm/sec",
      "Print Width: 104mm (4 inches)",
      "Media Width: 25.4mm to 118mm",
      "Interface: USB, Serial RS-232, Parallel",
      "Compatible Ribbons: Wax, Wax-Resin (25mm–110mm width)",
    ],
  },
  {
    brand: "Zebra",
    model: "ZD220 / ZD420",
    color: "bg-blue-50 border-blue-100",
    headerColor: "bg-blue-600",
    specs: [
      "Print Method: Thermal Transfer / Direct Thermal",
      "Print Resolution: 203 DPI",
      "Print Speed: Up to 152mm/sec",
      "Print Width: 104mm",
      "Media Width: 19mm to 108mm",
      "Interface: USB 2.0",
      "Compatible Ribbons: All standard Wax / Wax-Resin ribbons",
    ],
  },
  {
    brand: "Honeywell",
    model: "PC42t Plus",
    color: "bg-violet-50 border-violet-100",
    headerColor: "bg-violet-600",
    specs: [
      "Print Method: Thermal Transfer / Direct Thermal",
      "Print Resolution: 203 DPI",
      "Print Speed: Up to 101.6mm/sec",
      "Print Width: 108mm",
      "Media Width: 19.05mm to 114.3mm",
      "Interface: USB, Ethernet, Wi-Fi optional",
      "Compatible Ribbons: Wax, Wax-Resin (standard widths)",
    ],
  },
  {
    brand: "Argox / Godex",
    model: "OS-214 Plus / G500",
    color: "bg-emerald-50 border-emerald-100",
    headerColor: "bg-emerald-600",
    specs: [
      "Print Method: Thermal Transfer / Direct Thermal",
      "Print Resolution: 203 DPI",
      "Print Speed: Up to 127mm/sec",
      "Print Width: 104mm",
      "Media Width: 20mm to 112mm",
      "Interface: USB, RS-232, Ethernet",
      "Compatible Ribbons: All standard widths available",
    ],
  },
];

const scannerTypes = [
  {
    type: "1D Barcode Scanners",
    examples: "Honeywell Voyager 1250g, Symbol LS2208, Zebra DS2208",
    reads: "Code 39, Code 128, EAN-13, EAN-8, UPC-A, ITF-14",
    use: "Retail checkout, warehouse receiving, asset audit",
    color: "border-orange-400/30 bg-orange-400/5",
    dot: "bg-orange-400",
  },
  {
    type: "2D Barcode Scanners",
    examples: "Zebra DS9308, Honeywell Xenon 1950, Datalogic Gryphon",
    reads: "QR Code, GS1 DataMatrix, PDF417, Aztec Code",
    use: "Pharmaceutical serialization, e-commerce returns, document management",
    color: "border-blue-400/30 bg-blue-400/5",
    dot: "bg-blue-400",
  },
  {
    type: "Long-Range / Forklift Scanners",
    examples: "Zebra DS9908, Honeywell 8680i, Datalogic PowerScan",
    reads: "1D and 2D codes at 5–15 metre range",
    use: "High-bay warehouse racking, retro-reflective bin labels",
    color: "border-emerald-400/30 bg-emerald-400/5",
    dot: "bg-emerald-400",
  },
];

function ApplicationCard({ app, i }: { app: typeof applicationsData[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const isEven = i % 2 === 0;

  return (
    <div ref={ref} className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}>
      {/* Image side */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full lg:w-5/12"
      >
        <div className="industrial-card relative rounded-2xl overflow-hidden group">
          {/* accent gradient top border */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${app.accent} z-10`} />
          <div className={`h-72 md:h-80 ${app.imageBg} relative overflow-hidden`}>
            <motion.img
              src={app.image}
              alt={app.title}
              style={{ y }}
              className={`w-full h-full ${app.imageStyle} transition-transform duration-700 group-hover:scale-105`}
            />
            {/* subtle shimmer overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-black/10 pointer-events-none" />
          </div>
          {/* Tag pill */}
          <div className={`absolute top-4 ${isEven ? "right-4" : "left-4"} bg-gradient-to-r ${app.accent} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
            {app.tag}
          </div>
        </div>
      </motion.div>

      {/* Text side */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        className="w-full lg:w-7/12 space-y-5"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#0F2747] leading-snug">{app.title}</h2>
        <ul className="space-y-3">
          {app.details.map((detail, j) => (
            <motion.li
              key={j}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: j * 0.08 + 0.2 }}
              className="flex items-start gap-3 text-slate-600"
            >
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>{detail}</span>
            </motion.li>
          ))}
        </ul>
        <div className="pt-1">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Related Products</p>
          <div className="flex flex-wrap gap-2">
            {app.products.map((p, j) => (
              <motion.span
                key={j}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: j * 0.06 + 0.3 }}
                className="bg-[#0F2747]/5 text-[#0F2747] text-sm font-medium px-3 py-1.5 rounded-lg border border-[#0F2747]/10 hover:border-primary/40 hover:bg-primary/5 transition-colors"
              >
                {p}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="pt-2">
          <Link href="/contact">
            <Button size="sm" className={`gap-2 bg-gradient-to-r ${app.accent} text-white border-0 hover:opacity-90 shadow-md`}>
              Get Samples for This Application <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default function Applications() {
  useSEO({
    title: "Applications & Use Cases — Barcode Labels, Ribbons & POS Rolls",
    description: "Real-world applications of barcode labels, thermal transfer ribbons, and POS rolls — retail, warehouse, pharma, e-commerce, manufacturing. Compatible with TSC TTP-244, Zebra, Honeywell printers.",
    keywords: "Barcode Label Applications, Thermal Transfer Ribbon Use Cases, TSC TTP-244 Compatible Labels, Warehouse Barcode Labels India, Retail Price Labels",
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="page-hero pt-32 pb-20 text-white">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-[80px]"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
             <span className="site-eyebrow mb-5">
              7 Core Applications
            </span>
             <h1 className="text-5xl md:text-6xl font-extrabold tracking-[-.04em] mb-5">Applications &amp; Use Cases</h1>
             <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Where our labels, ribbons, and rolls are deployed — real operations, real requirements, real technical specifications.
            </p>
          </motion.div>

          {/* App nav pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2 mt-10"
          >
            {applicationsData.map((app, i) => (
              <a
                key={i}
                href={`#app-${i}`}
                className="bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full transition-colors"
              >
                {app.tag}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Sections */}
      <section className="py-20 bg-[#fbfaf7]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-28">
            {applicationsData.map((app, i) => (
              <div key={i} id={`app-${i}`}>
                <ApplicationCard app={app} i={i} />
                {i < applicationsData.length - 1 && (
                  <div className="mt-20 flex items-center gap-4">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                    <Zap className="h-4 w-4 text-slate-300" />
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Printers */}
      <section className="py-20 surface-grid">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-sm uppercase tracking-wider mb-4">
              Compatible Equipment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2747] mb-4">Printer Compatibility Guide</h2>
            <p className="text-lg text-slate-600">
              Our labels and ribbons are manufactured to match the media specifications of all major thermal printer brands.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {compatiblePrinters.map((printer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`industrial-card rounded-2xl border overflow-hidden ${printer.color}`}
                data-testid={`card-printer-${i}`}
              >
                <div className={`${printer.headerColor} px-6 py-4 flex items-center gap-3`}>
                  <Cpu className="h-5 w-5 text-white/80" />
                  <div>
                    <div className="text-xs text-white/60 font-medium uppercase tracking-widest">{printer.brand}</div>
                    <div className="text-white font-bold text-lg leading-tight">{printer.model}</div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <ul className="space-y-2">
                    {printer.specs.map((spec, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scanner types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0F2747] rounded-2xl p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-7">
              <ScanLine className="h-7 w-7 text-primary" />
              <h3 className="text-2xl font-bold">Barcode Scanner Compatibility</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {scannerTypes.map((scanner, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`border rounded-xl p-5 ${scanner.color}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`h-2 w-2 rounded-full ${scanner.dot}`} />
                    <h4 className="font-bold text-white">{scanner.type}</h4>
                  </div>
                  <p className="text-xs text-slate-400 mb-1 font-medium uppercase tracking-wider">Common Models</p>
                  <p className="text-sm text-slate-300 mb-3">{scanner.examples}</p>
                  <p className="text-xs text-slate-400 mb-1 font-medium uppercase tracking-wider">Reads</p>
                  <p className="text-sm text-slate-300 mb-3">{scanner.reads}</p>
                  <p className="text-xs text-slate-400 mb-1 font-medium uppercase tracking-wider">Typical Use</p>
                  <p className="text-sm text-slate-300">{scanner.use}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-slate-600 mb-4">Not sure which label or ribbon works on your specific printer model?</p>
            <a href="https://wa.me/918530658864" target="_blank" rel="noreferrer">
              <Button size="lg" className="gap-2 bg-green-500 hover:bg-green-600 text-white h-12 px-8">
                WhatsApp Your Printer Model — We'll Specify the Right Product
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
