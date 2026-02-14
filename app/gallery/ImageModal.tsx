'use client';

import { useEffect } from 'react';

interface ImageModalProps {
  image: {
    id: number;
    title: string;
    location: string;
    description: string;
    image: string;
  };
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      <div className="relative max-w-5xl max-h-full w-full">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors cursor-pointer"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <i className="ri-close-line text-3xl"></i>
          </div>
        </button>

        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
          <div className="relative">
            <img
              src={image.image}
              alt={image.title}
              className="w-full h-auto max-h-[70vh] object-cover object-top"
            />
          </div>
          
          <div className="p-8">
            <h2 className="text-2xl font-medium text-gray-800 mb-2">
              {image.title}
            </h2>
            <p className="text-gray-600 mb-4 flex items-center">
              <span className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-map-pin-line"></i>
              </span>
              {image.location}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {image.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}