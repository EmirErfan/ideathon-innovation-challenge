'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="text-blue-500 font-bold text-2xl">
                <span className="text-blue-400">Ideathon</span><span className='text-blue-200'>:</span>Innovation Challenge
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="#intro" className="text-white hover:text-blue-400 transition-colors">Intro</Link>
              <Link href="#intro2" className="text-white hover:text-blue-400 transition-colors">About Ideathon</Link>
              <Link href="#objectives" className="text-white hover:text-blue-400 transition-colors">Objektif</Link>
              <Link href="#overview" className="text-white hover:text-blue-400 transition-colors">Informasi</Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#about" className="block px-3 py-2 text-white hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <Link href="#overview" className="block px-3 py-2 text-white hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>Overview</Link>
            <Link href="#timeline" className="block px-3 py-2 text-white hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>Timeline</Link>
            <Link href="#judges" className="block px-3 py-2 text-white hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>Judges</Link>
            <Link href="#mentors" className="block px-3 py-2 text-white hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>Mentors</Link>
            <Link href="#faq" className="block px-3 py-2 text-white hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
            <Link href="/login" className="block px-3 py-2 text-white hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;