'use client';

export default function About() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-800">
              Behind the Lens
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I'm a passionate travel photographer dedicated to capturing the raw beauty 
                and authentic moments that define our world's most extraordinary destinations. 
                With over 8 years of experience traversing 45 countries, I seek to tell 
                stories that transcend cultural boundaries.
              </p>
              <p>
                My approach combines technical excellence with emotional storytelling, 
                creating images that not only document places but evoke the feelings 
                and experiences of being there. From the bustling markets of Southeast 
                Asia to the pristine wilderness of Patagonia, every frame is a window 
                into the soul of a place.
              </p>
              <p>
                Beyond photography, I'm committed to sustainable travel practices and 
                supporting local communities. Through my work, I aim to inspire others 
                to explore responsibly and appreciate the incredible diversity our 
                planet offers.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-light text-gray-800 mb-2">45+</div>
                <div className="text-sm text-gray-600">Countries Visited</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-gray-800 mb-2">8</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-gray-800 mb-2">15k+</div>
                <div className="text-sm text-gray-600">Photos Captured</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20travel%20photographer%20portrait%20in%20natural%20outdoor%20setting%2C%20holding%20camera%20equipment%2C%20authentic%20adventurer%20appearance%2C%20confident%20expression%2C%20rugged%20landscape%20background%2C%20golden%20hour%20lighting%2C%20inspiring%20wanderlust%2C%20documentary%20style%20photography%2C%20authentic%20professional%20headshot&width=600&height=800&seq=about1&orientation=portrait"
                alt="Travel photographer portrait"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <i className="ri-camera-line text-white text-3xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}