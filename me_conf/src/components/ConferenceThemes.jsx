import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import conferenceThemes from '@/data/ThemeData';

const ConferenceThemes = () => {
  return (
    <section id="tracks" className="relative py-16 px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, 
              rgba(249, 250, 251, 0.92) 0%, 
              rgba(249, 250, 251, 0.85) 30%, 
              rgba(249, 250, 251, 0.92) 100%
            ),
            url('/bgs/HeroBG2.png')
          `,
          backgroundPosition: 'center center'
        }}
      />
      
      {/* Restore original container size */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading mb-4">Conference Themes</h2>
          <p className="subheading highlighter1 font-medium">TFGET-2026</p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="flex flex-wrap w-full mb-8 bg-white shadow-sm border gap-2 h-auto p-2">
            <TabsTrigger 
              value="overview" 
              className="flex-1 min-w-[120px] sm:min-w-0 normal-text font-medium data-[state=active]:bg-conf-green-600 data-[state=active]:text-white"
            >
              Overview
            </TabsTrigger>
            {conferenceThemes.tracks.map((track) => (
              <TabsTrigger 
                key={track.id}
                value={track.id}
                className="flex-1 min-w-[120px] sm:min-w-0 text font-medium data-[state=active]:bg-conf-green-600 data-[state=active]:text-white"
              >
                {track.title.split(':')[1].trim()}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-8">
            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-l-conf-green-600">
              <h3 className="subheading highlighter1 mb-6">{conferenceThemes.overview.title}</h3>
              <p className="text text-gray-700 leading-relaxed text-justify">
                {conferenceThemes.overview.description}
              </p>
              <div className="mt-6 p-4 bg-conf-green-50 rounded-lg border border-conf-green-200">
                <p className="text highlighter2 font-semibold">
                  📋 Review Process: Double-blind peer review ensuring quality and fairness
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Track Tabs */}
          {conferenceThemes.tracks.map((track) => (
            <TabsContent key={track.id} value={track.id} className="mt-8">
              <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-l-conf-green-600">
                <h3 className="subheading highlighter1 mb-6">{track.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {track.topics.map((topic, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-conf-green-50 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-conf-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <span className="muted-text text-gray-500">
                    {track.topics.length} research areas available
                  </span>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-conf-green-600 text-white rounded-lg p-8">
          <h3 className="subheading text-white mb-4">Ready to Submit Your Research?</h3>
          <p className="text text-conf-green-100 mb-6">
            Join researchers from around the world in advancing thermal fluids and green energy technology
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-conf-green-600 px-6 py-3 rounded-lg text font-semibold hover:bg-conf-green-50 transition-colors">
              Submit Abstract
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg text font-semibold hover:bg-white hover:text-conf-green-600 transition-colors">
              Download Guidelines
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceThemes; 