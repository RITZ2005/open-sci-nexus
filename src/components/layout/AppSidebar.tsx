import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  User,
  LayoutDashboard,
  Users,
  FileText,
  FolderOpen,
  Settings,
  Microscope
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

const navigationItems = [
  { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
  { title: 'Profile', url: '/profile', icon: User },
  { title: 'Collaborators', url: '/collaborators', icon: Users },
  { title: 'Projects', url: '/projects', icon: FolderOpen },
  { title: 'Publish', url: '/publish', icon: FileText },
  { title: 'Settings', url: '/settings', icon: Settings },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const getNavClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'bg-primary text-primary-foreground font-medium shadow-soft'
      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground';

  return (
    <Sidebar className={open ? 'w-64' : 'w-14'}>
      <SidebarContent className="border-r border-border">
        {/* Header */}
        <div className="p-4 border-b border-border">
          <motion.div 
            className="flex items-center space-x-2"
            initial={false}
            animate={{ opacity: open ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-8 h-8 rounded-lg hero-gradient flex items-center justify-center">
              <Microscope className="w-5 h-5 text-white" />
            </div>
            {open && (
              <div>
                <h2 className="font-bold text-sm">Open Science</h2>
                <p className="text-xs text-muted-foreground">Platform</p>
              </div>
            )}
          </motion.div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClass}>
                      <item.icon className="w-4 h-4" />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}