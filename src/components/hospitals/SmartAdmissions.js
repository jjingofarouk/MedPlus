import React, { useState, useEffect, useCallback } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle, Clock, Users, Activity, Heart, Clipboard, Zap } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Card, CardHeader, CardContent } from '../ui/card';

// Enhanced mock APIs with more realistic responses
const mockAPI = (response, delay = 1000) => 
  new Promise(resolve => setTimeout(() => resolve(response), delay));

const fetchSurgePrediction = () => mockAPI({ prediction: "High", expectedDuration: "Next 4 hours", patientInflux: 30 });
const getAmbulanceETA = () => mockAPI({ eta: 5, trafficConditions: "Heavy", patientCondition: "Critical" });
const verifyDocuments = () => mockAPI({ verified: true, missingDocuments: [], expirationDate: "2025-12-31" });
const fetchPatientHistory = () => mockAPI({
  previousVisits: 3,
  lastVisitDate: "2023-11-15",
  chronicConditions: ["Diabetes", "Hypertension"],
  allergies: ["Penicillin"]
});
const getStaffAvailability = () => mockAPI({
  doctors: { available: 5, total: 8 },
  nurses: { available: 12, total: 15 },
  specialists: { available: 3, total: 4 }
});
const predictResourceNeeds = () => mockAPI({
  beds: { needed: 25, available: 30 },
  ventilators: { needed: 5, available: 8 },
  icu: { needed: 3, available: 4 }
});

const SmartAdmissions = () => {
  const [queue, setQueue] = useState(10);
  const [surgeAlert, setSurgeAlert] = useState({ prediction: "", duration: "", influx: 0 });
  const [ambulanceETA, setAmbulanceETA] = useState({ eta: 0, traffic: "", condition: "" });
  const [fastTrackEnabled, setFastTrackEnabled] = useState(false);
  const [loyaltyPoints, setLoyaltyPoints] = useState(0);
  const [documentVerified, setDocumentVerified] = useState({ verified: false, missing: [], expiration: "" });
  const [isChatbotActive, setChatbotActive] = useState(false);
  const [patientHistory, setPatientHistory] = useState(null);
  const [staffAvailability, setStaffAvailability] = useState(null);
  const [resourcePrediction, setResourcePrediction] = useState(null);
  const [queueHistory, setQueueHistory] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  // Enhanced patient admission logic
  const admitPatient = useCallback(() => {
    if (queue > 0) {
      setQueue(prevQueue => {
        const newQueue = prevQueue - 1;
        setQueueHistory(prev => [...prev, { time: new Date().toISOString(), queue: newQueue }]);
        return newQueue;
      });
      setLoyaltyPoints(prev => prev + 10);
    }
  }, [queue]);

  // Enhanced handlers with more comprehensive data management


  const checkSurgePrediction = async () => {
    const data = await fetchSurgePrediction();
    setSurgeAlert(data);
  };

  const syncAmbulanceETA = async () => {
    const data = await getAmbulanceETA();
    setAmbulanceETA(data);
    setFastTrackEnabled(data.patientCondition === "Critical");
  };

  const handleDocumentVerification = async () => {
    const data = await verifyDocuments();
    setDocumentVerified(data);
  };

  const fetchPatientData = async () => {
    const data = await fetchPatientHistory();
    setPatientHistory(data);
  };

  const checkStaffAvailability = async () => {
    const data = await getStaffAvailability();
    setStaffAvailability(data);
  };

  const checkResourceNeeds = async () => {
    const data = await predictResourceNeeds();
    setResourcePrediction(data);
  };

  // Automatic updates
  useEffect(() => {
    const intervals = [
      setInterval(checkSurgePrediction, 300000), // Every 5 minutes
      setInterval(syncAmbulanceETA, 60000), // Every minute
      setInterval(checkStaffAvailability, 600000), // Every 10 minutes
      setInterval(checkResourceNeeds, 900000), // Every 15 minutes
    ];

    return () => intervals.forEach(clearInterval);
  }, []);

  // Initial data fetch
  useEffect(() => {
    checkSurgePrediction();
    syncAmbulanceETA();
    checkStaffAvailability();
    checkResourceNeeds();
  }, []);

  // Language switcher
  const switchLanguage = (lang) => {
    setSelectedLanguage(lang);
    // In a real app, this would trigger translations
  };

  // Render functions for different sections
  const renderQueueManagement = () => (
    <Card>
      <CardHeader>Queue Management</CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <Users className="h-8 w-8 text-blue-500" />
            <p className="mt-2 text-2xl font-bold">{queue}</p>
            <p className="text-xs text-gray-500">Patients in Queue</p>
          </div>
          <button 
            onClick={admitPatient} 
            disabled={queue === 0}
            className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
          >
            Admit Next Patient
          </button>
        </div>
        <ResponsiveContainer width="100%" height={200}>
        <LineChart data={(queueHistory || []).slice(-20)}>
        <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="queue" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );



  const renderSurgePrediction = () => (
    <Card>
      <CardHeader>Surge Prediction</CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <Activity className="h-8 w-8 text-red-500" />
          <div>
            <p className="text-lg font-semibold">{surgeAlert.prediction} Load Predicted</p>
            <p className="text-sm text-gray-500">Expected for next {surgeAlert.expectedDuration}</p>
            <p className="text-sm text-gray-500">Estimated influx: {surgeAlert.patientInflux} patients</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderAmbulanceIntegration = () => (
    <Card>
    <CardHeader>Ambulance Integration</CardHeader>
    <CardContent>
      <div className="flex items-center justify-between">
        <div>
          <Zap className="h-8 w-8 text-yellow-500" />
          <p className="mt-2 text-lg font-semibold">ETA: {ambulanceETA.eta} minutes</p>
          <p className="text-xs text-gray-500">Traffic: {ambulanceETA.trafficConditions}</p>
          <p className="text-xs text-gray-500">Patient: {ambulanceETA.patientCondition}</p>
        </div>
        {fastTrackEnabled && (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Fast-Track Enabled</AlertTitle>
            <AlertDescription>
              Prepare for immediate admission
            </AlertDescription>
          </Alert>
        )}
      </div>
      <div className="mt-4 flex items-center">
        <Clock className="h-6 w-6 text-gray-500" />
        <p className="ml-2 text-sm">Updated just now</p>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-500">Current Language: {selectedLanguage}</p>
      </div>
    </CardContent>
  </Card>
  
  );

  const renderStaffAvailability = () => (
    <Card>
      <CardHeader>Staff Availability</CardHeader>
      <CardContent>
        {staffAvailability && (
          <div className="space-y-2">
            <p>Doctors: {staffAvailability.doctors.available}/{staffAvailability.doctors.total}</p>
            <p>Nurses: {staffAvailability.nurses.available}/{staffAvailability.nurses.total}</p>
            <p>Specialists: {staffAvailability.specialists.available}/{staffAvailability.specialists.total}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );

  const renderResourcePrediction = () => (
    <Card>
      <CardHeader>Resource Prediction</CardHeader>
      <CardContent>
        {resourcePrediction && (
          <div className="space-y-2">
            <p>Beds: {resourcePrediction.beds.needed}/{resourcePrediction.beds.available}</p>
            <p>Ventilators: {resourcePrediction.ventilators.needed}/{resourcePrediction.ventilators.available}</p>
            <p>ICU: {resourcePrediction.icu.needed}/{resourcePrediction.icu.available}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Smart Admissions Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {renderQueueManagement()}
        {renderSurgePrediction()}
        {renderAmbulanceIntegration()}
        {renderStaffAvailability()}
        {renderResourcePrediction()}
        
        {/* Additional cards for other features */}
        <Card>
          <CardHeader>Patient History</CardHeader>
          <CardContent>
            <button onClick={fetchPatientData} className="px-4 py-2 bg-purple-500 text-white rounded-md">
              Fetch Patient Data
            </button>
            {patientHistory && (
              <div className="mt-4">
                <p>Previous Visits: {patientHistory.previousVisits}</p>
                <p>Last Visit: {patientHistory.lastVisitDate}</p>
                <p>Chronic Conditions: {(patientHistory?.chronicConditions || []).join(", ")}</p>
                <p>Allergies: {patientHistory.allergies.join(", ")}</p>
              </div>
            )}
          </CardContent>
        </Card>



        <Card>
          <CardHeader>Document Verification</CardHeader>
          <CardContent>
            <p>Status: {documentVerified.verified ? "Verified ✅" : "Not Verified ❌"}</p>
            {documentVerified.missingDocuments?.length > 0 && (
  <p>Missing: {documentVerified.missingDocuments.join(", ")}</p>
)}

            <p>Expiration: {documentVerified.expirationDate}</p>
            <button onClick={handleDocumentVerification} className="mt-2 px-4 py-2 bg-indigo-500 text-white rounded-md">
              Verify Documents
            </button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>Smart Chatbot & Remote Check-In</CardHeader>
          <CardContent>
            <button 
              onClick={() => setChatbotActive(!isChatbotActive)}
              className="px-4 py-2 bg-teal-500 text-white rounded-md"
            >
              {isChatbotActive ? "Close Chatbot" : "Launch Chatbot"}
            </button>
            {isChatbotActive && <p className="mt-2">Chatbot is now active and ready to assist!</p>}
            <button 
              onClick={() => alert("Patient checked in remotely!")}
              className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-md"
            >
              Remote Check-In
            </button>
          </CardContent>
        </Card>


      </div>
    </div>
  );
};

export default SmartAdmissions;