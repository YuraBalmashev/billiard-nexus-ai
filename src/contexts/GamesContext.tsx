
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Game, gameHistory, userStorageData } from '@/data/games';
import { toast } from 'sonner';

interface GamesContextType {
  games: Game[];
  favoriteGames: Game[];
  searchTerm: string;
  gameTypeFilter: string | null;
  venueFilter: string | null;
  dateRangeFilter: { start: Date | null; end: Date | null };
  isGridView: boolean;
  maxStorage: number;
  currentStorageUsage: number;

  setSearchTerm: (term: string) => void;
  setGameTypeFilter: (type: string | null) => void;
  setVenueFilter: (venue: string | null) => void;
  setDateRangeFilter: (range: { start: Date | null; end: Date | null }) => void;
  toggleViewMode: () => void;
  toggleFavorite: (gameId: string) => void;
  clearFilters: () => void;
}

const GamesContext = createContext<GamesContextType | undefined>(undefined);

export const GamesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [games, setGames] = useState<Game[]>(gameHistory);
  const [favoriteGames, setFavoriteGames] = useState<Game[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [gameTypeFilter, setGameTypeFilter] = useState<string | null>(null);
  const [venueFilter, setVenueFilter] = useState<string | null>(null);
  const [dateRangeFilter, setDateRangeFilter] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });
  const [isGridView, setIsGridView] = useState(true);
  const [maxStorage] = useState(userStorageData.maxStorage);
  const [currentStorageUsage, setCurrentStorageUsage] = useState(userStorageData.currentUsage);

  // Initialize favorite games
  useEffect(() => {
    const initialFavorites = games.filter(game => game.isFavorite);
    setFavoriteGames(initialFavorites);
    setCurrentStorageUsage(initialFavorites.length);
  }, []);

  const toggleFavorite = (gameId: string) => {
    setGames(prevGames => {
      return prevGames.map(game => {
        if (game.id === gameId) {
          const newIsFavorite = !game.isFavorite;
          
          // Check if we're trying to add a favorite but we're at max storage
          if (newIsFavorite && !game.isFavorite && currentStorageUsage >= maxStorage) {
            toast.error(`Storage limit reached. Delete some games or upgrade your plan.`);
            return game;
          }
          
          // Success notification
          if (newIsFavorite) {
            toast.success('Game added to favorites');
          } else {
            toast.success('Game removed from favorites');
          }
          
          return { ...game, isFavorite: newIsFavorite };
        }
        return game;
      });
    });
    
    // Update favorite games and storage usage count
    const updatedGames = games.map(game => 
      game.id === gameId ? { ...game, isFavorite: !game.isFavorite } : game
    );
    const updatedFavorites = updatedGames.filter(game => game.isFavorite);
    setFavoriteGames(updatedFavorites);
    setCurrentStorageUsage(updatedFavorites.length);
  };

  const toggleViewMode = () => {
    setIsGridView(prev => !prev);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setGameTypeFilter(null);
    setVenueFilter(null);
    setDateRangeFilter({ start: null, end: null });
  };

  return (
    <GamesContext.Provider
      value={{
        games,
        favoriteGames,
        searchTerm,
        gameTypeFilter,
        venueFilter,
        dateRangeFilter,
        isGridView,
        maxStorage,
        currentStorageUsage,
        setSearchTerm,
        setGameTypeFilter,
        setVenueFilter,
        setDateRangeFilter,
        toggleViewMode,
        toggleFavorite,
        clearFilters,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export const useGames = () => {
  const context = useContext(GamesContext);
  if (context === undefined) {
    throw new Error('useGames must be used within a GamesProvider');
  }
  return context;
};
