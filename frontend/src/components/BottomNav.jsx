import { motion } from "framer-motion";

function BottomNav() {
  return (
    <motion.div
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black/90 px-8 py-3 rounded-full flex gap-8 shadow-lg"
    >
      <motion.span whileTap={{ scale: 0.85 }} className="text-xl text-[#FDBA2D]">
        🏠
      </motion.span>
      <motion.span whileTap={{ scale: 0.85 }} className="text-xl text-gray-400">
        📊
      </motion.span>
      <motion.span whileTap={{ scale: 0.85 }} className="text-xl text-gray-400">
        🎤
      </motion.span>
    </motion.div>
  );
}

export default BottomNav;


