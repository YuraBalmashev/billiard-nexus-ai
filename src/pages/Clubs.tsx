
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Calendar, Coins, TrendingUp, Clock, ShieldCheck } from 'lucide-react';

const ClubsPage = () => {
  const benefits = [
    {
      icon: <Users className="h-10 w-10 text-billman-green" />,
      title: "Attract New Players",
      description: "Engage younger demographics with modern technology and gamified billiards experiences."
    },
    {
      icon: <Calendar className="h-10 w-10 text-billman-green" />,
      title: "Automated Bookings",
      description: "Streamline table reservations and event scheduling with our integrated booking system."
    },
    {
      icon: <Coins className="h-10 w-10 text-billman-green" />,
      title: "Increased Revenue",
      description: "Boost table utilization, event participation, and retention with enhanced player experiences."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-billman-green" />,
      title: "Tournament Hosting",
      description: "Easily organize and manage professional-level tournaments with automated scoring."
    },
    {
      icon: <Clock className="h-10 w-10 text-billman-green" />,
      title: "Time Efficiency",
      description: "Save staff time with automated scoring, tournament management, and bookings."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-billman-green" />,
      title: "Premium Status",
      description: "Join our network of partner clubs to gain visibility and credibility in the billiards community."
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
                For Clubs
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
                Transform Your <span className="bg-gradient-to-r from-billman-green to-billman-lightGreen bg-clip-text text-transparent">Billiard Club</span> Experience
              </h1>
              <p className="text-billman-lightGray text-lg mb-8 animate-fade-in" style={{animationDelay: '0.1s'}}>
                Attract new players, increase revenue, and streamline operations with BILLMAN's revolutionary club solutions.
              </p>
              <Button className="bg-billman-green hover:bg-billman-lightGreen text-white px-8 py-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
                Request Club Demo
              </Button>
            </div>
          </div>
        </section>
        
        {/* Club Benefits Section */}
        <section className="py-16 bg-billman-black relative">
          <div className="absolute inset-0 bg-gradient-radial from-billman-green/5 to-transparent"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 animate-fade-in">
                Benefits for Your Club
              </h2>
              <p className="text-billman-lightGray animate-fade-in" style={{animationDelay: '0.1s'}}>
                BILLMAN offers comprehensive solutions designed specifically for billiard clubs and venues.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="glassmorphism rounded-xl p-8 transition-all duration-300 hover:shadow-neon animate-fade-in"
                  style={{animationDelay: `${0.1 * index}s`}}
                >
                  <div className="rounded-full bg-billman-green/10 w-20 h-20 flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-billman-lightGray">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works for Clubs */}
        <section className="py-16 bg-billman-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 animate-fade-in">
                How BILLMAN Works for Clubs
              </h2>
              <p className="text-billman-lightGray animate-fade-in" style={{animationDelay: '0.1s'}}>
                Simple implementation with powerful results for your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="relative rounded-xl overflow-hidden aspect-video bg-billman-black border border-white/10">
                  {/* This would be a video or interactive image in the final implementation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 rounded-full bg-billman-green/20 flex items-center justify-center mx-auto mb-6">
                        <div className="w-16 h-16 rounded-full bg-billman-green/40 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-billman-green flex items-center justify-center">
                            <ArrowRight className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                      <p className="text-billman-lightGray">Watch club solution overview</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
                <div className="glassmorphism rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="bg-billman-green/10 w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-billman-green font-medium">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">System Installation</h3>
                      <p className="text-billman-lightGray">Our team handles the installation of BILLMAN cameras and systems on your tables.</p>
                    </div>
                  </div>
                </div>
                
                <div className="glassmorphism rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="bg-billman-green/10 w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-billman-green font-medium">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">Staff Training</h3>
                      <p className="text-billman-lightGray">Comprehensive training for your staff on using the BILLMAN club dashboard and system features.</p>
                    </div>
                  </div>
                </div>
                
                <div className="glassmorphism rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="bg-billman-green/10 w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-billman-green font-medium">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">Player Onboarding</h3>
                      <p className="text-billman-lightGray">Materials and support to help introduce your members to the new technology and features.</p>
                    </div>
                  </div>
                </div>
                
                <div className="glassmorphism rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="bg-billman-green/10 w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-billman-green font-medium">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">Ongoing Support</h3>
                      <p className="text-billman-lightGray">Dedicated account manager and technical support for your club's needs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Partner Clubs Showcase */}
        <section className="py-16 bg-billman-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 animate-fade-in">
                Join Our Partner Network
              </h2>
              <p className="text-billman-lightGray animate-fade-in" style={{animationDelay: '0.1s'}}>
                250+ clubs worldwide have already transformed their business with BILLMAN technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="glassmorphism rounded-xl p-6 text-center">
                  <div className="mb-4 h-24 flex items-center justify-center">
                    <div className="rounded-full bg-billman-green/10 w-16 h-16 flex items-center justify-center">
                      {/* This would be a partner club logo in the final implementation */}
                      <span className="text-billman-lightGray">Club Logo</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-1">Partner Club {item}</h3>
                  <p className="text-sm text-billman-lightGray">Location, Country</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-billman-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 animate-fade-in">
                What Club Owners Say
              </h2>
              <p className="text-billman-lightGray animate-fade-in" style={{animationDelay: '0.1s'}}>
                Hear from club owners who've transformed their business with BILLMAN.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="glassmorphism rounded-xl p-8">
                <p className="text-billman-lightGray mb-6 italic">
                  "Since implementing BILLMAN at our club, we've seen a 30% increase in young players and a significant boost in tournament participation. The system pays for itself."
                </p>
                <div className="flex items-center">
                  <div className="rounded-full bg-billman-green/10 w-12 h-12 flex items-center justify-center mr-4">
                    {/* This would be a testimonial avatar in the final implementation */}
                    <span className="text-white font-bold">JD</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">John Doe</h4>
                    <p className="text-sm text-billman-lightGray">Owner, Elite Billiards Club</p>
                  </div>
                </div>
              </div>
              
              <div className="glassmorphism rounded-xl p-8">
                <p className="text-billman-lightGray mb-6 italic">
                  "The automated scoring and tournament management have saved us countless staff hours. Our members love the technology and the enhanced experience it provides."
                </p>
                <div className="flex items-center">
                  <div className="rounded-full bg-billman-green/10 w-12 h-12 flex items-center justify-center mr-4">
                    {/* This would be a testimonial avatar in the final implementation */}
                    <span className="text-white font-bold">JS</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Jane Smith</h4>
                    <p className="text-sm text-billman-lightGray">Manager, Pro Cue Academy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-billman-black relative">
          <div className="absolute inset-0 bg-gradient-radial from-billman-green/5 to-transparent"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto glassmorphism rounded-xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Club?</h2>
              <p className="text-billman-lightGray mb-8 max-w-2xl mx-auto">
                Join the network of forward-thinking billiard clubs enhancing their business with BILLMAN technology. Our team will create a custom solution for your venue.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="bg-billman-green hover:bg-billman-lightGreen text-white px-8 py-6 w-full sm:w-auto">
                  Schedule a Consultation
                </Button>
                <Button variant="outline" className="border-billman-lightGray/30 text-white hover:bg-white/5 px-8 py-6 w-full sm:w-auto">
                  View Club Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ClubsPage;
