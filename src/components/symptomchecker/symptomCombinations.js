

const symptomCombinations = {
    "stiff neck, headache, fever": {
        "meningitis": 9,
        "encephalitis": 6,
        "migraine": 4
    },
    "abdominal pain, vomiting, fever": {
        "appendicitis": 8,
        "gastroenteritis": 7,
        "pancreatitis": 5
    },
    "chest pain, shortness of breath, sweating": {
        "heart attack": 5,
        "pulmonary embolism": 6,
        "angina": 5
    },
    "dizziness, blurred vision, weakness": {
        "stroke": 5,
        "hypoglycemia": 9,
        "anemia": 9
    },
    "rash, fever, joint pain": {
        "Dengue fever": 7,
        "Rubella": 5,
        "Rheumatic fever": 5
    },
    "fever, night sweats, weight loss": {
        "Tuberculosis": 9,
        "HIV/AIDS": 7,
        "Lymphoma": 7
    },
    "chest pain, nausea, dizziness": {
        "Heart attack": 7,
        "Gastric reflux": 5,
        "Panic attack": 4
    },

    "shortness of breath, cough, fatigue": {
        "Asthma": 6,
        "COPD": 7,
        "Heart failure": 6
    },
    "headache, nausea, photophobia": {
        "Migraine": 7,
        "Meningitis": 7,
        "Cluster headache": 5
    },
    "abdominal pain, diarrhea, weight loss": {
        "Crohn's disease": 7,
        "Celiac disease": 5,
        "IBS": 4
    },
    "jaundice, abdominal pain, dark urine": {
        "Hepatitis": 8,
        "Gallstones": 6,
        "Pancreatitis": 4
    },
    "dizziness, palpitations, sweating": {
        "Anxiety disorder": 6,
        "Hypoglycemia": 8,
        "Hyperthyroidism": 4,
        "Sinus tachycardia": 8,
        "Atrial fibrillation": 6,
        "Thyrotoxicosis": 4,
        "Pheochromoxytoma": 2
    },

    "chest pain, palpitations, dyspnea": {
        "Arrhythmia": 7,
        "Seizure": 6

    },
    "fatigue, weight gain, depression": {
        "Hypothyroidism": 7,
        "Cushing's syndrome": 5,
        "Chronic fatigue syndrome": 4
    },
    "urinary frequency, painful urination, fever": {
        "UTI": 9,
        "urinary stones": 6,
        "Prostatitis": 5
    },
    "joint pain, fatigue, butterfly rash": {
        "Systemic lupus erythematosus": 9,
        "Rheumatoid arthritis": 6,
        "Dermatomyositis": 5
    },
    "dry cough, fever, loss of taste": {
        "COVID-109": 8,
        "Viral bronchitis": 7,
        "Flu": 5
    },
    "sore throat, fever, swollen lymph nodes": {
        "Strep throat": 8,
        "Mononucleosis": 6,
        "Tonsillitis": 5
    },
    "fever, cough, runny nose": {
        "Common cold": 7,
        "Influenza": 7,
        "Allergic rhinitis": 5
    },
    "fever, headache, stiff neck": {
        "Meningitis": 9,
        "Encephalitis": 6,
        "Subarachnoid hemorrhage": 5
    },

    "abdominal pain, nausea, jaundice": {
        "Hepatitis": 8,
        "Pancreatitis": 6,
        "Gallstones": 5
    },
    "fever, vomiting, abdominal pain": {
        "Appendicitis": 7,
        "Gastroenteritis": 6,
        "Pancreatitis": 5
    },
    "fatigue, pallor, shortness of breath": {
        "Anemia": 8,
        "Heart failure": 6,
        "Chronic kidney disease": 5
    },
    "blurred vision, frequent urination, increased thirst": {
        "Diabetes mellitus": 8,
        "Hyperglycemia": 6,
        "Diabetic ketoacidosis": 5
    },
    "unilateral leg pain, swelling, redness": {
        "Deep vein thrombosis (DVT)": 8,
        "Cellulitis": 7,
        "Muscle strain": 4
    },
    "persistent cough, hemoptysis, weight loss": {
        "Lung cancer": 7,
        "Tuberculosis": 9,
        "Bronchiectasis": 5
    },
    "high fever, rash, vomiting": {
        "Meningococcemia": 7,
        "Scarlet fever": 6,
        "Toxic shock syndrome": 5
    },
    "muscle pain, fatigue, dark urine": {
        "Rhabdomyolysis": 8,
        "Viral myositis": 5,
        "Hemolytic anemia": 4
    },
    "headache, vomiting, visual disturbances": {
        "Migraine": 6,
        "Brain tumor": 5,
        "Pseudotumor cerebri": 4
    },
    "fever, hematuria, flank pain": {
        "Pyelonephritis": 8,
        "Kidney stones": 6,
        "Renal abscess": 5
    },
    "fever, jaundice, confusion": {
        "Sepsis": 7,
        "Fulminant hepatitis": 6,
        "Leptospirosis": 5
    },
    "fever, severe sore throat, drooling": {
        "Epiglottitis": 7,
        "Peritonsillar abscess": 6,
        "Ludwig's angina": 5
    },
    "severe headache, fever, rash": {
        "Meningococcemia": 7,
        "Rocky Mountain spotted fever": 6,
        "Endocarditis": 5
    },
    "severe chest pain, shortness of breath, hemoptysis": {
        "Pulmonary embolism": 7,
        "Aortic dissection": 6,
        "Myocardial infarction": 5
    },
    "abdominal pain, bloody diarrhea, weight loss": {
        "Ulcerative colitis": 6,
        "Crohn's disease": 5,
        "Ischemic colitis": 4
    },
    "severe headache, vomiting, neck stiffness": {
        "Meningitis": 8,
        "Subarachnoid hemorrhage": 6,
        "Migraine": 5
    },
    "confusion, fever, seizures": {
        "Encephalitis": 7,
        "Meningitis": 6,
        "Sepsis": 5
    },
    "joint pain, rash, fever": {
        "Rheumatic fever": 7,
        "Systemic lupus erythematosus": 6,
        "Lyme disease": 5
    },
    "chest pain, dizziness, palpitations": {
        "Myocardial infarction": 8,
        "Anxiety": 6,
        "Aortic dissection": 7
    },
 
    "sore throat, fever, cough": {
        "Pharyngitis": 6,
        "Tonsillitis": 5,
        "Flu": 4
    },
    "abdominal pain, diarrhea, nausea": {
        "Gastroenteritis": 7,
        "Appendicitis": 5,
        "Diverticulitis": 4
    },
    "fever, dry cough, fatigue": {
        "COVID-109": 7,
        "Influenza": 6,
        "Pneumonia": 5
    },
    "unilateral headache, nausea, sensitivity to light": {
        "Migraine": 7,
        "Cluster headache": 6,
        "Tension headache": 5
    },
        "fatigue, depression, weight gain": {
            "Hypothyroidism": 7,
            "Cushing's syndrome": 6,
            "Chronic fatigue syndrome": 5
        },
        "fever, joint pain, swollen lymph nodes": {
            "Lymphoma": 7,
            "Systemic lupus erythematosus": 6,
            "Rheumatic fever": 5
        },
        "sudden chest pain, shortness of breath, cyanosis": {
            "Pulmonary embolism": 8,
            "Myocardial infarction": 7,
            "Pneumothorax": 6,
            "Pleurisy": 5
        },

        "chest pain, sweating, vomiting": {
            "Myocardial infarction": 8,
            "Angina": 6,
            "Tietze's syndrome": 4
        },
        "muscle pain, pain on respiration, chest pain": {
            "Pleurisy": 9,
            "Fractured rib": 8,
            "Gall stones": 7
        },
        "headache, confusion, seizures": {
            "Encephalitis": 7,
            "Meningitis": 6,
            "Hypertensive encephalopathy": 5
        },
        "abdominal pain, nausea, vomiting": {
            "Appendicitis": 7,
            "Pancreatitis": 6,
            "Peptic ulcer": 5
        },
        "persistent cough, hoarseness, weight loss": {
            "Laryngeal cancer": 7,
            "Gastroesophageal reflux disease (GERD)": 6,
            "Lung cancer": 5
        },
        "severe headache, neck stiffness, fever": {
            "Meningitis": 8,
            "Subarachnoid hemorrhage": 7,
            "Migraine": 5
        },
        "shortness of breath, fatigue, palpitations": {
            "Anemia": 7,
            "Heart failure": 6,
            "Atrial fibrillation": 5
        },

        "fever, sore throat, rash": {
            "Scarlet fever": 7,
            "Mononucleosis": 6,
            "Viral exanthem": 5
        },
        "fatigue, jaundice, abdominal pain": {
            "Hepatitis": 7,
            "Cirrhosis": 6,
            "Cholestasis": 5
        },
        "headache, vomiting, dizziness": {
            "Migraine": 7,
            "Brain tumor": 6,
            "Benign paroxysmal positional vertigo (BPPV)": 5
        },
        "fever, headache, eye pain": {
            "Dengue fever": 7,
            "Influenza": 6,
            "Sinusitis": 5
        },
        "fever, nausea, jaundice": {
            "Hepatitis": 7,
            "Leptospirosis": 5,
            "Malaria": 8
        },
        "fever, abdominal pain, bloody diarrhea": {
            "Shigellosis": 7,
            "Amoebiasis": 6,
            "Ischemic colitis": 5
        },
        "persistent cough, fatigue, night sweats": {
            "Tuberculosis": 9,
            "Lung cancer": 7,
            "Chronic obstructive pulmonary disease (COPD)": 6
        },
        "persistent headache, nausea, blurred vision": {
            "Pseudotumor cerebri": 7,
            "Migraine": 6,
            "Brain tumor": 5
        },
        "fever, neck stiffness, confusion": {
            "Meningitis": 8,
            "Encephalitis": 7,
            "Sepsis": 6
        },
        "abdominal pain, nausea, diarrhea": {
            "Gastroenteritis": 7,
            "Appendicitis": 6,
            "Irritable bowel syndrome (IBS)": 5
        },
        "joint pain, fatigue, fever": {
            "Systemic lupus erythematosus": 7,
            "Rheumatic fever": 6,
            "Lyme disease": 5
        },
        "fever, cough, shortness of breath": {
            "Pneumonia": 7,
            "COVID-109": 6,
            "Bronchitis": 5
        },
        "persistent chest pain, fatigue, shortness of breath": {
            "Angina": 7,
            "Heart failure": 6,
            "Pulmonary embolism": 5
        },
        "headache, dizziness, confusion": {
            "Stroke": 7,
            "Hypertensive encephalopathy": 6,
            "Hypoglycemia": 5
        },
        "fatigue, weight loss, persistent cough": {
            "Tuberculosis": 9,
            "Lung cancer": 6,
            "HIV/AIDS": 5
        },
        "fever, headache, vomiting": {
            "Meningitis": 7,
            "Encephalitis": 6,
            "Malaria": 8
        },
        "fever, rash, joint pain": {
            "Systemic lupus erythematosus": 7,
            "Rheumatic fever": 6,
            "Lyme disease": 5
        },
        "sudden vision loss, eye pain, nausea": {
            "Acute angle-closure glaucoma": 7,
            "Optic neuritis": 6,
            "Uveitis": 5
        },
        "fever, chills, lower back pain": {
            "Pyelonephritis": 7,
            "Kidney stones": 6,
            "Prostatitis": 5
        },
        "abdominal pain, bloating, diarrhea": {
            "Irritable bowel syndrome (IBS)": 6,
            "Celiac disease": 5,
            "Lactose intolerance": 4
        },
        "persistent cough, bloody sputum, fatigue": {
            "Lung cancer": 8,
            "Tuberculosis": 8,
            "Bronchiectasis": 6
        },
        "persistent fever, night sweats, anemia": {
            "Lymphoma": 7,
            "Tuberculosis": 6,
            "Endocarditis": 5
        },
        "sore throat, hoarseness, cough": {
            "Laryngitis": 7,
            "Gastroesophageal reflux disease (GERD)": 6,
            "Vocal cord nodules": 5
        },
        "abdominal pain, nausea, constipation": {
            "Appendicitis": 7,
            "Bowel obstruction": 6,
            "Diverticulitis": 5
        },
        "chest pain, shortness of breath, palpitations": {
            "Myocardial infarction": 8,
            "Atrial fibrillation": 7,
            "Pulmonary embolism": 6
        },
        "persistent cough, shortness of breath, chest tightness": {
            "Asthma": 7,
            "Chronic obstructive pulmonary disease (COPD)": 6,
            "Bronchitis": 5
        },
        "sudden chest pain, shortness of breath, dizziness": {
            "Myocardial infarction": 8,
            "Pulmonary embolism": 7,
            "Aortic dissection": 6
        },
        "headache, nausea, visual disturbances": {
            "Migraine": 7,
            "Pseudotumor cerebri": 6,
            "Brain tumor": 5
        },
        "fever, fatigue, swollen lymph nodes": {
            "Mononucleosis": 7,
            "HIV/AIDS": 6,
            "Lymphoma": 5
        },
        "abdominal pain, jaundice, weight loss": {
            "Pancreatic cancer": 7,
            "Cholangiocarcinoma": 6,
            "Chronic pancreatitis": 5
        },
        "sudden severe headache, vomiting, neck stiffness": {
            "Meningitis": 8,
            "Subarachnoid hemorrhage": 7,
            "Migraine": 5
        },
        "sudden chest pain, shortness of breath, hemoptysis": {
            "Pulmonary embolism": 8,
            "Myocardial infarction": 7,
            "Pneumonia": 6
        },
    
    // Fever, lower abdominal pain, painful urination
    "fever, lower abdominal pain, painful urination": {
        "Urinary tract infection": 9.5,
        "Pelvic inflammatory disease": 7,
        "Schistosomiasis": 6
    },
    // Persistent cough, fever, night sweats
    "persistent cough, fever, night sweats": {
        "Tuberculosis": 9,
        "HIV/AIDS": 7,
        "Pneumonia": 6
    },
    // Fever, muscle pain, bleeding gums
    "fever, muscle pain, bleeding gums": {
        "Dengue fever": 8,
        "Leptospirosis": 7,
        "Ebola virus disease": 6
    },
    // Fever, abdominal pain, constipation
    "fever, abdominal pain, constipation": {
        "Typhoid fever": 7,
        "Amoebiasis": 6,
        "Intestinal obstruction": 5
    },
    // Fever, joint pain, muscle pain
    "fever, joint pain, muscle pain": {
        "Dengue fever": 8,
        "Chikungunya": 7,
        "Rheumatic fever": 5
    },
    // Fever, rash, itching
    "fever, rash, itching": {
        "Measles": 8,
        "Chickenpox": 7,
        "Rubella": 6
    },
    // Fever, cough, sore throat
    "fever, cough, sore throat": {
        "Influenza": 8,
        "COVID-109": 7,
        "Pneumonia": 6
    },
    // Fever, headache, confusion
    "fever, headache, confusion": {
        "Cerebral malaria": 9,
        "Meningitis": 7,
        "Encephalitis": 6
    },
    // Abdominal pain, fever, loss of appetite
    "abdominal pain, fever, loss of appetite": {
        "Typhoid fever": 8,
        "Appendicitis": 7,
        "Hepatitis": 6
    },
    // Persistent cough, shortness of breath, chest pain
    "persistent cough, shortness of breath, chest pain": {
        "Tuberculosis": 8,
        "Chronic obstructive pulmonary disease (COPD)": 7,
        "Asthma": 6
    },
    // Fever, muscle pain, fatigue
    "fever, muscle pain, fatigue": {
        "Dengue fever": 5,
        "Leptospirosis": 6,
        "Malaria": 9
    },

    // Fever, diarrhea, dehydration
    "fever, diarrhea, dehydration": {
        "Cholera": 8,
        "Gastroenteritis": 7,
        "Amoebiasis": 6
    },
    // Severe headache, fever, nausea
    "headache, fever, nausea": {
        "Meningitis": 6,
        "Malaria": 9,
        "Migraine": 6
    },
    // Fever, joint pain, swelling
    "fever, joint pain, swelling": {
        "Chikungunya": 8,
        "Dengue fever": 7,
        "Rheumatic fever": 6
    },
    // Abdominal pain, fever, vomiting
    "abdominal pain, fever, vomiting": {
        "Gastroenteritis": 8,
        "Appendicitis": 7,
        "Typhoid fever": 6
    },
    // Fever, headache, photophobia
    "fever, headache, photophobia": {
        "Meningitis": 8,
        "Cerebral malaria": 7,
        "Encephalitis": 6
    },
    // Persistent diarrhea, fever, abdominal cramping
    "persistent diarrhea, fever, abdominal cramping": {
        "Amoebiasis": 8,
        "Giardiasis": 7,
        "Gastroenteritis": 6
    },
    // Severe pelvic pain, fever, nausea
    "severe pelvic pain, fever, nausea": {
        "Ovarian torsion": 9,
        "Pelvic inflammatory disease": 8,
        "Ruptured ovarian cyst": 7
    },

    // Vaginal bleeding, lower back pain, uterine tenderness
    "vaginal bleeding, lower back pain, uterine tenderness": {
        "Placental abruption": 9,
        "Miscarriage": 8,
        "Endometritis": 7
    },



    // Vaginal bleeding, abdominal pain, fainting
    "vaginal bleeding, abdominal pain, fainting": {
        "Ectopic pregnancy": 9,
        "Miscarriage": 8,
        "Placental abruption": 7
    },


    // Vaginal bleeding, severe abdominal pain, uterine tenderness
    "vaginal bleeding, severe abdominal pain, uterine tenderness": {
        "Placental abruption": 9,
        "Miscarriage": 8,
        "Ruptured ectopic pregnancy": 7
    },
    // Irregular periods, weight gain, infertility
    "irregular periods, weight gain, infertility": {
        "Polycystic ovary syndrome (PCOS)": 9,
        "Hypothyroidism": 8,
        "Cushing's syndrome": 7
    },
    // Severe pelvic pain, abdominal distension, nausea
    "severe pelvic pain, abdominal distension, nausea": {
        "Ovarian torsion": 9,
        "Ovarian cyst rupture": 8,
        "Pelvic inflammatory disease": 7
    },
    // Lower abdominal pain, vaginal discharge, dyspareunia
    "lower abdominal pain, vaginal discharge, dyspareunia": {
        "Pelvic inflammatory disease": 9,
        "Endometriosis": 8,
        "Vaginitis": 7
    },

    // Fever, cough, difficulty breathing
    "fever, cough, difficulty breathing": {
        "Pneumonia": 9,
        "Bronchiolitis": 8,
        "Asthma": 7
    },

    "swelling of feet, gasping for breath at night(paroxysmal nocturnal dyspnea), orthopnea ":{
        "Left Ventricular Failure": 8,
        "Pulmonary Embolism": 8,
        "Anemia": 6,
        "Anxiety": 4
    },
    // Persistent diarrhea, vomiting, dehydration
    "persistent diarrhea, vomiting, dehydration": {
        "Acute gastroenteritis": 9,
        "Rotavirus infection": 8,
        "Giardiasis": 7
    },
    // High fever, rash, runny nose
    "high fever, rash, runny nose": {
        "Measles": 9,
        "Rubella": 8,
        "Roseola": 7
    },

    "fever, generalized swelling, decreased urine output": {
        "Nephrotic syndrome": 9,
        "Glomerulonephritis": 8,
        "Acute kidney injury": 7
    },
    // Chronic cough, weight loss, night sweats
    "chronic cough, loss of weight, night sweats": {
        "Tuberculosis": 9,
        "HIV": 8,
        "Chronic bronchitis": 7
    },

    // Fever, abdominal pain, diarrhea with blood
    "fever, abdominal pain, diarrhea with blood": {
        "Typhoid fever": 9,
        "Shigellosis": 8,
        "Amoebiasis": 7
    },


    // Persistent cough, chest pain, difficulty breathing
    "persistent cough, chest pain, difficulty breathing": {
        "Pneumonia": 9,
        "Pulmonary embolism": 8,
        "Lung cancer": 7
    }, 

    // Heavy menstrual bleeding, clots in menstrual flow, anemia
    "heavy menstrual bleeding, clots in menstrual flow, anemia": {
        "Uterine fibroids": 9,
        "Adenomyosis": 8,
        "Endometrial hyperplasia": 7
    },

    // Pelvic pain, painful periods, dyspareunia
    "pelvic pain, painful periods, dyspareunia": {
        "Endometriosis": 9,
        "Chronic pelvic inflammatory disease": 8,
        "Uterine fibroids": 7
    },


    // Heavy menstrual bleeding, pelvic pressure, fatigue
    "heavy menstrual bleeding, pelvic pressure, fatigue": {
        "Uterine fibroids": 9,
        "Adenomyosis": 8,
        "Endometrial hyperplasia": 7
    },



    // Vaginal itching, burning sensation, abnormal discharge
    "vaginal itching, burning sensation, abnormal discharge": {
        "Vaginal candidiasis": 9,
        "Bacterial vaginosis": 8,
        "Trichomoniasis": 7
    },
    // Amenorrhea, infertility, hirsutism
    "amenorrhea, infertility, hirsutism": {
        "Polycystic ovary syndrome (PCOS)": 9,
        "Hyperprolactinemia": 8,
        "Hypothyroidism": 7
    },


    // Chronic cough, weight loss, night sweats
    "chronic cough, weight loss, night sweats": {
        "Tuberculosis": 9,
        "HIV": 8,
        "Chronic bronchitis": 7
    },
    // Recurrent ear infections, hearing loss, ear pain
    "recurrent ear infections, hearing loss, ear pain": {
        "Otitis media": 9,
        "Chronic suppurative otitis media": 8,
        "Mastoiditis": 7
    },

    // Fever, severe joint pain, rash
    "fever, severe joint pain, rash": {
        "Dengue fever": 9,
        "Chikungunya": 8,
        "Rheumatic fever": 7
    },
    // Persistent diarrhea, failure to thrive, bloated abdomen
    "persistent diarrhea, failure to thrive, bloated abdomen": {
        "Malnutrition": 9,
        "Giardiasis": 8,
        "Celiac disease": 7
    },
    // Fever, sore throat, swollen lymph nodes
    "fever, sore throat, swollen lymph nodes": {
        "Tonsillitis": 9,
        "Infectious mononucleosis": 8,
        "Diphtheria": 7
    },
    // Severe headache, vomiting, photophobia
    "severe headache, vomiting, photophobia": {
        "Meningitis": 9,
        "Migraine": 8,
        "Cerebral malaria": 7
    },
    // Wheezing, cough, difficulty breathing
    "wheezing, cough, difficulty breathing": {
        "Asthma": 9,
        "Bronchiolitis": 8,
        "Allergic rhinitis": 7
    },
    // Fever, severe abdominal pain, vomiting
    "fever, severe abdominal pain, vomiting": {
        "Appendicitis": 9,
        "Intussusception": 8,
        "Gastroenteritis": 7
    },
    // Pale skin, fatigue, shortness of breath
    "pale skin, fatigue, shortness of breath": {
        "Anemia": 9,
        "Sickle cell disease": 8,
        "Iron deficiency anemia": 7
    },
    // Severe abdominal pain, fever, vomiting
    "severe abdominal pain, fever, vomiting": {
        "Appendicitis": 9,
        "Cholecystitis": 8,
        "Pancreatitis": 7
    },

    // Severe headache, visual disturbances, nausea
    "severe headache, visual disturbances, nausea": {
        "Migraine": 9,
        "Hypertension": 8,
        "Cerebral malaria": 7
    },
    // Fever, joint pain, rash
    "fever, joint pain, rash": {
        "Dengue fever": 9,
        "Chikungunya": 8,
        "Typhoid fever": 7
    },

    // Abdominal pain, diarrhea, fever
    "abdominal pain, diarrhea, fever": {
        "Typhoid fever": 9,
        "Dysentery": 8,
        "Gastroenteritis": 7
    },

    // Severe abdominal pain, diarrhea, vomiting
    "severe abdominal pain, diarrhea, vomiting": {
        "Dysentery": 9,
        "Gastroenteritis": 8,
        "Typhoid fever": 7
    },
    // Jaundice, abdominal pain, fever
    "jaundice, abdominal pain, fever": {
        "Hepatitis B": 9,
        "Hepatitis C": 8,
        "Liver disease": 7
    },
    // Swollen joints, fever, rash
    "swollen joints, fever, rash": {
        "Rheumatic fever": 9,
        "Arthritis": 8,
        "Chikungunya": 7
    },
    // Persistent diarrhea, dehydration, abdominal cramps
    "persistent diarrhea, dehydration, abdominal cramps": {
        "Cholera": 9,
        "Dysentery": 8,
        "Giardiasis": 7
    },
    // Fever, weakness, swollen lymph nodes
    "fever, weakness, swollen lymph nodes": {
        "Lymphatic filariasis": 9,
        "HIV/AIDS": 8,
        "Tuberculosis": 7
    },
    // Fever, nausea, rash
    "fever, nausea, rash": {
        "Measles": 9,
        "Chickenpox": 8,
        "Rubella": 7
    },
    // Severe abdominal pain, fever, jaundice
    "severe abdominal pain, fever, jaundice": {
        "Hepatitis": 9,
        "Cholecystitis": 8,
        "Pancreatitis": 7
    },
    // Weight loss, cough, night sweats
    "weight loss, cough, night sweats": {
        "Tuberculosis": 9,
        "HIV/AIDS": 8,
        "Lung cancer": 7
    },
    // Itchy skin, rash, fever
    "itchy skin, rash, fever": {
        "Chickenpox": 9,
        "Measles": 8,
        "Scabies": 7
    },
    // Severe headache, vision changes, nausea
    "severe headache, vision changes, nausea": {
        "Migraine": 9,
        "Hypertension": 8,
        "Cerebral malaria": 7
    },
    // High fever, sore throat, swollen glands
    "high fever, sore throat, swollen glands": {
        "Tonsillitis": 9,
        "Infectious mononucleosis": 8,
        "Streptococcal pharyngitis": 7
    },
    // Swollen abdomen, fatigue, weight loss
    "swollen abdomen, fatigue, weight loss": {
        "Ascites": 9,
        "Liver cirrhosis": 8,
        "Ovarian cancer": 7
    },
    // High fever, severe abdominal pain, diarrhea
    "high fever, severe abdominal pain, diarrhea": {
        "Typhoid fever": 9,
        "Dysentery": 8,
        "Gastroenteritis": 7
    },
    "fever, sore throat, difficulty swallowing": {
        "Pharyngitis": 9,
        "Tonsillitis": 8,
        "Laryngitis": 7
    },

    // Severe headache, confusion, fever
    "severe headache, confusion, fever": {
        "Meningitis": 9,
        "Encephalitis": 8,
        "Cerebral malaria": 8
    },
};
export default symptomCombinations;
