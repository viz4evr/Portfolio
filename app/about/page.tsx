'use client';

import Navigation from '../components/Navigation';

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-gray-800">
              About
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The story behind the lens - a journey of discovery, connection, and 
              endless fascination with our world's incredible diversity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20travel%20photographer%20portrait%20sitting%20on%20mountain%20cliff%20overlooking%20vast%20landscape%2C%20contemplative%20expression%2C%20camera%20equipment%20nearby%2C%20golden%20hour%20lighting%2C%20adventure%20gear%2C%20inspiring%20wanderlust%2C%20authentic%20outdoor%20lifestyle%2C%20documentary%20style%20photography&width=700&height=800&seq=about-main&orientation=portrait"
                alt="Travel photographer at work"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 flex items-center justify-center">
                  <i className="ri-camera-line text-white text-2xl"></i>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-light mb-6 text-gray-800">
                  My Journey
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    What started as a simple backpacking trip through Southeast Asia 
                    eight years ago has evolved into a lifelong passion for capturing 
                    the world's most extraordinary moments. Armed with nothing but a 
                    basic camera and an insatiable curiosity, I discovered that 
                    photography was my way of connecting with people and places.
                  </p>
                  <p>
                    Each destination has taught me something new - not just about 
                    photography, but about humanity, resilience, and the incredible 
                    beauty that exists in our world. From the bustling streets of 
                    Mumbai to the serene landscapes of Patagonia, every frame tells 
                    a story that transcends borders.
                  </p>
                  <p>
                    Today, I specialize in travel and documentary photography, 
                    working with tourism boards, conservation organizations, and 
                    publications to tell stories that matter. My work has been 
                    featured in National Geographic, Travel + Leisure, and 
                    Lonely Planet.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-light mb-4 text-gray-800">Equipment</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Canon EOS R5</li>
                    <li>• Canon 16-35mm f/2.8L</li>
                    <li>• Canon 70-200mm f/2.8L</li>
                    <li>• DJI Mavic 3 Pro</li>
                    <li>• Peak Design Travel Tripod</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-4 text-gray-800">Approach</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Sustainable travel practices</li>
                    <li>• Cultural sensitivity</li>
                    <li>• Environmental awareness</li>
                    <li>• Community engagement</li>
                    <li>• Storytelling focus</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-12 mb-20">
            <h2 className="text-3xl font-light mb-12 text-gray-800 text-center">
              Recognition & Experience
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <i className="ri-award-line text-white text-2xl"></i>
                  </div>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Awards</h3>
                <p className="text-gray-600">Winner of World Press Photo Travel Category 2023</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <i className="ri-book-line text-white text-2xl"></i>
                  </div>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Publications</h3>
                <p className="text-gray-600">Featured in National Geographic, Travel + Leisure</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <i className="ri-presentation-line text-white text-2xl"></i>
                  </div>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Speaking</h3>
                <p className="text-gray-600">TEDx talks and photography workshops worldwide</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-light text-gray-800 mb-2">45+</div>
                <div className="text-sm text-gray-600">Countries Explored</div>
              </div>
              <div>
                <div className="text-4xl font-light text-gray-800 mb-2">8</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-light text-gray-800 mb-2">15k+</div>
                <div className="text-sm text-gray-600">Photos Captured</div>
              </div>
              <div>
                <div className="text-4xl font-light text-gray-800 mb-2">50+</div>
                <div className="text-sm text-gray-600">Client Projects</div>
              </div>
            </div>
          </div>

          <div className="text-center bg-white rounded-2xl p-12">
            <h2 className="text-3xl font-light mb-6 text-gray-800">
              Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              "Photography is not just about capturing what we see, but about revealing 
              what we feel. Every image should tell a story that connects us to places 
              and people, inspiring others to explore with respect, wonder, and appreciation 
              for our planet's incredible diversity."
            </p>
            <div className="w-16 h-0.5 bg-gray-800 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}