'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FeaturedWork() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'landscapes', name: 'Landscapes' },
    { id: 'portraits', name: 'Portraits' },
    { id: 'street', name: 'Street' },
    { id: 'wildlife', name: 'Wildlife' }
  ];

  const featuredImages = [
    {
      id: 1,
      category: 'landscapes',
      location: 'Swiss Alps',
      title: 'Morning Mist',
      image: 'https://readdy.ai/api/search-image?query=Breathtaking%20Swiss%20Alps%20landscape%20with%20morning%20mist%20rolling%20through%20valleys%2C%20dramatic%20mountain%20peaks%2C%20golden%20sunrise%20light%2C%20pristine%20nature%2C%20cinematic%20photography%2C%20high%20contrast%2C%20professional%20travel%20photography%2C%20inspiring%20wanderlust%2C%20serene%20mountain%20atmosphere&width=600&height=800&seq=featured1&orientation=portrait'
    },
    {
      id: 2,
      category: 'street',
      location: 'Tokyo, Japan',
      title: 'Neon Nights',
      image: 'https://readdy.ai/api/search-image?query=Vibrant%20Tokyo%20street%20scene%20at%20night%20with%20neon%20signs%2C%20bustling%20crowds%2C%20authentic%20Japanese%20urban%20culture%2C%20moody%20lighting%2C%20cinematic%20street%20photography%2C%20colorful%20reflections%2C%20modern%20city%20atmosphere%2C%20travel%20documentary%20style&width=600&height=400&seq=featured2&orientation=landscape'
    },
    {
      id: 3,
      category: 'portraits',
      location: 'Rajasthan, India',
      title: 'Desert Nomad',
      image: 'https://readdy.ai/api/search-image?query=Portrait%20of%20weathered%20desert%20nomad%20from%20Rajasthan%20India%20with%20traditional%20turban%2C%20deep%20wrinkles%20telling%20stories%2C%20warm%20golden%20light%2C%20cultural%20authenticity%2C%20human%20connection%2C%20travel%20portrait%20photography%2C%20emotional%20depth%2C%20respectful%20documentation&width=600&height=800&seq=featured3&orientation=portrait'
    },
    {
      id: 4,
      category: 'wildlife',
      location: 'Serengeti, Tanzania',
      title: 'Golden Hour',
      image: 'https://readdy.ai/api/search-image?query=Majestic%20African%20lion%20in%20Serengeti%20during%20golden%20hour%2C%20warm%20sunset%20lighting%2C%20dramatic%20savanna%20landscape%2C%20wildlife%20photography%2C%20natural%20habitat%2C%20powerful%20presence%2C%20conservation%20message%2C%20professional%20nature%20photography%2C%20stunning%20composition&width=600&height=400&seq=featured4&orientation=landscape'
    },
    {
      id: 5,
      category: 'landscapes',
      location: 'Patagonia, Chile',
      title: 'Endless Horizon',
      image: 'https://readdy.ai/api/search-image?query=Dramatic%20Patagonia%20landscape%20with%20jagged%20mountain%20peaks%2C%20pristine%20glacial%20lakes%2C%20endless%20skies%2C%20adventure%20travel%20photography%2C%20raw%20natural%20beauty%2C%20minimalist%20composition%2C%20inspiring%20wilderness%2C%20professional%20landscape%20photography&width=600&height=800&seq=featured5&orientation=portrait'
    },
    {
      id: 6,
      category: 'street',
      location: 'Marrakech, Morocco',
      title: 'Market Stories',
      image: 'https://readdy.ai/api/search-image?query=Vibrant%20Marrakech%20market%20scene%20with%20colorful%20spices%2C%20traditional%20architecture%2C%20authentic%20cultural%20moments%2C%20warm%20lighting%2C%20travel%20documentary%20photography%2C%20human%20stories%2C%20cultural%20immersion%2C%20bustling%20atmosphere&width=600&height=400&seq=featured6&orientation=landscape'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? featuredImages 
    : featuredImages.filter(img => img.category === selectedCategory);

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A curated selection of my most compelling travel photography, 
            capturing the essence of diverse cultures and breathtaking landscapes
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all cursor-pointer whitespace-nowrap $${
                selectedCategory === category.id
                  ? 'bg-gray-800 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div key={image.id} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-w-4 aspect-h-5">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-medium mb-2">{image.title}</h3>
                  <p className="text-sm opacity-90 flex items-center">
                    <span className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-map-pin-line"></i>
                    </span>
                    {image.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/gallery" className="inline-block bg-gray-800 text-white px-8 py-4 hover:bg-gray-700 transition-colors cursor-pointer whitespace-nowrap">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}