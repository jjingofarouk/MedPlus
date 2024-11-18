import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Button from "./ui/button";
import TextArea from "./ui/textarea";
import ScrollArea from "./ui/scroll-area";
import { FileText, PenTool, Save } from 'lucide-react';

const CME = () => {
  const [caseStudies, setCaseStudies] = useState([
    { 
      id: 1, 
      title: "Esophageal Carcinoma",
      description: "Detailed case study on esophageal carcinoma...",
      tags: ["Oncology", "Surgery"],
      content: `
        <h3>Esophageal Carcinoma Overview</h3>
        <p>Esophageal carcinoma is a type of cancer that occurs in the esophagus.</p>
        <h4>Symptoms:</h4>
        <ul>
          <li>Difficulties swallowing</li>
          <li>Weight loss</li>
          <li>Chest pain</li>
        </ul>
        <h4>Treatment Options:</h4>
        <p>Treatment may include surgery, radiation therapy, and chemotherapy.</p>
      `,
      discussion: [],
    },
    { 
      id: 2, 
      title: "Chronic Osteomyelitis",
      description: "In-depth overview of chronic osteomyelitis...",
      tags: ["Orthopedics", "Infections"],
      content: `
        <h3>Chronic Osteomyelitis Overview</h3>
        <p>Chronic osteomyelitis is a persistent infection of the bone.</p>
        <h4>Causes:</h4>
        <ul>
          <li>Direct infection from trauma</li>
          <li>Spread from nearby infections</li>
        </ul>
        <h4>Management:</h4>
        <p>Management may involve antibiotics and surgical intervention.</p>
      `,
      discussion: [],
    },
  ]);
  
  const [selectedCase, setSelectedCase] = useState(null);
  const [newComment, setNewComment] = useState('');

  const handleSelectCase = (id) => {
    const caseStudy = caseStudies.find(c => c.id === id);
    setSelectedCase(caseStudy);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const updatedCases = caseStudies.map(c => {
        if (c.id === selectedCase.id) {
          return {
            ...c,
            discussion: [...c.discussion, { id: Date.now(), text: newComment }]
          };
        }
        return c;
      });
      setCaseStudies(updatedCases);
      setSelectedCase({
        ...selectedCase,
        discussion: [...selectedCase.discussion, { id: Date.now(), text: newComment }]
      });
      setNewComment('');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Continuing Medical Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-1">
          <CardContent>
            <ScrollArea className="h-[300px]">
              {caseStudies.map(caseStudy => (
                <Button 
                  key={caseStudy.id} 
                  onClick={() => handleSelectCase(caseStudy.id)}
                  className="w-full justify-start mb-2"
                  variant={selectedCase && selectedCase.id === caseStudy.id ? "secondary" : "ghost"}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  {caseStudy.title}
                  <span className="ml-auto text-xs">{caseStudy.tags.join(', ')}</span>
                </Button>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
        
        {selectedCase && (
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>{selectedCase.title}</CardTitle>
              <CardDescription>{selectedCase.description}</CardDescription>
              <Button variant="ghost" className="ml-auto">
                <Save className="mr-2 h-4 w-4" />
                Save for Later
              </Button>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <div dangerouslySetInnerHTML={{ __html: selectedCase.content }} />
              </ScrollArea>
              <h4 className="mt-4 text-lg font-semibold">Discussion</h4>
              <ScrollArea className="h-[200px] mb-4">
                {selectedCase.discussion.map(comment => (
                  <Card key={comment.id} className="mb-2">
                    <CardContent className="pt-4">
                      {comment.text}
                    </CardContent>
                  </Card>
                ))}
              </ScrollArea>
              <TextArea
                placeholder="Add to the discussion..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <Button onClick={handleAddComment} className="mt-2">
                <PenTool className="mr-2 h-4 w-4" />
                Add Comment
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CME;
