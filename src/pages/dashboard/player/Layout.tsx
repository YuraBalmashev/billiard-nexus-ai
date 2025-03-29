
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/contexts/AuthContext';
import PlayerDashboardSidebar from '@/components/dashboard/player/Sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const PlayerDashboardLayout = () => {
  const { t } = useTranslation();
  const { user, isAuthenticated, isLoading } = useAuth();
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication after loading completes
    if (!isLoading && !isAuthenticated) {
      toast.error(t('auth.authRequired'));
      navigate('/');
    }
  }, [isAuthenticated, isLoading, navigate, t]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="bg-billman-black min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-billman-green"></div>
      </div>
    );
  }

  // Only render the dashboard if authenticated
  if (!isAuthenticated) return null;

  return (
    <SidebarProvider>
      <div className="bg-billman-black min-h-screen">
        <div className="container mx-auto px-4 flex w-full flex-col md:flex-row">
          {isMobile && (
            <div className="py-4 flex items-center">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-billman-lightGray hover:text-white mr-4"
                onClick={() => document.querySelector('[data-sidebar="trigger"]')?.click()}
              >
                <Menu size={24} />
                <span className="sr-only">Toggle menu</span>
              </Button>
              <h1 className="text-xl font-bold text-white">
                {t('dashboard.player.welcome', { username: user?.username })}
              </h1>
            </div>
          )}
          
          <PlayerDashboardSidebar />
          
          <main className="flex-1 p-4 md:p-6">
            {!isMobile && (
              <header className="mb-6 md:mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {t('dashboard.player.welcome', { username: user?.username })}
                </h1>
                <p className="text-sm md:text-base text-billman-lightGray">
                  {t('dashboard.player.subtitle')}
                </p>
              </header>
            )}
            
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default PlayerDashboardLayout;
