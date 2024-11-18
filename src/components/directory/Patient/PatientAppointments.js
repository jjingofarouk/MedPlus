import React, { useState } from 'react';
import { Card, CardContent } from 'H:/Med/medhub/src/components/ui/card';
import { BookOpen, Calendar, XCircle, UserCheck } from 'lucide-react';
import Button from './ui/Button';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from ''H:\Med\medhub\src\components\ui\tabs.js''; // Ensure correct import for tabs components
import Book from './Book';
import RebookAppointment from './RebookAppointment';
import CancelAppointment from './CancelAppointment';
import PatientAvailability from './PatientAvailability';
import NavBar from 'H:/Med/medhub/src/components/ui/NavBar.js'


const tabs = [
  { id: 'book', label: 'Book Appointment', icon: BookOpen, component: Book },
  { id: 'rebook', label: 'Book Appointment', icon: UserCheck, component: RebookAppointment },
  { id: 'cancel', label: 'ReBook Appointment', icon: Calendar, component: CancelAppointment },
  { id: 'patient-availability', label: 'Cancel Appointment', icon: XCircle, component: PatientAvailability },
];

const PatientAppointments = () => {
  const [activeTab, setActiveTab] = useState('book');



  return (
    <div className="container mx-auto px-4 py-8">

      <h1 className="text-3xl font-bold mb-6 text-center text-[#002432]">Manage Appointments</h1>

      <Card className="mb-8">
        <CardContent className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mb-6">
              {tabs.map(({ id, label, icon: Icon }) => (
                <TabsTrigger key={id} value={id} className="flex items-center justify-center p-2 rounded-md text-sm">
                  <Icon className="w-5 h-5 mr-2" />
                  <span className="hidden sm:inline">{label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map(({ id, component: Component }) => (
              <TabsContent key={id} value={id}>
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


      <NavBar />

    </div>
  );
};

export default PatientAppointments;
