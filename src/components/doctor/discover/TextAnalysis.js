import React, { useState, useEffect, useCallback } from 'react';
import { FaFileUpload, FaChartLine, FaCode, FaSave, FaFolder } from 'react-icons/fa';
import Chart from 'react-apexcharts';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import Button from '../ui/button';
import Input  from '../ui/input';
import  TextArea  from '../ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';

const TextAnalysis = () => {
  const [textData, setTextData] = useState('');
  const [analysisResults, setAnalysisResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [codes, setCodes] = useState([]);
  const [selectedText, setSelectedText] = useState('');
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);
  const [coOccurrenceMatrix, setCoOccurrenceMatrix] = useState({});
  const [wordFrequency, setWordFrequency] = useState({});
  const [notes, setNotes] = useState('');
  const [transcripts, setTranscripts] = useState([]);
  const [currentTranscript, setCurrentTranscript] = useState(null);

  useEffect(() => {
    // Load projects from localStorage on component mount
    const savedProjects = JSON.parse(localStorage.getItem('textAnalysisProjects')) || [];
    setProjects(savedProjects);
  }, []);

  const saveProject = useCallback(() => {
    if (currentProject) {
      const updatedProjects = projects.map(p => 
        p.id === currentProject.id ? { ...p, textData, codes, analysisResults, notes, transcripts } : p
      );
      setProjects(updatedProjects);
      localStorage.setItem('textAnalysisProjects', JSON.stringify(updatedProjects));
    } else {
      const newProject = {
        id: Date.now(),
        name: `Project ${projects.length + 1}`,
        textData,
        codes,
        analysisResults,
        notes,
        transcripts
      };
      setProjects([...projects, newProject]);
      setCurrentProject(newProject);
      localStorage.setItem('textAnalysisProjects', JSON.stringify([...projects, newProject]));
    }
  }, [currentProject, projects, textData, codes, analysisResults, notes, transcripts]);

  const loadProject = (project) => {
    setCurrentProject(project);
    setTextData(project.textData);
    setCodes(project.codes);
    setAnalysisResults(project.analysisResults);
    setNotes(project.notes);
    setTranscripts(project.transcripts);
  };

  const analyzeText = async () => {
    if (!textData) return;

    setLoading(true);
    console.log("Analyzing text data...");

    // Simulate an API call or complex analysis logic
    setTimeout(() => {
      const results = performAnalysis(textData);
      setAnalysisResults(results);
      setLoading(false);
    }, 1000);
  };

  const performAnalysis = (text) => {
    const wordCount = text.split(' ').length;
    const sentimentData = analyzeSentiment(text);
    const keywords = extractKeywords(text);
    const emotions = analyzeEmotions(text);
    const readabilityScore = calculateReadabilityScore(text);
    const topicModeling = performTopicModeling(text);
    
    updateWordFrequency(text);
    updateCoOccurrenceMatrix(text);

    return { wordCount, sentimentData, keywords, emotions, readabilityScore, topicModeling };
  };

  const analyzeSentiment = (text) => {
    const sentimentScore = Math.random() * 100;
    const sentimentTrend = Array.from({ length: 5 }, () => Math.random() * 100);
    return { score: sentimentScore, trend: sentimentTrend };
  };

  const analyzeEmotions = (text) => {
    return {
      joy: Math.random() * 100,
      anger: Math.random() * 100,
      sadness: Math.random() * 100,
      fear: Math.random() * 100,
      surprise: Math.random() * 100,
    };
  };

  const extractKeywords = (text) => {
    const words = text.split(' ').filter(word => word.length > 4);
    return [...new Set(words)].slice(0, 10);
  };

  const calculateReadabilityScore = (text) => {
    // Simple Flesch-Kincaid readability score simulation
    return Math.floor(Math.random() * 100);
  };

  const performTopicModeling = (text) => {
    // Simulate topic modeling
    return [
      { topic: "Education", keywords: ["school", "learning", "students"] },
      { topic: "Technology", keywords: ["computer", "internet", "software"] },
      { topic: "Health", keywords: ["medical", "treatment", "patients"] },
    ];
  };

  const updateWordFrequency = (text) => {
    const words = text.toLowerCase().match(/\b(\w+)\b/g);
    const frequency = words.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});
    setWordFrequency(frequency);
  };

  const updateCoOccurrenceMatrix = (text) => {
    const words = text.toLowerCase().match(/\b(\w+)\b/g);
    const matrix = {};
    for (let i = 0; i < words.length - 1; i++) {
      if (!matrix[words[i]]) matrix[words[i]] = {};
      matrix[words[i]][words[i+1]] = (matrix[words[i]][words[i+1]] || 0) + 1;
    }
    setCoOccurrenceMatrix(matrix);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setTextData(e.target.result);
    };

    if (file) {
      reader.readAsText(file);
    }
  };

  const addCode = (code) => {
    if (code && !codes.includes(code)) {
      setCodes([...codes, code]);
    }
  };

  const removeCode = (code) => {
    setCodes(codes.filter(c => c !== code));
  };

  const handleTextSelection = () => {
    const selection = window.getSelection();
    setSelectedText(selection.toString());
  };

  const addTranscript = (name, content) => {
    setTranscripts([...transcripts, { name, content }]);
  };

  const exportData = () => {
    const dataStr = JSON.stringify({ textData, codes, analysisResults, notes, transcripts });
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'text_analysis_export.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="text-analysis p-4">
      <h2 className="text-2xl font-bold mb-4">Advanced Text Analysis</h2>
      <p className="text-gray-600 mb-4">Analyze textual data from interviews, focus groups, and more.</p>
      
      <Tabs defaultValue="input" className="w-full">
        <TabsList>
          <TabsTrigger value="input">Input</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
          <TabsTrigger value="coding">Coding</TabsTrigger>
          <TabsTrigger value="visualization">Visualization</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="input">
          <Card>
            <CardHeader>
              <CardTitle>Text Input</CardTitle>
              <CardDescription>Upload a file or paste your text data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Input type="file" onChange={handleFileUpload} accept=".txt,.doc,.docx" />
              </div>
              <TextArea
                value={textData}
                onChange={(e) => setTextData(e.target.value)}
                placeholder="Paste your text data here..."
                rows={10}
                className="w-full"
              />
            </CardContent>
            <CardFooter>
              <Button onClick={analyzeText} disabled={loading}>
                {loading ? 'Analyzing...' : 'Analyze Text'}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="analysis">
          {analysisResults && (
            <Card>
              <CardHeader>
                <CardTitle>Analysis Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Word Count: {analysisResults.wordCount}</p>
                <p>Sentiment Score: {analysisResults.sentimentData.score.toFixed(2)}</p>
                <p>Readability Score: {analysisResults.readabilityScore}</p>
                <p>Keywords: {analysisResults.keywords.join(', ')}</p>
                <h4 className="font-semibold mt-4">Emotions:</h4>
                <ul>
                  {Object.entries(analysisResults.emotions).map(([emotion, score]) => (
                    <li key={emotion}>{emotion.charAt(0).toUpperCase() + emotion.slice(1)}: {score.toFixed(2)}</li>
                  ))}
                </ul>
                <h4 className="font-semibold mt-4">Topic Modeling:</h4>
                <ul>
                  {analysisResults.topicModeling.map((topic, index) => (
                    <li key={index}>{topic.topic}: {topic.keywords.join(', ')}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="coding">
          <Card>
            <CardHeader>
              <CardTitle>Coding</CardTitle>
              <CardDescription>Add codes and annotate your text</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2 mb-4">
                <Input
                  type="text"
                  placeholder="Enter new code"
                  onKeyPress={(e) => e.key === 'Enter' && addCode(e.target.value)}
                />
                <Button onClick={() => addCode(document.querySelector('input[type="text"]').value)}>
                  Add Code
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {codes.map((code, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {code}
                    <button onClick={() => removeCode(code)} className="ml-2 text-red-500">×</button>
                  </span>
                ))}
              </div>
              <TextArea
                value={textData}
                onChange={(e) => setTextData(e.target.value)}
                onMouseUp={handleTextSelection}
                rows={10}
                className="w-full mb-4"
              />
              {selectedText && (
                <Alert>
                  <AlertTitle>Selected Text</AlertTitle>
                  <AlertDescription>{selectedText}</AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visualization">
          <Card>
            <CardHeader>
              <CardTitle>Visualizations</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart
                options={{
                  chart: { id: 'sentiment-score-chart' },
                  xaxis: { categories: ['Sentiment Score', 'Joy', 'Anger', 'Sadness', 'Fear', 'Surprise'] },
                }}
                series={[{
                  name: 'Score',
                  data: analysisResults ? [
                    analysisResults.sentimentData.score,
                    analysisResults.emotions.joy,
                    analysisResults.emotions.anger,
                    analysisResults.emotions.sadness,
                    analysisResults.emotions.fear,
                    analysisResults.emotions.surprise,
                  ] : [],
                }]}
                type="bar"
                height={350}
              />
              <Chart
                options={{
                  chart: { id: 'sentiment-trend-chart' },
                  xaxis: { categories: Array.from({ length: 5 }, (_, index) => `Day ${index + 1}`) },
                }}
                series={[{
                  name: 'Sentiment Trend',
                  data: analysisResults ? analysisResults.sentimentData.trend : [],
                }]}
                type="line"
                height={350}
              />
              <Chart
                options={{
                  chart: { id: 'word-frequency-chart' },
                  xaxis: { categories: Object.keys(wordFrequency).slice(0, 10) },
                }}
                series={[{
                  name: 'Frequency',
                  data: Object.values(wordFrequency).slice(0, 10),
                }]}
                type="bar"
                height={350}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects">
          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
              <CardDescription>Manage your analysis projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2 mb-4">
                <Button onClick={saveProject}>
                  <FaSave className="mr-2" /> Save Project
                </Button>
                <Button onClick={exportData}>
                  <FaFolder className="mr-2" /> Export Data
                </Button>
              </div>
              <h4 className="font-semibold mb-2">Saved Projects:</h4>
              <ul>
                {projects.map((project) => (
                  <li key={project.id} className="mb-2">
                    <Button onClick={() => loadProject(project)} variant="outline">
                      {project.name}
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Notes</CardTitle>
        </CardHeader>
        <CardContent>
        <TextArea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add your research notes here..."
            rows={5}
            className="w-full"
          />
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Transcripts</CardTitle>
          <CardDescription>Manage and analyze multiple transcripts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-4">
            <Input
              type="text"
              placeholder="Transcript Name"
              id="transcriptName"
            />
            <Button onClick={() => {
              const name = document.getElementById('transcriptName').value;
              if (name) addTranscript(name, '');
            }}>
              Add Transcript
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Transcript List:</h4>
              <ul>
                {transcripts.map((transcript, index) => (
                  <li key={index} className="mb-2">
                    <Button
                      onClick={() => setCurrentTranscript(transcript)}
                      variant={currentTranscript === transcript ? "default" : "outline"}
                    >
                      {transcript.name}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {currentTranscript && (
                <>
                  <h4 className="font-semibold mb-2">Edit Transcript: {currentTranscript.name}</h4>
                  <TextArea
                    value={currentTranscript.content}
                    onChange={(e) => {
                      const updatedTranscripts = transcripts.map(t =>
                        t === currentTranscript ? {...t, content: e.target.value} : t
                      );
                      setTranscripts(updatedTranscripts);
                      setCurrentTranscript({...currentTranscript, content: e.target.value});
                    }}
                    rows={10}
                    className="w-full"
                  />
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Advanced Analysis</CardTitle>
          <CardDescription>Perform advanced text analysis techniques</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Named Entity Recognition</h4>
              <Button onClick={() => performNER(textData)}>
                Perform NER
              </Button>
              {/* Display NER results here */}
            </div>
            <div>
              <h4 className="font-semibold mb-2">Text Classification</h4>
              <Button onClick={() => performTextClassification(textData)}>
                Classify Text
              </Button>
              {/* Display classification results here */}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Collaboration</CardTitle>
          <CardDescription>Collaborate with team members</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input type="text" placeholder="Invite team member (email)" />
            <Button className="mt-2">Send Invitation</Button>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Comments</h4>
            {/* Add a comment system here */}
            <TextArea placeholder="Add a comment..." rows={3} className="w-full mb-2" />
            <Button>Post Comment</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Export Options</CardTitle>
          <CardDescription>Export your analysis in various formats</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Button onClick={() => exportToPDF()}>
              Export to PDF
            </Button>
            <Button onClick={() => exportToCSV()}>
              Export to CSV
            </Button>
            <Button onClick={() => exportToJSON()}>
              Export to JSON
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Additional functions to implement
const performNER = (text) => {
  // Implement Named Entity Recognition logic
  console.log("Performing NER on:", text);
  // Return NER results
};

const performTextClassification = (text) => {
  // Implement text classification logic
  console.log("Classifying text:", text);
  // Return classification results
};

const exportToPDF = () => {
  // Implement PDF export logic
  console.log("Exporting to PDF");
};

const exportToCSV = () => {
  // Implement CSV export logic
  console.log("Exporting to CSV");
};

const exportToJSON = () => {
  // Implement JSON export logic
  console.log("Exporting to JSON");
};

export default TextAnalysis;