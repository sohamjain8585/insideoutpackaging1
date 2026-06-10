import { Layout } from "@/components/layout/Layout";
import { useSEO } from "@/hooks/use-seo";
import { motion } from "framer-motion";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  useSEO({
    title: "Contact Us & Request Quote",
    description: "Get in touch with Inside Out Packaging Industries for bulk quotes, custom barcode label specifications, and industrial thermal ribbon inquiries.",
  });

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-[#0F2747] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to optimize your packaging? Our experts are here to help.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1 space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-2xl font-bold text-[#0F2747] mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F2747]">Phone</h4>
                      <p className="text-slate-600 mb-1">Er. Soham Sanjay Jain</p>
                      <a href="tel:8530658864" className="text-primary hover:underline font-semibold block">+91 8530658864</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F2747]">Email</h4>
                      <a href="mailto:SJ.insideout@gmail.com" className="text-primary hover:underline font-semibold block">SJ.insideout@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F2747]">Location</h4>
                      <p className="text-slate-600">Inside Out Packaging Industries<br/>Maharashtra, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F2747]">Business Hours</h4>
                      <p className="text-slate-600">Mon - Sat: 9:00 AM - 6:00 PM IST<br/>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Maps Embed */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-[300px] bg-slate-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411931541671!3d18.562253987384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f0fb1e51c8a14c3!2sMaharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </div>
            </motion.div>

            {/* Forms */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <Tabs defaultValue="quote" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 h-14 bg-white border border-slate-200 rounded-xl p-1">
                  <TabsTrigger value="quote" className="rounded-lg text-base data-[state=active]:bg-primary data-[state=active]:text-white">Request Quote</TabsTrigger>
                  <TabsTrigger value="inquiry" className="rounded-lg text-base data-[state=active]:bg-primary data-[state=active]:text-white">General Inquiry</TabsTrigger>
                </TabsList>
                
                <TabsContent value="quote" className="mt-0">
                  <QuoteForm />
                </TabsContent>
                
                <TabsContent value="inquiry" className="mt-0">
                  <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-[#0F2747]">Send an Inquiry</h3>
                      <p className="text-slate-500 mt-2">Have a question about our products or capabilities? Drop us a message.</p>
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
