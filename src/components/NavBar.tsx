
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

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
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-black">
            <span className="text-primary">ABB</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors">
            How it works
          </a>
          <a href="#communication" className="text-gray-700 hover:text-primary transition-colors">
            Communication
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden sm:inline-flex">
            Log in
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
