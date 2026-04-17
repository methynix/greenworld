import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiOutlineLightningBolt, HiOutlineBriefcase, HiArrowRight } from "react-icons/hi";
import { GiWaterDrop, GiDrill } from "react-icons/gi";
import { cn } from "../utils/cn";

// 1. DATA ARRAY: Strictly mapped to your new terminology & service IDs
const services = [
  {
    id: "energy",
    title: "Renewable Energy",
    desc: "Utility-scale Solar C&I solutions, Wind, and Hybrid ESS infrastructure designed for regional grid resilience.",
    img: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776160057/renewableEnergy_hzw4gx.jpg",
    icon: HiOutlineLightningBolt,
    accent: "bg-gw-leaf",
    glow: "shadow-gw-leaf/20"
  },
  {
    id: "water",
    title: "Water Solutions",
    desc: "Professional borehole engineering, Reverse Osmosis, and advanced purification systems for industrial use.",
    img: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776160055/waterInfrastructure_b5df4r.jpg",
    icon: GiWaterDrop,
    accent: "bg-gw-sky",
    glow: "shadow-gw-sky/20"
  },
  {
    id: "epc",
    title: "EPC Services",
    desc: "Full-cycle Engineering, Procurement, and Construction. We manage the transition from blueprint to commissioned asset.",
    img: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776160056/construction_bcaayp.jpg",
    icon: GiDrill,
    accent: "bg-slate-700",
    glow: "shadow-slate-700/20"
  },
  {
    id: "tech-consultation",
    title: "Tech Consultation",
    desc: "Strategic advisory for Peaceful Nuclear energy, Geothermal exploration, and technical feasibility studies.",
    img: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776320158/consult_j5rusp.png",
    icon: HiOutlineBriefcase,
    accent: "bg-gw-forest",
    glow: "shadow-gw-forest/20"
  }
];

const ServicesSection = () => {
  return (
    <section id="solutions-hub" className="py-24 px-6 bg-gw-base overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-gw-leaf font-bold tracking-[0.3em] uppercase text-xs"
            >
              Our Core Expertise
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-serif text-gw-forest mt-4 leading-tight">
              Industrial <span className="italic text-gw-leaf font-light">Engineering</span> <br/> 
              & Infrastructure.
            </h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-slate-500 max-w-sm text-lg leading-relaxed border-l-2 border-gw-sun/30 pl-6"
          >
            Providing end-to-end technical solutions for Africa's key energy and water sectors.
          </motion.p>
        </div>

        {/* SERVICE GRID: 2x2 for clean balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {services.map((service, index) => (
            <Link to={`/services/${service.id}`} key={index}>
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -15 }}
                className={cn(
                  "group relative h-[500px] rounded-[3.5rem] overflow-hidden shadow-2xl cursor-pointer transition-all duration-500",
                  service.glow
                )}
              >
                {/* Background Image with Cinematic Overlay */}
                <img 
                  src={service.img} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.7] group-hover:brightness-[0.4]" 
                  alt={service.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gw-forest via-gw-forest/10 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end">
                  {/* Icon Box */}
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl transition-all duration-700 group-hover:rotate-[360deg]",
                    service.accent
                  )}>
                    <service.icon size={30} />
                  </div>

                  {/* Text Details */}
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-gw-sun transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed mb-8 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                    {service.desc}
                  </p>
                  
                  {/* Call to Action Trigger */}
                  <div className="flex items-center gap-3 text-gw-sun font-bold uppercase tracking-[0.2em] text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    View Blueprint Details <HiArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>

                {/* Corner Decorative Blur (The "Girl-Boss" Touch) */}
                <div className={cn(
                  "absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity",
                  service.accent
                )} />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;