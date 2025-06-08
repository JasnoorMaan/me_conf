import React from 'react';

const Acknowledgments = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center my-12">
          <h2 className="heading mb-4">Acknowledgments</h2>
          <p className="subheading highlighter1 font-medium">TFGET-2026</p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-l-conf-green-600">
          <h3 className="subheading highlighter1 mb-8 text-center">ACKNOWLEDGMENTS</h3>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Conference Management
            </h2>
            
            <div className="bg-conf-green-50 border border-conf-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-conf-green-800 mb-4">
                Microsoft CMT Acknowledgment
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">
                The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft, and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Supporting Organizations
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Dr. B.R. Ambedkar National Institute of Technology Jalandhar
                </h4>
                <p className="text-gray-600">
                  Host institution and Primary Organizer of TFGET-2026
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Department of Mechanical Engineering
                </h4>
                <p className="text-gray-600">
                  Organizing Department for the Conference
                </p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acknowledgments; 