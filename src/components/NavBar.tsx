
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-0">
        <div className="flex items-center">
          <motion.span 
            className="text-2xl font-bold text-black"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-primary font-poppins">ABB</span> Specifier
          </motion.span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-primary transition-colors relative group">
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors relative group">
            How it works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#communication" className="text-gray-700 hover:text-primary transition-colors relative group">
            Communication
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden sm:inline-flex font-medium">
            Log in
          </Button>
          <Button className="bg-primary hover:bg-primary/90 font-medium">
            Get Started
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
