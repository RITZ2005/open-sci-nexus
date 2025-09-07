import React from 'react';
import { motion } from 'framer-motion';
import { Search, Bell, Moon, Sun, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SidebarTrigger } from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/contexts/ThemeContext';

export function TopNavbar() {
  const { theme, setTheme } = useTheme();

  const ThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-4 h-4" />;
      case 'dark':
        return <Moon className="w-4 h-4" />;
      default:
        return <Monitor className="w-4 h-4" />;
    }
  };

  return (
    <motion.header 
      className="h-16 border-b border-card-border bg-background/95 backdrop-blur-sm sticky top-0 z-40"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center space-x-6">
          <SidebarTrigger className="p-2 hover:bg-accent rounded-lg transition-colors" />
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search researchers, papers, projects..."
              className="w-80 pl-10 bg-accent/50 border-card-border focus:bg-background"
            />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="w-10 h-10 p-0 rounded-lg border-card-border">
                <ThemeIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="border-card-border">
              <DropdownMenuItem onClick={() => setTheme('light')} className="flex items-center">
                <Sun className="w-4 h-4 mr-2" />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')} className="flex items-center">
                <Moon className="w-4 h-4 mr-2" />
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')} className="flex items-center">
                <Monitor className="w-4 h-4 mr-2" />
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Notifications */}
          <Button variant="outline" size="sm" className="relative w-10 h-10 p-0 rounded-lg border-card-border">
            <Bell className="w-4 h-4" />
            <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 text-xs bg-primary text-primary-foreground">3</Badge>
          </Button>

          {/* Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10 border-2 border-card-border">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                  <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                    JD
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 border-card-border" align="end" forceMount>
              <DropdownMenuItem className="font-normal p-4">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-semibold leading-none">Dr. Jane Doe</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    jane.doe@stanford.edu
                  </p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.header>
  );
}