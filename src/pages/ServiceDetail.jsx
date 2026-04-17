import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { HiArrowLeft, HiBadgeCheck, HiArrowRight } from "react-icons/hi";
import { SERVICES_DATA } from "../utils/servicesData";
import ServiceSlideshow from "../components/ServiceSlideshow";
import Button from "../atoms/Button";
import { cn } from "../utils/cn";

const ServiceDetail = () => {
  const { id } = useParams();
  const data = SERVICES_DATA[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) return <div className="h-screen flex items-center justify-center">Service Not Found</div>;

  return (
    <div className="bg-gw-base min-h-screen">
      {/* HERO */}
      <div className="relative h-[60vh] md:h-[70vh] flex items-end">
        <ServiceSlideshow images={data.images || [data.heroImage]} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <Link to="/" className="flex items-center gap-2 text-white/70 hover:text-gw-sun mb-6 transition-colors">
            <HiArrowLeft /> Back
          </Link>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-7xl font-serif text-white leading-tight"
          >
            {data.title} <br/>
            <span className="text-gw-sun italic text-xl md:text-2xl font-light tracking-[0.2em]">{data.subtitle}</span>
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-8 space-y-12">
            {/* OVERVIEW CARD */}
            <div className="p-10 bg-white rounded-[3rem] shadow-xl border border-slate-50 relative overflow-hidden">
              <div className={cn("absolute top-0 right-0 w-32 h-32 blur-3xl opacity-10", data.accent)} />
              <h2 className="text-3xl font-serif text-gw-forest mb-6">Service Overview</h2>
              <p className="text-slate-600 text-lg leading-relaxed">{data.description}</p>
            </div>

            {/* IF SUB-SERVICES EXIST (Dynamic Linking Hub) */}
            {data.subServices && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.subServices.map((subId) => {
                  const sub = SERVICES_DATA[subId];
                  return (
                    <Link key={subId} to={`/services/${subId}`} className="group relative h-64 rounded-[2.5rem] overflow-hidden shadow-lg border-2 border-transparent hover:border-gw-leaf transition-all">
                      <img src={sub.heroImage} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700 brightness-50" alt="" />
                      <div className="absolute inset-0 bg-gradient-to-t from-gw-forest/80 to-transparent" />
                      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                        <div>
                          <p className="text-gw-sun text-[10px] font-bold uppercase tracking-widest mb-1">{sub.subtitle}</p>
                          <h4 className="text-white font-bold text-xl">{sub.title}</h4>
                        </div>
                        <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-gw-leaf transition-colors">
                          <HiArrowRight />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}

            {/* SOLUTIONS BLOCKS (If it's a deep-dive page) */}
            {data.solutions && (
              <div className="grid gap-8">
                {data.solutions.map((sol, idx) => (
                  <div key={idx} className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-slate-100">
                    <h3 className="text-gw-leaf font-bold text-sm mb-4 uppercase tracking-[0.2em]">{sol.name}</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {sol.details.map((d, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-gw-base rounded-2xl text-sm font-medium text-gw-forest">
                          <HiBadgeCheck className="text-gw-sun" /> {d}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32 p-10 bg-gw-forest rounded-[3.5rem] text-white shadow-2xl">
               <h4 className="text-2xl font-serif mb-4">Industrial Inquiries</h4>
               <p className="text-white/50 text-sm mb-10">Connect with our engineering desk for specific technical documentation.</p>
               <Link to="/contact"><Button className="w-full py-6 bg-gw-leaf hover:bg-gw-sun hover:text-gw-forest">Contact Engineers</Button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;