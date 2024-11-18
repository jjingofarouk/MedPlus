
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes here
import ProtectedRoute from './ProtectedRoute'; // Adjust the path as necessary
import { useRole } from './RoleContext';  // Import the useRole hook

import LoginForm from './components/LoginForm';
import LandingPage from './components/landingpage/LandingPage';
import PatientHome from './components/dashboard/PatientHome';
import DoctorHome from './components/dashboard/DoctorHome';
import HospitalHome from './components/dashboard/HospitalHome';
import PatientForm from "./components/patients/PatientForm";
import PatientMainPage from "./components/patients/PatientMainPage";
import PatientProfile from "./components/patients/PatientProfile";
import PatientRecord from "./components/patients/PatientRecord";
import Book from './components/patients/appointments/Book';
import RebookAppointment from './components/patients/appointments/RebookAppointment';
import CancelAppointment from './components/patients/appointments/CancelAppointment';
import ApproveAppointment from './components/doctor/ApproveAppointment';
import ManageAvailability from './components/doctor/ManageAvailability';
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
import Community from './components/forum/Forum';
import EmergencyRouteSection from './components/directory/EmergencyRouteSection';
import Symptom from './components/symptomchecker/Symptom';
import DashboardPatient from "./components/patients/DashboardPatient";
import AIAssistedDiagnosis from "./components/doctor/AIAssistedDiagnosis";
import Billing from "./components/doctor/Billing";
import CarePlanManagement from "./components/doctor/CarePlanManagement";
import ClinicalDecisionSupport from "./components/doctor/clinical/ClinicalDecisionSupport";
import EMR from "./components/doctor/history/EMR";
import EPrescriptions from "./components/doctor/EPrescriptions";
import EvidenceBasedProtocols from "./components/doctor/clinical/EvidenceBasedProtocols";
import ImagingViewer from "./components/doctor/ImagingViewer";
import LabResults from "./components/doctor/LabResults";
import LabImagingOrders from "./components/doctor/LabImagingOrders ";
import IntellingentScheduling from "./components/doctor/IntelligentScheduling";
import PatientDashboards from "./components/doctor/PatientDashboards";
import PatientHistory from "./components/doctor/PatientHistory";
import PatientMonitoring from "./components/doctor/PatientMonitoring";
import WellnessAndSupport from "./components/doctor/WellnessAndSupport";
import AppointmentHistory from "./components/patients/appointments/AppointmentHistory";
import CaregiverResources from "./components/patients/CaregiverResources"
import CarePlans from "./components/patients/CarePlans";
import CareReminders from "./components/patients/CareReminders";
import Chronics from "./components/patients/chronics/Chronics";
import Feedback from "./components/patients/Feedback";
import HealthChallenges from "./components/patients/HealthChallenges";
import HealthEducation from "./components/patients/HealthEducation";
import InsightsLinks from "./components/patients/InsightsLink";

import PatientAppointments from "./components/patients/PatientAppointments";
import PatientCommunity from "./components/patients/PatientCommunity";
import PrescriptionRefills from "./components/patients/PrescriptionRefills";
import ReferralsContent from "./components/patients/ReferralsContent";
import SecondOpinionsLink from "./components/patients/SecondOpinionsLink";
import SpecialistReferralsLink from "./components/patients/SpecialistReferralsLink";
import SupportGroups from "./components/patients/SupportGroups";
import WellnessPrograms from "./components/patients/WellnessPrograms";

import SpecialistReferrals from "./components/patients/SpecialistReferrals";
import Medications from "./components/patients/Medications";
import MentalHealthSupport from "./components/patients/MentalHealthSupport";
import NutritionMealPlanning from "./components/patients/NutritionMealPlanning";
import FitnessActivityTracking from "./components/patients/FitnessActivityTracking";
import HealthRecords from "./components/patients/HealthRecords";
import MedicalImaging from "./components/patients/MedicalImaging";
import GeneticProfile from "./components/patients/GeneticProfile";
import VaccinationRecords from "./components/patients/VaccinationRecords";
import MyCare from "./components/patients/MyCare";
import SmartDocumentation from "./components/doctor/SmartDocumentation";
import IntelligentScheduling from "./components/doctor/IntelligentScheduling";
import PerformanceAnalytics from "./components/hospitals/PerformanceAnalytics";
import PatientEngagementTools from "./components/doctor/PatientEngagementTools";
import CareTeamCollaboration from "./components/doctor/CareTeamCollaboration";
import SpecialistNetwork from "./components/doctor/SpecialistNetwork";
import ReferralManagement from "./components/doctor/ReferralManagement";
import VirtualCases from "./components/doctor/VirtualCases";
import FileSharing from "./components/doctor/FileSharing";
import ContinuingEducation from "./components/doctor/ContinuingEducation";
import ClinicalTrials from "./components/doctor/discover/ClinicalTrials";
import ResearchTools from "./components/doctor/discover/ResearchTools";
import MedicalLiterature from "./components/doctor/MedicalLiterature";
import CaseStudies from "./components/doctor/discover/CaseStudies";
import BurnoutPrevention from "./components/doctor/BurnoutPrevention";
import PeerSupport from "./components/doctor/support/PeerSupport";
import TechnicalSupport from "./components/doctor/support/TechnicalSupport";


// Import Components
import CommandCenter from './components/hospitals/CommandCenter';
import CapacityManagement from './components/hospitals/CapacityManagement';
import ResourceAllocation from './components/hospitals/ResourceAllocation';
import StaffScheduling from './components/hospitals/StaffScheduling';
import EmergencyPreparedness from './components/hospitals/EmergencyPreparedness';
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

const Vitals = lazy(() => import('./components/patients/VitalSigns'));

const AppRoutes = ({ handleLogin }) => {
  const { role } = useRole();  // Ensure this is inside your functional component

    return (
        <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Updated Login Route */}
        <Route path="/login" element={<LoginForm onLogin={handleLogin} showModal={true} handleClose={() => {}} />} />

        {/* Protected routes for dashboards */}
        <Route path="/patient-home" element={
          <ProtectedRoute allowedRoles={['patient']} role={role}>
            <PatientHome />
          </ProtectedRoute>
        } />

<Route path="/patient_dashboard" element={
          <ProtectedRoute allowedRoles={['patient']} role={role}>
            <DashboardPatient />
          </ProtectedRoute>
        } />

        <Route path="/doctor-home" element={
          <ProtectedRoute allowedRoles={['doctor']} role={role}>
            <DoctorHome />
          </ProtectedRoute>
        } />
        <Route path="/hospital-home" element={
          <ProtectedRoute allowedRoles={['hospital']} role={role}>
            <HospitalHome />
          </ProtectedRoute>
        } />

        {/* Patient routes */}
        <Route path="/patients" element={
          <ProtectedRoute allowedRoles={['patient']} role={role}>
            <PatientForm />
          </ProtectedRoute>
        } />
        <Route path="/main" element={
          <ProtectedRoute allowedRoles={['patient']} role={role}>
            <PatientMainPage />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute allowedRoles={['patient']} role={role}>
            <PatientProfile />
          </ProtectedRoute>
        } />
        <Route path="/record" element={
          <ProtectedRoute allowedRoles={['patient']} role={role}>
            <PatientRecord />
          </ProtectedRoute>
        } />
        <Route path="/book" element={
          <ProtectedRoute allowedRoles={['patient']} role={role}>
            <Book />
          </ProtectedRoute>
        } />
        <Route path="/rebook" element={
          <ProtectedRoute allowedRoles={['patient']} role={role}>
            <RebookAppointment />
          </ProtectedRoute>
        } />
        <Route path="/cancel" element={
          <ProtectedRoute allowedRoles={['patient']} role={role}>
            <CancelAppointment />
          </ProtectedRoute>
        } />

        {/* Doctor routes */}
        <Route path="/approve" element={
          <ProtectedRoute allowedRoles={['doctor']} role={role}>
            <ApproveAppointment />
          </ProtectedRoute>
        } />
        <Route path="/availability" element={
          <ProtectedRoute allowedRoles={['doctor']} role={role}>
            <ManageAvailability />
          </ProtectedRoute>
        } />
        <Route path="/list" element={
          <ProtectedRoute allowedRoles={['doctor']} role={role}>
            <PatientsList />
          </ProtectedRoute>
        } />

        {/* Shared routes (patient and doctor) */}
        <Route path="/chat" element={
          <ProtectedRoute allowedRoles={['patient', 'doctor']} role={role}>
            <Chat />
          </ProtectedRoute>
        } />
        <Route path="/video" element={
          <ProtectedRoute allowedRoles={['patient', 'doctor']} role={role}>
            <Video />
          </ProtectedRoute>
        } />
        <Route path="/history" element={
          <ProtectedRoute allowedRoles={['patient', 'doctor']} role={role}>
            <ViewMedicalHistory />
          </ProtectedRoute>
        } />

        {/* Routes accessible to all authenticated users */}
        <Route path="/icd" element={
          <ProtectedRoute allowedRoles={['patient', 'doctor', 'hospital']} role={role}>
            <ICD />
          </ProtectedRoute>
        } />
        <Route path="/record-form" element={
          <ProtectedRoute allowedRoles={['patient', 'doctor', 'hospital']} role={role}>
            <RecordForm />
          </ProtectedRoute>
        } />

                {/* Hospital Routes */}
                <Route path="/command" element={
          <ProtectedRoute allowedRoles={['hospital']} role={role}>
            <CommandCenter />
          </ProtectedRoute>
        } />
        <Route path="/capacity-management" element={
          <ProtectedRoute allowedRoles={['hospital']} role={role}>
            <CapacityManagement />
          </ProtectedRoute>
        } />
        <Route path="/resource-allocation" element={
          <ProtectedRoute allowedRoles={['hospital']} role={role}>
            <ResourceAllocation />
          </ProtectedRoute>
        } />
        <Route path="/staff-scheduling" element={
          <ProtectedRoute allowedRoles={['hospital']} role={role}>
            <StaffScheduling />
          </ProtectedRoute>
        } />
        <Route path="/emergency-preparedness" element={
          <ProtectedRoute allowedRoles={['hospital']} role={role}>
            <EmergencyPreparedness />
          </ProtectedRoute>
        } />
        <Route path="/admissions" element={
          <ProtectedRoute allowedRoles={['hospital']} role={role}>
            <SmartAdmissions />
          </ProtectedRoute>
        } />
        <Route path="/beds" element={
          <ProtectedRoute allowedRoles={['hospital']} role={role}>
            <BedManagement />
          </ProtectedRoute>
        } />
        <Route path="/patientflow" element={
          <ProtectedRoute allowedRoles={['hospital']} role={role}>
            <PatientFlowTracking />
          </ProtectedRoute>
        } />
        <Route path="/discharge" element={
          <ProtectedRoute allowedRoles={['hospital']} role={role}>
            <DischargePlanning />
          </ProtectedRoute>
        } />
        <Route path="/transfer" element={
          <ProtectedRoute allowedRoles={['hospital']} role={role}>
            <TransferCenter />
          </ProtectedRoute>
        } />

        {/* Analytics and Reporting Routes */}
        <Route path="/quality" element={
          <ProtectedRoute allowedRoles={['hospital', 'doctor']} role={role}>
            <QualityMetrics />
          </ProtectedRoute>
        } />
        <Route path="/pathways" element={
          <ProtectedRoute allowedRoles={['hospital', 'doctor']} role={role}>
            <ClinicalPathways />
          </ProtectedRoute>
        } />
        <Route path="/infections" element={
          <ProtectedRoute allowedRoles={['hospital', 'doctor']} role={role}>
            <InfectionControl />
          </ProtectedRoute>
        } />
        <Route path="/documentation" element={
          <ProtectedRoute allowedRoles={['hospital', 'doctor']} role={role}>
            <Documentation />
          </ProtectedRoute>
        } />
        <Route path="/care-coordination" element={
          <ProtectedRoute allowedRoles={['hospital', 'doctor']} role={role}>
            <CareCoordination />
          </ProtectedRoute>
        } />
        <Route path="/rounds" element={
          <ProtectedRoute allowedRoles={['hospital', 'doctor']} role={role}>
            <VirtualRounds />
          </ProtectedRoute>
        } />
 
        <Route path="/predictive-analytics" element={
          <ProtectedRoute allowedRoles={['hospital', 'doctor']} role={role}>
            <PredictiveAnalytics />
          </ProtectedRoute>
        } />
        <Route path="/population-health" element={
          <ProtectedRoute allowedRoles={['hospital', 'doctor']} role={role}>
            <PopulationHealthManagement />
          </ProtectedRoute>
        } />
        <Route path="/operational-insights" element={
          <ProtectedRoute allowedRoles={['hospital', 'doctor']} role={role}>
            <OperationalInsights />
          </ProtectedRoute>
        } />
        <Route path="/finances" element={
          <ProtectedRoute allowedRoles={['hospital', 'doctor']} role={role}>
            <FinancialPerformanceAnalytics />
          </ProtectedRoute>
        } />
        <Route path="/research-data" element={
          <ProtectedRoute allowedRoles={['hospital', 'doctor']} role={role}>
            <ResearchDataManagement />
          </ProtectedRoute>
        } />

        {/* Compliance and Safety Routes */}
        <Route path="/regulatory-compliance" element={
          <ProtectedRoute allowedRoles={['hospital']} role={role}>
            <ComplianceTracker />
          </ProtectedRoute>
        } />
        <Route path="/incident-reporting" element={
          <ProtectedRoute allowedRoles={['hospital']} role={role}>
            <IncidentReporting />
          </ProtectedRoute>
        } />
        <Route path="/patient-safety" element={
          <ProtectedRoute allowedRoles={['hospital']} role={role}>
            <PatientSafety />
          </ProtectedRoute>
        } />
        <Route path="/audit-management" element={
          <ProtectedRoute allowedRoles={['hospital']} role={role}>
            <AuditManagement />
          </ProtectedRoute>
        } />
        <Route path="/policy-procedures" element={
          <ProtectedRoute allowedRoles={['hospital']} role={role}>
            <DigitalPolicyProcedures />
          </ProtectedRoute>
        } />

        {/* Community and Education Routes */}
        <Route path="/community-health" element={
          <ProtectedRoute allowedRoles={['hospital', 'doctor']} role={role}>
            <CommunityHealthPrograms />
          </ProtectedRoute>
        } />
        <Route path="/patient-education" element={
          <ProtectedRoute allowedRoles={['hospital', 'doctor']} role={role}>
            <PatientEducation />
          </ProtectedRoute>
        } />
        <Route path="/health-screenings" element={
          <ProtectedRoute allowedRoles={['hospital', 'doctor']} role={role}>
            <VirtualHealthScreenings />
          </ProtectedRoute>
        } />
        <Route path="/wellness-initiatives" element={
          <ProtectedRoute allowedRoles={['hospital', 'doctor']} role={role}>
            <WellnessInitiatives />
          </ProtectedRoute>
        } />
        <Route path="/community-partnerships" element={
          <ProtectedRoute allowedRoles={['hospital', 'doctor']} role={role}>
            <CommunityPartnerships />
          </ProtectedRoute>
        } />
           {/* Protected Routes for Patient Components */}
      <Route path="/patient_dashboard" element={
        <ProtectedRoute allowedRoles={['patient', 'doctor', 'hospital']} role={role}>
          <PatientHome />
        </ProtectedRoute>
      } />
      <Route 
        path="/vitals" 
        element={
          <ProtectedRoute allowedRoles={['patient', 'doctor']} role={role}>
            <Suspense fallback={<div>Loading Vital Signs...</div>}>
              <Vitals />
            </Suspense>
          </ProtectedRoute>
        } 
      />


      <Route path="/symptom" element={
        <ProtectedRoute allowedRoles={['patient']} role={role}>
          <Symptom/>
        </ProtectedRoute>
      } />

      <Route path="/opinion" element={
        <ProtectedRoute allowedRoles={['patient', 'doctor']} role={role}>
          <SecondOpinionsLink />
        </ProtectedRoute>
      } />
      <Route path="/referrals" element={
        <ProtectedRoute allowedRoles={['patient', 'doctor']} role={role}>
          <SpecialistReferrals />
        </ProtectedRoute>
      } />

      <Route path="/care-plans" element={
        <ProtectedRoute allowedRoles={['patient', 'doctor']} role={role}>
          <CarePlans />
        </ProtectedRoute>
      } />
      <Route path="/medications" element={
        <ProtectedRoute allowedRoles={['patient', 'doctor']} role={role}>
          <Medications />
        </ProtectedRoute>
      } />
      <Route path="/chronics" element={
        <ProtectedRoute allowedRoles={['patient', 'doctor']} role={role}>
          <Chronics />
        </ProtectedRoute>
      } />
      <Route path="/mental-health" element={
        <ProtectedRoute allowedRoles={['patient', 'doctor']} role={role}>
          <MentalHealthSupport />
        </ProtectedRoute>
      } />
      <Route path="/nutrition" element={
        <ProtectedRoute allowedRoles={['patient', 'doctor']} role={role}>
          <NutritionMealPlanning />
        </ProtectedRoute>
      } />
      <Route path="/fitness" element={
        <ProtectedRoute allowedRoles={['patient', 'doctor']} role={role}>
          <FitnessActivityTracking />
        </ProtectedRoute>
      } />

      <Route path="/patient-records" element={
        <ProtectedRoute allowedRoles={['patient', 'doctor']} role={role}>
          <HealthRecords />
        </ProtectedRoute>
      } />
      <Route path="/labs" element={
        <ProtectedRoute allowedRoles={['patient', 'doctor']} role={role}>
          <LabResults />
        </ProtectedRoute>
      } />
      <Route path="/imaging" element={
        <ProtectedRoute allowedRoles={['patient', 'doctor']} role={role}>
          <MedicalImaging />
        </ProtectedRoute>
      } />
      <Route path="/genetic-profile" element={
        <ProtectedRoute allowedRoles={['patient', 'doctor']} role={role}>
          <GeneticProfile />
        </ProtectedRoute>
      } />
      <Route path="/vaccination" element={
        <ProtectedRoute allowedRoles={['patient', 'doctor']} role={role}>
          <VaccinationRecords />
        </ProtectedRoute>
      } />

 
      <Route path="/appointment-history" element={
        <ProtectedRoute allowedRoles={['patient']} role={role}>
          <AppointmentHistory />
        </ProtectedRoute>
      } />
      <Route path="/care-team" element={
        <ProtectedRoute allowedRoles={['patient', 'doctor']} role={role}>
          <CareTeamCollaboration />
        </ProtectedRoute>
      } />
      <Route path="/care-reminders" element={
        <ProtectedRoute allowedRoles={['patient']} role={role}>
          <CareReminders />
        </ProtectedRoute>
      } />
      <Route path="/prescriptions" element={
        <ProtectedRoute allowedRoles={['patient']} role={role}>
          <PrescriptionRefills />
        </ProtectedRoute>
      } />

      <Route path="/education" element={
        <ProtectedRoute allowedRoles={['patient']} role={role}>
          <HealthEducation />
        </ProtectedRoute>
      } />
      <Route path="/wellness" element={
        <ProtectedRoute allowedRoles={['patient']} role={role}>
          <WellnessPrograms />
        </ProtectedRoute>
      } />
      <Route path="/support-groups" element={
        <ProtectedRoute allowedRoles={['patient']} role={role}>
          <SupportGroups />
        </ProtectedRoute>
      } />
      <Route path="/challenges" element={
        <ProtectedRoute allowedRoles={['patient']} role={role}>
          <HealthChallenges />
        </ProtectedRoute>
      } />
      <Route path="/patient-community" element={
        <ProtectedRoute allowedRoles={['patient']} role={role}>
          <PatientCommunity />
        </ProtectedRoute>
      } />
      <Route path="/caregiver-resources" element={
        <ProtectedRoute allowedRoles={['patient']} role={role}>
          <CaregiverResources />
        </ProtectedRoute>
      } />
      <Route path="/feedback" element={
        <ProtectedRoute allowedRoles={['patient']} role={role}>
          <Feedback />
        </ProtectedRoute>
} />

 {/* Protected Routes for Doctor Components */}
 <Route path="/patient-dashboard" element={
        <ProtectedRoute allowedRoles={['doctor', 'hospital']} role={role}>
          <PatientHome />
        </ProtectedRoute>
      } />


      <Route path="/care-plans" element={
        <ProtectedRoute allowedRoles={['doctor', 'hospital']} role={role}>
          <CarePlanManagement />
        </ProtectedRoute>
      } />
      <Route path="/monitoring" element={
        <ProtectedRoute allowedRoles={['doctor', 'hospital']} role={role}>
          <PatientMonitoring />
        </ProtectedRoute>
      } />

      <Route path="/diagnosis" element={
        <ProtectedRoute allowedRoles={['doctor']} role={role}>
          <AIAssistedDiagnosis />
        </ProtectedRoute>
      } />
      <Route path="/decision-support" element={
        <ProtectedRoute allowedRoles={['doctor']} role={role}>
          <ClinicalDecisionSupport />
        </ProtectedRoute>
      } />
      <Route path="/e-prescriptions" element={
        <ProtectedRoute allowedRoles={['doctor']} role={role}>
          <EPrescriptions />
        </ProtectedRoute>
      } />
      <Route path="/lab-imaging" element={
        <ProtectedRoute allowedRoles={['doctor']} role={role}>
          <LabImagingOrders />
        </ProtectedRoute>
      } />
      <Route path="/treatment-protocols" element={
        <ProtectedRoute allowedRoles={['doctor']} role={role}>
          <EvidenceBasedProtocols />
        </ProtectedRoute>
      } />

      <Route path="/emr" element={
        <ProtectedRoute allowedRoles={['doctor']} role={role}>
          <EMR />
        </ProtectedRoute>
      } />
      <Route path="/patient-history" element={
        <ProtectedRoute allowedRoles={['doctor']} role={role}>
          <PatientHistory />
        </ProtectedRoute>
      } />
      <Route path="/lab-results" element={
        <ProtectedRoute allowedRoles={['doctor']} role={role}>
          <LabResults />
        </ProtectedRoute>
      } />

      <Route path="/documentation" element={
        <ProtectedRoute allowedRoles={['doctor']} role={role}>
          <SmartDocumentation />
        </ProtectedRoute>
      } />

      <Route path="/schedule" element={
        <ProtectedRoute allowedRoles={['doctor']} role={role}>
          <IntelligentScheduling />
        </ProtectedRoute>
      } />
      <Route path="/billing" element={
        <ProtectedRoute allowedRoles={['doctor']} role={role}>
          <Billing />
        </ProtectedRoute>
      } />
      <Route path="/performance" element={
        <ProtectedRoute allowedRoles={['doctor']} role={role}>
          <PerformanceAnalytics />
        </ProtectedRoute>
      } />
      <Route path="/patient-engagement" element={
        <ProtectedRoute allowedRoles={['doctor']} role={role}>
          <PatientEngagementTools />
        </ProtectedRoute>
      } />


      <Route path="/care-team" element={
        <ProtectedRoute allowedRoles={['doctor', 'hospital']} role={role}>
          <CareTeamCollaboration />
        </ProtectedRoute>
      } />
      <Route path="/specialist-network" element={
        <ProtectedRoute allowedRoles={['doctor', 'hospital']} role={role}>
          <SpecialistNetwork />
        </ProtectedRoute>
      } />
      <Route path="/referral-doctor" element={
        <ProtectedRoute allowedRoles={['doctor', 'hospital']} role={role}>
          <ReferralManagement />
        </ProtectedRoute>
      } />
      <Route path="/virtual-cases" element={
        <ProtectedRoute allowedRoles={['doctor', 'hospital']} role={role}>
          <VirtualCases />
        </ProtectedRoute>
      } />
      <Route path="/file-sharing" element={
        <ProtectedRoute allowedRoles={['doctor', 'hospital']} role={role}>
          <FileSharing />
        </ProtectedRoute>
      } />

      <Route path="/continuing-education" element={
        <ProtectedRoute allowedRoles={['doctor']} role={role}>
          <ContinuingEducation />
        </ProtectedRoute>
      } />
      <Route path="/clinical-trials" element={
        <ProtectedRoute allowedRoles={['doctor']} role={role}>
          <ClinicalTrials />
        </ProtectedRoute>
      } />
      <Route path="/research-tools" element={
        <ProtectedRoute allowedRoles={['doctor']} role={role}>
          <ResearchTools />
        </ProtectedRoute>
      } />
      <Route path="/medical-literature" element={
        <ProtectedRoute allowedRoles={['doctor']} role={role}>
          <MedicalLiterature />
        </ProtectedRoute>
      } />
      <Route path="/case-studies" element={
        <ProtectedRoute allowedRoles={['doctor']} role={role}>
          <CaseStudies />
        </ProtectedRoute>
      } />


      <Route path="/burnout" element={
        <ProtectedRoute allowedRoles={['doctor']} role={role}>
          <BurnoutPrevention />
        </ProtectedRoute>
      } />
      <Route path="/peer-support" element={
        <ProtectedRoute allowedRoles={['doctor']} role={role}>
          <PeerSupport />
        </ProtectedRoute>
      } />
      <Route path="/tech-support" element={
        <ProtectedRoute allowedRoles={['doctor']} role={role}>
          <TechnicalSupport />
        </ProtectedRoute>
      } />
      <Route path="/feedback" element={
        <ProtectedRoute allowedRoles={['doctor']} role={role}>
          <Feedback />
        </ProtectedRoute>
      } />

        {/* Public routes */}
        <Route path="/hospitals" element={<PublicHospitalsSection />} />
        <Route path="/pharmacies" element={<PharmaciesSection />} />
        <Route path="/campaigns" element={<HealthCampaignsSection />} />
        <Route path="/doctors" element={<DoctorSection />} />
        <Route path="/emergency" element={<EmergencyRouteSection />} />
        <Route path="/Community" element={<Community />} />
      </Routes>
        );
    };
    
    export default AppRoutes;