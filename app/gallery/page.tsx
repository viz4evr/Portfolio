
'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import ImageModal from './ImageModal';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<{
    id: number;
    category: string;
    location: string;
    title: string;
    description: string;
    image: string;
  } | null>(null);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'landscapes', name: 'Landscapes' },
    { id: 'portraits', name: 'Portraits' },
    { id: 'street', name: 'Street' },
    { id: 'wildlife', name: 'Wildlife' },
    { id: 'architecture', name: 'Architecture' }
  ];

  const galleryImages = [
    {
      id: 1,
      category: 'landscapes',
      location: 'Torres del Paine, Chile',
      title: 'Granite Giants',
      description: 'Dramatic granite towers rising from the Patagonian steppe at sunrise',
      image: 'https://readdy.ai/api/search-image?query=Dramatic%20Torres%20del%20Paine%20granite%20towers%20at%20sunrise%2C%20Patagonian%20landscape%2C%20golden%20light%20hitting%20jagged%20peaks%2C%20pristine%20wilderness%2C%20professional%20landscape%20photography%2C%20inspiring%20natural%20beauty%2C%20cinematic%20composition%2C%20travel%20photography%20masterpiece&width=800&height=600&seq=gallery1&orientation=landscape'
    },
    {
      id: 2,
      category: 'street',
      location: 'Istanbul, Turkey',
      title: 'Grand Bazaar',
      description: 'The vibrant energy of one of the world\'s oldest covered markets',
      image: 'https://readdy.ai/api/search-image?query=Vibrant%20Grand%20Bazaar%20Istanbul%20with%20colorful%20Turkish%20carpets%2C%20traditional%20merchants%2C%20warm%20lighting%2C%20authentic%20cultural%20scene%2C%20bustling%20market%20atmosphere%2C%20travel%20documentary%20photography%2C%20rich%20textures%20and%20colors%2C%20human%20stories&width=800&height=600&seq=gallery2&orientation=landscape'
    },
    {
      id: 3,
      category: 'portraits',
      location: 'Bhutan',
      title: 'Monk at Prayer',
      description: 'A moment of quiet contemplation in a mountain monastery',
      image: 'https://readdy.ai/api/search-image?query=Tibetan%20Buddhist%20monk%20in%20prayer%20at%20mountain%20monastery%20in%20Bhutan%2C%20peaceful%20expression%2C%20traditional%20robes%2C%20golden%20temple%20light%2C%20spiritual%20moment%2C%20cultural%20portrait%20photography%2C%20deep%20emotional%20connection%2C%20respectful%20documentation&width=600&height=800&seq=gallery3&orientation=portrait'
    },
    {
      id: 4,
      category: 'wildlife',
      location: 'Kruger National Park, South Africa',
      title: 'Elephant Matriarch',
      description: 'A wise matriarch leads her family across the African savanna',
      image: 'https://readdy.ai/api/search-image?query=Majestic%20African%20elephant%20matriarch%20leading%20family%20across%20savanna%2C%20Kruger%20National%20Park%2C%20golden%20sunset%20light%2C%20wildlife%20conservation%20message%2C%20powerful%20presence%2C%20professional%20nature%20photography%2C%20emotional%20connection%20with%20wildlife&width=800&height=600&seq=gallery4&orientation=landscape'
    },
    {
      id: 5,
      category: 'architecture',
      location: 'Santorini, Greece',
      title: 'Cycladic Beauty',
      description: 'Classic white-washed buildings against the deep blue Aegean Sea',
      image: 'https://readdy.ai/api/search-image?query=Classic%20Santorini%20white-washed%20buildings%20with%20blue%20domes%20overlooking%20Aegean%20Sea%2C%20dramatic%20cliffs%2C%20golden%20hour%20lighting%2C%20Mediterranean%20architecture%2C%20travel%20photography%2C%20iconic%20Greek%20island%20beauty%2C%20minimalist%20composition&width=800&height=600&seq=gallery5&orientation=landscape'
    },
    {
      id: 6,
      category: 'landscapes',
      location: 'Lofoten Islands, Norway',
      title: 'Arctic Light',
      description: 'Aurora Borealis dancing over the dramatic peaks of Lofoten',
      image: 'https://readdy.ai/api/search-image?query=Northern%20Lights%20aurora%20borealis%20over%20dramatic%20Lofoten%20Islands%20peaks%2C%20Norwegian%20arctic%20landscape%2C%20green%20aurora%20dancing%20in%20star-filled%20sky%2C%20professional%20night%20photography%2C%20magical%20natural%20phenomenon%2C%20inspiring%20wanderlust&width=800&height=600&seq=gallery6&orientation=landscape'
    },
    {
      id: 7,
      category: 'street',
      location: 'Varanasi, India',
      title: 'River of Life',
      description: 'Dawn rituals along the sacred Ganges River',
      image: 'https://readdy.ai/api/search-image?query=Sacred%20Ganges%20River%20at%20dawn%20in%20Varanasi%20with%20morning%20rituals%2C%20traditional%20boats%2C%20spiritual%20atmosphere%2C%20golden%20sunrise%20light%2C%20cultural%20documentation%2C%20authentic%20Indian%20spiritual%20practices%2C%20travel%20photography&width=800&height=600&seq=gallery7&orientation=landscape'
    },
    {
      id: 8,
      category: 'portraits',
      location: 'Maasai Mara, Kenya',
      title: 'Maasai Warrior',
      description: 'A proud warrior in traditional dress against the African landscape',
      image: 'https://readdy.ai/api/search-image?query=Proud%20Maasai%20warrior%20in%20traditional%20red%20clothing%20and%20jewelry%2C%20authentic%20African%20portrait%2C%20cultural%20pride%2C%20warm%20natural%20lighting%2C%20respectful%20documentation%2C%20human%20connection%2C%20professional%20portrait%20photography%2C%20inspiring%20cultural%20diversity&width=600&height=800&seq=gallery8&orientation=portrait'
    },
    {
      id: 9,
      category: 'wildlife',
      location: 'Galápagos Islands, Ecuador',
      title: 'Marine Iguana',
      description: 'Ancient reptiles basking on volcanic rocks by the Pacific',
      image: 'https://readdy.ai/api/search-image?query=Gal%C3%A1pagos%20marine%20iguana%20on%20black%20volcanic%20rocks%2C%20Pacific%20Ocean%20waves%2C%20unique%20evolutionary%20adaptation%2C%20wildlife%20conservation%2C%20natural%20history%20documentation%2C%20pristine%20nature%2C%20professional%20wildlife%20photography%2C%20scientific%20wonder&width=800&height=600&seq=gallery9&orientation=landscape'
    },
    {
      id: 10,
      category: 'architecture',
      location: 'Angkor Wat, Cambodia',
      title: 'Ancient Grandeur',
      description: 'Sunrise illuminating the ancient Khmer temple complex',
      image: 'https://readdy.ai/api/search-image?query=Angkor%20Wat%20temple%20complex%20at%20sunrise%2C%20ancient%20Khmer%20architecture%2C%20golden%20light%20reflecting%20in%20water%2C%20historical%20monument%2C%20cultural%20heritage%2C%20travel%20photography%2C%20architectural%20masterpiece%2C%20spiritual%20atmosphere&width=800&height=600&seq=gallery10&orientation=landscape'
    },
    {
      id: 11,
      category: 'landscapes',
      location: 'Milford Sound, New Zealand',
      title: 'Fjord Reflections',
      description: 'Mirror-like waters reflecting towering peaks in New Zealand\'s fiordland',
      image: 'https://readdy.ai/api/search-image?query=Milford%20Sound%20fjord%20with%20perfect%20reflections%20of%20towering%20peaks%20in%20mirror-like%20water%2C%20New%20Zealand%20fiordland%2C%20misty%20atmosphere%2C%20dramatic%20landscape%2C%20professional%20nature%20photography%2C%20pristine%20wilderness%2C%20cinematic%20composition&width=800&height=600&seq=gallery11&orientation=landscape'
    },
    {
      id: 12,
      category: 'street',
      location: 'Havana, Cuba',
      title: 'Vintage Charm',
      description: 'Classic American cars cruising through colonial streets',
      image: 'https://readdy.ai/api/search-image?query=Vintage%20American%20cars%20in%20colorful%20Havana%20streets%2C%20Cuban%20colonial%20architecture%2C%20vibrant%20street%20life%2C%20authentic%20cultural%20scene%2C%20travel%20documentary%20photography%2C%20nostalgic%20atmosphere%2C%20Caribbean%20charm%2C%20warm%20lighting&width=800&height=600&seq=gallery12&orientation=landscape'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-gray-900">
              Gallery
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A comprehensive collection of my travel photography spanning continents, 
              cultures, and countless unforgettable moments
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-gray-800 text-white shadow-lg'
                    : 'bg-white/80 text-gray-700 hover:bg-white shadow-sm hover:shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-w-4 aspect-h-3">
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-2 text-shadow">{image.title}</h3>
                    <div className="text-sm opacity-95 flex items-center text-shadow">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-map-pin-line"></i>
                      </div>
                      {image.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <ImageModal 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
      
      <style jsx>{`
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
}
