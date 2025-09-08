import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Edit, Mail, MapPin, Calendar, ExternalLink, Award, BookOpen, Users, TrendingUp, Eye, Plus, GraduationCap, FileText, Briefcase, Globe, Heart, MessageCircle, Languages } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';

const Profile = () => {
  const [editingSection, setEditingSection] = useState<string | null>(null);

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

  const education = [
    {
      degree: 'Ph.D. in Environmental Science',
      institution: 'Stanford University',
      period: '2018 - 2022',
      location: 'California, USA',
      description: 'Dissertation: "Machine Learning Applications in Climate Change Prediction"',
      gpa: '3.95/4.0',
      activities: ['Research Assistant', 'Teaching Assistant for Environmental Data Analysis']
    },
    {
      degree: 'M.S. in Computer Science',
      institution: 'MIT',
      period: '2016 - 2018',
      location: 'Massachusetts, USA',
      description: 'Specialization in Artificial Intelligence and Machine Learning',
      gpa: '3.87/4.0',
      activities: ['AI Research Lab', 'Graduate Student Council']
    },
    {
      degree: 'B.S. in Environmental Engineering',
      institution: 'UC Berkeley',
      period: '2012 - 2016',
      location: 'California, USA',
      description: 'Magna Cum Laude, Honors Program',
      gpa: '3.92/4.0',
      activities: ['Environmental Club President', 'Dean\'s List (4 years)']
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Machine Learning - Specialty',
      issuer: 'Amazon Web Services',
      issued: 'March 2024',
      expires: 'March 2027',
      credentialId: 'AWS-ML-2024-001',
      skills: ['Machine Learning', 'AWS', 'Data Science']
    },
    {
      title: 'Google Cloud Professional Data Engineer',
      issuer: 'Google Cloud',
      issued: 'January 2024',
      expires: 'January 2026',
      credentialId: 'GCP-DE-2024-002',
      skills: ['Data Engineering', 'Google Cloud Platform', 'Big Data']
    },
    {
      title: 'Project Management Professional (PMP)',
      issuer: 'Project Management Institute',
      issued: 'November 2023',
      expires: 'November 2026',
      credentialId: 'PMP-2023-003',
      skills: ['Project Management', 'Leadership', 'Strategic Planning']
    }
  ];

  const experience = [
    {
      title: 'Senior Research Scientist',
      company: 'Stanford Climate Research Institute',
      period: 'Jan 2022 - Present',
      location: 'Stanford, CA',
      type: 'Full-time',
      description: 'Leading research initiatives in AI-driven climate modeling and prediction systems.',
      achievements: [
        'Developed machine learning models improving climate prediction accuracy by 23%',
        'Published 8 peer-reviewed papers in top-tier journals',
        'Secured $2.5M in research funding from NSF and EPA'
      ]
    },
    {
      title: 'Research Associate',
      company: 'Environmental AI Lab, MIT',
      period: 'Jun 2020 - Dec 2021',
      location: 'Cambridge, MA',
      type: 'Part-time',
      description: 'Collaborated on developing sustainable computing frameworks for environmental research.',
      achievements: [
        'Co-authored breakthrough paper on energy-efficient ML algorithms',
        'Reduced computational energy consumption by 35% in climate models',
        'Mentored 5 graduate students in research methodologies'
      ]
    }
  ];

  const languages = [
    { language: 'English', proficiency: 'Native' },
    { language: 'Spanish', proficiency: 'Professional' },
    { language: 'Python', proficiency: 'Expert' },
    { language: 'R', proficiency: 'Advanced' }
  ];

  const volunteer = [
    {
      role: 'Science Mentor',
      organization: 'Girls Who Code',
      period: '2022 - Present',
      description: 'Mentoring young women in STEM fields and coding'
    },
    {
      role: 'Environmental Consultant',
      organization: 'Local Climate Action Group',
      period: '2021 - Present',
      description: 'Providing scientific expertise for community climate initiatives'
    }
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

  const renderEditButton = (sectionName: string) => (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setEditingSection(sectionName)}
      className="opacity-0 group-hover:opacity-100 transition-opacity"
    >
      <Edit className="w-4 h-4" />
    </Button>
  );

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
            <Card className="shadow-soft border-card-border group">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Research Interests
                </CardTitle>
                {renderEditButton('interests')}
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
            <Card className="shadow-soft border-card-border group">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Skills & Expertise
                </CardTitle>
                {renderEditButton('skills')}
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

            {/* Languages */}
            <Card className="shadow-soft border-card-border group">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg flex items-center">
                  <Languages className="w-5 h-5 mr-2" />
                  Languages
                </CardTitle>
                {renderEditButton('languages')}
              </CardHeader>
              <CardContent className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm font-medium">{lang.language}</span>
                    <Badge variant="outline" className="text-xs">{lang.proficiency}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="shadow-soft border-card-border group">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Awards & Recognition
                </CardTitle>
                {renderEditButton('awards')}
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
            {/* Experience */}
            <Card className="shadow-medium border-card-border group">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl flex items-center">
                    <Briefcase className="w-6 h-6 mr-2" />
                    Experience
                  </CardTitle>
                  <CardDescription>Professional work experience and positions</CardDescription>
                </div>
                {renderEditButton('experience')}
              </CardHeader>
              <CardContent className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-muted last:border-l-0">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                    <div className="space-y-2">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <h4 className="font-semibold text-lg">{exp.title}</h4>
                          <p className="text-primary font-medium">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">{exp.location} • {exp.type}</p>
                        </div>
                        <Badge variant="outline" className="text-xs w-fit">{exp.period}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                      <ul className="space-y-1 text-sm">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="shadow-medium border-card-border group">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl flex items-center">
                    <GraduationCap className="w-6 h-6 mr-2" />
                    Education
                  </CardTitle>
                  <CardDescription>Academic background and qualifications</CardDescription>
                </div>
                {renderEditButton('education')}
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-muted last:border-l-0">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                    <div className="space-y-2">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <h4 className="font-semibold text-lg">{edu.degree}</h4>
                          <p className="text-primary font-medium">{edu.institution}</p>
                          <p className="text-sm text-muted-foreground">{edu.location}</p>
                        </div>
                        <Badge variant="outline" className="text-xs w-fit">{edu.period}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{edu.description}</p>
                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                        <span>GPA: {edu.gpa}</span>
                        <span>Activities: {edu.activities.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Licenses & Certifications */}
            <Card className="shadow-medium border-card-border group">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl flex items-center">
                    <FileText className="w-6 h-6 mr-2" />
                    Licenses & Certifications
                  </CardTitle>
                  <CardDescription>Professional certifications and credentials</CardDescription>
                </div>
                {renderEditButton('certifications')}
              </CardHeader>
              <CardContent className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-4 rounded-lg border border-card-border hover:shadow-soft transition-all duration-200">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-base mb-1">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                          <span>Issued: {cert.issued}</span>
                          <span>Expires: {cert.expires}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Credential ID: {cert.credentialId}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {cert.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
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

            {/* Volunteer Experience */}
            <Card className="shadow-medium border-card-border group">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl flex items-center">
                    <Heart className="w-6 h-6 mr-2" />
                    Volunteer Experience
                  </CardTitle>
                  <CardDescription>Community involvement and volunteer work</CardDescription>
                </div>
                {renderEditButton('volunteer')}
              </CardHeader>
              <CardContent className="space-y-4">
                {volunteer.map((vol, index) => (
                  <div key={index} className="p-4 rounded-lg border border-card-border">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-base">{vol.role}</h4>
                        <p className="text-primary font-medium text-sm">{vol.organization}</p>
                        <p className="text-xs text-muted-foreground mb-2">{vol.period}</p>
                        <p className="text-sm text-muted-foreground">{vol.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Publications */}
            <Card className="shadow-medium border-card-border group">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl flex items-center">
                    <BookOpen className="w-6 h-6 mr-2" />
                    Publications
                  </CardTitle>
                  <CardDescription>Recent research publications and impact metrics</CardDescription>
                </div>
                {renderEditButton('publications')}
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
            <Card className="shadow-medium border-card-border group">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl flex items-center">
                    <Users className="w-6 h-6 mr-2" />
                    Research Projects
                  </CardTitle>
                  <CardDescription>Current and completed collaborative research initiatives</CardDescription>
                </div>
                {renderEditButton('projects')}
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