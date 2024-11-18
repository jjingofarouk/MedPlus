const symptomCombinations = {
    "fever, cough, shortness of breath": {
        "COVID-19": 0.7,
        "pneumonia": 0.6,
        "bronchitis": 0.5
    },
    "stiff neck, headache, fever": {
        "meningitis": 0.8,
        "encephalitis": 0.6,
        "migraine": 0.4
    },
    "abdominal pain, vomiting, fever": {
        "appendicitis": 0.7,
        "gastroenteritis": 0.6,
        "pancreatitis": 0.5
    },
    "chest pain, shortness of breath, sweating": {
        "heart attack": 0.8,
        "pulmonary embolism": 0.7,
        "angina": 0.5
    },
    "dizziness, blurred vision, weakness": {
        "stroke": 0.7,
        "hypoglycemia": 0.6,
        "anemia": 0.5
    },
    "rash, fever, joint pain": {
        "Dengue fever": 0.7,
        "Rubella": 0.5,
        "Rheumatic fever": 0.4
    },
    "fever, night sweats, weight loss": {
        "Tuberculosis": 0.8,
        "HIV/AIDS": 0.7,
        "Lymphoma": 0.6
    },
    "chest pain, nausea, dizziness": {
        "Heart attack": 0.7,
        "Gastric reflux": 0.5,
        "Panic attack": 0.4
    },
    "cough, fever, night sweats": {
        "Tuberculosis": 0.8,
        "COVID-19": 0.6,
        "Pneumonia": 0.5
    },
    "shortness of breath, cough, fatigue": {
        "Asthma": 0.6,
        "COPD": 0.6,
        "Heart failure": 0.5
    },
    "headache, nausea, photophobia": {
        "Migraine": 0.7,
        "Meningitis": 0.6,
        "Cluster headache": 0.5
    },
    "abdominal pain, diarrhea, weight loss": {
        "Crohn's disease": 0.6,
        "Celiac disease": 0.5,
        "IBS": 0.4
    },
    "jaundice, abdominal pain, dark urine": {
        "Hepatitis": 0.7,
        "Gallstones": 0.5,
        "Pancreatitis": 0.4
    },
    "dizziness, palpitations, sweating": {
        "Anxiety disorder": 0.6,
        "Hypoglycemia": 0.5,
        "Hyperthyroidism": 0.4
    },
    "fatigue, weight gain, depression": {
        "Hypothyroidism": 0.7,
        "Cushing's syndrome": 0.5,
        "Chronic fatigue syndrome": 0.4
    },
    "urinary frequency, painful urination, fever": {
        "UTI": 0.7,
        "Kidney infection": 0.6,
        "Prostatitis": 0.5
    },
    "joint pain, fatigue, butterfly rash": {
        "Systemic lupus erythematosus": 0.7,
        "Rheumatoid arthritis": 0.6,
        "Dermatomyositis": 0.5
    },
    "dry cough, fever, loss of taste": {
        "COVID-19": 0.8,
        "Viral bronchitis": 0.6,
        "Flu": 0.5
    },
    "sore throat, fever, swollen lymph nodes": {
        "Strep throat": 0.7,
        "Mononucleosis": 0.6,
        "Tonsillitis": 0.5
    },
    "fever, cough, runny nose": {
        "Common cold": 0.6,
        "Influenza": 0.6,
        "Allergic rhinitis": 0.5
    },
    "fever, headache, stiff neck": {
        "Meningitis": 0.8,
        "Encephalitis": 0.6,
        "Subarachnoid hemorrhage": 0.5
    },
    "fever, fatigue, swollen lymph nodes": {
        "Mononucleosis": 0.7,
        "HIV/AIDS": 0.6,
        "Lymphoma": 0.5
    },
    "abdominal pain, nausea, jaundice": {
        "Hepatitis": 0.7,
        "Pancreatitis": 0.6,
        "Gallstones": 0.5
    },
    "fever, vomiting, abdominal pain": {
        "Appendicitis": 0.7,
        "Gastroenteritis": 0.6,
        "Pancreatitis": 0.5
    },
    "fatigue, pallor, shortness of breath": {
        "Anemia": 0.7,
        "Heart failure": 0.6,
        "Chronic kidney disease": 0.5
    },
    "blurred vision, frequent urination, increased thirst": {
        "Diabetes mellitus": 0.7,
        "Hyperglycemia": 0.6,
        "Diabetic ketoacidosis": 0.5
    },
    "unilateral leg pain, swelling, redness": {
        "Deep vein thrombosis (DVT)": 0.6,
        "Cellulitis": 0.5,
        "Muscle strain": 0.4
    },
    "persistent cough, hemoptysis, weight loss": {
        "Lung cancer": 0.7,
        "Tuberculosis": 0.6,
        "Bronchiectasis": 0.5
    },
    "high fever, rash, vomiting": {
        "Meningococcemia": 0.7,
        "Scarlet fever": 0.6,
        "Toxic shock syndrome": 0.5
    },
    "muscle pain, fatigue, dark urine": {
        "Rhabdomyolysis": 0.6,
        "Viral myositis": 0.5,
        "Hemolytic anemia": 0.4
    },
    "headache, vomiting, visual disturbances": {
        "Migraine": 0.6,
        "Brain tumor": 0.5,
        "Pseudotumor cerebri": 0.4
    },
    "fever, hematuria, flank pain": {
        "Pyelonephritis": 0.7,
        "Kidney stones": 0.6,
        "Renal abscess": 0.5
    },
    "fever, jaundice, confusion": {
        "Sepsis": 0.7,
        "Fulminant hepatitis": 0.6,
        "Leptospirosis": 0.5
    },
    "fever, severe sore throat, drooling": {
        "Epiglottitis": 0.7,
        "Peritonsillar abscess": 0.6,
        "Ludwig's angina": 0.5
    },
    "severe headache, fever, rash": {
        "Meningococcemia": 0.7,
        "Rocky Mountain spotted fever": 0.6,
        "Endocarditis": 0.5
    },
    "severe chest pain, shortness of breath, hemoptysis": {
        "Pulmonary embolism": 0.7,
        "Aortic dissection": 0.6,
        "Myocardial infarction": 0.5
    },
    "abdominal pain, bloody diarrhea, weight loss": {
        "Ulcerative colitis": 0.6,
        "Crohn's disease": 0.5,
        "Ischemic colitis": 0.4
    },
    "severe headache, vomiting, neck stiffness": {
        "Meningitis": 0.8,
        "Subarachnoid hemorrhage": 0.6,
        "Migraine": 0.5
    },
    "confusion, fever, seizures": {
        "Encephalitis": 0.7,
        "Meningitis": 0.6,
        "Sepsis": 0.5
    },
    "joint pain, rash, fever": {
        "Rheumatic fever": 0.7,
        "Systemic lupus erythematosus": 0.6,
        "Lyme disease": 0.5
    },
    "chest pain, dizziness, palpitations": {
        "Myocardial infarction": 0.8,
        "Panic attack": 0.6,
        "Aortic dissection": 0.7
    },
    "persistent cough, shortness of breath, chest tightness": {
        "Asthma": 0.7,
        "Chronic obstructive pulmonary disease (COPD)": 0.6,
        "Interstitial lung disease": 0.5
    },
    "sore throat, fever, cough": {
        "Pharyngitis": 0.6,
        "Tonsillitis": 0.5,
        "Flu": 0.4
    },
    "abdominal pain, diarrhea, nausea": {
        "Gastroenteritis": 0.7,
        "Appendicitis": 0.5,
        "Diverticulitis": 0.4
    },
    "fever, dry cough, fatigue": {
        "COVID-19": 0.7,
        "Influenza": 0.6,
        "Pneumonia": 0.5
    },
    "unilateral headache, nausea, sensitivity to light": {
        "Migraine": 0.7,
        "Cluster headache": 0.6,
        "Tension headache": 0.5
    },
        "fatigue, depression, weight gain": {
            "Hypothyroidism": 0.7,
            "Cushing's syndrome": 0.6,
            "Chronic fatigue syndrome": 0.5
        },
        "fever, joint pain, swollen lymph nodes": {
            "Lymphoma": 0.7,
            "Systemic lupus erythematosus": 0.6,
            "Rheumatic fever": 0.5
        },
        "sudden chest pain, shortness of breath, cyanosis": {
            "Pulmonary embolism": 0.8,
            "Myocardial infarction": 0.7,
            "Pneumothorax": 0.6
        },
        "headache, confusion, seizures": {
            "Encephalitis": 0.7,
            "Meningitis": 0.6,
            "Hypertensive encephalopathy": 0.5
        },
        "abdominal pain, nausea, vomiting": {
            "Appendicitis": 0.7,
            "Pancreatitis": 0.6,
            "Peptic ulcer": 0.5
        },
        "persistent cough, hoarseness, weight loss": {
            "Laryngeal cancer": 0.7,
            "Gastroesophageal reflux disease (GERD)": 0.6,
            "Lung cancer": 0.5
        },
        "severe headache, neck stiffness, fever": {
            "Meningitis": 0.8,
            "Subarachnoid hemorrhage": 0.7,
            "Migraine": 0.5
        },
        "shortness of breath, fatigue, palpitations": {
            "Anemia": 0.7,
            "Heart failure": 0.6,
            "Atrial fibrillation": 0.5
        },
        "abdominal pain, bloody diarrhea, weight loss": {
            "Ulcerative colitis": 0.7,
            "Crohn's disease": 0.6,
            "Ischemic colitis": 0.5
        },
        "fever, sore throat, rash": {
            "Scarlet fever": 0.7,
            "Mononucleosis": 0.6,
            "Viral exanthem": 0.5
        },
        "fatigue, jaundice, abdominal pain": {
            "Hepatitis": 0.7,
            "Cirrhosis": 0.6,
            "Cholestasis": 0.5
        },
        "headache, vomiting, dizziness": {
            "Migraine": 0.7,
            "Brain tumor": 0.6,
            "Benign paroxysmal positional vertigo (BPPV)": 0.5
        },
        "fever, headache, eye pain": {
            "Dengue fever": 0.7,
            "Influenza": 0.6,
            "Sinusitis": 0.5
        },
        "fever, nausea, jaundice": {
            "Hepatitis": 0.7,
            "Leptospirosis": 0.6,
            "Malaria": 0.5
        },
        "fever, abdominal pain, bloody diarrhea": {
            "Shigellosis": 0.7,
            "Amoebiasis": 0.6,
            "Ischemic colitis": 0.5
        },
        "persistent cough, fatigue, night sweats": {
            "Tuberculosis": 0.8,
            "Lung cancer": 0.7,
            "Chronic obstructive pulmonary disease (COPD)": 0.6
        },
        "persistent headache, nausea, blurred vision": {
            "Pseudotumor cerebri": 0.7,
            "Migraine": 0.6,
            "Brain tumor": 0.5
        },
        "fever, neck stiffness, confusion": {
            "Meningitis": 0.8,
            "Encephalitis": 0.7,
            "Sepsis": 0.6
        },
        "abdominal pain, nausea, diarrhea": {
            "Gastroenteritis": 0.7,
            "Appendicitis": 0.6,
            "Irritable bowel syndrome (IBS)": 0.5
        },
        "joint pain, fatigue, fever": {
            "Systemic lupus erythematosus": 0.7,
            "Rheumatic fever": 0.6,
            "Lyme disease": 0.5
        },
        "fever, cough, shortness of breath": {
            "Pneumonia": 0.7,
            "COVID-19": 0.6,
            "Bronchitis": 0.5
        },
        "persistent chest pain, fatigue, shortness of breath": {
            "Angina": 0.7,
            "Heart failure": 0.6,
            "Pulmonary embolism": 0.5
        },
        "headache, dizziness, confusion": {
            "Stroke": 0.7,
            "Hypertensive encephalopathy": 0.6,
            "Hypoglycemia": 0.5
        },
        "fatigue, weight loss, persistent cough": {
            "Tuberculosis": 0.7,
            "Lung cancer": 0.6,
            "HIV/AIDS": 0.5
        },
        "fever, headache, vomiting": {
            "Meningitis": 0.7,
            "Encephalitis": 0.6,
            "Malaria": 0.5
        },
        "fever, rash, joint pain": {
            "Systemic lupus erythematosus": 0.7,
            "Rheumatic fever": 0.6,
            "Lyme disease": 0.5
        },
        "sudden vision loss, eye pain, nausea": {
            "Acute angle-closure glaucoma": 0.7,
            "Optic neuritis": 0.6,
            "Uveitis": 0.5
        },
        "fever, chills, lower back pain": {
            "Pyelonephritis": 0.7,
            "Kidney stones": 0.6,
            "Prostatitis": 0.5
        },
        "abdominal pain, bloating, diarrhea": {
            "Irritable bowel syndrome (IBS)": 0.6,
            "Celiac disease": 0.5,
            "Lactose intolerance": 0.4
        },
        "persistent cough, bloody sputum, fatigue": {
            "Lung cancer": 0.8,
            "Tuberculosis": 0.7,
            "Bronchiectasis": 0.6
        },
        "persistent fever, night sweats, anemia": {
            "Lymphoma": 0.7,
            "Tuberculosis": 0.6,
            "Endocarditis": 0.5
        },
        "sore throat, hoarseness, cough": {
            "Laryngitis": 0.7,
            "Gastroesophageal reflux disease (GERD)": 0.6,
            "Vocal cord nodules": 0.5
        },
        "abdominal pain, nausea, constipation": {
            "Appendicitis": 0.7,
            "Bowel obstruction": 0.6,
            "Diverticulitis": 0.5
        },
        "chest pain, shortness of breath, palpitations": {
            "Myocardial infarction": 0.8,
            "Atrial fibrillation": 0.7,
            "Pulmonary embolism": 0.6
        },
        "persistent cough, shortness of breath, chest tightness": {
            "Asthma": 0.7,
            "Chronic obstructive pulmonary disease (COPD)": 0.6,
            "Bronchitis": 0.5
        },
        "sudden chest pain, shortness of breath, dizziness": {
            "Myocardial infarction": 0.8,
            "Pulmonary embolism": 0.7,
            "Aortic dissection": 0.6
        },
        "headache, nausea, visual disturbances": {
            "Migraine": 0.7,
            "Pseudotumor cerebri": 0.6,
            "Brain tumor": 0.5
        },
        "fever, fatigue, swollen lymph nodes": {
            "Mononucleosis": 0.7,
            "HIV/AIDS": 0.6,
            "Lymphoma": 0.5
        },
        "abdominal pain, jaundice, weight loss": {
            "Pancreatic cancer": 0.7,
            "Cholangiocarcinoma": 0.6,
            "Chronic pancreatitis": 0.5
        },
        "sudden severe headache, vomiting, neck stiffness": {
            "Meningitis": 0.8,
            "Subarachnoid hemorrhage": 0.7,
            "Migraine": 0.5
        },
        "sudden chest pain, shortness of breath, hemoptysis": {
            "Pulmonary embolism": 0.8,
            "Myocardial infarction": 0.7,
            "Pneumonia": 0.6
        },
    
    // Fever, lower abdominal pain, painful urination
    "fever, lower abdominal pain, painful urination": {
        "Urinary tract infection": 0.8,
        "Pelvic inflammatory disease": 0.7,
        "Schistosomiasis": 0.6
    },
    // Persistent cough, fever, night sweats
    "persistent cough, fever, night sweats": {
        "Tuberculosis": 0.8,
        "HIV/AIDS": 0.7,
        "Pneumonia": 0.6
    },
    // Fever, muscle pain, bleeding gums
    "fever, muscle pain, bleeding gums": {
        "Dengue fever": 0.8,
        "Leptospirosis": 0.7,
        "Ebola virus disease": 0.6
    },
    // Fever, abdominal pain, constipation
    "fever, abdominal pain, constipation": {
        "Typhoid fever": 0.7,
        "Amoebiasis": 0.6,
        "Intestinal obstruction": 0.5
    },
    // Fever, joint pain, muscle pain
    "fever, joint pain, muscle pain": {
        "Dengue fever": 0.8,
        "Chikungunya": 0.7,
        "Rheumatic fever": 0.5
    },
    // Fever, rash, itching
    "fever, rash, itching": {
        "Measles": 0.8,
        "Chickenpox": 0.7,
        "Rubella": 0.6
    },
    // Fever, cough, sore throat
    "fever, cough, sore throat": {
        "Influenza": 0.8,
        "COVID-19": 0.7,
        "Pneumonia": 0.6
    },
    // Fever, headache, confusion
    "fever, headache, confusion": {
        "Cerebral malaria": 0.8,
        "Meningitis": 0.7,
        "Encephalitis": 0.6
    },
    // Abdominal pain, fever, loss of appetite
    "abdominal pain, fever, loss of appetite": {
        "Typhoid fever": 0.8,
        "Appendicitis": 0.7,
        "Hepatitis": 0.6
    },
    // Persistent cough, shortness of breath, chest pain
    "persistent cough, shortness of breath, chest pain": {
        "Tuberculosis": 0.8,
        "Chronic obstructive pulmonary disease (COPD)": 0.7,
        "Asthma": 0.6
    },
    // Fever, muscle pain, fatigue
    "fever, muscle pain, fatigue": {
        "Dengue fever": 0.8,
        "Leptospirosis": 0.7,
        "Malaria": 0.6
    },
    // Fever, sore throat, swollen lymph nodes
    "fever, sore throat, swollen lymph nodes": {
        "Mononucleosis": 0.8,
        "Streptococcal pharyngitis": 0.7,
        "HIV/AIDS": 0.6
    },
    // Fever, diarrhea, dehydration
    "fever, diarrhea, dehydration": {
        "Cholera": 0.8,
        "Gastroenteritis": 0.7,
        "Amoebiasis": 0.6
    },
    // Severe headache, fever, nausea
    "severe headache, fever, nausea": {
        "Meningitis": 0.8,
        "Malaria": 0.7,
        "Migraine": 0.6
    },
    // Fever, joint pain, swelling
    "fever, joint pain, swelling": {
        "Chikungunya": 0.8,
        "Dengue fever": 0.7,
        "Rheumatic fever": 0.6
    },
    // Abdominal pain, fever, vomiting
    "abdominal pain, fever, vomiting": {
        "Gastroenteritis": 0.8,
        "Appendicitis": 0.7,
        "Typhoid fever": 0.6
    },
    // Fever, headache, photophobia
    "fever, headache, photophobia": {
        "Meningitis": 0.8,
        "Cerebral malaria": 0.7,
        "Encephalitis": 0.6
    },
    // Persistent diarrhea, fever, abdominal cramping
    "persistent diarrhea, fever, abdominal cramping": {
        "Amoebiasis": 0.8,
        "Giardiasis": 0.7,
        "Gastroenteritis": 0.6
    },
    // Severe pelvic pain, fever, nausea
    "severe pelvic pain, fever, nausea": {
        "Ovarian torsion": 0.9,
        "Pelvic inflammatory disease": 0.8,
        "Ruptured ovarian cyst": 0.7
    },
    // Heavy menstrual bleeding, clots in menstrual flow, anemia
    "heavy menstrual bleeding, clots in menstrual flow, anemia": {
        "Uterine fibroids": 0.9,
        "Adenomyosis": 0.8,
        "Endometrial hyperplasia": 0.7
    },
    // Vaginal bleeding, lower back pain, uterine tenderness
    "vaginal bleeding, lower back pain, uterine tenderness": {
        "Placental abruption": 0.9,
        "Miscarriage": 0.8,
        "Endometritis": 0.7
    },
    // Pelvic pain, painful periods, dyspareunia
    "pelvic pain, painful periods, dyspareunia": {
        "Endometriosis": 0.9,
        "Chronic pelvic inflammatory disease": 0.8,
        "Uterine fibroids": 0.7
    },
    // Irregular periods, excessive hair growth, acne
    "irregular periods, excessive hair growth, acne": {
        "Polycystic ovary syndrome (PCOS)": 0.9,
        "Hyperprolactinemia": 0.8,
        "Cushing's syndrome": 0.7
    },
    // Vaginal discharge, itching, burning sensation
    "vaginal discharge, itching, burning sensation": {
        "Vaginal candidiasis": 0.9,
        "Bacterial vaginosis": 0.8,
        "Trichomoniasis": 0.7
    },
    // Vaginal bleeding, abdominal pain, fainting
    "vaginal bleeding, abdominal pain, fainting": {
        "Ectopic pregnancy": 0.9,
        "Miscarriage": 0.8,
        "Placental abruption": 0.7
    },
    // Heavy menstrual bleeding, pelvic pressure, fatigue
    "heavy menstrual bleeding, pelvic pressure, fatigue": {
        "Uterine fibroids": 0.9,
        "Adenomyosis": 0.8,
        "Endometrial hyperplasia": 0.7
    },
    // Persistent nausea, vomiting, weight loss
    "persistent nausea, vomiting, weight loss": {
        "Hyperemesis gravidarum": 0.9,
        "Gastroenteritis": 0.8,
        "Early pregnancy": 0.7
    },
    // Vaginal bleeding, severe abdominal pain, uterine tenderness
    "vaginal bleeding, severe abdominal pain, uterine tenderness": {
        "Placental abruption": 0.9,
        "Miscarriage": 0.8,
        "Ruptured ectopic pregnancy": 0.7
    },
    // Irregular periods, weight gain, infertility
    "irregular periods, weight gain, infertility": {
        "Polycystic ovary syndrome (PCOS)": 0.9,
        "Hypothyroidism": 0.8,
        "Cushing's syndrome": 0.7
    },
    // Severe pelvic pain, abdominal distension, nausea
    "severe pelvic pain, abdominal distension, nausea": {
        "Ovarian torsion": 0.9,
        "Ovarian cyst rupture": 0.8,
        "Pelvic inflammatory disease": 0.7
    },
    // Lower abdominal pain, vaginal discharge, dyspareunia
    "lower abdominal pain, vaginal discharge, dyspareunia": {
        "Pelvic inflammatory disease": 0.9,
        "Endometriosis": 0.8,
        "Vaginitis": 0.7
    },
    // Vaginal itching, burning sensation, abnormal discharge
    "vaginal itching, burning sensation, abnormal discharge": {
        "Vaginal candidiasis": 0.9,
        "Bacterial vaginosis": 0.8,
        "Trichomoniasis": 0.7
    },
    // Amenorrhea, infertility, hirsutism
    "amenorrhea, infertility, hirsutism": {
        "Polycystic ovary syndrome (PCOS)": 0.9,
        "Hyperprolactinemia": 0.8,
        "Hypothyroidism": 0.7
    },
    // Fever, cough, difficulty breathing
    "fever, cough, difficulty breathing": {
        "Pneumonia": 0.9,
        "Bronchiolitis": 0.8,
        "Asthma": 0.7
    },
    // Persistent diarrhea, vomiting, dehydration
    "persistent diarrhea, vomiting, dehydration": {
        "Acute gastroenteritis": 0.9,
        "Rotavirus infection": 0.8,
        "Giardiasis": 0.7
    },
    // High fever, rash, runny nose
    "high fever, rash, runny nose": {
        "Measles": 0.9,
        "Rubella": 0.8,
        "Roseola": 0.7
    },
    // Fever, headache, stiff neck
    "fever, headache, stiff neck": {
        "Meningitis": 0.9,
        "Cerebral malaria": 0.8,
        "Encephalitis": 0.7
    },
    // Fever, generalized swelling, decreased urine output
    "fever, generalized swelling, decreased urine output": {
        "Nephrotic syndrome": 0.9,
        "Glomerulonephritis": 0.8,
        "Acute kidney injury": 0.7
    },
    // Chronic cough, weight loss, night sweats
    "chronic cough, weight loss, night sweats": {
        "Tuberculosis": 0.9,
        "HIV": 0.8,
        "Chronic bronchitis": 0.7
    },
    // Recurrent ear infections, hearing loss, ear pain
    "recurrent ear infections, hearing loss, ear pain": {
        "Otitis media": 0.9,
        "Chronic suppurative otitis media": 0.8,
        "Mastoiditis": 0.7
    },
    // Fever, abdominal pain, diarrhea with blood
    "fever, abdominal pain, diarrhea with blood": {
        "Typhoid fever": 0.9,
        "Shigellosis": 0.8,
        "Amoebiasis": 0.7
    },
    // Fever, severe joint pain, rash
    "fever, severe joint pain, rash": {
        "Dengue fever": 0.9,
        "Chikungunya": 0.8,
        "Rheumatic fever": 0.7
    },
    // Persistent diarrhea, failure to thrive, bloated abdomen
    "persistent diarrhea, failure to thrive, bloated abdomen": {
        "Malnutrition": 0.9,
        "Giardiasis": 0.8,
        "Celiac disease": 0.7
    },
    // Fever, sore throat, swollen lymph nodes
    "fever, sore throat, swollen lymph nodes": {
        "Tonsillitis": 0.9,
        "Infectious mononucleosis": 0.8,
        "Diphtheria": 0.7
    },
    // Severe headache, vomiting, photophobia
    "severe headache, vomiting, photophobia": {
        "Meningitis": 0.9,
        "Migraine": 0.8,
        "Cerebral malaria": 0.7
    },
    // Wheezing, cough, difficulty breathing
    "wheezing, cough, difficulty breathing": {
        "Asthma": 0.9,
        "Bronchiolitis": 0.8,
        "Allergic rhinitis": 0.7
    },
    // Fever, severe abdominal pain, vomiting
    "fever, severe abdominal pain, vomiting": {
        "Appendicitis": 0.9,
        "Intussusception": 0.8,
        "Gastroenteritis": 0.7
    },
    // Pale skin, fatigue, shortness of breath
    "pale skin, fatigue, shortness of breath": {
        "Anemia": 0.9,
        "Sickle cell disease": 0.8,
        "Iron deficiency anemia": 0.7
    },
    // Severe abdominal pain, fever, vomiting
    "severe abdominal pain, fever, vomiting": {
        "Appendicitis": 0.9,
        "Cholecystitis": 0.8,
        "Pancreatitis": 0.7
    },
    // Persistent cough, chest pain, difficulty breathing
    "persistent cough, chest pain, difficulty breathing": {
        "Pneumonia": 0.9,
        "Pulmonary embolism": 0.8,
        "Lung cancer": 0.7
    }, 

    // Severe pelvic pain, fever, nausea
    "severe pelvic pain, fever, nausea": {
        "Ovarian torsion": 0.9,
        "Pelvic inflammatory disease": 0.8,
        "Ruptured ovarian cyst": 0.7
    },
    // Heavy menstrual bleeding, clots in menstrual flow, anemia
    "heavy menstrual bleeding, clots in menstrual flow, anemia": {
        "Uterine fibroids": 0.9,
        "Adenomyosis": 0.8,
        "Endometrial hyperplasia": 0.7
    },
    // Vaginal bleeding, lower back pain, uterine tenderness
    "vaginal bleeding, lower back pain, uterine tenderness": {
        "Placental abruption": 0.9,
        "Miscarriage": 0.8,
        "Endometritis": 0.7
    },
    // Pelvic pain, painful periods, dyspareunia
    "pelvic pain, painful periods, dyspareunia": {
        "Endometriosis": 0.9,
        "Chronic pelvic inflammatory disease": 0.8,
        "Uterine fibroids": 0.7
    },
    // Irregular periods, excessive hair growth, acne
    "irregular periods, excessive hair growth, acne": {
        "Polycystic ovary syndrome (PCOS)": 0.9,
        "Hyperprolactinemia": 0.8,
        "Cushing's syndrome": 0.7
    },
    // Vaginal discharge, itching, burning sensation
    "vaginal discharge, itching, burning sensation": {
        "Vaginal candidiasis": 0.9,
        "Bacterial vaginosis": 0.8,
        "Trichomoniasis": 0.7
    },
    // Vaginal bleeding, abdominal pain, fainting
    "vaginal bleeding, abdominal pain, fainting": {
        "Ectopic pregnancy": 0.9,
        "Miscarriage": 0.8,
        "Placental abruption": 0.7
    },
    // Heavy menstrual bleeding, pelvic pressure, fatigue
    "heavy menstrual bleeding, pelvic pressure, fatigue": {
        "Uterine fibroids": 0.9,
        "Adenomyosis": 0.8,
        "Endometrial hyperplasia": 0.7
    },
    // Persistent nausea, vomiting, weight loss
    "persistent nausea, vomiting, weight loss": {
        "Hyperemesis gravidarum": 0.9,
        "Gastroenteritis": 0.8,
        "Early pregnancy": 0.7
    },
    // Vaginal bleeding, severe abdominal pain, uterine tenderness
    "vaginal bleeding, severe abdominal pain, uterine tenderness": {
        "Placental abruption": 0.9,
        "Miscarriage": 0.8,
        "Ruptured ectopic pregnancy": 0.7
    },
    // Irregular periods, weight gain, infertility
    "irregular periods, weight gain, infertility": {
        "Polycystic ovary syndrome (PCOS)": 0.9,
        "Hypothyroidism": 0.8,
        "Cushing's syndrome": 0.7
    },
    // Severe pelvic pain, abdominal distension, nausea
    "severe pelvic pain, abdominal distension, nausea": {
        "Ovarian torsion": 0.9,
        "Ovarian cyst rupture": 0.8,
        "Pelvic inflammatory disease": 0.7
    },
    // Lower abdominal pain, vaginal discharge, dyspareunia
    "lower abdominal pain, vaginal discharge, dyspareunia": {
        "Pelvic inflammatory disease": 0.9,
        "Endometriosis": 0.8,
        "Vaginitis": 0.7
    },
    // Vaginal itching, burning sensation, abnormal discharge
    "vaginal itching, burning sensation, abnormal discharge": {
        "Vaginal candidiasis": 0.9,
        "Bacterial vaginosis": 0.8,
        "Trichomoniasis": 0.7
    },
    // Amenorrhea, infertility, hirsutism
    "amenorrhea, infertility, hirsutism": {
        "Polycystic ovary syndrome (PCOS)": 0.9,
        "Hyperprolactinemia": 0.8,
        "Hypothyroidism": 0.7
    },
    // Fever, cough, difficulty breathing
    "fever, cough, difficulty breathing": {
        "Pneumonia": 0.9,
        "Bronchiolitis": 0.8,
        "Asthma": 0.7
    },
    // Persistent diarrhea, vomiting, dehydration
    "persistent diarrhea, vomiting, dehydration": {
        "Acute gastroenteritis": 0.9,
        "Rotavirus infection": 0.8,
        "Giardiasis": 0.7
    },
    // High fever, rash, runny nose
    "high fever, rash, runny nose": {
        "Measles": 0.9,
        "Rubella": 0.8,
        "Roseola": 0.7
    },
    // Fever, headache, stiff neck
    "fever, headache, stiff neck": {
        "Meningitis": 0.9,
        "Cerebral malaria": 0.8,
        "Encephalitis": 0.7
    },
    // Fever, generalized swelling, decreased urine output
    "fever, generalized swelling, decreased urine output": {
        "Nephrotic syndrome": 0.9,
        "Glomerulonephritis": 0.8,
        "Acute kidney injury": 0.7
    },
    // Chronic cough, weight loss, night sweats
    "chronic cough, weight loss, night sweats": {
        "Tuberculosis": 0.9,
        "HIV": 0.8,
        "Chronic bronchitis": 0.7
    },
    // Recurrent ear infections, hearing loss, ear pain
    "recurrent ear infections, hearing loss, ear pain": {
        "Otitis media": 0.9,
        "Chronic suppurative otitis media": 0.8,
        "Mastoiditis": 0.7
    },
    // Fever, abdominal pain, diarrhea with blood
    "fever, abdominal pain, diarrhea with blood": {
        "Typhoid fever": 0.9,
        "Shigellosis": 0.8,
        "Amoebiasis": 0.7
    },
    // Fever, severe joint pain, rash
    "fever, severe joint pain, rash": {
        "Dengue fever": 0.9,
        "Chikungunya": 0.8,
        "Rheumatic fever": 0.7
    },
    // Persistent diarrhea, failure to thrive, bloated abdomen
    "persistent diarrhea, failure to thrive, bloated abdomen": {
        "Malnutrition": 0.9,
        "Giardiasis": 0.8,
        "Celiac disease": 0.7
    },
    // Fever, sore throat, swollen lymph nodes
    "fever, sore throat, swollen lymph nodes": {
        "Tonsillitis": 0.9,
        "Infectious mononucleosis": 0.8,
        "Diphtheria": 0.7
    },
    // Severe headache, vomiting, photophobia
    "severe headache, vomiting, photophobia": {
        "Meningitis": 0.9,
        "Migraine": 0.8,
        "Cerebral malaria": 0.7
    },
    // Wheezing, cough, difficulty breathing
    "wheezing, cough, difficulty breathing": {
        "Asthma": 0.9,
        "Bronchiolitis": 0.8,
        "Allergic rhinitis": 0.7
    },
    // Fever, severe abdominal pain, vomiting
    "fever, severe abdominal pain, vomiting": {
        "Appendicitis": 0.9,
        "Intussusception": 0.8,
        "Gastroenteritis": 0.7
    },
    // Pale skin, fatigue, shortness of breath
    "pale skin, fatigue, shortness of breath": {
        "Anemia": 0.9,
        "Sickle cell disease": 0.8,
        "Iron deficiency anemia": 0.7
    },
    // Severe abdominal pain, fever, vomiting
    "severe abdominal pain, fever, vomiting": {
        "Appendicitis": 0.9,
        "Cholecystitis": 0.8,
        "Pancreatitis": 0.7
    },
    // Persistent cough, chest pain, difficulty breathing
    "persistent cough, chest pain, difficulty breathing": {
        "Pneumonia": 0.9,
        "Pulmonary embolism": 0.8,
        "Lung cancer": 0.7
    },

    // High fever, severe headache, stiff neck
    "high fever, severe headache, stiff neck": {
        "Meningitis": 0.9,
        "Cerebral malaria": 0.8,
        "Encephalitis": 0.7
    },
    // Severe headache, visual disturbances, nausea
    "severe headache, visual disturbances, nausea": {
        "Migraine": 0.9,
        "Hypertension": 0.8,
        "Cerebral malaria": 0.7
    },
    // Fever, joint pain, rash
    "fever, joint pain, rash": {
        "Dengue fever": 0.9,
        "Chikungunya": 0.8,
        "Typhoid fever": 0.7
    },
    // Persistent cough, fever, night sweats
    "persistent cough, fever, night sweats": {
        "Tuberculosis": 0.9,
        "Chronic bronchitis": 0.8,
        "Pneumonia": 0.7
    },
    // Abdominal pain, diarrhea, fever
    "abdominal pain, diarrhea, fever": {
        "Typhoid fever": 0.9,
        "Dysentery": 0.8,
        "Gastroenteritis": 0.7
    },
    // Fever, headache, vomiting
    "fever, headache, vomiting": {
        "Malaria": 0.9,
        "Typhoid fever": 0.8,
        "Meningitis": 0.7
    },
    // Severe abdominal pain, diarrhea, vomiting
    "severe abdominal pain, diarrhea, vomiting": {
        "Dysentery": 0.9,
        "Gastroenteritis": 0.8,
        "Typhoid fever": 0.7
    },
    // Jaundice, abdominal pain, fever
    "jaundice, abdominal pain, fever": {
        "Hepatitis B": 0.9,
        "Hepatitis C": 0.8,
        "Liver disease": 0.7
    },
    // Swollen joints, fever, rash
    "swollen joints, fever, rash": {
        "Rheumatic fever": 0.9,
        "Arthritis": 0.8,
        "Chikungunya": 0.7
    },
    // Persistent diarrhea, dehydration, abdominal cramps
    "persistent diarrhea, dehydration, abdominal cramps": {
        "Cholera": 0.9,
        "Dysentery": 0.8,
        "Giardiasis": 0.7
    },
    // Fever, weakness, swollen lymph nodes
    "fever, weakness, swollen lymph nodes": {
        "Lymphatic filariasis": 0.9,
        "HIV/AIDS": 0.8,
        "Tuberculosis": 0.7
    },
    // Fever, nausea, rash
    "fever, nausea, rash": {
        "Measles": 0.9,
        "Chickenpox": 0.8,
        "Rubella": 0.7
    },
    // Severe abdominal pain, fever, jaundice
    "severe abdominal pain, fever, jaundice": {
        "Hepatitis": 0.9,
        "Cholecystitis": 0.8,
        "Pancreatitis": 0.7
    },
    // Weight loss, cough, night sweats
    "weight loss, cough, night sweats": {
        "Tuberculosis": 0.9,
        "HIV/AIDS": 0.8,
        "Lung cancer": 0.7
    },
    // Itchy skin, rash, fever
    "itchy skin, rash, fever": {
        "Chickenpox": 0.9,
        "Measles": 0.8,
        "Scabies": 0.7
    },
    // Severe headache, vision changes, nausea
    "severe headache, vision changes, nausea": {
        "Migraine": 0.9,
        "Hypertension": 0.8,
        "Cerebral malaria": 0.7
    },
    // High fever, sore throat, swollen glands
    "high fever, sore throat, swollen glands": {
        "Tonsillitis": 0.9,
        "Infectious mononucleosis": 0.8,
        "Streptococcal pharyngitis": 0.7
    },
    // Swollen abdomen, fatigue, weight loss
    "swollen abdomen, fatigue, weight loss": {
        "Ascites": 0.9,
        "Liver cirrhosis": 0.8,
        "Ovarian cancer": 0.7
    },
    // High fever, severe abdominal pain, diarrhea
    "high fever, severe abdominal pain, diarrhea": {
        "Typhoid fever": 0.9,
        "Dysentery": 0.8,
        "Gastroenteritis": 0.7
    },
    // Fever, sore throat, difficulty swallowing
    "fever, sore throat, difficulty swallowing": {
        "Pharyngitis": 0.9,
        "Tonsillitis": 0.8,
        "Laryngitis": 0.7
    },
    // Jaundice, abdominal pain, dark urine
    "jaundice, abdominal pain, dark urine": {
        "Hepatitis B": 0.9,
        "Hepatitis C": 0.8,
        "Liver disease": 0.7
    },
    // Severe headache, confusion, fever
    "severe headache, confusion, fever": {
        "Meningitis": 0.9,
        "Encephalitis": 0.8,
        "Cerebral malaria": 0.7
    },
};