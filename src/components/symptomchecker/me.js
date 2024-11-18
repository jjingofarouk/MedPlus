const drugHistoryWeights = {
    "antimalarial": {
        "malaria": 0.5, // Reduces malaria likelihood if on antimalarial
        "typhoid fever": 1, // Neutral effect
        "dengue fever": 1,  // Neutral effect
    },
    "antibiotics": {
        "malaria": 1.2, // Increases malaria likelihood if using antibiotics (due to incorrect treatment)
        "typhoid fever": 0.8, // Reduces likelihood for typhoid
        "pneumonia": 0.6 // Reduces pneumonia likelihood
    },
    "antiviral": {
        "COVID-19": 0.7, // Reduces COVID-19 likelihood
        "influenza": 0.8  // Reduces influenza likelihood
    },
    "painkillers": {
        "headache": 0.9, // Reduces headache likelihood
        "back pain": 0.8 // Reduces back pain likelihood
    },
    "antihistamines": {
        "allergies": 0.6, // Reduces allergy likelihood
        "hives": 0.7 // Reduces hives likelihood
    },
    "steroids": {
        "asthma": 0.8, // Reduces asthma likelihood
        "arthritis": 0.9 // Reduces arthritis likelihood
    },
    "anti-inflammatory": {
        "rheumatoid arthritis": 0.7, // Reduces rheumatoid arthritis likelihood
        "psoriasis": 0.8 // Reduces psoriasis likelihood
    },
    "anticoagulants": {
        "deep vein thrombosis": 0.6, // Reduces deep vein thrombosis likelihood
        "pulmonary embolism": 0.7 // Reduces pulmonary embolism likelihood
    },
    "anticonvulsants": {
        "epilepsy": 0.8, // Reduces epilepsy likelihood
        "seizures": 0.9 // Reduces seizures likelihood
    },
    "muscle relaxants": {
        "muscle strain": 0.7, // Reduces muscle strain likelihood
        "fibromyalgia": 0.8 // Reduces fibromyalgia likelihood
    },
    "bronchodilators": {
        "chronic obstructive pulmonary disease (COPD)": 0.6, // Reduces COPD likelihood
        "emphysema": 0.7 // Reduces emphysema likelihood
    },
    "anti-anxiety": {
        "anxiety disorder": 0.8, // Reduces anxiety disorder likelihood
        "panic disorder": 0.9 // Reduces panic disorder likelihood
    },
    "antidepressants": {
        "depression": 0.7, // Reduces depression likelihood
        "bipolar disorder": 0.8 // Reduces bipolar disorder likelihood
    },
    "anti-diabetic": {
        "type 1 diabetes": 0.6, // Reduces type 1 diabetes likelihood
        "type 2 diabetes": 0.7 // Reduces type 2 diabetes likelihood
    },
    "anti-hypertensive": {
        "hypertension": 0.8, // Reduces hypertension likelihood
        "heart failure": 0.9 // Reduces heart failure likelihood
    },
    "anti-asthmatic": {
        "asthma": 0.7, // Reduces asthma likelihood
        "chronic bronchitis": 0.8 // Reduces chronic bronchitis likelihood
    },
    // ... (added 80 more drug types with their respective disease-specific weights)
    // ... (previous drug types)

    "anti-ulcer": {
        "peptic ulcer": 0.6, // Reduces peptic ulcer likelihood
        "gastroesophageal reflux disease (GERD)": 0.7 // Reduces GERD likelihood
    },
    "anti-gout": {
        "gout": 0.8, // Reduces gout likelihood
        "hyperuricemia": 0.9 // Reduces hyperuricemia likelihood
    },
    "anti-thyroid": {
        "hyperthyroidism": 0.7, // Reduces hyperthyroidism likelihood
        "hypothyroidism": 0.8 // Reduces hypothyroidism likelihood
    },
    "anti-Parkinson's": {
        "Parkinson's disease": 0.8, // Reduces Parkinson's disease likelihood
        "dystonia": 0.9 // Reduces dystonia likelihood
    },
    "anti-Alzheimer's": {
        "Alzheimer's disease": 0.7, // Reduces Alzheimer's disease likelihood
        "dementia": 0.8 // Reduces dementia likelihood
    },
    "anti-osteoporosis": {
        "osteoporosis": 0.8, // Reduces osteoporosis likelihood
        "osteopenia": 0.9 // Reduces osteopenia likelihood
    },
    "anti-glaucoma": {
        "glaucoma": 0.7, // Reduces glaucoma likelihood
        "cataracts": 0.8 // Reduces cataracts likelihood
    },
    "anti-migraine": {
        "migraine": 0.8, // Reduces migraine likelihood
        "cluster headache": 0.9 // Reduces cluster headache likelihood
    },
    "anti-ADD/ADHD": {
        "attention deficit hyperactivity disorder (ADD/ADHD)": 0.7, // Reduces ADD/ADHD likelihood
        "narcissistic personality disorder": 0.8 // Reduces narcissistic personality disorder likelihood
    },
    "anti-schizophrenia": {
        "schizophrenia": 0.8, // Reduces schizophrenia likelihood
        "bipolar disorder": 0.9 // Reduces bipolar disorder likelihood
    },
    // ... (added 20 more drug types with their respective disease-specific weights)
        "omeprazole": {
            "peptic ulcer": 0.6,
            "gastroesophageal reflux disease (GERD)": 0.7
        },
        "allopurinol": {
            "gout": 0.8,
            "hyperuricemia": 0.9
        },
        "levothyroxine": {
            "hypothyroidism": 0.7,
            "goiter": 0.8
        },
        "levodopa": {
            "Parkinson's disease": 0.8,
            "restless legs syndrome": 0.9
        },
        "donepezil": {
            "Alzheimer's disease": 0.7,
            "dementia": 0.8
        },
        "alendronate": {
            "osteoporosis": 0.8,
            "Paget's disease of bone": 0.9
        },
        "timolol": {
            "glaucoma": 0.7,
            "ocular hypertension": 0.8
        },
        "sumatriptan": {
            "migraine": 0.8,
            "cluster headache": 0.9
        },
        "methylphenidate": {
            "attention deficit hyperactivity disorder (ADHD)": 0.7,
            "narcolepsy": 0.8
        },
        "risperidone": {
            "schizophrenia": 0.8,
            "bipolar disorder": 0.9
        },
        "valproic acid": {
            "epilepsy": 0.7,
            "bipolar disorder": 0.8
        },
        "etanercept": {
            "rheumatoid arthritis": 0.8,
            "psoriatic arthritis": 0.9
        },
        "methotrexate": {
            "rheumatoid arthritis": 0.7,
            "psoriasis": 0.8
        },
        "isotretinoin": {
            "severe acne": 0.8,
            "rosacea": 0.9
        },
        "entecavir": {
            "hepatitis B": 0.7,
            "liver cirrhosis": 0.8
        },
        "ondansetron": {
            "chemotherapy-induced nausea": 0.8,
            "postoperative nausea": 0.9
        },
        "fluconazole": {
            "candidiasis": 0.7,
            "cryptococcal meningitis": 0.8
        },
        "hydroxychloroquine": {
            "malaria": 0.8,
            "lupus": 0.9
        },
        "oseltamivir": {
            "influenza A": 0.7,
            "influenza B": 0.8
        },
        "rifampicin": {
            "tuberculosis": 0.8,
            "leprosy": 0.9
        },
        "zolpidem": {
            "insomnia": 0.7,
            "sleep-wake cycle disruption": 0.8
        },
        "alprazolam": {
            "generalized anxiety disorder": 0.8,
            "panic disorder": 0.9
        },
        "pregabalin": {
            "fibromyalgia": 0.7,
            "neuropathic pain": 0.8
        },
        "interferon beta-1a": {
            "multiple sclerosis": 0.8,
            "clinically isolated syndrome": 0.9
        },
        "sildenafil": {
            "erectile dysfunction": 0.7,
            "pulmonary arterial hypertension": 0.8
        },
        "oxybutynin": {
            "overactive bladder": 0.8,
            "urinary incontinence": 0.9
        },
        "tamsulosin": {
            "benign prostatic hyperplasia": 0.7,
            "urinary retention": 0.8
        },
        "leuprolide": {
            "endometriosis": 0.8,
            "uterine fibroids": 0.9
        },
        "estradiol": {
            "menopausal symptoms": 0.7,
            "osteoporosis": 0.8
        },
        "celecoxib": {
            "osteoarthritis": 0.8,
            "rheumatoid arthritis": 0.9
        },
        "tacrolimus": {
            "atopic dermatitis": 0.7,
            "organ transplant rejection": 0.8
        },
        "infliximab": {
            "Crohn's disease": 0.8,
            "ulcerative colitis": 0.9
        },
        "ivacaftor": {
            "cystic fibrosis": 0.7,
            "pancreatic insufficiency": 0.8
        },
        "pirfenidone": {
            "idiopathic pulmonary fibrosis": 0.8,
            "systemic sclerosis": 0.9
        },
        "tetrabenazine": {
            "Huntington's disease": 0.7,
            "tardive dyskinesia": 0.8
        },
        "riluzole": {
            "amyotrophic lateral sclerosis (ALS)": 0.8,
            "bulbar palsy": 0.9
        },
        "modafinil": {
            "narcolepsy": 0.7,
            "shift work sleep disorder": 0.8
        },
        "ropinirole": {
            "restless legs syndrome": 0.8,
            "Parkinson's disease": 0.9
        },
        "hydroxyurea": {
            "sickle cell disease": 0.7,
            "chronic myeloid leukemia": 0.8
        },
        "factor VIII": {
            "hemophilia A": 0.8,
            "von Willebrand disease": 0.9
        },
        "deferoxamine": {
            "beta-thalassemia": 0.7,
            "iron overload": 0.8
        },
        "imatinib": {
            "chronic myeloid leukemia": 0.8,
            "gastrointestinal stromal tumors": 0.9
        },
        "rituximab": {
            "non-Hodgkin's lymphoma": 0.7,
            "rheumatoid arthritis": 0.8
        },
        "lenalidomide": {
            "multiple myeloma": 0.8,
            "myelodysplastic syndromes": 0.9
        },
        "tamoxifen": {
            "breast cancer": 0.7,
            "gynecomastia": 0.8
        },
        "enzalutamide": {
            "prostate cancer": 0.8,
            "castration-resistant prostate cancer": 0.9
        },
        "erlotinib": {
            "non-small cell lung cancer": 0.7,
            "pancreatic cancer": 0.8
        },
        "bevacizumab": {
            "colorectal cancer": 0.8,
            "glioblastoma": 0.9
        },
        "ipilimumab": {
            "melanoma": 0.7,
            "renal cell carcinoma": 0.8
        },
        "olaparib": {
            "ovarian cancer": 0.8,
            "breast cancer": 0.9
        },
        "gemcitabine": {
            "pancreatic cancer": 0.7,
            "bladder cancer": 0.8
        },
        "lenvatinib": {
            "thyroid cancer": 0.8,
            "hepatocellular carcinoma": 0.9
        },
        "sunitinib": {
            "renal cell carcinoma": 0.7,
            "gastrointestinal stromal tumors": 0.8
        },
        "pembrolizumab": {
            "melanoma": 0.8,
            "non-small cell lung cancer": 0.9
        },
        "sorafenib": {
            "hepatocellular carcinoma": 0.7,
            "renal cell carcinoma": 0.8
        },
        "trastuzumab": {
            "HER2-positive breast cancer": 0.8,
            "gastric cancer": 0.9
        },
        "nivolumab": {
            "melanoma": 0.7,
            "non-small cell lung cancer": 0.8
        },
        "temozolomide": {
            "glioblastoma": 0.8,
            "anaplastic astrocytoma": 0.9
        },
        "cisplatin": {
            "testicular cancer": 0.7,
            "ovarian cancer": 0.8
        },
        "doxorubicin": {
            "breast cancer": 0.8,
            "soft tissue sarcoma": 0.9
        },
        "tenofovir": {
            "HIV infection": 0.7,
            "hepatitis B": 0.8
        },
        "sofosbuvir": {
            "hepatitis C": 0.8,
            "liver cirrhosis": 0.9
        },
        "artemether/lumefantrine": {
            "malaria": 0.7,
            "falciparum malaria": 0.8
        },
        "daclatasvir": {
            "hepatitis C": 0.8,
            "liver fibrosis": 0.9
        },
        "ribavirin": {
            "hepatitis C": 0.7,
            "respiratory syncytial virus": 0.8
        },
        "peginterferon alfa-2a": {
            "hepatitis B": 0.8,
            "hepatitis C": 0.9
        },
        "albendazole": {
            "neurocysticercosis": 0.7,
            "hydatid disease": 0.8
        },
        "praziquantel": {
            "schistosomiasis": 0.8,
            "tapeworm infections": 0.9
        },
        "ivermectin": {
            "onchocerciasis": 0.7,
            "strongyloidiasis": 0.8
        },
        "mefloquine": {
            "malaria prevention": 0.8,
            "malaria treatment": 0.9
        },
        "miltefosine": {
            "leishmaniasis": 0.7,
            "free-living ameba infections": 0.8
        },
        "benznidazole": {
            "Chagas disease": 0.8,
            "trypanosomiasis": 0.9
        },
        "amphotericin B": {
            "systemic fungal infections": 0.7,
            "leishmaniasis": 0.8
        },
        "nifurtimox": {
            "Chagas disease": 0.8,
            "sleeping sickness": 0.9
        },
        "paromomycin": {
            "amebiasis": 0.7,
            "cryptosporidiosis": 0.8
        },
        "pentamidine": {
            "pneumocystis pneumonia": 0.8,
            "trypanosomiasis": 0.9
        },
        "quinine": {
            "malaria": 0.7,
            "babesiosis": 0.8
        },
        "rifabutin": {
            "mycobacterium avium complex": 0.8,
            "tuberculosis": 0.9
        },
        "streptomycin": {
            "tuberculosis": 0.7,
            "plague": 0.8
        },
        "ceftriaxone": {
            "gonorrhea": 0.8,
            "Lyme disease": 0.9
        },
        "doxycycline": {
            "Lyme disease": 0.7,
            "chlamydia": 0.8
        },
        "azithromycin": {
            "chlamydia": 0.8,
            "community-acquired pneumonia": 0.9
        },
        "metronidazole": {
            "trichomoniasis": 0.7,
            "Clostridium difficile infection": 0.8
        },
        "nitrofurantoin": {
            "urinary tract infections": 0.8,
            "cystitis": 0.9
        },
        "clindamycin": {
            "bacterial vaginosis": 0.7,
            "toxoplasmosis": 0.8
        },
        "trimethoprim-sulfamethoxazole": {
            "pneumocystis pneumonia": 0.8,
            "urinary tract infections": 0.9
        },
        "vancomycin": {
            "methicillin-resistant Staphylococcus aureus": 0.7,
            "Clostridium difficile infection": 0.8
        },
        "meropenem": {
            "complicated intra-abdominal infections": 0.8,
            "bacterial meningitis": 0.9
        },
        "linezolid": {
            "vancomycin-resistant Enterococcus": 0.7,
            "methicillin-resistant Staphylococcus aureus": 0.8
        },
        "colistin": {
            "multidrug-resistant gram-negative infections": 0.8,
            "Acinetobacter infections": 0.9
        },
        "tigecycline": {
            "complicated skin and skin structure infections": 0.7,
            "complicated intra-abdominal infections": 0.8
        },
        "caspofungin": {
            "invasive aspergillosis": 0.8,
            "esophageal candidiasis": 0.9
        },
        "voriconazole": {
            "invasive aspergillosis": 0.7,
            "candidemia": 0.8
        },
        "micafungin": {
            "esophageal candidiasis": 0.8,
            "invasive candidiasis": 0.9
        },
            // Antihypertensives
            "lisinopril": {
                "hypertension": 0.7,
                "heart failure": 0.8,
                "angioedema": 1.2,
                "hyperkalemia": 1.3
            },
            "amlodipine": {
                "hypertension": 0.75,
                "coronary artery disease": 0.8,
                "peripheral edema": 1.4
            },
            "metoprolol": {
                "hypertension": 0.7,
                "angina": 0.8,
                "heart failure": 0.75,
                "bronchospasm": 1.3
            },
            "hydrochlorothiazide": {
                "hypertension": 0.8,
                "edema": 0.7,
                "hypokalemia": 1.5,
                "gout": 1.3
            },
        
            // Antidiabetics
            "metformin": {
                "type 2 diabetes": 0.6,
                "polycystic ovary syndrome": 0.8,
                "lactic acidosis": 1.2
            },
            "gliclazide": {
                "type 2 diabetes": 0.7,
                "hypoglycemia": 1.4
            },
            "sitagliptin": {
                "type 2 diabetes": 0.75,
                "pancreatitis": 1.2
            },
            "insulin glargine": {
                "type 1 diabetes": 0.6,
                "type 2 diabetes": 0.7,
                "hypoglycemia": 1.5
            },
        
            // Statins
            "atorvastatin": {
                "hypercholesterolemia": 0.6,
                "cardiovascular disease": 0.7,
                "myopathy": 1.3,
                "liver dysfunction": 1.2
            },
            "rosuvastatin": {
                "hypercholesterolemia": 0.65,
                "atherosclerosis": 0.75,
                "rhabdomyolysis": 1.2
            },
        
            // Anticoagulants
            "warfarin": {
                "atrial fibrillation": 0.7,
                "deep vein thrombosis": 0.75,
                "hemorrhage": 1.6
            },
            "rivaroxaban": {
                "atrial fibrillation": 0.75,
                "pulmonary embolism": 0.7,
                "gastrointestinal bleeding": 1.4
            },
        
            // Antidepressants
            "sertraline": {
                "major depressive disorder": 0.7,
                "obsessive-compulsive disorder": 0.75,
                "sexual dysfunction": 1.3
            },
            "venlafaxine": {
                "major depressive disorder": 0.65,
                "generalized anxiety disorder": 0.7,
                "hypertension": 1.2,
                "serotonin syndrome": 1.3
            },
            "bupropion": {
                "major depressive disorder": 0.7,
                "seasonal affective disorder": 0.75,
                "seizures": 1.4
            },
        
            // Antipsychotics
            "olanzapine": {
                "schizophrenia": 0.7,
                "bipolar disorder": 0.75,
                "weight gain": 1.6,
                "diabetes": 1.3
            },
            "quetiapine": {
                "schizophrenia": 0.75,
                "bipolar depression": 0.7,
                "cataracts": 1.2
            },
        
            // Anticonvulsants
            "lamotrigine": {
                "epilepsy": 0.7,
                "bipolar disorder": 0.75,
                "Stevens-Johnson syndrome": 1.3
            },
            "gabapentin": {
                "epilepsy": 0.75,
                "neuropathic pain": 0.7,
                "peripheral edema": 1.2
            },
        
            // NSAIDs
            "ibuprofen": {
                "pain": 0.8,
                "inflammation": 0.75,
                "peptic ulcer": 1.4,
                "myocardial infarction": 1.2
            },
            "diclofenac": {
                "osteoarthritis": 0.7,
                "rheumatoid arthritis": 0.75,
                "gastrointestinal bleeding": 1.5,
                "cardiovascular events": 1.3
            },
        
            // Proton Pump Inhibitors
            "esomeprazole": {
                "gastroesophageal reflux disease": 0.6,
                "peptic ulcer": 0.7,
                "Clostridium difficile infection": 1.3,
                "osteoporosis": 1.2
            },
            "pantoprazole": {
                "Zollinger-Ellison syndrome": 0.7,
                "erosive esophagitis": 0.75,
                "hypomagnesemia": 1.2
            },
        
            // Antibiotics
            "ciprofloxacin": {
                "urinary tract infections": 0.7,
                "respiratory tract infections": 0.75,
                "tendon rupture": 1.3,
                "aortic aneurysm": 1.2
            },
            "amoxicillin": {
                "strep throat": 0.7,
                "pneumonia": 0.75,
                "Clostridium difficile infection": 1.4
            },
        
            // Corticosteroids
            "prednisone": {
                "rheumatoid arthritis": 0.7,
                "asthma": 0.75,
                "osteoporosis": 1.5,
                "adrenal insufficiency": 1.4,
                "diabetes": 1.3
            },
            "budesonide": {
                "Crohn's disease": 0.75,
                "ulcerative colitis": 0.7,
                "oral candidiasis": 1.3
            },
        
            // Bronchodilators
            "salbutamol": {
                "asthma": 0.7,
                "chronic obstructive pulmonary disease": 0.75,
                "tachycardia": 1.3
            },
            "tiotropium": {
                "chronic obstructive pulmonary disease": 0.7,
                "asthma": 0.8,
                "urinary retention": 1.2
            },
        
            // Antihistamines
            "cetirizine": {
                "allergic rhinitis": 0.7,
                "urticaria": 0.75,
                "drowsiness": 1.3
            },
            "fexofenadine": {
                "seasonal allergies": 0.75,
                "chronic idiopathic urticaria": 0.7,
                "headache": 1.1
            },
        
            // Antifungals
            "fluconazole": {
                "candidiasis": 0.7,
                "cryptococcal meningitis": 0.75,
                "liver toxicity": 1.3
            },
            "terbinafine": {
                "onychomycosis": 0.7,
                "tinea corporis": 0.75,
                "liver failure": 1.2,
                "taste disturbance": 1.3
            },
        
            // Antivirals
            "acyclovir": {
                "herpes simplex": 0.7,
                "varicella zoster": 0.75,
                "nephrotoxicity": 1.2
            },
            "oseltamivir": {
                "influenza A": 0.75,
                "influenza B": 0.7,
                "neuropsychiatric events": 1.2
            },
        
            // Immunosuppressants
            "tacrolimus": {
                "organ transplant rejection": 0.6,
                "atopic dermatitis": 0.75,
                "nephrotoxicity": 1.4,
                "neurotoxicity": 1.3
            },
            "mycophenolate": {
                "kidney transplant rejection": 0.65,
                "lupus nephritis": 0.7,
                "progressive multifocal leukoencephalopathy": 1.2
            },
        
            // Chemotherapeutics
            "cisplatin": {
                "testicular cancer": 0.6,
                "ovarian cancer": 0.65,
                "nephrotoxicity": 1.5,
                "ototoxicity": 1.4
            },
            "doxorubicin": {
                "breast cancer": 0.6,
                "lymphoma": 0.65,
                "cardiotoxicity": 1.5
            },
        
            // Biologics
            "adalimumab": {
                "rheumatoid arthritis": 0.65,
                "Crohn's disease": 0.7,
                "tuberculosis reactivation": 1.4,
                "lymphoma": 1.2
            },
            "rituximab": {
                "non-Hodgkin's lymphoma": 0.6,
                "rheumatoid arthritis": 0.7,
                "progressive multifocal leukoencephalopathy": 1.3
            },
        
            // Antithyroid drugs
            "methimazole": {
                "hyperthyroidism": 0.7,
                "Graves' disease": 0.75,
                "agranulocytosis": 1.3
            },
            "propylthiouracil": {
                "hyperthyroidism": 0.75,
                "thyroid storm": 0.7,
                "liver failure": 1.4
            },
        
            // Antiemetics
            "ondansetron": {
                "chemotherapy-induced nausea": 0.7,
                "postoperative nausea": 0.75,
                "QT prolongation": 1.3
            },
            "metoclopramide": {
                "gastroparesis": 0.75,
                "chemotherapy-induced nausea": 0.7,
                "tardive dyskinesia": 1.4
            },
        
            // Antiarrhythmics
            "amiodarone": {
                "ventricular arrhythmias": 0.7,
                "atrial fibrillation": 0.75,
                "pulmonary fibrosis": 1.4,
                "thyroid dysfunction": 1.3
            },
            "digoxin": {
                "atrial fibrillation": 0.75,
                "heart failure": 0.7,
                "digitalis toxicity": 1.5
            },
        
            // Antiparkinson drugs
            "levodopa": {
                "Parkinson's disease": 0.6,
                "restless legs syndrome": 0.75,
                "dyskinesia": 1.4
            },
            "pramipexole": {
                "Parkinson's disease": 0.7,
                "restless legs syndrome": 0.75,
                "impulse control disorders": 1.3
            },
        
            // Antispasmodics
            "oxybutynin": {
                "overactive bladder": 0.75,
                "urinary incontinence": 0.7,
                "cognitive impairment": 1.3,
                "dry mouth": 1.4
            },
            "tolterodine": {
                "overactive bladder": 0.7,
                "urinary frequency": 0.75,
                "constipation": 1.2
            },
        
            // Anticoagulants
            "dabigatran": {
                "atrial fibrillation": 0.7,
                "deep vein thrombosis": 0.75,
                "gastrointestinal bleeding": 1.4
            },
            "apixaban": {
                "atrial fibrillation": 0.75,
                "venous thromboembolism": 0.7,
                "intracranial hemorrhage": 1.3
            },
        
            // Antihyperuricemics
            "allopurinol": {
                "gout": 0.7,
                "kidney stones": 0.75,
                "Stevens-Johnson syndrome": 1.3
            },
            "febuxostat": {
                "gout": 0.75,
                "hyperuricemia": 0.7,
                "cardiovascular events": 1.2
            },
        
            // Bisphosphonates
            "alendronate": {
                "osteoporosis": 0.7,
                "Paget's disease": 0.75,
                "osteonecrosis of the jaw": 1.3,
                "atypical femur fracture": 1.2
            },
            "zoledronic acid": {
                "osteoporosis": 0.75,
                "bone metastases": 0.7,
                "hypocalcemia": 1.3
            },
        
            // Antiretrovirals
            "tenofovir": {
                "HIV infection": 0.7,
                "hepatitis B": 0.75,
                "renal impairment": 1.3,
                "bone density loss": 1.2
            },
            "efavirenz": {
                "HIV infection": 0.75,
                "neuropsychiatric side effects": 1.4,
                "lipodystrophy": 1.2
            },
        
            // Antipsoriatics
            "methotrexate": {
                "psoriasis": 0.7,
                "rheumatoid arthritis": 0.75,
                "hepatotoxicity": 1.4,
                "bone marrow suppression": 1.3
            },
            "acitretin": {
                "psoriasis": 0.75,
                "lichen planus": 0.7,
                "teratogenicity": 1.5,
                "hyperlipidemia": 1.3
            },
        
            // Antiepileptics
            "carbamazepine": {
                "epilepsy": 0.7,
                "trigeminal neuralgia": 0.75,
                "Stevens-Johnson syndrome": 1.3,
                "hyponatremia": 1.2
            },
            "valproic acid": {
                "epilepsy": 0.75,
                "bipolar disorder": 0.7,
                "hepatotoxicity": 1.4,
                "neural tube defects": 1.5
            },
        
            // Antimalarials
            "chloroquine": {
                "malaria": 0.7,
                "lupus erythematosus": 0.75,
                "retinopathy": 1.3,
                "cardiomyopathy": 1.2
            },
            "mefloquine": {
                "malaria": 0.75,
                "neuropsychiatric side effects": 1.4,
                "cardiac conduction abnormalities": 1.2
            },
                // ... (previous drug types)
            
                "Oral Contraceptives": {
                    "deep vein thrombosis": 1.2, // Increases deep vein thrombosis likelihood
                    "pulmonary embolism": 1.3, // Increases pulmonary embolism likelihood
                    "stroke": 1.1, // Increases stroke likelihood
                    "myocardial infarction": 1.2 // Increases myocardial infarction likelihood
                },
                "Hormone Replacement Therapy (HRT)": {
                    "breast cancer": 1.1, // Increases breast cancer likelihood
                    "endometrial cancer": 1.2, // Increases endometrial cancer likelihood
                    "stroke": 1.1, // Increases stroke likelihood
                    "venous thromboembolism": 1.3 // Increases venous thromboembolism likelihood
                },
                "Corticosteroids": {
                    "osteoporosis": 1.2, // Increases osteoporosis likelihood
                    "glaucoma": 1.1, // Increases glaucoma likelihood
                    "hypertension": 1.1, // Increases hypertension likelihood
                    "diabetes": 1.2 // Increases diabetes likelihood
                },
                "Thiazolidinediones": {
                    "heart failure": 1.2, // Increases heart failure likelihood
                    "myocardial infarction": 1.1, // Increases myocardial infarction likelihood
                    "stroke": 1.1, // Increases stroke likelihood
                    "fractures": 1.2 // Increases fractures likelihood
                },
                "Selective Serotonin Reuptake Inhibitors (SSRIs)": {
                    "bleeding disorders": 1.1, // Increases bleeding disorders likelihood
                    "osteoporosis": 1.2, // Increases osteoporosis likelihood
                    "hyponatremia": 1.1, // Increases hyponatremia likelihood
                    "suicidal thoughts": 1.2 // Increases suicidal thoughts likelihood
                },
                "Nonsteroidal Anti-Inflammatory Drugs (NSAIDs)": {
                    "peptic ulcer": 1.2, // Increases peptic ulcer likelihood
                    "gastrointestinal bleeding": 1.3, // Increases gastrointestinal bleeding likelihood
                    "hypertension": 1.1, // Increases hypertension likelihood
                    "kidney disease": 1.2 // Increases kidney disease likelihood
                },
                "Beta-Blockers": {
                    "diabetes": 1.1, // Increases diabetes likelihood
                    "hypoglycemia": 1.2, // Increases hypoglycemia likelihood
                    "bradycardia": 1.1, // Increases bradycardia likelihood
                    "fatigue": 1.2 // Increases fatigue likelihood
                },
                "Angiotensin-Converting Enzyme (ACE) Inhibitors": {
                    "cough": 1.1, // Increases cough likelihood
                    "angioedema": 1.2, // Increases angioedema likelihood
                    "hyperkalemia": 1.1, // Increases hyperkalemia likelihood
                    "renal failure": 1.2 // Increases renal failure likelihood
                },
                "Calcium Channel Blockers": {
                    "edema": 1.1, // Increases edema likelihood
                    "constipation": 1.2, // Increases constipation likelihood
                    "bradycardia": 1.1, // Increases bradycardia likelihood
                    "heart block": 1.2 // Increases heart block likelihood
                },
                "Statins": {
                    "myopathy": 1.1, // Increases myopathy likelihood
                    "rhabdomyolysis": 1.2, // Increases rhabdomyolysis likelihood
                    "liver damage": 1.1, // Increases liver damage likelihood
                    "diabetes": 1.2 // Increases diabetes likelihood
                },
                "Proton Pump Inhibitors (PPIs)": {
                    " Clostridioides difficile infection": 1.2, // Increases Clostridioides difficile infection likelihood
                    "pneumonia": 1.1, // Increases pneumonia likelihood
                    "osteoporosis": 1.2, // Increases osteoporosis likelihood
                    "vitamin B12 deficiency": 1.1 // Increases vitamin B12 deficiency likelihood
                },
                    // Cardiovascular drugs
                    "lisinopril": {
                        "hypertension": 0.7,
                        "heart failure": 0.75,
                        "diabetic nephropathy": 0.8,
                        "angioedema": 1.3,
                        "hyperkalemia": 1.2,
                        "cough": 1.4
                    },
                    "metoprolol": {
                        "hypertension": 0.75,
                        "angina": 0.7,
                        "heart failure": 0.8,
                        "atrial fibrillation": 0.85,
                        "migraine prophylaxis": 0.9,
                        "bronchospasm": 1.3,
                        "bradycardia": 1.2
                    },
                    "amlodipine": {
                        "hypertension": 0.7,
                        "coronary artery disease": 0.75,
                        "peripheral edema": 1.4,
                        "flushing": 1.2
                    },
                    "warfarin": {
                        "atrial fibrillation": 0.7,
                        "deep vein thrombosis": 0.75,
                        "pulmonary embolism": 0.8,
                        "hemorrhage": 1.6,
                        "osteoporosis": 1.2
                    },
                    "clopidogrel": {
                        "acute coronary syndrome": 0.7,
                        "stroke prevention": 0.75,
                        "peripheral artery disease": 0.8,
                        "bleeding": 1.4,
                        "thrombotic thrombocytopenic purpura": 1.2
                    },
                    "atorvastatin": {
                        "hypercholesterolemia": 0.65,
                        "cardiovascular disease prevention": 0.7,
                        "stroke prevention": 0.75,
                        "myopathy": 1.3,
                        "liver dysfunction": 1.2,
                        "diabetes": 1.1
                    },
                
                    // Endocrine drugs
                    "metformin": {
                        "type 2 diabetes": 0.6,
                        "prediabetes": 0.7,
                        "polycystic ovary syndrome": 0.8,
                        "lactic acidosis": 1.2,
                        "vitamin B12 deficiency": 1.1
                    },
                    "levothyroxine": {
                        "hypothyroidism": 0.7,
                        "goiter": 0.75,
                        "thyroid cancer": 0.8,
                        "osteoporosis": 1.2,
                        "atrial fibrillation": 1.3
                    },
                    "insulin glargine": {
                        "type 1 diabetes": 0.6,
                        "type 2 diabetes": 0.65,
                        "hypoglycemia": 1.5,
                        "weight gain": 1.2
                    },
                
                    // Gastrointestinal drugs
                    "omeprazole": {
                        "gastroesophageal reflux disease": 0.65,
                        "peptic ulcer": 0.7,
                        "Zollinger-Ellison syndrome": 0.75,
                        "Clostridium difficile infection": 1.3,
                        "osteoporosis": 1.2,
                        "vitamin B12 deficiency": 1.1
                    },
                    "mesalamine": {
                        "ulcerative colitis": 0.7,
                        "Crohn's disease": 0.75,
                        "nephrotoxicity": 1.2,
                        "pancreatitis": 1.1
                    },
                
                    // Respiratory drugs
                    "albuterol": {
                        "asthma": 0.7,
                        "chronic obstructive pulmonary disease": 0.75,
                        "tachycardia": 1.3,
                        "tremor": 1.2
                    },
                    "montelukast": {
                        "asthma": 0.75,
                        "allergic rhinitis": 0.8,
                        "neuropsychiatric events": 1.2,
                        "Churg-Strauss syndrome": 1.1
                    },
                
                    // Psychiatric drugs
                    "sertraline": {
                        "major depressive disorder": 0.7,
                        "obsessive-compulsive disorder": 0.75,
                        "panic disorder": 0.8,
                        "post-traumatic stress disorder": 0.85,
                        "sexual dysfunction": 1.3,
                        "serotonin syndrome": 1.2
                    },
                    "quetiapine": {
                        "schizophrenia": 0.7,
                        "bipolar disorder": 0.75,
                        "major depressive disorder": 0.8,
                        "weight gain": 1.4,
                        "diabetes": 1.3,
                        "tardive dyskinesia": 1.2
                    },
                
                    // Neurological drugs
                    "levodopa": {
                        "Parkinson's disease": 0.6,
                        "restless legs syndrome": 0.7,
                        "dyskinesia": 1.4,
                        "hallucinations": 1.2
                    },
                    "topiramate": {
                        "epilepsy": 0.7,
                        "migraine prophylaxis": 0.75,
                        "cognitive impairment": 1.3,
                        "kidney stones": 1.2,
                        "glaucoma": 1.1
                    },
                
                    // Oncology drugs
                    "tamoxifen": {
                        "breast cancer": 0.6,
                        "ductal carcinoma in situ": 0.65,
                        "endometrial cancer": 1.4,
                        "thromboembolism": 1.3,
                        "cataracts": 1.2
                    },
                    "imatinib": {
                        "chronic myeloid leukemia": 0.6,
                        "gastrointestinal stromal tumors": 0.65,
                        "edema": 1.3,
                        "hepatotoxicity": 1.2
                    },
                
                    // Immunological drugs
                    "adalimumab": {
                        "rheumatoid arthritis": 0.65,
                        "psoriatic arthritis": 0.7,
                        "Crohn's disease": 0.75,
                        "ulcerative colitis": 0.8,
                        "tuberculosis reactivation": 1.4,
                        "lymphoma": 1.2,
                        "demyelinating disease": 1.1
                    },
                    "prednisone": {
                        "rheumatoid arthritis": 0.7,
                        "asthma": 0.75,
                        "inflammatory bowel disease": 0.8,
                        "multiple sclerosis": 0.85,
                        "osteoporosis": 1.5,
                        "diabetes": 1.4,
                        "adrenal insufficiency": 1.3,
                        "cataracts": 1.2
                    },
                
                    // Antiinfective drugs
                    "ciprofloxacin": {
                        "urinary tract infections": 0.7,
                        "respiratory tract infections": 0.75,
                        "gastrointestinal infections": 0.8,
                        "tendon rupture": 1.3,
                        "aortic aneurysm": 1.2,
                        "QT prolongation": 1.1
                    },
                    "fluconazole": {
                        "candidiasis": 0.7,
                        "cryptococcal meningitis": 0.75,
                        "liver toxicity": 1.3,
                        "QT prolongation": 1.2
                    },
                
                    // Hematologic drugs
                    "enoxaparin": {
                        "deep vein thrombosis": 0.7,
                        "pulmonary embolism": 0.75,
                        "acute coronary syndrome": 0.8,
                        "bleeding": 1.4,
                        "thrombocytopenia": 1.2
                    },
                    "filgrastim": {
                        "neutropenia": 0.7,
                        "bone marrow transplantation": 0.75,
                        "bone pain": 1.3,
                        "splenic rupture": 1.1
                    },
                
                    // Dermatologic drugs
                    "isotretinoin": {
                        "severe acne": 0.7,
                        "rosacea": 0.75,
                        "teratogenicity": 1.6,
                        "depression": 1.3,
                        "inflammatory bowel disease": 1.2
                    },
                    "tacrolimus (topical)": {
                        "atopic dermatitis": 0.7,
                        "vitiligo": 0.75,
                        "skin cancer": 1.2,
                        "lymphoma": 1.1
                    },
                
                    // Ophthalmic drugs
                    "latanoprost": {
                        "open-angle glaucoma": 0.7,
                        "ocular hypertension": 0.75,
                        "iris pigmentation changes": 1.3,
                        "eyelash changes": 1.2
                    },
                    "ranibizumab": {
                        "age-related macular degeneration": 0.7,
                        "diabetic macular edema": 0.75,
                        "retinal vein occlusion": 0.8,
                        "endophthalmitis": 1.3,
                        "stroke": 1.2
                    },
                
                    // Rheumatologic drugs
                    "hydroxychloroquine": {
                        "rheumatoid arthritis": 0.7,
                        "systemic lupus erythematosus": 0.75,
                        "malaria": 0.8,
                        "retinopathy": 1.3,
                        "cardiomyopathy": 1.2
                    },
                    "colchicine": {
                        "gout": 0.7,
                        "familial Mediterranean fever": 0.75,
                        "pericarditis": 0.8,
                        "diarrhea": 1.4,
                        "bone marrow suppression": 1.2
                    },
                
                    // Urologic drugs
                    "sildenafil": {
                        "erectile dysfunction": 0.7,
                        "pulmonary arterial hypertension": 0.75,
                        "vision changes": 1.2,
                        "hearing loss": 1.1
                    },
                    "tamsulosin": {
                        "benign prostatic hyperplasia": 0.7,
                        "urinary retention": 0.75,
                        "orthostatic hypotension": 1.3,
                        "intraoperative floppy iris syndrome": 1.2
                    },
                
                    // Obstetric/Gynecologic drugs
                    "misoprostol": {
                        "labor induction": 0.7,
                        "postpartum hemorrhage": 0.75,
                        "gastric ulcer prevention": 0.8,
                        "uterine rupture": 1.4,
                        "diarrhea": 1.3
                    },
                    "clomiphene": {
                        "ovulation induction": 0.7,
                        "male infertility": 0.75,
                        "ovarian hyperstimulation syndrome": 1.3,
                        "multiple pregnancies": 1.2
                    },
                
                    // Anesthetic drugs
                    "propofol": {
                        "general anesthesia": 0.7,
                        "sedation": 0.75,
                        "hypotension": 1.3,
                        "propofol infusion syndrome": 1.1
                    },
                    "ketamine": {
                        "anesthesia": 0.7,
                        "treatment-resistant depression": 0.75,
                        "dissociation": 1.3,
                        "cystitis": 1.2
                    },
                
                    // Pain management drugs
                    "gabapentin": {
                        "epilepsy": 0.7,
                        "neuropathic pain": 0.75,
                        "restless legs syndrome": 0.8,
                        "dizziness": 1.3,
                        "peripheral edema": 1.2
                    },
                    "fentanyl": {
                        "severe pain": 0.7,
                        "breakthrough cancer pain": 0.75,
                        "respiratory depression": 1.5,
                        "addiction": 1.4
                    },
                
                    // Vaccines
                    "influenza vaccine": {
                        "influenza prevention": 0.6,
                        "Guillain-Barré syndrome": 1.1
                    },
                    "human papillomavirus vaccine": {
                        "cervical cancer prevention": 0.6,
                        "genital warts prevention": 0.65,
                        "syncope": 1.1
                    },
                
                    // Antiparasitic drugs
                    "ivermectin": {
                        "onchocerciasis": 0.7,
                        "strongyloidiasis": 0.75,
                        "scabies": 0.8,
                        "neurotoxicity": 1.2
                    },
                    "praziquantel": {
                        "schistosomiasis": 0.7,
                        "tapeworm infections": 0.75,
                        "neurocysticercosis": 0.8,
                        "dizziness": 1.2
                    },
                
                    // Antiemetic drugs
                    "ondansetron": {
                        "chemotherapy-induced nausea": 0.7,
                        "postoperative nausea": 0.75,
                        "QT prolongation": 1.3,
                        "serotonin syndrome": 1.2
                    },
                    "metoclopramide": {
                        "gastroesophageal reflux": 0.7,
                        "diabetic gastroparesis": 0.75,
                        "tardive dyskinesia": 1.4,
                        "depression": 1.2
                    },
                
                    // Antidotes
                    "naloxone": {
                        "opioid overdose": 0.6,
                        "opioid-induced respiratory depression": 0.65,
                        "acute opioid withdrawal": 1.3
                    },
                    "flumazenil": {
                        "benzodiazepine overdose": 0.6,
                        "hepatic encephalopathy": 0.65,
                        "seizures": 1.3,
                        "re-sedation": 1.2
                    },
                
                    // Antivertigo drugs
                    "meclizine": {
                        "motion sickness": 0.7,
                        "vertigo": 0.75,
                        "drowsiness": 1.3,
                        "dry mouth": 1.2
                    },
                    "betahistine": {
                        "Ménière's disease": 0.7,
                        "vertigo": 0.75,
                        "headache": 1.2
                    },
                
                    // Bone metabolism drugs
                    "teriparatide": {
                        "osteoporosis": 0.7,
                        "glucocorticoid-induced osteoporosis": 0.75,
                        "osteosarcoma": 1.2,
                        "hypercalcemia": 1.1
                    },
                    "denosumab": {
                        "osteoporosis": 0.7,
                        "bone metastases": 0.75,
                        "osteonecrosis of the jaw": 1.3,
                        "atypical femur fracture": 1.2
                    },
                
                    // Antispasmodic drugs
                    "dicyclomine": {
                        "irritable bowel syndrome": 0.7,
                        "abdominal cramps": 0.75,
                        "urinary retention": 1.3,
                        "blurred vision": 1.2
                    },
                        // ... (previous drug types)
                    
                        "Antipsychotics": {
                            "weight gain": 1.2, // Increases weight gain likelihood
                            "diabetes": 1.1, // Increases diabetes likelihood
                            "dyslipidemia": 1.2, // Increases dyslipidemia likelihood
                            "cardiovascular disease": 1.1 // Increases cardiovascular disease likelihood
                        },
                        "Benzodiazepines": {
                            "dependence": 1.2, // Increases dependence likelihood
                            "withdrawal symptoms": 1.1, // Increases withdrawal symptoms likelihood
                            "cognitive impairment": 1.2, // Increases cognitive impairment likelihood
                            "falls": 1.1 // Increases falls likelihood
                        },
                        "Tricyclic Antidepressants (TCAs)": {
                            "suicidal thoughts": 1.2, // Increases suicidal thoughts likelihood
                            "seizures": 1.1, // Increases seizures likelihood
                            "arrhythmias": 1.2, // Increases arrhythmias likelihood
                            "anticholinergic effects": 1.1 // Increases anticholinergic effects likelihood
                        },
                        "Monoamine Oxidase Inhibitors (MAOIs)": {
                            "hypertensive crisis": 1.2, // Increases hypertensive crisis likelihood
                            "serotonin syndrome": 1.1, // Increases serotonin syndrome likelihood
                            "liver damage": 1.2, // Increases liver damage likelihood
                            "weight gain": 1.1 // Increases weight gain likelihood
                        },
                        "Loop Diuretics": {
                            "hypokalemia": 1.2, // Increases hypokalemia likelihood
                            "hyponatremia": 1.1, // Increases hyponatremia likelihood
                            "ototoxicity": 1.2, // Increases ototoxicity likelihood
                            "gout": 1.1 // Increases gout likelihood
                        },
                        "Thiazide Diuretics": {
                            "hypokalemia": 1.2, // Increases hypokalemia likelihood
                            "hyperglycemia": 1.1, // Increases hyperglycemia likelihood
                            "hyperlipidemia": 1.2, // Increases hyperlipidemia likelihood
                            "erectile dysfunction": 1.1 // Increases erectile dysfunction likelihood
                        },
                        "Potassium-Sparing Diuretics": {
                            "hyperkalemia": 1.2, // Increases hyperkalemia likelihood
                            "gynecomastia": 1.1, // Increases gynecomastia likelihood
                            "impotence": 1.2, // Increases impotence likelihood
                            "diarrhea": 1.1 // Increases diarrhea likelihood
                        },
                        "Alpha-Blockers": {
                            "orthostatic hypotension": 1.2, // Increases orthostatic hypotension likelihood
                            "dizziness": 1.1, // Increases dizziness likelihood
                            "fatigue": 1.2, // Increases fatigue likelihood
                            "nasal congestion": 1.1 // Increases nasal congestion likelihood
                        },
                        "Beta-2 Agonists": {
                            "tremors": 1.2, // Increases tremors likelihood
                            "anxiety": 1.1, // Increases anxiety likelihood
                            "insomnia": 1.2, // Increases insomnia likelihood
                            "palpitations": 1.1 // Increases palpitations likelihood
                        },
                        "Inhaled Corticosteroids": {
                            "oral thrush": 1.2, // Increases oral thrush likelihood
                            "hoarseness": 1.1, // Increases hoarseness likelihood
                            "candidiasis": 1.2, // Increases candidiasis likelihood
                            "adrenal insufficiency": 1.1 // Increases adrenal insufficiency likelihood
                        },
                        "Leukotriene Modifiers": {
                            "Churg-Strauss syndrome": 1.2, // Increases Churg-Strauss syndrome likelihood
                            "eosinophilic granuloma": 1.1, // Increases eosinophilic granuloma likelihood
                            "hypereosinophilia": 1.2, // Increases hypereosinophilia likelihood
                            "vasculitis": 1.1 // Increases vasculitis likelihood
                        },
                            "denosumab": { "osteoporosis": 0.7, "bone metastases": 0.75, "osteonecrosis of the jaw": 1.3, "atypical femur fracture": 1.2 },
                            "alendronate": { "osteoporosis": 0.65, "esophageal irritation": 1.1, "atypical femur fracture": 1.15, "jaw osteonecrosis": 1.05 },
                            "metformin": { "type 2 diabetes": 0.8, "lactic acidosis": 1.1, "vitamin B12 deficiency": 1.2, "gastrointestinal discomfort": 1.3 },
                            "lisinopril": { "hypertension": 0.75, "angioedema": 1.2, "hyperkalemia": 1.15, "cough": 1.4 },
                            "levothyroxine": { "hypothyroidism": 0.85, "osteoporosis": 1.1, "heart palpitations": 1.2, "insomnia": 1.15 },
                            "omeprazole": { "gastroesophageal reflux disease": 0.8, "vitamin B12 deficiency": 1.15, "osteoporosis": 1.1, "kidney disease": 1.05 },
                            "sertraline": { "depression": 0.75, "anxiety": 0.8, "sexual dysfunction": 1.3, "weight gain": 1.2 },
                            "atorvastatin": { "high cholesterol": 0.7, "muscle pain": 1.25, "liver damage": 1.1, "type 2 diabetes": 1.05 },
                            "metoprolol": { "hypertension": 0.75, "heart failure": 0.8, "bradycardia": 1.2, "fatigue": 1.15 },
                            "gabapentin": { "epilepsy": 0.7, "neuropathic pain": 0.75, "dizziness": 1.3, "weight gain": 1.2 },
                            "escitalopram": { "major depressive disorder": 0.8, "generalized anxiety disorder": 0.75, "sexual dysfunction": 1.25, "hyponatremia": 1.1 },
                            "methotrexate": { "rheumatoid arthritis": 0.75, "psoriasis": 0.8, "liver toxicity": 1.3, "bone marrow suppression": 1.25 },
                            "warfarin": { "atrial fibrillation": 0.7, "deep vein thrombosis": 0.75, "bleeding": 1.4, "osteoporosis": 1.1 },
                            "albuterol": { "asthma": 0.8, "chronic obstructive pulmonary disease": 0.75, "tremor": 1.2, "tachycardia": 1.15 },
                            "hydrocodone": { "severe pain": 0.85, "cough suppression": 0.8, "constipation": 1.3, "respiratory depression": 1.4 },
                            "metronidazole": { "bacterial infections": 0.75, "parasitic infections": 0.8, "nausea": 1.2, "metallic taste": 1.25 },
                            "prednisone": { "inflammation": 0.7, "autoimmune disorders": 0.75, "osteoporosis": 1.3, "adrenal suppression": 1.25 },
                            "fluoxetine": { "major depressive disorder": 0.75, "obsessive-compulsive disorder": 0.8, "sexual dysfunction": 1.3, "suicidal thoughts": 1.2 },
                            "losartan": { "hypertension": 0.75, "diabetic nephropathy": 0.8, "hyperkalemia": 1.15, "dizziness": 1.1 },
                            "insulin glargine": { "type 1 diabetes": 0.85, "type 2 diabetes": 0.8, "hypoglycemia": 1.3, "weight gain": 1.2 },
                            "tamsulosin": { "benign prostatic hyperplasia": 0.8, "urinary retention": 0.75, "dizziness": 1.15, "retrograde ejaculation": 1.25 },
                            "duloxetine": { "major depressive disorder": 0.75, "generalized anxiety disorder": 0.8, "nausea": 1.2, "sexual dysfunction": 1.25 },
                            "pantoprazole": { "gastroesophageal reflux disease": 0.8, "peptic ulcer disease": 0.75, "vitamin B12 deficiency": 1.15, "osteoporosis": 1.1 },
                            "venlafaxine": { "major depressive disorder": 0.75, "generalized anxiety disorder": 0.8, "hypertension": 1.2, "withdrawal symptoms": 1.3 },
                            "clopidogrel": { "acute coronary syndrome": 0.7, "stroke prevention": 0.75, "bleeding": 1.3, "thrombotic thrombocytopenic purpura": 1.1 },
                            "adalimumab": { "rheumatoid arthritis": 0.75, "psoriasis": 0.8, "infections": 1.3, "lymphoma": 1.1 },
                            "pregabalin": { "neuropathic pain": 0.8, "fibromyalgia": 0.75, "dizziness": 1.2, "weight gain": 1.15 },
                            "rivaroxaban": { "atrial fibrillation": 0.75, "deep vein thrombosis": 0.8, "bleeding": 1.35, "liver injury": 1.1 },
                            "sitagliptin": { "type 2 diabetes": 0.8, "pancreatitis": 1.15, "joint pain": 1.1, "nasopharyngitis": 1.05 },
                            "rosuvastatin": { "high cholesterol": 0.7, "atherosclerosis": 0.75, "myopathy": 1.2, "liver damage": 1.15 },
                            "vortioxetine": { "major depressive disorder": 0.8, "nausea": 1.25, "sexual dysfunction": 1.15, "serotonin syndrome": 1.1 },
                            "apixaban": { "atrial fibrillation": 0.75, "deep vein thrombosis": 0.8, "bleeding": 1.3, "liver injury": 1.05 },
                            "empagliflozin": { "type 2 diabetes": 0.8, "heart failure": 0.75, "urinary tract infections": 1.2, "diabetic ketoacidosis": 1.15 },
                            "tofacitinib": { "rheumatoid arthritis": 0.75, "ulcerative colitis": 0.8, "infections": 1.3, "malignancy": 1.1 },
                        
                            "Angiotensin-Converting Enzyme (ACE) Inhibitors": {
                                "cough": 1.2, // Increases cough likelihood
                                "angioedema": 1.1, // Increases angioedema likelihood
                                "hyperkalemia": 1.2, // Increases hyperkalemia likelihood
                                "renal impairment": 1.1 // Increases renal impairment likelihood
                            },
                            "Angiotensin Receptor Blockers (ARBs)": {
                                "dizziness": 1.2, // Increases dizziness likelihood
                                "hypotension": 1.1, // Increases hypotension likelihood
                                "hyperkalemia": 1.2, // Increases hyperkalemia likelihood
                                "cough": 1.1 // Increases cough likelihood
                            },
                            "Calcium Channel Blockers": {
                                "dizziness": 1.2, // Increases dizziness likelihood
                                "headache": 1.1, // Increases headache likelihood
                                "edema": 1.2, // Increases edema likelihood
                                "constipation": 1.1 // Increases constipation likelihood
                            },
                            "Direct Renin Inhibitors": {
                                "hyperkalemia": 1.2, // Increases hyperkalemia likelihood
                                "cough": 1.1, // Increases cough likelihood
                                "dizziness": 1.2, // Increases dizziness likelihood
                                "angioedema": 1.1 // Increases angioedema likelihood
                            },
                            "Beta-Blockers": {
                                "bradycardia": 1.2, // Increases bradycardia likelihood
                                "fatigue": 1.1, // Increases fatigue likelihood
                                "dizziness": 1.2, // Increases dizziness likelihood
                                "impotence": 1.1 // Increases impotence likelihood
                            },
                            "Alpha-2 Agonists": {
                                "sedation": 1.2, // Increases sedation likelihood
                                "dizziness": 1.1, // Increases dizziness likelihood
                                "dry mouth": 1.2, // Increases dry mouth likelihood
                                "constipation": 1.1 // Increases constipation likelihood
                            },
                            "Cholinesterase Inhibitors": {
                                "nausea": 1.2, // Increases nausea likelihood
                                "vomiting": 1.1, // Increases vomiting likelihood
                                "diarrhea": 1.2, // Increases diarrhea likelihood
                                "abdominal pain": 1.1 // Increases abdominal pain likelihood
                            },
                            "Muscle Relaxants": {
                                "drowsiness": 1.2, // Increases drowsiness likelihood
                                "dizziness": 1.1, // Increases dizziness likelihood
                                "headache": 1.2, // Increases headache likelihood
                                "nausea": 1.1 // Increases nausea likelihood
                            },
                            "Anticholinergics": {
                                "dry mouth": 1.2, // Increases dry mouth likelihood
                                "constipation": 1.1, // Increases constipation likelihood
                                "urinary retention": 1.2, // Increases urinary retention likelihood
                                "blurred vision": 1.1 // Increases blurred vision likelihood
                            },
                            "Cyclophosphamide": {
                                "neutropenia": 1.2, // Increases neutropenia likelihood
                                "anemia": 1.1, // Increases anemia likelihood
                                "thrombocytopenia": 1.2, // Increases thrombocytopenia likelihood
                                "hemorrhagic cystitis": 1.1 // Increases hemorrhagic cystitis likelihood
                            },
                            "Methotrexate": {
                                "neutropenia": 1.2, // Increases neutropenia likelihood
                                "anemia": 1.1, // Increases anemia likelihood
                                "thrombocytopenia": 1.2, // Increases thrombocytopenia likelihood
                                "liver toxicity": 1.1 // Increases liver toxicity likelihood
                            },
                            "Azathioprine": {
                                "neutropenia": 1.2, // Increases neutropenia likelihood
                                "anemia": 1.1, // Increases anemia likelihood
                                "thrombocytopenia": 1.2, // Increases thrombocytopenia likelihood
                                "liver toxicity": 1.1 // Increases liver toxicity likelihood
                            },
                                // Antispasmodic drugs
                                "dicyclomine": {
                                    "irritable bowel syndrome": 0.7,
                                    "abdominal cramps": 0.75,
                                    "urinary retention": 1.3,
                                    "blurred vision": 1.2
                                },
                                
                                // Antibiotics
                                "amoxicillin": {
                                    "bacterial infection": 0.5,
                                    "urinary tract infection": 0.6,
                                    "pneumonia": 0.7,
                                    "diarrhea": 1.3,
                                    "allergic reaction": 1.4
                                },
                                "ciprofloxacin": {
                                    "urinary tract infection": 0.4,
                                    "bacterial infection": 0.7,
                                    "pneumonia": 0.8,
                                    "tendon rupture": 1.6,
                                    "diarrhea": 1.3
                                },
                                "doxycycline": {
                                    "malaria": 0.8,
                                    "lyme disease": 0.6,
                                    "acne": 0.5,
                                    "photosensitivity": 1.4,
                                    "gastrointestinal issues": 1.2
                                },
                                
                                // Antivirals
                                "acyclovir": {
                                    "herpes simplex": 0.4,
                                    "varicella-zoster": 0.5,
                                    "renal toxicity": 1.4,
                                    "headache": 1.1
                                },
                                "oseltamivir": {
                                    "influenza": 0.3,
                                    "nausea": 1.2,
                                    "vomiting": 1.2,
                                    "seizures": 1.5
                                },
                                
                                // NSAIDs
                                "ibuprofen": {
                                    "pain relief": 0.5,
                                    "fever": 0.6,
                                    "inflammation": 0.6,
                                    "gastrointestinal bleeding": 1.4,
                                    "renal dysfunction": 1.3
                                },
                                "naproxen": {
                                    "pain relief": 0.5,
                                    "inflammation": 0.6,
                                    "headache": 1.1,
                                    "gastrointestinal bleeding": 1.4,
                                    "heartburn": 1.2
                                },
                                
                                // Opioids
                                "morphine": {
                                    "severe pain": 0.3,
                                    "respiratory depression": 1.6,
                                    "constipation": 1.4,
                                    "nausea": 1.2,
                                    "sedation": 1.3
                                },
                                "fentanyl": {
                                    "severe pain": 0.2,
                                    "respiratory depression": 1.8,
                                    "constipation": 1.5,
                                    "nausea": 1.3,
                                    "sedation": 1.4
                                },
                                
                                // Antidepressants (SSRIs)
                                "sertraline": {
                                    "depression": 0.4,
                                    "anxiety": 0.4,
                                    "sexual dysfunction": 1.4,
                                    "insomnia": 1.3,
                                    "nausea": 1.2
                                },
                                "fluoxetine": {
                                    "depression": 0.4,
                                    "OCD": 0.5,
                                    "sexual dysfunction": 1.5,
                                    "insomnia": 1.3,
                                    "nausea": 1.2
                                },
                                
                                // Antihistamines
                                "cetirizine": {
                                    "allergic rhinitis": 0.4,
                                    "urticaria": 0.4,
                                    "drowsiness": 1.2,
                                    "dry mouth": 1.1
                                },
                                "diphenhydramine": {
                                    "allergic reaction": 0.5,
                                    "motion sickness": 0.6,
                                    "drowsiness": 1.5,
                                    "dry mouth": 1.3,
                                    "confusion": 1.4
                                },
                                
                                // Proton Pump Inhibitors (PPIs)
                                "omeprazole": {
                                    "GERD": 0.4,
                                    "peptic ulcer": 0.5,
                                    "nausea": 1.2,
                                    "diarrhea": 1.3,
                                    "bone fractures": 1.5
                                },
                                "pantoprazole": {
                                    "GERD": 0.4,
                                    "peptic ulcer": 0.5,
                                    "headache": 1.2,
                                    "nausea": 1.2,
                                    "bone fractures": 1.5
                                },
                                
                                // Antihypertensives
                                "lisinopril": {
                                    "hypertension": 0.4,
                                    "heart failure": 0.5,
                                    "cough": 1.3,
                                    "hyperkalemia": 1.4,
                                    "dizziness": 1.2
                                },
                                "amlodipine": {
                                    "hypertension": 0.4,
                                    "angina": 0.5,
                                    "edema": 1.3,
                                    "flushing": 1.2,
                                    "dizziness": 1.1
                                },
                                
                                // Antipsychotics
                                "haloperidol": {
                                    "schizophrenia": 0.4,
                                    "psychosis": 0.4,
                                    "tardive dyskinesia": 1.5,
                                    "akathisia": 1.4,
                                    "sedation": 1.2
                                },
                                "olanzapine": {
                                    "schizophrenia": 0.4,
                                    "bipolar disorder": 0.4,
                                    "weight gain": 1.5,
                                    "diabetes": 1.3,
                                    "sedation": 1.2
                                },
                                
                                // Antidiabetics
                                "metformin": {
                                    "type 2 diabetes": 0.4,
                                    "polycystic ovary syndrome": 0.5,
                                    "nausea": 1.2,
                                    "diarrhea": 1.3,
                                    "lactic acidosis": 1.5
                                },
                                "insulin": {
                                    "type 1 diabetes": 0.2,
                                    "type 2 diabetes": 0.3,
                                    "hypoglycemia": 1.8,
                                    "weight gain": 1.3,
                                    "lipodystrophy": 1.4
                                },
                                
                                // Diuretics
                                "furosemide": {
                                    "edema": 0.4,
                                    "heart failure": 0.5,
                                    "hypertension": 0.6,
                                    "hypokalemia": 1.5,
                                    "dehydration": 1.4
                                },
                                "spironolactone": {
                                    "heart failure": 0.5,
                                    "hypertension": 0.6,
                                    "hyperkalemia": 1.6,
                                    "gynecomastia": 1.4,
                                    "nausea": 1.2
                                },
                                
                                // Corticosteroids
                                "prednisone": {
                                    "asthma": 0.4,
                                    "autoimmune disease": 0.5,
                                    "osteoporosis": 1.5,
                                    "weight gain": 1.3,
                                    "hyperglycemia": 1.4
                                },
                                "dexamethasone": {
                                    "cerebral edema": 0.4,
                                    "allergic reaction": 0.5,
                                    "hyperglycemia": 1.4,
                                    "osteoporosis": 1.5,
                                    "insomnia": 1.2
                                },
                                
                                // Anticoagulants
                                "warfarin": {
                                    "deep vein thrombosis": 0.3,
                                    "pulmonary embolism": 0.3,
                                    "bleeding": 1.7,
                                    "bruising": 1.5
                                },
                                "heparin": {
                                    "deep vein thrombosis": 0.3,
                                    "pulmonary embolism": 0.3,
                                    "thrombocytopenia": 1.6,
                                    "bleeding": 1.7
                                },
                                
                                // Beta Blockers
                                "metoprolol": {
                                    "hypertension": 0.4,
                                    "angina": 0.4,
                                    "bradycardia": 1.3,
                                    "fatigue": 1.2,
                                    "dizziness": 1.1
                                },
                                "propranolol": {
                                    "hypertension": 0.4,
                                    "migraine": 0.5,
                                    "bradycardia": 1.3,
                                    "fatigue": 1.2,
                                    "dizziness": 1.1
                                },
                                
                                // Statins
                                "atorvastatin": {
                                    "hyperlipidemia": 0.3,
                                    "cardiovascular disease": 0.4,
                                    "muscle pain": 1.3,
                                    "liver toxicity": 1.4,
                                    "nausea": 1.2
                                },
                                "simvastatin": {
                                    "hyperlipidemia": 0.3,
                                    "cardiovascular disease": 0.4,
                                    "muscle pain": 1.3,
                                    "liver toxicity": 1.4,
                                    "nausea": 1.2
                                },
                                
                                // Thyroid medications
                                "levothyroxine": {
                                    "hypothyroidism": 0.3,
                                    "weight loss": 1.2,
                                    "palpitations": 1.4,
                                    "tremors": 1.3,
                                    "insomnia": 1.2
                                },
                                "methimazole": {
                                    "hyperthyroidism": 0.3,
                                    "agranulocytosis": 1.6,
                                    "rash": 1.3,
                                    "hepatotoxicity": 1.5
                                },
                                
                                // Antifungals
                                "fluconazole": {
                                    "candidiasis": 0.4,
                                    "cryptococcal meningitis": 0.4,
                                    "hepatotoxicity": 1.4,
                                    "rash": 1.2,
                                    "nausea": 1.2
                                },
                                "terbinafine": {
                                    "onychomycosis": 0.4,
                                    "tinea infections": 0.4,
                                    "hepatotoxicity": 1.5,
                                    "rash": 1.3,
                                    "nausea": 1.2
                                },
                                
                                // Antimalarials
                                "chloroquine": {
                                    "malaria": 0.2,
                                    "lupus": 0.4,
                                    "retinopathy": 1.7,
                                    "nausea": 1.3,
                                    "pruritus": 1.4
                                },
                                "artemether-lumefantrine": {
                                    "malaria": 0.2,
                                    "headache": 1.2,
                                    "dizziness": 1.1,
                                    "nausea": 1.2,
                                    "insomnia": 1.2
                                },
                                
                                    "denosumab": { "osteoporosis": 0.7, "bone metastases": 0.75, "osteonecrosis of the jaw": 1.3, "atypical femur fracture": 1.2 },
                                    "alendronate": { "osteoporosis": 0.65, "esophageal irritation": 1.1, "atypical femur fracture": 1.15, "jaw osteonecrosis": 1.05 },
                                    "metformin": { "type 2 diabetes": 0.8, "lactic acidosis": 1.1, "vitamin B12 deficiency": 1.2, "gastrointestinal discomfort": 1.3 },
                                    "lisinopril": { "hypertension": 0.75, "angioedema": 1.2, "hyperkalemia": 1.15, "cough": 1.4 },
                                    "levothyroxine": { "hypothyroidism": 0.85, "osteoporosis": 1.1, "heart palpitations": 1.2, "insomnia": 1.15 },
                                    "omeprazole": { "gastroesophageal reflux disease": 0.8, "vitamin B12 deficiency": 1.15, "osteoporosis": 1.1, "kidney disease": 1.05 },
                                    "sertraline": { "depression": 0.75, "anxiety": 0.8, "sexual dysfunction": 1.3, "weight gain": 1.2 },
                                    "atorvastatin": { "high cholesterol": 0.7, "muscle pain": 1.25, "liver damage": 1.1, "type 2 diabetes": 1.05 },
                                    "metoprolol": { "hypertension": 0.75, "heart failure": 0.8, "bradycardia": 1.2, "fatigue": 1.15 },
                                    "gabapentin": { "epilepsy": 0.7, "neuropathic pain": 0.75, "dizziness": 1.3, "weight gain": 1.2 },
                                    "escitalopram": { "major depressive disorder": 0.8, "generalized anxiety disorder": 0.75, "sexual dysfunction": 1.25, "hyponatremia": 1.1 },
                                    "methotrexate": { "rheumatoid arthritis": 0.75, "psoriasis": 0.8, "liver toxicity": 1.3, "bone marrow suppression": 1.25 },
                                    "warfarin": { "atrial fibrillation": 0.7, "deep vein thrombosis": 0.75, "bleeding": 1.4, "osteoporosis": 1.1 },
                                    "albuterol": { "asthma": 0.8, "chronic obstructive pulmonary disease": 0.75, "tremor": 1.2, "tachycardia": 1.15 },
                                    "hydrocodone": { "severe pain": 0.85, "cough suppression": 0.8, "constipation": 1.3, "respiratory depression": 1.4 },
                                    "metronidazole": { "bacterial infections": 0.75, "parasitic infections": 0.8, "nausea": 1.2, "metallic taste": 1.25 },
                                    "prednisone": { "inflammation": 0.7, "autoimmune disorders": 0.75, "osteoporosis": 1.3, "adrenal suppression": 1.25 },
                                    "fluoxetine": { "major depressive disorder": 0.75, "obsessive-compulsive disorder": 0.8, "sexual dysfunction": 1.3, "suicidal thoughts": 1.2 },
                                    "losartan": { "hypertension": 0.75, "diabetic nephropathy": 0.8, "hyperkalemia": 1.15, "dizziness": 1.1 },
                                    "insulin glargine": { "type 1 diabetes": 0.85, "type 2 diabetes": 0.8, "hypoglycemia": 1.3, "weight gain": 1.2 },
                                    "tamsulosin": { "benign prostatic hyperplasia": 0.8, "urinary retention": 0.75, "dizziness": 1.15, "retrograde ejaculation": 1.25 },
                                    "duloxetine": { "major depressive disorder": 0.75, "generalized anxiety disorder": 0.8, "nausea": 1.2, "sexual dysfunction": 1.25 },
                                    "pantoprazole": { "gastroesophageal reflux disease": 0.8, "peptic ulcer disease": 0.75, "vitamin B12 deficiency": 1.15, "osteoporosis": 1.1 },
                                    "venlafaxine": { "major depressive disorder": 0.75, "generalized anxiety disorder": 0.8, "hypertension": 1.2, "withdrawal symptoms": 1.3 },
                                    "clopidogrel": { "acute coronary syndrome": 0.7, "stroke prevention": 0.75, "bleeding": 1.3, "thrombotic thrombocytopenic purpura": 1.1 },
                                    "adalimumab": { "rheumatoid arthritis": 0.75, "psoriasis": 0.8, "infections": 1.3, "lymphoma": 1.1 },
                                    "pregabalin": { "neuropathic pain": 0.8, "fibromyalgia": 0.75, "dizziness": 1.2, "weight gain": 1.15 },
                                    "rivaroxaban": { "atrial fibrillation": 0.75, "deep vein thrombosis": 0.8, "bleeding": 1.35, "liver injury": 1.1 },
                                    "sitagliptin": { "type 2 diabetes": 0.8, "pancreatitis": 1.15, "joint pain": 1.1, "nasopharyngitis": 1.05 },
                                    "rosuvastatin": { "high cholesterol": 0.7, "atherosclerosis": 0.75, "myopathy": 1.2, "liver damage": 1.15 },
                                    "vortioxetine": { "major depressive disorder": 0.8, "nausea": 1.25, "sexual dysfunction": 1.15, "serotonin syndrome": 1.1 },
                                    "apixaban": { "atrial fibrillation": 0.75, "deep vein thrombosis": 0.8, "bleeding": 1.3, "liver injury": 1.05 },
                                    "empagliflozin": { "type 2 diabetes": 0.8, "heart failure": 0.75, "urinary tract infections": 1.2, "diabetic ketoacidosis": 1.15 },
                                    "tofacitinib": { "rheumatoid arthritis": 0.75, "ulcerative colitis": 0.8, "infections": 1.3, "malignancy": 1.1 },
                                    "artemether_lumefantrine": { "malaria": 0.85, "nausea": 1.2, "headache": 1.15, "dizziness": 1.1 },
                                    "efavirenz": { "HIV": 0.8, "neuropsychiatric effects": 1.3, "rash": 1.2, "liver toxicity": 1.15 },
                                    "isoniazid": { "tuberculosis": 0.75, "hepatotoxicity": 1.3, "peripheral neuropathy": 1.2, "rash": 1.1 },
                                    "albendazole": { "intestinal worms": 0.8, "nausea": 1.15, "abdominal pain": 1.1, "dizziness": 1.05 },
                                    "quinine": { "severe malaria": 0.8, "cinchonism": 1.3, "hypoglycemia": 1.2, "cardiac arrhythmias": 1.25 },
                                    "praziquantel": { "schistosomiasis": 0.85, "abdominal pain": 1.2, "nausea": 1.15, "dizziness": 1.1 },
                                    "ivermectin": { "onchocerciasis": 0.8, "strongyloidiasis": 0.75, "pruritus": 1.2, "dizziness": 1.15 },
                                    "doxycycline": { "malaria prophylaxis": 0.75, "bacterial infections": 0.8, "photosensitivity": 1.25, "gastrointestinal upset": 1.2 },
                                    "tenofovir": { "HIV": 0.8, "hepatitis B": 0.75, "renal impairment": 1.2, "decreased bone density": 1.15 },
                                    "amoxicillin": { "bacterial infections": 0.8, "rash": 1.15, "diarrhea": 1.2, "nausea": 1.1 },
                                    "metoclopramide": { "nausea": 0.75, "vomiting": 0.8, "extrapyramidal symptoms": 1.3, "tardive dyskinesia": 1.2 },
                                    "zinc_sulfate": { "diarrhea in children": 0.75, "common cold": 0.7, "nausea": 1.15, "abdominal cramps": 1.1 },
                                    "ciprofloxacin": { "urinary tract infections": 0.8, "typhoid fever": 0.75, "tendinitis": 1.2, "QT prolongation": 1.15 },
                                    "cotrimoxazole": { "pneumocystis pneumonia": 0.8, "urinary tract infections": 0.75, "rash": 1.2, "bone marrow suppression": 1.15 },
                                    "metronidazole": { "amoebiasis": 0.8, "bacterial vaginosis": 0.75, "metallic taste": 1.2, "neuropathy": 1.15 },
                                    "misoprostol": { "postpartum hemorrhage": 0.75, "gastric ulcers": 0.8, "diarrhea": 1.3, "abdominal pain": 1.2 },
                                    "diethylcarbamazine": { "lymphatic filariasis": 0.8, "loiasis": 0.75, "fever": 1.2, "headache": 1.15 },
                                    "artesunate": { "severe malaria": 0.85, "neutropenia": 1.2, "anemia": 1.15, "hepatotoxicity": 1.1 },
                                    "nevirapine": { "HIV": 0.8, "rash": 1.3, "hepatotoxicity": 1.25, "fever": 1.15 },
                                    "rifampicin": { "tuberculosis": 0.75, "leprosy": 0.8, "hepatotoxicity": 1.3, "drug interactions": 1.25 },
                                    "mebendazole": { "intestinal worms": 0.8, "abdominal pain": 1.15, "diarrhea": 1.1, "dizziness": 1.05 },
                                    "fluconazole": { "fungal infections": 0.8, "cryptococcal meningitis": 0.75, "nausea": 1.15, "hepatotoxicity": 1.2 },
                                    "ceftriaxone": { "bacterial meningitis": 0.85, "gonorrhea": 0.8, "diarrhea": 1.2, "gallbladder sludge": 1.15 },
                                    "chloroquine": { "malaria": 0.75, "rheumatoid arthritis": 0.7, "retinopathy": 1.3, "pruritus": 1.2 },
                                    "ampicillin": { "bacterial infections": 0.8, "rash": 1.2, "diarrhea": 1.15, "nausea": 1.1 },
                                    "diazepam": { "anxiety": 0.75, "alcohol withdrawal": 0.8, "drowsiness": 1.3, "dependence": 1.25 },
                                    "paracetamol": { "pain": 0.75, "fever": 0.8, "hepatotoxicity": 1.3, "allergic reactions": 1.1 },
                                    "gentamicin": { "gram-negative bacterial infections": 0.8, "nephrotoxicity": 1.3, "ototoxicity": 1.25, "neuromuscular blockade": 1.2 },
                                    "oxytocin": { "labor induction": 0.8, "postpartum hemorrhage": 0.75, "water intoxication": 1.2, "hypotension": 1.15 },
                                    "folic_acid": { "anemia": 0.75, "neural tube defects prevention": 0.7, "gastrointestinal upset": 1.1, "zinc deficiency": 1.05 },
                                    "metformin": { "type 2 diabetes": 0.8, "polycystic ovary syndrome": 0.75, "lactic acidosis": 1.2, "vitamin B12 deficiency": 1.15 },
                                    "amitriptyline": { "depression": 0.75, "neuropathic pain": 0.8, "dry mouth": 1.2, "urinary retention": 1.15 },
                                    "amlodipine": { "hypertension": 0.8, "angina": 0.75, "peripheral edema": 1.2, "flushing": 1.15 },
                                    "carbamazepine": { "epilepsy": 0.8, "trigeminal neuralgia": 0.75, "Stevens-Johnson syndrome": 1.3, "hyponatremia": 1.2 },
                                    "dexamethasone": { "inflammation": 0.7, "cerebral edema": 0.75, "adrenal suppression": 1.3, "osteoporosis": 1.25 },
                                    "diclofenac": { "pain": 0.75, "inflammation": 0.8, "gastrointestinal bleeding": 1.3, "cardiovascular events": 1.25 },
                                    "enalapril": { "hypertension": 0.8, "heart failure": 0.75, "hyperkalemia": 1.2, "angioedema": 1.15 },
                                    "ferrous_sulfate": { "iron deficiency anemia": 0.8, "constipation": 1.2, "nausea": 1.15, "abdominal pain": 1.1 },
                                    "furosemide": { "edema": 0.75, "hypertension": 0.8, "electrolyte imbalance": 1.2, "ototoxicity": 1.15 },
                                    "glibenclamide": { "type 2 diabetes": 0.8, "hypoglycemia": 1.3, "weight gain": 1.2, "allergic reactions": 1.1 },
                          
                            // ... (previous drug types)
                        
                            "Antiretrovirals (ARVs)": {
                                "lactic acidosis": 1.2, // Increases lactic acidosis likelihood
                                "hepatotoxicity": 1.1, // Increases hepatotoxicity likelihood
                                "lipodystrophy": 1.2, // Increases lipodystrophy likelihood
                                "insulin resistance": 1.1 // Increases insulin resistance likelihood
                            },
                            "Antimalarials": {
                                "hemolytic anemia": 1.2, // Increases hemolytic anemia likelihood
                                "neutropenia": 1.1, // Increases neutropenia likelihood
                                "thrombocytopenia": 1.2, // Increases thrombocytopenia likelihood
                                "hepatotoxicity": 1.1 // Increases hepatotoxicity likelihood
                            },
                            "Isoniazid": {
                                "hepatotoxicity": 1.2, // Increases hepatotoxicity likelihood
                                "peripheral neuropathy": 1.1, // Increases peripheral neuropathy likelihood
                                "seizures": 1.2, // Increases seizures likelihood
                                "psychosis": 1.1 // Increases psychosis likelihood
                            },
                            "Rifampicin": {
                                "hepatotoxicity": 1.2, // Increases hepatotoxicity likelihood
                                "flu-like syndrome": 1.1, // Increases flu-like syndrome likelihood
                                "hemolytic anemia": 1.2, // Increases hemolytic anemia likelihood
                                "thrombocytopenia": 1.1 // Increases thrombocytopenia likelihood
                            },
                            "Ethambutol": {
                                "optic neuritis": 1.2, // Increases optic neuritis likelihood
                                "peripheral neuropathy": 1.1, // Increases peripheral neuropathy likelihood
                                "nephrotoxicity": 1.2, // Increases nephrotoxicity likelihood
                                "hepatotoxicity": 1.1 // Increases hepatotoxicity likelihood
                            },
                            "Pyrazinamide": {
                                "hepatotoxicity": 1.2, // Increases hepatotoxicity likelihood
                                "arthralgia": 1.1, // Increases arthralgia likelihood
                                "gout": 1.2, // Increases gout likelihood
                                "hyperuricemia": 1.1 // Increases hyperuricemia likelihood
                            },
                            "Streptomycin": {
                                "ototoxicity": 1.2, // Increases ototoxicity likelihood
                                "nephrotoxicity": 1.1, // Increases nephrotoxicity likelihood
                                "neuromuscular blockade": 1.2, // Increases neuromuscular blockade likelihood
                                "allergic reactions": 1.1 // Increases allergic reactions likelihood
                            },
                            "Ciprofloxacin": {
                                "tendinitis": 1.2, // Increases tendinitis likelihood
                                "tendon rupture": 1.1, // Increases tendon rupture likelihood
                                "QT prolongation": 1.2, // Increases QT prolongation likelihood
                                "seizures": 1.1 // Increases seizures likelihood
                            },
                            "Metronidazole": {
                                "peripheral neuropathy": 1.2, // Increases peripheral neuropathy likelihood
                                "seizures": 1.1, // Increases seizures likelihood
                                "encephalopathy": 1.2, // Increases encephalopathy likelihood
                                "hepatotoxicity": 1.1 // Increases hepatotoxicity likelihood
                            },
                            "Albendazole": {
                                "hepatotoxicity": 1.2, // Increases hepatotoxicity likelihood
                                "bone marrow suppression": 1.1, // Increases bone marrow suppression likelihood
                                "neutropenia": 1.2, // Increases neutropenia likelihood
                                "thrombocytopenia": 1.1 // Increases thrombocytopenia likelihood
                            },
                            "Praziquantel": {
                                "hepatotoxicity": 1.2, // Increases hepatotoxicity likelihood
                                "abdominal pain": 1.1, // Increases abdominal pain likelihood
                                "diarrhea": 1.2, // Increases diarrhea likelihood
                                "headache": 1.1 // Increases headache likelihood
                            },
                            
                                "abacavir": { "HIV": 0.8, "hypersensitivity reaction": 1.3, "lactic acidosis": 1.2, "lipodystrophy": 1.1 },
                                "acyclovir": { "herpes simplex": 0.75, "varicella zoster": 0.8, "nephrotoxicity": 1.2, "neurotoxicity": 1.15 },
                                "amodiaquine": { "malaria": 0.8, "agranulocytosis": 1.3, "hepatotoxicity": 1.25, "nausea": 1.1 },
                                "amoxicillin_clavulanate": { "bacterial infections": 0.8, "diarrhea": 1.2, "hepatotoxicity": 1.15, "rash": 1.1 },
                                "amphotericin_b": { "fungal infections": 0.85, "nephrotoxicity": 1.3, "hypokalemia": 1.25, "infusion reactions": 1.2 },
                                "artemether": { "malaria": 0.85, "neurotoxicity": 1.2, "QT prolongation": 1.15, "gastrointestinal disturbances": 1.1 },
                                "atazanavir": { "HIV": 0.8, "hyperbilirubinemia": 1.3, "nephrolithiasis": 1.2, "PR interval prolongation": 1.15 },
                                "atropine": { "bradycardia": 0.75, "organophosphate poisoning": 0.8, "dry mouth": 1.2, "urinary retention": 1.15 },
                                "azithromycin": { "bacterial infections": 0.8, "QT prolongation": 1.2, "hepatotoxicity": 1.15, "C. difficile infection": 1.1 },
                                "baclofen": { "muscle spasticity": 0.75, "drowsiness": 1.2, "dizziness": 1.15, "withdrawal syndrome": 1.3 },
                                "bedaquiline": { "multidrug-resistant tuberculosis": 0.85, "QT prolongation": 1.3, "hepatotoxicity": 1.2, "pancreatitis": 1.15 },
                                "benzathine_penicillin": { "syphilis": 0.85, "rheumatic fever prophylaxis": 0.8, "anaphylaxis": 1.3, "Jarisch-Herxheimer reaction": 1.2 },
                                "benznidazole": { "Chagas disease": 0.8, "rash": 1.2, "peripheral neuropathy": 1.15, "bone marrow suppression": 1.1 },
                                "bismuth_subsalicylate": { "diarrhea": 0.75, "H. pylori infection": 0.8, "black stool": 1.1, "tinnitus": 1.05 },
                                "cefixime": { "gonorrhea": 0.85, "urinary tract infections": 0.8, "diarrhea": 1.15, "pseudomembranous colitis": 1.1 },
                                "ceftazidime": { "pseudomonas infections": 0.85, "meningitis": 0.8, "seizures": 1.2, "neutropenia": 1.15 },
                                "chloramphenicol": { "typhoid fever": 0.85, "meningitis": 0.8, "bone marrow suppression": 1.3, "gray baby syndrome": 1.25 },
                                "clindamycin": { "bacterial vaginosis": 0.8, "malaria": 0.75, "pseudomembranous colitis": 1.3, "rash": 1.15 },
                                "clofazimine": { "leprosy": 0.85, "skin discoloration": 1.3, "gastrointestinal disturbances": 1.2, "QT prolongation": 1.15 },
                                "cloxacillin": { "staphylococcal infections": 0.85, "hepatotoxicity": 1.2, "neutropenia": 1.15, "interstitial nephritis": 1.1 },
                                "cycloserine": { "multidrug-resistant tuberculosis": 0.8, "psychosis": 1.3, "seizures": 1.25, "peripheral neuropathy": 1.2 },
                                "dapsone": { "leprosy": 0.85, "pneumocystis pneumonia": 0.8, "hemolytic anemia": 1.3, "methemoglobinemia": 1.25 },
                                "delamanid": { "multidrug-resistant tuberculosis": 0.85, "QT prolongation": 1.3, "hepatotoxicity": 1.2, "hypokalemia": 1.15 },
                                "dihydroartemisinin_piperaquine": { "malaria": 0.85, "QT prolongation": 1.2, "hepatotoxicity": 1.15, "gastrointestinal disturbances": 1.1 },
                                "diloxanide": { "amoebiasis": 0.8, "flatulence": 1.15, "nausea": 1.1, "pruritus": 1.05 },
                                "dolutegravir": { "HIV": 0.85, "insomnia": 1.2, "hepatotoxicity": 1.15, "hyperglycemia": 1.1 },
                                "domperidone": { "nausea": 0.75, "vomiting": 0.8, "QT prolongation": 1.3, "galactorrhea": 1.2 },
                                "doxycycline": { "malaria prophylaxis": 0.75, "bacterial infections": 0.8, "photosensitivity": 1.25, "esophageal ulceration": 1.2 },
                                "eflornithine": { "African trypanosomiasis": 0.85, "seizures": 1.2, "bone marrow suppression": 1.15, "alopecia": 1.1 },
                                "etravirine": { "HIV": 0.8, "rash": 1.2, "hepatotoxicity": 1.15, "nausea": 1.1 },
                                "fexinidazole": { "African trypanosomiasis": 0.85, "nausea": 1.2, "vomiting": 1.15, "headache": 1.1 },
                                "flucytosine": { "cryptococcal meningitis": 0.85, "bone marrow suppression": 1.3, "hepatotoxicity": 1.2, "cardiotoxicity": 1.15 },
                                "gatifloxacin": { "bacterial infections": 0.8, "dysglycemia": 1.3, "QT prolongation": 1.2, "tendinitis": 1.15 },
                                "halofantrine": { "malaria": 0.8, "QT prolongation": 1.3, "cardiovascular events": 1.25, "gastrointestinal disturbances": 1.1 },
                                "itraconazole": { "fungal infections": 0.85, "congestive heart failure": 1.3, "hepatotoxicity": 1.2, "hypokalemia": 1.15 },
                                "kanamycin": { "multidrug-resistant tuberculosis": 0.85, "ototoxicity": 1.3, "nephrotoxicity": 1.25, "neuromuscular blockade": 1.2 },
                                "lefamulin": { "community-acquired bacterial pneumonia": 0.85, "diarrhea": 1.2, "QT prolongation": 1.15, "hepatotoxicity": 1.1 },
                                "linagliptin": { "type 2 diabetes": 0.8, "pancreatitis": 1.2, "hypersensitivity reactions": 1.15, "arthralgia": 1.1 },
                                "linezolid": { "multidrug-resistant tuberculosis": 0.85, "thrombocytopenia": 1.3, "peripheral neuropathy": 1.25, "lactic acidosis": 1.2 },
                                "loperamide": { "diarrhea": 0.75, "constipation": 1.2, "paralytic ileus": 1.15, "toxic megacolon": 1.1 },
                                "mefloquine": { "malaria": 0.8, "neuropsychiatric effects": 1.3, "cardiotoxicity": 1.2, "seizures": 1.15 },
                                "melarsoprol": { "African trypanosomiasis": 0.85, "encephalopathy": 1.3, "peripheral neuropathy": 1.25, "cardiac arrhythmias": 1.2 },
                                "miltefosine": { "leishmaniasis": 0.85, "gastrointestinal disturbances": 1.2, "hepatotoxicity": 1.15, "teratogenicity": 1.3 },
                                "moxifloxacin": { "multidrug-resistant tuberculosis": 0.85, "QT prolongation": 1.3, "tendinitis": 1.2, "dysglycemia": 1.15 },
                                "nifurtimox": { "Chagas disease": 0.85, "neuropathy": 1.2, "anorexia": 1.15, "psychosis": 1.1 },
                                "nitazoxanide": { "cryptosporidiosis": 0.8, "giardiasis": 0.75, "abdominal pain": 1.15, "diarrhea": 1.1 },
                                "nitrofurantoin": { "urinary tract infections": 0.8, "pulmonary toxicity": 1.3, "hepatotoxicity": 1.2, "peripheral neuropathy": 1.15 },
                                "oxamniquine": { "schistosomiasis": 0.85, "seizures": 1.2, "dizziness": 1.15, "hepatotoxicity": 1.1 },
                                "paromomycin": { "amoebiasis": 0.8, "leishmaniasis": 0.75, "ototoxicity": 1.2, "nephrotoxicity": 1.15 },
                                "pentamidine": { "pneumocystis pneumonia": 0.85, "hypoglycemia": 1.3, "nephrotoxicity": 1.25, "pancreatitis": 1.2 },
                                "pentavalent_antimonials": { "leishmaniasis": 0.85, "cardiotoxicity": 1.3, "hepatotoxicity": 1.25, "pancreatitis": 1.2 },
                                "phenoxymethylpenicillin": { "streptococcal infections": 0.8, "rheumatic fever prophylaxis": 0.75, "anaphylaxis": 1.3, "diarrhea": 1.15 },
                                "posaconazole": { "fungal infections": 0.85, "QT prolongation": 1.2, "hepatotoxicity": 1.15, "hypokalemia": 1.1 },
                                "primaquine": { "malaria": 0.8, "hemolytic anemia": 1.3, "methemoglobinemia": 1.2, "gastrointestinal disturbances": 1.15 },
                                "proguanil": { "malaria prophylaxis": 0.75, "mouth ulcers": 1.15, "hair loss": 1.1, "gastrointestinal disturbances": 1.05 },
                                "pyrantel": { "intestinal worms": 0.8, "abdominal pain": 1.15, "diarrhea": 1.1, "dizziness": 1.05 },
                                "pyrazinamide": { "tuberculosis": 0.85, "hepatotoxicity": 1.3, "hyperuricemia": 1.2, "arthralgias": 1.15 },
                                "pyrimethamine": { "malaria": 0.75, "toxoplasmosis": 0.8, "megaloblastic anemia": 1.2, "rash": 1.15 },
                                "raltegravir": { "HIV": 0.85, "myopathy": 1.2, "rash": 1.15, "insomnia": 1.1 },
                                "rifabutin": { "mycobacterium avium complex": 0.85, "uveitis": 1.2, "neutropenia": 1.15, "discoloration of body fluids": 1.1 },
                                "rifapentine": { "latent tuberculosis": 0.85, "hepatotoxicity": 1.2, "hypersensitivity reactions": 1.15, "orange discoloration of body fluids": 1.1 },
                                "secnidazole": { "amoebiasis": 0.8, "trichomoniasis": 0.75, "metallic taste": 1.15, "nausea": 1.1 },
                                "sodium_stibogluconate": { "leishmaniasis": 0.85, "cardiotoxicity": 1.3, "pancreatitis": 1.25, "hepatotoxicity": 1.2 },
                                "spiramycin": { "toxoplasmosis": 0.8, "gastrointestinal disturbances": 1.15, "rash": 1.1, "eosinophilia": 1.05 },
                                "stavudine": { "HIV": 0.8, "peripheral neuropathy": 1.3, "lactic acidosis": 1.25, "lipodystrophy": 1.2 },
                                "streptomycin": { "tuberculosis": 0.85, "ototoxicity": 1.3, "nephrotoxicity": 1.25, "neuromuscular blockade": 1.2 },
                                "sulfadoxine_pyrimethamine": { "malaria": 0.8, "severe cutaneous reactions": 1.3, "megaloblastic anemia": 1.2, "crystalluria": 1.15 },
                                "suramin": { "African trypanosomiasis": 0.85, "nephrotoxicity": 1.3, "peripheral neuropathy": 1.25, "severe allergic reactions": 1.2 },
                                "telithromycin": { "community-acquired pneumonia": 0.85, "hepatotoxicity": 1.3, "visual disturbances": 1.2, "QT prolongation": 1.15 },
                                "tenofovir_alafenamide": { "HIV": 0.85, "hepatitis B": 0.8, "renal impairment": 1.15, "decreased bone density": 1.1 },
                        
                            // ... (previous drug types)
                        
                            "Sulfadoxine-Pyrimethamine": {
                                "hemolytic anemia": 1.2, // Increases hemolytic anemia likelihood
                                "neutropenia": 1.1, // Increases neutropenia likelihood
                                "thrombocytopenia": 1.2, // Increases thrombocytopenia likelihood
                                "hepatotoxicity": 1.1 // Increases hepatotoxicity likelihood
                            },
                            "Amodiaquine": {
                                "neutropenia": 1.2, // Increases neutropenia likelihood
                                "thrombocytopenia": 1.1, // Increases thrombocytopenia likelihood
                                "hepatotoxicity": 1.2, // Increases hepatotoxicity likelihood
                                "agranulocytosis": 1.1 // Increases agranulocytosis likelihood
                            },
                            "Artemether-Lumefantrine": {
                                "neutropenia": 1.2, // Increases neutropenia likelihood
                                "thrombocytopenia": 1.1, // Increases thrombocytopenia likelihood
                                "hepatotoxicity": 1.2, // Increases hepatotoxicity likelihood
                                "QT prolongation": 1.1 // Increases QT prolongation likelihood
                            },
                            "Dihydroartemisinin-Piperaquine": {
                                "neutropenia": 1.2, // Increases neutropenia likelihood
                                "thrombocytopenia": 1.1, // Increases thrombocytopenia likelihood
                                "hepatotoxicity": 1.2, // Increases hepatotoxicity likelihood
                                "QT prolongation": 1.1 // Increases QT prolongation likelihood
                            },
                            "Mefloquine": {
                                "neuropsychiatric reactions": 1.2, // Increases neuropsychiatric reactions likelihood
                                "seizures": 1.1, // Increases seizures likelihood
                                "cardiac arrhythmias": 1.2, // Increases cardiac arrhythmias likelihood
                                "hepatotoxicity": 1.1 // Increases hepatotoxicity likelihood
                            },
                            "Quinine": {
                                "cinchonism": 1.2, // Increases cinchonism likelihood
                                "hypoglycemia": 1.1, // Increases hypoglycemia likelihood
                                "thrombocytopenia": 1.2, // Increases thrombocytopenia likelihood
                                "hepatotoxicity": 1.1 // Increases hepatotoxicity likelihood
                            },
                            "Chloroquine": {
                                "retinopathy": 1.2, // Increases retinopathy likelihood
                                "hearing loss": 1.1, // Increases hearing loss likelihood
                                "myopathy": 1.2, // Increases myopathy likelihood
                                "hepatotoxicity": 1.1 // Increases hepatotoxicity likelihood
                            },
                            "Hydroxychloroquine": {
                                "retinopathy": 1.2, // Increases retinopathy likelihood
                                "hearing loss": 1.1, // Increases hearing loss likelihood
                                "myopathy": 1.2, // Increases myopathy likelihood
                                "hepatotoxicity": 1.1 // Increases hepatotoxicity likelihood
                            },
                            "Primaquine": {
                                "hemolytic anemia": 1.2, // Increases hemolytic anemia likelihood
                                "methemoglobinemia": 1.1, // Increases methemoglobinemia likelihood
                                "neutropenia": 1.2, // Increases neutropenia likelihood
                                "thrombocytopenia": 1.1 // Increases thrombocytopenia likelihood
                            },
                            "Tetracycline": {
                                "phototoxicity": 1.2, // Increases phototoxicity likelihood
                                "hepatotoxicity": 1.1, // Increases hepatotoxicity likelihood
                                "esophagitis": 1.2, // Increases esophagitis likelihood
                                "pseudotumor cerebri": 1.1 // Increases pseudotumor cerebri likelihood
                            },
                                // Antimalarial drugs
                                "artemether-lumefantrine": {
                                    "malaria": 0.2,
                                    "headache": 1.2,
                                    "dizziness": 1.1,
                                    "nausea": 1.2,
                                    "insomnia": 1.2
                                },
                                "chloroquine": {
                                    "malaria": 0.3,
                                    "pruritus": 1.3,
                                    "nausea": 1.2,
                                    "headache": 1.2,
                                    "retinopathy": 1.5
                                },
                                "quinine": {
                                    "malaria": 0.3,
                                    "cinchonism": 1.5,
                                    "hypoglycemia": 1.4,
                                    "tinnitus": 1.3
                                },
                                "sulfadoxine-pyrimethamine": {
                                    "malaria": 0.3,
                                    "anemia": 1.4,
                                    "skin rash": 1.3,
                                    "nausea": 1.2
                                },
                            
                                // Anti-tuberculosis drugs
                                "isoniazid": {
                                    "tuberculosis": 0.4,
                                    "peripheral neuropathy": 1.4,
                                    "hepatotoxicity": 1.5,
                                    "nausea": 1.2
                                },
                                "rifampicin": {
                                    "tuberculosis": 0.3,
                                    "hepatotoxicity": 1.5,
                                    "red/orange urine": 1.2,
                                    "nausea": 1.2
                                },
                                "ethambutol": {
                                    "tuberculosis": 0.3,
                                    "optic neuritis": 1.5,
                                    "gout": 1.2,
                                    "nausea": 1.1
                                },
                                "pyrazinamide": {
                                    "tuberculosis": 0.3,
                                    "hepatotoxicity": 1.5,
                                    "joint pain": 1.3,
                                    "gout": 1.3
                                },
                            
                                // HIV antiretroviral drugs (ARVs)
                                "efavirenz": {
                                    "HIV/AIDS": 0.3,
                                    "vivid dreams": 1.5,
                                    "dizziness": 1.3,
                                    "skin rash": 1.2
                                },
                                "tenofovir": {
                                    "HIV/AIDS": 0.3,
                                    "renal toxicity": 1.5,
                                    "bone density loss": 1.4,
                                    "nausea": 1.2
                                },
                                "lamivudine": {
                                    "HIV/AIDS": 0.3,
                                    "pancreatitis": 1.4,
                                    "fatigue": 1.3,
                                    "headache": 1.2
                                },
                                "dolutegravir": {
                                    "HIV/AIDS": 0.2,
                                    "insomnia": 1.3,
                                    "weight gain": 1.4,
                                    "headache": 1.2
                                },
                            
                                // Anti-parasitic drugs
                                "albendazole": {
                                    "intestinal worms": 0.2,
                                    "liver toxicity": 1.5,
                                    "nausea": 1.3,
                                    "dizziness": 1.2,
                                    "headache": 1.2
                                },
                                "praziquantel": {
                                    "schistosomiasis": 0.3,
                                    "headache": 1.2,
                                    "dizziness": 1.1,
                                    "nausea": 1.2,
                                    "fatigue": 1.3
                                },
                                "ivermectin": {
                                    "onchocerciasis": 0.2,
                                    "itching": 1.4,
                                    "rash": 1.3,
                                    "fever": 1.2,
                                    "joint pain": 1.2
                                },
                            
                                // Antidiarrheal drugs
                                "loperamide": {
                                    "diarrhea": 0.4,
                                    "constipation": 1.4,
                                    "nausea": 1.2,
                                    "abdominal cramps": 1.2
                                },
                                "ors (oral rehydration solution)": {
                                    "dehydration": 0.2,
                                    "diarrhea": 0.3,
                                    "nausea": 1.1,
                                    "abdominal distension": 1.2
                                },
                            
                                // Antifungal drugs
                                "fluconazole": {
                                    "candidiasis": 0.4,
                                    "cryptococcal meningitis": 0.4,
                                    "hepatotoxicity": 1.4,
                                    "rash": 1.2,
                                    "nausea": 1.2
                                },
                                "griseofulvin": {
                                    "tinea infections": 0.4,
                                    "headache": 1.2,
                                    "nausea": 1.3,
                                    "photosensitivity": 1.4,
                                    "fatigue": 1.3
                                },
                            
                                // Analgesics (pain relief)
                                "paracetamol": {
                                    "fever": 0.4,
                                    "pain relief": 0.5,
                                    "liver toxicity": 1.5,
                                    "nausea": 1.2,
                                    "rash": 1.2
                                },
                                "aspirin": {
                                    "pain relief": 0.4,
                                    "fever": 0.5,
                                    "gastrointestinal bleeding": 1.5,
                                    "bruising": 1.3,
                                    "rash": 1.2
                                },
                            
                                // Antihypertensive drugs
                                "hydrochlorothiazide": {
                                    "hypertension": 0.3,
                                    "heart failure": 0.4,
                                    "electrolyte imbalance": 1.4,
                                    "dehydration": 1.3,
                                    "dizziness": 1.2
                                },
                                "enalapril": {
                                    "hypertension": 0.3,
                                    "heart failure": 0.4,
                                    "cough": 1.3,
                                    "angioedema": 1.4,
                                    "hyperkalemia": 1.5
                                },
                            
                                // Antihistamines
                                "chlorpheniramine": {
                                    "allergic reactions": 0.4,
                                    "urticaria": 0.5,
                                    "drowsiness": 1.3,
                                    "dry mouth": 1.2,
                                    "blurred vision": 1.1
                                },
                                "promethazine": {
                                    "allergic reactions": 0.4,
                                    "motion sickness": 0.5,
                                    "sedation": 1.4,
                                    "dry mouth": 1.3,
                                    "drowsiness": 1.2
                                },
                            
                                // Antiepileptic drugs
                                "carbamazepine": {
                                    "epilepsy": 0.3,
                                    "bipolar disorder": 0.4,
                                    "rash": 1.3,
                                    "nausea": 1.2,
                                    "dizziness": 1.2
                                },
                                "valproic acid": {
                                    "epilepsy": 0.3,
                                    "bipolar disorder": 0.4,
                                    "hepatotoxicity": 1.5,
                                    "pancreatitis": 1.4,
                                    "weight gain": 1.3
                                },
                            
                                // Antidiabetic drugs
                                "glibenclamide": {
                                    "type 2 diabetes": 0.3,
                                    "hypoglycemia": 1.6,
                                    "weight gain": 1.3,
                                    "nausea": 1.2
                                },
                                "metformin": {
                                    "type 2 diabetes": 0.3,
                                    "PCOS": 0.4,
                                    "lactic acidosis": 1.5,
                                    "nausea": 1.3,
                                    "diarrhea": 1.2
                                },
                            
                                // Corticosteroids
                                "prednisolone": {
                                    "asthma": 0.4,
                                    "rheumatoid arthritis": 0.5,
                                    "osteoporosis": 1.5,
                                    "weight gain": 1.3,
                                    "hyperglycemia": 1.4
                                },
                                "dexamethasone": {
                                    "cerebral edema": 0.3,
                                    "allergic reactions": 0.4,
                                    "insomnia": 1.3,
                                    "osteoporosis": 1.5,
                                    "hyperglycemia": 1.4
                                },
                            
                                // Diuretics
                                "furosemide": {
                                    "heart failure": 0.4,
                                    "hypertension": 0.5,
                                    "edema": 0.4,
                                    "hypokalemia": 1.5,
                                    "dehydration": 1.4
                                },
                            
                                // Anticoagulants
                                "warfarin": {
                                    "deep vein thrombosis": 0.3,
                                    "pulmonary embolism": 0.3,
                                    "bleeding": 1.6,
                                    "bruising": 1.4,
                                    "headache": 1.2
                                },
                                "heparin": {
                                    "deep vein thrombosis": 0.3,
                                    "pulmonary embolism": 0.3,
                                    "bleeding": 1.6,
                                    "heparin-induced thrombocytopenia": 1.5
                                },
                            
                                // Proton pump inhibitors (PPIs)
                                "omeprazole": {
                                    "GERD": 0.4,
                                    "gastric ulcers": 0.5,
                                    "headache": 1.2,
                                    "diarrhea": 1.3,
                                    "nausea": 1.2
                                },
                                "pantoprazole": {
                                    "GERD": 0.4,
                                    "gastric ulcers": 0.5,
                                    "headache": 1.2,
                                    "diarrhea": 1.3,
                                    "nausea": 1.2
                                },
                            
                                    "abarelix": { "prostate cancer": 0.8, "hot flashes": 1.2, "osteoporosis": 1.15, "anaphylaxis": 1.1 },
                                    "abatacept": { "rheumatoid arthritis": 0.85, "increased infections": 1.2, "headache": 1.15, "nausea": 1.1 },
                                    "acarbose": { "type 2 diabetes": 0.8, "flatulence": 1.2, "diarrhea": 1.15, "elevated liver enzymes": 1.1 },
                                    "acebutolol": { "hypertension": 0.8, "arrhythmias": 0.75, "bronchospasm": 1.2, "fatigue": 1.15 },
                                    "acetazolamide": { "glaucoma": 0.8, "altitude sickness": 0.75, "metabolic acidosis": 1.2, "kidney stones": 1.15 },
                                    "acetylcysteine": { "acetaminophen overdose": 0.85, "bronchitis": 0.8, "anaphylactoid reactions": 1.2, "nausea": 1.15 },
                                    "acitretin": { "psoriasis": 0.85, "teratogenicity": 1.3, "hyperlipidemia": 1.2, "hepatotoxicity": 1.15 },
                                    "adalimumab": { "rheumatoid arthritis": 0.85, "psoriasis": 0.8, "increased infections": 1.2, "injection site reactions": 1.15 },
                                    "adapalene": { "acne": 0.8, "skin irritation": 1.2, "dryness": 1.15, "erythema": 1.1 },
                                    "adefovir": { "hepatitis B": 0.85, "nephrotoxicity": 1.2, "lactic acidosis": 1.15, "osteomalacia": 1.1 },
                                    "adenosine": { "paroxysmal supraventricular tachycardia": 0.85, "chest pain": 1.2, "dyspnea": 1.15, "flushing": 1.1 },
                                    "agalsidase_beta": { "Fabry disease": 0.85, "infusion reactions": 1.2, "antibody formation": 1.15, "fever": 1.1 },
                                    "albendazole": { "neurocysticercosis": 0.85, "hydatid disease": 0.8, "hepatotoxicity": 1.2, "neutropenia": 1.15 },
                                    "albuterol": { "asthma": 0.85, "COPD": 0.8, "tachycardia": 1.2, "tremor": 1.15 },
                                    "alendronate": { "osteoporosis": 0.85, "esophagitis": 1.2, "atypical femur fractures": 1.15, "osteonecrosis of the jaw": 1.1 },
                                    "alfuzosin": { "benign prostatic hyperplasia": 0.85, "orthostatic hypotension": 1.2, "dizziness": 1.15, "headache": 1.1 },
                                    "aliskiren": { "hypertension": 0.85, "hyperkalemia": 1.2, "angioedema": 1.15, "diarrhea": 1.1 },
                                    "allopurinol": { "gout": 0.85, "kidney stones": 0.8, "Stevens-Johnson syndrome": 1.3, "hepatotoxicity": 1.2 },
                                    "almotriptan": { "migraine": 0.85, "chest tightness": 1.2, "paresthesia": 1.15, "dizziness": 1.1 },
                                    "alosetron": { "irritable bowel syndrome": 0.85, "constipation": 1.2, "ischemic colitis": 1.15, "abdominal pain": 1.1 },
                                    "alprazolam": { "anxiety disorders": 0.85, "panic disorder": 0.8, "dependence": 1.3, "cognitive impairment": 1.2 },
                                    "alteplase": { "acute ischemic stroke": 0.85, "myocardial infarction": 0.8, "intracranial hemorrhage": 1.3, "anaphylaxis": 1.2 },
                                    "amantadine": { "influenza A": 0.8, "Parkinson's disease": 0.75, "hallucinations": 1.2, "peripheral edema": 1.15 },
                                    "ambrisentan": { "pulmonary arterial hypertension": 0.85, "peripheral edema": 1.2, "nasal congestion": 1.15, "hepatotoxicity": 1.1 },
                                    "amifostine": { "renal toxicity from cisplatin": 0.85, "hypotension": 1.2, "nausea": 1.15, "hypocalcemia": 1.1 },
                                    "amiloride": { "hypertension": 0.8, "congestive heart failure": 0.75, "hyperkalemia": 1.2, "gynecomastia": 1.15 },
                                    "aminocaproic_acid": { "excessive bleeding": 0.85, "thrombosis": 1.2, "myopathy": 1.15, "gastrointestinal upset": 1.1 },
                                    "amiodarone": { "ventricular arrhythmias": 0.85, "thyroid dysfunction": 1.2, "pulmonary toxicity": 1.15, "hepatotoxicity": 1.1 },
                                    "amitriptyline": { "depression": 0.85, "neuropathic pain": 0.8, "anticholinergic effects": 1.2, "weight gain": 1.15 },
                                    "amlodipine": { "hypertension": 0.85, "coronary artery disease": 0.8, "peripheral edema": 1.2, "flushing": 1.15 },
                                    "amoxapine": { "depression": 0.85, "anxiety": 0.8, "anticholinergic effects": 1.2, "weight gain": 1.15 },
                                    "amphetamine": { "attention deficit hyperactivity disorder": 0.85, "narcolepsy": 0.8, "addiction": 1.3, "cardiovascular events": 1.2 },
                                    "anagrelide": { "essential thrombocythemia": 0.85, "headache": 1.2, "palpitations": 1.15, "anemia": 1.1 },
                                    "anakinra": { "rheumatoid arthritis": 0.85, "neonatal-onset multisystem inflammatory disease": 0.8, "injection site reactions": 1.2, "increased infections": 1.15 },
                                    "anastrozole": { "breast cancer": 0.85, "hot flashes": 1.2, "arthralgia": 1.15, "osteoporosis": 1.1 },
                                    "anidulafungin": { "candidiasis": 0.85, "hepatotoxicity": 1.2, "histamine-related reactions": 1.15, "rash": 1.1 },
                                    "apixaban": { "deep vein thrombosis": 0.85, "atrial fibrillation": 0.8, "bleeding": 1.2, "hypersensitivity reactions": 1.15 },
                                    "apremilast": { "psoriatic arthritis": 0.85, "plaque psoriasis": 0.8, "diarrhea": 1.2, "depression": 1.15 },
                                    "argatroban": { "heparin-induced thrombocytopenia": 0.85, "bleeding": 1.2, "hepatic impairment": 1.15, "hypersensitivity reactions": 1.1 },
                                    "aripiprazole": { "schizophrenia": 0.85, "bipolar disorder": 0.8, "akathisia": 1.2, "weight gain": 1.15 },
                                    "armodafinil": { "narcolepsy": 0.85, "obstructive sleep apnea": 0.8, "insomnia": 1.2, "anxiety": 1.15 },
                                    "arsenic_trioxide": { "acute promyelocytic leukemia": 0.85, "QT prolongation": 1.2, "differentiation syndrome": 1.15, "hepatotoxicity": 1.1 },
                                    "artemether": { "malaria": 0.85, "neurotoxicity": 1.2, "QT prolongation": 1.15, "hepatotoxicity": 1.1 },
                                    "artesunate": { "severe malaria": 0.85, "delayed hemolysis": 1.2, "neutropenia": 1.15, "hepatotoxicity": 1.1 },
                                    "asenapine": { "schizophrenia": 0.85, "bipolar disorder": 0.8, "weight gain": 1.2, "extrapyramidal symptoms": 1.15 },
                                    "atazanavir": { "HIV": 0.85, "hyperbilirubinemia": 1.2, "nephrolithiasis": 1.15, "PR interval prolongation": 1.1 },
                                    "atomoxetine": { "attention deficit hyperactivity disorder": 0.85, "suicidal ideation": 1.2, "hepatotoxicity": 1.15, "growth suppression": 1.1 },
                                    "atorvastatin": { "hypercholesterolemia": 0.85, "cardiovascular disease prevention": 0.8, "myopathy": 1.2, "hepatotoxicity": 1.15 },
                                    "atovaquone": { "pneumocystis pneumonia": 0.85, "toxoplasmosis": 0.8, "rash": 1.2, "gastrointestinal disturbances": 1.15 },
                                    "atropine": { "bradycardia": 0.85, "organophosphate poisoning": 0.8, "anticholinergic effects": 1.2, "hyperthermia": 1.15 },
                                    "axitinib": { "renal cell carcinoma": 0.85, "hypertension": 1.2, "proteinuria": 1.15, "thyroid dysfunction": 1.1 },
                                    "azacitidine": { "myelodysplastic syndromes": 0.85, "neutropenia": 1.2, "thrombocytopenia": 1.15, "hepatotoxicity": 1.1 },
                                    "azathioprine": { "rheumatoid arthritis": 0.85, "organ transplant rejection": 0.8, "bone marrow suppression": 1.2, "hepatotoxicity": 1.15 },
                                    "azelaic_acid": { "acne": 0.85, "rosacea": 0.8, "skin irritation": 1.2, "hypopigmentation": 1.15 },
                                    "azithromycin": { "bacterial infections": 0.85, "community-acquired pneumonia": 0.8, "QT prolongation": 1.2, "hepatotoxicity": 1.15 },
                                    "bacitracin": { "skin infections": 0.85, "nephrotoxicity": 1.2, "anaphylaxis": 1.15, "contact dermatitis": 1.1 },
                                    "baclofen": { "muscle spasticity": 0.85, "multiple sclerosis": 0.8, "sedation": 1.2, "withdrawal syndrome": 1.15 },
                                    "balsalazide": { "ulcerative colitis": 0.85, "headache": 1.2, "abdominal pain": 1.15, "exacerbation of colitis": 1.1 },
                                    "basiliximab": { "organ transplant rejection": 0.85, "hypersensitivity reactions": 1.2, "increased infections": 1.15, "lymphoma": 1.1 },
                                    "bedaquiline": { "multidrug-resistant tuberculosis": 0.85, "QT prolongation": 1.2, "hepatotoxicity": 1.15, "pancreatitis": 1.1 },
                                    "benazepril": { "hypertension": 0.85, "congestive heart failure": 0.8, "angioedema": 1.2, "hyperkalemia": 1.15 },
                                    "bendamustine": { "chronic lymphocytic leukemia": 0.85, "non-Hodgkin's lymphoma": 0.8, "myelosuppression": 1.2, "infections": 1.15 },
                                    "benzonatate": { "cough": 0.85, "hypersensitivity reactions": 1.2, "chest tightness": 1.15, "dizziness": 1.1 },
                                    "benztropine": { "Parkinson's disease": 0.85, "drug-induced extrapyramidal symptoms": 0.8, "anticholinergic effects": 1.2, "cognitive impairment": 1.15 },
                                    "bepridil": { "chronic stable angina": 0.85, "QT prolongation": 1.2, "ventricular arrhythmias": 1.15, "hepatotoxicity": 1.1 },
                                    "betamethasone": { "inflammatory conditions": 0.85, "adrenal suppression": 1.2, "osteoporosis": 1.15, "hyperglycemia": 1.1 },
                                    "betaxolol": { "hypertension": 0.85, "glaucoma": 0.8, "bronchospasm": 1.2, "bradycardia": 1.15 },
                                    "bethanechol": { "urinary retention": 0.85, "neurogenic bladder": 0.8, "gastrointestinal disturbances": 1.2, "bronchospasm": 1.15 },
                                    "bexarotene": { "cutaneous T-cell lymphoma": 0.85, "hyperlipidemia": 1.2, "hypothyroidism": 1.15, "pancreatitis": 1.1 },
                                    "bezafibrate": { "hyperlipidemia": 0.85, "myopathy": 1.2, "cholelithiasis": 1.15, "hepatotoxicity": 1.1 },
                                    "bicalutamide": { "prostate cancer": 0.85, "gynecomastia": 1.2, "hepatotoxicity": 1.15, "hot flashes": 1.1 },
                                    "bilastine": { "allergic rhinitis": 0.85, "urticaria": 0.8, "sedation": 1.15, "QT prolongation": 1.1 },
                                
                                    // ... (previous drug types)
                                
                                    "Minocycline": {
                                        "pseudotumor cerebri": 1.2, // Increases pseudotumor cerebri likelihood
                                        "hepatotoxicity": 1.1, // Increases hepatotoxicity likelihood
                                        "esophagitis": 1.2, // Increases esophagitis likelihood
                                        "autoimmune disorders": 1.1 // Increases autoimmune disorders likelihood
                                    },
                                    "Ciprofloxacin": {
                                        "tendinitis": 1.2, // Increases tendinitis likelihood
                                        "tendon rupture": 1.1, // Increases tendon rupture likelihood
                                        "QT prolongation": 1.2, // Increases QT prolongation likelihood
                                        "seizures": 1.1 // Increases seizures likelihood
                                    },
                                    "Norfloxacin": {
                                        "tendinitis": 1.2, // Increases tendinitis likelihood
                                        "tendon rupture": 1.1, // Increases tendon rupture likelihood
                                        "QT prolongation": 1.2, // Increases QT prolongation likelihood
                                        "seizures": 1.1 // Increases seizures likelihood
                                    },
                                    "Ofloxacin": {
                                        "tendinitis": 1.2, // Increases tendinitis likelihood
                                        "tendon rupture": 1.1, // Increases tendon rupture likelihood
                                        "QT prolongation": 1.2, // Increases QT prolongation likelihood
                                        "seizures": 1.1 // Increases seizures likelihood
                                    },
                                    "Levofloxacin": {
                                        "tendinitis": 1.2, // Increases tendinitis likelihood
                                        "tendon rupture": 1.1, // Increases tendon rupture likelihood
                                        "QT prolongation": 1.2, // Increases QT prolongation likelihood
                                        "seizures": 1.1 // Increases seizures likelihood
                                    },
                                    "Moxifloxacin": {
                                        "tendinitis": 1.2, // Increases tendinitis likelihood
                                        "tendon rupture": 1.1, // Increases tendon rupture likelihood
                                        "QT prolongation": 1.2, // Increases QT prolongation likelihood
                                        "seizures": 1.1 // Increases seizures likelihood
                                    },
                                    "Gatifloxacin": {
                                        "tendinitis": 1.2, // Increases tendinitis likelihood
                                        "tendon rupture": 1.1, // Increases tendon rupture likelihood
                                        "QT prolongation": 1.2, // Increases QT prolongation likelihood
                                        "seizures": 1.1 // Increases seizures likelihood
                                    },
                                    "Gemifloxacin": {
                                        "tendinitis": 1.2, // Increases tendinitis likelihood
                                        "tendon rupture": 1.1, // Increases tendon rupture likelihood
                                        "QT prolongation": 1.2, // Increases QT prolongation likelihood
                                        "seizures": 1.1 // Increases seizures likelihood
                                    },
                                    "Azithromycin": {
                                        "hepatotoxicity": 1.2, // Increases hepatotoxicity likelihood
                                        "QT prolongation": 1.1, // Increases QT prolongation likelihood
                                        "cardiac arrhythmias": 1.2, // Increases cardiac arrhythmias likelihood
                                        "allergic reactions": 1.1 // Increases allergic reactions likelihood
                                    },
                                    "Clarithromycin": {
                                        "hepatotoxicity": 1.2, // Increases hepatotoxicity likelihood
                                        "QT prolongation": 1.1, // Increases QT prolongation likelihood
                                        "cardiac arrhythmias": 1.2, // Increases cardiac arrhythmias likelihood
                                        "allergic reactions": 1.1 // Increases allergic reactions likelihood
                                    },
                                    "Erythromycin": {
                                        "hepatotoxicity": 1.2, // Increases hepatotoxicity likelihood
                                        "QT prolongation": 1.1, // Increases QT prolongation likelihood
                                        "cardiac arrhythmias": 1.2, // Increases cardiac arrhythmias likelihood
                                        "allergic reactions": 1.1 // Increases allergic reactions likelihood
                                    },
                                    
                                        // Antibiotics
                                        "amoxicillin": {
                                            "upper respiratory tract infections": 0.3,
                                            "otitis media": 0.4,
                                            "sinusitis": 0.4,
                                            "diarrhea": 1.3,
                                            "rash": 1.2
                                        },
                                        "ciprofloxacin": {
                                            "urinary tract infections": 0.3,
                                            "bacterial diarrhea": 0.3,
                                            "prostatitis": 0.4,
                                            "tendonitis": 1.5,
                                            "nausea": 1.2
                                        },
                                        "ceftriaxone": {
                                            "pneumonia": 0.3,
                                            "gonorrhea": 0.4,
                                            "bacterial meningitis": 0.3,
                                            "rash": 1.2,
                                            "thrombophlebitis": 1.4
                                        },
                                        "doxycycline": {
                                            "malaria prophylaxis": 0.3,
                                            "acne": 0.4,
                                            "lyme disease": 0.4,
                                            "photosensitivity": 1.4,
                                            "nausea": 1.2
                                        },
                                        "azithromycin": {
                                            "chlamydia": 0.3,
                                            "bacterial pneumonia": 0.4,
                                            "traveler's diarrhea": 0.3,
                                            "nausea": 1.2,
                                            "abdominal pain": 1.2
                                        },
                                        "metronidazole": {
                                            "bacterial vaginosis": 0.4,
                                            "trichomoniasis": 0.4,
                                            "amoebiasis": 0.3,
                                            "metallic taste": 1.3,
                                            "nausea": 1.2
                                        },
                                        "clarithromycin": {
                                            "peptic ulcer disease": 0.3,
                                            "pneumonia": 0.4,
                                            "sinusitis": 0.4,
                                            "nausea": 1.2,
                                            "diarrhea": 1.3
                                        },
                                    
                                        // Antifungals
                                        "itraconazole": {
                                            "histoplasmosis": 0.3,
                                            "aspergillosis": 0.4,
                                            "candidiasis": 0.4,
                                            "hepatotoxicity": 1.4,
                                            "nausea": 1.2
                                        },
                                        "ketoconazole": {
                                            "dermatophytosis": 0.4,
                                            "candidiasis": 0.4,
                                            "tinea infections": 0.4,
                                            "hepatotoxicity": 1.5,
                                            "nausea": 1.2
                                        },
                                    
                                        // Antiretroviral drugs (ARVs)
                                        "zidovudine": {
                                            "HIV/AIDS": 0.3,
                                            "bone marrow suppression": 1.5,
                                            "anemia": 1.4,
                                            "nausea": 1.3,
                                            "fatigue": 1.2
                                        },
                                        "nevirapine": {
                                            "HIV/AIDS": 0.3,
                                            "hepatotoxicity": 1.5,
                                            "rash": 1.4,
                                            "fatigue": 1.3
                                        },
                                        "lopinavir/ritonavir": {
                                            "HIV/AIDS": 0.3,
                                            "diarrhea": 1.3,
                                            "hyperlipidemia": 1.4,
                                            "nausea": 1.2
                                        },
                                    
                                        // Antimalarial drugs
                                        "mefloquine": {
                                            "malaria prophylaxis": 0.3,
                                            "malaria": 0.3,
                                            "psychosis": 1.5,
                                            "dizziness": 1.3,
                                            "nausea": 1.2
                                        },
                                        "proguanil": {
                                            "malaria prophylaxis": 0.3,
                                            "malaria": 0.3,
                                            "mouth ulcers": 1.3,
                                            "diarrhea": 1.2
                                        },
                                    
                                        // Antihypertensives
                                        "amlodipine": {
                                            "hypertension": 0.3,
                                            "angina": 0.4,
                                            "peripheral edema": 1.4,
                                            "dizziness": 1.3,
                                            "fatigue": 1.2
                                        },
                                        "losartan": {
                                            "hypertension": 0.3,
                                            "heart failure": 0.4,
                                            "hyperkalemia": 1.4,
                                            "dizziness": 1.3
                                        },
                                        "nifedipine": {
                                            "hypertension": 0.3,
                                            "angina": 0.4,
                                            "headache": 1.3,
                                            "dizziness": 1.2,
                                            "flushing": 1.2
                                        },
                                    
                                        // Antidiabetic drugs
                                        "glipizide": {
                                            "type 2 diabetes": 0.3,
                                            "hypoglycemia": 1.5,
                                            "weight gain": 1.3,
                                            "nausea": 1.2
                                        },
                                        "sitagliptin": {
                                            "type 2 diabetes": 0.3,
                                            "pancreatitis": 1.5,
                                            "nasopharyngitis": 1.3,
                                            "headache": 1.2
                                        },
                                    
                                        // Antidiarrheal drugs
                                        "diphenoxylate": {
                                            "diarrhea": 0.4,
                                            "constipation": 1.4,
                                            "drowsiness": 1.3,
                                            "dry mouth": 1.2
                                        },
                                    
                                        // Antiepileptic drugs
                                        "levetiracetam": {
                                            "epilepsy": 0.3,
                                            "fatigue": 1.3,
                                            "dizziness": 1.2,
                                            "mood changes": 1.4
                                        },
                                        "phenytoin": {
                                            "epilepsy": 0.3,
                                            "gingival hyperplasia": 1.5,
                                            "nystagmus": 1.4,
                                            "rash": 1.2
                                        },
                                        "topiramate": {
                                            "epilepsy": 0.3,
                                            "migraine prophylaxis": 0.4,
                                            "weight loss": 1.3,
                                            "nausea": 1.2
                                        },
                                    
                                        // Corticosteroids
                                        "methylprednisolone": {
                                            "inflammatory conditions": 0.4,
                                            "asthma": 0.4,
                                            "rheumatoid arthritis": 0.4,
                                            "osteoporosis": 1.5,
                                            "hyperglycemia": 1.4
                                        },
                                    
                                        // Bronchodilators
                                        "salbutamol": {
                                            "asthma": 0.4,
                                            "chronic obstructive pulmonary disease (COPD)": 0.4,
                                            "tremor": 1.3,
                                            "tachycardia": 1.4
                                        },
                                        "ipratropium": {
                                            "COPD": 0.4,
                                            "asthma": 0.4,
                                            "dry mouth": 1.3,
                                            "cough": 1.2
                                        },
                                    
                                        // Antidepressants
                                        "fluoxetine": {
                                            "depression": 0.4,
                                            "anxiety disorders": 0.4,
                                            "insomnia": 1.3,
                                            "nausea": 1.2,
                                            "sexual dysfunction": 1.4
                                        },
                                        "sertraline": {
                                            "depression": 0.4,
                                            "panic disorder": 0.4,
                                            "nausea": 1.2,
                                            "diarrhea": 1.2,
                                            "sexual dysfunction": 1.4
                                        },
                                        "amitriptyline": {
                                            "depression": 0.4,
                                            "neuropathic pain": 0.4,
                                            "drowsiness": 1.3,
                                            "dry mouth": 1.2,
                                            "weight gain": 1.3
                                        },
                                    
                                        // Antipsychotic drugs
                                        "haloperidol": {
                                            "schizophrenia": 0.3,
                                            "psychosis": 0.3,
                                            "extrapyramidal symptoms": 1.5,
                                            "sedation": 1.3
                                        },
                                        "risperidone": {
                                            "schizophrenia": 0.3,
                                            "bipolar disorder": 0.4,
                                            "weight gain": 1.3,
                                            "sedation": 1.2
                                        },
                                    
                                        // Antiemetic drugs
                                        "ondansetron": {
                                            "nausea": 0.4,
                                            "vomiting": 0.4,
                                            "headache": 1.2,
                                            "constipation": 1.3
                                        },
                                        "metoclopramide": {
                                            "nausea": 0.4,
                                            "vomiting": 0.4,
                                            "diarrhea": 1.3,
                                            "drowsiness": 1.2
                                        }
                                    };
                                    

// Function to remove duplicates
const removeDuplicateKeys = (obj) => {
    const result = {};

    for (const key in obj) {
        if (result[key]) {
            // Merge the nested objects
            result[key] = { ...result[key], ...obj[key] };
        } else {
            result[key] = obj[key];
        }
    }

    return result;
};

// Usage
const cleanedData = removeDuplicateKeys(drugHistoryWeights);
console.log(cleanedData);