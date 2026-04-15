import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import Button from "../atoms/Button";

const Modal = ({ isOpen, onClose, title, children, onConfirm, confirmText = "Confirm" }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm" 
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white rounded-3xl p-8 shadow-2xl max-w-md w-full"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <IoClose size={24} />
            </button>
            <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
            <div className="text-gray-600 mb-8">{children}</div>
            <div className="flex gap-3 justify-end">
              <Button variant="outline" onClick={onClose}>Cancel</Button>
              <Button variant="danger" onClick={onConfirm}>{confirmText}</Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;