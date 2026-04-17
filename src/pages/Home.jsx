import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  HiArrowRight, 
  HiOutlineLightningBolt, 
  HiOutlineGlobeAlt, 
  HiOutlineChartBar, 
  HiOutlineShieldCheck 
} from "react-icons/hi";
import { GiWaterDrop, GiDrill, GiGreenhouse, GiTruck } from "react-icons/gi";
import { Link } from "react-router-dom";

// Components & Utils
import Button from "../atoms/Button";
import { Section } from "../atoms/Section";
import { cn } from "../utils/cn";

// Data Mapping (DRY Principle)
const IMAGES = {
  hero: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776160060/hero_mj42il.jpg",
  hq: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776160056/headquarters_aivrrv.jpg",
  energy: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776160057/renewableEnergy_hzw4gx.jpg",
  water: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776160055/waterInfrastructure_b5df4r.jpg",
  const: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776160056/construction_bcaayp.jpg",
  agri: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776160071/agriculture_qszztl.png",
  logistics: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776160058/logistics_section_udbhzh.png",
};

const SERVICES = [
  { title: "Renewable Energy", img: IMAGES.energy, icon: HiOutlineLightningBolt, color: "bg-gw-sun", desc: "C&I Solar infrastructure and high-tier advisory." },
  { title: "Water Solutions", img: IMAGES.water, icon: GiWaterDrop, color: "bg-gw-sky", desc: "Drilling, Reverse Osmosis, and purification engineering." },
  { title: "EPC Services", img: IMAGES.const, icon: GiDrill, color: "bg-slate-700", desc: "Full-cycle industrial design, procurement and construction." },
];

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "30%"]);

  return (
    <div ref={containerRef} className="bg-gw-base selection:bg-gw-leaf selection:text-white">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img src={IMAGES.hero} className="w-full h-full object-cover scale-110 brightness-[0.35]" alt="Industrial Landscape" />
        </motion.div>
        
        {/* Animated Energy Flow Particles Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <motion.div 
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" 
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gw-sun font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Powering a Sustainable Future</span>
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-[1.1]">
              Engineering Africa's <br/> 
              <span className="text-gw-leaf italic font-light underline decoration-gw-sun/30 decoration-offset-8">Resilience.</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Utility-scale solar engineering, water infrastructure, and industrial logistics 
              delivered with Tanzanian heart and global precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/contact"><Button className="h-16 px-10 text-lg">Explore Projects <HiArrowRight/></Button></Link>
              <Link to="/about"><Button variant="outline" className="h-16 px-10 text-lg">About the Company</Button></Link>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-gw-base to-transparent" />
      </div>

      {/* 2. EXPANDED ABOUT SECTION */}
      <Section className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white relative z-10"
          >
            <img src={IMAGES.hq} className="w-full h-[650px] object-cover" alt="Headquarters" />
          </motion.div>
          {/* Floating Experience Badge */}
          <div className="absolute -bottom-8 -right-8 bg-gw-forest p-10 rounded-[3rem] text-white shadow-2xl z-20 hidden md:block border-4 border-gw-leaf">
            <h3 className="text-5xl font-bold text-gw-sun">2026</h3>
            <p className="text-xs uppercase tracking-[0.2em] font-bold opacity-70 mt-2">Established</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <span className="text-gw-leaf font-bold tracking-widest uppercase text-xs">Corporate Profile</span>
            <h2 className="text-5xl font-serif text-gw-forest mt-4 mb-6 leading-tight">Leading the <span className="text-gw-leaf italic">Energy Transition</span> in East Africa</h2>
            <div className="space-y-5 text-slate-600 text-lg">
              <p>Incorporated under the Companies Act 2023, <strong>GreenWorld Company Limited</strong> is a multi-sector engineering powerhouse dedicated to sustainable industrialization.</p>
              <p>Our expertise spans from borehole drilling and desalination to the design of advanced Geothermal systems and feasibility studies for peaceful nuclear energy development.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 py-6">
            <div className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-slate-100">
              <HiOutlineChartBar className="text-gw-sun text-3xl mb-4" />
              <p className="text-3xl font-bold text-gw-forest">450+</p>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Active Grids</p>
            </div>
            <div className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-slate-100">
              <HiOutlineShieldCheck className="text-gw-leaf text-3xl mb-4" />
              <p className="text-3xl font-bold text-gw-forest">100%</p>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Safety Compliance</p>
            </div>
          </div>

          <div className="p-8 bg-gw-forest rounded-[3rem] text-white flex items-center justify-between group cursor-pointer overflow-hidden relative">
            <div className="relative z-10">
              <p className="text-gw-sun font-bold text-xs uppercase mb-1">Direct Technical Support</p>
              <p className="text-xl font-bold">+255 756 616 898</p>
            </div>
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-gw-leaf transition-all relative z-10">
              <HiArrowRight/>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gw-leaf/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-gw-leaf/20 transition-all" />
          </div>
        </div>
      </Section>

      {/* 3. CENTERED SERVICES SECTION */}
      <Section id="solutions-hub" className="bg-gw-forest rounded-[5rem] mx-4 md:mx-10 my-20 py-24 text-white">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gw-sun font-bold tracking-widest uppercase text-xs">Our Ecosystem</span>
          <h2 className="text-5xl font-serif mt-4 mb-6">Utility-Scale Engineering</h2>
          <p className="text-white/60 text-lg">Centered on the intersection of technological progress and environmental stewardship.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 justify-items-center">
          {SERVICES.map((s, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -15 }}
              className="group relative h-[480px] w-full max-w-[380px] rounded-[3rem] overflow-hidden shadow-xl"
            >
              <img src={s.img} className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt={s.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-gw-forest via-gw-forest/20 to-transparent" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-2xl transition-transform group-hover:rotate-[360deg] duration-500", s.color)}>
                  <s.icon size={30} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 4. FULL SUSTAINABILITY & AFRICA GLOW */}
      <Section className="relative overflow-hidden pt-32 pb-40">
        {/* Animated Background Energy Flow SVG */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
          <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none">
            <motion.path 
              d="M-100 600 C 200 400 600 800 1500 400" 
              stroke="#4DAD46" strokeWidth="2" strokeDasharray="10 10"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 4 }}
            />
            <motion.path 
              d="M-100 400 C 400 700 800 200 1500 600" 
              stroke="#FBBF24" strokeWidth="1" strokeDasharray="5 5"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 6 }}
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-8">
            <span className="text-gw-leaf font-bold tracking-widest uppercase text-xs">Sustainability Section</span>
            <h2 className="text-5xl md:text-6xl font-serif text-gw-forest leading-tight">
              A Network of <span className="text-gw-leaf italic underline decoration-gw-sun/40 decoration-8">Energy</span> across Africa.
            </h2>
            
            {/* Carbon Dashboard Visualization */}
            <div className="bg-white p-10 rounded-[3.5rem] shadow-2xl border border-slate-50 relative">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">CO2 Offset Live</p>
                  <h4 className="text-4xl font-bold text-gw-forest tracking-tighter mt-1">240.8k <span className="text-lg text-gw-leaf italic">Metric Tons</span></h4>
                </div>
                <div className="w-16 h-16 bg-gw-leaf/10 rounded-2xl flex items-center justify-center text-gw-leaf">
                  <HiOutlineGlobeAlt size={32}/>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-500">
                    <span>RENEWABLE OUTPUT</span>
                    <span>88%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "88%" }} transition={{ duration: 2 }} className="h-full bg-gw-leaf" />
                  </div>
                </div>
                <p className="text-sm text-slate-500 italic">Our green energy flow animations represent real-time connectivity across our Tanzanian utility grids.</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            {/* The Africa Glow Visual */}
            <div className="relative w-[450px] h-[450px] md:w-[550px] md:h-[550px]">
              <motion.div 
                animate={{ scale: [1, 1.15, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute inset-0 bg-gw-leaf/10 rounded-full blur-[100px]"
              />
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute inset-0 border-[20px] border-white/40 rounded-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover rounded-full shadow-[0_0_80px_rgba(77,173,70,0.3)] grayscale-[0.4] hover:grayscale-0 transition-all duration-1000 p-4" 
                alt="Green Africa" 
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 5. FINAL CTA SECTION */}
      <Section className="pb-32">
        <div className="bg-gw-forest p-12 md:p-24 rounded-[5rem] text-center text-white relative overflow-hidden group">
          <div className="absolute inset-0 bg-gw-leaf/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h2 className="text-4xl md:text-6xl font-serif mb-8 relative z-10 leading-tight">Ready to Engineer the <br/><span className="text-gw-leaf">Transition?</span></h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Link to="/contact"><Button className="h-16 px-12 bg-gw-sun text-gw-forest hover:bg-white">Partner With Us</Button></Link>
            <Link to="/services"><Button variant="outline" className="h-16 px-12 border-white/20 hover:bg-white/10">Browse Solutions</Button></Link>
          </div>
        </div>
      </Section>

    </div>
  );
};

export default Home;