
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Trophy, Target, Users, Calendar, CheckCircle, XCircle } from 'lucide-react';

// Mock data for the player stats
const playerStats = {
  totalGames: 32,
  wins: 21,
  losses: 11,
  accuracy: 76.5
};

// Mock data for recent games
const recentGames = [
  { 
    id: 1, 
    date: '2023-12-18', 
    opponent: 'Michael Brown', 
    result: 'win', 
    score: '8-5' 
  },
  { 
    id: 2, 
    date: '2023-12-15', 
    opponent: 'Sarah Johnson', 
    result: 'loss', 
    score: '7-9' 
  },
  { 
    id: 3, 
    date: '2023-12-10', 
    opponent: 'James Wilson', 
    result: 'win', 
    score: '9-7' 
  },
  { 
    id: 4, 
    date: '2023-12-05', 
    opponent: 'Emma Davis', 
    result: 'win', 
    score: '9-3' 
  }
];

const PlayerDashboardOverview = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">{t('dashboard.overview.stats')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-billman-dark border-billman-dark">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-billman-lightGray">
                {t('dashboard.overview.totalGames')}
              </CardTitle>
              <Calendar className="h-4 w-4 text-billman-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{playerStats.totalGames}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-billman-dark border-billman-dark">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-billman-lightGray">
                {t('dashboard.overview.wins')}
              </CardTitle>
              <Trophy className="h-4 w-4 text-billman-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{playerStats.wins}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-billman-dark border-billman-dark">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-billman-lightGray">
                {t('dashboard.overview.losses')}
              </CardTitle>
              <XCircle className="h-4 w-4 text-billman-lightGray" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{playerStats.losses}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-billman-dark border-billman-dark">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-billman-lightGray">
                {t('dashboard.overview.accuracy')}
              </CardTitle>
              <Target className="h-4 w-4 text-billman-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{playerStats.accuracy}%</div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">{t('dashboard.overview.recentGames')}</h2>
        <Card className="bg-billman-dark border-billman-dark">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-billman-dark hover:bg-billman-dark">
                  <TableHead className="text-billman-lightGray">{t('dashboard.overview.date')}</TableHead>
                  <TableHead className="text-billman-lightGray">{t('dashboard.overview.opponent')}</TableHead>
                  <TableHead className="text-billman-lightGray">{t('dashboard.overview.result')}</TableHead>
                  <TableHead className="text-billman-lightGray text-right">{t('dashboard.overview.score')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentGames.map((game) => (
                  <TableRow key={game.id} className="border-billman-dark hover:bg-billman-dark/60">
                    <TableCell className="text-white">
                      {new Date(game.date).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-white">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-billman-green" />
                        {game.opponent}
                      </div>
                    </TableCell>
                    <TableCell>
                      {game.result === 'win' ? (
                        <span className="flex items-center text-green-500">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          {t('dashboard.overview.win')}
                        </span>
                      ) : (
                        <span className="flex items-center text-red-500">
                          <XCircle className="h-4 w-4 mr-1" />
                          {t('dashboard.overview.loss')}
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="text-white text-right">{game.score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default PlayerDashboardOverview;
