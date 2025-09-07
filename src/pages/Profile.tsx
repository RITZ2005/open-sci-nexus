import React from 'react';
import { motion } from 'framer-motion';
import { Edit, Mail, MapPin, Calendar, ExternalLink, Award, BookOpen, Users, TrendingUp, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';

const Profile = () => {
  const researchInterests = [
    'Machine Learning',
    'Climate Modeling',
    'Data Science',
    'Environmental AI',
    'Sustainable Computing',
    'Neural Networks'
  ];

  const publications = [
    {
      year: '2024',
      title: 'AI-Driven Climate Prediction Models: A Comprehensive Study',
      journal: 'Nature Climate Change',
      citations: 45,
      impact: 'High',
      link: '#'
    },
    {
      year: '2023',
      title: 'Sustainable Machine Learning Frameworks for Environmental Research',
      journal: 'Environmental Science & Technology',
      citations: 32,
      impact: 'Medium',
      link: '#'
    },
    {
      year: '2023',
      title: 'Collaborative Data Analysis in Climate Science',
      journal: 'Journal of Environmental Informatics',
      citations: 28,
      impact: 'Medium',
      link: '#'
    },
    {
      year: '2022',
      title: 'Deep Learning Applications in Weather Forecasting',
      journal: 'Atmospheric Research',
      citations: 67,
      impact: 'High',
      link: '#'
    }
  ];

  const projects = [
    {
      title: 'Global Climate Monitoring Network',
      status: 'Active',
      collaborators: 12,
      completion: 75,
      description: 'Building a worldwide network for real-time climate data collection and analysis using IoT sensors.',
      funding: '$2.5M NSF Grant'
    },
    {
      title: 'AI for Ocean Conservation',
      status: 'Completed',
      collaborators: 8,
      completion: 100,
      description: 'Developed machine learning models to analyze satellite imagery for marine ecosystem protection.',
      funding: '$1.2M EPA Grant'
    },
    {
      title: 'Sustainable Computing Initiative',
      status: 'Planning',
      collaborators: 5,
      completion: 15,
      description: 'Research project focused on reducing energy consumption in large-scale machine learning computations.',
      funding: 'Seeking Funding'
    }
  ];

  const skills = [
    { name: 'Machine Learning', level: 95 },
    { name: 'Data Analysis', level: 90 },
    { name: 'Climate Science', level: 88 },
    { name: 'Python/R', level: 92 },
    { name: 'Research Design', level: 85 },
    { name: 'Academic Writing', level: 90 }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Young Scientist Award',
      organization: 'International Climate Research Foundation',
      year: '2023'
    },
    {
      icon: BookOpen,
      title: 'Best Paper Award',
      organization: 'Environmental AI Conference',
      year: '2022'
    },
    {
      icon: Users,
      title: 'Collaboration Excellence',
      organization: 'Stanford Research Institute',
      year: '2021'
    }
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Profile Header - LinkedIn Style */}
        <Card className="shadow-medium border-card-border overflow-hidden">
          {/* Cover Photo */}
          <div className="h-48 bg-gradient-to-r from-primary to-primary-light relative">
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          
          <CardContent className="p-0">
            <div className="px-8 pb-8">
              {/* Profile Picture & Basic Info */}
              <div className="flex flex-col lg:flex-row items-start lg:items-end space-y-6 lg:space-y-0 lg:space-x-6 -mt-16">
                <div className="relative">
                  <Avatar className="w-32 h-32 border-4 border-background shadow-strong">
                    <AvatarImage src="/placeholder-profile.jpg" alt="Profile" />
                    <AvatarFallback className="text-3xl bg-primary text-primary-foreground font-bold">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background"></div>
                </div>
                
                <div className="flex-1 lg:pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold mb-1">Dr. Jane Doe</h1>
                      <p className="text-xl text-muted-foreground mb-2">Senior Research Scientist in Climate AI</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          Stanford University, CA
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-1" />
                          jane.doe@stanford.edu
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Member since 2022
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center text-primary font-medium">
                          <Users className="w-4 h-4 mr-1" />
                          24 Collaborators
                        </span>
                        <span className="flex items-center text-primary font-medium">
                          <BookOpen className="w-4 h-4 mr-1" />
                          8 Publications
                        </span>
                        <span className="flex items-center text-primary font-medium">
                          <Eye className="w-4 h-4 mr-1" />
                          1,247 Citations
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-3 mt-4 lg:mt-0">
                      <Button variant="outline" className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        Message
                      </Button>
                      <Button className="flex items-center bg-primary hover:bg-primary-dark">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio Section */}
              <div className="mt-6 p-6 bg-accent/50 rounded-lg">
                <h3 className="font-semibold mb-3 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  About
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Passionate researcher at the intersection of artificial intelligence and climate science. I lead 
                  interdisciplinary teams developing machine learning solutions for environmental challenges, with 
                  particular expertise in climate modeling and sustainable computing. My work has been published in 
                  top-tier journals and has influenced policy decisions at national and international levels.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Research Interests */}
            <Card className="shadow-soft border-card-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Research Interests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {researchInterests.map((interest) => (
                    <Badge key={interest} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="shadow-soft border-card-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Skills & Expertise
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="shadow-soft border-card-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Awards & Recognition
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <achievement.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{achievement.title}</p>
                      <p className="text-sm text-muted-foreground">{achievement.organization}</p>
                      <p className="text-xs text-muted-foreground">{achievement.year}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Middle & Right Columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Publications */}
            <Card className="shadow-medium border-card-border">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <BookOpen className="w-6 h-6 mr-2" />
                  Publications
                </CardTitle>
                <CardDescription>Recent research publications and impact metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {publications.map((pub, index) => (
                  <div key={index} className="p-4 rounded-lg border border-card-border hover:shadow-soft transition-all duration-200">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-base mb-1 hover:text-primary cursor-pointer">
                          {pub.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">{pub.journal}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <Badge variant="outline" className="text-xs">{pub.year}</Badge>
                          <span className="text-muted-foreground">{pub.citations} citations</span>
                          <Badge 
                            variant={pub.impact === 'High' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {pub.impact} Impact
                          </Badge>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-4">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Projects */}
            <Card className="shadow-medium border-card-border">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  Research Projects
                </CardTitle>
                <CardDescription>Current and completed collaborative research initiatives</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="p-4 rounded-lg border border-card-border hover:shadow-soft transition-all duration-200">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-base mb-1">{project.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                      </div>
                      <Badge variant={project.status === 'Active' ? 'default' : project.status === 'Completed' ? 'secondary' : 'outline'}>
                        {project.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{project.completion}%</span>
                      </div>
                      <Progress value={project.completion} className="h-2" />
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{project.collaborators} collaborators</span>
                        <span className="text-muted-foreground">{project.funding}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;