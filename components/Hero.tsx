import Link from 'next/link';
import { LightbulbIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/30 to-black"></div>
      
      {/* Blue glow effects */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/20 rounded-full blur-[150px]"></div>
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-blue-500/20 rounded-full blur-[150px]"></div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            <span className="block">UNLEASH</span>
            <span className="block mt-2">YOUR</span>
            <span className="block mt-2">CREATIVE</span>
            <span className="block mt-2">IDEA</span>
          </h1>
        </div>
        
        <div className="md:w-1/2 flex justify-center md:justify">
          <img 
            src="https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
            alt="IDEA" 
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;