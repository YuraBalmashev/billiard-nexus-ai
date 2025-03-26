
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/contexts/AuthContext';
import PlayerDashboardSidebar from '@/components/dashboard/player/Sidebar';

const PlayerDashboardLayout = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  return (
    <div className="bg-billman-black min-h-screen">
      <div className="container mx-auto px-4 flex">
        <PlayerDashboardSidebar />
        
        <main className="flex-1 p-6">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              {t('dashboard.player.welcome', { username: user?.username })}
            </h1>
            <p className="text-billman-lightGray">
              {t('dashboard.player.subtitle')}
            </p>
          </header>
          
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PlayerDashboardLayout;
