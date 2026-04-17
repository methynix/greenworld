import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { 
  HiOutlineMail, 
  HiOutlinePhone, 
  HiOutlineLocationMarker, 
  HiOutlineChatAlt2,
  HiChevronRight 
} from "react-icons/hi";

// Local Components
import Button from "../atoms/Button";
import Modal from "../components/Modal";
import { cn } from "../utils/cn";

const Contact = () => {
  const form = useRef();
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [pendingData, setPendingData] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // 1. Initial Submit (Triggers Confirmation Modal)
  const preSubmit = (data) => {
    setPendingData(data);
    setIsConfirmOpen(true);
  };

  // 2. Final Submit (Triggers EmailJS)
  const handleFinalSubmit = async () => {
    setIsSending(true);
    const toastId = toast.loading("Dispatching your inquiry to GreenWorld HQ...");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: pendingData.fullName,
          email: pendingData.email,
          phone: pendingData.phone,
          subject: pendingData.subject,
          message: pendingData.message,
          to_email: "contact@greenworldlimited.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully! Our engineers will contact you.", { id: toastId });
      reset();
      setIsConfirmOpen(false);
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please check your connection.", { id: toastId });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="pt-32 pb-20 bg-gw-base min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="mb-16 max-w-2xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gw-leaf font-bold tracking-[0.3em] uppercase text-xs"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif text-gw-forest mt-4 leading-tight"
          >
            Let's Engineer the <br/>
            <span className="italic font-light text-gw-leaf">Future Together.</span>
          </motion.h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: CONTACT INFO & MAP (40%) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Cards Grid */}
            <div className="grid sm:grid-cols-1 gap-4">
              <ContactInfoCard 
                icon={HiOutlinePhone}
                title="Phone Support"
                detail="+255 756 616 898 / +255 356 168 98"
                color="text-gw-leaf"
              />
              <ContactInfoCard 
                icon={HiOutlineMail}
                title="Email Inquiry"
                detail="contact@greenworldlimited.com"
                color="text-gw-sky"
              />
              <ContactInfoCard 
                icon={HiOutlineLocationMarker}
                title="HQ Location"
                detail="P.O.BOX 55068, Dar Es Salaam, Tanzania"
                color="text-gw-sun"
              />
            </div>

            {/* Embedded Google Map */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="w-full h-80 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white grayscale hover:grayscale-0 transition-all duration-700"
            >
              <iframe
                title="GreenWorld HQ Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126781.93604470487!2d39.184323631988974!3d-6.768615015263623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c49008272545d%3A0x899f83a48e1b6f9e!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2s!4v1713088000000!5m2!1sen!2s"
                className="w-full h-full border-none"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>

          {/* RIGHT: CONTACT FORM (60%) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-slate-50 relative overflow-hidden"
          >
            {/* Subtle Background Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-gw-leaf/5 rounded-full blur-3xl pointer-events-none" />

            <form onSubmit={handleSubmit(preSubmit)} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <InputGroup 
                  label="Full Name" 
                  register={register("fullName", { required: "Name is required" })}
                  error={errors.fullName}
                  placeholder="E.g Juvinary James"
                />
                <InputGroup 
                  label="Email Address" 
                  type="email"
                  register={register("email", { 
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                  })}
                  error={errors.email}
                  placeholder="E.g james@example.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <InputGroup 
                  label="Phone Number" 
                  register={register("phone")}
                  placeholder="+255..."
                />
                <InputGroup 
                  label="Subject" 
                  register={register("subject", { required: "Please select a topic" })}
                  error={errors.subject}
                  placeholder="E.g Solar Installation"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gw-forest ml-2 uppercase tracking-widest opacity-60">Project Brief</label>
                <textarea
                  {...register("message", { required: "Please describe your project" })}
                  rows="5"
                  className={cn(
                    "w-full p-6 rounded-[2rem] bg-gw-base border-2 border-transparent transition-all outline-none focus:bg-white focus:border-gw-leaf/20",
                    errors.message && "border-rose-500 bg-rose-50"
                  )}
                  placeholder="Tell us about your requirements..."
                ></textarea>
                {errors.message && <p className="text-rose-500 text-xs ml-4">{errors.message.message}</p>}
              </div>

              <Button type="submit" className="w-full py-6 text-xl rounded-[2rem] group">
                Send Enquiry 
                <HiChevronRight className="group-hover:translate-x-2 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* CONFIRMATION MODAL */}
      <Modal 
        isOpen={isConfirmOpen} 
        onClose={() => setIsConfirmOpen(false)}
        title="Confirm Dispatch"
        onConfirm={handleFinalSubmit}
        confirmText={isSending ? "Processing..." : "Confirm & Send"}
      >
        <div className="space-y-4">
          <p className="text-slate-600">Are you sure you want to send this enquiry to GreenWorld Company Limited?</p>
          <div className="bg-gw-base p-4 rounded-2xl text-xs space-y-1">
            <p><strong>To:</strong> contact@greenworldlimited.com</p>
            <p><strong>Subject:</strong> {pendingData?.subject}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// --- DRY HELPER COMPONENTS ---

const ContactInfoCard = ({ icon: Icon, title, detail, color }) => (
  <motion.div 
    whileHover={{ x: 10 }}
    className="flex items-center gap-6 p-6 bg-white rounded-[2rem] shadow-sm border border-slate-100 group"
  >
    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110", color.replace('text', 'bg') + '/10', color)}>
      <Icon size={28} />
    </div>
    <div>
      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{title}</p>
      <p className="text-gw-forest font-bold leading-tight">{detail}</p>
    </div>
  </motion.div>
);

const InputGroup = ({ label, type = "text", register, error, placeholder }) => (
  <div className="space-y-2">
    <label className="text-sm font-bold text-gw-forest ml-2 uppercase tracking-widest opacity-60">
      {label}
    </label>
    <input
      type={type}
      {...register}
      placeholder={placeholder}
      className={cn(
        "w-full p-5 rounded-full  bg-gw-base border-2  transition-all outline-none focus:bg-white focus:border-gw-leaf/20",
        error && "border-rose-500 bg-rose-50"
      )}
    />
    {error && <p className="text-rose-500 text-xs ml-4">{error.message}</p>}
  </div>
);

export default Contact;