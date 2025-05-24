import React from 'react';
import speakers from '@/data/SpeakersData';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const Speakers = () => {
  // Show first 2 speakers, then 4 blurred placeholders
  const displaySpeakers = [
    ...speakers.slice(0, 2), // First 2 real speakers
    ...Array(4).fill(null).map((_, index) => ({
      ...speakers[index % 2], // Repeat first 2 speakers for blur effect
      id: `tba-${index}`,
      isPlaceholder: true
    }))
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-[80vw] mx-auto">
        <h1 className="heading pb-8 text-center">Speakers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {displaySpeakers.map((speaker)=>{
            return(
              <Card key={speaker.id} className="overflow-hidden relative max-w-xs mx-auto">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center relative">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className={`w-full h-full object-cover ${speaker.isPlaceholder ? 'blur-lg' : ''}`}
                    />
                    
                    {speaker.isPlaceholder && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center">
                          <p className="normal-text text-white font-semibold">To Be Announced</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardHeader className="text-center p-4">
                  <CardTitle className={`text font-semibold ${speaker.isPlaceholder ? 'blur-lg' : ''}`}>
                    {speaker.name}
                  </CardTitle>
                  <CardDescription className={`muted-text text-gray-500 ${speaker.isPlaceholder ? 'blur-lg' : ''}`}>
                    {speaker.affiliation}
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Speakers