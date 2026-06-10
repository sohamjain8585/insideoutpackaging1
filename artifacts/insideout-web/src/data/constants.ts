import img7 from "@assets/img7_1781094388916.png";
import img_rool from "@assets/img_rool_1781094388917.png";
import img14 from "@assets/img14_1781094388915.png";
import img10 from "@assets/img10_1781094388915.png";
import pos_rolls from "@assets/WhatsApp_Image_2026-01-09_at_11.00.09_AM_1781094388918.jpeg";

export const PRODUCTS = [
  // Labels
  {
    id: "barcode-labels",
    name: "Barcode Labels",
    category: "Labels",
    description: "Precision-printed barcode labels for inventory management, bin labeling, and product identification. Available in Code 128, EAN-13, QR, and all standard symbologies.",
    image: img7,
    features: ["Grade A Scan Quality", "Permanent or Removable Adhesive", "Custom Sizes & Symbologies"],
  },
  {
    id: "thermal-labels",
    name: "Thermal Labels",
    category: "Labels",
    description: "Thermal transfer labels for high-quality, long-lasting print. Suitable for all environments where print durability and scan reliability are critical.",
    image: img_rool,
    features: ["Sharp Print Contrast", "Wax & Wax-Resin Compatible", "Custom Core & OD"],
  },
  {
    id: "direct-thermal-labels",
    name: "Direct Thermal Labels",
    category: "Labels",
    description: "No ribbon required — ideal for shipping labels, courier AWB, and short-to-medium life applications. Works directly with heat-sensitive paper.",
    image: img7,
    features: ["No Ribbon Required", "Cost-Effective Solution", "High-Contrast Print Output"],
  },
  {
    id: "semi-gloss-labels",
    name: "Semi Gloss Labels",
    category: "Labels",
    description: "Coated paper labels with a subtle sheen for superior product presentation. Excellent for retail pricing, brand labels, and consumer goods packaging.",
    image: img_rool,
    features: ["Vibrant Print Reproduction", "Smooth Coated Surface", "Retail & Brand Applications"],
  },
  {
    id: "pp-labels",
    name: "PP Labels",
    category: "Labels",
    description: "Polypropylene synthetic labels engineered for wet, humid, or outdoor environments. Tear-resistant with excellent adhesive bond on curved surfaces.",
    image: img7,
    features: ["Waterproof & Tear-Proof", "High-Tack Adhesive", "Suitable for Curved Surfaces"],
  },
  {
    id: "pet-labels",
    name: "PET Labels",
    category: "Labels",
    description: "Polyester labels for extreme-environment applications — engine bays, chemical exposure, and sterilization cycles. Resin ribbon printing required.",
    image: img_rool,
    features: ["Heat Resistant up to 150°C", "Chemical Resistant", "Resin Ribbon Compatible"],
  },
  {
    id: "asset-labels",
    name: "Asset Labels",
    category: "Labels",
    description: "Metallic polyester tracking tags for fixed asset management. Permanent aggressive adhesive bonds to metal, plastic, and powder-coated surfaces.",
    image: img7,
    features: ["Metallic Silver Finish", "Destructible or Non-Destructible", "IT & Equipment Tracking"],
  },
  {
    id: "void-labels",
    name: "Void Labels",
    category: "Labels",
    description: "Tamper-evident security labels that reveal a permanent 'VOID' pattern on the substrate if removal is attempted. Non-transferable once applied.",
    image: img_rool,
    features: ["Tamper-Evident on Removal", "Permanent VOID Pattern", "Pharma & Electronics Use"],
  },
  {
    id: "shipping-labels",
    name: "Shipping Labels",
    category: "Labels",
    description: "Large-format direct thermal and thermal transfer labels for e-commerce, courier, and logistics. High-tack adhesive for polybagged parcels and cartons.",
    image: img7,
    features: ["100mm × 150mm & Custom", "High-Tack Adhesive", "AWB & Dispatch Ready"],
  },
  {
    id: "product-labels",
    name: "Product Labels",
    category: "Labels",
    description: "Custom-printed color labels for retail packaging and consumer brand identification. Full-color print with die-cut shapes to your specification.",
    image: img_rool,
    features: ["Full-Color Custom Print", "Custom Die-Cut Shapes", "MRP & EAN Compliant"],
  },

  // Ribbons
  {
    id: "thermal-transfer-ribbon",
    name: "Thermal Transfer Ribbon",
    category: "Ribbons",
    description: "Standard TTR for everyday paper label printing — dark, consistent print density across high-speed print runs. Compatible with all major printer brands.",
    image: img14,
    features: ["Dense Black Print", "High-Speed Compatible", "All Printer Brands"],
  },
  {
    id: "wax-ribbon",
    name: "Wax Ribbon",
    category: "Ribbons",
    description: "Economy-grade wax ribbon optimized for standard paper and semi-gloss labels. Best choice for high-volume, cost-sensitive labeling operations.",
    image: img14,
    features: ["Lowest Cost per Label", "High Print Density", "Up to 300mm/sec Speed"],
  },
  {
    id: "wax-resin-ribbon",
    name: "Wax Resin Ribbon",
    category: "Ribbons",
    description: "Enhanced blend ribbon for smudge, scratch, and mild chemical resistance. Ideal for semi-gloss, coated paper, and light synthetic label substrates.",
    image: img10,
    features: ["Smudge & Scratch Resistant", "Semi-Synthetic Compatible", "Improved Durability"],
  },
  {
    id: "resin-ribbon",
    name: "Resin Ribbon",
    category: "Ribbons",
    description: "Full resin formula for maximum durability on PP, PET, and polyester label substrates. Withstands chemicals, heat, UV exposure, and abrasion.",
    image: img10,
    features: ["Chemical & Heat Resistant", "PP / PET / Polyester Labels", "Outdoor & Industrial Grade"],
  },

  // Rolls
  {
    id: "billing-rolls",
    name: "Billing Rolls",
    category: "Rolls",
    description: "Premium thermal paper rolls for billing machines and cash registers. Lint-free surface ensures clean, jam-free operation on every transaction.",
    image: pos_rolls,
    features: ["Lint-Free Surface", "End-of-Roll Red Indicator", "57mm & 79mm Widths"],
  },
  {
    id: "thermal-paper-rolls",
    name: "Thermal Paper Rolls",
    category: "Rolls",
    description: "High-sensitivity thermal paper rolls for EDC/POS terminals, receipt printers, and billing systems. BPA-free options available.",
    image: pos_rolls,
    features: ["BPA-Free Option Available", "High Image Density", "All Standard Widths"],
  },
  {
    id: "pos-rolls",
    name: "POS Rolls",
    category: "Rolls",
    description: "Point-of-sale thermal rolls in all standard widths (57mm, 79mm, 80mm) for Epson, Citizen, TVS, Posiflex, and all major POS systems.",
    image: pos_rolls,
    features: ["57mm / 79mm / 80mm Widths", "Precision Cut & Dust-Free Pack", "Jam-Free Guaranteed"],
  },
];

export const INDUSTRIES = [
  "Manufacturing",
  "Automotive",
  "FMCG",
  "Warehousing",
  "Retail",
  "Logistics",
  "E-Commerce",
  "Pharmaceutical",
  "Food Processing",
  "Packaging Industry",
];

export const APPLICATIONS = [
  "Shipping & Dispatch Labels",
  "Product Identification",
  "Inventory & Asset Tracking",
  "Price & Shelf Labels",
  "Document & File Tracking",
  "Industrial Labelling",
];
