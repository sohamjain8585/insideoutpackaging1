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
    description: "High-quality precision printed barcode labels for tracking and inventory management across all industries.",
    image: img7,
    features: ["High Scan Rate", "Durable Adhesive", "Custom Sizes Available"],
  },
  {
    id: "thermal-labels",
    name: "Thermal Labels",
    category: "Labels",
    description: "Heat-sensitive labels for direct thermal and thermal transfer printing applications.",
    image: img_rool,
    features: ["Crisp Print Quality", "Long Lasting", "Smudge-proof"],
  },
  {
    id: "direct-thermal-labels",
    name: "Direct Thermal Labels",
    category: "Labels",
    description: "Ideal for short-term applications like shipping, courier, and receipt labels.",
    image: img_rool,
    features: ["No Ribbon Required", "Cost-effective", "High Contrast Print"],
  },
  {
    id: "semi-gloss-labels",
    name: "Semi Gloss Labels",
    category: "Labels",
    description: "Premium labels with a subtle sheen finish for superior product presentation and retail use.",
    image: img7,
    features: ["Vibrant Colors", "Smooth Finish", "Versatile Applications"],
  },
  {
    id: "pp-labels",
    name: "PP Labels",
    category: "Labels",
    description: "Tear-resistant Polypropylene labels engineered for demanding environments and wet conditions.",
    image: img_rool,
    features: ["Water-resistant", "Tear-proof", "Excellent Durability"],
  },
  {
    id: "pet-labels",
    name: "PET Labels",
    category: "Labels",
    description: "High-temperature Polyester labels designed for industrial and extreme environment applications.",
    image: img_rool,
    features: ["Heat Resistant", "Chemical Resistant", "Extremely Durable"],
  },
  {
    id: "asset-labels",
    name: "Asset Labels",
    category: "Labels",
    description: "Metallic tracking tags for fixed asset management with permanent adhesive backing.",
    image: img7,
    features: ["Metallic Finish", "Permanent Adhesive", "Scuff-resistant"],
  },
  {
    id: "void-labels",
    name: "Void Labels",
    category: "Labels",
    description: "Tamper-evident security labels that leave a visible 'VOID' pattern when removed.",
    image: img7,
    features: ["Tamper-evident", "Security Pattern", "Non-transferable"],
  },
  {
    id: "shipping-labels",
    name: "Shipping Labels",
    category: "Labels",
    description: "Large-format labels for logistics, e-commerce, and courier services with strong adhesive.",
    image: img7,
    features: ["Strong Adhesive", "Fast Printing", "Standard & Custom Sizes"],
  },
  {
    id: "product-labels",
    name: "Product Labels",
    category: "Labels",
    description: "Custom printed color labels for retail packaging and product branding.",
    image: img7,
    features: ["Full Color Printing", "Custom Die-cuts", "Premium Quality"],
  },

  // Ribbons
  {
    id: "thermal-transfer-ribbon",
    name: "Thermal Transfer Ribbon",
    category: "Ribbons",
    description: "Standard TTR for everyday label printing — sharp, consistent, and reliable.",
    image: img14,
    features: ["Dark Dense Print", "Economical", "Universal Compatibility"],
  },
  {
    id: "wax-ribbon",
    name: "Wax Ribbon",
    category: "Ribbons",
    description: "Best suited for standard paper and semi-gloss label printing at high speeds.",
    image: img14,
    features: ["High Speed Printing", "Cost Effective", "Good Print Density"],
  },
  {
    id: "wax-resin-ribbon",
    name: "Wax Resin Ribbon",
    category: "Ribbons",
    description: "Premium blend ribbon offering enhanced smudge and scratch resistance for semi-synthetic substrates.",
    image: img10,
    features: ["Smudge Resistant", "Versatile Substrates", "Durable Print"],
  },
  {
    id: "resin-ribbon",
    name: "Resin Ribbon",
    category: "Ribbons",
    description: "Maximum durability for harsh industrial environments and synthetic label substrates.",
    image: img10,
    features: ["Chemical Resistant", "Heat Resistant", "Scratch-proof"],
  },

  // Rolls
  {
    id: "billing-rolls",
    name: "Billing Rolls",
    category: "Rolls",
    description: "High-quality receipt paper rolls for billing machines and cash registers.",
    image: pos_rolls,
    features: ["Lint-free Surface", "Clear Sharp Print", "End-of-roll Warning"],
  },
  {
    id: "thermal-paper-rolls",
    name: "Thermal Paper Rolls",
    category: "Rolls",
    description: "Premium thermal paper rolls for POS terminals, EDC machines, and billing systems.",
    image: pos_rolls,
    features: ["Dark Image Quality", "Smooth Surface", "Long Archival Life"],
  },
  {
    id: "pos-rolls",
    name: "POS Rolls",
    category: "Rolls",
    description: "Standard size point-of-sale receipt rolls for all major retail and hospitality applications.",
    image: pos_rolls,
    features: ["BPA Free Options", "Precision Cut", "Dust Free Packaging"],
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
