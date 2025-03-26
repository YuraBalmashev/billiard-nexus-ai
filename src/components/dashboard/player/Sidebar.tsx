
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LayoutDashboard, User, List, Settings, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger
} from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';

const PlayerDashboardSidebar = () => {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const isMobile = useIsMobile();
  
  const navItems = [
    {
      icon: <LayoutDashboard className="h-5 w-5" />,
      title: t('dashboard.nav.overview'),
      to: '/dashboard/player'
    },
    {
      icon: <List className="h-5 w-5" />,
      title: t('dashboard.nav.myGames'),
      to: '/dashboard/player/games'
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: t('dashboard.nav.settings'),
      to: '/dashboard/player/settings'
    }
  ];

  return (
    <Sidebar 
      className="min-h-screen border-r border-billman-dark"
      collapsible={isMobile ? "offcanvas" : "icon"}
    >
      <SidebarContent className="pt-6">
        <div className="px-4 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user?.avatar} alt={user?.username} />
              <AvatarFallback className="bg-billman-green/20 text-billman-green">
                {user?.username.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-sm font-medium text-white line-clamp-1">{user?.username}</h3>
              <p className="text-xs text-billman-lightGray line-clamp-1">{user?.email}</p>
            </div>
          </div>
        </div>
        
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.to}>
              <SidebarMenuButton asChild>
                <NavLink
                  to={item.to}
                  end={item.to === '/dashboard/player'}
                  className={({ isActive }) => 
                    isActive ? "bg-billman-green/10 text-billman-green" : "text-billman-lightGray hover:text-white"
                  }
                >
                  {item.icon}
                  <span>{item.title}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter className="mt-auto mb-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              className="text-billman-lightGray hover:text-white"
              onClick={logout}
            >
              <LogOut className="h-5 w-5" />
              <span>{t('auth.logout')}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default PlayerDashboardSidebar;
