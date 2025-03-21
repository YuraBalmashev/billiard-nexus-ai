
import React from 'react';
import { Camera, Award, Users, BarChart, Calendar, Video } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Camera className="h-8 w-8 text-billman-green" />,
      title: "AI Score Tracking",
      description: "Real-time automated score tracking and foul detection with computer vision technology.",
      delay: 0
    },
    {
      icon: <BarChart className="h-8 w-8 text-billman-green" />,
      title: "Detailed Analytics",
      description: "Comprehensive performance metrics and game analysis to improve your skills.",
      delay: 0.1
    },
    {
      icon: <Calendar className="h-8 w-8 text-billman-green" />,
      title: "Online Tournaments",
      description: "Participate in remote tournaments and events from anywhere in the world.",
      delay: 0.2
    },
    {
      icon: <Video className="h-8 w-8 text-billman-green" />,
      title: "Interactive Lessons",
      description: "Learn from professionals with our library of interactive coaching lessons.",
      delay: 0.3
    },
    {
      icon: <Users className="h-8 w-8 text-billman-green" />,
      title: "Community Network",
      description: "Connect with players and clubs to share experiences and organize games.",
      delay: 0.4
    },
    {
      icon: <Award className="h-8 w-8 text-billman-green" />,
      title: "Skill Development",
      description: "Track your progress and improve with personalized training recommendations.",
      delay: 0.5
    }
  ];

  return (
    <section className="py-24 bg-billman-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-billman-green/50 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-billman-green/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-billman-green/10 text-billman-green text-sm font-medium mb-4">
            Core Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Advanced Technology for <span className="bg-gradient-to-r from-billman-green to-billman-lightGreen bg-clip-text text-transparent">Every Player</span>
          </h2>
          <p className="text-billman-lightGray text-lg animate-fade-in" style={{animationDelay: '0.1s'}}>
            BILLMAN combines cutting-edge AI technology with billiards expertise to create the most comprehensive platform for players of all levels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glassmorphism rounded-xl p-8 transition-all duration-300 hover:shadow-neon animate-fade-in"
              style={{animationDelay: `${feature.delay}s`}}
            >
              <div className="rounded-full bg-billman-green/10 w-16 h-16 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-billman-lightGray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
