
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { LogOut, User } from 'lucide-react';

const Profile = () => {
  const { user, logout } = useAuth();
  const { t } = useLanguage();

  if (!user) return null;

  return (
    <div className="flex flex-col min-h-screen bg-billman-black text-billman-white">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">{t('myProfile')}</h1>
          
          <div className="bg-billman-dark/50 rounded-lg p-6 mb-8 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <Avatar className="h-24 w-24 border-2 border-billman-green">
                <AvatarImage src={user.avatar || '/placeholder.svg'} alt={user.username} />
                <AvatarFallback className="bg-billman-green/20 text-billman-green text-xl">
                  {user.username.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold">{user.username}</h2>
                <p className="text-billman-white/70">{user.email}</p>
              </div>
            </div>
            
            <div className="border-t border-billman-green/20 pt-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-billman-white/70">{t('language')}:</span>
                    <LanguageSwitcher />
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto border-billman-green/30 text-billman-white hover:bg-billman-green/10 hover:text-billman-green"
                  onClick={logout}
                >
                  <LogOut size={16} className="mr-2" />
                  {t('logout')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
