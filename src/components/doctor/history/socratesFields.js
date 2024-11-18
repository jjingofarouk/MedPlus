// socratesFields.js

export const severityOptions = [
    '1 - Mild', 
    '2', 
    '3', 
    '4', 
    '5 - Moderate', 
    '6', 
    '7', 
    '8', 
    '9', 
    '10 - Severe'
  ];
  
  export const characterOptions = [
    'Sharp', 
    'Dull', 
    'Throbbing', 
    'Burning', 
    'Aching', 
    'Stabbing', 
    'Cramping', 
    'Tingling', 
    'Numbness', 
    'Pressure', 
    'Squeezing', 
    'Other'
  ];
  
  export const radiationOptions = [
    'None', 
    'To the arm', 
    'To the leg', 
    'To the back', 
    'To the chest', 
    'To the abdomen', 
    'To the neck', 
    'To the head', 
    'To the face', 
    'Other'
  ];
  
  export const associationsOptions = [
    'Nausea', 
    'Vomiting', 
    'Diarrhea', 
    'Fever', 
    'Chills', 
    'Fatigue', 
    'Sweating', 
    'Cough', 
    'Shortness of breath', 
    'Palpitations', 
    'Dizziness', 
    'Confusion', 
    'Changes in vision', 
    'Changes in appetite', 
    'Other'
  ];
  
  export const timeCourseOptions = [
    'Constant', 
    'Intermittent', 
    'Progressively worsening', 
    'Improving', 
    'Unchanged', 
    'Fluctuating', 
    'Recurring'
  ];
  
  export const exacerbatingRelievingOptions = [
    'Rest', 
    'Activity', 
    'Medications', 
    'Positioning', 
    'Temperature changes', 
    'Food intake', 
    'Stress', 
    'Coughing/Sneezing', 
    'Lifting', 
    'Other'
  ];
  
  export const socratesFields = [
    { 
      key: 'site', 
      label: 'Site', 
      placeholder: 'Where is the pain/problem? (e.g., left shoulder, right abdomen, both knees)' 
    },
    { 
      key: 'onset', 
      label: 'Onset', 
      placeholder: 'When did it start? Was it sudden, gradual, or insidious? Specify date if possible.' 
    },
    { 
      key: 'character', 
      label: 'Character', 
      options: characterOptions, 
      placeholder: 'What is the pain/problem like? (Describe the nature of the pain or symptom.)' 
    },
    { 
      key: 'radiation', 
      label: 'Radiation', 
      options: radiationOptions, 
      placeholder: 'Does it spread anywhere? (If yes, describe where it goes.)' 
    },
    { 
      key: 'associations', 
      label: 'Associations', 
      options: associationsOptions, 
      placeholder: 'Any other symptoms associated with it? (List any that patient has experienced.)' 
    },
    { 
      key: 'timeCourse', 
      label: 'Time course', 
      options: timeCourseOptions, 
      placeholder: 'Is it there all the time? Does it come and go? (Please explain.)' 
    },
    { 
      key: 'exacerbatingRelievingFactors', 
      label: 'Exacerbating/Relieving Factors', 
      options: exacerbatingRelievingOptions, 
      placeholder: 'What makes it better or worse? (Provide specifics, e.g., lying down, walking.)' 
    },
    { 
      key: 'severity', 
      label: 'Severity', 
      options: severityOptions, 
      placeholder: 'How bad is it? (Scale of 1-10 or describe in patients own words.)' 
    }


  ];
  