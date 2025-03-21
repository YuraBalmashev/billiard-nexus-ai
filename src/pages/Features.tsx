
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Camera, Award, Users, BarChart, Calendar, Video, Clock, Shield, Search, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturesPage = () => {
  const coreFeatures = [
    {
      icon: <Camera className="h-8 w-8 text-billman-green" />,
      title: "Computer Vision Tracking",
      description: "Automated ball tracking and position detection with 98% accuracy using advanced computer vision algorithms."
    },
    {
      icon: <Shield className="h-8 w-8 text-billman-green" />,
      title: "Automated Foul Detection",
      description: "Instant identification of fouls and rule violations with video replay confirmation for transparency."
    },
    {
      icon: <BarChart className="h-8 w-8 text-billman-green" />,
      title: "Advanced Analytics",
      description: "Comprehensive performance metrics including shot success rate, positioning accuracy, and strategic patterns."
    },
    {
      icon: <Clock className="h-8 w-8 text-billman-green" />,
      title: "Real-time Processing",
      description: "Instantaneous processing and feedback with minimal latency for a seamless gameplay experience."
    }
  ];

  const socialFeatures = [
    {
      icon: <Calendar className="h-8 w-8 text-billman-green" />,
      title: "Tournament Platform",
      description: "Host and participate in online tournaments with automated scoring, brackets, and live streaming."
    },
    {
      icon: <Users className="h-8 w-8 text-billman-green" />,
      title: "Community Network",
      description: "Connect with players worldwide, join clubs, and organize matches through our social platform."
    },
    {
      icon: <Search className="h-8 w-8 text-billman-green" />,
      title: "Player Matching",
      description: "Find opponents at your skill level for practice games, challenges, or friendly matches."
    },
    {
      icon: <Award className="h-8 w-8 text-billman-green" />,
      title: "Ranking System",
      description: "Global and local leaderboards with ELO-based ranking system reflecting your true skill level."
    }
  ];

  const trainingFeatures = [
    {
      icon: <Video className="h-8 w-8 text-billman-green" />,
      title: "Interactive Lessons",
      description: "Learn from top professionals with interactive video lessons and practice drills with real-time feedback."
    },
    {
      icon: <Book className="h-8 w-8 text-billman-green" />,
      title: "Personalized Training",
      description: "AI-generated practice routines based on your performance data and improvement goals."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-billman-black">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-billman-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-3 py-1 rounded-full bg-billman-green/10 text-billman-green text-sm font-medium mb-4">
                Features
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
                Revolutionary <span className="bg-gradient-to-r from-billman-green to-billman-lightGreen bg-clip-text text-transparent">Technology</span> for Billiards
              </h1>
              <p className="text-billman-lightGray text-lg mb-8 animate-fade-in" style={{animationDelay: '0.1s'}}>
                Explore the comprehensive suite of features that make BILLMAN the most advanced billiards platform available.
              </p>
            </div>
          </div>
        </section>
        
        {/* AI & Computer Vision Section */}
        <section className="py-16 bg-billman-black relative">
          <div className="absolute inset-0 bg-gradient-radial from-billman-green/5 to-transparent"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in">
                AI & Computer Vision
              </h2>
              <p className="text-billman-lightGray animate-fade-in" style={{animationDelay: '0.1s'}}>
                BILLMAN's core technology uses advanced AI and computer vision to track every aspect of the game with exceptional accuracy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="glassmorphism rounded-xl p-8 transition-all duration-300 hover:shadow-neon animate-fade-in"
                  style={{animationDelay: `${0.1 * index}s`}}
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
        
        {/* Social & Tournament Platform */}
        <section className="py-16 bg-billman-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in">
                Social & Tournament Platform
              </h2>
              <p className="text-billman-lightGray animate-fade-in" style={{animationDelay: '0.1s'}}>
                Connect with the global billiards community and participate in events from anywhere in the world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {socialFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="glassmorphism rounded-xl p-8 transition-all duration-300 hover:shadow-neon animate-fade-in"
                  style={{animationDelay: `${0.1 * index}s`}}
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
        
        {/* Training & Development */}
        <section className="py-16 bg-billman-black relative">
          <div className="absolute inset-0 bg-gradient-radial from-billman-green/5 to-transparent"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in">
                Training & Development
              </h2>
              <p className="text-billman-lightGray animate-fade-in" style={{animationDelay: '0.1s'}}>
                Improve your skills with personalized training programs and professional instruction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {trainingFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="glassmorphism rounded-xl p-8 transition-all duration-300 hover:shadow-neon animate-fade-in"
                  style={{animationDelay: `${0.1 * index}s`}}
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
        
        {/* CTA Section */}
        <section className="py-16 bg-billman-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in">
                Ready to Experience BILLMAN?
              </h2>
              <p className="text-billman-lightGray mb-8 animate-fade-in" style={{animationDelay: '0.1s'}}>
                Join thousands of players who are already revolutionizing their billiards experience.
              </p>
              <Button className="bg-billman-green hover:bg-billman-lightGreen text-white px-8 py-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
                Get Started Free
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FeaturesPage;
