const Recap = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">RECAP</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="UMHackathon Recap"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recap;