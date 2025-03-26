
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  delay: number;
}

const Pricing = () => {
  const { t } = useTranslation();

  const pricingTiers: PricingTier[] = [
    {
      name: t('homepage.pricing.tiers.free.name'),
      price: t('homepage.pricing.tiers.free.price'),
      description: t('homepage.pricing.tiers.free.description'),
      features: t('homepage.pricing.tiers.free.features', { returnObjects: true }) as string[],
      cta: t('homepage.pricing.tiers.free.cta'),
      delay: 0
    },
    {
      name: t('homepage.pricing.tiers.lite.name'),
      price: t('homepage.pricing.tiers.lite.price'),
      period: t('homepage.pricing.tiers.lite.period'),
      description: t('homepage.pricing.tiers.lite.description'),
      features: t('homepage.pricing.tiers.lite.features', { returnObjects: true }) as string[],
      cta: t('homepage.pricing.tiers.lite.cta'),
      popular: true,
      delay: 0.1
    },
    {
      name: t('homepage.pricing.tiers.pro.name'),
      price: t('homepage.pricing.tiers.pro.price'),
      period: t('homepage.pricing.tiers.pro.period'),
      description: t('homepage.pricing.tiers.pro.description'),
      features: t('homepage.pricing.tiers.pro.features', { returnObjects: true }) as string[],
      cta: t('homepage.pricing.tiers.pro.cta'),
      delay: 0.2
    }
  ];

  return (
    <section className="py-24 bg-billman-black relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-radial from-billman-green/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-billman-green/10 text-billman-green text-sm font-medium mb-4">
            {t('homepage.pricing.title')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-billman-green to-billman-lightGreen bg-clip-text text-transparent">{t('homepage.pricing.subtitle')}</span>
          </h2>
          <p className="text-billman-lightGray text-lg animate-fade-in" style={{animationDelay: '0.1s'}}>
            {t('homepage.pricing.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative rounded-xl overflow-hidden animate-fade-in ${
                tier.popular ? 'border-2 border-billman-green shadow-neon' : 'border border-white/10'
              }`}
              style={{animationDelay: `${tier.delay}s`}}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-billman-green text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  {t('homepage.pricing.tiers.lite.popular')}
                </div>
              )}
              
              <div className="p-8 bg-billman-dark/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  {tier.period && <span className="text-billman-lightGray ml-2 mb-1">{tier.period}</span>}
                </div>
                <p className="text-billman-lightGray mb-6">{tier.description}</p>
                
                <Button 
                  className={`w-full ${
                    tier.popular 
                      ? 'bg-billman-green hover:bg-billman-lightGreen text-white' 
                      : 'bg-white/5 hover:bg-white/10 text-white'
                  }`}
                >
                  {tier.cta}
                </Button>
              </div>
              
              <div className="p-8 bg-billman-dark">
                <p className="text-sm text-billman-lightGray mb-4 font-medium">{t('homepage.pricing.includes')}</p>
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="text-billman-green h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-billman-lightGray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-billman-lightGray mb-4">
            {t('homepage.pricing.enterprise')}
          </p>
          <Button variant="outline" className="border-billman-green text-billman-green hover:bg-billman-green/10">
            {t('homepage.pricing.contactEnterprise')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
