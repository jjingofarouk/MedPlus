  // src/App.js

  import "bootstrap/dist/css/bootstrap.min.css";
  import React, { useEffect, lazy, Suspense } from 'react'; 
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes here
  import ProtectedRoute from './ProtectedRoute'; // Adjust the path as necessary
  import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"; // Import Apollo Client dependencies
  import { MedicationProvider } from './components/patients/MedicationContext'; // Import MedicationProvider
  import MedicationsContent from './components/patients/MedicationsContent'; // Import your Medications component
 import MedicinePrices from './components/patients/MedicinePrices';
  import { ToastContainer } from "react-toastify";
  import Container from "react-bootstrap/Container";
  import Header from "./components/header/Header";
  import { RoleProvider, useRole } from './RoleContext'; 
  import LoginForm from './components/LoginForm';
  import LandingPage from './components/landingpage/LandingPage';
import PatientHome from './components/dashboard/PatientHome';
import DoctorHome from './components/dashboard/DoctorHome';
import HospitalHome from './components/dashboard/HospitalHome';
import PatientForm from "./components/patients/PatientForm";
import PatientMainPage from "./components/patients/PatientMainPage";
import PatientProfile from "./components/patients/PatientProfile";
import PatientRecord from "./components/patients/PatientRecord";
import Labs from './components/patients/records/Labs';
import Rad from './components/patients/records/Rad';
import Genetics from './components/patients/Genetics';
import Vaccination from './components/patients/records/Vaccination';
import MedicalDictionary from './components/patients/MedicalDictionary';
import DiabetesManagement from './components/patients/chronics/DiabetesManagement';
import HypertensionManagement from './components/patients/chronics/HypertensionManagement';
import HIVManagement from './components/patients/chronics/HIVManagement';
import TuberculosisManagement from './components/patients/chronics/TuberculosisManagement';
import AsthmaManagement from './components/patients/chronics/AsthmaManagement';
import SickleCellManagement from './components/patients/chronics/SickleCellManagement';
import CKDManagement from './components/patients/chronics/CKDManagement'; // Chronic Kidney Disease
import EpilepsyManagement from './components/patients/chronics/EpilepsyManagement';
import StrokeManagement from './components/patients/chronics/StrokeManagement';
import SignUp from './components/SignUp';
import Book from './components/patients/appointments/Book';
import RebookAppointment from './components/patients/appointments/RebookAppointment';
import CancelAppointment from './components/patients/appointments/CancelAppointment';
import ApproveAppointment from './components/doctor/appointments/PendingAppointment';
import ManageAvailability from './components/doctor/appointments/ManageAvailability';
import CME from './components/doctor/discover/CME';
import CaseDetail from './components/doctor/discover/CaseDetail';

import ManageAppointments from './components/doctor/appointments/ManageAppointments';
import PatientsList from "./components/patients/PatientsList";
import Chat from './components/consultations/Chat';
import Video from './components/consultations/Video';
import ViewMedicalHistory from './components/consultations/ViewMedicalHistory';
import ICD from "./components/icd/ICD";
import RecordForm from "./components/records/RecordForm";
import PublicHospitalsSection from './components/directory/PublicHospitalsSection';
import PharmaciesSection from './components/directory/PharmaciesSection';
import HealthCampaignsSection from './components/directory/HealthCampaignsSection';
import DoctorSection from './components/directory/DoctorsSection';
import Forum from './components/forum/Forum';
import EmergencyRouteSection from './components/directory/EmergencyRouteSection';
import Symptom from './components/symptomchecker/Symptom';
import DashboardPatient from "./components/patients/DashboardPatient";
import AIAssistedDiagnosis from "./components/doctor/AIAssistedDiagnosis";
import CaseStudies from './components/doctor/discover/CaseStudies';
import RescheduleAppointment from './components/doctor/RescheduleAppointment';
import PatientVisits from './components/doctor/history/PatientVisits';
import Prescriptions from './components/doctor/history/Prescriptions';
import Billing from "./components/doctor/Billing";
import CarePlanManagement from "./components/doctor/CarePlanManagement";
import ClinicalDecisionSupport from "./components/doctor/clinical/ClinicalDecisionSupport";
import EMR from "./components/doctor/history/EMR";
import EPrescriptions from "./components/doctor/EPrescriptions";
import EvidenceBasedProtocols from "./components/doctor/clinical/EvidenceBasedProtocols";
import Consultation from './components/doctor/Consultation';
import ImagingViewer from "./components/doctor/ImagingViewer";
import LabResults from "./components/doctor/LabResults";
import ResearchTools from './components/doctor/discover/ResearchTools'
import LabImagingOrders from "./components/doctor/LabImagingOrders ";
import IntellingentScheduling from "./components/doctor/IntelligentScheduling";
import PatientDashboards from "./components/doctor/PatientDashboards";
import History from "./components/doctor/history/History";
import PatientMonitoring from "./components/doctor/PatientMonitoring";
import AppointmentHistory from "./components/patients/appointments/AppointmentHistory";
import CaregiverResources from "./components/patients/CaregiverResources"
import CarePlans from "./components/patients/CarePlans";
import CareReminders from "./components/patients/CareReminders";
import ChronicsContent from "./components/patients/chronics/ChronicsContent";
import Feedback from "./components/doctor/support/Feedback";
import HealthChallenges from "./components/patients/HealthChallenges";
import HealthEducation from "./components/patients/HealthEducation";
import { ChronicsProvider } from './components/patients/chronics/ChronicsContext';
import UCG from './components/doctor/clinical/UCG';
import PatientAppointments from "./components/patients/PatientAppointments";
import PatientCommunity from "./components/patients/PatientCommunity";
import PrescriptionRefills from "./components/patients/PrescriptionRefills";
import ReferralsContent from "./components/patients/ReferralsContent";
import SecondOpinionsLink from "./components/patients/SecondOpinionsLink";
import SpecialistReferralsLink from "./components/patients/SpecialistReferralsLink";
import SupportGroups from "./components/patients/SupportGroups";
import SpecialistReferrals from "./components/patients/SpecialistReferrals";
import MentalHealth from "./components/patients/MentalHealth";
import Insights from "./components/patients/hub/InsightsLink"
import VitalSigns from './components/patients/hub/VitalSigns';
import HealthRecords from "./components/patients/HealthRecords";
import MedicalImaging from "./components/patients/MedicalImaging";
import GeneticProfile from "./components/patients/GeneticProfile";
import MyCare from "./components/patients/MyCare";
import SmartDocumentation from "./components/doctor/SmartDocumentation";
import IntelligentScheduling from "./components/doctor/IntelligentScheduling";
import PerformanceAnalytics from "./components/hospitals/PerformanceAnalytics";
import PatientEngagementTools from "./components/doctor/PatientEngagementTools";
import CareTeamCollaboration from "./components/doctor/CareTeamCollaboration";
import SpecialistNetwork from "./components/doctor/SpecialistNetwork";
import ReferralManagement from "./components/doctor/ReferralManagement";
import UgRads from "./components/doctor/discover/UgRads";
import FileSharing from "./components/doctor/collaboration/FileSharing";
import Analytics from "./components/doctor/collaboration/Analytics";
import Network from "./components/doctor/collaboration/Network";
import Referrals from "./components/doctor/collaboration/Referrals";
import SmartScheduler from "./components/doctor/collaboration/SmartScheduler";
import Engagement from "./components/doctor/collaboration/Engagement";

import ContinuingEducation from "./components/doctor/ContinuingEducation";
import ClinicalTrials from "./components/doctor/discover/ClinicalTrials";
import MedicalLiterature from "./components/doctor/MedicalLiterature";
import BurnoutPrevention from "./components/doctor/support/BurnoutPrevention";
import PeerSupport from "./components/doctor/support/PeerSupport";
import TechnicalSupport from "./components/doctor/support/TechnicalSupport";
import StartConsultation from "./components/consultations/StartConsultation";

// Import Components
import CommandCenter from './components/hospitals/operations/CommandCenter';
import CapacityManagement from './components/hospitals/operations/CapacityManagement';
import ResourceAllocation from './components/hospitals/operations/ResourceAllocation';
import StaffScheduling from './components/hospitals/operations/StaffScheduling';
import EmergencyPreparedness from './components/hospitals/operations/EmergencySimulator';
import SmartAdmissions from './components/hospitals/SmartAdmissions';
import BedManagement from './components/hospitals/BedManagement';
import PatientFlowTracking from './components/hospitals/PatientFlowTracking';
import DischargePlanning from './components/hospitals/DischargePlanning';
import TransferCenter from './components/hospitals/TransferCenter';

import QualityMetrics from './components/hospitals/QualityMetrics';
import ClinicalPathways from './components/hospitals/ClinicalPathways';
import InfectionControl from './components/hospitals/InfectionControl';
import Documentation from './components/hospitals/Documentation';
import CareCoordination from './components/hospitals/CareCoordination';
import VirtualRounds from './components/hospitals/VirtualRounds';
import PredictiveAnalytics from './components/hospitals/PredictiveAnalytics';
import PopulationHealthManagement from './components/hospitals/PopulationHealthManagement';
import OperationalInsights from './components/hospitals/OperationalInsights';
import FinancialPerformanceAnalytics from './components/hospitals/FinancialPerformanceAnalytics';
import ResearchDataManagement from './components/hospitals/ResearchDataManagement';

import ComplianceTracker from './components/hospitals/ComplianceTracker';
import IncidentReporting from './components/hospitals/IncidentReporting';
import PatientSafety from './components/hospitals/PatientSafety';
import AuditManagement from './components/hospitals/AuditManagement';
import DigitalPolicyProcedures from './components/hospitals/DigitalPolicyProcedures';
import CommunityHealthPrograms from './components/hospitals/CommunityHealthPrograms';
import PatientEducation from './components/hospitals/PatientEducation';
import VirtualHealthScreenings from './components/hospitals/VirtualHealthScreenings';
import WellnessInitiatives from './components/hospitals/WellnessInitiatives';
import CommunityPartnerships from './components/hospitals/CommunityPartnerships';
import ClinicalCalculators from "./components/doctor/clinical/calculators/ClinicalCalculators";
import './App.css';
import InsightsLink from "./components/patients/hub/InsightsLink";

const client = new ApolloClient({
  uri: "https://your-graphql-endpoint.com/graphql", // Replace with your GraphQL API URL
  cache: new InMemoryCache()
});

const App = () => {
  const { role, setRole } = useRole();

  const handleLogin = (role) => {
    localStorage.setItem("userRole", role);
    setRole(role);
  };

  useEffect(() => {
    const storedUserRole = localStorage.getItem("userRole");
    if (storedUserRole) {
      setRole(storedUserRole);
    }
  }, [setRole]);

  return (
    <RoleProvider>
      <ApolloProvider client={client}>
        <MedicationProvider>
          <Container bg="dark" fluid className="p-0 m-0" data-bs-theme="dark">
            <ToastContainer />
            <Header />
            <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
                <Route path="/case/:id" element={<CaseDetail />} /> {/* Route for case details */}

        {/* Protected routes for dashboards */}
        <Route path="/patient-dashboard" element={<PatientHome />} />
<Route path="/dashboard-patient" element={<DashboardPatient />} />
<Route path="/doctor-dashboard" element={<DoctorHome />} />
<Route path="/hospital-dashboard" element={<HospitalHome />} />

{/* Patient routes */}
<Route path="/patients" element={<PatientForm />} />
<Route path="/main" element={<PatientMainPage />} />
<Route path="/profile" element={<PatientProfile />} />

{/* Doctor routes */}
<Route path="/approve" element={<ApproveAppointment />} />
<Route path="/availability" element={<ManageAvailability />} />
<Route path="/list" element={<PatientsList />} />
<Route path="/appointments" element={<ManageAppointments />} />
<Route path="/cme" element={<CME />} />
<Route path="/network" element={<Network />} />
<Route path="/refer" element={<Referrals />} />
<Route path="/scheduler" element={<SmartScheduler />} />
<Route path="/engagement" element={<Engagement />} />
<Route path="/analytics" element={<Analytics />} />
<Route path="/files" element={<FileSharing />} />
<Route path="/billing" element={<Billing />} />

{/* Shared routes (patient and doctor) */}
<Route path="/chat" element={<Chat />} />
<Route path="/video" element={<Video />} />
<Route path="/history" element={<History />} />

{/* Routes accessible to all authenticated users */}
<Route path="/icd" element={<ICD />} />
<Route path="/record-form" element={<RecordForm />} />

{/* Hospital Routes */}
<Route path="/command" element={<CommandCenter />} />
<Route path="/capacity-management" element={<CapacityManagement />} />
<Route path="/resource-allocation" element={<ResourceAllocation />} />
<Route path="/staff-scheduling" element={<StaffScheduling />} />
<Route path="/emergency-preparedness" element={<EmergencyPreparedness />} />
<Route path="/admissions" element={<SmartAdmissions />} />
<Route path="/beds" element={<BedManagement />} />
<Route path="/patient-flow" element={<PatientFlowTracking />} />
<Route path="/discharge" element={<DischargePlanning />} />
<Route path="/transfer" element={<TransferCenter />} />

{/* Analytics and Reporting Routes */}
<Route path="/quality" element={<QualityMetrics />} />
<Route path="/pathways" element={<ClinicalPathways />} />
<Route path="/infections" element={<InfectionControl />} />
<Route path="/documentation" element={<Documentation />} />
<Route path="/care-coordination" element={<CareCoordination />} />
<Route path="/rounds" element={<VirtualRounds />} />
<Route path="/predictive-analytics" element={<PredictiveAnalytics />} />
<Route path="/population-health" element={<PopulationHealthManagement />} />
<Route path="/operational-insights" element={<OperationalInsights />} />
<Route path="/finances" element={<FinancialPerformanceAnalytics />} />
<Route path="/research-data" element={<ResearchDataManagement />} />
<Route path="/insights" element={<InsightsLink />} />

{/* Compliance and Safety Routes */}
<Route path="/regulatory-compliance" element={<ComplianceTracker />} />

<Route path="/reporting" element={<IncidentReporting />} />
<Route path="/safety" element={<PatientSafety />} />
<Route path="/audits" element={<AuditManagement />} />
<Route path="/policy-procedures" element={<DigitalPolicyProcedures />} />

{/* Community and Education Routes */}
<Route path="/community" element={<CommunityHealthPrograms />} />
<Route path="/patient-education" element={<PatientEducation />} />
<Route path="/health-screenings" element={<VirtualHealthScreenings />} />
<Route path="/wellness-initiatives" element={<WellnessInitiatives />} />
<Route path="/community-partnerships" element={<CommunityPartnerships />} />

{/* Protected Routes for Patient Components */}
<Route path="/patient_dashboard" element={<PatientHome />} />
<Route path="/symptom" element={<Symptom />} />
<Route path="/referrals" element={<SpecialistReferrals />} />
<Route path="/imaging" element={<MedicalImaging />} />
<Route path="/genetic-profile" element={<GeneticProfile />} />
<Route path="/appointment-history" element={<AppointmentHistory />} />
<Route path="/care-team" element={<CareTeamCollaboration />} />
<Route path="/care-reminders" element={<CareReminders />} />
<Route path="/prescriptions" element={<Prescriptions />} />
<Route path="/education" element={<HealthEducation />} />
<Route path="/support-groups" element={<SupportGroups />} />
<Route path="/challenges" element={<HealthChallenges />} />
<Route path="/patient-community" element={<PatientCommunity />} />

{/* Protected Routes for Doctor Components */}
<Route path="/patient-dashboard" element={<PatientHome />} />
<Route path="/care-plans" element={<CarePlanManagement />} />
<Route path="/monitoring" element={<PatientMonitoring />} />
<Route path="/consultation" element={<Consultation />} />
<Route path="/reschedule" element={<RescheduleAppointment />} />
<Route path="/history" element={<History />} />
<Route path="/research" element={<ResearchTools />} />
<Route path="/visits" element={<PatientVisits />} />
<Route path="/prescriptions" element={<Prescriptions />} />
<Route path="/diagnosis" element={<AIAssistedDiagnosis />} />
<Route path="/decision" element={<ClinicalDecisionSupport />} />
<Route path="/e-prescriptions" element={<EPrescriptions />} />
<Route path="/lab-imaging" element={<LabImagingOrders />} />
<Route path="/treatment-protocols" element={<EvidenceBasedProtocols />} />
<Route path="/emr" element={<EMR />} />
<Route path="/lab-results" element={<LabResults />} />
<Route path="/documentation" element={<SmartDocumentation />} />
<Route path="/schedule" element={<IntelligentScheduling />} />
<Route path="/billing" element={<Billing />} />
<Route path="/performance" element={<PerformanceAnalytics />} />
<Route path="/patient-engagement" element={<PatientEngagementTools />} />
<Route path="/specialist-network" element={<SpecialistNetwork />} />
<Route path="/referral-doctor" element={<ReferralManagement />} />
<Route path="/cases" element={<CaseStudies />} />
<Route path="/radhub" element={<UgRads />} />
<Route path="/UCG" element={<UCG />} />
<Route path="/calculators" element={<ClinicalCalculators />} />

<Route path="/continuing-education" element={<ContinuingEducation />} />
<Route path="/trials" element={<ClinicalTrials />} />
<Route path="/medical-literature" element={<MedicalLiterature />} />
<Route path="/burnout" element={<BurnoutPrevention />} />
<Route path="/peer-support" element={<PeerSupport />} />
<Route path="/tech-support" element={<TechnicalSupport />} />
<Route path="/feedback" element={<Feedback />} />
<Route path="/meds" element={<MedicationsContent />} />
<Route path="/dictionary" element={<MedicalDictionary />} />

<Route path="/book" element={<Book />} />
<Route path="/vitals" element={<VitalSigns />} />
<Route path="/forum" element={<Forum />} />
<Route path="/opinions" element={<SecondOpinionsLink />} />
<Route path="/referrals" element={<ReferralsContent />} />
<Route path="/cares" element={<CarePlans />} />
<Route path="/mental" element={<MentalHealth />} />
<Route path="/record" element={<HealthRecords />} />
<Route path="/labs" element={<Labs />} />
<Route path="/rad" element={<Rad />} />
<Route path="/genetics" element={<Genetics />} />
<Route path="/vaccination" element={<Vaccination />} />
<Route path="/prices" element={<MedicinePrices />} />
<Route path="/chronics" element={<ChronicsContent />} />
<Route path="/diabetes-management" element={<DiabetesManagement />} />
<Route path="/hypertension-management" element={<HypertensionManagement />} />
<Route path="/hiv-management" element={<HIVManagement />} />
<Route path="/tuberculosis-management" element={<TuberculosisManagement />} />
<Route path="/asthma-management" element={<AsthmaManagement />} />
<Route path="/sickle-cell-management" element={<SickleCellManagement />} />
<Route path="/ckd-management" element={<CKDManagement />} />
<Route path="/epilepsy-management" element={<EpilepsyManagement />} />
<Route path="/stroke-management" element={<StrokeManagement />} />
<Route path="/rebook" element={<RebookAppointment />} />
<Route path="/cancel" element={<CancelAppointment />} />
<Route path="/caregivers" element={<CaregiverResources />} />
<Route path="/consultations" element={<StartConsultation />} />

        {/* Public routes */}
        <Route path="/hospitals" element={<PublicHospitalsSection />} />
        <Route path="/pharmacies" element={<PharmaciesSection />} />
        <Route path="/campaigns" element={<HealthCampaignsSection />} />
        <Route path="/doctors" element={<DoctorSection />} />
        <Route path="/emergency" element={<EmergencyRouteSection />} />
        <Route path="/signup" element={<SignUp onLogin={handleLogin} />} />
        <Route path="/chronics" element={<ChronicsProvider><ChronicsContent /></ChronicsProvider>} />
</Routes>
          </Container>
        </MedicationProvider>
      </ApolloProvider>
    </RoleProvider>
  );
};

export default App;