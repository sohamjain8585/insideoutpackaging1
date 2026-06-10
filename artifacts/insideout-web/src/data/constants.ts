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
    description: "High-quality precision printed barcode labels for tracking and inventory.",
    image: img7,
    features: ["High Scan Rate", "Durable", "Custom Sizes"],
  },
  {
    id: "thermal-labels",
    name: "Thermal Labels",
    category: "Labels",
    description: "Heat-sensitive labels for direct thermal and thermal transfer printing.",
    image: img_rool,
    features: ["Crisp Print", "Long Lasting", "Smudge-proof"],
  },
  {
    id: "direct-thermal-labels",
    name: "Direct Thermal Labels",
    category: "Labels",
    description: "Ideal for short-term applications like shipping and receipts.",
    image: img_rool,
    features: ["No Ribbon Required", "Cost-effective", "High Contrast"],
  },
  {
    id: "semi-gloss-labels",
    name: "Semi Gloss Labels",
    category: "Labels",
    description: "Premium labels with a subtle sheen for superior presentation.",
    image: "/images/semi-gloss-labels.png",
    features: ["Vibrant Colors", "Smooth Finish", "Versatile"],
  },
  {
    id: "pp-labels",
    name: "PP Labels",
    category: "Labels",
    description: "Tear-resistant Polypropylene labels for demanding environments.",
    image: "/images/pp-labels.png",
    features: ["Water-resistant", "Tear-proof", "Durable"],
  },
  {
    id: "pet-labels",
    name: "PET Labels",
    category: "Labels",
    description: "High-temperature Polyester labels for industrial applications.",
    image: "/images/pet-labels.png",
    features: ["Heat Resistant", "Chemical Resistant", "Extremely Durable"],
  },
  {
    id: "asset-labels",
    name: "Asset Labels",
    category: "Labels",
    description: "Metallic tracking tags for fixed asset management.",
    image: "/images/asset-labels.png",
    features: ["Metallic Finish", "Permanent Adhesive", "Scuff-resistant"],
  },
  {
    id: "void-labels",
    name: "Void Labels",
    category: "Labels",
    description: "Tamper-evident security labels that leave a 'VOID' pattern when removed.",
    image: "/images/void-labels.png",
    features: ["Tamper-evident", "Security Pattern", "Non-transferable"],
  },
  {
    id: "shipping-labels",
    name: "Shipping Labels",
    category: "Labels",
    description: "Large format labels for logistics, e-commerce, and courier services.",
    image: "/images/shipping-labels.png",
    features: ["Strong Adhesive", "Fast Printing", "Standard Sizes"],
  },
  {
    id: "product-labels",
    name: "Product Labels",
    category: "Labels",
    description: "Custom printed color labels for retail packaging.",
    image: "/images/product-labels.png",
    features: ["Full Color", "Custom Die-cuts", "Premium Quality"],
  },
  
  // Ribbons
  {
    id: "thermal-transfer-ribbon",
    name: "Thermal Transfer Ribbon",
    category: "Ribbons",
    description: "Standard TTR for everyday label printing applications.",
    image: img14,
    features: ["Dark Print", "Economical", "Universal Compatibility"],
  },
  {
    id: "wax-ribbon",
    name: "Wax Ribbon",
    category: "Ribbons",
    description: "Best for standard paper and semi-gloss label printing.",
    image: img14,
    features: ["High Speed Printing", "Cost Effective", "Good Density"],
  },
  {
    id: "wax-resin-ribbon",
    name: "Wax Resin Ribbon",
    category: "Ribbons",
    description: "Premium blend offering enhanced smudge and scratch resistance.",
    image: img10,
    features: ["Smudge Resistant", "Versatile Substrates", "Durable Print"],
  },
  {
    id: "resin-ribbon",
    name: "Resin Ribbon",
    category: "Ribbons",
    description: "Maximum durability for harsh environments and synthetic labels.",
    image: img10,
    features: ["Chemical Resistant", "Heat Resistant", "Scratch-proof"],
  },
  
  // Rolls
  {
    id: "billing-rolls",
    name: "Billing Rolls",
    category: "Rolls",
    description: "High-quality receipt paper rolls for billing machines.",
    image: pos_rolls,
    features: ["Lint-free", "Clear Print", "End-of-roll Warning"],
  },
  {
    id: "thermal-paper-rolls",
    name: "Thermal Paper Rolls",
    category: "Rolls",
    description: "Premium thermal paper for POS and EDC machines.",
    image: "/images/thermal-paper-rolls.png",
    features: ["Dark Image", "Smooth Surface", "Long Archival Life"],
  },
  {
    id: "pos-rolls",
    name: "POS Rolls",
    category: "Rolls",
    description: "Standard size point-of-sale receipt rolls for retail applications.",
    image: pos_rolls,
    features: ["BPA Free Options", "Precision Cut", "Dust Free"],
  }
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
  "Packaging Industry"
];

export const APPLICATIONS = [
  "Shipping & Dispatch Labels", 
  "Product Identification", 
  "Inventory & Asset Tracking", 
  "Price & Shelf Labels", 
  "Document & File Tracking", 
  "Industrial Labelling"
];
