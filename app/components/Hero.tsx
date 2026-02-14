
'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-top"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20travel%20photographer%20capturing%20stunning%20landscape%20at%20golden%20hour%20with%20dramatic%20mountains%20and%20flowing%20river%2C%20cinematic%20composition%2C%20warm%20natural%20lighting%2C%20minimalist%20aesthetic%2C%20serene%20atmosphere%2C%20high-end%20photography%20equipment%20visible%2C%20adventure%20travel%20photography%2C%20inspirational%20wanderlust%20scene&width=1920&height=1080&seq=hero1&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-6 w-full max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
          Capturing
          <span className="block font-pacifico text-4xl md:text-6xl mt-2">
            Wanderlust
          </span>
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto leading-relaxed">
          Journey through breathtaking landscapes and authentic moments from around the world
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/gallery">
            <button className="bg-white text-gray-800 px-8 py-4 hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
              View Portfolio
            </button>
          </Link>
          <Link href="/stories">
            <button className="border border-white text-white px-8 py-4 hover:bg-white hover:text-gray-800 transition-colors cursor-pointer whitespace-nowrap">
              Travel Stories
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-6 flex items-center justify-center cursor-pointer">
          <i className="ri-arrow-down-line text-white text-2xl"></i>
        </div>
      </div>
    </div>
  );
}
