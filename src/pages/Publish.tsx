import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, Loader2, CheckCircle, Hash } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';

const Publish = () => {
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishProgress, setPublishProgress] = useState(0);
  const [isPublished, setIsPublished] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    domain: '',
    keywords: '',
    file: null as File | null
  });

  const researchDomains = [
    'Artificial Intelligence',
    'Biology & Life Sciences',
    'Climate Science',
    'Computer Science',
    'Medicine & Healthcare',
    'Physics & Astronomy',
    'Chemistry',
    'Mathematics',
    'Environmental Science'
  ];

  const recentPublications = [
    {
      title: 'AI-Driven Climate Prediction Models: A Comprehensive Study',
      hash: '0x1a2b3c4d5e6f...',
      date: '2024-01-15',
      status: 'Published',
      citations: 12
    },
    {
      title: 'Sustainable Machine Learning Frameworks',
      hash: '0x9f8e7d6c5b4a...',
      date: '2023-11-22',
      status: 'Published',
      citations: 8
    },
    {
      title: 'Collaborative Data Analysis in Climate Science',
      hash: '0x5a4b3c2d1e0f...',
      date: '2023-09-10',
      status: 'Published',
      citations: 15
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      file
    }));
  };

  const handleDomainChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      domain: value
    }));
  };

  const handlePublish = async () => {
    setIsPublishing(true);
    setPublishProgress(0);

    // Simulate publishing process
    const steps = [
      { progress: 20, message: 'Validating document...' },
      { progress: 40, message: 'Generating hash...' },
      { progress: 60, message: 'Creating blockchain transaction...' },
      { progress: 80, message: 'Confirming on network...' },
      { progress: 100, message: 'Published successfully!' }
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setPublishProgress(step.progress);
    }

    setIsPublishing(false);
    setIsPublished(true);
  };

  if (isPublished) {
    return (
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="shadow-medium border-card-border text-center">
            <CardContent className="p-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500 flex items-center justify-center"
              >
                <CheckCircle className="w-10 h-10 text-white" />
              </motion.div>
              
              <h2 className="text-2xl font-bold mb-4">Publication Successful!</h2>
              <p className="text-muted-foreground mb-6">
                Your research has been successfully published on the blockchain and is now immutable and verifiable.
              </p>
              
              <div className="bg-accent/30 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center mb-2">
                  <Hash className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span className="text-sm font-medium">Transaction Hash</span>
                </div>
                <code className="text-sm bg-background px-3 py-1 rounded border">
                  0xabcd1234efgh5678ijkl9012mnop3456qrst7890uvwx1234yzab5678cdef
                </code>
              </div>
              
              <div className="flex gap-4 justify-center">
                <Button onClick={() => setIsPublished(false)}>
                  Publish Another
                </Button>
                <Button variant="outline">
                  View Publication
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Publish Research</h1>
            <p className="text-muted-foreground">
              Securely publish your research on the blockchain for transparent and immutable documentation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Publishing Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-medium border-card-border">
              <CardHeader>
                <CardTitle>Upload Research Document</CardTitle>
                <CardDescription>
                  Provide details about your research paper or dataset for blockchain publication
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {isPublishing ? (
                  <div className="text-center py-12">
                    <Loader2 className="w-12 h-12 mx-auto mb-4 animate-spin text-primary" />
                    <h3 className="text-lg font-medium mb-2">Publishing to Blockchain</h3>
                    <p className="text-muted-foreground mb-4">Please wait while we process your publication...</p>
                    <Progress value={publishProgress} className="max-w-xs mx-auto" />
                    <p className="text-sm text-muted-foreground mt-2">{publishProgress}% complete</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="title">Research Title</Label>
                      <Input
                        id="title"
                        name="title"
                        placeholder="Enter your research title..."
                        value={formData.title}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Abstract/Description</Label>
                      <Textarea
                        id="description"
                        name="description"
                        placeholder="Provide a brief abstract or description of your research..."
                        rows={4}
                        value={formData.description}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="domain">Research Domain</Label>
                        <Select onValueChange={handleDomainChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select domain" />
                          </SelectTrigger>
                          <SelectContent>
                            {researchDomains.map((domain) => (
                              <SelectItem key={domain} value={domain}>
                                {domain}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="keywords">Keywords</Label>
                        <Input
                          id="keywords"
                          name="keywords"
                          placeholder="machine learning, climate, AI..."
                          value={formData.keywords}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="file">Research Document</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                        <input
                          id="file"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <label htmlFor="file" className="cursor-pointer">
                          <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                          <p className="text-muted-foreground mb-2">
                            {formData.file ? formData.file.name : 'Click to upload or drag and drop'}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            PDF, DOC, or DOCX (max 10MB)
                          </p>
                        </label>
                      </div>
                    </div>

                    <Button 
                      onClick={handlePublish}
                      className="w-full hero-gradient text-white shadow-glow"
                      disabled={!formData.title || !formData.description || !formData.file}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Publish to Blockchain
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Recent Publications */}
          <div>
            <Card className="shadow-soft border-card-border">
              <CardHeader>
                <CardTitle>Recent Publications</CardTitle>
                <CardDescription>Your published research on blockchain</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentPublications.map((pub, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-4 rounded-lg bg-accent/30 hover-lift"
                  >
                    <h4 className="font-medium text-sm mb-2 line-clamp-2">{pub.title}</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{pub.status}</Badge>
                        <span className="text-xs text-muted-foreground">{pub.citations} citations</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <p>Hash: {pub.hash}</p>
                        <p>Published: {pub.date}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Publishing Benefits */}
            <Card className="shadow-soft border-card-border mt-6">
              <CardHeader>
                <CardTitle>Blockchain Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Immutable Records</p>
                    <p className="text-xs text-muted-foreground">Permanent, tamper-proof publication</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Transparent Process</p>
                    <p className="text-xs text-muted-foreground">Verifiable publication history</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Global Access</p>
                    <p className="text-xs text-muted-foreground">Accessible worldwide instantly</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Publish;