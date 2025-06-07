import React, { useState, useEffect } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/Button";
import logo from "/Logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCommitteeDropdownOpen, setIsCommitteeDropdownOpen] = useState(false);
  const [isGuidelinesDropdownOpen, setIsGuidelinesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    setIsOpen(false); // Close mobile menu
    setIsCommitteeDropdownOpen(false); // Close dropdown
    setIsGuidelinesDropdownOpen(false); // Close guidelines dropdown
    
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
    { name: "Important Dates", href: "#dates", section: "dates", isRoute: false },
    { name: "Registration Fees", href: "/registration-fees", section: null, isRoute: true },
    // { name: "Acknowledgments", href: "/acknowledgments", section: null, isRoute: true },
    { name: "Brochure", href: "#brochure", section: "brochure", isRoute: false },
  ];

  const committeeLinks = [
    { name: "Advisory Committee", href: "/advisory" },
    { name: "Organizing Committee", href: "/committee" },
  ];

  const guidelinesLinks = [
    { name: "Author Guidelines", href: "/guidelines" },
    { name: "Submission Guidelines", href: "/submission-guidelines" },
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
              <div className="">
                <img src={logo} alt="logo" className="w-12 h-6" />
              </div>
              <span className="normal-text font-bold hidden md:inline-block">
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
                  className="norma-text font-semibold text-black hover:text-conf-green-600 transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    setIsOpen(false);
                    setIsCommitteeDropdownOpen(false);
                    setIsGuidelinesDropdownOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => link.section ? scrollToSection(link.section) : window.scrollTo({top: 0, behavior: 'smooth'})}
                  className="norma-text font-semibold text-black hover:text-conf-green-600 transition-all duration-300 hover:scale-105 bg-transparent border-none cursor-pointer"
                >
                  {link.name}
                </button>
              )
            ))}
            
            {/* Committees Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsCommitteeDropdownOpen(!isCommitteeDropdownOpen);
                  setIsGuidelinesDropdownOpen(false);
                }}
                className="norma-text font-semibold text-black hover:text-conf-green-600 transition-all duration-300 hover:scale-105 bg-transparent border-none cursor-pointer flex items-center space-x-1"
              >
                <span>Committees</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${isCommitteeDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCommitteeDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-10">
                  {committeeLinks.map((committee) => (
                    <Link
                      key={committee.name}
                      to={committee.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-conf-green-600 hover:bg-conf-green-50 transition-colors"
                      onClick={() => {
                        setIsCommitteeDropdownOpen(false);
                        setIsGuidelinesDropdownOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      {committee.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Guidelines Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsGuidelinesDropdownOpen(!isGuidelinesDropdownOpen);
                  setIsCommitteeDropdownOpen(false);
                }}
                className="norma-text font-semibold text-black hover:text-conf-green-600 transition-all duration-300 hover:scale-105 bg-transparent border-none cursor-pointer flex items-center space-x-1"
              >
                <span>Guidelines</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${isGuidelinesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isGuidelinesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-10">
                  {guidelinesLinks.map((guideline) => (
                    <Link
                      key={guideline.name}
                      to={guideline.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-conf-green-600 hover:bg-conf-green-50 transition-colors"
                      onClick={() => {
                        setIsGuidelinesDropdownOpen(false);
                        setIsCommitteeDropdownOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      {guideline.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
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
                    className="block py-3 text font-semibold text-gray-700 hover:text-conf-green-600 transition-colors text-center border-b border-gray-100 last:border-b-0"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => link.section ? scrollToSection(link.section) : window.scrollTo({top: 0, behavior: 'smooth'})}
                    className="block py-3 text font-semibold text-gray-700 hover:text-conf-green-600 transition-colors text-center border-b border-gray-100 last:border-b-0 w-full bg-transparent border-none cursor-pointer"
                  >
                    {link.name}
                  </button>
                )
              ))}
              
              {/* Mobile Committees Section */}
              <div className="border-b border-gray-100">
                <div className="py-3 text text-gray-600 text-center font-medium">
                  Committees
                </div>
                {committeeLinks.map((committee) => (
                  <Link
                    key={committee.name}
                    to={committee.href}
                    className="block py-2 text-center text-sm text-gray-600 hover:text-conf-green-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {committee.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Guidelines Section */}
              <div className="border-b border-gray-100">
                <div className="py-3 text text-gray-600 text-center font-medium">
                  Guidelines
                </div>
                {guidelinesLinks.map((guideline) => (
                  <Link
                    key={guideline.name}
                    to={guideline.href}
                    className="block py-2 text-center text-sm text-gray-600 hover:text-conf-green-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {guideline.name}
                  </Link>
                ))}
              </div>
              
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