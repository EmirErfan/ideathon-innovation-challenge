const AboutUs = () => {
  return (
    <section id="intro2" className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>
      
      {/* Blue glow effect */}
      <div className="absolute left-0 top-0 w-1/3 h-1/2 bg-blue-500/20 rounded-full blur-[150px]"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">IDEATHON INNOVATION CHALLENGE</h2>
        
        <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:pl-16">
            <p className="text-lg leading-relaxed text-gray-300">
              Ideathon Innovation Challenge adalah sebuah acara yang diadakan sempena GegauFest 2025 yang diadakan pada bulan 4 dengan usahasama JPK dan JPNR UiTM Cawangan Melaka Kampus Jasin. Pertandingan ini bertujuaan untuk memberi peluang kepada pelajar Universiti dan Sekolah Menengah untuk memberikan inovasi yang berunsurkan teknikal komputer.
            </p>
          </div>

          <div className="md:w-1/3 mb-10 md:mb-0">
            <div className="relative">
              <div className="w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] absolute -top-10 -left-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Abstract Technology" 
                className="relative z-10 w-full max-w-xs mx-auto rounded-full"
              />
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default AboutUs;