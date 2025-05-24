import React from 'react';
import timelineData from '../data/TimelineData.js';

const Timeline = () => {
  return (
    <section id="dates" className="py-16 px-4">
      <div className="min-w-[40vw] mx-auto">
        <h2 className="heading text-center mb-16">Important Dates</h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-conf-green-600 via-conf-green-500 to-conf-green-700"></div>
          
          {timelineData.map((item, index) => (
            <div key={item.id} className="relative pb-12 last:mb-0">
              
              {/* Timeline Dot */}
              <div className={`absolute left-4 w-4 h-4 rounded-full border-4 ${
                item.isHighlight 
                  ? 'bg-conf-green-600 border-conf-green-200 shadow-lg shadow-conf-green-300' 
                  : 'bg-white border-conf-green-600'
              }`}></div>
              
              {/* Content Card */}
              <div className="pl-16">
                <div className={`p-6 rounded-lg shadow-md border-l-4 transition-all duration-300 ${
                  item.isHighlight 
                    ? 'bg-conf-green-50 border-l-conf-green-600 shadow-lg' 
                    : 'bg-white border-l-conf-green-400 hover:shadow-lg hover:transform hover:scale-105'
                }`}>
                  
                 {/* Date Badge */}
                  <div className={`inline-block px-4 py-2 rounded-full mb-4 ${
                    item.isHighlight 
                      ? 'bg-conf-green-600 text-white' 
                      : 'bg-conf-green-100 text-conf-green-800'
                  }`}>
                    <span className="muted-text font-semibold">{item.date}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className={`normal-text font-semibold mb-3 ${
                    item.isHighlight ? 'highlighter1' : 'text-gray-800'
                  }`}>
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="normal-text text-gray-600 leading-relaxed">{item.description}</p>
                  
                  {/* Conference highlight indicator */}
                  {item.isHighlight && (
                    <div className="mt-4 flex items-center">
                      <div className="w-2 h-2 bg-conf-green-600 rounded-full mr-2 animate-pulse"></div>
                      <span className="muted-text highlighter2 font-semibold">Main Event</span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Connector to next item */}
              {index < timelineData.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-12 bg-gradient-to-b from-conf-green-400 to-conf-green-600 opacity-60"></div>
              )}
            </div>
          ))}
        </div>
    
      </div>
    </section>
  );
    };

export default Timeline; 