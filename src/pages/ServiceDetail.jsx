import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowLeft, HiCheckCircle } from "react-icons/hi";
import { SERVICES_DATA } from "../utils/servicesData";
import Button from "../atoms/Button";
import { Section } from "../atoms/Section";

const ServiceDetail = () => {
  const { id } = useParams(); // Gets 'energy', 'water', etc. from URL
  const data = SERVICES_DATA[id];

  if (!data) return <div className="pt-40 text-center">Service not found.</div>;

  return (
    <div className="bg-gw-base min-h-screen">
      {/* CINEMATIC HERO */}
      <div className="relative h-[60vh] w-full flex items-end">
        <img src={data.heroImage} className="absolute inset-0 w-full h-full object-cover brightness-50" alt={data.title} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <Link to="/" className="flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
            <HiArrowLeft /> Back to Home
          </Link>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-serif text-white leading-tight"
          >
            {data.title} <br/>
            <span className="text-gw-sun italic text-3xl font-light">{data.subtitle}</span>
          </motion.h1>
        </div>
      </div>

      <Section className="grid lg:grid-cols-12 gap-16">
        {/* Left: Description (7 columns) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="p-10 bg-white rounded-[3rem] shadow-xl border border-slate-50">
            <h2 className="text-3xl font-serif text-gw-forest mb-6">Overview</h2>
            <p className="text-slate-600 text-lg leading-relaxed">{data.description}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gw-forest ml-4 uppercase tracking-widest text-sm">Technical Specifications</h3>
            {data.features.map((f, i) => (
              <motion.div 
                key={i} initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-8 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 group hover:border-gw-leaf transition-colors"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-white ${data.accent}`}>
                  <HiCheckCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gw-forest mb-1">{f.title}</h4>
                  <p className="text-sm text-slate-500">{f.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Sidebar / CTA (5 columns) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-10 bg-gw-forest rounded-[3.5rem] text-white sticky top-32 shadow-2xl overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-3xl font-serif mb-6">Need a Technical Consultation?</h3>
              <p className="text-white/60 mb-8">Schedule a meeting with our lead engineers to discuss your project requirements and feasibility studies.</p>
              <Link to="/contact">
                <Button className="w-full py-6 text-lg bg-gw-leaf group-hover:bg-gw-sun group-hover:text-gw-forest transition-all">
                  Inquire for {data.title}
                </Button>
              </Link>
            </div>
            {/* Soft decorative glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gw-leaf/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ServiceDetail;