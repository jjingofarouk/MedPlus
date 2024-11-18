import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaRobot, FaUpload, FaVideo, FaLanguage, FaUserMd, FaFileAlt, FaBalanceScale, FaShieldAlt, FaCalendarCheck, FaStar, FaBook } from 'react-icons/fa';
import Button from './ui/button';
import Input from './ui/input'; // Use default export
import './SecondOpinionComponent.css';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from './ui/select';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from './ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/Progress';

const SecondOpinionsLink = () => {
  const [specialists, setSpecialists] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('');
  const [matchedSpecialists, setMatchedSpecialists] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [opinions, setOpinions] = useState([]);
  const [insuranceVerification, setInsuranceVerification] = useState(null);
  const [anonymizedSubmission, setAnonymizedSubmission] = useState(false);
  const [followUps, setFollowUps] = useState([]);
  const [specialistRatings, setSpecialistRatings] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        fetchSpecialists(),
        fetchInsuranceVerification(),
        fetchFollowUps(),
        fetchSpecialistRatings(),
      ]);
      setLoading(false);
    };
    
    fetchData();
  }, []);

  const fetchSpecialists = async () => {
    const response = await fetch('/api/specialists');
    const data = await response.json();
    setSpecialists(data);
  };

  const fetchInsuranceVerification = async () => {
    const response = await fetch('/api/insurance-verification');
    const data = await response.json();
    setInsuranceVerification(data);
  };

  const fetchFollowUps = async () => {
    const response = await fetch('/api/follow-ups');
    const data = await response.json();
    setFollowUps(data);
  };

  const fetchSpecialistRatings = async () => {
    const response = await fetch('/api/specialist-ratings');
    const data = await response.json();
    setSpecialistRatings(data);
  };

  const handleSearch = () => {
    const filtered = specialists.filter(specialist =>
      specialist.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedSpecialty === '' || specialist.specialty === selectedSpecialty) &&
      (selectedCondition === '' || specialist.conditions.includes(selectedCondition))
    );
    setMatchedSpecialists(filtered);
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(prevFiles => [...prevFiles, ...files]);
  };

  const startVideoConsultation = (specialistId) => {
    console.log(`Starting video consultation with specialist ${specialistId}`);
  };

  const submitAnonymizedCase = () => {
    setAnonymizedSubmission(true);
    console.log('Submitting anonymized case');
  };

  const scheduleFollowUp = (specialistId) => {
    console.log(`Scheduling follow-up with specialist ${specialistId}`);
  };

  const rateSpecialist = (specialistId, rating) => {
    setSpecialistRatings(prevRatings => ({
      ...prevRatings,
      [specialistId]: rating
    }));
  };


  return (
    <motion.div
      className="second-opinion-container p-6 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Second Opinion Platform</h2>

      <Tabs defaultValue="search" className="mb-6">
        <TabsList>
          <TabsTrigger value="search">File Upload</TabsTrigger>
          <TabsTrigger value="ai-match">Search Specialists</TabsTrigger>
          <TabsTrigger value="opinions">AI Matching</TabsTrigger>
          <TabsTrigger value="education">My Opinions</TabsTrigger>
        </TabsList>

        <TabsContent value="search">
          <SearchSpecialist
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedSpecialty={selectedSpecialty}
            setSelectedSpecialty={setSelectedSpecialty}
            selectedCondition={selectedCondition}
            setSelectedCondition={setSelectedCondition}
            handleSearch={handleSearch}
          />
          <SpecialistTable matchedSpecialists={matchedSpecialists} startVideoConsultation={startVideoConsultation} specialistRatings={specialistRatings} />
        </TabsContent>

        <TabsContent value="ai-match">
          <AiMatching />
        </TabsContent>

        <TabsContent value="opinions">
          <MyOpinions opinions={opinions} scheduleFollowUp={scheduleFollowUp} />
        </TabsContent>

        <TabsContent value="education">
          <EducationResources />
        </TabsContent>
      </Tabs>

      <FileUploadSection uploadedFiles={uploadedFiles} handleFileUpload={handleFileUpload} />
      <InsuranceVerification insuranceVerification={insuranceVerification} />
      <CollaborationTools 
        submitAnonymizedCase={submitAnonymizedCase} 
        selectedLanguage={selectedLanguage} 
        setSelectedLanguage={setSelectedLanguage} 
      />
      <UpcomingFollowUps followUps={followUps} />
    </motion.div>
  );
};

// Sub-components

const SearchSpecialist = ({ searchQuery, setSearchQuery, selectedSpecialty, setSelectedSpecialty, selectedCondition, setSelectedCondition, handleSearch }) => (
  <div className="flex space-x-4 mb-4">
    <Input
      type="text"
      placeholder="Search specialists"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <Select onValueChange={setSelectedSpecialty}>
      <SelectTrigger>
        <SelectValue placeholder="Select specialty" />
      </SelectTrigger>
      <SelectContent>
        {/* Add specialty options */}
      </SelectContent>
    </Select>
    <Select onValueChange={setSelectedCondition}>
      <SelectTrigger>
        <SelectValue placeholder="Select condition" />
      </SelectTrigger>
      <SelectContent>
        {/* Add condition options */}
      </SelectContent>
    </Select>
    <Button onClick={handleSearch}>
      <FaSearch className="mr-2" /> Search
    </Button>
  </div>
);

const SpecialistTable = ({ matchedSpecialists, startVideoConsultation, specialistRatings }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Specialty</TableHead>
        <TableHead>Rating</TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {matchedSpecialists.map(specialist => (
        <TableRow key={specialist.id}>
          <TableCell>{specialist.name}</TableCell>
          <TableCell>{specialist.specialty}</TableCell>
          <TableCell>{specialistRatings[specialist.id] || 'N/A'}</TableCell>
          <TableCell>
            <Button onClick={() => startVideoConsultation(specialist.id)}>
              <FaVideo className="mr-2" /> Consult
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const AiMatching = () => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-xl font-semibold mb-4">AI-Powered Specialist Matching</h3>
    <p className="mb-4">Our AI system will analyze your case and match you with the most relevant specialists.</p>
    <Button>
      <FaRobot className="mr-2" /> Start AI Matching
    </Button>
  </div>
);

const MyOpinions = ({ opinions, scheduleFollowUp }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-xl font-semibold mb-4">My Second Opinions</h3>
    {opinions.map(opinion => (
      <div key={opinion.id} className="mb-4 p-4 border rounded">
        <h4 className="font-semibold">{opinion.specialistName}</h4>
        <p>{opinion.summary}</p>
        <Button onClick={() => scheduleFollowUp(opinion.specialistId)}>
          <FaCalendarCheck className="mr-2" /> Schedule Follow-up
        </Button>
      </div>
    ))}
  </div>
);

const EducationResources = () => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-xl font-semibold mb-4">Educational Resources</h3>
    <ul className="list-disc list-inside">
      <li>When to Seek a Second Opinion</li>
      <li>How to Prepare for Your Second Opinion Consultation</li>
      <li>Understanding Different Medical Specialties</li>
      <li>Interpreting Medical Reports and Test Results</li>
    </ul>
  </div>
);

const FileUploadSection = ({ uploadedFiles, handleFileUpload }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4">Upload File</h3>
      <Input type="file" multiple onChange={handleFileUpload} />
      <ul className="mt-4">
        {uploadedFiles.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  </div>
);

const InsuranceVerification = ({ insuranceVerification }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4">Insurance Verification</h3>
      {insuranceVerification ? (
        <div>
          <p>Status: {insuranceVerification.status}</p>
          <p>Coverage: {insuranceVerification.coverage}</p>
        </div>
      ) : (
        <p>Verifying insurance coverage...</p>
      )}
    </div>
  </div>
);

const CollaborationTools = ({ submitAnonymizedCase, selectedLanguage, setSelectedLanguage }) => (
  <div className="mt-6">
    <h3 className="text-xl font-semibold mb-4">Collaboration Tools</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Button onClick={submitAnonymizedCase}>
        <FaShieldAlt className="mr-2" /> Submit Anonymized Case
      </Button>
      <Select onValueChange={setSelectedLanguage}>
        <SelectTrigger>
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="es">Swahilli</SelectItem>
          <SelectItem value="fr">Luganda</SelectItem>
          {/* Add more language options */}
        </SelectContent>
      </Select>
    </div>
  </div>
);

const UpcomingFollowUps = ({ followUps }) => (
  <div className="mt-6">
    <h3 className="text-xl font-semibold mb-4">Upcoming Follow-ups</h3>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Specialist</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {followUps.map(followUp => (
          <TableRow key={followUp.id}>
            <TableCell>{followUp.specialistName}</TableCell>
            <TableCell>{followUp.date}</TableCell>
            <TableCell>
              <Button variant="outline">Reschedule</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default SecondOpinionsLink;
