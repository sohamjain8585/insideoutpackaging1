import { useState } from "react";
import { Link } from "wouter";
import manufacturingApplicationImage from "@assets/a1_1790856461554.webp";
import warehouseApplicationImage from "@assets/a2_1790856461555.webp";
import logisticsApplicationImage from "@assets/a3_1790856461556.webp";
import fulfillmentApplicationImage from "@assets/a4_1790856461557.webp";
import equipmentApplicationImage from "@assets/a5_1790856461558.webp";
import { ArrowDown, ArrowRight, Barcode, Check, ChevronRight, CircleHelp, Factory, Layers3, Printer, ScanLine, Tags } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useSEO } from "@/hooks/use-seo";
import { BARCODE_PRINTERS, PRINTER_CATEGORIES, PRINTER_HERO_IMAGES, type BarcodePrinter } from "@/data/barcode-printers";

const applicationPhotoItems = [
  {
    title: "Manufacturing",
    detail: "Product and component labels for production workflows.",
    image: manufacturingApplicationImage,
    alt: "Barcode printer producing product specification labels beside a metal component on a workbench.",
  },
  {
    title: "Warehouse & Inventory",
    detail: "Barcode labels for cartons, stock locations and inventory movement.",
    image: warehouseApplicationImage,
    alt: "A worker handling a printed barcode label beside cartons and a desktop printer in a warehouse.",
  },
  {
    title: "Logistics & Transportation",
    detail: "Shipping and parcel labels for sorting, packing and dispatch.",
    image: logisticsApplicationImage,
    alt: "A barcode printer feeding shipping labels beside packages on a conveyor.",
  },
  {
    title: "Order Fulfilment",
    detail: "Print, pick-and-pack and scan steps for outgoing orders.",
    image: fulfillmentApplicationImage,
    alt: "A warehouse associate checking a printed barcode label with a handheld scanner at a packing station.",
  },
  {
    title: "Industrial Equipment",
    detail: "Identification labels for equipment, parts and service assets.",
    image: equipmentApplicationImage,
    alt: "A technician working beside industrial machinery and a barcode printer.",
  },
];

const additionalApplications = [
  "Product Identification",
  "Asset Tracking",
  "Retail & Distribution",
  "E-Commerce",
  "Automotive & Engineering",
  "Healthcare & Pharmaceuticals",
];

const industries = [
  "Manufacturing", "Automotive & Engineering", "Warehousing", "Logistics",
  "Retail", "E-Commerce", "Pharmaceutical & Healthcare", "Food & FMCG",
];

const selectionItems = [
  "Label size", "Printing volume", "Direct thermal or thermal transfer", "Required resolution",
  "Connectivity", "Operating environment", "Label material", "Ribbon requirement",
];

function InquiryDialog({ product, label = "Request a Quote", className = "" }: { product: string; label?: string; className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button className={className} onClick={() => setOpen(true)} data-testid={`button-quote-${product.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
        {label}<ChevronRight className="ml-2 h-4 w-4" />
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90dvh] max-w-2xl overflow-y-auto p-0">
          <div className="bg-[#0F2747] p-6 pr-12 text-white">
            <DialogTitle className="text-2xl font-bold">Discuss your barcode workflow</DialogTitle>
            <DialogDescription className="mt-2 text-slate-300">
              Share your printer, label and application requirements. Exact model and compatibility can be confirmed with our team.
            </DialogDescription>
          </div>
          <div className="p-6"><InquiryForm defaultProduct={product} onSuccess={() => setOpen(false)} /></div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function PrinterCard({ printer, index }: { printer: BarcodePrinter; index: number }) {
  const [detailOpen, setDetailOpen] = useState(false);
  const [image, setImage] = useState(printer.images[0]);
  const specs = [
    ["Model", printer.model],
    ["Printer type", printer.category],
    ["Printing", printer.technology],
    ["Resolution", printer.resolution],
    ["Print width", printer.printWidth],
    ["Connectivity", printer.connectivity],
  ].filter((entry): entry is [string, string] => Boolean(entry[1]));

  return (
    <article className="industrial-card flex flex-col overflow-hidden rounded-2xl" data-testid={`card-printer-${printer.brand.toLowerCase()}-${index}`}>
      <div className="relative flex h-64 items-center justify-center bg-white p-6">
        <img src={printer.images[0].src} alt={printer.images[0].alt} loading="lazy" className="h-full w-full object-contain" />
        <span className="absolute left-4 top-4 rounded-full border border-slate-200 bg-[#fbfaf7] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[.12em] text-[#0F2747]">{printer.brand}</span>
      </div>
      <div className="flex flex-1 flex-col border-t border-slate-100 p-6">
        <p className="site-eyebrow mb-3">Printer solution</p>
        <h3 className="text-2xl font-extrabold tracking-tight text-[#0F2747]">{printer.model ?? `${printer.brand} Barcode Printers`}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{printer.description}</p>
        {specs.length > 0 && (
          <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-slate-200 pt-4">
            {specs.map(([name, value]) => <div key={name}><dt className="mono-label text-slate-400">{name}</dt><dd className="mt-1 text-sm font-semibold text-[#0F2747]">{value}</dd></div>)}
          </dl>
        )}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button variant="outline" className="flex-1 border-slate-300 text-[#0F2747]" onClick={() => { setImage(printer.images[0]); setDetailOpen(true); }} data-testid={`button-details-${printer.brand.toLowerCase()}-${index}`}>View Details</Button>
          <InquiryDialog product={`${printer.brand}${printer.model ? ` ${printer.model}` : " barcode printer"} — model confirmation requested`} label="Request a Quote" className="flex-1" />
        </div>
      </div>
      <Dialog open={detailOpen} onOpenChange={setDetailOpen}>
        <DialogContent className="max-h-[90dvh] max-w-4xl overflow-y-auto">
          <div className="grid gap-7 md:grid-cols-[1fr_1fr]">
            <div className="flex min-h-64 items-center justify-center rounded-xl bg-[#f7f7f4] p-5">
              <img src={image.src} alt={image.alt} loading="lazy" className="max-h-[340px] w-full object-contain" />
            </div>
            <div className="py-2">
              <p className="site-eyebrow">{printer.brand}</p>
              <DialogTitle className="mt-3 text-3xl font-extrabold text-[#0F2747]">{printer.model ?? `${printer.brand} barcode printer`}</DialogTitle>
              <DialogDescription className="mt-3 text-base leading-7 text-slate-600">{printer.description}</DialogDescription>
              {specs.length > 0 && <dl className="mt-6 space-y-3">{specs.map(([name, value]) => <div key={name} className="flex justify-between gap-4 border-b border-slate-200 pb-2 text-sm"><dt className="text-slate-500">{name}</dt><dd className="text-right font-semibold text-[#0F2747]">{value}</dd></div>)}</dl>}
              <p className="mt-5 text-xs leading-5 text-slate-500">{printer.verifiedNote ?? "Model number and specifications are not verified from the supplied product image. Please enquire for confirmation."}</p>
              <div className="mt-6"><InquiryDialog product={`${printer.brand}${printer.model ? ` ${printer.model}` : " barcode printer"} — model and compatibility confirmation`} /></div>
            </div>
          </div>
          {printer.images.length > 1 && <div className="flex gap-3">{printer.images.map((item, imageIndex) => <button key={item.src} onClick={() => setImage(item)} className="h-16 w-20 rounded-md border border-slate-200 bg-white p-2" aria-label={`View image: ${item.alt}`} data-testid={`button-image-${printer.brand.toLowerCase()}-${index}-${imageIndex}`}><img src={item.src} alt="" loading="lazy" className="h-full w-full object-contain" /></button>)}</div>}
        </DialogContent>
      </Dialog>
    </article>
  );
}

export default function BarcodePrinters() {
  useSEO({
    title: "Barcode Printers | Dcode & TSC Thermal Printers",
    description: "Explore Dcode and TSC barcode printers along with compatible direct thermal labels, thermal transfer labels and ribbons from Inside Out Packaging Industries.",
    keywords: "Barcode Printers, Dcode, TSC DA200, Barcode Labels, Thermal Transfer Ribbons",
  });

  return (
    <Layout>
      <>
        <section className="page-hero pt-32 pb-20 text-white md:pb-24">
          <div className="container relative z-10 mx-auto grid items-center gap-10 px-4 md:grid-cols-[1.05fr_.95fr] md:px-6">
            <div>
              <span className="site-eyebrow mb-6">Barcode labels & labeling solutions · printers to complete the workflow</span>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-.045em] md:text-6xl">Reliable Barcode Printing Solutions</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Professional thermal barcode printing solutions for manufacturing, warehousing, logistics, retail, e-commerce and industrial identification applications.</p>
              <p className="mt-4 max-w-xl leading-7 text-slate-300">Choose the right barcode printer for your application and pair it with compatible labels and thermal transfer ribbons from Inside Out Packaging Industries.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#printers" className="button-arrow inline-flex"><Button size="lg" className="w-full font-semibold sm:w-auto" data-testid="button-explore-printers">Explore Printers<ArrowDown className="ml-2 h-4 w-4" /></Button></a>
                <InquiryDialog product="Barcode printer, labels and ribbons — complete workflow" className="border-white/30 bg-transparent text-white hover:bg-white/10" />
              </div>
            </div>
            <div className="relative grid grid-cols-[1.1fr_.9fr] items-center gap-3 md:gap-5">
              <div className="overflow-hidden rounded-2xl border border-white/20 bg-white p-3 shadow-2xl"><img src={PRINTER_HERO_IMAGES.tsc} alt="TSC DA200 direct thermal barcode printer with labels" loading="lazy" className="aspect-[4/3] w-full object-contain" /></div>
              <div className="mt-12 overflow-hidden rounded-2xl border border-white/20 bg-white p-3 shadow-xl"><img src={PRINTER_HERO_IMAGES.dcode} alt="Dcode-branded barcode printer, angled view" loading="lazy" className="aspect-[4/3] w-full object-contain" /></div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-[#132e50] px-5 py-3 text-center text-xs font-semibold tracking-wide text-white shadow-lg">LABELS FIRST <span className="mx-2 text-orange-400">/</span> PRINTERS TO MATCH</div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-[#fbfaf7] py-7">
          <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 text-center text-sm font-semibold text-[#0F2747] md:px-6">
            <span>Barcode labels</span><span className="text-orange-500">+</span><span>Barcode printers</span><span className="text-orange-500">+</span><span>Thermal transfer ribbons</span><span className="text-orange-500">=</span><span className="text-primary">Complete printing workflow</span>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div><span className="site-eyebrow">Explore the brands</span><h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0F2747] md:text-4xl">Printer options, backed by label expertise</h2></div>
              <p className="max-w-lg leading-7 text-slate-600">We show only what is identified in the supplied product material. Confirm exact model, specifications and media compatibility with our team.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">{BARCODE_PRINTERS.map((printer, index) => <PrinterCard key={`${printer.brand}-${printer.model ?? index}`} printer={printer} index={index} />)}</div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#fbfaf7] py-14 md:py-16">
          <div className="container mx-auto grid gap-6 px-4 md:grid-cols-[.55fr_1.45fr] md:items-start md:px-6">
            <div><span className="site-eyebrow">Product overview</span><h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[#0F2747]">A practical printer-and-media conversation</h2></div>
            <div className="space-y-4 text-sm leading-7 text-slate-600">
              <p>Inside Out Packaging Industries is a manufacturer of barcode labels and labeling solutions. Printer options from Dcode and TSC complement that core work, helping buyers consider the printer alongside the media that will run through it.</p>
              <p>The supplied TSC image identifies the DA200 and Direct Thermal printing. The Dcode and other TSC photography shows branded printers, but does not verify exact model numbers or specifications. We keep those details open until the model and application are confirmed.</p>
              <p>Verified model features and performance specifications are not available for every pictured printer, so unverified feature and specification rows are intentionally omitted.</p>
            </div>
          </div>
        </section>

        <section className="surface-grid py-20 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center"><span className="site-eyebrow">Select by workflow</span><h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0F2747] md:text-4xl">Choose the Right Printer for Your Application</h2><p className="mt-4 leading-7 text-slate-600">These are selection categories, not claims of specific models in our verified range. Ask us to confirm a suitable option for your needs.</p></div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PRINTER_CATEGORIES.map((category, i) => <a key={category.title} href="#printers" className="industrial-card group rounded-xl p-6" data-testid={`link-category-${i}`}>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0F2747] text-white">{i === 0 ? <Printer /> : i === 1 ? <Factory /> : i === 2 ? <ScanLine /> : <Layers3 />}</div>
                <h3 className="mt-5 text-lg font-bold text-[#0F2747]">{category.title}</h3><p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-600">{category.description}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">View Printers<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
              </a>)}
            </div>
          </div>
        </section>

        <section id="printers" className="scroll-mt-20 bg-white py-20 md:py-24">
          <div className="container mx-auto grid gap-12 px-4 md:grid-cols-[.82fr_1.18fr] md:px-6">
            <div><span className="site-eyebrow">Built around the media</span><h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0F2747] md:text-4xl">Compatible Labels & Ribbons</h2><p className="mt-4 leading-7 text-slate-600">Complete your barcode printing workflow with compatible labels and thermal transfer ribbons. Exact compatibility depends on printer model, media dimensions and application; our team can help confirm.</p>
              <div className="mt-7 rounded-xl border border-orange-200 bg-orange-50/70 p-4 text-sm leading-6 text-[#0F2747]"><CircleHelp className="mr-2 inline h-4 w-4 text-primary" />The pictured TSC DA200 is identified as Direct Thermal. Direct thermal labels do not use ribbon. Confirm printer and media compatibility before ordering.</div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row md:flex-col xl:flex-row">
                <Link href="/products" className="inline-flex"><Button variant="outline" className="w-full border-[#0F2747] text-[#0F2747]" data-testid="link-consumables-catalog">Browse consumables<ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                <InquiryDialog product="Compatible barcode labels and ribbons" label="Get Compatible Labels & Ribbons" />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#f5f4ef] p-6 md:p-8"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-primary"><Tags /></div><h3 className="text-xl font-bold text-[#0F2747]">Labels</h3></div><ul className="mt-6 space-y-3">{["Direct Thermal Labels", "Thermal Transfer Labels", "Custom Barcode Labels", "Shipping Labels", "Product Identification Labels", "Inventory Labels"].map(item => <li key={item} className="flex items-start gap-2 text-sm text-slate-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}</ul></div>
              <div className="rounded-2xl bg-[#0F2747] p-6 text-white md:p-8"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-orange-300"><Layers3 /></div><h3 className="text-xl font-bold">Thermal transfer ribbons</h3></div><p className="mt-4 text-sm leading-6 text-slate-300">Supporting consumables for confirmed thermal transfer workflows.</p><ul className="mt-5 space-y-3">{["Wax Ribbons", "Wax-Resin Ribbons", "Resin Ribbons"].map(item => <li key={item} className="flex items-start gap-2 text-sm text-slate-200"><Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" />{item}</li>)}</ul><Link href="/products" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-orange-300" data-testid="link-ribbons-products">See ribbons in product catalog<ArrowRight className="h-4 w-4" /></Link></div>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f3ee] py-20 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center"><span className="site-eyebrow">A coordinated system</span><h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0F2747] md:text-4xl">Complete Barcode Printing Solution</h2><p className="mt-4 leading-7 text-slate-600">From printer selection to compatible labels and ribbons, Inside Out Packaging Industries helps businesses build a coordinated barcode printing workflow.</p></div>
            <div className="mt-12 grid items-center gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
              {[["01", "Barcode printer", Printer], ["02", "Barcode label", Tags], ["03", "Thermal transfer ribbon", Layers3], ["04", "Finished printed label", Barcode]].map(([number, label, Icon], i) => {
                const StepIcon = Icon as typeof Printer;
                return <div key={number as string} className="contents">
                  <div className="flex min-h-40 flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><span className="mono-label text-primary">{number as string} / workflow</span><StepIcon className="h-5 w-5 text-[#0F2747]" /></div><p className="mt-7 text-lg font-bold text-[#0F2747]">{label as string}</p></div>
                  {i < 3 && <div className="flex justify-center text-primary"><ArrowRight className="hidden h-5 w-5 md:block" /><ArrowDown className="h-5 w-5 md:hidden" /></div>}
                </div>;
              })}
            </div>
            <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-slate-500">A direct thermal printer uses suitable direct thermal labels without ribbon. Thermal transfer workflows require compatible labels and ribbon, confirmed for the printer and application.</p>
          </div>
        </section>

        <section id="applications" className="scroll-mt-24 py-20 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div><span className="site-eyebrow">Where labels work</span><h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0F2747] md:text-4xl">Applications</h2></div>
              <p className="max-w-xl text-sm leading-6 text-slate-600">See how barcode printing fits into common production, warehouse and dispatch workflows.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {applicationPhotoItems.map(({ title, detail, image, alt }) => (
                <article key={title} className="industrial-card group overflow-hidden rounded-2xl">
                  <div className="aspect-[16/10] overflow-hidden bg-[#f5f4ef]">
                    <img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <div className="p-5">
                    <p className="site-eyebrow">Application</p>
                    <h3 className="mt-2 text-lg font-bold text-[#0F2747]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-2">
              <span className="mr-1 text-sm font-semibold text-[#0F2747]">More application areas:</span>
              {additionalApplications.map((item) => <span key={item} className="rounded-full border border-slate-200 bg-[#fbfaf7] px-3 py-1.5 text-sm text-slate-600">{item}</span>)}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#fbfaf7] py-14 md:py-16">
          <div className="container mx-auto px-4 md:px-6"><div className="grid gap-7 md:grid-cols-[.7fr_1.3fr] md:items-center"><div><span className="site-eyebrow">Across sectors</span><h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[#0F2747] md:text-3xl">Barcode Printing Solutions for Multiple Industries</h2></div><div className="flex flex-wrap gap-2">{industries.map((industry) => <span key={industry} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700">{industry}</span>)}</div></div></div>
        </section>

        <section className="bg-[#0F2747] py-20 text-white md:py-24">
          <div className="container mx-auto grid gap-10 px-4 md:grid-cols-[.8fr_1.2fr] md:px-6">
            <div><span className="site-eyebrow">Inside Out Packaging Industries</span><h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">More Than a Printer</h2><p className="mt-5 leading-7 text-slate-300">Your barcode printing system depends on more than the printer itself. The right combination of printer, label material and ribbon helps create a consistent labeling workflow.</p></div>
            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">{[
              ["01", "Label Manufacturing", "Barcode labels manufactured for different sizes, materials and applications."],
              ["02", "Printer Compatibility", "Helping you identify suitable labels and ribbons for your printer."],
              ["03", "Custom Label Solutions", "Label specifications can be adapted according to your application requirements."],
              ["04", "Complete Labeling Support", "Printer, labels and ribbons from one coordinated source."],
            ].map(([num, title, copy]) => <article key={num} className="border-t border-white/20 pt-4"><span className="mono-label text-orange-300">{num}</span><h3 className="mt-3 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{copy}</p></article>)}</div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container mx-auto grid gap-10 px-4 md:grid-cols-[.85fr_1.15fr] md:px-6">
            <div><span className="site-eyebrow">Selection guide</span><h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0F2747] md:text-4xl">Need Help Choosing a Barcode Printer?</h2><p className="mt-4 leading-7 text-slate-600">The right fit depends on your application and media. Use these points to prepare for a conversation with our team.</p><div className="mt-7"><InquiryDialog product="Barcode printer selection guidance" label="Talk to Our Team" /></div></div>
            <ol className="grid gap-3 sm:grid-cols-2">{selectionItems.map((item, i) => <li key={item} className="flex items-center gap-4 rounded-lg border border-slate-200 bg-[#fbfaf7] px-4 py-4"><span className="font-mono text-sm font-bold text-primary">{String(i + 1).padStart(2, "0")}</span><span className="font-semibold text-[#0F2747]">{item}</span></li>)}</ol>
          </div>
        </section>

        <section className="pb-20 md:pb-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative overflow-hidden rounded-2xl bg-[#0F2747] px-6 py-12 text-white md:px-12 md:py-14">
              <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[40%] border-l border-white/10 bg-white/[.025] md:block" />
              <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div><span className="site-eyebrow">Start with your requirements</span><h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">Complete Your Barcode Printing Setup</h2><p className="mt-4 max-w-2xl leading-7 text-slate-300">Tell us your printer, label size and application requirements. We can help you identify compatible barcode labels and thermal transfer ribbons.</p></div>
                <div className="flex flex-col gap-3 sm:flex-row md:flex-col"><InquiryDialog product="Complete barcode printing setup — printer, labels and ribbons" label="Request a Quote" /><Link href="/contact" className="inline-flex"><Button variant="outline" className="w-full border-white/40 bg-transparent text-white hover:bg-white/10" data-testid="link-contact-team">Contact Us<ArrowRight className="ml-2 h-4 w-4" /></Button></Link></div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-600"><span>Related consumables:</span><Link href="/products" className="font-semibold text-[#0F2747] underline-offset-4 hover:underline" data-testid="link-barcode-labels">Barcode Labels</Link><Link href="/products" className="font-semibold text-[#0F2747] underline-offset-4 hover:underline" data-testid="link-direct-thermal">Direct Thermal Labels</Link><Link href="/products" className="font-semibold text-[#0F2747] underline-offset-4 hover:underline" data-testid="link-thermal-transfer-labels">Thermal Transfer Labels</Link><Link href="/products" className="font-semibold text-[#0F2747] underline-offset-4 hover:underline" data-testid="link-thermal-transfer-ribbons">Thermal Transfer Ribbons</Link></div>
          </div>
        </section>
      </>
    </Layout>
  );
}