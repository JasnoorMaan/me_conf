import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    setIsOpen(false); // Close mobile menu
    
    if (location.pathname === '/') {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to home page first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
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
    { name: "Home", href: "/", section: null, isRoute: true },
    { name: "About", href: "#about", section: "about", isRoute: false },
    { name: "Tracks", href: "#tracks", section: "tracks", isRoute: false },
    { name: "Committee", href: "/committee", section: null, isRoute: true },
    { name: "Advisory", href: "/advisory", section: null, isRoute: true },
    { name: "Important Dates", href: "#dates", section: "dates", isRoute: false },
    { name: "Contact", href: "#contact", section: "contact", isRoute: false },
    { name: "Brochure", href: "#brochure", section: "brochure", isRoute: false },
  ];

  return (
    <nav
      className={`fixed w-full py-3 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "backdrop-blur-lg"
          : ""
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-full bg-conf-green-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="font-semibold text-white normal-text">TF</span>
              </div>
              <span className="normal-text font-semibold text-gray-800 hidden md:inline-block">
                TFGET-2026
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="norma-text text-gray-700 hover:text-conf-green-600 transition-all duration-300 hover:scale-105"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => link.section ? scrollToSection(link.section) : window.scrollTo({top: 0, behavior: 'smooth'})}
                  className="norma-text text-gray-700 hover:text-conf-green-600 transition-all duration-300 hover:scale-105 bg-transparent border-none cursor-pointer"
                >
                  {link.name}
                </button>
              )
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
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block py-3 text text-gray-700 hover:text-conf-green-600 transition-colors text-center border-b border-gray-100 last:border-b-0"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => link.section ? scrollToSection(link.section) : window.scrollTo({top: 0, behavior: 'smooth'})}
                    className="block py-3 text text-gray-700 hover:text-conf-green-600 transition-colors text-center border-b border-gray-100 last:border-b-0 w-full bg-transparent border-none cursor-pointer"
                  >
                    {link.name}
                  </button>
                )
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