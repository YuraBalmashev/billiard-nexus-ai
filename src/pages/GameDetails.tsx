
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getGameById, Game, GameEvent } from '@/data/games';
import VideoPlayer from '@/components/games/VideoPlayer';
import EventTimeline from '@/components/games/EventTimeline';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Trophy, LogIn } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { useTranslation } from 'react-i18next';

const GameDetailsPage = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    if (gameId) {
      const gameData = getGameById(gameId);
      if (gameData) {
        setGame(gameData);
      }
      setLoading(false);
    }
  }, [gameId]);

  const handleEventClick = (timestamp: number) => {
    // This function will be passed to the EventTimeline component
    // and will be called when an event is clicked
    const videoElement = document.querySelector('video');
    if (videoElement) {
      videoElement.currentTime = timestamp;
      videoElement.play();
    }
  };

  // Find the winner based on the score
  const determineWinner = (game: Game) => {
    if (!game.score) return null;
    
    return game.score.player1 > game.score.player2 ? 0 : 1;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-billman-black">
        <div className="text-white">Loading game details...</div>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="min-h-screen flex flex-col bg-billman-black">
        <Navbar />
        <div className="container mx-auto px-4 md:px-6 pt-28 pb-16 flex-grow">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-white mb-4">Game Not Found</h2>
            <p className="text-billman-lightGray mb-8">The game you are looking for does not exist or has been removed.</p>
            <Link to="/games">
              <Button className="bg-billman-green hover:bg-billman-lightGreen">
                Back to Games
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const winnerIndex = determineWinner(game);

  return (
    <div className="min-h-screen flex flex-col bg-billman-black">
      <Navbar />
      
      <div className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6">
            <Link to="/games" className="inline-flex items-center text-billman-lightGray hover:text-billman-green transition-colors mb-4">
              <ArrowLeft size={16} className="mr-2" />
              Back to Games
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white">{game.type}</h1>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2">
              <div className="flex items-center text-billman-lightGray">
                <Calendar size={16} className="mr-2" />
                {game.date} at {game.time}
              </div>
              <div className="flex items-center text-billman-lightGray">
                <Clock size={16} className="mr-2" />
                {game.duration}
              </div>
              <div className="text-billman-lightGray">
                Venue: <span className="text-white">{game.venue}</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <VideoPlayer videoUrl={game.videoUrl} events={game.events} />
              
              <div className="mt-6 bg-billman-dark border border-billman-gray rounded-lg p-4">
                <h3 className="text-white text-lg font-medium mb-4">{t('gameDetails.matchResults')}</h3>
                
                <div className="space-y-4">
                  {game.score ? (
                    <div className="bg-billman-black p-4 rounded border border-billman-gray/50">
                      {game.players.map((player, index) => (
                        <div key={index} className="flex items-center justify-between mb-2 last:mb-0">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-billman-green/20 text-billman-green flex items-center justify-center mr-2">
                              {index + 1}
                            </div>
                            <span className="text-white">{player}</span>
                            {winnerIndex === index && (
                              <span className="ml-2 flex items-center text-billman-green">
                                <Trophy size={14} className="mr-1" />
                                {t('gameDetails.winner')}
                              </span>
                            )}
                          </div>
                          <span className="text-xl font-bold text-white">
                            {index === 0 ? game.score.player1 : game.score.player2} {t('gameDetails.points')}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-billman-black p-4 rounded border border-billman-gray/50">
                      {game.players.map((player, index) => (
                        <div key={index} className="flex items-center mb-2 last:mb-0">
                          <div className="w-8 h-8 rounded-full bg-billman-green/20 text-billman-green flex items-center justify-center mr-2">
                            {index + 1}
                          </div>
                          <span className="text-white">{player}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {game.statistics && (
                    <div className="mt-6">
                      <h3 className="text-white text-lg font-medium mb-4">
                        {isAuthenticated ? t('gameDetails.yourGameStatistics') : t('gameDetails.gameStatistics')}
                      </h3>
                      
                      {isAuthenticated ? (
                        <div className="bg-billman-black p-4 rounded border border-billman-gray/50">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-billman-dark p-3 rounded">
                              <h5 className="text-billman-lightGray text-sm mb-1">{t('gameDetails.totalShots')}</h5>
                              <p className="text-2xl font-bold text-white">
                                {game.statistics.successfulShots + game.statistics.missedShots}
                              </p>
                            </div>
                            <div className="bg-billman-dark p-3 rounded">
                              <h5 className="text-billman-lightGray text-sm mb-1">{t('gameDetails.successfulShots')}</h5>
                              <p className="text-2xl font-bold text-green-500">{game.statistics.successfulShots}</p>
                            </div>
                            <div className="bg-billman-dark p-3 rounded">
                              <h5 className="text-billman-lightGray text-sm mb-1">{t('gameDetails.missedShots')}</h5>
                              <p className="text-2xl font-bold text-red-500">{game.statistics.missedShots}</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-billman-black p-4 rounded border border-billman-gray/50 text-center">
                          <p className="text-billman-lightGray mb-3">{t('gameDetails.loginToSeeStats')}</p>
                          <Button className="bg-billman-green hover:bg-billman-lightGreen">
                            <LogIn size={16} className="mr-2" />
                            {t('auth.login')}
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div>
              <EventTimeline events={game.events} onEventClick={handleEventClick} />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GameDetailsPage;
