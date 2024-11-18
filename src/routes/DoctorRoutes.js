// src/routes/DoctorRoute.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SmartDocumentation from "../components/doctor/SmartDocumentation";
import IntelligentScheduling from "../components/doctor/IntelligentScheduling";
import PerformanceAnalytics from "../components/hospitals/PerformanceAnalytics";
import PatientEngagementTools from "../components/doctor/PatientEngagementTools";
import CareTeamCollaboration from "../components/doctor/CareTeamCollaboration";
import SpecialistNetwork from "../components/doctor/SpecialistNetwork";
import ReferralManagement from "../components/doctor/ReferralManagement";
import VirtualCases from "../components/doctor/VirtualCases";
import FileSharing from "../components/doctor/FileSharing";
import ContinuingEducation from "../components/doctor/ContinuingEducation";
import ClinicalTrials from "../components/doctor/ClinicalTrials";
import ResearchTools from "../components/doctor/ResearchTools";
import MedicalLiterature from "../components/doctor/MedicalLiterature";
import CaseStudies from "../components/doctor/CaseStudies";
import BurnoutPrevention from "../components/doctor/BurnoutPrevention";
import PeerSupport from "../components/doctor/PeerSupport";
import TechnicalSupport from "../components/doctor/TechnicalSupport";
import Consultations from "../components/doctor/Consultations";

import AIAssistedDiagnosis from "./components/doctor/AIAssistedDiagnosis";
import Billing from "./components/doctor/Billing";
import CarePlanManagement from "./components/doctor/CarePlanManagement";
import ClinicalDecisionSupport from "./components/doctor/ClinicalDecisionSupport";
import EMR from "./components/doctor/EMR";
import EPrescriptions from "./components/doctor/EPrescriptions";
import EvidenceBasedProtocols from "./components/doctor/EvidenceBasedProtocols";
import ImagingViewer from "./components/doctor/ImagingViewer";
import LabResults from "./components/doctor/LabResults";
import LabImagingOrders from "./components/doctor/LabImagingOrders ";
import IntellingentScheduling from "./components/doctor/IntelligentScheduling";
import PatientDashboards from "./components/doctor/PatientDashboards";
import PatientHistory from "./components/doctor/PatientHistory";
import PatientMonitoring from "./components/doctor/PatientMonitoring";
import WellnessAndSupport from "./components/doctor/WellnessAndSupport";
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
import ClinicalTrials from "./components/doctor/ClinicalTrials";
import ResearchTools from "./components//doctor/ResearchTools";
import MedicalLiterature from "./components/doctor/MedicalLiterature";
import CaseStudies from "./components/doctor/CaseStudies";
import BurnoutPrevention from "./components/doctor/BurnoutPrevention";
import PeerSupport from "./components/doctor/PeerSupport";
import TechnicalSupport from "./components/doctor/TechnicalSupport";
import ApproveAppointment from './components/doctor/ApproveAppointment';
import ManageAvailability from './components/doctor/ManageAvailability';

const DoctorRoutes = () => {
  return (
    <Routes>
      <Route path="/smart-documentation" element={<SmartDocumentation />} />
      <Route path="/doctor-consultations" element={<Consultations />} />

      <Route path="/intelligent-scheduling" element={<IntelligentScheduling />} />
      <Route path="/performance-analytics" element={<PerformanceAnalytics />} />
      <Route path="/patient-engagement-tools" element={<PatientEngagementTools />} />
      <Route path="/care-team-collaboration" element={<CareTeamCollaboration />} />
      <Route path="/specialist-network" element={<SpecialistNetwork />} />
      <Route path="/referral-management" element={<ReferralManagement />} />
      <Route path="/virtual-cases" element={<VirtualCases />} />
      <Route path="/file-sharing" element={<FileSharing />} />
      <Route path="/continuing-education" element={<ContinuingEducation />} />
      <Route path="/clinical-trials" element={<ClinicalTrials />} />
      <Route path="/research-tools" element={<ResearchTools />} />
      <Route path="/medical-literature" element={<MedicalLiterature />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/burnout-prevention" element={<BurnoutPrevention />} />
      <Route path="/peer-support" element={<PeerSupport />} />
      <Route path="/technical-support" element={<TechnicalSupport />} />
    </Routes>
  );
};

export default DoctorRoutes;
