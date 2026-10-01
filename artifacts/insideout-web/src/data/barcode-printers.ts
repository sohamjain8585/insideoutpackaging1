import dcodeFront from "@assets/2_1790853742571.png";
import dcodeAngle from "@assets/5_1790853742579.png";
import tscDa200 from "@assets/3_1790853742574.png";
import tscPrinter from "@assets/4_1790853742576.png";
import tscLabelOutput from "@assets/Screenshot_2026-10-01_164553_1790853742586.png";

export interface BarcodePrinter {
  brand: "Dcode" | "TSC";
  model?: string;
  category?: string;
  technology?: string;
  resolution?: string;
  printWidth?: string;
  connectivity?: string;
  description: string;
  images: { src: string; alt: string }[];
  verifiedNote?: string;
}

export const PRINTER_HERO_IMAGES = {
  tsc: tscDa200,
  dcode: dcodeAngle,
};

export const BARCODE_PRINTERS: BarcodePrinter[] = [
  {
    brand: "Dcode",
    description:
      "Dcode-branded barcode printer shown in the supplied product photography. Ask our team to confirm the exact model and application fit.",
    images: [
      { src: dcodeFront, alt: "Dcode-branded barcode printer, front view" },
      { src: dcodeAngle, alt: "Dcode-branded barcode printer, angled view" },
    ],
  },
  {
    brand: "TSC",
    model: "DA200",
    technology: "Direct Thermal",
    description:
      "The supplied product image identifies this TSC printer as the DA200 and shows Direct Thermal printing.",
    images: [
      { src: tscDa200, alt: "TSC DA200 direct thermal desktop barcode printer with printed labels" },
      { src: tscLabelOutput, alt: "TSC DA200 printer with barcode labels emerging" },
    ],
    verifiedNote: "Model and printing method are identified in the supplied product image.",
  },
  {
    brand: "TSC",
    description:
      "TSC-branded printer shown in the supplied product photography. Exact model and specifications require confirmation.",
    images: [{ src: tscPrinter, alt: "TSC-branded barcode printer with a printed label" }],
  },
];

export const PRINTER_CATEGORIES = [
  {
    title: "Desktop Barcode Printers",
    description: "A compact-format option to discuss for workstations and everyday label tasks.",
    icon: "desktop",
  },
  {
    title: "Industrial Barcode Printers",
    description: "Discuss printer and media requirements for demanding production environments.",
    icon: "industrial",
  },
  {
    title: "Direct Thermal Printers",
    description: "Direct thermal printing uses heat-sensitive label media; no ribbon is used.",
    icon: "thermal",
  },
  {
    title: "Thermal Transfer Printers",
    description: "Thermal transfer printing pairs a compatible label material with a ribbon.",
    icon: "transfer",
  },
];