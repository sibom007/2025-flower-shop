// MobilNavber.tsx
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", icon: "🏠", link: "/" },
  { name: "Shop", icon: "🛍️", link: "/shop" },
  { name: "About", icon: "ℹ️", link: "/about" },
  { name: "Contact", icon: "📞", link: "/contact" },
];

const MobilNavber = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3 }}
      className="fixed right-0 top-0 h-full w-3/4 max-w-xs z-50 bg-orangeTheme-100 text-orangeTheme-900 flex flex-col p-6 space-y-4 shadow-lg">
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl font-bold text-orangeTheme-700">Flower shop</h1>
        <button onClick={onClose} className="self-end">
          <X size={28} />
        </button>
      </div>

      {navLinks.map(({ name, link, icon }) => (
        <Link
          key={name}
          to={link}
          onClick={onClose}
          className="text-lg font-medium hover:text-orangeTheme-600 transition-colors">
          {icon} {name}
        </Link>
      ))}
    </motion.div>
  );
};

export default MobilNavber;
