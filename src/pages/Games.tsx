
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Calendar, Eye } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StorageCountdown from '@/components/games/StorageCountdown';
import FavoriteButton from '@/components/games/FavoriteButton';
import GamesFilter from '@/components/games/GamesFilter';
import { GamesProvider, useGames } from '@/contexts/GamesContext';
import { useAuth } from '@/contexts/AuthContext';
import { useTranslation } from 'react-i18next';

const GamesGrid = () => {
  const {
    games,
    searchTerm,
    gameTypeFilter,
    venueFilter,
    isGridView,
  } = useGames();
  
  const { user } = useAuth();
  const { t } = useTranslation();

  // Filter games based on current filters
  const filteredGames = useMemo(() => {
    return games.filter(game => {
      // Search filter
      if (searchTerm && !game.type.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !game.venue.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !game.players.some(player => player.toLowerCase().includes(searchTerm.toLowerCase()))) {
        return false;
      }

      // Game type filter
      if (gameTypeFilter && game.type !== gameTypeFilter) {
        return false;
      }

      // Venue filter
      if (venueFilter && game.venue !== venueFilter) {
        return false;
      }

      return true;
    });
  }, [games, searchTerm, gameTypeFilter, venueFilter]);

  if (filteredGames.length === 0) {
    return (
      <div className="w-full bg-billman-dark border border-billman-gray rounded-lg p-8 text-center">
        <p className="text-billman-lightGray mb-2">No games found matching your filters.</p>
        <Button 
          variant="outline" 
          className="bg-billman-gray border-billman-gray text-white mt-2"
          onClick={() => window.location.reload()}
        >
          Reset All Filters
        </Button>
      </div>
    );
  }

  return (
    <div className={`${isGridView ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-4'}`}>
      {filteredGames.map((game) => (
        <Card 
          key={game.id} 
          className={`bg-billman-dark border-billman-gray hover:border-billman-green transition-colors duration-300 overflow-hidden group relative ${
            isGridView ? '' : 'flex flex-row items-stretch'
          }`}
        >
          {/* Favorite Button - Top Right */}
          <div className="absolute top-3 right-3 z-10">
            <FavoriteButton gameId={game.id} isFavorite={game.isFavorite} />
          </div>

          <div className={isGridView ? '' : 'flex-1'}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-white text-xl">{game.type}</CardTitle>
                <span className="bg-billman-green/20 text-billman-green px-2 py-1 rounded-md text-xs font-medium">
                  {game.players.length} Players
                </span>
              </div>
              <CardDescription className="text-billman-lightGray">
                <div className="flex items-center mt-1 gap-2">
                  <Calendar size={14} className="text-billman-lightGray" />
                  <span>{game.date} at {game.time}</span>
                </div>
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pb-2">
              <div className="grid grid-cols-2 gap-4 my-2">
                <div className="flex flex-col">
                  <span className="text-sm text-billman-lightGray">Venue</span>
                  <span className="text-white font-medium">{game.venue}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-billman-lightGray">Duration</span>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-billman-lightGray" />
                    <span className="text-white font-medium">{game.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-3">
                <span className="text-sm text-billman-lightGray">{t('common.opponents')}</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {user && game.players
                    .filter(player => player !== user.username) // Filter out the current user
                    .map((player, index) => (
                      <span 
                        key={index} 
                        className="bg-billman-gray px-2 py-1 rounded-md text-xs text-white"
                      >
                        {player}
                      </span>
                    ))}
                </div>
              </div>

              {/* Storage Countdown */}
              <div className="mt-4">
                <StorageCountdown recordedAt={game.recordedAt} isFavorite={game.isFavorite} />
              </div>
            </CardContent>
          </div>
          
          <CardFooter className={`pt-2 ${isGridView ? '' : 'self-end min-w-[120px]'}`}>
            <Link to={`/games/${game.id}`} className="w-full">
              <Button 
                className="w-full bg-billman-green/10 text-billman-green hover:bg-billman-green hover:text-white border border-billman-green/30 group-hover:bg-billman-green group-hover:text-white transition-colors duration-300"
              >
                <Eye size={16} className="mr-2" />
                View Game
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

const GamesPage = () => {
  return (
    <GamesProvider>
      <div className="min-h-screen flex flex-col bg-billman-black">
        <Navbar />
        
        <div className="flex-grow pt-28 pb-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Your Billiard Games</h1>
              <p className="text-billman-lightGray">
                View your game history, watch recordings, and analyze your performance
              </p>
            </div>
            
            <GamesFilter />
            <GamesGrid />
          </div>
        </div>
        
        <Footer />
      </div>
    </GamesProvider>
  );
};

export default GamesPage;
