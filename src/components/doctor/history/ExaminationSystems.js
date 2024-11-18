export const examinationSystems = [
  {
    name: 'General',
    findings: {
      observation: [
        { name: 'Appearance', expected: ['Young', 'Middle-aged', 'Elderly'], type: 'options' },
        { name: 'Consciousness', expected: ['Alert', 'Drowsy', 'Unresponsive'], type: 'options' },
        { name: 'Surroundings', expected: ['None', 'NG Tube', 'Oxygen Mask', 'I.V Cannula', 'Sputum Pot'], type: 'options' },
        { name: 'Nutritional status', expected: ['Well-nourished', 'Malnourished'], type: 'options' },
        { name: 'Hydration', expected: ['Well-hydrated', 'Dehydrated'], type: 'options' },
        { name: 'Distress level', expected: ['No distress', 'Mild', 'Severe'], type: 'options' },
        { name: 'Muscle wasting', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Posture', expected: ['Normal (upright, balanced)', 'Abnormal (slouched, asymmetrical)'], type: 'options' },
        { name: 'Facial expression', expected: ['Relaxed', 'Anxious', 'Pain'], type: 'options' },
        { name: 'Hair distribution', expected: ['Normal', 'Abnormal'], type: 'options' },
        { name: 'Nail appearance', expected: ['Normal', 'Clubbing', 'Cyanosis'], type: 'options' },
        { name: 'Skin Pigmentation', expected: ['Normal', 'Hyperpigmented', 'Hypopigmented'], type: 'options' },
        { name: 'Janeway lesions', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Palmar xanthomata', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Nicotine staining', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Palmar erythema', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Pigmentation of palmar creases', expected: ['Normal', 'Pigmented'], type: 'options' },
        { name: 'Pallor of palmar creases', expected: ['Normal', 'Pale'], type: 'options' },
        { name: 'Dupuytren\'s contracture', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Clubbing', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Splinter hemorrhage', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Leukonychia', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Koilonychia', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Flapping tremor', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Conjunctiva', expected: ['Normal', 'Pale', 'Red'], type: 'options' },
        { name: 'Sclera', expected: ['White', 'Jaundiced '], type: 'options' },
        { name: 'Height', expected: 'Customizable', type: 'custom' },
        { name: 'Weight', expected: 'Customizable', type: 'custom' },
        { name: 'BMI', expected: 'Customizable', type: 'custom' },
        { name: 'Respiratory rate', expected: 'Customizable', type: 'custom' },
        { name: 'Temperature', expected: 'Customizable', type: 'custom' },
        { name: 'Oxygen saturation', expected: 'Customizable', type: 'custom' },
        { name: 'Blood pressure', expected: 'Customizable', type: 'custom' },
        { name: 'Heart rate', expected: 'Customizable', type: 'custom' },
        
      ],
      palpation: [
        { name: 'Moisture', expected: ['Dry', 'Moist'], type: 'options' },
        { name: 'Skin turgor', expected: ['Normal', 'Decreased'], type: 'options' },
        { name: 'Pedal edema', expected: ['None', 'Pitting', 'Non-pitting'], type: 'options' },
        { name: 'Osler\'s nodes', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Temperature', expected: ['Warm', 'Cool'], type: 'options' },
        { name: 'Tenderness', expected: ['No tenderness', 'Mild', 'Moderate', 'Severe'], type: 'options' },
        { name: 'Swelling', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Pulses', expected: ['Normal', 'Weak', 'Absent'], type: 'options' }
      ],
      percussion: [],
      auscultation: []
    }
  },

  {
    name: 'Respiratory',
    findings: {
      observation: [
        { name: 'Chest shape', expected: ['Normal', 'Barrel-shaped', 'Pectus excavatum', 'Pectus carinatum'], type: 'options' },
        { name: 'Breathing pattern', expected: ['Normal', 'Tachypnea', 'Bradypnea', 'Apnea', 'Cheyne-Stokes', 'Kussmaul'], type: 'options' },
        { name: 'Cyanosis', expected: ['Absent', 'Central', 'Peripheral'], type: 'options' },
        { name: 'Use of accessory muscles', expected: ['None', 'Present'], type: 'options' },
        { name: 'Nasal flaring', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Tracheal deviation', expected: ['Midline', 'Deviated'], type: 'options' },
        { name: 'Clubbing of fingers', expected: ['Absent', 'Present'], type: 'options' }
      ],
      palpation: [
        { name: 'Chest expansion', expected: ['Symmetrical', 'Asymmetrical'], type: 'options' },
        { name: 'Tactile fremitus', expected: ['Normal', 'Increased', 'Decreased', 'Absent'], type: 'options' },
        { name: 'Tracheal position', expected: ['Midline', 'Deviated'], type: 'options' },
        { name: 'Tenderness', expected: ['Absent', 'Present'], type: 'options' }
      ],
      percussion: [
        { name: 'Percussion note', expected: ['Resonant', 'Hyper-resonant', 'Dull'], type: 'options' },
        { name: 'Diaphragmatic excursion', expected: '3-5 cm', type: 'range', min: 3, max: 5 }
      ],
      auscultation: [
        { name: 'Breath sounds', expected: ['Vesicular', 'Bronchial', 'Absent'], type: 'options' },
        { name: 'Adventitious sounds', expected: ['None', 'Crackles', 'Wheezes', 'Rhonchi'], type: 'options' },
        { name: 'Vocal resonance', expected: ['Normal', 'Increased', 'Decreased'], type: 'options' },
        { name: 'Egophony', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Bronchophony', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Whispered pectoriloquy', expected: ['Absent', 'Present'], type: 'options' }
      ]
    }
  },

  
  {
    name: 'Cardiovascular',
    findings: {
      observation: [
        { name: 'Jugular venous distension', expected: ['Absent', 'Present', 'Height (cm)'], type: 'options' },
        { name: 'Peripheral edema', expected: ['Absent', 'Present', 'Bilateral', 'Unilateral', 'Pitting', 'Non-pitting'], type: 'options' },
        { name: 'Skin temperature', expected: ['Warm', 'Cool', 'Cold'], type: 'options' },
        { name: 'Skin color', expected: ['Normal', 'Cyanosis', 'Pallor'], type: 'options' },
        { name: 'Respiratory effort', expected: ['Normal', 'Labored', 'Accessory muscle use'], type: 'options' },
        { name: 'Heart rate', expected: '60-100 bpm', type: 'range', min: 60, max: 100 },
        { name: 'Heart rhythm', expected: ['Regular', 'Irregular', 'Arrhythmia'], type: 'options' },
        { name: 'Capillary refill time', expected: '< 2 seconds', type: 'range', max: 2 }
      ],
      palpation: [
        { name: 'PMI', expected: ['Normal', 'Displaced (location)'], type: 'options' },
        { name: 'Peripheral pulses', expected: ['Present', 'Absent', 'Weak', 'Bounding'], type: 'options' },
        { name: 'Pulse quality', expected: ['Normal', 'Thready', 'Bounding'], type: 'options' },
        { name: 'Temperature gradient', expected: ['Normal', 'Warm', 'Cool', 'Cold'], type: 'options' },
        { name: 'Tactile fremitus', expected: ['Normal', 'Increased', 'Decreased'], type: 'options' }
      ],
      percussion: [
        { name: 'Heart dullness', expected: ['Normal', 'Increased'], type: 'options' },
        { name: 'Cardiac borders', expected: ['Normal', 'Widened'], type: 'options' },
        { name: 'Pulmonary dullness', expected: ['Normal', 'Increased'], type: 'options' },
        { name: 'Aortic dullness', expected: ['Normal', 'Increased'], type: 'options' },
        { name: 'Liver span (lower border)', expected: ['Normal', 'Enlarged'], type: 'options' },
        { name: 'Sternal angle', expected: ['Normal', 'Elevated'], type: 'options' }
      ],
      
      auscultation: [
        { name: 'Heart sounds', expected: ['Normal', 'Murmur (location and grade)', 'Rubs', 'Gallops', 'S3', 'S4'], type: 'options' },
        { name: 'Aortic valve closure sound (A2)', expected: ['Normal', 'Delayed'], type: 'options' },
        { name: 'Pulmonic valve closure sound (P2)', expected: ['Normal', 'Delayed'], type: 'options' },
        { name: 'Mitral valve closure sound (M1)', expected: ['Normal', 'Delayed'], type: 'options' },
        { name: 'Tricuspid valve closure sound', expected: ['Normal', 'Delayed'], type: 'options' },
        { name: 'Carotid bruit', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Peripheral arterial bruits', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Venous hum', expected: ['Absent', 'Present'], type: 'options' }
      ]
      
    }
  },
  

  {
    name: 'Gastrointestinal',
    findings: {
      observation: [
        { name: 'Abdominal shape', expected: ['Flat', 'Distended', 'Scaphoid', 'Rounded'], type: 'options' },
        { name: 'Visible peristalsis', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Abdominal scars', expected: ['None', 'Surgical scars', 'Trauma scars', 'Other'], type: 'options' },
        { name: 'Hernias', expected: ['None', 'Umbilical', 'Inguinal', 'Femoral'], type: 'options' },
        { name: 'Skin changes', expected: ['Normal', 'Jaundice', 'Cyanosis', 'Pallor', 'Rashes'], type: 'options' },
        { name: 'Abdominal masses', expected: ['None', 'Palpable mass', 'Organomegaly'], type: 'options' },
        { name: 'Bowel sounds', expected: ['Normal', 'Hypoactive', 'Hyperactive', 'Absent'], type: 'options' },
        { name: 'Tympany vs. Dullness', expected: ['Tympanic', 'Dull', 'Flat'], type: 'options' },
        { name: 'Visible pulsations', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Color changes', expected: ['Normal', 'Ecchymosis', 'Erythema'], type: 'options' }
      ],
      palpation: [
        { name: 'Tenderness', expected: ['None', 'Mild', 'Severe'], type: 'options' },
        { name: 'Guarding', expected: ['Absent', 'Voluntary', 'Involuntary'], type: 'options' },
        { name: 'Rebound tenderness', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Masses', expected: ['None', 'Present'], type: 'options' },
        { name: 'Organomegaly', expected: ['None', 'Hepatomegaly', 'Splenomegaly', 'Renomegaly'], type: 'options' },
        { name: 'Ascites', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Murphy’s sign', expected: ['Negative', 'Positive'], type: 'options' },
        { name: 'McBurney\'s point', expected: ['Non-tender', 'Tender'], type: 'options' },
        { name: 'Psoas sign', expected: ['Negative', 'Positive'], type: 'options' },
        { name: 'Obturator sign', expected: ['Negative', 'Positive'], type: 'options' },
        { name: 'Liver edge', expected: ['Not palpable', 'Palpable'], type: 'options' },
        { name: 'Spleen edge', expected: ['Not palpable', 'Palpable'], type: 'options' },
        { name: 'Aortic pulsation', expected: ['None', 'Present'], type: 'options' },
        { name: 'Bimanual palpation', expected: ['Normal', 'Tender'], type: 'options' },
        { name: 'Superficial vs. Deep tenderness', expected: ['Superficial', 'Deep'], type: 'options' },
        { name: 'Temperature of abdomen', expected: ['Normal', 'Increased', 'Decreased'], type: 'options' }
      ],
      
      percussion: [
        { name: 'Liver span', expected: '6-12 cm', type: 'range', min: 6, max: 12 },
        { name: 'Splenic dullness', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Shifting dullness', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Fluid wave test', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Percussion tenderness over gallbladder', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Aortic pulsation', expected: ['Normal', 'Widened'], type: 'options' },
        { name: 'Bowel sounds percussion note', expected: ['Normal', 'Hyperresonant', 'Dull'], type: 'options' }
      ],
      
      auscultation: [
        { name: 'Bowel sounds', expected: ['Normal', 'Hyperactive', 'Hypoactive', 'Absent'], type: 'options' },
        { name: 'Bruits', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Friction rubs', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Vascular sounds', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Gastric air bubbles', expected: ['Normal', 'Excessive', 'None'], type: 'options' },
        { name: 'Renal artery bruits', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Aortic bruit', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Splenic bruit', expected: ['Absent', 'Present'], type: 'options' }
      ]
      
    }
  },
  
  {
    name: 'Musculoskeletal',
    findings: {
      observation: [
        { name: 'Gait', expected: ['Normal', 'Antalgic', 'Shuffling', 'Limping', 'Ataxic', 'Steppage'], type: 'options' },
        { name: 'Posture', expected: ['Normal', 'Abnormal'], type: 'options' },
        { name: 'Joint swelling', expected: ['None', 'Mild', 'Moderate', 'Severe'], type: 'options' },
        { name: 'Deformities', expected: ['None', 'Present'], type: 'options' },
        { name: 'Muscle atrophy', expected: ['None', 'Unilateral', 'Bilateral'], type: 'options' },
        { name: 'Range of motion (ROM)', expected: ['Full', 'Limited', 'Painful'], type: 'options' }
      ],
      palpation: [
        { name: 'Tenderness', expected: ['None', 'Mild', 'Moderate', 'Severe'], type: 'options' },
        { name: 'Crepitus', expected: ['None', 'Present'], type: 'options' },
        { name: 'Muscle tone', expected: ['Normal', 'Increased', 'Decreased'], type: 'options' },
        { name: 'Joint warmth', expected: ['None', 'Present'], type: 'options' },
        { name: 'Spine alignment', expected: ['Normal', 'Abnormal'], type: 'options' },
        { name: 'Range of motion (ROM) on palpation', expected: ['Full', 'Restricted'], type: 'options' },
        { name: 'Bony tenderness', expected: ['Absent', 'Present'], type: 'options' }
      ],
      percussion: [
        { name: 'Joint percussion', expected: ['Normal', 'Painful'], type: 'options' },
        { name: 'Bone tenderness', expected: ['None', 'Present'], type: 'options' }
      ],
      auscultation: [
        { name: 'Joint sounds', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Muscle sounds', expected: ['Normal', 'Abnormal'], type: 'options' }
      ]
    }
  },

 
  {
    name: 'Neurological',
    findings: {
      observation: [
        { name: 'Mental status', expected: ['Alert', 'Lethargic', 'Obtunded', 'Comatose'], type: 'options' },
        { name: 'Orientation', expected: ['Oriented to time/place/person', 'Disoriented'], type: 'options' },
        { name: 'Cognitive function', expected: ['Normal', 'Impaired (e.g., memory, attention)'], type: 'options' },
        { name: 'Speech and language', expected: ['Normal', 'Aphasia', 'Dysarthria', 'Mute'], type: 'options' },
        { name: 'Gait', expected: ['Normal', 'Ataxic', 'Limping', 'Shuffling', 'Wide-based'], type: 'options' },
        { name: 'Balance', expected: ['Normal', 'Impaired'], type: 'options' },
        { name: 'Coordination', expected: ['Normal', 'Impaired'], type: 'options' },
        { name: 'Involuntary movements', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Facial symmetry', expected: ['Normal', 'Asymmetrical'], type: 'options' },
        { name: 'Pupillary reaction', expected: ['Normal', 'Abnormal'], type: 'options' },
        { name: 'Posture', expected: ['Normal', 'Abnormal'], type: 'options' }
      ],
      palpation: [
        { name: 'Muscle tone', expected: ['Normal', 'Increased', 'Decreased'], type: 'options' },
        { name: 'Deep tendon reflexes', expected: ['Normal', 'Hyperactive', 'Hypoactive'], type: 'options' },
        { name: 'Sensation', expected: ['Normal', 'Reduced', 'Absent'], type: 'options' },
        { name: 'Babinski sign', expected: ['Negative', 'Positive'], type: 'options' },
        { name: 'Clonus', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Peripheral pulses', expected: ['Normal', 'Reduced', 'Absent'], type: 'options' }
      ],
      percussion: [
        { name: 'Cerebellar function (e.g., finger-to-nose test)', expected: ['Normal', 'Impaired'], type: 'options' },
        { name: 'Romberg test', expected: ['Negative', 'Positive'], type: 'options' }
      ],
      auscultation: [
        { name: 'Bruit (carotid arteries)', expected: ['Absent', 'Present'], type: 'options' }
      ]
    }
  },
  


  {
    name: 'Genitourinary',
    findings: {
      observation: [
        { name: 'External genitalia', expected: ['Normal', 'Abnormal (e.g., lesions, swelling)'], type: 'options' },
        { name: 'Urethral discharge', expected: ['None', 'Clear', 'Purulent'], type: 'options' },
        { name: 'Vaginal discharge', expected: ['None', 'Clear', 'Cloudy', 'Blood-stained'], type: 'options' },
        { name: 'Labial swelling', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Menstrual status (females)', expected: ['Regular', 'Irregular', 'Postmenopausal'], type: 'options' },
        { name: 'Scrotal swelling (males)', expected: ['Absent', 'Present'], type: 'options' }
      ],
      palpation: [
        { name: 'Bladder palpation', expected: ['Non-tender', 'Tender'], type: 'options' },
        { name: 'Kidney punch', expected: ['Negative', 'Positive'], type: 'options' },
        { name: 'Prostate (males)', expected: ['Normal', 'Enlarged', 'Tender', 'Asymmetrical'], type: 'options' },
        { name: 'Pelvic exam (females)', expected: ['Normal', 'Abnormal (e.g., lesions, masses)'], type: 'options' },
        { name: 'Inguinal lymph nodes', expected: ['Non-tender', 'Tender'], type: 'options' },
        { name: 'Rectal exam (if indicated)', expected: ['Normal', 'Abnormal (e.g., masses, tenderness)'], type: 'options' }
      ],
      percussion: [
        { name: 'Bladder percussion', expected: ['Normal (dullness when full)', 'Hyperresonance'], type: 'options' }
      ],
      auscultation: [
        { name: 'Bowel sounds', expected: ['Normal', 'Increased', 'Decreased', 'Absent'], type: 'options' },
        { name: 'Renal artery bruits', expected: ['Absent', 'Present'], type: 'options' }
      ]
    }
  },
  
  {
    name: 'Endocrine',
    findings: {
      observation: [
        { name: 'Exophthalmos', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Moon facies', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Buffalo hump', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Acanthosis nigricans', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Striae', expected: ['None', 'Present'], type: 'options' },
        { name: 'Gynecomastia', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Hirsutism', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Pigmentation changes', expected: ['Normal', 'Increased', 'Decreased'], type: 'options' }
      ],
      palpation: [
        { name: 'Thyroid gland', expected: ['Normal', 'Enlarged', 'Nodules'], type: 'options' },
        { name: 'Tremor', expected: ['Absent', 'Present'], type: 'options' },
        { name: 'Proximal muscle weakness', expected: ['Absent', 'Present'], type: 'options' }
      ],
      percussion: [],
      auscultation: []
    }
  }

];

