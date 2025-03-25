
import React from 'react';
import { Link } from 'react-router-dom';
import { gameHistory } from '@/data/games';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Calendar, Eye } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const GamesPage = () => {
  return (
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameHistory.map((game) => (
              <Card 
                key={game.id} 
                className="bg-billman-dark border-billman-gray hover:border-billman-green transition-colors duration-300 overflow-hidden group"
              >
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
                    <span className="text-sm text-billman-lightGray">Players</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {game.players.map((player, index) => (
                        <span 
                          key={index} 
                          className="bg-billman-gray px-2 py-1 rounded-md text-xs text-white"
                        >
                          {player}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-2">
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
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GamesPage;
