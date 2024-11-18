import React, { useState, useEffect } from 'react';
import { Search, Book, Video, FileText, Image, Award, Star, ThumbsUp, MessageCircle, BarChart2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import  Progress  from "../ui/Progress";
import  Button  from "../ui/button";
import  Input  from "../ui/input";
import  Badge  from "../ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import './PatientEducation.css';

const PatientEducation = () => {
  const [educationMaterials, setEducationMaterials] = useState([
    { 
      id: 1,
      title: 'Managing Diabetes', 
      type: 'Video',
      category: 'Chronic Diseases',
      views: 2000,
      likes: 150,
      completions: 500,
      duration: '45 minutes',
      content: 'A comprehensive guide on managing diabetes effectively.',
      videoUrl: 'https://www.example.com/diabetes-video',
      instructor: 'Dr. Jane Smith',
      quiz: [
        { question: 'What is the normal blood sugar range?', options: ['70-130 mg/dL', '140-200 mg/dL', '200-300 mg/dL'], correctAnswer: 0 },
        { question: 'How often should a diabetic check their blood sugar?', options: ['Once a week', 'Once a day', 'As recommended by their doctor'], correctAnswer: 2 },
      ]
    },
    { 
      id: 2,
      title: 'Heart Health Basics', 
      type: 'Article',
      category: 'Cardiovascular Health',
      views: 1500,
      likes: 120,
      completions: 400,
      duration: '20 minutes read',
      content: 'Essential information about heart health and prevention.',
      articleContent: `
        <h2>Understanding Heart Health</h2>
        <p>Your heart is a vital organ that pumps blood throughout your body. Keeping it healthy is crucial for overall well-being.</p>
        <h3>Key Factors for Heart Health:</h3>
        <ul>
          <li>Regular exercise</li>
          <li>Balanced diet</li>
          <li>Stress management</li>
          <li>Adequate sleep</li>
        </ul>
        <p>By maintaining these habits, you can significantly reduce your risk of heart disease.</p>
      `,
      instructor: 'Dr. Michael Johnson',
      quiz: [
        { question: 'What is a normal resting heart rate for adults?', options: ['40-60 bpm', '60-100 bpm', '100-120 bpm'], correctAnswer: 1 },
        { question: 'Which of these is NOT a risk factor for heart disease?', options: ['Smoking', 'High blood pressure', 'Regular exercise'], correctAnswer: 2 },
      ]
    },
    { 
      id: 3,
      title: 'Nutrition and Wellness', 
      type: 'Infographic',
      category: 'General Health',
      views: 1000,
      likes: 90,
      completions: 300,
      duration: '10 minutes',
      content: 'Visual guide to nutrition and wellness.',
      imageUrl: '/api/placeholder/800/600',
      instructor: 'Nutritionist Sarah Lee',
      quiz: [
        { question: 'How many food groups are there in a balanced diet?', options: ['3', '5', '7'], correctAnswer: 1 },
        { question: 'Which nutrient is the bodys main source of energy?', options: ['Protein', 'Fat', 'Carbohydrates'], correctAnswer: 2 },
      ]
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedResource, setSelectedResource] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [userProgress, setUserProgress] = useState({});
  const [quizResults, setQuizResults] = useState({});

  useEffect(() => {
    // Simulating loading user progress from a backend
    const simulatedProgress = educationMaterials.reduce((acc, material) => {
      acc[material.id] = Math.floor(Math.random() * 101);
      return acc;
    }, {});
    setUserProgress(simulatedProgress);
  }, []);

  const filteredMaterials = educationMaterials.filter(material =>
    material.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (activeTab === 'all' || material.type.toLowerCase() === activeTab)
  );

  const handleResourceClick = (material) => {
    setSelectedResource(material);
  };

  const closeModal = () => {
    setSelectedResource(null);
  };

  const handleQuizSubmit = (resourceId, answers) => {
    const resource = educationMaterials.find(m => m.id === resourceId);
    const correctAnswers = answers.filter((answer, index) => answer === resource.quiz[index].correctAnswer).length;
    const score = (correctAnswers / resource.quiz.length) * 100;
    setQuizResults({...quizResults, [resourceId]: score});
  };

  const TypeIcon = ({ type }) => {
    switch(type.toLowerCase()) {
      case 'video': return <Video className="h-4 w-4" />;
      case 'article': return <FileText className="h-4 w-4" />;
      case 'infographic': return <Image className="h-4 w-4" />;
      default: return <Book className="h-4 w-4" />;
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Patient Education Portal</h1>
      <p className="text-lg mb-6">Enhance your health knowledge with our comprehensive educational resources.</p>
      
      <div className="flex items-center space-x-4 mb-6">
        <Search className="text-gray-400" />
        <Input
          type="text"
          placeholder="Search Resources..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="video">Videos</TabsTrigger>
          <TabsTrigger value="article">Articles</TabsTrigger>
          <TabsTrigger value="infographic">Infographics</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterials.map((material) => (
          <Card key={material.id} className="overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-center">
                <Badge variant="secondary">
                  <TypeIcon type={material.type} />
                  <span className="ml-1">{material.type}</span>
                </Badge>
                <Badge variant="outline">{material.category}</Badge>
              </div>
              <CardTitle className="mt-2">{material.title}</CardTitle>
              <CardDescription>{material.instructor}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">{material.content}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span><BarChart2 className="inline h-4 w-4 mr-1" /> {material.views} views</span>
                <span><ThumbsUp className="inline h-4 w-4 mr-1" /> {material.likes} likes</span>
                <span><Award className="inline h-4 w-4 mr-1" /> {material.completions} completions</span>
              </div>
              <Progress value={userProgress[material.id] || 0} className="w-full" />
              <p className="text-xs text-right mt-1">{userProgress[material.id] || 0}% complete</p>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full" onClick={() => handleResourceClick(material)}>
                    Start Learning
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>{material.title}</DialogTitle>
                    <DialogDescription>{material.instructor} | {material.duration}</DialogDescription>
                  </DialogHeader>
                  {material.type === 'Video' && (
                    <div className="aspect-video bg-gray-200 flex items-center justify-center">
                      <p>Video player placeholder</p>
                    </div>
                  )}
                  {material.type === 'Article' && (
                    <div className="prose max-w-none" dangerouslySetInnerHTML={{__html: material.articleContent}} />
                  )}
                  {material.type === 'Infographic' && (
                    <img src={material.imageUrl} alt={material.title} className="w-full h-auto" />
                  )}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-4">Quiz</h3>
                    {material.quiz.map((q, index) => (
                      <div key={index} className="mb-4">
                        <p className="font-medium mb-2">{q.question}</p>
                        {q.options.map((option, optionIndex) => (
                          <label key={optionIndex} className="flex items-center space-x-2 mb-2">
                            <input type="radio" name={`question-${index}`} value={optionIndex} />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    ))}
                    <Button onClick={() => handleQuizSubmit(material.id, [0, 1])}>Submit Quiz</Button>
                  </div>
                  {quizResults[material.id] !== undefined && (
                    <div className="mt-4">
                      <h4 className="font-semibold">Quiz Result</h4>
                      <p>You scored {quizResults[material.id]}%</p>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center">
        <Button variant="outline" onClick={() => alert('View all resources')}>View All Resources</Button>
        <Button onClick={() => alert('Add New Material')}>Add New Material</Button>
      </div>
    </div>
  );
};

export default PatientEducation;