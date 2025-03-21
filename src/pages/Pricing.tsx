
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Check, HelpCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface PricingFeature {
  name: string;
  guest: boolean | string;
  lite: boolean | string;
  pro: boolean | string;
  tooltip?: string;
}

const PricingPage = () => {
  const features: PricingFeature[] = [
    {
      name: "Game Tracking",
      guest: "Basic",
      lite: "Advanced",
      pro: "Premium",
      tooltip: "Track scores, shots, and game events in real-time"
    },
    {
      name: "Performance Analytics",
      guest: "Limited",
      lite: true,
      pro: "Advanced",
      tooltip: "Detailed statistics and insights on your gameplay"
    },
    {
      name: "Tournament Participation",
      guest: "Public only",
      lite: true,
      pro: "Priority access",
      tooltip: "Join online tournaments and competitions"
    },
    {
      name: "Training Sessions",
      guest: "1/month",
      lite: "5/month",
      pro: "Unlimited",
      tooltip: "Interactive training modules with professional instruction"
    },
    {
      name: "Community Access",
      guest: true,
      lite: true,
      pro: true,
      tooltip: "Connect with the global billiards community"
    },
    {
      name: "Player Networking",
      guest: false,
      lite: true,
      pro: "Enhanced",
      tooltip: "Find and connect with players of similar skill levels"
    },
    {
      name: "Shot Recommendation",
      guest: false,
      lite: true,
      pro: "Advanced AI",
      tooltip: "AI-powered suggestions for optimal shots"
    },
    {
      name: "Coaching Tools",
      guest: false,
      lite: false,
      pro: true,
      tooltip: "Tools for coaches to analyze and train players"
    },
    {
      name: "Offline Mode",
      guest: false,
      lite: false,
      pro: true,
      tooltip: "Use BILLMAN features without an internet connection"
    },
    {
      name: "Cloud Storage",
      guest: "1GB",
      lite: "10GB",
      pro: "100GB",
      tooltip: "Store your game recordings and analysis data"
    },
    {
      name: "Priority Support",
      guest: false,
      lite: false,
      pro: true,
      tooltip: "Get faster responses from our support team"
    }
  ];

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="mx-auto h-5 w-5 text-billman-green" />
      ) : (
        <span className="mx-auto block h-5 w-5 text-billman-lightGray">—</span>
      );
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <div className="flex flex-col min-h-screen bg-billman-black">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-billman-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-3 py-1 rounded-full bg-billman-green/10 text-billman-green text-sm font-medium mb-4">
                Pricing
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
                Simple, Transparent <span className="bg-gradient-to-r from-billman-green to-billman-lightGreen bg-clip-text text-transparent">Pricing</span>
              </h1>
              <p className="text-billman-lightGray text-lg mb-8 animate-fade-in" style={{animationDelay: '0.1s'}}>
                Choose the plan that fits your needs. All plans include core features with additional benefits as you upgrade.
              </p>
            </div>
          </div>
        </section>
        
        {/* Pricing Cards Section */}
        <section className="py-12 md:py-16 bg-billman-black relative">
          <div className="absolute inset-0 bg-gradient-radial from-billman-green/5 to-transparent"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Guest Plan */}
              <div className="glassmorphism rounded-xl animate-fade-in" style={{animationDelay: '0.1s'}}>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-1">Guest</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-4xl font-bold text-white">Free</span>
                  </div>
                  <p className="text-billman-lightGray mb-6">Perfect for casual players looking to experience BILLMAN.</p>
                  <Button className="w-full bg-white/5 hover:bg-white/10 text-white">
                    Sign Up Free
                  </Button>
                </div>
              </div>
              
              {/* Lite Plan */}
              <div className="border-2 border-billman-green rounded-xl shadow-neon animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="absolute top-0 right-0 bg-billman-green text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-1">Lite</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-4xl font-bold text-white">$9.99</span>
                    <span className="text-billman-lightGray ml-2 mb-1">/month</span>
                  </div>
                  <p className="text-billman-lightGray mb-6">For enthusiasts who want to improve their game consistently.</p>
                  <Button className="w-full bg-billman-green hover:bg-billman-lightGreen text-white">
                    Start with Lite
                  </Button>
                </div>
              </div>
              
              {/* Pro Plan */}
              <div className="glassmorphism rounded-xl animate-fade-in" style={{animationDelay: '0.3s'}}>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-1">Pro</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-4xl font-bold text-white">$19.99</span>
                    <span className="text-billman-lightGray ml-2 mb-1">/month</span>
                  </div>
                  <p className="text-billman-lightGray mb-6">For serious players and professionals seeking complete features.</p>
                  <Button className="w-full bg-white/5 hover:bg-white/10 text-white">
                    Upgrade to Pro
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Comparison */}
        <section className="py-12 md:py-16 bg-billman-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <TooltipProvider>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-billman-gray/30">
                        <th className="text-left py-4 px-4 text-billman-lightGray">Features</th>
                        <th className="text-center py-4 px-4 text-billman-lightGray">Guest</th>
                        <th className="text-center py-4 px-4 text-billman-lightGray">Lite</th>
                        <th className="text-center py-4 px-4 text-billman-lightGray">Pro</th>
                      </tr>
                    </thead>
                    <tbody>
                      {features.map((feature, index) => (
                        <tr key={index} className="border-b border-billman-gray/10">
                          <td className="py-4 px-4 text-white">
                            <div className="flex items-center">
                              {feature.name}
                              {feature.tooltip && (
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <span>
                                      <HelpCircle className="h-4 w-4 text-billman-lightGray ml-2 cursor-help" />
                                    </span>
                                  </TooltipTrigger>
                                  <TooltipContent className="bg-billman-dark text-white border-billman-green">
                                    <p>{feature.tooltip}</p>
                                  </TooltipContent>
                                </Tooltip>
                              )}
                            </div>
                          </td>
                          <td className="py-4 px-4 text-center text-billman-lightGray">
                            {renderFeatureValue(feature.guest)}
                          </td>
                          <td className="py-4 px-4 text-center text-billman-lightGray">
                            {renderFeatureValue(feature.lite)}
                          </td>
                          <td className="py-4 px-4 text-center text-billman-lightGray">
                            {renderFeatureValue(feature.pro)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TooltipProvider>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-billman-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="glassmorphism rounded-xl p-6">
                  <h3 className="text-lg font-medium text-white mb-2">Can I switch plans at any time?</h3>
                  <p className="text-billman-lightGray">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</p>
                </div>
                
                <div className="glassmorphism rounded-xl p-6">
                  <h3 className="text-lg font-medium text-white mb-2">Is there a contract or commitment?</h3>
                  <p className="text-billman-lightGray">No long-term contracts. All paid plans are billed monthly and you can cancel anytime.</p>
                </div>
                
                <div className="glassmorphism rounded-xl p-6">
                  <h3 className="text-lg font-medium text-white mb-2">Do you offer refunds?</h3>
                  <p className="text-billman-lightGray">We offer a 14-day money-back guarantee for all new paid subscriptions.</p>
                </div>
                
                <div className="glassmorphism rounded-xl p-6">
                  <h3 className="text-lg font-medium text-white mb-2">What hardware do I need to use BILLMAN?</h3>
                  <p className="text-billman-lightGray">For basic features, you only need a smartphone. For full AI tracking capabilities, you'll need the BILLMAN camera system, which can be purchased separately or rented from partner clubs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-billman-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Solution?</h2>
              <p className="text-billman-lightGray mb-8">
                We offer customized enterprise solutions for clubs, tournaments, and organizations.
              </p>
              <Button variant="outline" className="border-billman-green text-billman-green hover:bg-billman-green/10">
                Contact for Enterprise Pricing
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PricingPage;
