import UserForm from "./UserForm";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ open, user, onSave, onClose }: any) => {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-lg"
          >
            <UserForm user={user} onSave={onSave} onClose={onClose} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
