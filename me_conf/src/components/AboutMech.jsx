import React, { useState } from 'react';

const AboutMech = () => {
  const [isHovered, setIsHovered] = useState(false);

  const aboutDepartmentText = `The Department of Mechanical Engineering offer B. Tech, M. Tech and PhD programmes. The B. Tech programme is accredited by the NBA. The Department has experienced and enthusiastic faculty members. The Department have good facilities for CAD, Simulation, material testing (DMA, UTM, etc.) and pursue research in the areas of Mechatronics, Robotics, System Dynamics & Control, Modeling and Simulation of Physical Systems, Alternate Fuel for IC Engines, Synthesis and Application of Carbon Nanotubes, Renewable Energy, Welding Technology, Simulation and Modeling, Heat Transfer, Fluid Dynamics, Combustion, Computational Fluid Dynamics, Friction Stir Welding, Heat Exchangers, Alternative Refrigerants, Flow Condensation & boiling, Thermal System Simulation, Emission Control, Fuel Efficient Engines, Composites and Tribology.`;

  return (
    <section id="department" className="py-16 px-4">
      {/* Department Section */}
      <div className="max-w-[80vw] mx-auto">
        <div 
          className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-700 ease-in-out md:hover:shadow-xl"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, 
                rgba(0, 0, 0, ${isHovered ? '0.75' : '0.4'}) 0%, 
                rgba(0, 0, 0, ${isHovered ? '0.85' : '0.5'}) 100%
              ),
              url('/NITJmech.webp')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          onMouseEnter={() => window.innerWidth >= 768 && setIsHovered(true)}
          onMouseLeave={() => window.innerWidth >= 768 && setIsHovered(false)}
        >
          {/* Desktop: Relative container for absolute positioning */}
          <div className="hidden md:block relative p-8" style={{ minHeight: '300px' }}>
            {/* Desktop: Heading state - visible when not hovered */}
            <div className={`absolute inset-0 flex flex-col justify-center items-center text-center transition-all duration-500 ease-in-out ${
              isHovered ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
            }`}>
              <h2 className="heading text-white mb-4">
                ABOUT DEPARTMENT
              </h2>
              <p className="subheading text-gray-200 mb-2">
                Department of Mechanical Engineering
              </p>
              <p className="normal-text text-gray-300">
                Dr. B R Ambedkar National Institute of Technology, Jalandhar
              </p>
            </div>
            
            {/* Desktop: Content state - visible when hovered */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
              isHovered ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'
            }`}>
              <div className="px-8">
                <p className="normal-text text-gray-100 leading-relaxed text-justify">
                  {aboutDepartmentText}
                </p>
              </div>
            </div>
          </div>
          
          {/* Mobile: Always visible content - unchanged */}
          <div className="block md:hidden p-6">
            <div className="text-center mb-6">
              <h2 className="heading text-white mb-4">
                About Department
              </h2>
            </div>
            
            <p className="normal-text text-gray-100 leading-relaxed text-justify">
              {aboutDepartmentText}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMech 