
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PlayerDashboardGames = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">{t('dashboard.games.title')}</h2>
        <Card className="bg-billman-dark border-billman-dark">
          <CardHeader>
            <CardTitle className="text-white">{t('dashboard.games.history')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-billman-lightGray">{t('dashboard.games.noGamesYet')}</p>
            <div className="mt-4 p-8 border border-dashed border-billman-lightGray/30 rounded-md flex items-center justify-center">
              <p className="text-billman-lightGray text-center">
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
