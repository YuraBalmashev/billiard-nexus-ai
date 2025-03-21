
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BilliardIcon } from '@/components/ui/billiard-icon';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const layers = heroRef.current.querySelectorAll('.layer');
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      layers.forEach((layer, i) => {
        const speed = (i + 1) * 0.01;
        const x = (centerX - mouseX) * speed;
        const y = (centerY - mouseY) * speed;
        
        (layer as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Animated billiard balls for visual interest
  const balls = [
    { type: 'cue' as const, position: 'top-1/4 left-10', delay: 0 },
    { type: 'solid' as const, color: 'red' as const, number: 3, position: 'bottom-1/3 right-20', delay: 2 },
    { type: 'stripe' as const, color: 'blue' as const, number: 10, position: 'top-1/3 right-1/4', delay: 1 },
    { type: 'solid' as const, color: 'green' as const, number: 6, position: 'bottom-1/4 left-1/3', delay: 3 },
    { type: 'eight' as const, position: 'top-2/3 right-10', delay: 2.5 }
  ];

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-billman-black">
        <div className="absolute inset-0 bg-gradient-radial from-billman-dark/0 to-billman-black"></div>
        
        {/* Animated gradient circles */}
        <div className="layer absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-billman-green/10 filter blur-3xl animate-pulse-slow"></div>
        <div className="layer absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-billman-green/5 filter blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        
        {/* Billiard table felt texture overlay */}
        <div className="absolute inset-0 bg-billiard-felt opacity-5 bg-pattern-md pointer-events-none"></div>
        
        {/* Corner pockets */}
        <div className="absolute top-5 left-5 w-10 h-10 rounded-full border-2 border-billman-green/20 shadow-pocket opacity-20"></div>
        <div className="absolute top-5 right-5 w-10 h-10 rounded-full border-2 border-billman-green/20 shadow-pocket opacity-20"></div>
        <div className="absolute bottom-5 left-5 w-10 h-10 rounded-full border-2 border-billman-green/20 shadow-pocket opacity-20"></div>
        <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full border-2 border-billman-green/20 shadow-pocket opacity-20"></div>
        
        {/* Animated billiard balls */}
        {balls.map((ball, index) => (
          <div 
            key={index}
            className={`absolute ${ball.position} opacity-25 layer animate-billiard-roll`}
            style={{ animationDelay: `${ball.delay}s` }}
          >
            <BilliardIcon 
              type={ball.type} 
              color={ball.color as any} 
              number={ball.number} 
              size="lg" 
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <BilliardIcon type="cue" size="sm" />
            <span className="text-sm font-medium text-billman-green">Revolutionizing Billiards with AI</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight md:leading-tight lg:leading-tight animate-fade-in">
            The Future of <span className="bg-gradient-to-r from-billman-green to-billman-lightGreen bg-clip-text text-transparent">Billiards</span> Is Here
          </h1>
          
          <p className="text-lg md:text-xl text-billman-lightGray mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            BILLMAN brings AI-powered analytics, remote tournaments, and interactive coaching to unite the entire billiards community in one ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button className="billiard-button group w-full sm:w-auto">
              <span>Get Started Free</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              className="border-billman-lightGray/30 text-white hover:bg-white/5 px-8 py-6 rounded-md w-full sm:w-auto"
            >
              Watch Demo
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="glassmorphism rounded-xl p-6 text-center relative overflow-hidden group">
            <div className="text-3xl font-bold text-billman-green mb-2">12,000+</div>
            <p className="text-billman-lightGray">Active Players</p>
            <div className="absolute -bottom-4 -right-4 opacity-20 transform transition-transform duration-300 scale-75 group-hover:scale-100 group-hover:opacity-40">
              <BilliardIcon type="solid" color="red" size="lg" />
            </div>
          </div>
          <div className="glassmorphism rounded-xl p-6 text-center relative overflow-hidden group">
            <div className="text-3xl font-bold text-billman-green mb-2">250+</div>
            <p className="text-billman-lightGray">Partner Clubs</p>
            <div className="absolute -bottom-4 -right-4 opacity-20 transform transition-transform duration-300 scale-75 group-hover:scale-100 group-hover:opacity-40">
              <BilliardIcon type="stripe" color="blue" size="lg" />
            </div>
          </div>
          <div className="glassmorphism rounded-xl p-6 text-center relative overflow-hidden group">
            <div className="text-3xl font-bold text-billman-green mb-2">98%</div>
            <p className="text-billman-lightGray">Accuracy Rate</p>
            <div className="absolute -bottom-4 -right-4 opacity-20 transform transition-transform duration-300 scale-75 group-hover:scale-100 group-hover:opacity-40">
              <BilliardIcon type="eight" size="lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
