import React, { useState, useEffect } from 'react';
import { 
  Typography, Grid, Paper, Tabs, Tab, Button, TextField, Chip,
  Dialog, DialogTitle, DialogContent, DialogActions,
  List, ListItem, ListItemText, ListItemIcon, Collapse,
  IconButton, Tooltip, CircularProgress, Snackbar, Box
} from '@material-ui/core';
import { Alert, Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { 
  ExpandMore, ExpandLess, DateRange, LocalHospital, Favorite, 
  Restaurant, FitnessCenter, School, EmojiObjects, AttachMoney,
  Phone, VideoCall, Chat, Language, Share, GetApp, Print
} from '@mui/icons-material';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend } from 'recharts';
import Group from '@mui/icons-material/Group';
import ContactPhone from '@mui/icons-material/ContactPhone';

// Simulated API calls (replace with actual API calls in production)
const updateCarePlan = (updates) => new Promise(resolve => setTimeout(() => resolve({ success: true }), 1000));

// Mock data (replace with actual data from your backend)
const mockCarePlan = {
  patientName: "Akiki Nyombi",
  dateOfBirth: "1985-03-15",
  carePlanCreated: "2023-09-01",
  lastUpdated: "2023-10-03",
  primaryDoctor: "Dr. Nakato Ssemakula",
  diagnoses: ["Type 2 Diabetes", "Hypertension"],
  medications: [
    { name: "Metformin", dosage: "500mg", frequency: "Twice daily", startDate: "2023-09-01" },
    { name: "Lisinopril", dosage: "10mg", frequency: "Once daily", startDate: "2023-09-01" }
  ],
  vitals: [
    { date: "2023-10-01", bloodPressure: "130/85", bloodSugar: "140", weight: "75" },
    { date: "2023-09-15", bloodPressure: "135/88", bloodSugar: "145", weight: "76" },
    { date: "2023-09-01", bloodPressure: "140/90", bloodSugar: "150", weight: "77" }
  ],
  appointments: [
    { date: "2023-10-15", type: "Follow-up", doctor: "Dr. Nakato Ssemakula", notes: "Review medication efficacy" },
    { date: "2023-11-01", type: "Lab Work", facility: "Kampala Medical Center", notes: "HbA1c and lipid panel" }
  ],
  dietPlan: {
    dailyCalories: 1800,
    macronutrients: { carbs: "45%", protein: "25%", fats: "30%" },
    restrictions: ["Low sodium", "Low sugar"],
    recommendations: [
      "Incorporate more leafy greens and vegetables",
      "Choose whole grains over refined carbohydrates",
      "Include lean proteins like fish and chicken"
    ]
  },
  exercisePlan: {
    weeklyGoal: "150 minutes of moderate-intensity aerobic activity",
    recommendations: [
      "30 minutes of brisk walking 5 days a week",
      "Strength training exercises 2-3 times a week",
      "Yoga or stretching for flexibility and stress reduction"
    ]
  },
  educationMaterials: [
    { title: "Understanding Type 2 Diabetes", type: "PDF", link: "/resources/diabetes-guide.pdf" },
    { title: "Hypertension Management", type: "Video", link: "/resources/hypertension-video.mp4" },
    { title: "Healthy Eating for Diabetics", type: "Interactive Module", link: "/modules/diabetic-diet" }
  ],
  communitySupport: [
    { name: "Kampala Diabetes Support Group", meetingTime: "Every Tuesday, 6 PM", location: "Community Center" },
    { name: "Online Hypertension Forum", link: "https://hypertension-support-ug.com" }
  ],
  goals: [
    { description: "Reduce HbA1c to 6.5%", targetDate: "2024-03-01", status: "In Progress" },
    { description: "Lose 5 kg", targetDate: "2024-01-01", status: "In Progress" },
    { description: "Walk 10,000 steps daily", targetDate: "2023-11-01", status: "Achieved" }
  ],
  culturalConsiderations: [
    "Dietary recommendations adapted for traditional Ugandan cuisine",
    "Exercise plan considering local climate and available facilities",
    "Medication schedule adjusted for Ramadan fasting periods"
  ]
};

const CarePlans = () => {
  const [carePlan, setCarePlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [expandedSections, setExpandedSections] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [editedCarePlan, setEditedCarePlan] = useState({});
  const [openDialog, setOpenDialog] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });
  const [language, setLanguage] = useState('en'); // 'en' for English, 'lg' for Luganda


  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await updateCarePlan(editedCarePlan);
      setCarePlan(editedCarePlan);
      setEditMode(false);
      setSnackbar({ open: true, message: 'Care plan updated successfully!', severity: 'success' });
    } catch (error) {
      setSnackbar({ open: true, message: 'Failed to update care plan. Please try again.', severity: 'error' });
    }
    setLoading(false);
  };

  const handleCancel = () => {
    setEditedCarePlan(carePlan);
    setEditMode(false);
  };

  const handleInputChange = (section, field, value) => {
    setEditedCarePlan(prev => ({
      ...prev,
      [section]: { ...prev[section], [field]: value }
    }));
  };

  const handleArrayInputChange = (section, index, field, value) => {
    setEditedCarePlan(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const handleAddItem = (section) => {
    setEditedCarePlan(prev => ({
      ...prev,
      [section]: [...prev[section], {}]
    }));
  };

  const handleRemoveItem = (section, index) => {
    setEditedCarePlan(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const handleOpenDialog = (dialogType) => {
    setOpenDialog(dialogType);
  };

  const handleCloseDialog = () => {
    setOpenDialog(null);
  };

  const handleLanguageChange = () => {
    setLanguage(prev => prev === 'en' ? 'lg' : 'en');
  };

  const translate = (text) => {
    // This is a placeholder. In a real app, you'd use a proper translation service.
    const translations = {
      en: {
        "Overview": "Overview",
        "Medications": "Medications",
        "Vitals": "Vitals",
        "Diet & Exercise": "Diet & Exercise",
        "Appointments": "Appointments",
        "Goals & Support": "Goals & Support",
        // Add more translations as needed
      },
      lg: {
        "Overview": "Okulambulula",
        "Medications": "Eddagala",
        "Vitals": "Ebipimo by'omubiri",
        "Diet & Exercise": "Emmere n'okwekulaakulanya",
        "Appointments": "Okusisinkana ne basawo",
        "Goals & Support": "Ebigendererwa n'obuyambi",
        // Add more translations as needed
      }
    };
    return translations[language][text] || text;
  };

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;
  if (!carePlan) return null;

  const renderOverview = () => (
    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h6" gutterBottom>{translate("Patient Information")}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography><strong>{translate("Name")}:</strong> {carePlan.patientName}</Typography>
          <Typography><strong>{translate("Date of Birth")}:</strong> {carePlan.dateOfBirth}</Typography>
          <Typography><strong>{translate("Primary Doctor")}:</strong> {carePlan.primaryDoctor}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography><strong>{translate("Care Plan Created")}:</strong> {carePlan.carePlanCreated}</Typography>
          <Typography><strong>{translate("Last Updated")}:</strong> {carePlan.lastUpdated}</Typography>
          <Typography><strong>{translate("Diagnoses")}:</strong> {carePlan.diagnoses.join(", ")}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );

  const renderMedications = () => (
    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h6" gutterBottom>{translate("Medications")}</Typography>
      <List>
        {editedCarePlan.medications.map((med, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <LocalHospital />
            </ListItemIcon>
            {editMode ? (
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <TextField
                    label={translate("Name")}
                    value={med.name}
                    onChange={(e) => handleArrayInputChange('medications', index, 'name', e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label={translate("Dosage")}
                    value={med.dosage}
                    onChange={(e) => handleArrayInputChange('medications', index, 'dosage', e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label={translate("Frequency")}
                    value={med.frequency}
                    onChange={(e) => handleArrayInputChange('medications', index, 'frequency', e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label={translate("Start Date")}
                    type="date"
                    value={med.startDate}
                    onChange={(e) => handleArrayInputChange('medications', index, 'startDate', e.target.value)}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
              </Grid>
            ) : (
              <ListItemText
                primary={`${med.name} - ${med.dosage}`}
                secondary={`${med.frequency} (Started: ${med.startDate})`}
              />
            )}
            {editMode && (
              <IconButton onClick={() => handleRemoveItem('medications', index)}>
                <ExpandLess />
              </IconButton>
            )}
          </ListItem>
        ))}
      </List>
      {editMode && (
        <Button onClick={() => handleAddItem('medications')} color="primary">
          {translate("Add Medication")}
        </Button>
      )}
    </Paper>
  );

  const renderVitals = () => (
    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h6" gutterBottom>{translate("Vitals")}</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={carePlan.vitals}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <RechartsTooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="bloodPressure" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="bloodSugar" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      <List>
        {editedCarePlan.vitals.map((vital, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <Favorite />
            </ListItemIcon>
            {editMode ? (
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <TextField
                    label={translate("Date")}
                    type="date"
                    value={vital.date}
                    onChange={(e) => handleArrayInputChange('vitals', index, 'date', e.target.value)}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label={translate("Blood Pressure")}
                    value={vital.bloodPressure}
                    onChange={(e) => handleArrayInputChange('vitals', index, 'bloodPressure', e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
label={translate("Blood Sugar")}
value={vital.bloodSugar}
onChange={(e) => handleArrayInputChange('vitals', index, 'bloodSugar', e.target.value)}
fullWidth
/>
</Grid>
<Grid item xs={3}>
<TextField
label={translate("Weight")}
value={vital.weight}
onChange={(e) => handleArrayInputChange('vitals', index, 'weight', e.target.value)}
fullWidth
/>
</Grid>
</Grid>
) : (
<ListItemText
primary={`Date: ${vital.date}`}
secondary={`BP: ${vital.bloodPressure}, Sugar: ${vital.bloodSugar}, Weight: ${vital.weight}`}
/>
)}
{editMode && (
<IconButton onClick={() => handleRemoveItem('vitals', index)}>
<ExpandLess />
</IconButton>
)}
</ListItem>
))}
</List>
{editMode && (
<Button onClick={() => handleAddItem('vitals')} color="primary">
{translate("Add Vital Record")}
</Button>
)}
</Paper>
);

const renderDietExercise = () => (
<Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
<Typography variant="h6" gutterBottom>{translate("Diet & Exercise Plan")}</Typography>
<Grid container spacing={3}>
<Grid item xs={12} md={6}>
<Typography variant="subtitle1">{translate("Diet Plan")}</Typography>
{editMode ? (
<>
<TextField
label={translate("Daily Calories")}
value={editedCarePlan.dietPlan.dailyCalories}
onChange={(e) => handleInputChange('dietPlan', 'dailyCalories', e.target.value)}
fullWidth
margin="normal"
/>
<Typography variant="subtitle2">{translate("Macronutrients")}</Typography>
<TextField
label={translate("Carbs")}
value={editedCarePlan.dietPlan.macronutrients.carbs}
onChange={(e) => handleInputChange('dietPlan', 'macronutrients', { ...editedCarePlan.dietPlan.macronutrients, carbs: e.target.value })}
fullWidth
margin="normal"
/>
<TextField
label={translate("Protein")}
value={editedCarePlan.dietPlan.macronutrients.protein}
onChange={(e) => handleInputChange('dietPlan', 'macronutrients', { ...editedCarePlan.dietPlan.macronutrients, protein: e.target.value })}
fullWidth
margin="normal"
/>
<TextField
label={translate("Fats")}
value={editedCarePlan.dietPlan.macronutrients.fats}
onChange={(e) => handleInputChange('dietPlan', 'macronutrients', { ...editedCarePlan.dietPlan.macronutrients, fats: e.target.value })}
fullWidth
margin="normal"
/>
</>
) : (
<>
<Typography><strong>{translate("Daily Calories")}:</strong> {carePlan.dietPlan.dailyCalories}</Typography>
<Typography><strong>{translate("Macronutrients")}:</strong> Carbs: {carePlan.dietPlan.macronutrients.carbs}, Protein: {carePlan.dietPlan.macronutrients.protein}, Fats: {carePlan.dietPlan.macronutrients.fats}</Typography>
</>
)}
<Typography variant="subtitle2">{translate("Dietary Restrictions")}</Typography>
{editMode ? (
editedCarePlan.dietPlan.restrictions.map((restriction, index) => (
<TextField
key={index}
value={restriction}
onChange={(e) => handleArrayInputChange('dietPlan.restrictions', index, null, e.target.value)}
fullWidth
margin="normal"
/>
))
) : (
carePlan.dietPlan.restrictions.map((restriction, index) => (
<Chip key={index} label={restriction} style={{ margin: '5px' }} />
))
)}
{editMode && (
<Button onClick={() => handleAddItem('dietPlan.restrictions')} color="primary">
{translate("Add Restriction")}
</Button>
)}
<Typography variant="subtitle2">{translate("Recommendations")}</Typography>
<List>
{(editMode ? editedCarePlan : carePlan).dietPlan.recommendations.map((rec, index) => (
<ListItem key={index}>
<ListItemIcon>
<Restaurant />
</ListItemIcon>
{editMode ? (
<TextField
value={rec}
onChange={(e) => handleArrayInputChange('dietPlan.recommendations', index, null, e.target.value)}
fullWidth
/>
) : (
<ListItemText primary={rec} />
)}
{editMode && (
<IconButton onClick={() => handleRemoveItem('dietPlan.recommendations', index)}>
<ExpandLess />
</IconButton>
)}
</ListItem>
))}
</List>
{editMode && (
<Button onClick={() => handleAddItem('dietPlan.recommendations')} color="primary">
{translate("Add Recommendation")}
</Button>
)}
</Grid>
<Grid item xs={12} md={6}>
<Typography variant="subtitle1">{translate("Exercise Plan")}</Typography>
{editMode ? (
<TextField
label={translate("Weekly Goal")}
value={editedCarePlan.exercisePlan.weeklyGoal}
onChange={(e) => handleInputChange('exercisePlan', 'weeklyGoal', e.target.value)}
fullWidth
margin="normal"
/>
) : (
<Typography><strong>{translate("Weekly Goal")}:</strong> {carePlan.exercisePlan.weeklyGoal}</Typography>
)}
<Typography variant="subtitle2">{translate("Recommendations")}</Typography>
<List>
{(editMode ? editedCarePlan : carePlan).exercisePlan.recommendations.map((rec, index) => (
<ListItem key={index}>
<ListItemIcon>
<FitnessCenter />
</ListItemIcon>
{editMode ? (
<TextField
value={rec}
onChange={(e) => handleArrayInputChange('exercisePlan.recommendations', index, null, e.target.value)}
fullWidth
/>
) : (
<ListItemText primary={rec} />
)}
{editMode && (
<IconButton onClick={() => handleRemoveItem('exercisePlan.recommendations', index)}>
<ExpandLess />
</IconButton>
)}
</ListItem>
))}
</List>
{editMode && (
<Button onClick={() => handleAddItem('exercisePlan.recommendations')} color="primary">
{translate("Add Recommendation")}
</Button>
)}
</Grid>
</Grid>
</Paper>
);

const renderAppointments = () => (
<Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
<Typography variant="h6" gutterBottom>{translate("Appointments")}</Typography>
<Timeline align="alternate">
{(editMode ? editedCarePlan : carePlan).appointments.map((appointment, index) => (
<TimelineItem key={index}>
<TimelineSeparator>
<TimelineDot color="primary">
<DateRange />
</TimelineDot>
<TimelineConnector />
</TimelineSeparator>
<TimelineContent>
{editMode ? (
<Grid container spacing={2}>
<Grid item xs={12} sm={6}>
<TextField
  label={translate("Date")}
  type="date"
  value={appointment.date}
  onChange={(e) => handleArrayInputChange('appointments', index, 'date', e.target.value)}
  fullWidth
  InputLabelProps={{ shrink: true }}
/>
</Grid>
<Grid item xs={12} sm={6}>
<TextField
  label={translate("Type")}
  value={appointment.type}
  onChange={(e) => handleArrayInputChange('appointments', index, 'type', e.target.value)}
  fullWidth
/>
</Grid>
<Grid item xs={12}>
<TextField
  label={translate("Doctor/Facility")}
  value={appointment.doctor || appointment.facility}
  onChange={(e) => handleArrayInputChange('appointments', index, appointment.doctor ? 'doctor' : 'facility', e.target.value)}
  fullWidth
/>
</Grid>
<Grid item xs={12}>
<TextField
  label={translate("Notes")}
  value={appointment.notes}
  onChange={(e) => handleArrayInputChange('appointments', index, 'notes', e.target.value)}
  fullWidth
  multiline
  rows={2}
/>
</Grid>
</Grid>
) : (
<>
<Typography variant="h6" component="span">{appointment.type}</Typography>
<Typography>{appointment.date}</Typography>
<Typography>{appointment.doctor || appointment.facility}</Typography>
<Typography variant="body2" color="textSecondary">{appointment.notes}</Typography>
</>
)}
{editMode && (
<IconButton onClick={() => handleRemoveItem('appointments', index)}>
<ExpandLess />
</IconButton>
)}
</TimelineContent>
</TimelineItem>
))}
</Timeline>
{editMode && (
<Button onClick={() => handleAddItem('appointments')} color="primary">
{translate("Add Appointment")}
</Button>
)}
</Paper>
);

const renderGoalsSupport = () => (
<Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
<Typography variant="h6" gutterBottom>{translate("Goals & Support")}</Typography>
<Grid container spacing={3}>
<Grid item xs={12} md={6}>
<Typography variant="subtitle1">{translate("Goals")}</Typography>
<List>
{(editMode ? editedCarePlan : carePlan).goals.map((goal, index) => (
<ListItem key={index}>
<ListItemIcon>
<EmojiObjects />
</ListItemIcon>
{editMode ? (
<Grid container spacing={2}>
<Grid item xs={12}>
  <TextField
    label={translate("Description")}
    value={goal.description}
    onChange={(e) => handleArrayInputChange('goals', index, 'description', e.target.value)}
    fullWidth
  />
</Grid>
<Grid item xs={6}>
  <TextField
    label={translate("Target Date")}
    type="date"
    value={goal.targetDate}
    onChange={(e) => handleArrayInputChange('goals', index, 'targetDate', e.target.value)}
    fullWidth
    InputLabelProps={{ shrink: true }}
  />
</Grid>
<Grid item xs={6}>
  <TextField
    label={translate("Status")}
    value={goal.status}
    onChange={(e) => handleArrayInputChange('goals', index, 'status', e.target.value)}
    fullWidth
  />
</Grid>
</Grid>
) : (
<ListItemText
primary={goal.description}
secondary={`${translate("Target")}: ${goal.targetDate} - ${translate("Status")}: ${goal.status}`}
/>
)}
{editMode && (
<IconButton onClick={() => handleRemoveItem('goals', index)}>
<ExpandLess />
</IconButton>
)}
</ListItem>
))}
</List>
{editMode && (
<Button onClick={() => handleAddItem('goals')} color="primary">
{translate("Add Goal")}
</Button>
)}
</Grid>
<Grid item xs={12} md={6}>
<Typography variant="subtitle1">{translate("Community Support")}</Typography>
<List>
{(editMode ? editedCarePlan : carePlan).communitySupport.map((support, index) => (
<ListItem key={index}>
<ListItemIcon>
<Group />
</ListItemIcon>
{editMode ? (
<Grid container spacing={2}>
<Grid item xs={12}>
  <TextField
    label={translate("Name")}
    value={support.name}
    onChange={(e) => handleArrayInputChange('communitySupport', index, 'name', e.target.value)}
    fullWidth
  />
</Grid>
<Grid item xs={12}>
  <TextField
    label={support.meetingTime ? translate("Meeting Time") : translate("Link")}
    value={support.meetingTime || support.link}
    onChange={(e) => handleArrayInputChange('communitySupport', index, support.meetingTime ? 'meetingTime' : 'link', e.target.value)}
    fullWidth
  />
</Grid>
{support.location && (
  <Grid item xs={12}>
    <TextField
      label={translate("Location")}
      value={support.location}
      onChange={(e) => handleArrayInputChange('communitySupport', index, 'location', e.target.value)}
      fullWidth
    />
  </Grid>
)}
</Grid>
) : (
<ListItemText
primary={support.name}
secondary={support.meetingTime ? `${support.meetingTime} at ${support.location}` : support.link}
/>
)}
{editMode && (
<IconButton onClick={() => handleRemoveItem('communitySupport', index)}>
<ExpandLess />
</IconButton>
)}
</ListItem>
))}
</List>
{editMode && (
<Button onClick={() => handleAddItem('communitySupport')} color="primary">
{translate("Add Support Group")}
</Button>
)}
</Grid>
</Grid>
</Paper>
);

const renderAdditionalFeatures = () => (
<>
<Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
<Typography variant="h6" gutterBottom>{translate("Educational Materials")}</Typography>
<List>
{carePlan.educationMaterials.map((material, index) => (
<ListItem key={index} button component="a" href={material.link} target="_blank">
<ListItemIcon>
<School />
</ListItemIcon>
<ListItemText primary={material.title} secondary={material.description} />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h6" gutterBottom>{translate("Emergency Contacts")}</Typography>
        <List>
          {carePlan.emergencyContacts.map((contact, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <ContactPhone />
              </ListItemIcon>
              <ListItemText primary={contact.name} secondary={`${contact.relationship}: ${contact.phone}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </>
  );

  return (
    <div>
      <Typography variant="h4" gutterBottom>{translate("Care Plan")}</Typography>
      {renderVitals()}
      {renderDietExercise()}
      {renderAppointments()}
      {renderGoalsSupport()}
      {renderAdditionalFeatures()}
      {editMode ? (
        <Button onClick={handleSave} color="primary" variant="contained">
          {translate("Save Changes")}
        </Button>
      ) : (
        <Button onClick={() => setEditMode(true)} color="primary" variant="contained">
          {translate("Edit Care Plan")}
        </Button>
      )}
    </div>
  );
}

export default CarePlans;