import { 
    RiHeartLine, RiPulseLine, RiFilePaperLine, RiCalendarCheckLine, RiMentalHealthLine, 
    RiTeamLine, RiBarChartLine, RiBookOpenLine, RiDashboardLine, RiUserHeartLine, 
    RiHeartPulseLine, RiVideoLine, RiBarChartBoxLine, RiShieldCheckLine, RiGlobalLine, 
    RiHospitalLine, RiAlarmWarningLine, RiEarthLine, RiBrainLine, 
    RiStethoscopeLine, RiRobot2Fill, RiLogoutCircleRLine, RiLoginCircleLine, RiUser3Line 
  } from "react-icons/ri";

 const roleBasedNavItems = {
    patient: [
      {
        title: "Health Hub",
        icon: <RiHeartLine size="2em" />,
        items: [
          { href: "patient_dashboard", label: "Dashboard" },
          { href: "vitals", label: "Vital Signs" },
          { href: "insights", label: "Insights" },
        ],
      },
      {
        title: "Appointments",
        icon: <RiCalendarCheckLine size="2em" />,
        items: [
          { href: "book", label: "Book Appointment" },
          { href: "rebook", label: "Rebook Appointment" },
          { href: "cancel", label: "Cancel Appointment" },
        ],
      },
      {
        title: "Consultations",
        icon: <RiStethoscopeLine size="2em" />,
        items: [
          { href: "consultations", label: "Start Consultation" },
          { href: "opinions", label: "Second Opinions" },
          { href: "referrals", label: "Referrals" },
        ],
      },
      {
        title: "Records",
        icon: <RiFilePaperLine size="2em" />,
        items: [
          { href: "labs", label: "My Labs" },
          { href: "rad", label: "RadZone" },
          { href: "vaccination", label: "Vaccinations" },
        ],
      },
      {
        title: "Health Management",
        icon: <RiPulseLine size="2em" />,
        items: [
          { href: "cares", label: "My Care Plan" },
          { href: "meds", label: "Medications" },
          { href: "chronics", label: "Chronics Tracker" },
        ],
      },
  
  
      {
        title: "Support",
        icon: <RiMentalHealthLine size="2em" />,
        items: [
          { href: "forum", label: "Patient Community" },
          { href: "caregivers", label: "Caregiver Resources" },
          { href: "feedback", label: "Feedback" },
          { href: "dictionary", label: "Medical Dictionary" },
  
        ],
      },
  
    ],
    doctor: [
      {
        title: "My Patients",
        icon: <RiHeartLine size="2em" />,
        items: [
          { href: "appointments", label: "Appointments" },
          { href: "consultation", label: "Consultations" },
          { href: "care-plans", label: "Care Plans" },
        ],
      },
      {
        title: "Clinical Tools",
        icon: <RiStethoscopeLine size="2em" />,
        items: [
          { href: "calculators", label: "Calculators" },
          { href: "ucg", label: "Guidelines" },
          { href: "cases", label: "Case Studies" },
          { href: "radhub", label: "RadHub" },
  
        ],
      },
      {
        title: "Records",
        icon: <RiFilePaperLine size="2em" />,
        items: [
          { href: "visits", label: "Patient Visits" },
          { href: "vitals", label: "Vital Signs" },
          { href: "labs", label: "Lab Results" },
          { href: "rad", label: "Imaging" },
          { href: "history", label: "Patient History" },
          { href: "prescriptions", label: "Prescriptions" },
  
  
        ],
      },
      {
        title: "My Practise",
        icon: <RiBarChartLine size="2em" />,
        items: [
          { href: "scheduler", label: "SmartScheduler" },
          { href: "billing", label: "Billing" },
          { href: "analytics", label: "Analytics" },
        ],
      },
      {
        title: "Collaboration",
        icon: <RiTeamLine size="2em" />,
        items: [
          { href: "network", label: "Network" },
          { href: "refer", label: "Referrals" },
          { href: "files", label: "Share Files" },
        ],
      },
      {
        title: "Discover",
        icon: <RiBookOpenLine size="2em" />,
        items: [
          { href: "cme", label: "CME" },
          { href: "research", label: "Research Tools" },
        ],
      },
      {
        title: "Support",
        icon: <RiMentalHealthLine size="2em" />,
        items: [
          { href: "burnout", label: "Burnout Prevention" },
          { href: "peer-support", label: "Peer Support" },
          { href: "tech-support", label: "Technical Support" },
          { href: "feedback", label: "Feedback" },
        ],
      },
    ],
    hospital: [
      {
        title: "Operations Hub",
        icon: <RiDashboardLine size="2em" />,
        items: [
          { href: "command", label: "Command Center" },
          { href: "capacity-management", label: "Capacity Management" },
          { href: "resource-allocation", label: "Resource Allocation" },
          { href: "staff-scheduling", label: "Staff Scheduling" },
          { href: "emergency-preparedness", label: "Emergency Preparedness" },
        ],
      },
      {
        title: "Patient Flow",
        icon: <RiUserHeartLine size="2em" />,
        items: [
          { href: "admissions", label: "Smart Admissions" },
          { href: "beds", label: "Bed Management" },
          { href: "patient-flow", label: "Patient Flow Tracker" },
          { href: "discharge", label: "Discharge Tool" },
        ],
      },
      {
        title: "TeleRounds",
        icon: <RiVideoLine size="2em" />,
        items: [
          { href: "rounds", label: "Virtual Rounds" },
        ],
      },
      {
        title: "Data & Analytics",
        icon: <RiBarChartBoxLine size="2em" />,
        items: [
          { href: "predictive-analytics", label: "Predictive Analytics" },
          { href: "population-health", label: "Population Health Management" },
          { href: "research-data", label: "Research Data Management" },
        ],
      },
  
      {
        title: "Community",
        icon: <RiGlobalLine size="2em" />,
        items: [
          { href: "patient-education", label: "Patient Education Portal" },
          { href: "health-screenings", label: "Virtual Health Screenings" },
          { href: "community-partnerships", label: "Partnerships" },
        ],
      },
    ],
  };

  export default roleBasedNavItems;