import { Layout } from "@/components/layout/Layout";
import { useSEO } from "@/hooks/use-seo";
import { motion } from "framer-motion";
import { Target, Eye, Shield, Users, Truck } from "lucide-react";
import warehouseImg from "@assets/img18_1781094388914.png";
import logisticsImg from "@assets/img5_1781094388916.png";

export default function About() {
  useSEO({
    title: "About Us",
    description:
      "Learn about Inside Out Packaging Industries, our mission, vision, and commitment to manufacturing premium barcode labels and POS rolls.",
  });

  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-[#0F2747] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Building the foundations of modern supply chains through precision
            printing and unyielding quality.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                <img
                  src={warehouseImg}
                  alt="Inside Out Packaging Industries Warehouse"
                  className="w-full h-[420px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#0F2747]/10 pointer-events-none" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-xl shadow-xl hidden md:block">
                <div className="text-5xl font-extrabold mb-1">10+</div>
                <div className="font-medium text-white/90">
                  Years of Industrial
                  <br />
                  Excellence
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2747]">
                Who We Are
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded in Maharashtra, Inside Out Packaging Industries has grown
                from a specialized label converter to a comprehensive manufacturer
                of industrial packaging and identification solutions.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Under the leadership of Er. Soham Sanjay Jain, we've focused
                entirely on the intersection of manufacturing precision and supply
                chain reliability. When a label fails, a package is lost, a
                production line stops, or a retail checkout halts. We engineer our
                products to ensure that never happens.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                From high-tack asset labels for extreme environments to millions of
                POS rolls for the retail sector, our facility is equipped to handle
                volume without ever compromising on microscopic accuracy.
              </p>
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-10 rounded-2xl border border-slate-100 relative overflow-hidden"
            >
              <Target className="h-16 w-16 text-primary mb-6 opacity-80" />
              <h3 className="text-2xl font-bold text-[#0F2747] mb-4">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To empower global and domestic supply chains by providing
                flawlessly manufactured identification, tracking, and billing
                materials that eliminate downtime and enhance operational efficiency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#0F2747] text-white p-10 rounded-2xl relative overflow-hidden shadow-xl"
            >
              <Eye className="h-16 w-16 text-primary mb-6 opacity-80" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                To be the unquestioned leader in the Indian industrial packaging
                and label sector, recognized not just for volume, but for driving
                innovation in durable, sustainable tracking materials.
              </p>
            </motion.div>
          </div>

          {/* Manufacturing Excellence + Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 space-y-8"
            >
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F2747] mb-4">
                  Manufacturing Excellence
                </h2>
                <p className="text-lg text-slate-600">
                  The pillars that make us the preferred partner for industry leaders.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "ISO Standard Quality",
                    desc: "Every roll and ribbon undergoes rigorous testing for adhesive strength, print contrast, and environmental resilience.",
                  },
                  {
                    icon: Truck,
                    title: "Pan-India Logistics",
                    desc: "A robust delivery network ensuring your consumables arrive on time, preventing costly operational halts.",
                  },
                  {
                    icon: Users,
                    title: "Expert Consultation",
                    desc: "Our engineers consult on material science to match the right product to your exact use-case.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-5"
                  >
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0F2747] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={logisticsImg}
                  alt="Logistics and shipping label application"
                  className="w-full h-[420px] object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
