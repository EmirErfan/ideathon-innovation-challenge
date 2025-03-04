"use client";

import { BrainCircuit, Cog, Users } from 'lucide-react';

const ObjectiveCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="border border-blue-800/50 bg-blue-950/10 backdrop-blur-sm rounded-lg p-8 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-900/20">
      <div className="flex items-start">
        <div className="mr-6">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Objectives = () => {
  return (
    <section id= "objectives" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">OBJEKTIF</h2>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          <ObjectiveCard 
            icon={<BrainCircuit className="w-12 h-12 text-white" />}
            title="Meningkatkan Kemahiran Berfikir Kreatif & Kritis"
            description="Membantu pelajar mengembangkan pemikiran inovatif dalam menyelesaikan masalah dunia nyata melalui pendekatan kreatif dan analitis."
          />
          
          <ObjectiveCard 
            icon={<Cog className="w-12 h-12 text-white" />}
            title="Meningkatkan Kerjasama & Kemahiran Komunikasi"
            description="Menggalakkan pelajar dari latar belakang berbeza untuk bekerja dalam pasukan, bertukar idea, dan membina keyakinan dalam menyampaikan idea mereka dengan berkesan.
."
          />
          
          <ObjectiveCard 
            icon={<Users className="w-12 h-12 text-white" />}
            title="Mendedahkan Pelajar kepada Teknologi & Inovasi"
            description="Memberikan pendedahan kepada pelajar mengenai teknologi terkini, konsep keusahawanan, serta peluang untuk mengaplikasikan kemahiran digital dan saintifik dalam mencipta penyelesaian yang relevan."
          />
        </div>
      </div>
    </section>
  );
};

export default Objectives;