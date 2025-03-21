
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
import { toast } from 'sonner';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend
    toast.success("Your message has been sent! We'll be in touch soon.");
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
                Contact Us
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
                Get in <span className="bg-gradient-to-r from-billman-green to-billman-lightGreen bg-clip-text text-transparent">Touch</span>
              </h1>
              <p className="text-billman-lightGray text-lg mb-8 animate-fade-in" style={{animationDelay: '0.1s'}}>
                Have questions about BILLMAN? We're here to help. Reach out to our team for support, sales inquiries, or partnership opportunities.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-12 bg-billman-black relative">
          <div className="absolute inset-0 bg-gradient-radial from-billman-green/5 to-transparent"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              <div className="glassmorphism rounded-xl p-8 text-center animate-fade-in" style={{animationDelay: '0.1s'}}>
                <div className="rounded-full bg-billman-green/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-billman-green" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Email Us</h3>
                <p className="text-billman-lightGray mb-3">For general inquiries:</p>
                <a href="mailto:info@billman.ai" className="text-billman-green hover:underline">info@billman.ai</a>
                
                <p className="text-billman-lightGray mt-4 mb-3">For support:</p>
                <a href="mailto:support@billman.ai" className="text-billman-green hover:underline">support@billman.ai</a>
              </div>
              
              <div className="glassmorphism rounded-xl p-8 text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="rounded-full bg-billman-green/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-billman-green" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Call Us</h3>
                <p className="text-billman-lightGray mb-3">Main Office:</p>
                <a href="tel:+15551234567" className="text-billman-green hover:underline">+1 (555) 123-4567</a>
                
                <p className="text-billman-lightGray mt-4 mb-3">Support Hotline:</p>
                <a href="tel:+15557654321" className="text-billman-green hover:underline">+1 (555) 765-4321</a>
              </div>
              
              <div className="glassmorphism rounded-xl p-8 text-center animate-fade-in" style={{animationDelay: '0.3s'}}>
                <div className="rounded-full bg-billman-green/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-billman-green" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Visit Us</h3>
                <p className="text-billman-lightGray mb-3">Headquarters:</p>
                <address className="text-billman-lightGray not-italic">
                  123 Innovation Way<br />
                  Suite 456<br />
                  San Francisco, CA 94103<br />
                  United States
                </address>
              </div>
            </div>
            
            <div className="max-w-2xl mx-auto text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Connect With Us</h2>
              <p className="text-billman-lightGray mb-6">
                Follow us on social media for the latest updates, features, and event announcements.
              </p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-billman-lightGray hover:text-billman-green transition-colors" aria-label="Facebook">
                  <FacebookIcon size={28} />
                </a>
                <a href="#" className="text-billman-lightGray hover:text-billman-green transition-colors" aria-label="Twitter">
                  <TwitterIcon size={28} />
                </a>
                <a href="#" className="text-billman-lightGray hover:text-billman-green transition-colors" aria-label="Instagram">
                  <InstagramIcon size={28} />
                </a>
                <a href="#" className="text-billman-lightGray hover:text-billman-green transition-colors" aria-label="LinkedIn">
                  <LinkedinIcon size={28} />
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form */}
        <section className="py-12 bg-billman-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="glassmorphism rounded-xl p-8 md:p-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-billman-lightGray mb-2">Name</label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-billman-lightGray mb-2">Email</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-billman-lightGray mb-2">Subject</label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Subject of your message"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-billman-lightGray mb-2">Message</label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      required
                      rows={6}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                    />
                  </div>
                  
                  <div className="text-center">
                    <Button type="submit" className="bg-billman-green hover:bg-billman-lightGreen text-white px-8 py-6">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-12 bg-billman-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="glassmorphism rounded-xl p-6 animate-fade-in" style={{animationDelay: '0.1s'}}>
                  <h3 className="text-lg font-medium text-white mb-2">What hardware do I need to use BILLMAN?</h3>
                  <p className="text-billman-lightGray">
                    For basic features, you only need a smartphone. For full AI tracking capabilities, you'll need the BILLMAN camera system, which can be purchased separately or is available at partner clubs.
                  </p>
                </div>
                
                <div className="glassmorphism rounded-xl p-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <h3 className="text-lg font-medium text-white mb-2">How accurate is the scoring system?</h3>
                  <p className="text-billman-lightGray">
                    Our AI tracking system has been extensively tested and maintains a 98% accuracy rate across all standard billiard games and conditions.
                  </p>
                </div>
                
                <div className="glassmorphism rounded-xl p-6 animate-fade-in" style={{animationDelay: '0.3s'}}>
                  <h3 className="text-lg font-medium text-white mb-2">Can I use BILLMAN for different types of billiards games?</h3>
                  <p className="text-billman-lightGray">
                    Yes, BILLMAN supports all major billiards variations including 8-ball, 9-ball, straight pool, snooker, and carom billiards.
                  </p>
                </div>
                
                <div className="glassmorphism rounded-xl p-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
                  <h3 className="text-lg font-medium text-white mb-2">How do I find tournaments to participate in?</h3>
                  <p className="text-billman-lightGray">
                    Once you've registered, you can browse upcoming tournaments in the "Events" section of the app. You can filter by location, game type, and skill level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
