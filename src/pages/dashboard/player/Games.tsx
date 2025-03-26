
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PlayerDashboardGames = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4 md:space-y-6">
      <section>
        <h2 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">{t('dashboard.games.title')}</h2>
        <Card className="bg-billman-dark border-billman-dark">
          <CardHeader className="px-4 md:px-6 py-3 md:py-4">
            <CardTitle className="text-base md:text-lg text-white">{t('dashboard.games.history')}</CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6 py-3 md:py-4">
            <p className="text-sm md:text-base text-billman-lightGray">{t('dashboard.games.noGamesYet')}</p>
            <div className="mt-4 p-4 md:p-8 border border-dashed border-billman-lightGray/30 rounded-md flex items-center justify-center">
              <p className="text-xs md:text-sm text-billman-lightGray text-center">
                {t('dashboard.games.emptyState')}
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default PlayerDashboardGames;
