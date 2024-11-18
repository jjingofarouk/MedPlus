import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import  Button  from "../ui/button";
import  Input from "../ui/input";
import  Label  from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import Calendar  from "../ui/Calendar";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, CalendarDays, MessageSquare, BarChart2, PlusCircle, Edit, Trash2 } from 'lucide-react';

const CommunityPartnerships = () => {
  const [partners, setPartners] = useState([
    { id: 1, name: 'Local Pharmacy', type: 'Pharmacy', collaboration: 'Vaccine Drive', status: 'Active', impact: 500, lastContact: '2023-10-15' },
    { id: 2, name: 'Wellness Center', type: 'Fitness', collaboration: 'Fitness Programs', status: 'Active', impact: 300, lastContact: '2023-10-20' },
    { id: 3, name: 'Community College', type: 'Education', collaboration: 'Health Education Workshops', status: 'Pending', impact: 0, lastContact: '2023-10-18' },
    { id: 4, name: 'Local Food Bank', type: 'Nutrition', collaboration: 'Healthy Eating Initiative', status: 'Active', impact: 750, lastContact: '2023-10-12' },
  ]);

  const [events, setEvents] = useState([
    { id: 1, title: 'Vaccine Drive', partner: 'Local Pharmacy', date: '2023-11-15', attendees: 200 },
    { id: 2, title: 'Fitness Workshop', partner: 'Wellness Center', date: '2023-11-20', attendees: 50 },
  ]);

  const [messages, setMessages] = useState([
    { id: 1, partner: 'Local Pharmacy', date: '2023-10-15', content: 'Confirming next month\'s vaccine drive details.' },
    { id: 2, partner: 'Wellness Center', date: '2023-10-20', content: 'Proposal for new yoga classes received.' },
  ]);

  const [selectedPartner, setSelectedPartner] = useState(null);
  const [isAddPartnerDialogOpen, setIsAddPartnerDialogOpen] = useState(false);
  const [newPartner, setNewPartner] = useState({ name: '', type: '', collaboration: '', status: 'Pending' });

  const addPartner = () => {
    setPartners([...partners, { ...newPartner, id: partners.length + 1, impact: 0, lastContact: new Date().toISOString().split('T')[0] }]);
    setNewPartner({ name: '', type: '', collaboration: '', status: 'Pending' });
    setIsAddPartnerDialogOpen(false);
  };

  const deletePartner = (id) => {
    setPartners(partners.filter(partner => partner.id !== id));
  };

  const updatePartner = (id, updates) => {
    setPartners(partners.map(partner => partner.id === id ? { ...partner, ...updates } : partner));
  };

  const addEvent = (event) => {
    setEvents([...events, { ...event, id: events.length + 1 }]);
  };

  const addMessage = (message) => {
    setMessages([...messages, { ...message, id: messages.length + 1, date: new Date().toISOString().split('T')[0] }]);
  };

  const getPartnerStats = () => {
    const total = partners.length;
    const active = partners.filter(p => p.status === 'Active').length;
    const pending = partners.filter(p => p.status === 'Pending').length;
    const totalImpact = partners.reduce((sum, p) => sum + p.impact, 0);
    return { total, active, pending, totalImpact };
  };

  const stats = getPartnerStats();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Community Partnerships Hub</h1>
      <p className="text-lg mb-6">Manage and track collaborations with community partners for health programs.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Partners</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Partnerships</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.active}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Partnerships</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pending}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Impact</CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalImpact}</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="partners" className="space-y-4">
        <TabsList>
          <TabsTrigger value="partners">Partners</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="partners" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Partners</h2>
            <Dialog open={isAddPartnerDialogOpen} onOpenChange={setIsAddPartnerDialogOpen}>
              <DialogTrigger asChild>
                <Button><PlusCircle className="mr-2 h-4 w-4" /> Add Partner</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New Partner</DialogTitle>
                  <DialogDescription>
                    Enter the details of the new community partner here.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={newPartner.name}
                      onChange={(e) => setNewPartner({...newPartner, name: e.target.value})}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="type" className="text-right">
                      Type
                    </Label>
                    <Input
                      id="type"
                      value={newPartner.type}
                      onChange={(e) => setNewPartner({...newPartner, type: e.target.value})}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="collaboration" className="text-right">
                      Collaboration
                    </Label>
                    <Input
                      id="collaboration"
                      value={newPartner.collaboration}
                      onChange={(e) => setNewPartner({...newPartner, collaboration: e.target.value})}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={addPartner}>Add Partner</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Collaboration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Impact</TableHead>
                <TableHead>Last Contact</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {partners.map((partner) => (
                <TableRow key={partner.id}>
                  <TableCell className="font-medium">{partner.name}</TableCell>
                  <TableCell>{partner.type}</TableCell>
                  <TableCell>{partner.collaboration}</TableCell>
                  <TableCell>{partner.status}</TableCell>
                  <TableCell>{partner.impact}</TableCell>
                  <TableCell>{partner.lastContact}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" onClick={() => setSelectedPartner(partner)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => deletePartner(partner.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="events" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Events</h2>
            <Button><PlusCircle className="mr-2 h-4 w-4" /> Add Event</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Partner</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Attendees</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell className="font-medium">{event.title}</TableCell>
                  <TableCell>{event.partner}</TableCell>
                  <TableCell>{event.date}</TableCell>
                  <TableCell>{event.attendees}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="messages" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Messages</h2>
            <Button><PlusCircle className="mr-2 h-4 w-4" /> New Message</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Partner</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Content</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages.map((message) => (
                <TableRow key={message.id}>
                  <TableCell className="font-medium">{message.partner}</TableCell>
                  <TableCell>{message.date}</TableCell>
                  <TableCell>{message.content}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <h2 className="text-2xl font-bold">Analytics</h2>
          <Card>
            <CardHeader>
              <CardTitle>Partnership Impact Over Time</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={partners}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="impact" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {selectedPartner && (
        <Dialog open={!!selectedPartner} onOpenChange={() => setSelectedPartner(null)}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Partner: {selectedPartner.name}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-name" className="text-right">Name</Label>
                <Input
                  id="edit-name"
                  value={selectedPartner.name}
                  onChange={(e) => setSelectedPartner({...selectedPartner, name: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
  <Label htmlFor="edit-type" className="text-right">Type</Label>
  <Input
    id="edit-type"
    value={selectedPartner.type}
    onChange={(e) => setSelectedPartner({...selectedPartner, type: e.target.value})}
    className="col-span-3"
  />
</div>
<div className="grid grid-cols-4 items-center gap-4">
  <Label htmlFor="edit-collaboration" className="text-right">Collaboration</Label>
  <Input
    id="edit-collaboration"
    value={selectedPartner.collaboration}
    onChange={(e) => setSelectedPartner({...selectedPartner, collaboration: e.target.value})}
    className="col-span-3"
  />
</div>
<div className="grid grid-cols-4 items-center gap-4">
  <Label htmlFor="edit-status" className="text-right">Status</Label>
  <Select 
    value={selectedPartner.status} 
    onValueChange={(value) => setSelectedPartner({...selectedPartner, status: value})}
  >
    <SelectTrigger className="col-span-3">
      <SelectValue placeholder="Select a status" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="Active">Active</SelectItem>
      <SelectItem value="Pending">Pending</SelectItem>
      <SelectItem value="Inactive">Inactive</SelectItem>
    </SelectContent>
  </Select>
</div>
<div className="grid grid-cols-4 items-center gap-4">
  <Label htmlFor="edit-impact" className="text-right">Impact</Label>
  <Input
    id="edit-impact"
    type="number"
    value={selectedPartner.impact}
    onChange={(e) => setSelectedPartner({...selectedPartner, impact: parseInt(e.target.value, 10)})}
    className="col-span-3"
  />
</div>
<div className="grid grid-cols-4 items-center gap-4">
  <Label htmlFor="edit-last-contact" className="text-right">Last Contact</Label>
  <Input
    id="edit-last-contact"
    type="date"
    value={selectedPartner.lastContact}
    onChange={(e) => setSelectedPartner({...selectedPartner, lastContact: e.target.value})}
    className="col-span-3"
  />
</div>
</div>
<DialogFooter>
<Button onClick={() => {
  updatePartner(selectedPartner.id, selectedPartner);
  setSelectedPartner(null);
}}>Save Changes</Button>
</DialogFooter>
</DialogContent>
</Dialog>
)}

{/* Add New Partner Dialog */}
<Dialog open={isAddPartnerDialogOpen} onOpenChange={setIsAddPartnerDialogOpen}>
<DialogTrigger asChild>
  <Button><PlusCircle className="mr-2 h-4 w-4" /> Add Partner</Button>
</DialogTrigger>
<DialogContent className="sm:max-w-[425px]">
  <DialogHeader>
    <DialogTitle>Add New Partner</DialogTitle>
    <DialogDescription>
      Enter the details of the new community partner here.
    </DialogDescription>
  </DialogHeader>
  <div className="grid gap-4 py-4">
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="name" className="text-right">
        Name
      </Label>
      <Input
        id="name"
        value={newPartner.name}
        onChange={(e) => setNewPartner({...newPartner, name: e.target.value})}
        className="col-span-3"
      />
    </div>
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="type" className="text-right">
        Type
      </Label>
      <Input
        id="type"
        value={newPartner.type}
        onChange={(e) => setNewPartner({...newPartner, type: e.target.value})}
        className="col-span-3"
      />
    </div>
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="collaboration" className="text-right">
        Collaboration
      </Label>
      <Input
        id="collaboration"
        value={newPartner.collaboration}
        onChange={(e) => setNewPartner({...newPartner, collaboration: e.target.value})}
        className="col-span-3"
      />
    </div>
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="status" className="text-right">
        Status
      </Label>
      <Select 
        value={newPartner.status} 
        onValueChange={(value) => setNewPartner({...newPartner, status: value})}
      >
        <SelectTrigger className="col-span-3">
          <SelectValue placeholder="Select a status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Active">Active</SelectItem>
          <SelectItem value="Pending">Pending</SelectItem>
          <SelectItem value="Inactive">Inactive</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>
  <DialogFooter>
    <Button type="submit" onClick={addPartner}>Add Partner</Button>
  </DialogFooter>
</DialogContent>
</Dialog>

{/* Schedule Meeting Dialog */}
<Dialog>
<DialogTrigger asChild>
  <Button className="mt-4">Schedule Meeting</Button>
</DialogTrigger>
<DialogContent className="sm:max-w-[425px]">
  <DialogHeader>
    <DialogTitle>Schedule a Meeting</DialogTitle>
    <DialogDescription>
      Select a partner and date to schedule a meeting.
    </DialogDescription>
  </DialogHeader>
  <div className="grid gap-4 py-4">
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="meeting-partner" className="text-right">
        Partner
      </Label>
      <Select>
        <SelectTrigger id="meeting-partner" className="col-span-3">
          <SelectValue placeholder="Select a partner" />
        </SelectTrigger>
        <SelectContent>
          {partners.map((partner) => (
            <SelectItem key={partner.id} value={partner.id.toString()}>{partner.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
    <div className="grid grid-cols-4 items-center gap-4">
      <Label className="text-right">Date</Label>
      <div className="col-span-3">
        <Calendar />
      </div>
    </div>
  </div>
  <DialogFooter>
    <Button type="submit">Schedule Meeting</Button>
  </DialogFooter>
</DialogContent>
</Dialog>

{/* Partnership Health Overview */}
<Card className="mt-8">
<CardHeader>
  <CardTitle>Partnership Health Overview</CardTitle>
  <CardDescription>A quick glance at the health of your community partnerships</CardDescription>
</CardHeader>
<CardContent>
  <div className="space-y-4">
    {partners.map((partner) => (
      <div key={partner.id} className="flex items-center space-x-4">
        <div className="w-[200px]">{partner.name}</div>
        <div className="flex-1">
          <div className="h-2 bg-gray-200 rounded">
            <div 
              className="h-2 bg-green-500 rounded" 
              style={{width: `${(partner.impact / stats.totalImpact) * 100}%`}}
            ></div>
          </div>
        </div>
        <div className="w-[100px] text-right">{partner.impact} impact</div>
      </div>
    ))}
  </div>
</CardContent>
</Card>

{/* Recent Activities */}
<Card className="mt-8">
<CardHeader>
  <CardTitle>Recent Activities</CardTitle>
  <CardDescription>Latest events and communications with partners</CardDescription>
</CardHeader>
<CardContent>
  <div className="space-y-4">
    {[...events, ...messages].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5).map((item, index) => (
      <div key={index} className="flex items-start space-x-4">
        {'title' in item ? (
          <CalendarDays className="h-5 w-5 mt-0.5 text-muted-foreground" />
        ) : (
          <MessageSquare className="h-5 w-5 mt-0.5 text-muted-foreground" />
        )}
        <div className="flex-1 space-y-1">
          <p className="text-sm font-medium leading-none">
            {'title' in item ? item.title : `Message from ${item.partner}`}
          </p>
          <p className="text-sm text-muted-foreground">
            {'title' in item ? `Event with ${item.partner}` : item.content}
          </p>
          <p className="text-xs text-muted-foreground">{item.date}</p>
        </div>
      </div>
    ))}
  </div>
</CardContent>
</Card>
</div>
);
};

export default CommunityPartnerships;