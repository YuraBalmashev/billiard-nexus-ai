
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';

const PlayerDashboardSettings = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  return (
    <div className="space-y-4 md:space-y-6">
      <section>
        <h2 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">{t('dashboard.settings.title')}</h2>
        <Card className="bg-billman-dark border-billman-dark">
          <CardHeader className="px-4 md:px-6 py-3 md:py-4">
            <CardTitle className="text-base md:text-lg text-white">{t('dashboard.settings.profile')}</CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6 py-3 md:py-4 space-y-4 md:space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
              <Avatar className="h-16 w-16 md:h-20 md:w-20">
                <AvatarImage src={user?.avatar} alt={user?.username} />
                <AvatarFallback className="bg-billman-green/20 text-billman-green text-xl">
                  {user?.username.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              
              <div className="text-center sm:text-left">
                <h3 className="text-base md:text-lg font-medium text-white">{user?.username}</h3>
                <p className="text-sm text-billman-lightGray">{user?.email}</p>
                <p className="text-sm text-billman-lightGray mt-1">
                  {t('dashboard.settings.role')}: {user?.role}
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-white mb-2">{t('profile.language')}</h4>
              <LanguageSwitcher />
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default PlayerDashboardSettings;
