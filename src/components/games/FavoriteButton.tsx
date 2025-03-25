
import React from 'react';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';
import { useGames } from '@/contexts/GamesContext';

interface FavoriteButtonProps {
  gameId: string;
  isFavorite: boolean;
  className?: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ 
  gameId, 
  isFavorite, 
  className 
}) => {
  const { toggleFavorite } = useGames();
  
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(gameId);
      }}
      className={cn(
        "transition-all duration-300 ease-in-out transform hover:scale-110",
        className
      )}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <Heart
        size={20}
        className={cn(
          "transition-colors duration-300",
          isFavorite 
            ? "text-red-500 fill-red-500" 
            : "text-white hover:text-red-500"
        )}
      />
    </button>
  );
};

export default FavoriteButton;
