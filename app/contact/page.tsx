'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-gray-800">
              Contact
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to capture your next adventure? Let's discuss how we can bring 
              your vision to life through stunning travel photography.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-light mb-8 text-gray-800">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Whether you're planning a destination wedding, need travel photography 
                  for your tourism board, or want to collaborate on a personal project, 
                  I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-mail-line text-white"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Email</h3>
                    <p className="text-gray-600">hello@travelphotographer.com</p>
                    <p className="text-sm text-gray-500 mt-1">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-phone-line text-white"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500 mt-1">Available 9AM - 6PM PST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-map-pin-line text-white"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Based in</h3>
                    <p className="text-gray-600">San Francisco, CA</p>
                    <p className="text-sm text-gray-500 mt-1">Available for travel worldwide</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Follow the Journey</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-instagram-line text-white"></i>
                    </div>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-twitter-line text-white"></i>
                    </div>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-facebook-line text-white"></i>
                    </div>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-youtube-line text-white"></i>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Services Offered</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Destination Wedding Photography</li>
                  <li>• Travel & Tourism Photography</li>
                  <li>• Editorial & Commercial Projects</li>
                  <li>• Photography Workshops</li>
                  <li>• Private Travel Photography Tours</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-light mb-6 text-gray-800">
                Start Your Project
              </h3>
              
              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  Thank you for your message! I'll get back to you within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent text-sm"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <div className="relative">
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent text-sm appearance-none bg-white pr-8"
                    >
                      <option value="">Select a project type</option>
                      <option value="wedding">Destination Wedding</option>
                      <option value="commercial">Commercial/Editorial</option>
                      <option value="workshop">Photography Workshop</option>
                      <option value="tour">Private Photography Tour</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400"></i>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent text-sm"
                    placeholder="Brief description of your project"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    maxLength={500}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent text-sm resize-none"
                    placeholder="Tell me about your project, timeline, location, and any specific requirements..."
                  ></textarea>
                  <p className="text-sm text-gray-500 mt-2">
                    {formData.message.length}/500 characters
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-4 px-6 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}