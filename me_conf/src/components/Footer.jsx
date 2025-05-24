import React from "react";
import NITJlogo from "/NITJlogo.svg";
import SPRINGERlogo from "/SPRINGERlogo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <footer id="contact" className="relative bg-gray-900 text-white py-12 px-4 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, 
              rgba(17, 24, 39, 1) 40%, 
              rgba(17, 24, 39, 0.95) 50%, 
              rgba(17, 24, 39, 0.85) 60%, 
              rgba(17, 24, 39, 0.7) 100%
            ),
            url('/bgs/FooterBG.png')
          `,
          backgroundPosition: 'bottom center'
        }}
      />
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4">
          <div>
            {/* <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-conf-green-600 flex items-center justify-center">
                <span className="font-bold text-white">TF</span>
              </div> */}
              {/* <span className="subheading font-thin">TFGET-2026</span>
            </div> */}
            <div className="flex flex-row gap-4 pb-4">
              <img src={NITJlogo} alt="NITJlogo" className="w-16 h-16 rounded-full flex items-center justify-center mb-2" />
            <h2 className="subheading text-white pb-2">Dr. B.R. Ambedkar National Institute of Technology Jalandhar</h2>
            </div>
            <p className="normal-text font-semibold text-white pb-4">
              1st International Conference on Thermo Fluids and Green Energy Technology
            </p>
            <p className="muted-text text-gray-400">
              January 16-18, 2026<br />
              NIT Jalandhar, Punjab, India
            </p>
            <div>
            <p className="normal-text font-semibold text-white py-4">
              Supported by:
            </p>
            <img src={SPRINGERlogo} alt="Springer" className="h-12 mb-2" />
            </div>
          </div>
          
          <div>
            <h3 className="subheading pb-2 border-b border-gray-700">Quick Links</h3>
            <ul className="space-y-3 pt-2">
              <li>
                <button onClick={() => scrollToSection('about')} className="text text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer text-left">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('tracks')} className="text text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer text-left">
                  Conference Tracks
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('committee')} className="text text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer text-left">
                  Committee
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('dates')} className="text text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer text-left">
                  Important Dates
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('registration')} className="text text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer text-left">
                  Registration
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer text-left">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="subheading pb-2 border-b border-gray-700">Contact</h3>
            <div className="space-y-2 pt-2">
              {/* Compact contact entries */}
              <div className="py-1">
                <h4 className="normal-text font-semibold text-white mb-1">Dr. Dwesh K Singh</h4>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center text-sm">
                  <p className="normal-text text-gray-300">singhdk@nitj.ac.in</p>
                  <p className="normal-text text-gray-300 lg:text-right">+91 95722 25084</p>
                </div>
              </div>
              
              <div className="py-1">
                <h4 className="normal-text font-semibold text-white mb-1">Dr. Satyender Singh</h4>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center text-sm">
                  <p className="normal-text text-gray-300">satyenders@nitj.ac.in</p>
                  <p className="normal-text text-gray-300 lg:text-right">+91 95722 25084</p>
                </div>
              </div>
              
              <div className="py-1">
                <h4 className="normal-text font-semibold text-white mb-1">Dr. Rajan Kumar</h4>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center text-sm">
                  <p className="normal-text text-gray-300">rajank@nitj.ac.in</p>
                  <p className="normal-text text-gray-300 lg:text-right">+91 95722 25084</p>
                </div>
              </div>
              
              {/* Conference email */}
              <div className="py-2 mt-3 pt-3 border-t border-gray-700">
                <p className="text text-gray-400">
                  <span className="text-white font-semibold">Conference Email:</span><br />
                  <a href="mailto:tfget2026@nitj.ac.in" className="hover:text-white transition-colors text-sm">
                    tfget2026@nitj.ac.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="normal-text text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} TFGET-2026. All rights reserved.
          </p>
          <div className="flex space-x-2 normal-text text-gray-400">
            <p className="normal-text">Developed by:</p>
            <a href="https://www.linkedin.com/in/jasnoormaan/" className="hover:text-white transition-colors">
              Jasnoor Maan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
