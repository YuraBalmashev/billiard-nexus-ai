
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { gameHistory } from '@/data/games';

const PlayerDashboardGames = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  // Get opponents the user has played against
  const opponents = useMemo(() => {
    if (!user) return [];
    
    return gameHistory
      .filter(game => game.players.includes(user.username))
      .map(game => {
        // Find opponent(s) who are not the current user
        const opponents = game.players.filter(player => player !== user.username);
        
        return {
          id: game.id,
          username: opponents.length ? opponents[0] : t('dashboard.games.unknownOpponent'),
          date: game.date,
          time: game.time,
          result: game.score && user.username === game.players[0] 
            ? (game.score.player1 > game.score.player2 ? 'win' : 'loss')
            : (game.score && game.score.player2 > game.score.player1 ? 'win' : 'loss')
        };
      });
  }, [user, t]);

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
            
            <div className="mt-4">
              <h3 className="text-base font-medium text-white mb-2">{t('dashboard.games.opponents')}</h3>
              
              {opponents.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow className="border-billman-gray">
                      <TableHead className="text-billman-lightGray">{t('dashboard.games.opponentName')}</TableHead>
                      <TableHead className="text-billman-lightGray">{t('dashboard.games.lastPlayed')}</TableHead>
                      <TableHead className="text-billman-lightGray">{t('dashboard.games.result')}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {opponents.map((opponent) => (
                      <TableRow key={opponent.id} className="border-billman-gray hover:bg-billman-gray/20">
                        <TableCell className="text-white">{opponent.username}</TableCell>
                        <TableCell className="text-billman-lightGray">
                          {opponent.date} {opponent.time}
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            opponent.result === 'win' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-red-500/20 text-red-400'
                          }`}>
                            {opponent.result === 'win' 
                              ? t('dashboard.overview.win') 
                              : t('dashboard.overview.loss')}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="p-4 md:p-8 border border-dashed border-billman-lightGray/30 rounded-md flex items-center justify-center">
                  <p className="text-xs md:text-sm text-billman-lightGray text-center">
                    {t('dashboard.games.noOpponents')}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default PlayerDashboardGames;
