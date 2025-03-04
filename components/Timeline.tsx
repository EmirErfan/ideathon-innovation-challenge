const TimelineItem = ({ date, title, side = 'right' }: { date: string, title: string, side?: 'left' | 'right' }) => {
  return (
    <div className="flex items-center">
      {side === 'left' && (
        <div className="w-1/2 pr-8 text-right">
          <h3 className="text-2xl md:text-3xl font-bold">{date}</h3>
          <p className="text-gray-300">{title}</p>
        </div>
      )}
      
      <div className="relative flex flex-col items-center">
        <div className="h-4 w-4 bg-white rounded-full z-10"></div>
        <div className="h-full w-0.5 bg-white/50 absolute top-4 -z-10"></div>
        <div className="h-4 w-4 bg-white/30 rounded-full mt-2 blur-sm"></div>
      </div>
      
      {side === 'right' && (
        <div className="w-1/2 pl-8">
          <h3 className="text-2xl md:text-3xl font-bold">{date}</h3>
          <p className="text-gray-300">{title}</p>
        </div>
      )}
    </div>
  );
};

const Timeline = () => {
  return (
    <section id="timeline" className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-600/10 to-blue-900/20"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <img 
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
            alt="UMHackathon Logo" 
            className="w-16 h-16 mx-auto mb-4"
          />
          <h2 className="text-3xl md:text-4xl font-bold">UMHackathon 2025</h2>
          <p className="text-2xl mt-4">Our Journey has started</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-16">
          <TimelineItem 
            date="20th February 2025"
            title="Registration Open"
            side="right"
          />
          
          <TimelineItem 
            date="5th April 2025"
            title="Registration Close"
            side="right"
          />
          
          <TimelineItem 
            date="6th April 2025"
            title="Industrial Talk"
            side="right"
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;