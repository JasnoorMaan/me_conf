import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Tracks", href: "#tracks" },
    { name: "Committee", href: "#committee" },
    { name: "Important Dates", href: "#dates" },
    { name: "Registration", href: "#registration" },
    { name: "Contact", href: "#contact" },
    { name: "Brochure", href: "#brochure" },
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
              <a
                key={link.name}
                href={link.href}
                className="norma-text text-gray-700 hover:text-conf-green-600 transition-all duration-300 hover:scale-105"
              >
                {link.name}
              </a>
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
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text text-gray-700 hover:text-conf-green-600 transition-colors text-center border-b border-gray-100 last:border-b-0"
                >
                  {link.name}
                </a>
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
