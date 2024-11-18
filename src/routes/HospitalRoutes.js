import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

function HospitalRoutes() {
    return (
        <Router>
            <Switch>
                <Route path="/command-center" component={CommandCenter} />
                <Route path="/capacity-management" component={CapacityManagement} />
                <Route path="/resource-allocation" component={ResourceAllocation} />
                <Route path="/staff-scheduling" component={StaffScheduling} />
                <Route path="/emergency-preparedness" component={EmergencyPreparedness} />
                <Route path="/smart-admissions" component={SmartAdmissions} />
                <Route path="/bed-management" component={BedManagement} />
                <Route path="/patient-flow-tracking" component={PatientFlowTracking} />
                <Route path="/discharge-planning" component={DischargePlanning} />
                <Route path="/transfer-center" component={TransferCenter} />
                
                <Route path="/quality-metrics" component={QualityMetrics} />
                <Route path="/clinical-pathways" component={ClinicalPathways} />
                <Route path="/infection-control" component={InfectionControl} />
                <Route path="/documentation" component={Documentation} />
                <Route path="/care-coordination" component={CareCoordination} />
                <Route path="/virtual-rounds" component={VirtualRounds} />
                <Route path="/predictive-analytics" component={PredictiveAnalytics} />
                <Route path="/population-health-management" component={PopulationHealthManagement} />
                <Route path="/operational-insights" component={OperationalInsights} />
                <Route path="/financial-performance-analytics" component={FinancialPerformanceAnalytics} />
                <Route path="/research-data-management" component={ResearchDataManagement} />
                
                <Route path="/compliance-tracker" component={ComplianceTracker} />
                <Route path="/incident-reporting" component={IncidentReporting} />
                <Route path="/patient-safety" component={PatientSafety} />
                <Route path="/audit-management" component={AuditManagement} />
                <Route path="/digital-policy-procedures" component={DigitalPolicyProcedures} />
                <Route path="/community-health-programs" component={CommunityHealthPrograms} />
                <Route path="/patient-education" component={PatientEducation} />
                <Route path="/virtual-health-screenings" component={VirtualHealthScreenings} />
                <Route path="/wellness-initiatives" component={WellnessInitiatives} />
                <Route path="/community-partnerships" component={CommunityPartnerships} />
            </Switch>
        </Router>
    );
}

export default HospitalRoutes;
