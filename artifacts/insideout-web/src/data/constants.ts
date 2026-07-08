import img7 from "@assets/img7_1781094388916.png";
import img_rool from "@assets/img_rool_1781094388917.png";
import img14 from "@assets/img14_1781094388915.png";
import img10 from "@assets/img10_1781094388915.png";
import pos_rolls from "@assets/WhatsApp_Image_2026-01-09_at_11.00.09_AM_1781094388918.jpeg";

import assetLabelsImg from "/images/asset-labels.png";
import semiGlossLabelsImg from "/images/semi-gloss-labels.png";
import petLabelsImg from "/images/pet-labels.png";
import ppLabelsImg from "/images/pp-labels.png";
import productLabelsImg from "/images/product-labels.png";
import shippingLabelsImg from "/images/shipping-labels.png";
import thermalPaperRollsImg from "/images/thermal-paper-rolls.png";
import voidLabelsImg from "/images/void-labels.png";

export const PRODUCTS = [
  // Labels
  {
    id: "barcode-labels",
    name: "Barcode Labels",
    category: "Labels",
    description: "Precision-printed barcode labels for inventory management, bin labeling, and product identification. Available in Code 128, EAN-13, QR, and all standard symbologies.",
    image: img7,
    features: ["Grade A Scan Quality", "Permanent or Removable Adhesive", "Custom Sizes & Symbologies"],
    specs: { Material: "Paper / Synthetic", Width: "20mm – 100mm", Adhesive: "Permanent / Removable", Core: "25mm / 38mm" },
  },
  {
    id: "thermal-labels",
    name: "Thermal Labels",
    category: "Labels",
    description: "Thermal transfer labels for high-quality, long-lasting print. Suitable for all environments where print durability and scan reliability are critical.",
    image: img_rool,
    features: ["Sharp Print Contrast", "Wax & Wax-Resin Compatible", "Custom Core & OD"],
    specs: { Material: "Coated Paper", GSM: "60 – 80 GSM", Width: "25mm – 150mm", Core: "25mm / 38mm / 76mm" },
  },
  {
    id: "direct-thermal-labels",
    name: "Direct Thermal Labels",
    category: "Labels",
    description: "No ribbon required — ideal for shipping labels, courier AWB, and short-to-medium life applications. Works directly with heat-sensitive paper.",
    image: shippingLabelsImg,
    features: ["No Ribbon Required", "Cost-Effective Solution", "High-Contrast Print Output"],
    specs: { Material: "Direct Thermal Paper", Width: "50mm – 150mm", Adhesive: "Permanent", "Ribbon Needed": "No" },
  },
  {
    id: "semi-gloss-labels",
    name: "Semi Gloss Labels",
    category: "Labels",
    description: "Coated paper labels with a subtle sheen for superior product presentation. Excellent for retail pricing, brand labels, and consumer goods packaging.",
    image: semiGlossLabelsImg,
    features: ["Vibrant Print Reproduction", "Smooth Coated Surface", "Retail & Brand Applications"],
    specs: { Material: "Semi-Gloss Coated Paper", Finish: "Satin Sheen", Width: "25mm – 100mm", Core: "25mm / 38mm" },
  },
  {
    id: "pp-labels",
    name: "PP Labels",
    category: "Labels",
    description: "Polypropylene synthetic labels engineered for wet, humid, or outdoor environments. Tear-resistant with excellent adhesive bond on curved surfaces.",
    image: ppLabelsImg,
    features: ["Waterproof & Tear-Proof", "High-Tack Adhesive", "Suitable for Curved Surfaces"],
    specs: { Material: "Polypropylene (PP)", Finish: "Matte / Gloss", Adhesive: "High-Tack Permanent", "Water Resistant": "Yes" },
  },
  {
    id: "pet-labels",
    name: "PET Labels",
    category: "Labels",
    description: "Polyester labels for extreme-environment applications — engine bays, chemical exposure, and sterilization cycles. Resin ribbon printing required.",
    image: petLabelsImg,
    features: ["Heat Resistant up to 150°C", "Chemical Resistant", "Resin Ribbon Compatible"],
    specs: { Material: "Polyester (PET)", "Heat Resistance": "Up to 150°C", Ribbon: "Resin Only", Finish: "Silver / Matte" },
  },
  {
    id: "asset-labels",
    name: "Asset Labels",
    category: "Labels",
    description: "Metallic polyester tracking tags for fixed asset management. Permanent aggressive adhesive bonds to metal, plastic, and powder-coated surfaces.",
    image: assetLabelsImg,
    features: ["Metallic Silver Finish", "Destructible or Non-Destructible", "IT & Equipment Tracking"],
    specs: { Material: "Metallic Polyester", Adhesive: "Permanent Aggressive", Shape: "Rectangle / Custom Die-Cut", Type: "Destructible / Void" },
  },
  {
    id: "void-labels",
    name: "Void Labels",
    category: "Labels",
    description: "Tamper-evident security labels that reveal a permanent 'VOID' pattern on the substrate if removal is attempted. Non-transferable once applied.",
    image: voidLabelsImg,
    features: ["Tamper-Evident on Removal", "Permanent VOID Pattern", "Pharma & Electronics Use"],
    specs: { Material: "Ultra-Destructible Vinyl", Pattern: "Repeating VOID", Adhesive: "Permanent Tamper-Evident", "Residue Left": "Yes" },
  },
  {
    id: "shipping-labels",
    name: "Shipping Labels",
    category: "Labels",
    description: "Large-format direct thermal and thermal transfer labels for e-commerce, courier, and logistics. High-tack adhesive for polybagged parcels and cartons.",
    image: shippingLabelsImg,
    features: ["100mm × 150mm & Custom", "High-Tack Adhesive", "AWB & Dispatch Ready"],
    specs: { Material: "Direct Thermal / TTR Paper", Width: "100mm × 150mm", Adhesive: "High-Tack Permanent", Format: "Roll / Fanfold" },
  },
  {
    id: "product-labels",
    name: "Product Labels",
    category: "Labels",
    description: "Custom-printed color labels for retail packaging and consumer brand identification. Full-color print with die-cut shapes to your specification.",
    image: productLabelsImg,
    features: ["Full-Color Custom Print", "Custom Die-Cut Shapes", "MRP & EAN Compliant"],
    specs: { Material: "Paper / PP / Foil", Print: "Full-Color Custom", Shape: "Custom Die-Cut", Compliance: "MRP / EAN" },
  },

  // Ribbons
  {
    id: "thermal-transfer-ribbon",
    name: "Thermal Transfer Ribbon",
    category: "Ribbons",
    description: "Standard TTR for everyday paper label printing — dark, consistent print density across high-speed print runs. Compatible with all major printer brands.",
    image: img14,
    features: ["Dense Black Print", "High-Speed Compatible", "All Printer Brands"],
    specs: { Type: "Wax / Wax-Resin", Width: "25mm – 220mm", Length: "300m / 450m / 600m", Color: "Black" },
  },
  {
    id: "wax-ribbon",
    name: "Wax Ribbon",
    category: "Ribbons",
    description: "Economy-grade wax ribbon optimized for standard paper and semi-gloss labels. Best choice for high-volume, cost-sensitive labeling operations.",
    image: img14,
    features: ["Lowest Cost per Label", "High Print Density", "Up to 300mm/sec Speed"],
    specs: { Type: "Wax", Width: "25mm – 220mm", Length: "300m / 450m", "Print Speed": "Up to 300mm/sec" },
  },
  {
    id: "wax-resin-ribbon",
    name: "Wax Resin Ribbon",
    category: "Ribbons",
    description: "Enhanced blend ribbon for smudge, scratch, and mild chemical resistance. Ideal for semi-gloss, coated paper, and light synthetic label substrates.",
    image: img10,
    features: ["Smudge & Scratch Resistant", "Semi-Synthetic Compatible", "Improved Durability"],
    specs: { Type: "Wax-Resin", Width: "25mm – 220mm", Length: "300m / 450m / 600m", "Chemical Resistance": "Mild" },
  },
  {
    id: "resin-ribbon",
    name: "Resin Ribbon",
    category: "Ribbons",
    description: "Full resin formula for maximum durability on PP, PET, and polyester label substrates. Withstands chemicals, heat, UV exposure, and abrasion.",
    image: img10,
    features: ["Chemical & Heat Resistant", "PP / PET / Polyester Labels", "Outdoor & Industrial Grade"],
    specs: { Type: "Full Resin", Width: "25mm – 220mm", Length: "300m / 450m / 600m", "Chemical Resistance": "Maximum" },
  },

  // Rolls
  {
    id: "billing-rolls",
    name: "Billing Rolls",
    category: "Rolls",
    description: "Premium thermal paper rolls for billing machines and cash registers. Lint-free surface ensures clean, jam-free operation on every transaction.",
    image: thermalPaperRollsImg,
    features: ["Lint-Free Surface", "End-of-Roll Red Indicator", "57mm & 79mm Widths"],
    specs: { Material: "Thermal Paper", GSM: "48 – 55 GSM", Width: "57mm / 79mm", Length: "20m – 40m" },
  },
  {
    id: "thermal-paper-rolls",
    name: "Thermal Paper Rolls",
    category: "Rolls",
    description: "High-sensitivity thermal paper rolls for EDC/POS terminals, receipt printers, and billing systems. BPA-free options available.",
    image: thermalPaperRollsImg,
    features: ["BPA-Free Option Available", "High Image Density", "All Standard Widths"],
    specs: { Material: "Thermal Paper", GSM: "55 – 80 GSM", "BPA-Free": "Available", Ply: "1 Ply" },
  },
  {
    id: "pos-rolls",
    name: "POS Rolls",
    category: "Rolls",
    description: "Point-of-sale thermal rolls in all standard widths (57mm, 79mm, 80mm) for Epson, Citizen, TVS, Posiflex, and all major POS systems.",
    image: pos_rolls,
    features: ["57mm / 79mm / 80mm Widths", "Precision Cut & Dust-Free Pack", "Jam-Free Guaranteed"],
    specs: { Material: "Thermal Paper", Width: "57mm / 79mm / 80mm", Diameter: "Up to 50mm", Compatibility: "All Major POS Brands" },
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
