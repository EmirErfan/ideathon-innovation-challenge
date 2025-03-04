"use client";

import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-gray-400">
          © {new Date().getFullYear()} Ideathon. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
