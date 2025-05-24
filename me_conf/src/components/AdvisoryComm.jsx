import React from 'react';

const AdvisoryComm = () => {
  const nationalCommittee = [
    "Prof. Sukumar Mishra, Director, IIT(ISM) Dhanbad",
    "Prof. K. K. Shukla, Director, MANIT Bhopal",
    "Prof. C. Balaji, IIT Madras, Editor-in-Chief Int. J. of Thermal Sciences",
    "Dr. Sunil Kumar, Sr. Principal Scientist, CSIR-NEERI, Nagpur",
    "Dr. Dipen K. Rajak, Scientist CSIR-AMPRI",
    "Dr. K. Mohanty, IIT- Guwahati, India",
    "Dr. K. Srinivas Reddy, IIT Madras, Chennai",
    "Shri. Ankit Gupta, Scientist, CSIR, NEERI, Nagpur",
    "Dr. Raju Abraham, National Institute of Ocean Technology(NIOT), Chennai, India",
    "Dr. D. Das, Professor, Indian Institute of Technology Kharagpur, India",
    "Dr. Thundil Karuppa Raj, VIT University, Vellore",
    "Shri. Kushagra Juneja, Design2Occupancy Services LLP, Jaipur",
    "Dr. P Karthikeyan, PSG College of Technology, Coimbatore",
    "Prof. Shripad P. Mahulikar, Indian Institute of Technology Bombay",
    "Prof. Shailendra K. Shukla, Indian Institute of Technology(BHU), Varanasi",
    "Prof. L. M. Das Centre for Energy Studies, Indian Institute of Technology, Delhi",
    "Prof. Sagar Maji, Principal, GB Pant Engineering College Delhi",
    "Prof. Sanjeev Jain, Indian Institute of Technology, Delhi",
    "Prof. B. Premchandran, Indian Institute of Technology, Delhi",
    "Dr. S. N. Singh, IIT(ISM) Dhanbad",
    "Prof. Rakesh Sehgal, NIT Srinagar",
    "Prof. Satish Kumar, NIT Kurukshetra",
    "Prof. Jagdev Singh, Beant College of Engineering and Technology, Gurdaspur",
  ];

  const internationalCommittee = [
     "Prof. Ramesh T. Subramaniam, University of Malaya, Malaysia.",
     "Dr. B.V. Reddy, University of Ontario Institute of Technology, Canada",
     "Dr. Ramana V. Grandhi, Wright State University, USA",
     "Dr. Ezra Morris Abraham Gnanamuthu, Lee Kong Chian Faculty of Engineering and Science, UTAR Sungai Long Campus, Malaysia.",
     "Dr.M V Venkatashamy Reddy, National University of Singapore",
     "Dr Alexandru Rap, Scientist, University of Leeds, UK",
     "Dr. Fateh Mebarek-Oudina, Skikda University, Algeria",
     "Dr. Lioua Kolsi, University of Hail, Saudi Arabia",
     "Dr. Naomi Boness, Managing Director, Natural Gas Initiative, Stanford University, California, USA.",
     "Prof. PV Aravind,University Groningen, The Netherlands",
     "Prof. Jayanta Kapat, University of Central Florida, USA",
     "Prof. B V Reddy, Ontario Tech University, Canada",
     "Dr. Arvind Gangoli Rao, Delft University of Technology, Delft",
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center my-12">
          <h2 className="heading mb-4">Advisory Committee</h2>
          <p className="subheading highlighter1 font-medium">TFGET-2026</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* National Committee Container */}
          <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-l-conf-green-600">
            <h3 className="subheading highlighter1 mb-8 text-center">NATIONAL ADVISORY COMMITTEE</h3>
            <div className="space-y-4">
              {nationalCommittee.map((member, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-conf-green-50 transition-colors duration-200"
                >
                  <div className="w-6 h-6 bg-conf-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1 flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="normal-text font-semibold text-gray-700 leading-relaxed" style={{lineHeight: '1.8'}}>
                    {member}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* International Committee Container */}
          <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-l-conf-green-600">
            <h3 className="subheading highlighter1 mb-8 text-center">INTERNATIONAL ADVISORY COMMITTEE</h3>
            <div className="space-y-4">
              {internationalCommittee.map((member, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-conf-green-50 transition-colors duration-200"
                >
                  <div className="w-6 h-6 bg-conf-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1 flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="normal-text font-semibold text-gray-700 leading-relaxed" style={{lineHeight: '1.8'}}>
                    {member}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryComm;