import { motion } from "framer-motion";
import { HiOutlineBadgeCheck, HiOutlineUserGroup, HiOutlineGlobe } from "react-icons/hi";

const stats = [
  { label: "Renewable Projects", value: "500+", icon: HiOutlineBadgeCheck, color: "text-gw-leaf" },
  { label: "Water Systems", value: "1.2M", icon: HiOutlineUserGroup, color: "text-gw-sky" },
  { label: "Countries Served", value: "12+", icon: HiOutlineGlobe, color: "text-gw-sun" },
];

export const AboutUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <span className="text-gw-leaf font-bold tracking-[0.2em] uppercase text-xs">Since 2026</span>
            <h2 className="text-5xl font-serif text-gw-forest mt-4 mb-6 leading-tight">Africa's Leading Partner in <br/><span className="italic text-gw-leaf">Industrial Excellence</span></h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>GreenWorld Company Limited is a multi-sectoral engineering firm incorporated under the Companies Act 2023. Our mission is to bridge the infrastructure gap in Tanzania and across Africa through sustainable innovation.</p>
              <p>From designing complex geothermal plants to drilling high-yield boreholes in remote regions, our approach is defined by precision and environmental stewardship. We provide consultancy in peaceful nuclear energy development, ensuring the continent stays at the forefront of global technological transitions.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 bg-gw-base rounded-[2.5rem] border border-slate-100 shadow-sm">
              <p className="text-gw-leaf font-bold text-sm mb-4 uppercase tracking-widest">Phone Support</p>
              <p className="text-gw-forest font-bold text-lg">+255 756 616 898</p>
              <p className="text-gw-forest font-bold text-lg">+255 356 168 98</p>
            </div>
            <div className="p-8 bg-gw-forest rounded-[2.5rem] text-white">
              <p className="text-gw-sun font-bold text-sm mb-4 uppercase tracking-widest">Email Enquiries</p>
              <p className="text-sm font-medium">contact@greenworldlimited.com</p>
              <p className="text-xs opacity-60 mt-2">Available 24/7 for technical support</p>
            </div>
          </div>
        </div>

        {/* GOOGLE MAPS INTEGRATION */}
        <div className="w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126781.93604470487!2d39.184323631988974!3d-6.768615015263623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c49008272545d%3A0x899f83a48e1b6f9e!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700" 
            allowFullScreen="" loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;