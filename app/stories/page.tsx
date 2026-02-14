'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function Stories() {
  const [selectedStory, setSelectedStory] = useState<{
    id: number;
    title: string;
    location: string;
    date: string;
    readTime: string;
    excerpt: string;
    image: string;
    content: string;
  } | null>(null);

  const travelStories = [
    {
      id: 1,
      title: 'Chasing Aurora in the Arctic Circle',
      location: 'Northern Norway',
      date: 'March 2024',
      readTime: '8 min read',
      excerpt: 'Three weeks above the Arctic Circle taught me that patience and persistence are the photographer\'s greatest tools. Here\'s the story of how I captured the perfect aurora shot.',
      image: 'https://readdy.ai/api/search-image?query=Photographer%20silhouette%20against%20Northern%20Lights%20aurora%20borealis%20in%20Arctic%20landscape%2C%20dramatic%20green%20aurora%20dancing%20in%20star-filled%20sky%2C%20snow-covered%20terrain%2C%20magical%20night%20photography%20scene%2C%20adventure%20travel%20story%2C%20inspiring%20wanderlust%20moment&width=800&height=600&seq=story1&orientation=landscape',
      content: `The alarm buzzed at 2 AM for the fifteenth night in a row. Outside my cabin in Tromsø, the temperature had dropped to -25°C, but the aurora forecast showed promise. After two weeks of cloudy skies and missed opportunities, I wasn't about to give up now.

I'd traveled to Northern Norway specifically for this moment – to capture the Northern Lights in their full glory. What I didn't expect was how much this journey would teach me about patience, persistence, and the unpredictable nature of travel photography.

The first week was brutal. Clear skies during the day would turn cloudy by evening, and when the skies were clear, the aurora activity was minimal. Local photographers I met shared stories of waiting weeks, even months, for the perfect shot. "The aurora doesn't follow your schedule," an elderly Finnish photographer told me over coffee. "You follow hers."

On this particular night, something felt different. The air was crisp and still, the stars were brilliant, and the aurora forecast showed a KP-index of 6 – strong activity. I packed my gear and drove to a remote location I'd scouted during daylight hours, away from the town's light pollution.

At 11 PM, it began as a faint green glow on the horizon. By midnight, the sky exploded into dancing curtains of green and purple light. I set up my camera and tripod with numb fingers, adjusting settings I'd practiced a hundred times. But as I watched this cosmic dance unfold above me, I realized something profound: sometimes the most important part of travel photography isn't the photograph itself – it's being present for the moment.

That night, I captured not just images, but a deep appreciation for the patience required to witness nature's most spectacular shows. The aurora lasted for three hours, painting the sky in colors that no camera could fully capture. But the memories, the feeling of standing alone under that vast Arctic sky – that's something no photograph could ever replicate.`
    },
    {
      id: 2,
      title: 'The Last Train to Ella',
      location: 'Sri Lanka',
      date: 'January 2024',
      readTime: '6 min read',
      excerpt: 'A missed connection in Kandy led to an unexpected adventure on one of the world\'s most scenic railway journeys through Sri Lanka\'s tea country.',
      image: 'https://readdy.ai/api/search-image?query=Vintage%20train%20winding%20through%20lush%20Sri%20Lankan%20tea%20plantations%2C%20misty%20mountains%2C%20emerald%20green%20tea%20fields%2C%20colonial%20railway%20bridge%2C%20golden%20sunset%20light%2C%20travel%20photography%2C%20nostalgic%20journey%2C%20tropical%20landscape%20adventure&width=800&height=600&seq=story2&orientation=landscape',
      content: `Sometimes the best travel experiences come from the worst travel plans. My carefully orchestrated schedule fell apart when I missed my morning train from Kandy to Ella due to a miscommunication about departure times. Standing on the platform with my heavy camera gear, watching the train disappear around a bend, I felt that familiar travel panic setting in.

"Next train is at 2 PM," the station master informed me with a sympathetic smile. "But this is better train – more scenic, less crowded."

Six hours later, I understood what he meant. The afternoon train wound through tea plantations that glowed golden in the setting sun. Passengers hung out of doorways, chatting with vendors selling fresh fruit and tea at every stop. An elderly tea picker named Kamala shared her lunch with me and told stories about working in the plantations for over forty years.

"Every day, same mountains, same tea bushes," she said, gesturing toward the endless green hills. "But every day, different light, different mood. Like your photographs, no?"

She was right. As we climbed higher into the hill country, the landscape transformed with each mile. Mist rolled through valleys, creating natural spotlights on terraced tea gardens. The famous Nine Arches Bridge appeared like something from a fairy tale, and passengers pressed against windows to capture the moment on their phones.

But I found myself putting my camera down more often than usual. Instead, I listened to conversations in three different languages, watched children wave from their village homes, and absorbed the rhythm of this slow train journey that connected mountain communities.

When we finally reached Ella station at sunset, I realized that missing that morning train had been a gift. Sometimes the best photographs are the ones you don't take – the ones that live only in memory, painted with the colors of unexpected adventure and human connection.`
    },
    {
      id: 3,
      title: 'Desert Silence and Saharan Sunrise',
      location: 'Morocco',
      date: 'November 2023',
      readTime: '7 min read',
      excerpt: 'A solo camel trek deep into the Sahara Desert revealed the profound beauty of silence and the challenge of capturing the desert\'s ever-changing personality.',
      image: 'https://readdy.ai/api/search-image?query=Sahara%20Desert%20sunrise%20with%20dramatic%20sand%20dunes%2C%20camel%20silhouettes%2C%20golden%20desert%20light%2C%20vast%20empty%20landscape%2C%20adventure%20travel%20photography%2C%20Morocco%20desert%20expedition%2C%20inspiring%20solitude%2C%20minimalist%20composition&width=800&height=600&seq=story3&orientation=landscape',
      content: `The Sahara Desert doesn't photograph well during the day. The harsh midday sun bleaches the sand dunes into an endless expanse of beige, and the lack of shadows makes everything appear flat and lifeless. But at sunrise and sunset, the desert transforms into a photographer's paradise – if you're willing to endure the journey to witness it.

My guide, Hassan, had been leading desert expeditions for twenty years. "Tourist want quick photo," he told me as we prepared for a three-day trek into the Erg Chebbi dunes. "You want real desert, yes? Real desert take time."

He was right. The first day was brutal – scorching heat, stinging sand, and the constant challenge of protecting camera equipment from the elements. My camel, whom Hassan had named "Photographer" in my honor, seemed determined to test every piece of gear I owned through a combination of sudden stops and enthusiastic sand-rolling sessions.

But as the sun began to set on our second day, I understood why Hassan had insisted on this longer journey. We were completely alone, surrounded by dunes that stretched endlessly in every direction. The silence was profound – not just quiet, but a deep, almost spiritual absence of sound that I'd never experienced before.

That evening, as I set up my camera for sunset shots, Hassan shared tea and stories about growing up in a nomadic Berber family. "Desert teach patience," he said, watching me adjust my tripod for the hundredth time. "Sand move every day, every hour. Same dune, different shape. Like life, no?"

The next morning, I woke before dawn to witness the sunrise from the highest dune in our camp. Climbing 300 feet of shifting sand with camera gear is no easy feat, but the view from the top was worth every stumbling step. As the first light hit the dunes, they came alive with color – deep purples and blues in the shadows, brilliant golds and oranges on the peaks.

I spent two hours on that dune, watching the light change and the shadows shift. I captured dozens of images, but more importantly, I experienced the profound stillness that only exists in places where humans are merely temporary visitors. The Sahara reminded me that the most powerful photographs often come from the most challenging journeys – and sometimes, the journey itself is more valuable than any image you could create.`
    },
    {
      id: 4,
      title: 'Monsoon Madness in Mumbai',
      location: 'India',
      date: 'July 2023',
      readTime: '5 min read',
      excerpt: 'Getting caught in Mumbai\'s monsoon season wasn\'t part of the plan, but it led to some of the most authentic street photography of my career.',
      image: 'https://readdy.ai/api/search-image?query=Mumbai%20street%20scene%20during%20monsoon%20rains%2C%20people%20with%20colorful%20umbrellas%2C%20bustling%20city%20life%20in%20rain%2C%20authentic%20Indian%20street%20photography%2C%20vibrant%20market%20atmosphere%2C%20dramatic%20weather%2C%20urban%20adventure%20travel%20story&width=800&height=600&seq=story4&orientation=landscape',
      content: `The weather app said "light rain." Mumbai's monsoon season had other plans.

I'd specifically avoided traveling to India during monsoon season, having heard horror stories of canceled flights, flooded streets, and camera equipment disasters. But when a last-minute assignment came up, I found myself boarding a plane to Mumbai in the middle of July, right in the heart of the wettest season.

The first week was exactly what I'd feared. Streets turned into rivers, my supposedly waterproof camera bag leaked, and I spent most days watching sheets of rain from my hotel window. But on day five, something shifted in my perspective.

I was having chai with Ravi, a street photographer who'd been documenting Mumbai for thirty years. "Monsoon is not obstacle," he said, watching me nervously check my weather-sealed camera. "Monsoon is opportunity. City show different face in rain."

The next morning, I ventured out with plastic bags wrapped around my gear and a new mindset. What I discovered was magical. Mumbai in the monsoon is a completely different city. Colors become more saturated, the light is soft and diffused, and people move with a different energy – urgent but joyful, inconvenienced but not defeated.

At Crawford Market, vendors continued selling fruits and vegetables despite ankle-deep water. Children splashed through puddles on their way to school, their uniforms bright against the gray sky. The iconic black-and-yellow taxis navigated flooded streets with remarkable skill, their drivers honking in rhythm with the rain.

I spent hours under shop awnings, capturing the drama of monsoon life. There's something beautiful about how a city adapts to extreme weather – the improvised solutions, the community spirit, the way normal life continues despite extraordinary circumstances.

By the end of the week, I'd captured some of my favorite street photography ever. The monsoon forced me to slow down, to really observe, and to find beauty in conditions I'd initially seen as obstacles. Sometimes the best travel photography happens not when everything goes according to plan, but when plans go completely sideways and force you to see with fresh eyes.`
    },
    {
      id: 5,
      title: 'Ice and Fire in Iceland',
      location: 'Iceland',
      date: 'February 2023',
      readTime: '9 min read',
      excerpt: 'A winter road trip around Iceland\'s Ring Road during the harshest season taught me that the most dramatic landscapes often require the most challenging journeys.',
      image: 'https://readdy.ai/api/search-image?query=Dramatic%20Iceland%20landscape%20with%20ice%20caves%20and%20volcanic%20formations%2C%20winter%20adventure%20photography%2C%20frozen%20waterfalls%2C%20black%20sand%20beaches%20with%20ice%2C%20harsh%20Nordic%20beauty%2C%20professional%20landscape%20photography%2C%20epic%20travel%20adventure&width=800&height=600&seq=story5&orientation=landscape',
      content: `"You're going to Iceland in February? Are you crazy?" 

That was the most common reaction when I told people about my plan to drive Iceland's Ring Road in the middle of winter. And honestly, after two weeks battling blizzards, icy roads, and three hours of daylight per day, I started wondering if they were right.

But Iceland in winter is like nowhere else on Earth. It's a land of extremes – ice caves that glow blue like something from another planet, waterfalls frozen into towering ice sculptures, and the Northern Lights dancing across skies so clear they seem infinite.

The journey began in Reykjavik with a rental car packed with winter survival gear and enough camera equipment to stock a small store. My first stop was the famous ice caves of Vatnajökull, accessible only by super jeep across a glacier. The 45-minute ride across crevasse-filled ice was terrifying and exhilarating in equal measure.

But stepping inside those ice caves was worth every moment of fear. The walls glowed with an ethereal blue light, carved smooth by centuries of glacial movement. My guide, Björn, explained how these caves are constantly changing – each winter brings new formations, and each summer melts others away forever.

"You are lucky," he said, watching me set up my tripod in the frozen cathedral. "This cave, maybe not here next year. You photograph something that exist only now."

That became the theme of my Icelandic adventure – capturing moments that exist only in that specific time and place. The ice formations at Diamond Beach, where glacial chunks wash up on black volcanic sand like scattered jewels. The frozen waterfalls of Seljalandsfoss, where you can walk behind curtains of ice. The abandoned plane wreck on Sólheimasandur beach, ghostly and beautiful against the stark landscape.

Each location required careful planning and often dangerous travel conditions. I got stuck in a blizzard for six hours near Höfn, survived on energy bars and coffee while waiting for the storm to pass. My camera batteries died constantly in the cold, and I learned to keep spares warm inside my jacket.

But the payoff was extraordinary. Iceland's winter landscape is raw and powerful in a way that summer visitors never experience. The Northern Lights appear almost nightly when skies are clear, painting green and purple across landscapes that look like the surface of an alien planet.

On my final night, camping in a heated hut near Lake Mývatn, I watched the aurora reflect in the partially frozen lake while shooting the Milky Way. After two weeks of challenges, equipment failures, and moments of genuine fear, I felt a deep satisfaction that only comes from pushing through difficult conditions to capture something truly special.

Iceland in winter isn't for everyone. But for photographers willing to embrace the challenge, it offers some of the most dramatic and otherworldly landscapes on Earth. Sometimes the most rewarding images come from the most demanding journeys.`
    },
    {
      id: 6,
      title: 'Lost in Translation, Found in Tokyo',
      location: 'Japan',
      date: 'April 2023',
      readTime: '6 min read',
      excerpt: 'Getting hopelessly lost in Tokyo\'s backstreets led to discovering hidden gems and learning that sometimes the best photographs happen when you stop trying so hard.',
      image: 'https://readdy.ai/api/search-image?query=Tokyo%20narrow%20backstreet%20at%20night%20with%20neon%20signs%2C%20traditional%20lanterns%2C%20authentic%20Japanese%20street%20photography%2C%20moody%20urban%20atmosphere%2C%20cultural%20immersion%2C%20travel%20adventure%20story%2C%20cinematic%20night%20scene&width=800&height=600&seq=story6&orientation=landscape',
      content: `Tokyo is a city that demands surrender. You can plan all you want, study maps until your eyes hurt, and download every translation app available, but ultimately, you have to let Tokyo happen to you.

I learned this lesson on my third day in the city, when I confidently set out to photograph the famous Memory Lane (Omoide Yokocho) in Shinjuku. Armed with a detailed itinerary and GPS coordinates, I felt prepared for anything. What I wasn't prepared for was how easy it is to get completely, hopelessly lost in Tokyo's labyrinthine street system.

One wrong turn led to another, and before I knew it, I was wandering through residential neighborhoods that didn't appear on any tourist map. My phone had died, my Japanese was limited to "arigatou gozaimasu," and I was starting to panic.

That's when I met Kenji-san.

He was an elderly man tending to a tiny garden outside his house, barely larger than a bathtub but meticulously maintained. When he saw me looking confused with my camera gear, he approached with a warm smile and began speaking in rapid Japanese. Despite our language barrier, it was clear he was offering to help.

Using gestures, drawings on his phone, and a few English words, Kenji-san not only gave me directions but invited me to photograph his neighborhood. For the next three hours, he served as my unofficial guide, introducing me to local shopkeepers, pointing out architectural details I would have missed, and sharing stories I couldn't understand but somehow felt anyway.

In a tiny ramen shop that seated eight people, the owner prepared a bowl of noodles unlike anything I'd experienced. At a traditional sweets shop, an elderly woman demonstrated how mochi was made by hand, her movements precise and graceful after decades of practice. In a narrow alley lined with vending machines, children played games I'd never seen before.

These weren't the Tokyo shots I'd planned to capture. There were no neon lights or famous landmarks, no crowds of tourists or iconic architecture. Instead, I found myself documenting quiet moments of daily life – a businessman feeding stray cats, teenagers sharing earbuds on a street corner, an old woman watering plants on her apartment balcony.

As the sun began to set, Kenji-san walked me to the nearest train station, bowing politely before disappearing back into the maze of streets. I never did make it to Memory Lane that day, but I discovered something more valuable – the Tokyo that exists between the famous attractions, in the spaces where real life unfolds away from guidebooks and Instagram feeds.

Sometimes the best travel photography happens when you stop trying to capture what you think you should photograph and instead remain open to what the place wants to show you. Tokyo taught me that getting lost isn't always a problem to be solved – sometimes it's an invitation to discover something unexpected.`
    }
  ];

  const handleReadMore = (story: typeof travelStories[0]) => {
    setSelectedStory(story);
  };

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-gray-800">
              Travel Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Behind every photograph lies an adventure. These are the stories of 
              unexpected moments, challenging journeys, and the magic that happens 
              when you step outside your comfort zone.
            </p>
          </div>

          {selectedStory ? (
            <div className="max-w-4xl mx-auto">
              <button
                onClick={() => setSelectedStory(null)}
                className="flex items-center text-gray-600 hover:text-gray-800 mb-8 cursor-pointer"
              >
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-arrow-left-line"></i>
                </div>
                Back to Stories
              </button>

              <article className="bg-white">
                <div className="mb-8">
                  <img
                    src={selectedStory.image}
                    alt={selectedStory.title}
                    className="w-full h-96 object-cover rounded-lg shadow-lg object-top"
                  />
                </div>

                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-light mb-4 text-gray-800">
                    {selectedStory.title}
                  </h1>
                  <div className="flex items-center text-gray-600 mb-6">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-map-pin-line"></i>
                    </div>
                    <span className="mr-4">{selectedStory.location}</span>
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-calendar-line"></i>
                    </div>
                    <span className="mr-4">{selectedStory.date}</span>
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-time-line"></i>
                    </div>
                    <span>{selectedStory.readTime}</span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  {selectedStory.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-6 text-lg text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Share this story
                    </div>
                    <div className="flex space-x-4">
                      <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className="ri-twitter-line text-white"></i>
                        </div>
                      </button>
                      <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className="ri-facebook-line text-white"></i>
                        </div>
                      </button>
                      <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className="ri-link text-white"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {travelStories.map((story) => (
                <article key={story.id} className="group cursor-pointer">
                  <div className="mb-6 overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 object-top"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <div className="w-4 h-4 flex items-center justify-center mr-1">
                        <i className="ri-map-pin-line"></i>
                      </div>
                      <span className="mr-4">{story.location}</span>
                      <div className="w-4 h-4 flex items-center justify-center mr-1">
                        <i className="ri-calendar-line"></i>
                      </div>
                      <span className="mr-4">{story.date}</span>
                      <div className="w-4 h-4 flex items-center justify-center mr-1">
                        <i className="ri-time-line"></i>
                      </div>
                      <span>{story.readTime}</span>
                    </div>
                    
                    <h2 className="text-2xl font-light mb-3 text-gray-800 group-hover:text-gray-600 transition-colors">
                      {story.title}
                    </h2>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {story.excerpt}
                    </p>
                    
                    <button
                      onClick={() => handleReadMore(story)}
                      className="inline-flex items-center text-gray-800 hover:text-gray-600 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Read Full Story
                      <div className="w-4 h-4 flex items-center justify-center ml-2">
                        <i className="ri-arrow-right-line"></i>
                      </div>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}