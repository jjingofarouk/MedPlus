import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Activity, Calendar, Bell, User, PieChart, MessageSquare, Clipboard, Thermometer } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RePieChart, Pie, Cell } from 'recharts';
import { Card, CardHeader, CardContent } from '../ui/card';
import Button from '../ui/button';
import { Alert, AlertDescription } from '../ui/alert';
import { healthTips } from './HealthTips';
import './PatientHome.css';

const mockHealthData = [
  { date: '2024-09-01', steps: 5000, calories: 2000 },
  { date: '2024-09-02', steps: 7500, calories: 2200 },
  { date: '2024-09-03', steps: 10000, calories: 2400 },
  { date: '2024-09-04', steps: 6000, calories: 2100 },
  { date: '2024-09-05', steps: 8000, calories: 2300 },
  { date: '2024-09-06', steps: 9000, calories: 2500 },
  { date: '2024-09-07', steps: 11000, calories: 2600 },
];

const mockMedications = [
  { name: 'Aspirin', dosage: '81mg', frequency: 'Daily' },
  { name: 'Lisinopril', dosage: '10mg', frequency: 'Twice daily' },
  { name: 'Metformin', dosage: '500mg', frequency: 'With meals' },
];

const PatientHome = () => {
  const [medicalTip, setMedicalTip] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [healthData, setHealthData] = useState([]);
  const [medications, setMedications] = useState([]);
  const [vitalSigns, setVitalSigns] = useState({});

  useEffect(() => {
    setMedicalTip(healthTips[Math.floor(Math.random() * healthTips.length)]);
    setNotifications([
      { id: 1, message: "Message from Dr. Smith", type: "message" },
      { id: 2, message: "Health screening reminder", type: "reminder" },
      { id: 3, message: "New lab results available", type: "results" },
    ]);
    setUpcomingAppointments([
      { id: 1, date: '2024-09-15', time: '10:00 AM', doctor: 'Dr. Johnson', specialty: 'Cardiology' },
      { id: 2, date: '2024-09-20', time: '2:00 PM', doctor: 'Dr. Lee', specialty: 'Dermatology' },
    ]);
    setHealthData(mockHealthData);
    setMedications(mockMedications);
    setVitalSigns({
      bloodPressure: '120/80',
      heartRate: '72',
      temperature: '98.6',
      oxygenSaturation: '98%'
    });
  }, []);

  const goalData = [
    { name: 'Completed', value: 8000 },
    { name: 'Remaining', value: 2000 },
  ];

  const COLORS = ['var(--success-color)', 'var(--secondary-color)'];

  return (
    <div className="patient-dashboard">


      <Alert className="medical-tip">
        <AlertDescription>{medicalTip}</AlertDescription>
      </Alert>

      <div className="dashboard-grid">
        <Card className="notifications-card">
          <CardHeader>
            <h2>Notifications</h2>
            <Bell className="card-icon" />
          </CardHeader>
          <CardContent>
            <ul>
              {notifications.map((notification) => (
                <li key={notification.id}>
                  {notification.type === 'message' && <MessageSquare />}
                  {notification.type === 'reminder' && <Bell />}
                  {notification.type === 'results' && <Activity />}
                  <span>{notification.message}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="appointments-card">
          <CardHeader>
            <h2>Upcoming Appointments</h2>
            <Calendar className="card-icon" />
          </CardHeader>
          <CardContent>
            <ul>
              {upcomingAppointments.map((appointment) => (
                <li key={appointment.id}>
                  <span>{appointment.doctor} - {appointment.specialty}</span>
                  <span>{appointment.date} at {appointment.time}</span>
                </li>
              ))}
            </ul>
            <Button className="book-appointment">
              <Link to="/book-appointment">Book New Appointment</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="health-activity-card">
          <CardHeader>
            <h2>Health Activity</h2>
            <Activity className="card-icon" />
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={healthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Line yAxisId="left" type="monotone" dataKey="steps" stroke="var(--primary-color)" />
                <Line yAxisId="right" type="monotone" dataKey="calories" stroke="var(--accent-color)" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="quick-actions-card">
          <CardHeader>
            <h2>Quick Actions</h2>
            <User className="card-icon" />
          </CardHeader>
          <CardContent>
            <div className="quick-actions-grid">
              <Button><Link to="/profile">View Profile</Link></Button>
              <Button><Link to="/messages">Messages</Link></Button>
              <Button><Link to="/medications">Medications</Link></Button>
              <Button><Link to="/test-results">Test Results</Link></Button>
            </div>
          </CardContent>
        </Card>

        <Card className="health-goals-card">
          <CardHeader>
            <h2>Health Goals</h2>
            <PieChart className="card-icon" />
          </CardHeader>
          <CardContent>
            <div className="health-goals-content">
              <ul>
                <li>
                  <span>Daily Steps</span>
                  <span>8,000 / 10,000</span>
                </li>
                <li>
                  <span>Water Intake</span>
                  <span>6 / 8 glasses</span>
                </li>
                <li>
                  <span>Sleep</span>
                  <span>7 / 8 hours</span>
                </li>
              </ul>
              <div className="goal-chart">
                <ResponsiveContainer width="100%" height={100}>
                  <RePieChart>
                    <Pie
                      data={goalData}
                      innerRadius={30}
                      outerRadius={50}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {goalData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </RePieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <Button className="manage-goals">
              <Link to="/goals">Manage Goals</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="medications-card">
          <CardHeader>
            <h2>Current Medications</h2>
            <Clipboard className="card-icon" />
          </CardHeader>
          <CardContent>
            <ul>
              {medications.map((med, index) => (
                <li key={index}>
                  <span>{med.name}</span>
                  <span>{med.dosage} - {med.frequency}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="vital-signs-card">
          <CardHeader>
            <h2>Vital Signs</h2>
            <Thermometer className="card-icon" />
          </CardHeader>
          <CardContent>
            <ul>
              <li>
                <span>Blood Pressure</span>
                <span>{vitalSigns.bloodPressure} mmHg</span>
              </li>
              <li>
                <span>Heart Rate</span>
                <span>{vitalSigns.heartRate} bpm</span>
              </li>
              <li>
                <span>Temperature</span>
                <span>{vitalSigns.temperature}°F</span>
              </li>
              <li>
                <span>Oxygen Saturation</span>
                <span>{vitalSigns.oxygenSaturation}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PatientHome;