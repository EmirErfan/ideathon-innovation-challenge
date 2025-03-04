"use client";

import { FileSearch, Monitor, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';


const OverviewItem = ({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle: string }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.1 }} 
      className="flex flex-col items-center text-center bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md"
    >
      <div className="mb-6 text-blue-400">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{subtitle}</p>
    </motion.div>
  );
};

const PrizeItem = ({ position, amount, color }: { position: string, amount: string, color: string }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.1 }}
      className={`flex flex-col items-center bg-gradient-to-br ${color} p-6 rounded-2xl shadow-xl w-32 h-32 justify-center`}
    >
      <span className="text-2xl font-bold text-white drop-shadow-lg">{position}</span>
      <p className="text-lg font-semibold text-white drop-shadow-md">{amount}</p>
    </motion.div>
  );
};

const Overview = () => {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("overview");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    const scrollButton = document.getElementById("scroll-to-overview");
    if (scrollButton) {
      scrollButton.addEventListener("click", handleScroll);
    }

    return () => {
      if (scrollButton) {
        scrollButton.removeEventListener("click", handleScroll);
      }
    };
  }, []);

  return (
    <section id="overview" className="relative py-20 overflow-hidden text-white">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/30 to-black"></div>
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-blue-500/40 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-extrabold text-center mb-16 drop-shadow-xl">INFORMASI</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <OverviewItem 
            icon={<FileSearch className="w-16 h-16" />} 
            title="Tema" 
            subtitle="Tiga Tema: AI dalam Pembelajaran, Teknologi Blockchain & Keselamatan Siber" 
          />
          <OverviewItem 
            icon={<Monitor className="w-16 h-16" />} 
            title="Pertandingan Diadakan" 
            subtitle="Secara Fizikal" 
          />
          <OverviewItem 
            icon={<Building className="w-16 h-16" />} 
            title="Tempat" 
            subtitle="Perpustakaan Tun Abdul Razak, UiTM Jasin" 
          />
        </div>
        
        <div className="text-center mb-12">
          <h3 className="text-4xl font-extrabold mb-4 drop-shadow-lg">HADIAH TERKUMPUL</h3>
          <p className="text-xl mb-8 font-medium">Sebanyak <span className="text-yellow-400 font-bold">RM 900</span> untuk kategori Universiti dan Sekolah!</p>
          
          <div className="flex flex-wrap justify-center gap-12">
            <PrizeItem position="🥈" amount="RM 200" color="from-gray-400 to-gray-600" />
            <PrizeItem position="🥇" amount="RM 150" color="from-yellow-500 to-yellow-700" />
            <PrizeItem position="🥉" amount="RM 100" color="from-orange-500 to-orange-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
