import React from 'react';

const Committee = () => {
  const organizingCommittee = {
    chiefPatron: [
      "Prof. Binod Kumar Kanaujia, Director, NIT Jalandhar"
    ],
    patron: [
      "Prof. T. Srinivas, HOD (ME) NIT Jalandhar"
    ],
    coPatron: [
      "Prof. Subhash Chander"
    ],
    conferenceChair: [
      "Dr. Rajeev Kukreja",
      "Prof. Pramod Kumar",
      "Dr. S. S. Sandhu"
    ],
    organizingSecretary: [
      "Dr. Dwesh K. Singh",
      "Dr. Rajan Kumar",
      "Dr. Satyender Singh"
    ],
    conferenceCoChair: [
      "Dr. Anand Vaz",
      "Dr. S K Tiwari",
      "Dr. R S Bharj",
      "Dr. Raman Bedi",
      "Er. Ajay Trehan",
      "Prof. D. K. Shukla"
    ],
    jointSecretary: [
      "Dr. Ranchan Chauhan",
      "Dr. Nitin Sharma",
      "Dr. Saurabh Kango",
      "Dr. Sanjay",
      "Dr. Ashok K. Bagha",
      "Dr. Manoj Kumar",
      "Dr. Sumit Sharma",
      "Dr. Dushyant Singh",
      "Dr. Harpreet Singh",
      "Dr. Ravikant Ravi",
      "Dr. Parnika Shrivastava"
    ]
  };

  const CommitteeSection = ({ title, members }) => (
    <div className="mb-8">
      <h4 className="normal-text font-bold text-conf-green-600 mb-4 text-center">{title}</h4>
      <div className="text-center">
        {members.map((member, index) => (
          <p key={index} className="normal-text text-gray-700 mb-2">
            {member}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <section id="committee" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center my-12">
          <h2 className="heading mb-4">Organizing Committee</h2>
          <p className="subheading highlighter1 font-medium">TFGET-2026</p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-l-conf-green-600">
          <h3 className="subheading highlighter1 mb-8 text-center">ORGANIZING COMMITTEE</h3>
          
          <div className="space-y-6">
            <CommitteeSection 
              title="Chief Patron" 
              members={organizingCommittee.chiefPatron} 
            />
            
            <CommitteeSection 
              title="Patron" 
              members={organizingCommittee.patron} 
            />
            
            <CommitteeSection 
              title="Co-Patron" 
              members={organizingCommittee.coPatron} 
            />
            
            <CommitteeSection 
              title="Conference Chair" 
              members={organizingCommittee.conferenceChair} 
            />

            <CommitteeSection 
              title="Organizing Secretary" 
              members={organizingCommittee.organizingSecretary} 
            />
            
            <CommitteeSection 
              title="Conference Co-Chair" 
              members={organizingCommittee.conferenceCoChair} 
            />
            
            <CommitteeSection 
              title="Joint Secretary" 
              members={organizingCommittee.jointSecretary} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committee;
