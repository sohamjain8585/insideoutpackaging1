import { Layout } from "@/components/layout/Layout";
import { useSEO } from "@/hooks/use-seo";
import { motion } from "framer-motion";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    content: (
      <>
        <a href="tel:8530658864" className="text-primary hover:underline font-semibold text-lg block">+91 8530658864</a>
      </>
    ),
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    content: (
      <>
        <p className="text-slate-600 mb-1 text-sm">Send requirements, sizes, or specs directly</p>
        <a href="https://wa.me/918530658864" target="_blank" rel="noreferrer" className="text-green-600 hover:underline font-semibold block">
          Open WhatsApp Chat
        </a>
      </>
    ),
  },
  {
    icon: Mail,
    label: "Email",
    content: (
      <>
        <p className="text-slate-600 mb-1 text-sm">For quotes, bulk inquiries, or technical queries</p>
        <a href="mailto:SJ.insideout@gmail.com" className="text-primary hover:underline font-semibold block break-all">SJ.insideout@gmail.com</a>
      </>
    ),
  },
  {
    icon: MapPin,
    label: "Address",
    content: (
      <>
        <p className="text-slate-700 font-semibold">Inside Out Packaging Industries</p>
        <p className="text-slate-600 text-sm mt-1">
          Janki Furniture, Koregaon Bhima<br />
          Tal-Shirur, Pune – 412216<br />
          Maharashtra, India
        </p>
      </>
    ),
  },
  {
    icon: Clock,
    label: "Business Hours",
    content: (
      <>
        <p className="text-slate-700 font-medium">Mon – Sat: 9:00 AM – 6:00 PM IST</p>
        <p className="text-slate-500 text-sm mt-1">Sunday: Closed</p>
        <p className="text-slate-500 text-sm">WhatsApp available outside hours for urgent requirements</p>
      </>
    ),
  },
];

export default function Contact() {
  useSEO({
    title: "Contact Us & Request a Quote",
    description: "Get in touch with Inside Out Packaging Industries for bulk quotes, custom barcode label specifications, and industrial thermal ribbon inquiries. Based in Koregaon Bhima, Pune.",
    keywords: "Contact Inside Out Packaging Industries, Barcode Labels Quote Pune, Thermal Ribbon Supplier Contact Maharashtra",
  });

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 bg-[#0F2747] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary to-transparent" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ready to source industrial labels that won't let your operation down? Our team responds within 2–4 business hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Action Bar */}
      <section className="bg-white border-b border-slate-100 py-5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:8530658864" data-testid="link-contact-call">
              <Button className="gap-2 h-11 px-6 bg-[#0F2747] hover:bg-[#0F2747]/90">
                <Phone className="h-4 w-4" /> Call +91 8530658864
              </Button>
            </a>
            <a href="https://wa.me/918530658864" target="_blank" rel="noreferrer" data-testid="link-contact-whatsapp">
              <Button className="gap-2 h-11 px-6 bg-green-500 hover:bg-green-600">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us Now
              </Button>
            </a>
            <a href="mailto:SJ.insideout@gmail.com" data-testid="link-contact-email">
              <Button variant="outline" className="gap-2 h-11 px-6 border-[#0F2747] text-[#0F2747] hover:bg-[#0F2747] hover:text-white">
                <Mail className="h-4 w-4" /> SJ.insideout@gmail.com
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-1 space-y-5">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-2xl font-bold text-[#0F2747] mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary mt-0.5">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0F2747] mb-1">{item.label}</h4>
                        {item.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-[#0F2747] p-6 rounded-2xl text-white">
                <h4 className="font-bold text-lg mb-4">What to Include in Your Inquiry</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  {[
                    "Label size (width × height in mm)",
                    "Printer brand and model number",
                    "Substrate type (paper, PP, PET, etc.)",
                    "Adhesive requirement (permanent, removable, freezer)",
                    "Quantity required per month",
                    "Core diameter (25mm or 38mm)",
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Forms */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2">
              <Tabs defaultValue="quote" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 h-14 bg-white border border-slate-200 rounded-xl p-1">
                  <TabsTrigger value="quote" className="rounded-lg text-base data-[state=active]:bg-primary data-[state=active]:text-white">
                    Request Quote
                  </TabsTrigger>
                  <TabsTrigger value="inquiry" className="rounded-lg text-base data-[state=active]:bg-primary data-[state=active]:text-white">
                    General Inquiry
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="quote" className="mt-0">
                  <QuoteForm />
                </TabsContent>

                <TabsContent value="inquiry" className="mt-0">
                  <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-[#0F2747]">Send an Inquiry</h3>
                      <p className="text-slate-500 mt-2">Have a question about our products, compatibility, or capabilities? Drop us a message and we'll respond within 2–4 business hours.</p>
                    </div>
                    <InquiryForm />
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
