
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
    <div className="space-y-6">
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">{t('dashboard.settings.title')}</h2>
        <Card className="bg-billman-dark border-billman-dark">
          <CardHeader>
            <CardTitle className="text-white">{t('dashboard.settings.profile')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src={user?.avatar} alt={user?.username} />
                <AvatarFallback className="bg-billman-green/20 text-billman-green text-xl">
                  {user?.username.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              
              <div>
                <h3 className="text-lg font-medium text-white">{user?.username}</h3>
                <p className="text-billman-lightGray">{user?.email}</p>
                <p className="text-billman-lightGray mt-1">
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
