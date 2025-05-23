const conferenceThemes = {
  overview: {
    title: "Call for Papers",
    description: "The TFGET 2026 team invites papers from students, teachers, scientists, and researchers in academia and industry to present the results of their research and development efforts in the field of thermal fluids and green, sustainable energy. Papers must report original academic or industrial research in any of the following topics, not limited to, but relevant to the conference. All submitted papers will be judged based on their quality, presentation, and relevance through a double-blind review process, where the identities of the authors are withheld from the reviewers."
  },
  tracks: [
    {
      id: "thermal",
      title: "Track 1: Thermal",
      color: "red",
      topics: [
        "Buoyancy and Electro Convection",
        "Mixed and Forced Convection", 
        "Heat Transfer Due to Jet Impingement",
        "Heat Transfer In Nanofluids",
        "Combustion and Flame",
        "Phase Change Heat Transfer",
        "Refrigeration and Air Conditioning",
        "Heat Transfer Enhancement",
        "Heat Transfer Equipment",
        "Experimental & Numerical Heat Transfer",
        "Experimental Heat Transfer",
        "Bio Heat and Mass Transfer",
        "Phase Change Materials",
        "Micro and Nanoscale",
        "Radiation Heat Transfer",
        "Advanced Power Generation"
      ]
    },
    {
      id: "fluid",
      title: "Track 2: Fluid",
      color: "blue",
      topics: [
        "Boundary layers",
        "Flow Around Bodies",
        "Supersonic and Hypersonic Flows",
        "Vortex Dynamics",
        "Aerodynamics and Flow Control",
        "Computational Fluid Dynamics",
        "Turbulent Flows",
        "Fluid Machinery",
        "Fluid Structure Interaction",
        "Bio Fluid Mechanics",
        "Microfluidics",
        "MHD and EHD flows",
        "Complex fluid flow",
        "Atmospheric Flows",
        "Geophysical Fluid",
        "Multi Phase Flow"
      ]
    },
    {
      id: "greenEnergy",
      title: "Track 3: Green Energy",
      color: "green",
      topics: [
        "Green energy and Economy",
        "Renewable Energy",
        "Green Nanotechnology",
        "Solar energy",
        "Biomass and Bio energy",
        "Biofuels",
        "Green Economy",
        "Batteries and Fuel cells",
        "Recycling",
        "Wind Energy",
        "Waste to Energy",
        "Smart Grid Systems",
        "Tidal Energy",
        "Geothermal Energy",
        "Energy and Environment",
        "Poly Generation",
        "Fuel Cells"
      ]
    },
    {
      id: "emerging",
      title: "Track 4: Emerging Areas",
      color: "purple",
      topics: [
        "Artificial Intelligence and Machine Learning",
        "Electric Vehicle",
        "Battery Thermal Management Systems",
        "Design & Manufacturing of Thermal Systems",
        "Advanced Materials for Energy Storage",
        "Advanced Materials for Energy Generation and Transmission",
        "Space Applications",
        "Smart Buildings",
        "CO₂ Sequestration",
        "Smart Materials",
        "Self-Healing Materials",
        "High Entropy Materials"
      ]
    }
  ]
};

export default conferenceThemes;