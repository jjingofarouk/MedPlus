import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MedicationProvider } from './components/patients/MedicationContext';
import MedicationsContent from './components/patients/MedicationsContent';
import MedicinePrices from './components/patients/MedicinePrices';
import PatientForm from "./components/patients/PatientForm";
import PatientMainPage from "./components/patients/PatientMainPage";
import PatientProfile from "./components/patients/PatientProfile";
import PatientRecord from "./components/patients/PatientRecord";
import Labs from './components/patients/Labs';
import Rad from './components/patients/Rad';
import Genetics from './components/patients/Genetics';
import Vaccination from './components/patients/Vaccination';
import DiabetesManagement from './components/patients/chronics/DiabetesManagement';
import HypertensionManagement from './components/patients/chronics/HypertensionManagement';
import HIVManagement from './components/patients/chronics/HIVManagement';
import TuberculosisManagement from './components/patients/chronics/TuberculosisManagement';
import AsthmaManagement from './components/patients/chronics/AsthmaManagement';
import SickleCellManagement from './components/patients/chronics/SickleCellManagement';
import CKDManagement from './components/patients/chronics/CKDManagement';
import EpilepsyManagement from './components/patients/chronics/EpilepsyManagement';
import StrokeManagement from './components/patients/chronics/StrokeManagement';
import Book from './components/patients/appointments/Book';
import RebookAppointment from './components/patients/appointments/RebookAppointment';
import CancelAppointment from './components/patients/appointments/CancelAppointment';
import PatientsList from "./components/patients/PatientsList";
import DashboardPatient from "./components/patients/DashboardPatient";
import AppointmentHistory from "./components/patients/appointments/AppointmentHistory";
import CaregiverResources from "./components/patients/CaregiverResources";
import CarePlans from "./components/patients/CarePlans";
import CareReminders from "./components/patients/CareReminders";
import ChronicsContent from "./components/patients/chronics/ChronicsContent";
import Feedback from "./components/patients/Feedback";
import HealthChallenges from "./components/patients/HealthChallenges";
import HealthEducation from "./components/patients/HealthEducation";
import { ChronicsProvider } from './components/patients/chronics/ChronicsContext';
import PatientAppointments from "./components/patients/PatientAppointments";
import PatientCommunity from "./components/patients/PatientCommunity";
import PrescriptionRefills from "./components/patients/PrescriptionRefills";
import ReferralsContent from "./components/patients/ReferralsContent";
import SecondOpinionsLink from "./components/patients/SecondOpinionsLink";
import SpecialistReferralsLink from "./components/patients/SpecialistReferralsLink";
import SupportGroups from "./components/patients/SupportGroups";
import WellnessPrograms from "./components/patients/WellnessPrograms";
import SpecialistReferrals from "./components/patients/SpecialistReferrals";
import MentalHealth from "./components/patients/MentalHealth";
import VitalSigns from './components/patients/VitalSigns';
import HealthRecords from "./components/patients/HealthRecords";
import MedicalImaging from "./components/patients/MedicalImaging";
import GeneticProfile from "./components/patients/GeneticProfile";
import MyCare from "./components/patients/MyCare";

function PatientRoutes() {
    return (
        <Router>
            <MedicationProvider>
                <ChronicsProvider>
                    <Switch>
                        <Route path="/medications" component={MedicationsContent} />
                        <Route path="/medicine-prices" component={MedicinePrices} />
                        <Route path="/patient-form" component={PatientForm} />
                        <Route path="/patient-main" component={PatientMainPage} />
                        <Route path="/patient-profile" component={PatientProfile} />
                        <Route path="/patient-record" component={PatientRecord} />
                        <Route path="/labs" component={Labs} />
                        <Route path="/radiology" component={Rad} />
                        <Route path="/genetics" component={Genetics} />
                        <Route path="/vaccination" component={Vaccination} />
                        
                        {/* Chronics Management */}
                        <Route path="/diabetes-management" component={DiabetesManagement} />
                        <Route path="/hypertension-management" component={HypertensionManagement} />
                        <Route path="/hiv-management" component={HIVManagement} />
                        <Route path="/tuberculosis-management" component={TuberculosisManagement} />
                        <Route path="/asthma-management" component={AsthmaManagement} />
                        <Route path="/sickle-cell-management" component={SickleCellManagement} />
                        <Route path="/ckd-management" component={CKDManagement} />
                        <Route path="/epilepsy-management" component={EpilepsyManagement} />
                        <Route path="/stroke-management" component={StrokeManagement} />
                        <Route path="/chronics-content" component={ChronicsContent} />
                        
                        {/* Appointments */}
                        <Route path="/book-appointment" component={Book} />
                        <Route path="/rebook-appointment" component={RebookAppointment} />
                        <Route path="/cancel-appointment" component={CancelAppointment} />
                        <Route path="/appointment-history" component={AppointmentHistory} />

                        <Route path="/caregiver-resources" component={CaregiverResources} />
                        <Route path="/care-plans" component={CarePlans} />
                        <Route path="/care-reminders" component={CareReminders} />
                        <Route path="/feedback" component={Feedback} />
                        <Route path="/health-challenges" component={HealthChallenges} />
                        <Route path="/health-education" component={HealthEducation} />
                        <Route path="/patient-appointments" component={PatientAppointments} />
                        <Route path="/patient-community" component={PatientCommunity} />
                        <Route path="/prescription-refills" component={PrescriptionRefills} />
                        <Route path="/referrals-content" component={ReferralsContent} />
                        <Route path="/second-opinions" component={SecondOpinionsLink} />
                        <Route path="/specialist-referrals" component={SpecialistReferralsLink} />
                        <Route path="/support-groups" component={SupportGroups} />
                        <Route path="/wellness-programs" component={WellnessPrograms} />
                        <Route path="/mental-health" component={MentalHealth} />
                        <Route path="/vital-signs" component={VitalSigns} />
                        <Route path="/health-records" component={HealthRecords} />
                        <Route path="/medical-imaging" component={MedicalImaging} />
                        <Route path="/genetic-profile" component={GeneticProfile} />
                        <Route path="/my-care" component={MyCare} />
                        <Route path="/dashboard-patient" component={DashboardPatient} />
                        <Route path="/patients-list" component={PatientsList} />
                    </Switch>
                </ChronicsProvider>
            </MedicationProvider>
        </Router>
    );
}

export default PatientRoutes;
