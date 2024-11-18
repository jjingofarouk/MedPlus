import React, { useState, useEffect } from 'react';
import { Card, CardContent } from 'H:/Med/medhub/src/components/ui/card';
import { BookOpen, Calendar, XCircle, UserCheck } from 'lucide-react';
import Button from './ui/Button';
import {
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from './ui/AlertDialog';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from './ui/tabs';
import ApproveAppointment from './ApproveAppointment';
import RebookAppointment from './RebookAppointment';
import CancelAppointment from './CancelAppointment';
import ManageAvailability from './ManageAvailability';
import NavBar from 'H:/Med/medhub/src/components/ui/NavBar'
import axios from 'axios';


const ManageAppointmentsPage = () => {
  const [activeTab, setActiveTab] = useState('approve'); 
  const [showAchievement, setShowAchievement] = useState(false);
  const [tabs, setTabs] = useState([]); // State to hold tabs

  useEffect(() => {
    const fetchTabs = async () => {
      try {
        const response = await axios.get('/api/tabs'); // Fetch tabs from backend
        setTabs(response.data);
        if (response.data.length > 0) {
          setActiveTab(response.data[0].id); // Set default active tab to the first one
        }
      } catch (error) {
        console.error("Error fetching tabs:", error);
      }
    };

    fetchTabs();
  }, []);

  const handleTaskCompletion = () => {
    setShowAchievement(true);
    setTimeout(() => setShowAchievement(false), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#002432]">Manage Appointments</h1>

      <Card className="mb-8">
        <CardContent className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-6">
              {tabs.map(({ id, label, icon: Icon }) => (
                <TabsTrigger key={id} value={id} className="flex items-center justify-center p-2 rounded-md text-sm">
                  <Icon className="w-5 h-5 mr-2" />
                  <span className="hidden sm:inline">{label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map(({ id, component: Component }) => (
              <TabsContent key={id} value={id}>
                <Component onComplete={handleTaskCompletion} />
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <Button variant="outline" onClick={() => window.history.back()}>
          Back
        </Button>
        <p className="text-sm text-[#002432] italic">
          Please ensure all details are correct before submitting.
        </p>
      </div>

      <AlertDialogContent open={showAchievement} onOpenChange={setShowAchievement}>
        <AlertDialogHeader>
          <AlertDialogTitle>Achievement Unlocked!</AlertDialogTitle>
          <AlertDialogDescription>
            You successfully managed an appointment!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => setShowAchievement(false)}>Dismiss</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>

      <NavBar />
    </div>
  );
};

export default ManageAppointmentsPage;
