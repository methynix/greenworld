import { motion } from "framer-motion";
import {cn} from "../utils/cn";

export const Section = ({ children, className, id }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={cn("py-20 px-6 max-w-7xl mx-auto", className)}
  >
    {children}
  </motion.section>
);