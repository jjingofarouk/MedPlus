import React, { useState, useEffect } from 'react';
import { Bell, RefreshCw, User, Trash2, Clock } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Card, CardHeader, CardContent } from '../ui/card';
import Badge from '../ui/badge';
import './BedManagement.css';

// Mock data and functions (replace with actual API calls in production)
const mockBeds = [
  { id: 1, status: 'available', priority: 'low' },
  { id: 2, status: 'occupied', priority: 'high' },
  { id: 3, status: 'cleaning', priority: 'medium' },
  { id: 4, status: 'maintenance', priority: 'low' },
  { id: 5, status: 'available', priority: 'medium' },
];

const mockPatients = [
  { id: 1, name: 'Shadrah Flower', condition: 'stable' },
  { id: 2, name: 'Kabuye Fahad', condition: 'critical' },
];

const mockWaitingList = [
  { id: 1, name: 'Alice Nakiryo', priority: 'high' },
  { id: 2, name: 'Kabanda Williams', priority: 'medium' },
];

const BedManagement = () => {
  const [beds, setBeds] = useState(mockBeds);
  const [patients, setPatients] = useState(mockPatients);
  const [waitingList, setWaitingList] = useState(mockWaitingList);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulating real-time updates
    const interval = setInterval(() => {
      updateBedStatus();
      checkWaitingList();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const updateBedStatus = () => {
    // Simulate bed status changes
    setBeds(prevBeds => 
      prevBeds.map(bed => ({
        ...bed,
        status: ['available', 'occupied', 'cleaning', 'maintenance'][Math.floor(Math.random() * 4)]
      }))
    );
  };

  const checkWaitingList = () => {
    // Example logic to check if a waiting list patient can be assigned a bed
    if (waitingList.length > 0) {
      const availableBed = beds.find(b => b.status === 'available');
      if (availableBed) {
        assignBed(waitingList[0].id, availableBed.id); // Assign the first waiting patient to an available bed
      }
    }
  };

  const assignBed = (patientId, bedId) => {
    setBeds(prevBeds => 
      prevBeds.map(bed => 
        bed.id === bedId ? { ...bed, status: 'occupied' } : bed
      )
    );
    setPatients(prevPatients => 
      prevPatients.filter(patient => patient.id !== patientId)
    );
    addNotification(`Patient assigned to bed ${bedId}`);
  };

  const dischargeBed = (bedId) => {
    setBeds(prevBeds => 
      prevBeds.map(bed => 
        bed.id === bedId ? { ...bed, status: 'cleaning' } : bed
      )
    );
    addNotification(`Patient discharged from bed ${bedId}`);
  };

  const addNotification = (message) => {
    setNotifications(prev => [...prev, { id: Date.now(), message }]);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'bg-green-500';
      case 'occupied': return 'bg-red-500';
      case 'cleaning': return 'bg-yellow-500';
      case 'maintenance': return 'bg-gray-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Bed Management</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Card>
          <CardHeader>Bed Status</CardHeader>
          <CardContent>
            {beds.map(bed => (
              <div key={bed.id} className="flex items-center mb-2">
                <Badge className={`mr-2 ${getStatusColor(bed.status)}`}>
                  {bed.status}
                </Badge>
                <span>Bed {bed.id}</span>
                <Badge className="ml-auto" variant={bed.priority}>
                  {bed.priority}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>Patient Assignment</CardHeader>
          <CardContent>
            {patients.map(patient => (
              <div key={patient.id} className="flex items-center mb-2">
                <User size={16} className="mr-2" />
                <span>{patient.name}</span>
                <Badge className="ml-auto" variant={patient.condition === 'critical' ? 'destructive' : 'default'}>
                  {patient.condition}
                </Badge>
                <select
                  className="ml-2 p-1 border rounded"
                  onChange={(e) => assignBed(patient.id, parseInt(e.target.value))}
                >
                  <option value="">Assign Bed</option>
                  {beds.filter(b => b.status === 'available').map(bed => (
                    <option key={bed.id} value={bed.id}>Bed {bed.id}</option>
                  ))}
                </select>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Card>
          <CardHeader>Waiting List</CardHeader>
          <CardContent>
            {waitingList.map(patient => (
              <div key={patient.id} className="flex items-center mb-2">
                <Clock size={16} className="mr-2" />
                <span>{patient.name}</span>
                <Badge className="ml-auto" variant={patient.priority}>
                  {patient.priority}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>Notifications</CardHeader>
          <CardContent>
            {notifications.map(notification => (
              <Alert key={notification.id} className="mb-2">
                <Bell className="h-4 w-4" />
                <AlertTitle>New Update</AlertTitle>
                <AlertDescription>{notification.message}</AlertDescription>
              </Alert>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={updateBedStatus}
        >
          <RefreshCw size={16} className="inline mr-2" />
          Refresh Status
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => {
            const occupiedBed = beds.find(b => b.status === 'occupied');
            if (occupiedBed) dischargeBed(occupiedBed.id);
          }}
        >
          <Trash2 size={16} className="inline mr-2" />
          Discharge Patient
        </button>
      </div>
    </div>
  );
};

export default BedManagement;
