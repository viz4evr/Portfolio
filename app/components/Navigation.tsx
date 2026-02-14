'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-pacifico text-gray-800">
          logo
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
            Home
          </Link>
          <Link href="/gallery" className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
            Gallery
          </Link>
          <Link href="/locations" className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
            Locations
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
            Contact
          </Link>
        </div>

        <button 
          className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="ri-menu-line text-xl"></i>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-4">
            <Link href="/" className="block text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="/gallery" className="block text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
              Gallery
            </Link>
            <Link href="/locations" className="block text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
              Locations
            </Link>
            <Link href="/about" className="block text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
              About
            </Link>
            <Link href="/contact" className="block text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}