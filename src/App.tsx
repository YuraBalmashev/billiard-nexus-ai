
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FeaturesPage from "./pages/Features";
import PricingPage from "./pages/Pricing";
import ClubsPage from "./pages/Clubs";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import GamesPage from "./pages/Games";
import GameDetailsPage from "./pages/GameDetails";
import ProfilePage from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { GamesProvider } from "./contexts/GamesContext";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import PlayerDashboardLayout from "./pages/dashboard/player/Layout";
import PlayerDashboardOverview from "./pages/dashboard/player/Overview";
import PlayerDashboardGames from "./pages/dashboard/player/Games";
import PlayerDashboardSettings from "./pages/dashboard/player/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AuthProvider>
          <GamesProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/clubs" element={<ClubsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route 
                path="/games" 
                element={
                  <ProtectedRoute>
                    <GamesPage />
                  </ProtectedRoute>
                } 
              />
              <Route path="/games/:gameId" element={<GameDetailsPage />} />
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                } 
              />
              
              {/* Player Dashboard Routes */}
              <Route 
                path="/dashboard/player" 
                element={
                  <ProtectedRoute>
                    <PlayerDashboardLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<PlayerDashboardOverview />} />
                <Route path="games" element={<PlayerDashboardGames />} />
                <Route path="settings" element={<PlayerDashboardSettings />} />
              </Route>
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </GamesProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
