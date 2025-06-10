import { motion } from "framer-motion";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { RiHotelLine, RiCarLine } from "react-icons/ri";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-[#1F3C5F] to-[#1D3D5E] text-white pt-16 pb-8"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <div className="flex items-center mb-6">
              <img 
                src="/DDLogo.png" 
                alt="Discovery Drift Logo" 
                className="h-12 mr-4"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#F7A62B] to-[#2BBED6] bg-clip-text text-transparent">
                Discovery Drift
              </span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Crafting unforgettable journeys with personalized travel experiences across Delhi and beyond.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#2BBED6]/10 flex items-center justify-center text-[#2BBED6]">
                <RiHotelLine />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#F7A62B]/10 flex items-center justify-center text-[#F7A62B]">
                <RiCarLine />
              </div>
            </div>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-4 h-0.5 bg-[#F7A62B] mr-3"></span>
              Contact Us
            </h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-[#F7A62B] mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p>34, Om Vihar phase 1A,</p>
                  <p>Gali no -3, Uttam Nagar West</p>
                  <p>Delhi - 110059</p>
                </div>
              </div>
              <div className="flex items-center hover:text-[#2BBED6] transition-colors">
                <FaPhone className="text-[#F7A62B] mr-3" />
                <a href="tel:7838371141">+91 7838371141</a>
              </div>
              <div className="flex items-center hover:text-[#2BBED6] transition-colors">
                <FaEnvelope className="text-[#F7A62B] mr-3" />
                <a href="mailto:info@discoverydrift.com">info@discoverydrift.com</a>
              </div>
            </address>
          </motion.div>

          {/* Quick Links Column */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-4 h-0.5 bg-[#F7A62B] mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Hotel Booking', 'Taxi Services', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="flex items-center group text-white/80 hover:text-[#F7A62B] transition-colors"
                  >
                    <FaArrowRight className="mr-2 text-xs text-[#2BBED6] group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div> */}
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="border-t border-[#2BBED6]/20 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-white/60 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Discovery Drift. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-[#F7A62B] transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-[#F7A62B] transition-colors text-sm">Terms of Service</a>
          </div>
          <p className="text-sm text-white/60 mt-4 md:mt-0">
            Crafted with ❤️ for travelers
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;