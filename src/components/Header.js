'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for transparent header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="pt-4 pb-4 container mx-auto px-4 lg:px-10 flex items-center justify-between">
        {/* Mobile Menu Button (Left) */}
        <button 
          className="md:hidden flex items-center p-2 rounded-md hover:bg-foreground/5"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Logo - Centered on mobile */}
        <Link href="/" className="flex items-center md:absolute md:left-4">
          <Image
            src="https://cdn.codeopx.com/halal.png"
            alt="Lalal Food Logo"
            width={100}
            height={24}
            className="dark:invert"
            priority
          />
          {/* <span className="ml-2 text-xl font-bold hidden sm:inline">Lalal Food</span> */}
        </Link>

        {/* Desktop Navigation - Right Aligned */}
        <nav className="hidden md:flex items-center space-x-8 ml-auto">
          <Link href="/" className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-opacity-80 transition-colors font-medium text-center`}>
            Home
          </Link>
          <Link href="/menu" className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-opacity-80 transition-colors font-medium text-center`}>
            Menu
          </Link>
          <Link href="/about" className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-opacity-80 transition-colors font-medium text-center`}>
            About
          </Link>
          <Link href="/contact" className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-opacity-80 transition-colors font-medium text-center`}>
            Contact
          </Link>
        </nav>

        {/* Empty div for mobile layout balance */}
        <div className="w-10 md:hidden"></div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-background shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/vercel.svg"
                  alt="Lalal Food Logo"
                  width={80}
                  height={20}
                  className="dark:invert"
                  priority
                />
              </Link>
              <button 
                onClick={toggleMenu}
                className="p-2 rounded-md hover:bg-foreground/5"
                aria-label="Close menu"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          <nav className="flex flex-col p-4 space-y-4">
            <Link 
              href="/" 
              className="text-white hover:text-white/80 transition-colors py-2 px-4 rounded-md hover:bg-foreground/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/menu" 
              className="text-white hover:text-white/80 transition-colors py-2 px-4 rounded-md hover:bg-foreground/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-white/80 transition-colors py-2 px-4 rounded-md hover:bg-foreground/5"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-white/80 transition-colors py-2 px-4 rounded-md hover:bg-foreground/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
      
      {/* Overlay when drawer is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}