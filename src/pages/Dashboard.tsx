import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, FolderOpen, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const stats = [
    {
      title: 'Active Collaborators',
      value: '24',
      change: '+3 this week',
      icon: Users,
      color: 'text-collaboration'
    },
    {
      title: 'Published Papers',
      value: '8',
      change: '+2 this month',
      icon: FileText,
      color: 'text-publication'
    },
    {
      title: 'Ongoing Projects',
      value: '5',
      change: '2 nearing completion',
      icon: FolderOpen,
      color: 'text-research'
    },
    {
      title: 'Research Impact',
      value: '1.2k',
      change: '+15% citations',
      icon: TrendingUp,
      color: 'text-primary'
    }
  ];

  const recentActivity = [
    {
      action: 'New collaboration request',
      from: 'Dr. Maria Santos',
      domain: 'Climate Science',
      time: '2 hours ago'
    },
    {
      action: 'Paper published successfully',
      from: 'Blockchain Network',
      domain: 'AI Research',
      time: '1 day ago'
    },
    {
      action: 'Project milestone completed',
      from: 'Ocean Dynamics Team',
      domain: 'Environmental Science',
      time: '3 days ago'
    }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Dr. Jane Doe</h1>
            <p className="text-muted-foreground">Here's what's happening with your research today.</p>
          </div>
          <Button className="mt-4 lg:mt-0 hero-gradient text-white">
            Start New Project
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="hover-lift shadow-soft border-card-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="shadow-medium border-card-border">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Your latest research interactions and updates
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-accent/30 hover-lift">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.from}</p>
                      <div className="flex items-center justify-between mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {activity.domain}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="shadow-medium border-card-border">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Common tasks to accelerate your research
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start hover-lift">
                  <Users className="w-4 h-4 mr-2" />
                  Find New Collaborators
                </Button>
                <Button variant="outline" className="w-full justify-start hover-lift">
                  <FileText className="w-4 h-4 mr-2" />
                  Publish Research Paper
                </Button>
                <Button variant="outline" className="w-full justify-start hover-lift">
                  <FolderOpen className="w-4 h-4 mr-2" />
                  Create New Project
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;