import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    // { name: "Home", href: "#", section: null },
    { name: "About", href: "#about", section: "about" },
    { name: "Tracks", href: "#tracks", section: "tracks" },
    { name: "Committee", href: "#committee", section: "committee" },
    { name: "Important Dates", href: "#dates", section: "dates" },
    // { name: "Registration", href: "#registration", section: "registration" },
    { name: "Contact", href: "#contact", section: "contact" },
    { name: "Brochure", href: "#brochure", section: "brochure" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "backdrop-blur-lg py-3"
          : "py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-full bg-conf-green-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="font-semibold text-white normal-text">TF</span>
              </div>
              <span className="normal-text font-semibold text-gray-800 hidden md:inline-block">
                TFGET-2026
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => link.section ? scrollToSection(link.section) : window.scrollTo({top: 0, behavior: 'smooth'})}
                className="norma-text text-gray-700 hover:text-conf-green-600 transition-all duration-300 hover:scale-105 bg-transparent border-none cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            <Button className="bg-conf-green-600 hover:bg-conf-green-700 text-white px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-conf-green-600 transition-colors duration-300"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-6 bg-white/95 backdrop-blur-lg rounded-lg shadow-xl border border-gray-200/50 mx-4">
            <div className="px-4 py-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => link.section ? scrollToSection(link.section) : window.scrollTo({top: 0, behavior: 'smooth'})}
                  className="block py-3 text text-gray-700 hover:text-conf-green-600 transition-colors text-center border-b border-gray-100 last:border-b-0 w-full bg-transparent border-none cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
              <div className="mt-4 flex justify-center">
                <Button className="bg-conf-green-600 hover:bg-conf-green-700 text-white px-6 py-2 shadow-lg">
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
