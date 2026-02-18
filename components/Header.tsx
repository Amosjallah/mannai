
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link 
            href="/" 
            className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
          >
            <img
              src="/logo.png"
              alt="Mennai Farms Logo"
              width={200}
              height={96}
              className="h-16 md:h-20 lg:h-24 w-auto object-contain"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 lg:space-x-8">
              <Link 
                href="/" 
                className="relative text-gray-700 hover:text-green-600 transition-all duration-300 font-medium cursor-pointer group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/about" 
                className="relative text-gray-700 hover:text-green-600 transition-all duration-300 font-medium cursor-pointer group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/farm" 
                className="relative text-gray-700 hover:text-green-600 transition-all duration-300 font-medium cursor-pointer group"
              >
                Our Farm
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/products" 
                className="relative text-gray-700 hover:text-green-600 transition-all duration-300 font-medium cursor-pointer group"
              >
                Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/gallery" 
                className="relative text-gray-700 hover:text-green-600 transition-all duration-300 font-medium cursor-pointer group"
              >
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/contact" 
                className="relative text-gray-700 hover:text-green-600 transition-all duration-300 font-medium cursor-pointer group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer rounded-md hover:bg-gray-100 transition-colors duration-200"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl text-gray-700 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}></i>
          </button>
        </div>

        <div 
          className={`md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-all duration-200 cursor-pointer" 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-all duration-200 cursor-pointer" 
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/farm" 
              className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-all duration-200 cursor-pointer" 
              onClick={() => setIsMenuOpen(false)}
            >
              Our Farm
            </Link>
            <Link 
              href="/products" 
              className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-all duration-200 cursor-pointer" 
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/gallery" 
              className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-all duration-200 cursor-pointer" 
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-all duration-200 cursor-pointer" 
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
