import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, FolderOpen, TrendingUp, Plus, Bell, Calendar, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  // Format user's display name with title
  const getUserDisplayName = () => {
    if (!user) return 'Guest';
    
    const title = user.title || 'Dr.'; // Default to Dr. if no title specified
    const firstName = user.full_name?.split(' ')[0] || 'User';
    
    return `${title} ${firstName}`;
  };

  const stats = [
    {
      title: 'Active Collaborators',
      value: '24',
      change: '+3 this week',
      icon: Users,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      title: 'Published Papers',
      value: '8',
      change: '+2 this month',
      icon: FileText,
      color: 'text-collaboration',
      bgColor: 'bg-collaboration/10'
    },
    {
      title: 'Ongoing Projects',
      value: '5',
      change: '2 nearing completion',
      icon: FolderOpen,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      title: 'Research Impact',
      value: '1.2k',
      change: '+15% this quarter',
      icon: TrendingUp,
      color: 'text-collaboration',
      bgColor: 'bg-collaboration/10'
    }
  ];

  const recentActivity = [
    {
      type: 'collaboration',
      action: 'New collaboration request from Dr. Maria Santos',
      details: 'Climate Science · Stanford University',
      time: '2 hours ago',
      avatar: '/placeholder-1.jpg',
      unread: true
    },
    {
      type: 'publication',
      action: 'Paper published successfully on blockchain',
      details: 'AI-Driven Climate Prediction Models',
      time: '1 day ago',
      avatar: '/placeholder-paper.jpg',
      unread: true
    },
    {
      type: 'project',
      action: 'Project milestone completed',
      details: 'Ocean Dynamics Team · Phase 2 Complete',
      time: '3 days ago',
      avatar: '/placeholder-2.jpg',
      unread: false
    },
    {
      type: 'award',
      action: 'Research achievement unlocked',
      details: 'Published 8 papers milestone reached',
      time: '1 week ago',
      avatar: '/placeholder-award.jpg',
      unread: false
    }
  ];

  const quickActions = [
    {
      title: 'Find Collaborators',
      description: 'Discover researchers with similar interests',
      icon: Users,
      color: 'bg-primary',
      href: '/collaborators'
    },
    {
      title: 'Publish Research',
      description: 'Upload and publish your latest findings',
      icon: FileText,
      color: 'bg-collaboration',
      href: '/publish'
    },
    {
      title: 'Create Project',
      description: 'Start a new collaborative research project',
      icon: Plus,
      color: 'bg-primary',
      href: '/projects'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Climate Research Conference',
      date: 'Oct 15, 2024',
      type: 'Conference',
      location: 'Virtual'
    },
    {
      title: 'Project Deadline: Ocean AI',
      date: 'Oct 20, 2024',
      type: 'Deadline',
      location: 'Internal'
    },
    {
      title: 'Collaboration Meeting',
      date: 'Oct 25, 2024',
      type: 'Meeting',
      location: 'Stanford'
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'collaboration': return Users;
      case 'publication': return FileText;
      case 'project': return FolderOpen;
      case 'award': return Award;
      default: return Bell;
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Welcome Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-foreground">Good morning, {getUserDisplayName()}</h1>
            <p className="text-muted-foreground text-lg">Here's your research activity summary for today.</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 lg:mt-0">
            <Button variant="outline" className="flex items-center">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground">
              <Plus className="w-4 h-4 mr-2" />
              New Project
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="hover-lift shadow-soft border-card-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">{stat.title}</p>
                    <p className="text-xs text-muted-foreground">{stat.change}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity - Takes 2 columns */}
          <div className="lg:col-span-2">
            <Card className="shadow-medium border-card-border">
              <CardHeader className="border-b border-card-border">
                <CardTitle className="text-xl flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Recent Activity
                </CardTitle>
                <CardDescription>
                  Your latest research interactions and updates
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {recentActivity.map((activity, index) => {
                    const ActivityIcon = getActivityIcon(activity.type);
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start space-x-4 p-6 border-b border-card-border last:border-b-0 hover:bg-accent/50 transition-colors"
                      >
                        <div className="relative">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={activity.avatar} alt="" />
                            <AvatarFallback className="bg-primary/10">
                              <ActivityIcon className="w-5 h-5 text-primary" />
                            </AvatarFallback>
                          </Avatar>
                          {activity.unread && (
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-background"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm text-foreground mb-1">{activity.action}</p>
                          <p className="text-sm text-muted-foreground mb-2">{activity.details}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="shadow-soft border-card-border">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
                <CardDescription>Common tasks to accelerate your research</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={action.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Button 
                      variant="outline" 
                      className="w-full justify-start h-auto p-4 text-left hover:shadow-soft transition-all"
                    >
                      <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center mr-3`}>
                        <action.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{action.title}</p>
                        <p className="text-xs text-muted-foreground">{action.description}</p>
                      </div>
                    </Button>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="shadow-soft border-card-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-3 rounded-lg border border-card-border hover:shadow-soft transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-foreground">{event.title}</p>
                      <p className="text-xs text-muted-foreground mb-1">{event.location}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {event.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{event.date}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Research Progress */}
            <Card className="shadow-soft border-card-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Research Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Annual Publications Goal</span>
                    <span className="text-sm text-muted-foreground">8/10</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Active Collaborations</span>
                    <span className="text-sm text-muted-foreground">24/30</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Research Impact Score</span>
                    <span className="text-sm text-muted-foreground">1.2k</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;