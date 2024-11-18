import React, { useState } from 'react';
import { Calendar, Clock, MessageSquare, Star, DollarSign, CheckSquare, FileText, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Button from './ui/button';
import Badge from './ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

const ReferralsContent = ({ referrals = [] }) => {
  const [selectedReferral, setSelectedReferral] = useState(null);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-yellow-500';
      case 'accepted':
        return 'bg-green-500';
      case 'completed':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Specialist Referrals</h2>
      {referrals.length === 0 ? (
        <p>No referrals available.</p>
      ) : (
        referrals.map((referral) => (
          <Card key={referral.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{referral.specialist}</CardTitle>
              <CardDescription>{referral.speciality}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(referral.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="h-4 w-4" />
                <span>Estimated wait time: {referral.waitTime}</span>
              </div>
              <Badge className={`${getStatusColor(referral.status)} text-white`}>
                {referral.status}
              </Badge>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" onClick={() => setSelectedReferral(referral)}>
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{referral.specialist} - Referral Details</DialogTitle>
                    <DialogDescription>{referral.speciality}</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4" />
                      <span>Rating: {referral.rating}/5</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4" />
                      <span>Estimated cost: ${referral.estimatedCost}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="h-4 w-4" />
                      <span>Message specialist</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4" />
                      <span>Complete pre-appointment questionnaire</span>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Button variant="default">
                Accept Referral <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  );
};

export default ReferralsContent;
