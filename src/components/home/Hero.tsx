
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
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

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-billman-black">
        <div className="absolute inset-0 bg-gradient-radial from-billman-dark/0 to-billman-black"></div>
        
        {/* Animated gradient circles */}
        <div className="layer absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-billman-green/10 filter blur-3xl animate-pulse-slow"></div>
        <div className="layer absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-billman-green/5 filter blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-sm font-medium text-billman-green">{t('homepage.hero.tagline')}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight md:leading-tight lg:leading-tight animate-fade-in">
            {t('homepage.hero.title')}
          </h1>
          
          <p className="text-lg md:text-xl text-billman-lightGray mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            {t('homepage.hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button className="bg-billman-green hover:bg-billman-lightGreen text-white px-8 py-6 rounded-md transition-all duration-300 shadow-glass hover:shadow-neon group w-full sm:w-auto">
              <span>{t('homepage.hero.getStarted')}</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="border-billman-lightGray/30 text-white hover:bg-white/5 px-8 py-6 rounded-md w-full sm:w-auto">
              {t('homepage.hero.watchDemo')}
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="glassmorphism rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-billman-green mb-2">12,000+</div>
            <p className="text-billman-lightGray">{t('homepage.stats.activePlayers')}</p>
          </div>
          <div className="glassmorphism rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-billman-green mb-2">250+</div>
            <p className="text-billman-lightGray">{t('homepage.stats.partnerClubs')}</p>
          </div>
          <div className="glassmorphism rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-billman-green mb-2">98%</div>
            <p className="text-billman-lightGray">{t('homepage.stats.accuracyRate')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
