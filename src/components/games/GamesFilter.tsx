
import React from 'react';
import { Search, Filter, X, List, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Toggle } from '@/components/ui/toggle';
import { useGames } from '@/contexts/GamesContext';
import { gameTypes, venues } from '@/data/games';

const GamesFilter: React.FC = () => {
  const {
    searchTerm,
    gameTypeFilter,
    venueFilter,
    isGridView,
    setSearchTerm,
    setGameTypeFilter,
    setVenueFilter,
    toggleViewMode,
    clearFilters,
    maxStorage,
    currentStorageUsage,
  } = useGames();
  
  return (
    <div className="w-full bg-billman-dark border border-billman-gray rounded-lg p-4 mb-6">
      <div className="flex flex-col space-y-4">
        {/* Storage Info */}
        <div className="bg-billman-gray/20 px-4 py-3 rounded-md flex items-center justify-between">
          <span className="text-white text-sm">Storage</span>
          <span className="text-billman-lightGray text-sm font-medium">
            {currentStorageUsage}/{maxStorage} games saved
          </span>
        </div>
        
        {/* Search and Filters Row */}
        <div className="flex flex-wrap gap-3">
          {/* Search Input */}
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-billman-lightGray" size={16} />
            <Input
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-billman-gray border-billman-gray text-white"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <X size={14} className="text-billman-lightGray hover:text-white" />
              </button>
            )}
          </div>
          
          {/* Game Type Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                className={`flex items-center gap-2 bg-billman-gray border-billman-gray text-white ${gameTypeFilter ? 'border-billman-green' : ''}`}
              >
                <span>Game Type</span>
                {gameTypeFilter && <span className="text-xs bg-billman-green/20 text-billman-green px-1.5 py-0.5 rounded">{gameTypeFilter}</span>}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-billman-dark border-billman-gray text-white">
              <DropdownMenuLabel>Filter by Game Type</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-billman-gray/50" />
              <DropdownMenuItem 
                onClick={() => setGameTypeFilter(null)}
                className="text-billman-lightGray hover:text-white hover:bg-billman-gray/30"
              >
                All Types
              </DropdownMenuItem>
              {gameTypes.map((type) => (
                <DropdownMenuItem 
                  key={type} 
                  onClick={() => setGameTypeFilter(type)}
                  className={`hover:bg-billman-gray/30 ${gameTypeFilter === type ? 'text-billman-green' : 'text-white'}`}
                >
                  {type}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Venue Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                className={`flex items-center gap-2 bg-billman-gray border-billman-gray text-white ${venueFilter ? 'border-billman-green' : ''}`}
              >
                <span>Venue</span>
                {venueFilter && <span className="text-xs bg-billman-green/20 text-billman-green px-1.5 py-0.5 rounded">{venueFilter}</span>}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-billman-dark border-billman-gray text-white">
              <DropdownMenuLabel>Filter by Venue</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-billman-gray/50" />
              <DropdownMenuItem 
                onClick={() => setVenueFilter(null)}
                className="text-billman-lightGray hover:text-white hover:bg-billman-gray/30"
              >
                All Venues
              </DropdownMenuItem>
              {venues.map((venue) => (
                <DropdownMenuItem 
                  key={venue} 
                  onClick={() => setVenueFilter(venue)}
                  className={`hover:bg-billman-gray/30 ${venueFilter === venue ? 'text-billman-green' : 'text-white'}`}
                >
                  {venue}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Clear Filters Button */}
          {(searchTerm || gameTypeFilter || venueFilter) && (
            <Button 
              variant="outline" 
              className="bg-billman-gray/50 border-billman-gray text-white hover:bg-billman-gray"
              onClick={clearFilters}
            >
              <X size={16} className="mr-1" /> Clear Filters
            </Button>
          )}
          
          {/* View Toggle */}
          <div className="ml-auto flex items-center bg-billman-gray rounded-md">
            <Toggle
              pressed={!isGridView}
              onPressedChange={() => isGridView && toggleViewMode()}
              className="h-9 px-3 data-[state=on]:bg-billman-green/20 data-[state=on]:text-billman-green rounded-l-md rounded-r-none"
              aria-label="List view"
            >
              <List size={16} />
            </Toggle>
            <Toggle
              pressed={isGridView}
              onPressedChange={() => !isGridView && toggleViewMode()}
              className="h-9 px-3 data-[state=on]:bg-billman-green/20 data-[state=on]:text-billman-green rounded-r-md rounded-l-none"
              aria-label="Grid view"
            >
              <LayoutGrid size={16} />
            </Toggle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesFilter;
