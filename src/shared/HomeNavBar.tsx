import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import useAuth from "@/models/auth/hooks/useAuth";
import Avater from "@/models/home/components/Avater";
import { Link } from "react-router-dom";

const navLinks = ["Home", "Shop", "About", "Contact"];

const HomeNavBar = () => {
  const { isAuthenticated } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full px-4 py-3 border-b border-orangeTheme-300 bg-orangeTheme-100 text-orangeTheme-900 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <motion.h1
          className="text-2xl font-bold text-orangeTheme-700"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}>
          FlowerShop
        </motion.h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((name) => (
            <motion.a
              key={name}
              href="#"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-sm font-medium hover:text-orangeTheme-600 transition-colors">
              {name}
            </motion.a>
          ))}
          {isAuthenticated ? (
            <Avater />
          ) : (
            <Link to={"/login"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-4 py-2 rounded-md font-medium bg-orangeTheme-500 hover:bg-orangeTheme-600 text-white transition-colors">
                Login
              </motion.button>
            </Link>
          )}
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={() => setMenuOpen(true)}>
            <Menu size={24} />
          </button>
          {isAuthenticated ? (
            <Avater />
          ) : (
            <Button className="px-3 py-1.5 text-sm rounded-md font-medium bg-orangeTheme-500 hover:bg-orangeTheme-600 text-white transition-colors">
              Login
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed top-0 right-0 w-64 h-full bg-orangeTheme-100 shadow-lg z-50 px-6 py-5 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-orangeTheme-700">
                  FlowerShop
                </h2>
                <button onClick={() => setMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((name) => (
                  <a
                    key={name}
                    href="#"
                    className="text-sm font-medium hover:text-orangeTheme-600 transition-colors">
                    {name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default HomeNavBar;
