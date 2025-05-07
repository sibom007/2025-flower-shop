import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

import Avater from "@/modules/home/components/Avater";
import { Link, useLocation } from "react-router-dom"; // Correct imports
import LoadingAnimation from "@/shared/LoadingAnimation";
import { cn } from "@/lib/utils";
import MobilNavber from "./MobilNavber";
import useDecodedAuth from "@/modules/auth/hooks/useDecodedAuth";

const navLinks = [
  { name: "Home", icon: "🏠", link: "/" },
  { name: "Shop", icon: "🛍️", link: "/shop" },
  { name: "About", icon: "ℹ️", link: "/about" },
  { name: "Contact", icon: "📞", link: "/contact" },
];

const NavBar = () => {
  const { isAuthenticated } = useDecodedAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Show loading animation initially
  const location = useLocation(); // Get current location
  const MotionLink = motion.create(Link);

  useEffect(() => {
    // Show loading immediately on route change
    setIsLoading(true);

    // Simulate loading delay (e.g., for transitions, data fetch, etc.)
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust time as needed

    // Cleanup timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className="font-heading">
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
            {navLinks.map(({ name, link, icon }) => (
              <MotionLink
                key={name}
                to={link}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={cn(
                  "text-sm font-medium hover:text-orangeTheme-600 transition-colors",
                  location.pathname === link
                    ? "text-orangeTheme-600"
                    : "text-orangeTheme-900"
                )}>
                {name} {icon}
              </MotionLink>
            ))}
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <Avater />
                <Link to={"/dashboard"}>
                  <Button variant="primary">Dashboard</Button>
                </Link>
              </div>
            ) : (
              <Link to="/login">
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
      </motion.header>

      {/* Show Loading Animation */}
      <AnimatePresence>{isLoading && <LoadingAnimation />}</AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && <MobilNavber onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
