
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Former professional billiards player with 15+ years experience and a vision to revolutionize the sport with technology.",
      image: "alex" // This would link to an actual image in a real implementation
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "AI and computer vision expert with a PhD from MIT and a passion for applying cutting-edge technology to sports.",
      image: "sarah"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Product",
      bio: "Product development specialist with experience at leading sports technology companies and a competitive billiards background.",
      image: "michael"
    },
    {
      name: "Emily Taylor",
      role: "Director of Partnerships",
      bio: "Former billiards club owner with extensive connections in the industry and expertise in business development.",
      image: "emily"
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
                About Us
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
                Our <span className="bg-gradient-to-r from-billman-green to-billman-lightGreen bg-clip-text text-transparent">Mission</span> and Vision
              </h1>
              <p className="text-billman-lightGray text-lg mb-8 animate-fade-in" style={{animationDelay: '0.1s'}}>
                BILLMAN was founded with a simple goal: to bring innovation to the timeless sport of billiards and create a global community of players.
              </p>
            </div>
          </div>
        </section>
        
        {/* Story Section */}
        <section className="py-16 bg-billman-black relative">
          <div className="absolute inset-0 bg-gradient-radial from-billman-green/5 to-transparent"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-billman-lightGray">
                  <p>
                    BILLMAN began in 2020 when our founder, Alex Johnson, a former professional billiards player, saw the potential to transform the sport with modern technology. After years of competing at the highest levels, Alex recognized that billiards was falling behind other sports in technological adoption.
                  </p>
                  <p>
                    Partnering with AI expert Sarah Chen, they developed the first prototype of the BILLMAN system, using computer vision to accurately track balls and analyze gameplay in real-time. What started as a passion project quickly gained attention from players and clubs worldwide.
                  </p>
                  <p>
                    Today, BILLMAN has grown into a comprehensive ecosystem that serves players of all skill levels, from beginners to professionals, as well as clubs and tournaments around the globe. Our mission remains the same: to bring innovation to billiards and unite the global community of players.
                  </p>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
                <div className="relative rounded-xl overflow-hidden aspect-square bg-billman-dark border border-white/10">
                  {/* This would be an image in the final implementation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="mb-4">
                        <div className="text-4xl font-bold bg-gradient-to-r from-billman-green to-billman-lightGreen bg-clip-text text-transparent">
                          BILLMAN
                        </div>
                      </div>
                      <p className="text-billman-lightGray">Company Image</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-billman-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 animate-fade-in">
                Our Core Values
              </h2>
              <p className="text-billman-lightGray animate-fade-in" style={{animationDelay: '0.1s'}}>
                These principles guide everything we do at BILLMAN.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="glassmorphism rounded-xl p-8 transition-all duration-300 hover:shadow-neon animate-fade-in" style={{animationDelay: '0.2s'}}>
                <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
                <p className="text-billman-lightGray">
                  We constantly push the boundaries of what's possible in billiards technology, developing new solutions to enhance the sport.
                </p>
              </div>
              
              <div className="glassmorphism rounded-xl p-8 transition-all duration-300 hover:shadow-neon animate-fade-in" style={{animationDelay: '0.3s'}}>
                <h3 className="text-xl font-bold text-white mb-4">Community</h3>
                <p className="text-billman-lightGray">
                  We believe in building connections between players, clubs, and fans to create a vibrant global billiards community.
                </p>
              </div>
              
              <div className="glassmorphism rounded-xl p-8 transition-all duration-300 hover:shadow-neon animate-fade-in" style={{animationDelay: '0.4s'}}>
                <h3 className="text-xl font-bold text-white mb-4">Excellence</h3>
                <p className="text-billman-lightGray">
                  We are committed to delivering the highest quality experience in every aspect of our platform and service.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-billman-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 animate-fade-in">
                Meet Our Team
              </h2>
              <p className="text-billman-lightGray animate-fade-in" style={{animationDelay: '0.1s'}}>
                The passionate people behind BILLMAN.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="glassmorphism rounded-xl overflow-hidden animate-fade-in" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="bg-billman-dark aspect-square flex items-center justify-center">
                      {/* This would be a team member image in the final implementation */}
                      <div className="rounded-full bg-billman-green/10 w-24 h-24 flex items-center justify-center">
                        <span className="text-2xl font-bold text-billman-green">{member.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                    </div>
                    <div className="p-6 md:col-span-2">
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-billman-green text-sm mb-4">{member.role}</p>
                      <p className="text-billman-lightGray">{member.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Vision for the Future */}
        <section className="py-16 bg-billman-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 animate-fade-in">
                Our Vision for the Future
              </h2>
              <p className="text-billman-lightGray animate-fade-in" style={{animationDelay: '0.1s'}}>
                Where we're headed and what we're working towards.
              </p>
            </div>
            
            <div className="glassmorphism rounded-xl p-8 md:p-12 max-w-5xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="space-y-6 text-billman-lightGray">
                <p>
                  At BILLMAN, we envision a future where technology enhances every aspect of billiards while preserving the essence and tradition of the sport. We're working to create a world where:
                </p>
                <ul className="list-disc list-inside space-y-3 pl-4">
                  <li>Every billiard club is equipped with smart technology that elevates the player experience</li>
                  <li>Players of all levels have access to professional-quality analytics and training</li>
                  <li>The global billiards community is connected through a unified digital platform</li>
                  <li>Technology helps introduce the sport to new generations of players</li>
                  <li>Remote participation breaks down geographical barriers to competition</li>
                </ul>
                <p>
                  We're constantly innovating and expanding our technology to bring this vision to reality, with several exciting developments on our roadmap for the coming years.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Join Us CTA */}
        <section className="py-16 bg-billman-black relative">
          <div className="absolute inset-0 bg-gradient-radial from-billman-green/5 to-transparent"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 animate-fade-in">
                Join the BILLMAN Revolution
              </h2>
              <p className="text-billman-lightGray mb-8 animate-fade-in" style={{animationDelay: '0.1s'}}>
                Be part of the community that's shaping the future of billiards.
              </p>
              <Button className="bg-billman-green hover:bg-billman-lightGreen text-white px-8 py-6 rounded-md transition-all duration-300 shadow-glass hover:shadow-neon group animate-fade-in" style={{animationDelay: '0.2s'}}>
                <span>Get Started Free</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
