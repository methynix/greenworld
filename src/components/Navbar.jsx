import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import Button from "../atoms/Button";
import { cn } from "../utils/cn";

  const serviceLinks = [
  { name: "Renewable Energy", path: "/services/energy" },
  { name: "Water Infrastructure", path: "/services/water" },
  { name: "Civil Engineering", path: "/services/construction" },
  { name: "Logistics & Fleet", path: "/services/logistics" },
];


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="https://res.cloudinary.com/dwt1u991q/image/upload/v1776160056/greenland_p4kxy3.jpg" className="h-10 w-10 rounded-lg object-contain" alt="Logo" />
          <span className="font-bold text-gw-forest text-xl tracking-tighter">GREENWORLD</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/" className="text-sm font-semibold text-slate-600 hover:text-gw-leaf transition-colors">Home</NavLink>
          
          {/* SERVICES DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-gw-leaf transition-colors py-2">
              Services <HiChevronDown className={cn("transition-transform", isDropdownOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full -left-4 w-64 bg-white shadow-2xl rounded-2xl p-4 border border-slate-50"
                >
                  {serviceLinks.map((s) => (
                    <Link key={s.name} to={s.path} className="block p-3 text-sm text-slate-600 hover:bg-gw-base hover:text-gw-leaf rounded-xl transition-all">
                      {s.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/about" className="text-sm font-semibold text-slate-600 hover:text-gw-leaf transition-colors">About Us</NavLink>
          <NavLink to="/contact" className="text-sm font-semibold text-slate-600 hover:text-gw-leaf transition-colors">Contact</NavLink>
          
          <Button className="h-11 px-6 text-sm">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;