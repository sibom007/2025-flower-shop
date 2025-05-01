import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-orange-100 via-yellow-100 to-rose-100 text-gray-800">
      <div className="container mx-auto px-4">
        {/* Animated Heading */}
        <motion.h1
          className="text-5xl font-bold text-center text-orange-700 mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          Get In Touch
        </motion.h1>

        <div className="max-w-3xl mx-auto">
          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            {/* Phone */}
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              <h2 className="text-xl font-semibold text-orange-600 mb-2">
                Phone
              </h2>
              <p className="text-gray-600">(123) 456-7890</p>
            </motion.div>

            {/* Email */}
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}>
              <h2 className="text-xl font-semibold text-orange-600 mb-2">
                Email
              </h2>
              <p className="text-gray-600">contact@ourwebsite.com</p>
            </motion.div>
          </div>

          {/* Socials */}
          <motion.div
            className="flex justify-center space-x-8 text-4xl text-orange-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            <motion.a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#E53E3E" }}
              className="hover:text-rose-500 transition-colors">
              <FaFacebook />
            </motion.a>

            <motion.a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#D53F8C" }}
              className="hover:text-pink-500 transition-colors">
              <FaInstagram />
            </motion.a>

            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#38B2AC" }}
              className="hover:text-teal-500 transition-colors">
              <FaWhatsapp />
            </motion.a>

            <motion.a
              href="mailto:contact@ourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#4299E1" }}
              className="hover:text-blue-400 transition-colors">
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center mt-12">
        <p className="text-gray-600">
          © 2024 All Rights Reserved. Made with ❤️
        </p>
      </div>
    </section>
  );
};
export default Footer;
