
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Pricing from '@/components/home/Pricing';
import TrustSignals from '@/components/home/TrustSignals';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col min-h-screen bg-billman-black">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* How It Works Section */}
        <section className="py-24 bg-billman-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-billman-green/10 text-billman-green text-sm font-medium mb-4">
                {t('homepage.howItWorks.title')}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
                <span className="bg-gradient-to-r from-billman-green to-billman-lightGreen bg-clip-text text-transparent">{t('homepage.howItWorks.subtitle')}</span>
              </h2>
              <p className="text-billman-lightGray text-lg animate-fade-in" style={{animationDelay: '0.1s'}}>
                {t('homepage.howItWorks.description')}
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
                      <p className="text-billman-lightGray">{t('homepage.howItWorks.watchVideo')}</p>
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
                      <h3 className="text-xl font-medium text-white mb-2">{t('homepage.howItWorks.steps.setup.title')}</h3>
                      <p className="text-billman-lightGray">{t('homepage.howItWorks.steps.setup.description')}</p>
                    </div>
                  </div>
                </div>
                
                <div className="glassmorphism rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="bg-billman-green/10 w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-billman-green font-medium">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">{t('homepage.howItWorks.steps.connect.title')}</h3>
                      <p className="text-billman-lightGray">{t('homepage.howItWorks.steps.connect.description')}</p>
                    </div>
                  </div>
                </div>
                
                <div className="glassmorphism rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="bg-billman-green/10 w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-billman-green font-medium">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">{t('homepage.howItWorks.steps.play.title')}</h3>
                      <p className="text-billman-lightGray">{t('homepage.howItWorks.steps.play.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Features />
        
        {/* Testimonials would go here in a real implementation */}
        
        <Pricing />
        
        <TrustSignals />
        
        {/* CTA Section */}
        <section className="py-24 bg-billman-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-billman-green/5 to-transparent"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
                <span className="bg-gradient-to-r from-billman-green to-billman-lightGreen bg-clip-text text-transparent">{t('homepage.cta.title')}</span>
              </h2>
              <p className="text-billman-lightGray text-lg mb-8 animate-fade-in" style={{animationDelay: '0.1s'}}>
                {t('homepage.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <Button className="bg-billman-green hover:bg-billman-lightGreen text-white px-8 py-6 rounded-md transition-all duration-300 shadow-glass hover:shadow-neon group w-full sm:w-auto">
                  <span>{t('homepage.cta.primary')}</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" className="border-billman-lightGray/30 text-white hover:bg-white/5 px-8 py-6 rounded-md w-full sm:w-auto">
                  {t('homepage.cta.secondary')}
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

export default Index;
