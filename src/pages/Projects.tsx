import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Users, Calendar, MoreHorizontal, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Global Climate Monitoring Network',
      description: 'Building a worldwide network for real-time climate data collection and analysis using IoT sensors and machine learning.',
      status: 'Active',
      progress: 75,
      collaborators: [
        { name: 'Dr. Maria Santos', avatar: '/placeholder-1.jpg' },
        { name: 'Prof. David Chen', avatar: '/placeholder-2.jpg' },
        { name: 'Dr. Sarah Johnson', avatar: '/placeholder-3.jpg' },
      ],
      deadline: '2024-12-31',
      domain: 'Climate Science'
    },
    {
      id: 2,
      title: 'AI for Ocean Conservation',
      description: 'Developing machine learning models to analyze satellite imagery for marine ecosystem protection and monitoring.',
      status: 'Active',
      progress: 45,
      collaborators: [
        { name: 'Prof. Lisa Rodriguez', avatar: '/placeholder-4.jpg' },
        { name: 'Dr. Ahmed Hassan', avatar: '/placeholder-5.jpg' },
      ],
      deadline: '2024-10-15',
      domain: 'Environmental AI'
    },
    {
      id: 3,
      title: 'Sustainable Computing Framework',
      description: 'Research project focused on reducing energy consumption in large-scale machine learning computations.',
      status: 'Completed',
      progress: 100,
      collaborators: [
        { name: 'Dr. James Wilson', avatar: '/placeholder-6.jpg' },
        { name: 'Dr. Emily Chang', avatar: '/placeholder-7.jpg' },
      ],
      deadline: '2024-06-30',
      domain: 'Sustainable Technology'
    },
    {
      id: 4,
      title: 'Blockchain Research Publishing',
      description: 'Pilot project to test decentralized publishing platform for peer-reviewed scientific papers.',
      status: 'Planning',
      progress: 15,
      collaborators: [
        { name: 'Dr. Michael Brown', avatar: '/placeholder-8.jpg' },
      ],
      deadline: '2025-03-31',
      domain: 'Blockchain Technology'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-500';
      case 'Completed': return 'bg-blue-500';
      case 'Planning': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Active': return 'default';
      case 'Completed': return 'secondary';
      case 'Planning': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Research Projects</h1>
            <p className="text-muted-foreground">
              Manage your collaborative research projects and track progress.
            </p>
          </div>
          <Button className="mt-4 lg:mt-0 hero-gradient text-white">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="hover-lift shadow-soft border-card-border h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <Badge variant={getStatusVariant(project.status)}>
                          {project.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm">
                        {project.description}
                      </CardDescription>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Project</DropdownMenuItem>
                        <DropdownMenuItem>Archive</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <Badge variant="outline" className="mb-3">
                      {project.domain}
                    </Badge>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <div className="flex -space-x-2">
                        {project.collaborators.slice(0, 3).map((collaborator, idx) => (
                          <Avatar key={idx} className="w-8 h-8 border-2 border-background">
                            <AvatarImage src={collaborator.avatar} alt={collaborator.name} />
                            <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                              {collaborator.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                        {project.collaborators.length > 3 && (
                          <div className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                            <span className="text-xs text-muted-foreground">
                              +{project.collaborators.length - 3}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(project.deadline).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button variant="outline" className="w-full">
                      {project.status === 'Completed' ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          View Results
                        </>
                      ) : (
                        'View Project'
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <Card className="shadow-medium border-card-border">
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
              <CardDescription>Summary of your research project portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">2</p>
                  <p className="text-sm text-muted-foreground">Active Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">1</p>
                  <p className="text-sm text-muted-foreground">Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-600">1</p>
                  <p className="text-sm text-muted-foreground">In Planning</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">15</p>
                  <p className="text-sm text-muted-foreground">Total Collaborators</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;