import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "react-feather";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'Services', 'About', 'Contact'];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1F3C5F]/90 backdrop-blur-md shadow-lg fixed w-full z-50 border-b border-[#2BBED6]/20"
    >
      <div className="container mx-auto px-4 py-2 md:py-3">
        <div className="flex justify-between items-center">
          {/* Logo + Company Name */}
          <motion.a 
            href="#"
            className="flex items-center group"
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src="/DDLogo.png" 
              alt="Discovery Drift Logo" 
              className="h-10 md:h-12 object-contain transition-all duration-300 group-hover:rotate-[5deg]" 
            />
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="ml-3 text-2xl font-bold bg-gradient-to-r from-[#F7A62B] to-[#2BBED6] bg-clip-text text-transparent"
            >
              Discovery Drift
            </motion.span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-white/90 hover:text-white px-1 py-2 text-sm font-medium uppercase tracking-wider transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {item}
                <motion.span
                  layoutId="navUnderline"
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-[#F7A62B] origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <X className="w-6 h-6" strokeWidth={2.5} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={2.5} />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1F3C5F]/95 backdrop-blur-sm overflow-hidden"
          >
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-[#F7A62B] py-2 text-lg font-medium border-b border-[#2BBED6]/10 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;