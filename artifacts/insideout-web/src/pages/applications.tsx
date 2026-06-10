import { Layout } from "@/components/layout/Layout";
import { useSEO } from "@/hooks/use-seo";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Cpu, ScanLine, ArrowRight } from "lucide-react";

import barcodeLabelsImg from "@assets/img7_1781094388916.png";
import warehouseImg from "@assets/img18_1781094388914.png";
import logisticsImg from "@assets/img5_1781094388916.png";
import labelRollImg from "@assets/img_rool_1781094388917.png";
import ribbonsImg from "@assets/img14_1781094388915.png";
import colorRibbonsImg from "@assets/img10_1781094388915.png";
import posRollsImg from "@assets/WhatsApp_Image_2026-01-09_at_11.00.09_AM_1781094388918.jpeg";

const applicationsData = [
  {
    tag: "Application 01",
    title: "Retail Shelf & Product Price Labeling",
    image: barcodeLabelsImg,
    imageStyle: "object-contain p-8 bg-white",
    details: [
      "EAN-13 and EAN-8 barcodes printed on direct thermal or semi-gloss labels for MRP and product marking",
      "Shelf-edge price labels with permanent adhesive for wooden, metal, and plastic gondola surfaces",
      "QR code labels for product pages, traceability, and scan-to-shop retail systems",
      "Label widths from 20mm to 100mm; standard cores of 25mm or 38mm for all major shelf-label printers",
    ],
    products: ["Barcode Labels", "Semi Gloss Labels", "Direct Thermal Labels"],
  },
  {
    tag: "Application 02",
    title: "Warehouse Bin, Rack & Inventory Labeling",
    image: warehouseImg,
    imageStyle: "object-cover object-center",
    details: [
      "Bin location barcodes in Code 128 or GS1-128 format for WMS (warehouse management system) scanning",
      "Retro-reflective labels for high-bay racking — scanned by long-range barcode readers at 5–10 metre distance",
      "Pallet ID labels and carton barcodes for inbound receipt, put-away, pick, and dispatch operations",
      "Oversized format labels (100mm × 150mm and larger) for floor markings and dock door identification",
    ],
    products: ["Barcode Labels", "Shipping Labels", "Asset Labels"],
  },
  {
    tag: "Application 03",
    title: "E-Commerce & Courier Dispatch Labels",
    image: logisticsImg,
    imageStyle: "object-cover object-center",
    details: [
      "AWB (air waybill) and courier labels in 100mm × 150mm direct thermal format for Delhivery, Blue Dart, DTDC, and Ekart",
      "High-tack adhesive that bonds to polybagged parcels, corrugated cartons, and padded envelopes without peeling in transit",
      "Thermal transfer shipping labels for brands that require smudge-proof print surviving multi-point scanning",
      "Pre-printed address label books and fanfold packs for high-volume fulfilment centre operations",
    ],
    products: ["Shipping Labels", "Direct Thermal Labels", "Thermal Transfer Ribbons"],
  },
  {
    tag: "Application 04",
    title: "Pharmaceutical Batch & Compliance Labeling",
    image: labelRollImg,
    imageStyle: "object-contain p-8 bg-white",
    details: [
      "Batch number, manufacturing date, expiry date, and serial number labels for drug vials, blister packs, and outer cartons",
      "Tamper-evident void labels that display a 'VOID' pattern on the substrate when removal is attempted",
      "Resin ribbon printing on PET (polyester) labels for chemical resistance and print legibility through sterilization cycles",
      "GS1 DataMatrix and 2D barcodes for track-and-trace compliance under Schedule M and pharma serialization requirements",
    ],
    products: ["Void Labels", "PET Labels", "Resin Ribbons", "Barcode Labels"],
  },
  {
    tag: "Application 05",
    title: "POS Billing & Receipt Printing",
    image: posRollsImg,
    imageStyle: "object-contain p-6 bg-slate-50",
    details: [
      "Thermal paper rolls in 57mm, 79mm, and 80mm widths for cash registers, EDC/POS terminals, and billing counters",
      "BPA-free thermal coating options for retail, hospitality, and healthcare billing environments",
      "End-of-roll red warning sensor strip to alert cashiers before paper runout mid-transaction",
      "Precision-cut rolls packed dust-free — guaranteed to run without jams in Epson, Citizen, TVS, and Posiflex machines",
    ],
    products: ["POS Rolls", "Thermal Paper Rolls", "Billing Rolls"],
  },
  {
    tag: "Application 06",
    title: "Thermal Transfer Ribbon Printing",
    image: ribbonsImg,
    imageStyle: "object-contain p-8 bg-white",
    details: [
      "Wax ribbons for high-speed printing on standard paper labels — cost-efficient, excellent print density at speeds up to 300mm/sec",
      "Wax-Resin ribbons for smudge, scratch, and mild chemical resistance on coated paper and semi-synthetic substrates",
      "Full Resin ribbons for maximum durability on PP (polypropylene), PET (polyester), and synthetic label materials",
      "Available in widths from 25mm to 220mm; lengths of 300m, 450m, and 600m to match your label printer's specifications",
    ],
    products: ["Wax Ribbon", "Wax Resin Ribbon", "Resin Ribbon", "Thermal Transfer Ribbon"],
  },
  {
    tag: "Application 07",
    title: "Manufacturing Floor & Asset Tracking",
    image: colorRibbonsImg,
    imageStyle: "object-contain p-6 bg-white",
    details: [
      "Work-in-progress (WIP) traveler labels that track assembly stages, operator IDs, and batch numbers on production lines",
      "Metallic and polyester asset labels with permanent aggressive adhesive for tagging fixed equipment, tools, and IT assets",
      "Color-coded ribbon printing for visual management — using different ribbon colors to distinguish product families or hazard zones",
      "Chemical and heat-resistant labels for under-bonnet automotive parts, PCB assemblies, and metal component identification",
    ],
    products: ["Asset Labels", "PET Labels", "Resin Ribbons", "Wax Resin Ribbons"],
  },
];

const compatiblePrinters = [
  {
    brand: "TSC",
    model: "TTP-244 Plus",
    specs: [
      "Print Method: Thermal Transfer / Direct Thermal",
      "Print Resolution: 203 DPI (8 dots/mm)",
      "Print Speed: Up to 127mm/sec",
      "Print Width: 104mm (4 inches)",
      "Media Width: 25.4mm to 118mm",
      "Interface: USB, Serial RS-232, Parallel",
      "Compatible Ribbons: Wax, Wax-Resin (25mm to 110mm width)",
    ],
  },
  {
    brand: "Zebra",
    model: "ZD220 / ZD420",
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
  },
  {
    type: "2D Barcode Scanners",
    examples: "Zebra DS9308, Honeywell Xenon 1950, Datalogic Gryphon",
    reads: "QR Code, GS1 DataMatrix, PDF417, Aztec Code",
    use: "Pharmaceutical serialization, e-commerce returns, document management",
  },
  {
    type: "Long-Range / Forklift Scanners",
    examples: "Zebra DS9908, Honeywell 8680i, Datalogic PowerScan",
    reads: "1D and 2D codes at 5–15 metre range",
    use: "High-bay warehouse racking, retro-reflective bin labels",
  },
];

export default function Applications() {
  useSEO({
    title: "Applications & Use Cases — Barcode Labels, Ribbons & POS Rolls",
    description: "Real-world applications of barcode labels, thermal transfer ribbons, and POS rolls — retail, warehouse, pharma, e-commerce, manufacturing. Compatible with TSC TTP-244, Zebra, Honeywell printers.",
    keywords: "Barcode Label Applications, Thermal Transfer Ribbon Use Cases, TSC TTP-244 Compatible Labels, Warehouse Barcode Labels India, Retail Price Labels"
  });

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-[#0F2747] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary to-transparent" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary font-bold rounded-full text-sm uppercase tracking-wider mb-4">
              7 Core Applications
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Applications & Use Cases</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Where our labels, ribbons, and rolls are deployed — real operations, real requirements, real technical specifications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {applicationsData.map((app, i) => (
              <div
                key={i}
                className={`flex flex-col ${i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-16 items-center`}
              >
                <motion.div
                  initial={{ opacity: 0, x: i % 2 !== 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-5/12"
                >
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 relative">
                    <div className="h-72 md:h-80 bg-slate-50">
                      <img
                        src={app.image}
                        alt={app.title}
                        className={`w-full h-full ${app.imageStyle}`}
                      />
                    </div>
                    <div className="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: i % 2 !== 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-7/12 space-y-5"
                >
                  <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-sm uppercase tracking-wider">
                    {app.tag}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0F2747]">{app.title}</h2>
                  <ul className="space-y-3">
                    {app.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-600">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Related Products</p>
                    <div className="flex flex-wrap gap-2">
                      {app.products.map((p, j) => (
                        <span key={j} className="bg-[#0F2747]/5 text-[#0F2747] text-sm font-medium px-3 py-1.5 rounded-lg border border-[#0F2747]/10">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-1">
                    <Link href="/contact">
                      <Button size="sm" className="gap-2">
                        Get Samples for This Application <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Printers */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-sm uppercase tracking-wider mb-4">
              Compatible Equipment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2747] mb-4">
              Printer Compatibility Guide
            </h2>
            <p className="text-lg text-slate-600">
              Our labels and ribbons are manufactured to match the media specifications of all major thermal printer brands. Here are the most common models used with our products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {compatiblePrinters.map((printer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                data-testid={`card-printer-${i}`}
              >
                <div className="bg-[#0F2747] px-6 py-4 flex items-center gap-3">
                  <Cpu className="h-6 w-6 text-primary" />
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-widest">{printer.brand}</div>
                    <div className="text-white font-bold text-lg">{printer.model}</div>
                  </div>
                </div>
                <div className="p-6">
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

          <div className="bg-[#0F2747] rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <ScanLine className="h-7 w-7 text-primary" />
              <h3 className="text-2xl font-bold">Barcode Scanner Compatibility</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {scannerTypes.map((scanner, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h4 className="font-bold text-primary mb-3">{scanner.type}</h4>
                  <p className="text-xs text-slate-400 mb-2 font-medium uppercase tracking-wider">Common Models</p>
                  <p className="text-sm text-slate-300 mb-3">{scanner.examples}</p>
                  <p className="text-xs text-slate-400 mb-1 font-medium uppercase tracking-wider">Reads</p>
                  <p className="text-sm text-slate-300 mb-3">{scanner.reads}</p>
                  <p className="text-xs text-slate-400 mb-1 font-medium uppercase tracking-wider">Typical Use</p>
                  <p className="text-sm text-slate-300">{scanner.use}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-600 mb-4">Not sure which label or ribbon works on your specific printer model?</p>
            <a href="https://wa.me/918530658864" target="_blank" rel="noreferrer">
              <Button size="lg" className="gap-2 bg-green-500 hover:bg-green-600 text-white h-12 px-8">
                WhatsApp Your Printer Model — We'll Specify the Right Product
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
