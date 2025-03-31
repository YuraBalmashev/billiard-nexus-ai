
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useGames } from '@/contexts/GamesContext';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Eye, Heart, LogOut, User, Calendar, Star, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import AuthModal from '@/components/auth/AuthModal';
import { formatDistanceToNow } from 'date-fns';

const Profile = () => {
  const { user, logout } = useAuth();
  const { games, favoriteGames, toggleFavorite } = useGames();
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Filter for recent games (latest 3)
  const recentGames = [...games]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  // Mock registration date
  const registrationDate = new Date(2023, 11, 15); // December 15, 2023
  const memberSince = formatDistanceToNow(registrationDate, { addSuffix: true });
  
  // Mock membership status
  const membershipStatus = "Free";

  if (!user) {
    return (
      <div className="flex flex-col min-h-screen bg-billman-black text-billman-white">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 pt-24 pb-16 flex items-center justify-center">
          <Card className="w-full max-w-md bg-billman-dark/50 border-billman-green/20 text-billman-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{t('auth.authRequired')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <p>{t('auth.loginToAccess')}</p>
              <AuthModal />
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-billman-black text-billman-white">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold mb-8">{t('profile.myProfile')}</h1>
          
          {/* User Information Section */}
          <Card className="bg-billman-dark/50 border-billman-green/20 text-billman-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center">
                <User className="mr-2 text-billman-green" size={20} />
                {t('profile.userInformation')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <Avatar className="h-24 w-24 border-2 border-billman-green">
                  <AvatarImage src={user.avatar || '/placeholder.svg'} alt={user.username} />
                  <AvatarFallback className="bg-billman-green/20 text-billman-green text-xl">
                    {user.username.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                      <p className="text-billman-lightGray text-sm">{t('profile.username')}:</p>
                      <p className="font-medium">{user.username}</p>
                    </div>
                    <div>
                      <p className="text-billman-lightGray text-sm">{t('profile.email')}:</p>
                      <p className="font-medium">{user.email}</p>
                    </div>
                    <div>
                      <p className="text-billman-lightGray text-sm">{t('profile.memberSince')}:</p>
                      <p className="font-medium">{memberSince}</p>
                    </div>
                    <div>
                      <p className="text-billman-lightGray text-sm">{t('profile.membershipStatus')}:</p>
                      <p className="font-medium flex items-center">
                        {membershipStatus === "Premium" ? (
                          <>
                            <Star size={16} className="mr-1 text-yellow-500" />
                            {t('profile.premium')}
                          </>
                        ) : (
                          <>
                            {membershipStatus}
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Recent Games Section */}
          <Card className="bg-billman-dark/50 border-billman-green/20 text-billman-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center">
                <Calendar className="mr-2 text-billman-green" size={20} />
                {t('profile.recentGames')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {recentGames.length > 0 ? (
                <ul className="space-y-4">
                  {recentGames.map((game) => {
                    // Get opponent's name (filter out the current user)
                    const opponents = game.players.filter(player => player !== user.username);
                    const opponentName = opponents.length > 0 ? opponents[0] : t('dashboard.games.unknownOpponent');
                    const isWinner = game.score && game.score.player1 > game.score.player2;
                    
                    return (
                      <li key={game.id} className="flex items-center justify-between border-b border-billman-green/10 pb-3">
                        <div className="flex-1">
                          <div className="flex items-center">
                            <span className="text-billman-lightGray">[{game.type}]</span>
                            <span className="mx-2">{game.date}</span>
                            <span>{t('profile.vs')} {opponentName}</span>
                            <span className={`ml-2 font-medium ${isWinner ? 'text-green-500' : 'text-red-500'}`}>
                              {isWinner ? t('dashboard.overview.win') : t('dashboard.overview.loss')}
                            </span>
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-billman-green"
                          asChild
                        >
                          <Link to={`/games/${game.id}`} className="flex items-center">
                            <Eye size={16} className="mr-1" />
                            {t('profile.viewDetails')}
                          </Link>
                        </Button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div className="text-center py-6 text-billman-lightGray">
                  <p>{t('profile.noRecentGames')}</p>
                </div>
              )}
              
              <div className="mt-4 text-right">
                <Button 
                  variant="outline" 
                  asChild
                  className="text-billman-green border-billman-green/30 hover:bg-billman-green/10"
                >
                  <Link to="/games">{t('profile.viewAllGames')}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Favorite Games Section */}
          <Card className="bg-billman-dark/50 border-billman-green/20 text-billman-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center">
                <Heart className="mr-2 text-billman-green" size={20} />
                {t('profile.favoriteGames')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {favoriteGames.length > 0 ? (
                <ul className="space-y-4">
                  {favoriteGames.map((game) => {
                    // Get opponent's name (filter out the current user)
                    const opponents = game.players.filter(player => player !== user.username);
                    const opponentName = opponents.length > 0 ? opponents[0] : t('dashboard.games.unknownOpponent');
                    
                    return (
                      <li key={game.id} className="flex items-center justify-between border-b border-billman-green/10 pb-3">
                        <div className="flex-1">
                          <div className="flex items-center">
                            <span className="text-billman-lightGray">[{game.type}]</span>
                            <span className="mx-2">{game.date}</span>
                            <span>{t('profile.vs')} {opponentName}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-billman-green"
                            asChild
                          >
                            <Link to={`/games/${game.id}`} className="flex items-center">
                              <Eye size={16} className="mr-1" />
                              {t('profile.viewDetails')}
                            </Link>
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="text-red-500 h-8 w-8"
                            onClick={() => toggleFavorite(game.id)}
                          >
                            <Heart size={16} className="fill-current" />
                            <span className="sr-only">{t('profile.removeFromFavorites')}</span>
                          </Button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div className="text-center py-6 text-billman-lightGray">
                  <p>{t('profile.noFavoriteGames')}</p>
                </div>
              )}
            </CardContent>
          </Card>
          
          {/* Account Settings Section */}
          <Card className="bg-billman-dark/50 border-billman-green/20 text-billman-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center">
                <Award className="mr-2 text-billman-green" size={20} />
                {t('profile.accountSettings')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-billman-lightGray text-sm mb-1">{t('profile.language')}:</p>
                    <LanguageSwitcher />
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="border-billman-green/30 text-billman-white hover:bg-billman-green/10 hover:text-billman-green"
                      >
                        {t('profile.resetPassword')}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-billman-dark border-billman-green/20 text-billman-white">
                      <DialogHeader>
                        <DialogTitle>{t('profile.resetPassword')}</DialogTitle>
                        <DialogDescription className="text-billman-lightGray">
                          {t('profile.resetPasswordDescription')}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="text-center mt-4">
                        <p className="text-billman-lightGray">{t('profile.featureComingSoon')}</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                
                <div className="flex justify-end mt-6">
                  <Button 
                    variant="outline" 
                    className="border-billman-green/30 text-billman-white hover:bg-billman-green/10 hover:text-billman-green"
                    onClick={logout}
                  >
                    <LogOut size={16} className="mr-2" />
                    {t('auth.logout')}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
