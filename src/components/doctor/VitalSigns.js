import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FaHeartbeat,
  FaThermometerHalf,
  FaLungs,
  FaTachometerAlt,
  FaTint,
  FaWeight,
  FaBell,
  FaShareAlt,
  FaMicrophone,
  FaCalendarPlus,
  FaBook,
} from 'react-icons/fa';
import {
  ResponsiveContainer,
  ComposedChart,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import { Line } from 'react-chartjs-2';  // Or Bar, Pie, etc., depending on your needs
import { Bar } from 'react-chartjs-2';  // Or Bar, Pie, etc., depending on your needs


import { Alert, AlertDescription } from './ui/alert';
import Button from './ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from './ui/dialog';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from './ui/select';
import Switch from './ui/switch';
import Input from './ui/input';

// Custom Card Component for each Vital Sign
const VitalSignCard = ({ icon, label, value, onAlertSettings }) => {
  return (
    <div className="vital-sign-card bg-white p-4 rounded-lg shadow flex items-center">
      <div className="vital-sign-icon mr-4">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold">{label}</h4>
        <p className="text-xl">{value}</p>
        {onAlertSettings && (
          <Button variant="ghost" size="sm" onClick={onAlertSettings}>
            <FaBell className="mr-2" /> Set Alert
          </Button>
        )}
      </div>
    </div>
  );
};

const Vitals = () => {
  // State Hooks
  const [vitalSigns, setVitalSigns] = useState({
    heartRate: 72,
    bloodPressure: { systolic: 112, diastolic: 87 },
    respiratoryRate: 18,
    oxygenSaturation: 99,
    bodyTemperature: 98.1,
    weight: 77,
    height: 179,
  });
  const [historicalData, setHistoricalData] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState('daily');
  const [healthGoals, setHealthGoals] = useState({
    targetHeartRate: { min: 60, max: 100 },
    targetBloodPressure: { systolic: { min: 90, max: 120 }, diastolic: { min: 60, max: 80 } },
    targetWeight: 68,
  });
  const [comparisonData, setComparisonData] = useState(null);
  const [isWearableConnected, setIsWearableConnected] = useState(false);
  const [predictiveAnalysis, setPredictiveAnalysis] = useState(null);
  const [showEducationalContent, setShowEducationalContent] = useState(false);
  const [selectedVitalSign, setSelectedVitalSign] = useState(null);
  const [transcript, setTranscript] = useState('');

  const speechRecognition = useRef(null);

  
  // Fetching data and setting up voice recognition
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/vital-signs');
        const data = await response.json();
        setVitalSigns(data.currentVitalSigns);
        setHistoricalData(data.historicalData);
        setPredictiveAnalysis(data.predictiveAnalysis);
        setComparisonData(data.comparisonData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setAlertMessage('Failed to fetch vital signs data. Please try again later.');
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);

    // Initialize speech recognition
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      speechRecognition.current = new SpeechRecognition();
      speechRecognition.current.continuous = false;
      speechRecognition.current.lang = 'en-US';
      speechRecognition.current.onresult = handleSpeechResult;
    }

    return () => clearInterval(interval);
  }, []);

  // Handlers and logic
  const calculateBMI = () => {
    const heightInMeters = vitalSigns.height / 100;
    const bmi = vitalSigns.weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(1);
  };

  const handleAlertSettings = (vitalSign) => {
    const min = prompt(`Set minimum value for ${vitalSign}:`);
    const max = prompt(`Set maximum value for ${vitalSign}:`);
    if (min && max) {
      console.log(`Alert settings for ${vitalSign}: Min ${min}, Max ${max}`);
    }
  };

  const handleWearableConnection = () => {
    setIsWearableConnected(!isWearableConnected);
    alert(`Wearable ${isWearableConnected ? 'disconnected' : 'connected'}`);
  };

  const handleShareData = () => {
    alert('Data securely shared with healthcare provider');
  };

  const handleGoalSetting = (goalType, value) => {
    setHealthGoals(prevGoals => ({ ...prevGoals, [goalType]: value }));
  };

  const handleSpeechResult = (event) => {
    const newTranscript = event.results[0][0].transcript;
    setTranscript(newTranscript);
    alert(`Voice command received: ${newTranscript}`);
  };

  const startVoiceLogging = () => {
    if (speechRecognition.current) {
      speechRecognition.current.start();
    }
  };

  const scheduleConsultation = () => {
    alert('Scheduling telehealth consultation...');
  };

  // Component Render
  return (
    <motion.div
      className="vital-signs-container p-6 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Manage Your Patients'  Vital Signs</h2>

      {alertMessage && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{alertMessage}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <VitalSignCard
          icon={<FaHeartbeat size="3em" className="text-red-500" />}
          label="Heart Rate"
          value={`${vitalSigns.heartRate} bpm`}
          onAlertSettings={() => handleAlertSettings('heartRate')}
        />
        <VitalSignCard
          icon={<FaTachometerAlt size="3em" className="text-blue-500" />}
          label="Blood Pressure"
          value={`${vitalSigns.bloodPressure.systolic}/${vitalSigns.bloodPressure.diastolic} mmHg`}
          onAlertSettings={() => handleAlertSettings('bloodPressure')}
        />
        <VitalSignCard
          icon={<FaLungs size="3em" className="text-green-500" />}
          label="Respiratory Rate"
          value={`${vitalSigns.respiratoryRate} breaths/min`}
          onAlertSettings={() => handleAlertSettings('respiratoryRate')}
        />
        <VitalSignCard
          icon={<FaTint size="3em" className="text-purple-500" />}
          label="Oxygen Saturation"
          value={`${vitalSigns.oxygenSaturation}%`}
          onAlertSettings={() => handleAlertSettings('oxygenSaturation')}
        />
        <VitalSignCard
          icon={<FaThermometerHalf size="3em" className="text-orange-500" />}
          label="Body Temperature"
          value={`${vitalSigns.bodyTemperature}°F`}
          onAlertSettings={() => handleAlertSettings('bodyTemperature')}
        />
        <VitalSignCard
          icon={<FaWeight size="3em" className="text-indigo-500" />}
          label="BMI"
          value={calculateBMI()}
        />
      </div>

      {/* Historical Data Chart */}
      <div className="bg-white p-4 rounded-lg shadow mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Historical Data</h3>
          <Select onValueChange={setSelectedTimeframe} defaultValue={selectedTimeframe}>
            <SelectTrigger>
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={historicalData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="heartRate" fill="#8884d8" />
            <Line yAxisId="right" type="monotone" dataKey="bloodPressure" stroke="#82ca9d" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Wearable Connection */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-semibold">Wearable Device Connection</h3>
        <Switch checked={isWearableConnected} onChange={handleWearableConnection} />
      </div>

      {/* Predictive Analysis */}
      <div className="bg-white p-4 rounded-lg shadow mb-8">
        <h3 className="text-xl font-semibold mb-4">Predictive Analysis</h3>
        {predictiveAnalysis ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={predictiveAnalysis}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timestamp" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="predictedValue" stroke="#ff7300" />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p>Loading predictive analysis...</p>
        )}
      </div>

      {/* Data Sharing */}
      <div className="flex justify-between items-center mb-8">
        <Button variant="primary" onClick={handleShareData}>
          <FaShareAlt className="mr-2" /> Share Data
        </Button>
        <Button variant="outline" onClick={scheduleConsultation}>
          <FaCalendarPlus className="mr-2" /> Schedule Telehealth Consultation
        </Button>
        <Button variant="secondary" onClick={startVoiceLogging}>
          <FaMicrophone className="mr-2" /> Start Voice Logging
        </Button>
      </div>

      {/* Educational Content */}
      <div className="mb-8">
        <Button variant="ghost" onClick={() => setShowEducationalContent(!showEducationalContent)}>
          <FaBook className="mr-2" /> {showEducationalContent ? 'Hide' : 'Show'} Educational Content
        </Button>
        {showEducationalContent && (
          <div className="bg-gray-200 p-4 rounded-lg mt-4">
            <h3 className="text-lg font-semibold mb-2">Educational Content</h3>
            <p>
              Learn more about your vital signs and how they affect your overall health. For more
              information, visit <a href="https://www.health.gov">Health.gov</a>.
            </p>
          </div>
        )}
      </div>

      {/* Health Goal Settings */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost">Set Health Goals</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Health Goals</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold mb-2">Target Heart Rate</h4>
              <Input
                type="number"
                placeholder="Min"
                value={healthGoals.targetHeartRate.min}
                onChange={(e) => handleGoalSetting('targetHeartRate.min', e.target.value)}
              />
              <Input
                type="number"
                placeholder="Max"
                value={healthGoals.targetHeartRate.max}
                onChange={(e) => handleGoalSetting('targetHeartRate.max', e.target.value)}
              />
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Target Blood Pressure</h4>
              <Input
                type="number"
                placeholder="Systolic Min"
                value={healthGoals.targetBloodPressure.systolic.min}
                onChange={(e) => handleGoalSetting('targetBloodPressure.systolic.min', e.target.value)}
              />
              <Input
                type="number"
                placeholder="Systolic Max"
                value={healthGoals.targetBloodPressure.systolic.max}
                onChange={(e) => handleGoalSetting('targetBloodPressure.systolic.max', e.target.value)}
              />
              <Input
                type="number"
                placeholder="Diastolic Min"
                value={healthGoals.targetBloodPressure.diastolic.min}
                onChange={(e) => handleGoalSetting('targetBloodPressure.diastolic.min', e.target.value)}
              />
              <Input
                type="number"
                placeholder="Diastolic Max"
                value={healthGoals.targetBloodPressure.diastolic.max}
                onChange={(e) => handleGoalSetting('targetBloodPressure.diastolic.max', e.target.value)}
              />
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Target Weight</h4>
              <Input
                type="number"
                placeholder="Target Weight"
                value={healthGoals.targetWeight}
                onChange={(e) => handleGoalSetting('targetWeight', e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="primary" onClick={() => alert('Goals set successfully!')}>
              Save Goals
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default Vitals;
