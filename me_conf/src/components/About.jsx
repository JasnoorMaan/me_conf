import React, { useState } from 'react'

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const aboutNITJText = `Dr B R Ambedkar National Institute of Technology was established in the year 1987 as Regional Engineering College and was given the status of National Institute of Technology (Deemed University) by the Government of India on October 17, 2002 under the aegis of Ministry of Human Resource Development, New Delhi. Now the Ministry of Human Resource Development, Government of India has declared the Institute as "Institute of National Importance" under the act of Parliament-2007. As one of the National Institutes of Technology (NIT), the Institute has the responsibility of providing high quality education in Engineering, Technology and Sciences to produce competent technical and scientific manpower for the country. The Institute offers BTech, MTech, MSc, MBA and PhD programmes in the several disciplines of Engineering, Technology and Sciences. The institute is located on the G.T Road Amritsar bye-pass at a distance of 15 km from Jalandhar Bus Stand, 12 km from Jalandhar City Railway Station, and 18 km from Jalandhar Cantt. railway station. The institute is well connected to the National Capital through rail and road link.`;

  return (
    <section className='py-16 px-4'>
      {/* About TFGET Section */}
      <div className='container mx-auto max-w-4xl mb-16'>
        <h1 className='heading text-center mb-12'>About TFGET</h1>
        <p className='normal-text text-justify leading-relaxed'>
          TFGET The 1st International Conference offers a platform for academicians, designers,
          researchers, and consumers from all corners of the globe to exchange and share their
          experiences and research results on all aspects of thermodynamics, heat transfer, fluid
          mechanics, green and sustainable energy. It also provides an interdisciplinary forum for
          top managers, academics, politicians, educators, and professionals to address and discuss
          the latest developments, trends, and issues, as well as real problems and solutions adopted
          in the sectors of the energy sector in the face of declining natural sources and growing
          anxiety regarding climate change. The conference is to be held against the backdrop of India
          's vision on achieving energy independence by 2047, with a strong emphasis on renewable
          energy, particularly solar and green hydrogen. This conference is based on the theme –
          "From Present to Future Engineering Solutions"
        </p>
      </div>

      {/* About NITJ Section */}
      <div className="container mx-auto max-w-4xl">
        <div 
          className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-700 ease-in-out md:hover:shadow-xl"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, 
                rgba(0, 0, 0, ${isHovered ? '0.75' : '0.4'}) 0%, 
                rgba(0, 0, 0, ${isHovered ? '0.85' : '0.5'}) 100%
              ),
              url('/NITJ.jpg')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '800px',
            maxHeight: '800px',
            overflow: 'hidden'
          }}
          onMouseEnter={() => window.innerWidth >= 768 && setIsHovered(true)}
          onMouseLeave={() => window.innerWidth >= 768 && setIsHovered(false)}
        >
          <div className="p-6 md:p-8 flex flex-col justify-center items-center text-white h-full relative">
            {/* Heading - visible when not hovered on desktop, hidden on mobile */}
            <div className={`transition-all duration-500 ease-in-out absolute inset-0 flex flex-col justify-center items-center hidden md:flex ${
              isHovered ? 'opacity-0 transform scale-95 pointer-events-none' : 'opacity-100 transform scale-100'
            }`}>
              <h2 className="heading text-white text-center mb-4">
                ABOUT NITJ
              </h2>
              <p className="subheading text-center text-gray-200">
                Dr. B R Ambedkar National Institute of Technology, Jalandhar
              </p>
            </div>
            
            {/* Full text - visible when hovered on desktop, always visible on mobile */}
            <div className={`transition-all duration-500 ease-in-out w-full h-full flex flex-col justify-start md:justify-center items-center md:absolute ${
              isHovered || window.innerWidth < 768 ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95 md:absolute md:pointer-events-none'
            }`}>
              <h3 className="subheading text-white mb-4 md:mb-6 text-center block md:hidden">
                ABOUT NITJ
              </h3>
              <div className="w-full h-full flex flex-col justify-center px-2 md:px-4">
                <div className="flex-1 flex items-center">
                  <p className="normal-text text-gray-100 leading-relaxed text-justify max-w-none md:px-4">
                    {aboutNITJText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About