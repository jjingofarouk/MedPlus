import React, { useState, useEffect, useContext, Suspense } from 'react';
import DrugInteractionChecker from './DrugInteractionChecker';
import RefillReminders from './RefillReminders';
import MedicationAdherence from './MedicationAdherence';
import MedicinePrices from './MedicinePrices';
import MedicationHistory from './MedicationHistory';
import EducationalContent from './EducationalContent';
import AlternativeMedicationSuggestions from './AlternativeMedicationSuggestions';

import MedicationContext from './MedicationContext';
import LoadingSpinner from './ui/LoadingSpinner';
import VoiceInput from './VoiceInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileMedicalAlt, faBookJournalWhills, faBell, faHistory, faBook, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Button from "./ui/button";

const MedicationsContent = () => {
    const { medications, setMedications } = useContext(MedicationContext);
    const [selectedMedication, setSelectedMedication] = useState(null);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState(0); // Use index for active tab

    useEffect(() => {
        const fetchMedications = async () => {
            setLoading(true);
            try {
                const fetchedMedications = await new Promise((resolve) =>
                    setTimeout(() => resolve([{ id: 1, name: 'Aspirin' }, { id: 2, name: 'Ibuprofen' }]), 1000)
                );
                setMedications(fetchedMedications);
            } catch (error) {
                console.error('Failed to fetch medications', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMedications();
    }, [setMedications]);

    const handleMedicationSelect = (medication) => {
        setSelectedMedication(medication);
        setActiveTab(0); // Default to the first tab
    };

    return (
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle>Your Medications</CardTitle>
                <CardDescription>Manage and learn about your medications</CardDescription>
            </CardHeader>
            <CardContent>
                <VoiceInput onCommand={handleMedicationSelect} />

                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
                        {medications.map((item) => (
                            <Button
                                key={item.id}
                                variant="outline"
                                className="h-auto py-4 flex flex-col items-center justify-center text-center"
                                onClick={() => handleMedicationSelect(item)}
                            >
                                <span className="font-semibold">{item.name}</span>
                                <span className="text-sm text-muted-foreground mt-1">Click for details</span>
                            </Button>
                        ))}
                    </div>
                )}

                {selectedMedication && (
                    <Suspense fallback={<LoadingSpinner />}>
                        <Card>
                            <CardHeader>
                                <CardTitle>{selectedMedication.name}</CardTitle>
                                <CardDescription>Detailed information and management options</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Tabs onTabClick={setActiveTab}>
                                    <TabsList>
                                        <TabsTrigger value={0}><FontAwesomeIcon icon={faBookJournalWhills} className="mr-2" /> Drug Interaction</TabsTrigger>
                                        <TabsTrigger value={1}><FontAwesomeIcon icon={faBell} className="mr-2" /> Refill Reminders</TabsTrigger>
                                        <TabsTrigger value={2}><FontAwesomeIcon icon={faArrowRight} className="mr-2" /> Adherence</TabsTrigger>
                                        <TabsTrigger value={3}><FontAwesomeIcon icon={faArrowRight} className="mr-2" /> Price Comparison</TabsTrigger>
                                        <TabsTrigger value={4}><FontAwesomeIcon icon={faHistory} className="mr-2" /> History</TabsTrigger>
                                        <TabsTrigger value={5}><FontAwesomeIcon icon={faBook} className="mr-2" /> Education</TabsTrigger>
                                        <TabsTrigger value={6}><FontAwesomeIcon icon={faArrowRight} className="mr-2" /> Alternatives</TabsTrigger>
                                    </TabsList>


                                    <TabsContent activeTab={activeTab} index={0}>
                                        <DrugInteractionChecker medications={medications} selectedMedication={selectedMedication} />
                                    </TabsContent>
                                    <TabsContent activeTab={activeTab} index={1}>
                                        <RefillReminders medication={selectedMedication} />
                                    </TabsContent>
                                    <TabsContent activeTab={activeTab} index={2}>
                                        <MedicationAdherence medication={selectedMedication} />
                                    </TabsContent>

                                    <TabsContent activeTab={activeTab} index={3}>
                                        <MedicinePrices medication={selectedMedication} />
                                    </TabsContent>

                                    <TabsContent activeTab={activeTab} index={4}>
                                        <MedicationHistory medication={selectedMedication} />
                                    </TabsContent>
                                    <TabsContent activeTab={activeTab} index={5}>
                                        <EducationalContent medication={selectedMedication} />
                                    </TabsContent>
                                    <TabsContent activeTab={activeTab} index={6}>
                                        <AlternativeMedicationSuggestions medication={selectedMedication} />
                                    </TabsContent>
                                </Tabs>
                            </CardContent>
                        </Card>
                    </Suspense>
                )}
            </CardContent>
        </Card>
    );
};

export default MedicationsContent;
