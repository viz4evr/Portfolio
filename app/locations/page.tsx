'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState<{
    id: number;
    name: string;
    country: string;
    coordinates: string;
    description: string;
    highlights: string[];
    bestTime: string;
    difficulty: string;
    image: string;
  } | null>(null);

  const locations = [
    {
      id: 1,
      name: 'Patagonia',
      country: 'Chile & Argentina',
      coordinates: '-50.0, -73.0',
      description: 'Rugged wilderness with dramatic peaks, glaciers, and endless skies. A paradise for landscape photographers seeking raw natural beauty.',
      highlights: ['Torres del Paine', 'Perito Moreno Glacier', 'Fitz Roy', 'Marble Caves'],
      bestTime: 'December - March',
      difficulty: 'Moderate to Challenging',
      image: 'https://readdy.ai/api/search-image?query=Dramatic%20Patagonia%20landscape%20with%20jagged%20mountain%20peaks%2C%20glacial%20lakes%2C%20windswept%20grasslands%2C%20adventure%20travel%20photography%2C%20raw%20natural%20beauty%2C%20cinematic%20composition%2C%20inspiring%20wilderness%2C%20professional%20landscape%20photography&width=800&height=600&seq=location1&orientation=landscape'
    },
    {
      id: 2,
      name: 'Japanese Alps',
      country: 'Japan',
      coordinates: '36.2, 137.6',
      description: 'Sacred mountains, ancient temples, and traditional villages. A journey through Japan\'s spiritual heartland and stunning mountain scenery.',
      highlights: ['Mount Fuji', 'Shirakawa-go', 'Takayama', 'Nakasendo Trail'],
      bestTime: 'April - June, September - November',
      difficulty: 'Easy to Moderate',
      image: 'https://readdy.ai/api/search-image?query=Japanese%20Alps%20with%20Mount%20Fuji%20in%20background%2C%20traditional%20villages%2C%20cherry%20blossoms%2C%20serene%20mountain%20landscape%2C%20cultural%20heritage%2C%20spiritual%20atmosphere%2C%20travel%20photography%2C%20authentic%20Japanese%20beauty&width=800&height=600&seq=location2&orientation=landscape'
    },
    {
      id: 3,
      name: 'Sahara Desert',
      country: 'Morocco',
      coordinates: '31.0, -7.0',
      description: 'Endless dunes, starlit skies, and nomadic culture. Experience the silence and grandeur of one of the world\'s most iconic deserts.',
      highlights: ['Erg Chebbi', 'Merzouga', 'Camel Trekking', 'Desert Camps'],
      bestTime: 'October - April',
      difficulty: 'Moderate',
      image: 'https://readdy.ai/api/search-image?query=Sahara%20Desert%20golden%20sand%20dunes%20at%20sunset%2C%20camel%20caravan%20silhouettes%2C%20dramatic%20lighting%2C%20endless%20desert%20landscape%2C%20nomadic%20culture%2C%20adventure%20travel%20photography%2C%20inspiring%20wanderlust%2C%20cinematic%20composition&width=800&height=600&seq=location3&orientation=landscape'
    },
    {
      id: 4,
      name: 'Lofoten Islands',
      country: 'Norway',
      coordinates: '68.2, 13.6',
      description: 'Arctic paradise with dramatic peaks rising from the sea. Perfect for capturing Northern Lights and midnight sun photography.',
      highlights: ['Reine', 'Nusfjord', 'Northern Lights', 'Midnight Sun'],
      bestTime: 'May - September, December - March',
      difficulty: 'Moderate',
      image: 'https://readdy.ai/api/search-image?query=Lofoten%20Islands%20dramatic%20peaks%20rising%20from%20arctic%20sea%2C%20traditional%20fishing%20villages%2C%20Northern%20Lights%20dancing%20overhead%2C%20Norwegian%20fjords%2C%20professional%20landscape%20photography%2C%20magical%20natural%20beauty%2C%20inspiring%20wilderness&width=800&height=600&seq=location4&orientation=landscape'
    },
    {
      id: 5,
      name: 'Rajasthan',
      country: 'India',
      coordinates: '27.0, 74.0',
      description: 'Land of maharajas, colorful festivals, and desert cities. A photographer\'s dream with vibrant culture and stunning architecture.',
      highlights: ['Jaipur', 'Jodhpur', 'Udaipur', 'Thar Desert'],
      bestTime: 'October - March',
      difficulty: 'Easy to Moderate',
      image: 'https://readdy.ai/api/search-image?query=Rajasthan%20desert%20city%20with%20colorful%20traditional%20architecture%2C%20ornate%20palaces%2C%20vibrant%20markets%2C%20cultural%20festivals%2C%20authentic%20Indian%20atmosphere%2C%20travel%20photography%2C%20rich%20textures%20and%20colors%2C%20historical%20heritage&width=800&height=600&seq=location5&orientation=landscape'
    },
    {
      id: 6,
      name: 'Galápagos Islands',
      country: 'Ecuador',
      coordinates: '-0.7, -90.6',
      description: 'Unique wildlife and pristine nature. Darwin\'s living laboratory offers unparalleled opportunities for wildlife photography.',
      highlights: ['Marine Iguanas', 'Giant Tortoises', 'Blue-footed Boobies', 'Sea Lions'],
      bestTime: 'December - May, June - November',
      difficulty: 'Easy',
      image: 'https://readdy.ai/api/search-image?query=Gal%C3%A1pagos%20Islands%20unique%20wildlife%20with%20marine%20iguanas%2C%20giant%20tortoises%2C%20pristine%20volcanic%20landscape%2C%20evolutionary%20wonder%2C%20wildlife%20conservation%2C%20natural%20history%20documentation%2C%20scientific%20photography%2C%20pristine%20nature&width=800&height=600&seq=location6&orientation=landscape'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-gray-800">
              Locations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the extraordinary places that have shaped my photography journey. 
              Each destination offers unique stories, challenges, and unforgettable moments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location) => (
              <div 
                key={location.id} 
                className="group cursor-pointer"
                onClick={() => setSelectedLocation(location)}
              >
                <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-medium mb-1">{location.name}</h3>
                      <p className="text-sm opacity-90 flex items-center">
                        <div className="w-4 h-4 flex items-center justify-center mr-2">
                          <i className="ri-map-pin-line"></i>
                        </div>
                        {location.country}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {location.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 mb-1">Best Time</h4>
                        <p className="text-sm text-gray-600">{location.bestTime}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 mb-1">Difficulty</h4>
                        <p className="text-sm text-gray-600">{location.difficulty}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-800 mb-2">Highlights</h4>
                      <div className="flex flex-wrap gap-2">
                        {location.highlights.map((highlight, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer whitespace-nowrap">
                      View on Map
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-light mb-6 text-gray-800 text-center">
              Interactive Travel Map
            </h2>
            <div className="w-full h-96 bg-white rounded-lg shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.5!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
            <p className="text-center text-gray-600 mt-4">
              Explore the locations I've photographed around the world. Click on markers to see featured images from each destination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}