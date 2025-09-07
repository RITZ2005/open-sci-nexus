import React from 'react';
import { motion } from 'framer-motion';
import { Edit, Mail, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const Profile = () => {
  const researchInterests = [
    'Machine Learning',
    'Climate Modeling',
    'Data Science',
    'Environmental AI',
    'Sustainable Computing'
  ];

  const publications = [
    {
      year: '2024',
      title: 'AI-Driven Climate Prediction Models: A Comprehensive Study',
      journal: 'Nature Climate Change',
      link: '#'
    },
    {
      year: '2023',
      title: 'Sustainable Machine Learning Frameworks for Environmental Research',
      journal: 'Environmental Science & Technology',
      link: '#'
    },
    {
      year: '2023',
      title: 'Collaborative Data Analysis in Climate Science',
      journal: 'Journal of Environmental Informatics',
      link: '#'
    }
  ];

  const projects = [
    {
      title: 'Global Climate Monitoring Network',
      status: 'Active',
      collaborators: 12,
      description: 'Building a worldwide network for real-time climate data collection and analysis.'
    },
    {
      title: 'AI for Ocean Conservation',
      status: 'Completed',
      collaborators: 8,
      description: 'Developing machine learning models to protect marine ecosystems.'
    }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Profile Header */}
        <Card className="shadow-medium border-card-border">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
              <Avatar className="w-32 h-32">
                <AvatarImage src="/placeholder-profile.jpg" alt="Profile" />
                <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                  JD
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">Dr. Jane Doe</h1>
                    <p className="text-lg text-muted-foreground mb-2">Senior Research Scientist</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-1" />
                        jane.doe@university.edu
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        Stanford University
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        Member since 2022
                      </div>
                    </div>
                  </div>
                  <Button className="mt-4 lg:mt-0">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Passionate researcher focused on applying artificial intelligence to solve climate challenges. 
                  I specialize in developing machine learning models for environmental data analysis and 
                  sustainable computing practices. Always looking for interdisciplinary collaborations 
                  that can make a meaningful impact on our planet's future.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Research Interests */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="shadow-soft border-card-border">
              <CardHeader>
                <CardTitle>Research Interests</CardTitle>
                <CardDescription>Areas of expertise and focus</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {researchInterests.map((interest) => (
                    <Badge key={interest} variant="secondary" className="hover-lift">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="shadow-soft border-card-border">
              <CardHeader>
                <CardTitle>Research Stats</CardTitle>
                <CardDescription>Your impact metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Publications</span>
                  <span className="font-medium">8</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Citations</span>
                  <span className="font-medium">1,247</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">H-Index</span>
                  <span className="font-medium">15</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Collaborators</span>
                  <span className="font-medium">24</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="shadow-soft border-card-border">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest research milestones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium">Paper accepted</p>
                  <p className="text-muted-foreground">Nature Climate Change</p>
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
                <Separator />
                <div className="text-sm">
                  <p className="font-medium">New collaboration</p>
                  <p className="text-muted-foreground">Dr. Maria Santos</p>
                  <p className="text-xs text-muted-foreground">1 week ago</p>
                </div>
                <Separator />
                <div className="text-sm">
                  <p className="font-medium">Project milestone</p>
                  <p className="text-muted-foreground">Climate Network Phase 2</p>
                  <p className="text-xs text-muted-foreground">2 weeks ago</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Publications and Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="shadow-medium border-card-border">
              <CardHeader>
                <CardTitle>Publications</CardTitle>
                <CardDescription>Recent research publications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {publications.map((pub, index) => (
                  <div key={index} className="p-4 rounded-lg bg-accent/30 hover-lift">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-sm mb-1">{pub.title}</p>
                        <p className="text-sm text-muted-foreground mb-2">{pub.journal}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{pub.year}</Badge>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="shadow-medium border-card-border">
              <CardHeader>
                <CardTitle>Ongoing Projects</CardTitle>
                <CardDescription>Current research collaborations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="p-4 rounded-lg bg-accent/30 hover-lift">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{project.title}</h4>
                      <Badge variant={project.status === 'Active' ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                    <p className="text-xs text-muted-foreground">
                      {project.collaborators} collaborators
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;