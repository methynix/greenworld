import { motion } from "framer-motion";
import { HiOutlineLightningBolt, HiOutlineBriefcase } from "react-icons/hi";
import { GiWaterDrop, GiDrill, GiGreenhouse, GiTruck } from "react-icons/gi";

const services = [
  {
    title: "Renewable Energy",
    desc: "Hybrid ESS, utility-scale solar installations, and peaceful nuclear consultancy.",
    img: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776160057/renewableEnergy_hzw4gx.jpg",
    icon: HiOutlineLightningBolt,
    accent: "bg-amber-400"
  },
  {
    title: "Water Engineering",
    desc: "Borehole drilling, desalination plants, and advanced wastewater treatment.",
    img: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776160055/waterInfrastructure_b5df4r.jpg",
    icon: GiWaterDrop,
    accent: "bg-gw-sky"
  },
  {
    title: "Construction",
    desc: "Developing dams, irrigation schemes, and smart commercial infrastructure.",
    img: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776160056/construction_bcaayp.jpg",
    icon: GiDrill,
    accent: "bg-slate-700"
  },
  {
    title: "Agri-Supply",
    desc: "Climate-smart farming inputs, fertilizers, and agro-tech consultancy.",
    img: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776160071/agriculture_qszztl.png",
    icon: GiGreenhouse,
    accent: "bg-gw-leaf"
  },
  {
    title: "Logistics",
    desc: "Fleet management, clearing & forwarding, and strategic warehousing.",
    img: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776160058/logistics_section_udbhzh.png",
    icon: GiTruck,
    accent: "bg-orange-500"
  },
  {
    title: "Training & Advisory",
    desc: "Specialized capacity building in water tech and industrial safety standards.",
    img: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776160056/headquarters_aivrrv.jpg",
    icon: HiOutlineBriefcase,
    accent: "bg-gw-forest"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 px-6 bg-gw-base">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-gw-leaf font-bold tracking-widest uppercase text-sm">Our Expertise</span>
            <h2 className="text-5xl font-serif text-gw-forest mt-4">Infrastructure & Engineering Solutions</h2>
          </div>
          <p className="text-slate-500 max-w-sm">
            We operate at the intersection of technology and sustainability, 
            providing end-to-end services for Africa's key industrial sectors.
          </p>
        </div>

        {/* DRY Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Image Background */}
              <img 
                src={service.img} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={service.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gw-forest via-gw-forest/20 to-transparent" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className={`w-14 h-14 ${service.accent} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:rotate-[360deg] transition-transform duration-500`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {service.desc}
                </p>
                
                <div className="mt-6 flex items-center gap-2 text-gw-sun font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Technical Specs <div className="h-0.5 w-10 bg-gw-sun" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;