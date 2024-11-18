import React, { useState, useEffect, useMemo } from 'react';
import { LineChart, BarChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle, Activity, Truck, Thermometer, Zap, Droplet, Battery, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import Button  from './ui/button';
import Badge  from './ui/badge';
import './CommandCenter.css';

const AdvancedCommandCenter = () => {
  const [realTimeData, setRealTimeData] = useState([]);
  const [metrics, setMetrics] = useState({});
  const [alerts, setAlerts] = useState([]);
  const [incidents, setIncidents] = useState([]);
  const [ambulanceData, setAmbulanceData] = useState([]);
  const [utilities, setUtilities] = useState({
    HVAC: 'Operational',
    Power: 'Stable',
    WaterSupply: 'Stable',
    BackupGenerators: 'Ready',
  });
  const [predictions, setPredictions] = useState({
    ICU: 'Stable',
    Wards: 'Stable',
    ER: 'Overload Imminent',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      fetchRealTimeData();
      fetchAmbulanceData();
      checkUtilitiesStatus();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchRealTimeData = () => {
    const newData = generateRealTimeData();
    setRealTimeData((prevData) => [...prevData.slice(-20), newData]);
    setMetrics(calculateOperationalMetrics());
    setAlerts(checkForAlerts());
    updatePredictions();
    handleSurge();
  };

  const generateRealTimeData = () => ({
    timestamp: new Date().toLocaleTimeString(),
    patientFlow: Math.floor(Math.random() * 100),
    availableBeds: Math.floor(Math.random() * 50),
    emergencies: Math.floor(Math.random() * 10),
    waitTime: Math.floor(Math.random() * 60),
    staffUtilization: Math.floor(Math.random() * 100),
  });

  const calculateOperationalMetrics = () => ({
    icuOccupancy: Math.floor(Math.random() * 100),
    emergencyRoomLoad: Math.floor(Math.random() * 100),
    surgicalRoomUsage: Math.floor(Math.random() * 100),
    equipmentUtilization: Math.floor(Math.random() * 100),
    medicationInventory: Math.floor(Math.random() * 100),
  });

  const checkForAlerts = () => {
    const randomAlert = Math.random() > 0.9;
    if (randomAlert) {
      return [...alerts, { id: Date.now(), timestamp: new Date().toLocaleTimeString(), message: 'Code Blue in ICU', severity: 'high' }];
    }
    return alerts;
  };

  const fetchAmbulanceData = () => {
    setAmbulanceData((prev) => [
      ...prev.slice(-5),
      {
        id: Math.random(),
        location: `Location-${Math.floor(Math.random() * 10)}`,
        status: 'En Route',
        ETA: `${Math.floor(Math.random() * 10)} mins`,
      },
    ]);
  };

  const checkUtilitiesStatus = () => {
    const randomFailure = Math.random() > 0.95;
    if (randomFailure) {
      setUtilities((prev) => ({
        ...prev,
        Power: 'Failure',
      }));
      setAlerts((prev) => [
        ...prev,
        { id: Date.now(), timestamp: new Date().toLocaleTimeString(), message: 'Power Supply Failure Detected', severity: 'critical' },
      ]);
    }
  };

  const updatePredictions = () => {
    setPredictions((prev) => ({
      ...prev,
      ICU: metrics.icuOccupancy > 80 ? 'Overload Imminent' : 'Stable',
      ER: metrics.emergencyRoomLoad > 70 ? 'Overload Imminent' : 'Stable',
    }));
  };

  const handleSurge = () => {
    const surgeDetected = metrics.patientFlow > 80 || metrics.emergencies > 8;
    if (surgeDetected) {
      setAlerts((prev) => [
        ...prev,
        {
          id: Date.now(),
          timestamp: new Date().toLocaleTimeString(),
          message: 'Surge Detected: Activating Emergency Protocols',
          severity: 'high',
        },
      ]);
      setMetrics((prev) => ({
        ...prev,
        availableBeds: prev.availableBeds - 10,
        emergencyRoomLoad: prev.emergencyRoomLoad + 20,
      }));
    }
  };



  const RealTimeChart = useMemo(() => (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={realTimeData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="patientFlow" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="availableBeds" stroke="#82ca9d" />
        <Line type="monotone" dataKey="emergencies" stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  ), [realTimeData]);

  const MetricsChart = useMemo(() => (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={[metrics]}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="icuOccupancy" fill="#8884d8" />
        <Bar dataKey="emergencyRoomLoad" fill="#82ca9d" />
        <Bar dataKey="surgicalRoomUsage" fill="#ffc658" />
        <Bar dataKey="equipmentUtilization" fill="#ff8042" />
        <Bar dataKey="medicationInventory" fill="#00C49F" />
      </BarChart>
    </ResponsiveContainer>
  ), [metrics]);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Command Center</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Real-time Patient Flow</CardTitle>
          </CardHeader>
          <CardContent>{RealTimeChart}</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Operational Metrics</CardTitle>
          </CardHeader>
          <CardContent>{MetricsChart}</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <AnimatePresence>
              {alerts.slice(-5).map((alert) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Alert variant={alert.severity === 'critical' ? 'destructive' : alert.severity === 'high' ? 'default' : 'secondary'}>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>{alert.message}</AlertTitle>
                    <AlertDescription>{alert.timestamp}</AlertDescription>
                  </Alert>
                </motion.div>
              ))}
            </AnimatePresence>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ambulance Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {ambulanceData.map((ambulance) => (
                <li key={ambulance.id} className="flex items-center justify-between">
                  <span>
                    <Truck className="inline-block mr-2" /> Ambulance {ambulance.id.toString().slice(2, 6)}
                  </span>
                  <Badge variant={ambulance.status === 'En Route' ? 'default' : 'secondary'}>
                    {ambulance.status} - ETA: {ambulance.ETA}
                  </Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Utilities Status</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span><Thermometer className="inline-block mr-2" /> HVAC</span>
                <Badge variant={utilities.HVAC === 'Operational' ? 'default' : 'destructive'}>{utilities.HVAC}</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span><Zap className="inline-block mr-2" /> Power</span>
                <Badge variant={utilities.Power === 'Stable' ? 'default' : 'destructive'}>{utilities.Power}</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span><Droplet className="inline-block mr-2" /> Water Supply</span>
                <Badge variant={utilities.WaterSupply === 'Stable' ? 'default' : 'destructive'}>{utilities.WaterSupply}</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span><Battery className="inline-block mr-2" /> Backup Generators</span>
                <Badge variant={utilities.BackupGenerators === 'Ready' ? 'default' : 'destructive'}>{utilities.BackupGenerators}</Badge>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Predictive Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span><TrendingUp className="inline-block mr-2" /> ICU</span>
                <Badge variant={predictions.ICU === 'Stable' ? 'default' : 'destructive'}>{predictions.ICU}</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span><TrendingUp className="inline-block mr-2" /> Wards</span>
                <Badge variant={predictions.Wards === 'Stable' ? 'default' : 'destructive'}>{predictions.Wards}</Badge>
              </li>
              <li className="flex items-center justify-between">
                <span><TrendingUp className="inline-block mr-2" /> Emergency Room</span>
                <Badge variant={predictions.ER === 'Stable' ? 'default' : 'destructive'}>{predictions.ER}</Badge>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>


    </div>
  );
};

export default AdvancedCommandCenter;