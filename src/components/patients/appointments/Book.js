import React, { useState, useEffect, useMemo } from 'react';
import { format, addDays, isBefore, isAfter, parseISO } from 'date-fns';
import  Calendar  from '../../ui/Calendar';
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { Input } from "../../ui/input";
import  Textarea  from "../../ui/textarea";
import  Button  from "../../ui/button";
import { Alert, AlertDescription, AlertTitle } from "../../ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../ui/dialog";
import { AlertCircle, Calendar as CalendarIcon, Clock, User, Video, Phone, MessageSquare } from 'lucide-react';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    doctorId: '',
    date: '',
    time: '',
    reason: 'Consultation',
    appointmentType: 'In-Person',
    communicationMethod: 'Phone',
    notes: '',
  });
  const [doctors, setDoctors] = useState([]);
  const [message, setMessage] = useState('');
  const [isAvailable, setIsAvailable] = useState(true);
  const [loading, setLoading] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

  useEffect(() => {
    fetchAvailableDoctors();
  }, []);

  useEffect(() => {
    if (formData.doctorId && formData.date) {
      fetchAvailableSlots(formData.doctorId, formData.date);
    }
  }, [formData.doctorId, formData.date]);

  const fetchAvailableDoctors = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/doctors/available', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setDoctors(data.doctors);
        setIsAvailable(data.doctors.length > 0);
      } else {
        setMessage('Failed to fetch available doctors.');
      }
    } catch (error) {
      console.error('Error fetching available doctors:', error);
      setMessage('An error occurred while fetching available doctors.');
    } finally {
      setLoading(false);
    }
  };

  const fetchAvailableSlots = async (doctorId, date) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/api/doctors/${doctorId}/slots?date=${date}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAvailableSlots(data.slots);
      } else {
        setMessage('Failed to fetch available time slots.');
      }
    } catch (error) {
      console.error('Error fetching available slots:', error);
      setMessage('An error occurred while fetching available time slots.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'doctorId') {
      setSelectedDoctor(doctors.find(doctor => doctor.id === value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsConfirmDialogOpen(true);
  };

  const confirmBooking = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/appointments/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Appointment booked successfully!');
        // Reset form or handle further actions if needed
      } else {
        setMessage(data.message || 'Failed to book appointment.');
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      setMessage('An error occurred while booking the appointment.');
    } finally {
      setLoading(false);
      setIsConfirmDialogOpen(false);
    }
  };

  const disabledDays = useMemo(() => {
    const today = new Date();
    const threeDaysAhead = addDays(today, 3);
    return { before: today, after: addDays(today, 30) };
  }, []);

  const renderDoctorInfo = () => (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Doctor Information</CardTitle>
      </CardHeader>
      <CardContent>
        {selectedDoctor ? (
          <>
            <p><strong>Name:</strong> {selectedDoctor.name}</p>
            <p><strong>Specialty:</strong> {selectedDoctor.specialty}</p>
            <p><strong>Experience:</strong> {selectedDoctor.experience} years</p>
          </>
        ) : (
          <p>Please select a doctor to view their information.</p>
        )}
      </CardContent>
    </Card>
  );

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Book Appointment</CardTitle>
      </CardHeader>
      <CardContent>
        {message && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}
        {isAvailable ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Tabs defaultValue="doctor" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="doctor">Select Doctor</TabsTrigger>
                <TabsTrigger value="datetime">Date & Time</TabsTrigger>
                <TabsTrigger value="details">Appointment Details</TabsTrigger>
              </TabsList>
              <TabsContent value="doctor">
                <Select
                  name="doctorId"
                  value={formData.doctorId}
                  onValueChange={(value) => handleChange('doctorId', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a doctor" />
                  </SelectTrigger>
                  <SelectContent>
                    {doctors.map((doctor) => (
                      <SelectItem key={doctor.id} value={doctor.id}>
                        {doctor.name} ({doctor.specialty})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {renderDoctorInfo()}
              </TabsContent>
              <TabsContent value="datetime">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <Calendar
                      mode="single"
                      selected={formData.date ? parseISO(formData.date) : undefined}
                      onSelect={(date) => handleChange('date', format(date, 'yyyy-MM-dd'))}
                      disabled={disabledDays}
                      className="rounded-md border"
                    />
                  </div>
                  <div className="flex-1">
                    <Select
                      name="time"
                      value={formData.time}
                      onValueChange={(value) => handleChange('time', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="details">
                <div className="space-y-4">
                  <Select
                    name="reason"
                    value={formData.reason}
                    onValueChange={(value) => handleChange('reason', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Reason for visit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Consultation">Consultation</SelectItem>
                      <SelectItem value="Follow-up">Follow-up</SelectItem>
                      <SelectItem value="Routine Check-up">Routine Check-up</SelectItem>
                      <SelectItem value="Urgent Care">Urgent Care</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select
                    name="appointmentType"
                    value={formData.appointmentType}
                    onValueChange={(value) => handleChange('appointmentType', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Appointment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="In-Person">In-Person</SelectItem>
                      <SelectItem value="Telehealth">Telehealth</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select
                    name="communicationMethod"
                    value={formData.communicationMethod}
                    onValueChange={(value) => handleChange('communicationMethod', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Preferred communication method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Phone">Phone</SelectItem>
                      <SelectItem value="Video Call">Video Call</SelectItem>
                      <SelectItem value="Chat">Chat</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea
                    placeholder="Additional notes"
                    name="notes"
                    value={formData.notes}
                    onChange={(e) => handleChange('notes', e.target.value)}
                  />
                </div>
              </TabsContent>
            </Tabs>
            <Button type="submit" disabled={loading}>
              {loading ? 'Booking...' : 'Book Appointment'}
            </Button>
          </form>
        ) : (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>No Available Doctors</AlertTitle>
            <AlertDescription>
              There are currently no available doctors for appointments.
            </AlertDescription>
          </Alert>
        )}
      </CardContent>

      <Dialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Appointment</DialogTitle>
            <DialogDescription>
              Please review your appointment details before confirming.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <User className="h-4 w-4" />
              <span className="col-span-3">{selectedDoctor?.name}</span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <CalendarIcon className="h-4 w-4" />
              <span className="col-span-3">{formData.date}</span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Clock className="h-4 w-4" />
              <span className="col-span-3">{formData.time}</span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              {formData.appointmentType === 'In-Person' ? (
                <User className="h-4 w-4" />
              ) : (
                <Video className="h-4 w-4" />
              )}
              <span className="col-span-3">{formData.appointmentType}</span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              {formData.communicationMethod === 'Phone' && <Phone className="h-4 w-4" />}
              {formData.communicationMethod === 'Video Call' && <Video className="h-4 w-4" />}
              {formData.communicationMethod === 'Chat' && <MessageSquare className="h-4 w-4" />}
              <span className="col-span-3">{formData.communicationMethod}</span>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsConfirmDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={confirmBooking} disabled={loading}>
              {loading ? 'Confirming...' : 'Confirm Booking'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default BookAppointment;