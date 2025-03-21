
import React from 'react';
import { Camera, Award, Users, BarChart, Calendar, Video } from 'lucide-react';
import { BilliardIcon, BilliardSeparator } from '@/components/ui/billiard-icon';
import { BilliardBackground } from '@/components/ui/billiard-background';

const Features = () => {
  const features = [
    {
      icon: <Camera className="h-8 w-8 text-billman-green" />,
      ballType: 'solid' as const,
      ballColor: 'red' as const,
      ballNumber: 3,
      title: "AI Score Tracking",
      description: "Real-time automated score tracking and foul detection with computer vision technology.",
      delay: 0
    },
    {
      icon: <BarChart className="h-8 w-8 text-billman-green" />,
      ballType: 'stripe' as const,
      ballColor: 'blue' as const,
      ballNumber: 10,
      title: "Detailed Analytics",
      description: "Comprehensive performance metrics and game analysis to improve your skills.",
      delay: 0.1
    },
    {
      icon: <Calendar className="h-8 w-8 text-billman-green" />,
      ballType: 'solid' as const,
      ballColor: 'orange' as const,
      ballNumber: 5,
      title: "Online Tournaments",
      description: "Participate in remote tournaments and events from anywhere in the world.",
      delay: 0.2
    },
    {
      icon: <Video className="h-8 w-8 text-billman-green" />,
      ballType: 'stripe' as const,
      ballColor: 'green' as const,
      ballNumber: 14,
      title: "Interactive Lessons",
      description: "Learn from professionals with our library of interactive coaching lessons.",
      delay: 0.3
    },
    {
      icon: <Users className="h-8 w-8 text-billman-green" />,
      ballType: 'solid' as const,
      ballColor: 'purple' as const,
      ballNumber: 4,
      title: "Community Network",
      description: "Connect with players and clubs to share experiences and organize games.",
      delay: 0.4
    },
    {
      icon: <Award className="h-8 w-8 text-billman-green" />,
      ballType: 'eight' as const,
      ballColor: 'black' as const,
      ballNumber: 8,
      title: "Skill Development",
      description: "Track your progress and improve with personalized training recommendations.",
      delay: 0.5
    }
  ];

  return (
    <BilliardBackground intensity="light" className="py-24 bg-billman-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-billman-green/50 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-billman-green/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-billman-green/10 text-billman-green text-sm font-medium mb-4">
            <BilliardIcon type="cue" size="sm" />
            <span>Core Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Advanced Technology for <span className="bg-gradient-to-r from-billman-green to-billman-lightGreen bg-clip-text text-transparent">Every Player</span>
          </h2>
          <p className="text-billman-lightGray text-lg animate-fade-in" style={{animationDelay: '0.1s'}}>
            BILLMAN combines cutting-edge AI technology with billiards expertise to create the most comprehensive platform for players of all levels.
          </p>
        </div>
        
        <BilliardSeparator className="mb-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glassmorphism rounded-xl p-8 transition-all duration-300 hover:shadow-felt animate-fade-in relative overflow-hidden group"
              style={{animationDelay: `${feature.delay}s`}}
            >
              <div className="rounded-full bg-billman-green/10 w-16 h-16 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <div className="absolute -top-2 -right-2 opacity-90 transform transition-transform duration-300 group-hover:rotate-45">
                <BilliardIcon type={feature.ballType} color={feature.ballColor} number={feature.ballNumber} size="lg" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-billman-lightGray">{feature.description}</p>
              
              {/* Subtle cloth pattern overlay */}
              <div className="absolute inset-0 bg-billiard-felt opacity-5 bg-pattern-sm pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Decoration: Billiard rack triangle at the bottom */}
        <div className="flex justify-center mt-20 opacity-10">
          <div className="relative w-32 h-28">
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <BilliardIcon type="solid" color="red" size="lg" />
            </div>
            <div className="absolute top-10 left-1/3 -translate-x-1/2">
              <BilliardIcon type="stripe" color="blue" size="lg" />
            </div>
            <div className="absolute top-10 left-2/3 -translate-x-1/2">
              <BilliardIcon type="solid" color="yellow" size="lg" />
            </div>
            <div className="absolute top-20 left-1/4 -translate-x-1/2">
              <BilliardIcon type="eight" size="lg" />
            </div>
            <div className="absolute top-20 left-2/4 -translate-x-1/2">
              <BilliardIcon type="stripe" color="purple" size="lg" />
            </div>
            <div className="absolute top-20 left-3/4 -translate-x-1/2">
              <BilliardIcon type="solid" color="green" size="lg" />
            </div>
          </div>
        </div>
      </div>
    </BilliardBackground>
  );
};

export default Features;
