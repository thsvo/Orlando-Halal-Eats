"use client"
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0066c2] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Orlando Halal Eats            </h3>
            <p className="text-gray-200">
              Delicious food delivered to your doorstep. We provide the best
              culinary experience with fresh ingredients and expert chefs.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ scale: 1.2 }} 
                href="#" 
                className="hover:text-blue-300"
              >
                <FaFacebook size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2 }} 
                href="#" 
                className="hover:text-blue-300"
              >
                <FaTwitter size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2 }} 
                href="#" 
                className="hover:text-blue-300"
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2 }} 
                href="#" 
                className="hover:text-blue-300"
              >
                <FaYoutube size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Menu", "About Us", "Contact", "Blog"].map((item, i) => (
                <motion.li 
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-300" />
                <span>123 Food Street, Tasty City</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-blue-300" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-300" />
                <span>info@Halalalfood.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p className="text-gray-200">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
              <Button 
                className="bg-white text-[#0066c2] hover:bg-blue-100 transition-colors"
              >
                Subscribe
              </Button>
            </div>
            <div className="mt-4">
              <p className="text-gray-200">
                Visit us at: <a href="https://www.google.com/maps?q=786+Myrtle+St,+Sanford,+FL+32773" target="_blank" className="hover:text-blue-300">786 Myrtle St, Sanford, FL 32773</a>
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-white/20 mt-8 pt-8 text-center"
        >
          <p>© {new Date().getFullYear()} Lalal Food. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;