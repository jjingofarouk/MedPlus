import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import Button from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { FaHandsHelping, FaCommentDots, FaBrain } from 'react-icons/fa';

const MentalHealthContent = ({ resources }) => {
  if (!resources.length) return <p>No mental health resources available at the moment.</p>;

  return (
    <div className="mental-health-container">
      <h2 className="text-2xl font-bold mb-4">Mental Health Resources</h2>
      <Tabs defaultValue="resources">
        <TabsList>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="selfCare">Self-Care</TabsTrigger>
          <TabsTrigger value="communitySupport">Community Support</TabsTrigger>
        </TabsList>

        {/* Mental Health Resources */}
        <TabsContent value="resources">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((resource) => (
              <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{resource.description}</CardDescription>
                </CardContent>
                <Button variant="default">Learn More</Button>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Self-Care */}
        <TabsContent value="selfCare">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle><FaBrain /> Self-Care Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Mindfulness and meditation</li>
                  <li>Exercise and physical activity</li>
                  <li>Healthy eating habits</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Community Support */}
        <TabsContent value="communitySupport">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle><FaHandsHelping /> Join a Support Group</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Connect with others facing similar challenges.</p>
              </CardContent>
              <Button variant="default">Find a Group</Button>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle><FaCommentDots /> Talk to a Counselor</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Schedule a session with a mental health counselor.</p>
              </CardContent>
              <Button variant="default">Book a Session</Button>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MentalHealthContent;
