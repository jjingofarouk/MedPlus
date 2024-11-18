import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { BookOpen, Calendar, XCircle, UserCheck } from 'lucide-react';
import Button from './ui/button';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from './ui/tabs';
import ApproveAppointment from './PendingAppointment';
import RebookAppointment from './RescheduleAppointment';
import CancelAppointment from './CancelAppointment';
import ManageAvailability from './ManageAvailability';
import './ManageAppointments.css';

const ManageAppointments = () => {
  const [activeTab, setActiveTab] = useState('approve'); 
  const tabs = [
    { id: 'approve', label: 'Approve Appointments', icon: BookOpen, component: ApproveAppointment },
    { id: 'rebook', label: 'Rebook Appointments', icon: Calendar, component: RebookAppointment },
    { id: 'cancel', label: 'Cancel Appointments', icon: XCircle, component: CancelAppointment },
    { id: 'availability', label: 'Manage Availability', icon: UserCheck, component: ManageAvailability },
  ];

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
                <Component />
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <Button variant="outline" onClick={() => window.history.back()}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default ManageAppointments;
