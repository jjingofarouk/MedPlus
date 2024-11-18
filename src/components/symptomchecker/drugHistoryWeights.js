const drugHistoryWeights = {
    "antimalarial": {
        "malaria": 0.5, 
        "typhoid fever": 1, 
        "dengue fever": 1,  
    },
    "antibiotics": {
        "malaria": 1.2, 
        "typhoid fever": 0.8, 
        "pneumonia": 0.6 
    },
    "antiviral": {
        "COVID-19": 0.7, 
        "influenza": 0.8  
    },
    "painkillers": {
        "headache": 0.9, 
        "back pain": 0.8 
    },
    "antihistamines": {
        "allergies": 0.6, 
        "hives": 0.7 
    },
    "steroids": {
        "asthma": 0.8, 
        "arthritis": 0.9 
    },
    "anti-inflammatory": {
        "rheumatoid arthritis": 0.7, 
        "psoriasis": 0.8 
    },
    "anticoagulants": {
        "deep vein thrombosis": 0.6, 
        "pulmonary embolism": 0.7 
    },
    "anticonvulsants": {
        "epilepsy": 0.8, 
        "seizures": 0.9 
    },
    "muscle relaxants": {
        "muscle strain": 0.7, 
        "fibromyalgia": 0.8 
    },
    "bronchodilators": {
        "chronic obstructive pulmonary disease (COPD)": 0.6, 
        "emphysema": 0.7 
    },
    "anti-anxiety": {
        "anxiety disorder": 0.8, 
        "panic disorder": 0.9 
    },
    "antidepressants": {
        "depression": 0.7, 
        "bipolar disorder": 0.8 
    },
    "anti-diabetic": {
        "type 1 diabetes": 0.6, 
        "type 2 diabetes": 0.7 
    },
    "anti-hypertensive": {
        "hypertension": 0.8, 
        "heart failure": 0.9 
    },
    "anti-asthmatic": {
        "asthma": 0.7, 
        "chronic bronchitis": 0.8 
    },
    
    

    "anti-ulcer": {
        "peptic ulcer": 0.6, 
        "gastroesophageal reflux disease (GERD)": 0.7 
    },
    "anti-gout": {
        "gout": 0.8, 
        "hyperuricemia": 0.9 
    },
    "anti-thyroid": {
        "hyperthyroidism": 0.7, 
        "hypothyroidism": 0.8 
    },
    "anti-Parkinson's": {
        "Parkinson's disease": 0.8, 
        "dystonia": 0.9 
    },
    "anti-Alzheimer's": {
        "Alzheimer's disease": 0.7, 
        "dementia": 0.8 
    },
    "anti-osteoporosis": {
        "osteoporosis": 0.8, 
        "osteopenia": 0.9 
    },
    "anti-glaucoma": {
        "glaucoma": 0.7, 
        "cataracts": 0.8 
    },
    "anti-migraine": {
        "migraine": 0.8, 
        "cluster headache": 0.9 
    },
    "anti-ADD/ADHD": {
        "attention deficit hyperactivity disorder (ADD/ADHD)": 0.7, 
        "narcissistic personality disorder": 0.8 
    },
    "anti-schizophrenia": {
        "schizophrenia": 0.8, 
        "bipolar disorder": 0.9 
    },
    
      
        "allopurinol": {
            "gout": 0.8,
            "hyperuricemia": 0.9
        },
        "levothyroxine": {
            "hypothyroidism": 0.7,
            "goiter": 0.8
        },
       
        "donepezil": {
            "Alzheimer's disease": 0.7,
            "dementia": 0.8
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
      
        "etanercept": {
            "rheumatoid arthritis": 0.8,
            "psoriatic arthritis": 0.9
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
      
    
        "oseltamivir": {
            "influenza A": 0.7,
            "influenza B": 0.8
        },
     
        "zolpidem": {
            "insomnia": 0.7,
            "sleep-wake cycle disruption": 0.8
        },
        "alprazolam": {
            "generalized anxiety disorder": 0.8,
            "panic disorder": 0.9
        },
      
        "interferon beta-1a": {
            "multiple sclerosis": 0.8,
            "clinically isolated syndrome": 0.9
        },
        "sildenafil": {
            "erectile dysfunction": 0.7,
            "pulmonary arterial hypertension": 0.8
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
     
     
        "lenalidomide": {
            "multiple myeloma": 0.8,
            "myelodysplastic syndromes": 0.9
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
      
        "rifabutin": {
            "mycobacterium avium complex": 0.8,
            "tuberculosis": 0.9
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
            
      
        
            "gliclazide": {
                "type 2 diabetes": 0.7,
                "hypoglycemia": 1.4
            },
         
        
        
            
            "atorvastatin": {
                "hypercholesterolemia": 0.6,
                "cardiovascular disease": 0.7,
                "myopathy": 1.3,
                "liver dysfunction": 1.2
            },
         
        
          
            "rivaroxaban": {
                "atrial fibrillation": 0.75,
                "pulmonary embolism": 0.7,
                "gastrointestinal bleeding": 1.4
            },
        
         
         
            "bupropion": {
                "major depressive disorder": 0.7,
                "seasonal affective disorder": 0.75,
                "seizures": 1.4
            },
        
            
            "olanzapine": {
                "schizophrenia": 0.7,
                "bipolar disorder": 0.75,
                "weight gain": 1.6,
                "diabetes": 1.3
            },
            
        
            
            "lamotrigine": {
                "epilepsy": 0.7,
                "bipolar disorder": 0.75,
                "Stevens-Johnson syndrome": 1.3
            },
   
         
            
            "esomeprazole": {
                "gastroesophageal reflux disease": 0.6,
                "peptic ulcer": 0.7,
                "Clostridium difficile infection": 1.3,
                "osteoporosis": 1.2
            },
        
        
         
            "amoxicillin": {
                "strep throat": 0.7,
                "pneumonia": 0.75,
                "Clostridium difficile infection": 1.4
            },
        
            
         
            "budesonide": {
                "Crohn's disease": 0.75,
                "ulcerative colitis": 0.7,
                "oral candidiasis": 1.3
            },
        
            
           
            "tiotropium": {
                "chronic obstructive pulmonary disease": 0.7,
                "asthma": 0.8,
                "urinary retention": 1.2
            },
        
            
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
        

            "terbinafine": {
                "onychomycosis": 0.7,
                "tinea corporis": 0.75,
                "liver failure": 1.2,
                "taste disturbance": 1.3
            },
        
         
   
            "mycophenolate": {
                "kidney transplant rejection": 0.65,
                "lupus nephritis": 0.7,
                "progressive multifocal leukoencephalopathy": 1.2
            },
        
        
         
            
        
            "rituximab": {
                "non-Hodgkin's lymphoma": 0.6,
                "rheumatoid arthritis": 0.7,
                "progressive multifocal leukoencephalopathy": 1.3
            },
        
            
         
            "propylthiouracil": {
                "hyperthyroidism": 0.75,
                "thyroid storm": 0.7,
                "liver failure": 1.4
            },
        
            
      
            
       
            "digoxin": {
                "atrial fibrillation": 0.75,
                "heart failure": 0.7,
                "digitalis toxicity": 1.5
            },
        
         
            "pramipexole": {
                "Parkinson's disease": 0.7,
                "restless legs syndrome": 0.75,
                "impulse control disorders": 1.3
            },
        
            
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
        
            
            "dabigatran": {
                "atrial fibrillation": 0.7,
                "deep vein thrombosis": 0.75,
                "gastrointestinal bleeding": 1.4
            },
           
            
          
            "febuxostat": {
                "gout": 0.75,
                "hyperuricemia": 0.7,
                "cardiovascular events": 1.2
            },
        
          
            "zoledronic acid": {
                "osteoporosis": 0.75,
                "bone metastases": 0.7,
                "hypocalcemia": 1.3
            },
        
         
            "efavirenz": {
                "HIV infection": 0.75,
                "neuropsychiatric side effects": 1.4,
                "lipodystrophy": 1.2
            },
        
            
         
            "acitretin": {
                "psoriasis": 0.75,
                "lichen planus": 0.7,
                "teratogenicity": 1.5,
                "hyperlipidemia": 1.3
            },
        
         
            "valproic acid": {
                "epilepsy": 0.75,
                "bipolar disorder": 0.7,
                "hepatotoxicity": 1.4,
                "neural tube defects": 1.5
            },
        
            
            "chloroquine": {
                "malaria": 0.7,
                "lupus erythematosus": 0.75,
                "retinopathy": 1.3,
                "cardiomyopathy": 1.2
            },
           
            
                "Oral Contraceptives": {
                    "deep vein thrombosis": 1.2, 
                    "pulmonary embolism": 1.3, 
                    "stroke": 1.1, 
                    "myocardial infarction": 1.2 
                },
                "Hormone Replacement Therapy (HRT)": {
                    "breast cancer": 1.1, 
                    "endometrial cancer": 1.2, 
                    "stroke": 1.1, 
                    "venous thromboembolism": 1.3 
                },
                "Corticosteroids": {
                    "osteoporosis": 1.2, 
                    "glaucoma": 1.1, 
                    "hypertension": 1.1, 
                    "diabetes": 1.2 
                },
                "Thiazolidinediones": {
                    "heart failure": 1.2, 
                    "myocardial infarction": 1.1, 
                    "stroke": 1.1, 
                    "fractures": 1.2 
                },
                "Selective Serotonin Reuptake Inhibitors (SSRIs)": {
                    "bleeding disorders": 1.1, 
                    "osteoporosis": 1.2, 
                    "hyponatremia": 1.1, 
                    "suicidal thoughts": 1.2 
                },
                "Nonsteroidal Anti-Inflammatory Drugs (NSAIDs)": {
                    "peptic ulcer": 1.2, 
                    "gastrointestinal bleeding": 1.3, 
                    "hypertension": 1.1, 
                    "kidney disease": 1.2 
                },
            
                "Angiotensin-Converting Enzyme (ACE) Inhibitors": {
                    "cough": 1.1, 
                    "angioedema": 1.2, 
                    "hyperkalemia": 1.1, 
                    "renal failure": 1.2 
                },
                "Calcium Channel Blockers": {
                    "edema": 1.1, 
                    "constipation": 1.2, 
                    "bradycardia": 1.1, 
                    "heart block": 1.2 
                },
                "Statins": {
                    "myopathy": 1.1, 
                    "rhabdomyolysis": 1.2, 
                    "liver damage": 1.1, 
                    "diabetes": 1.2 
                },
                "Proton Pump Inhibitors (PPIs)": {
                    " Clostridioides difficile infection": 1.2, 
                    "pneumonia": 1.1, 
                    "osteoporosis": 1.2, 
                    "vitamin B12 deficiency": 1.1 
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
                  
                    "clopidogrel": {
                        "acute coronary syndrome": 0.7,
                        "stroke prevention": 0.75,
                        "peripheral artery disease": 0.8,
                        "bleeding": 1.4,
                        "thrombotic thrombocytopenic purpura": 1.2
                    },
                  
              
               
                    
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
                
           
                    "montelukast": {
                        "asthma": 0.75,
                        "allergic rhinitis": 0.8,
                        "neuropsychiatric events": 1.2,
                        "Churg-Strauss syndrome": 1.1
                    },
                
                    
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
                
                    
                    "tacrolimus (topical)": {
                        "atopic dermatitis": 0.7,
                        "vitiligo": 0.75,
                        "skin cancer": 1.2,
                        "lymphoma": 1.1
                    },
                
                    
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
                
               
                    "tamsulosin": {
                        "benign prostatic hyperplasia": 0.7,
                        "urinary retention": 0.75,
                        "orthostatic hypotension": 1.3,
                        "intraoperative floppy iris syndrome": 1.2
                    },
                
                    
                    "clomiphene": {
                        "ovulation induction": 0.7,
                        "male infertility": 0.75,
                        "ovarian hyperstimulation syndrome": 1.3,
                        "multiple pregnancies": 1.2
                    },
                
                    
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
                
                    
               
                    
                    "influenza vaccine": {
                        "influenza prevention": 0.6,
                        "Guillain-Barré syndrome": 1.1
                    },
                    "human papillomavirus vaccine": {
                        "cervical cancer prevention": 0.6,
                        "genital warts prevention": 0.65,
                        "syncope": 1.1
                    },
                
                    
                
                    "praziquantel": {
                        "schistosomiasis": 0.7,
                        "tapeworm infections": 0.75,
                        "neurocysticercosis": 0.8,
                        "dizziness": 1.2
                    },
           
                    
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
                
                    
                    "teriparatide": {
                        "osteoporosis": 0.7,
                        "glucocorticoid-induced osteoporosis": 0.75,
                        "osteosarcoma": 1.2,
                        "hypercalcemia": 1.1
                    },

                        "Antipsychotics": {
                            "weight gain": 1.2, 
                            "diabetes": 1.1, 
                            "dyslipidemia": 1.2, 
                            "cardiovascular disease": 1.1 
                        },
                        "Benzodiazepines": {
                            "dependence": 1.2, 
                            "withdrawal symptoms": 1.1, 
                            "cognitive impairment": 1.2, 
                            "falls": 1.1 
                        },
                        "Tricyclic Antidepressants (TCAs)": {
                            "suicidal thoughts": 1.2, 
                            "seizures": 1.1, 
                            "arrhythmias": 1.2, 
                            "anticholinergic effects": 1.1 
                        },
                        "Monoamine Oxidase Inhibitors (MAOIs)": {
                            "hypertensive crisis": 1.2, 
                            "serotonin syndrome": 1.1, 
                            "liver damage": 1.2, 
                            "weight gain": 1.1 
                        },
                        "Loop Diuretics": {
                            "hypokalemia": 1.2, 
                            "hyponatremia": 1.1, 
                            "ototoxicity": 1.2, 
                            "gout": 1.1 
                        },
                        "Thiazide Diuretics": {
                            "hypokalemia": 1.2, 
                            "hyperglycemia": 1.1, 
                            "hyperlipidemia": 1.2, 
                            "erectile dysfunction": 1.1 
                        },
                        "Potassium-Sparing Diuretics": {
                            "hyperkalemia": 1.2, 
                            "gynecomastia": 1.1, 
                            "impotence": 1.2, 
                            "diarrhea": 1.1 
                        },
                        "Alpha-Blockers": {
                            "orthostatic hypotension": 1.2, 
                            "dizziness": 1.1, 
                            "fatigue": 1.2, 
                            "nasal congestion": 1.1 
                        },
                        "Beta-2 Agonists": {
                            "tremors": 1.2, 
                            "anxiety": 1.1, 
                            "insomnia": 1.2, 
                            "palpitations": 1.1 
                        },
                        "Inhaled Corticosteroids": {
                            "oral thrush": 1.2, 
                            "hoarseness": 1.1, 
                            "candidiasis": 1.2, 
                            "adrenal insufficiency": 1.1 
                        },
                        "Leukotriene Modifiers": {
                            "Churg-Strauss syndrome": 1.2, 
                            "eosinophilic granuloma": 1.1, 
                            "hypereosinophilia": 1.2, 
                            "vasculitis": 1.1 
                        },
                            "escitalopram": { "major depressive disorder": 0.8, "generalized anxiety disorder": 0.75, "sexual dysfunction": 1.25, "hyponatremia": 1.1 },
                            "warfarin": { "atrial fibrillation": 0.7, "deep vein thrombosis": 0.75, "bleeding": 1.4, "osteoporosis": 1.1 },
                            "pregabalin": { "neuropathic pain": 0.8, "fibromyalgia": 0.75, "dizziness": 1.2, "weight gain": 1.15 },
                            "sitagliptin": { "type 2 diabetes": 0.8, "pancreatitis": 1.15, "joint pain": 1.1, "nasopharyngitis": 1.05 },
                            "rosuvastatin": { "high cholesterol": 0.7, "atherosclerosis": 0.75, "myopathy": 1.2, "liver damage": 1.15 },
                            "vortioxetine": { "major depressive disorder": 0.8, "nausea": 1.25, "sexual dysfunction": 1.15, "serotonin syndrome": 1.1 },
                            "apixaban": { "atrial fibrillation": 0.75, "deep vein thrombosis": 0.8, "bleeding": 1.3, "liver injury": 1.05 },
                        
                     
                            "Angiotensin Receptor Blockers (ARBs)": {
                                "dizziness": 1.2, 
                                "hypotension": 1.1, 
                                "hyperkalemia": 1.2, 
                                "cough": 1.1 
                            },
                         
                            "Direct Renin Inhibitors": {
                                "hyperkalemia": 1.2, 
                                "cough": 1.1, 
                                "dizziness": 1.2, 
                                "angioedema": 1.1 
                            },
                            "Beta-Blockers": {
                                "bradycardia": 1.2, 
                                "fatigue": 1.1, 
                                "dizziness": 1.2, 
                                "impotence": 1.1 
                            },
                            "Alpha-2 Agonists": {
                                "sedation": 1.2, 
                                "dizziness": 1.1, 
                                "dry mouth": 1.2, 
                                "constipation": 1.1 
                            },
                            "Cholinesterase Inhibitors": {
                                "nausea": 1.2, 
                                "vomiting": 1.1, 
                                "diarrhea": 1.2, 
                                "abdominal pain": 1.1 
                            },
                            "Muscle Relaxants": {
                                "drowsiness": 1.2, 
                                "dizziness": 1.1, 
                                "headache": 1.2, 
                                "nausea": 1.1 
                            },
                            "Anticholinergics": {
                                "dry mouth": 1.2, 
                                "constipation": 1.1, 
                                "urinary retention": 1.2, 
                                "blurred vision": 1.1 
                            },
                            "Cyclophosphamide": {
                                "neutropenia": 1.2, 
                                "anemia": 1.1, 
                                "thrombocytopenia": 1.2, 
                                "hemorrhagic cystitis": 1.1 
                            },
                          
                            "Azathioprine": {
                                "neutropenia": 1.2, 
                                "anemia": 1.1, 
                                "thrombocytopenia": 1.2, 
                                "liver toxicity": 1.1 
                            },
                                
                                "dicyclomine": {
                                    "irritable bowel syndrome": 0.7,
                                    "abdominal cramps": 0.75,
                                    "urinary retention": 1.3,
                                    "blurred vision": 1.2
                                },
                                
                              
                             
                                "doxycycline": {
                                    "malaria": 0.8,
                                    "lyme disease": 0.6,
                                    "acne": 0.5,
                                    "photosensitivity": 1.4,
                                    "gastrointestinal issues": 1.2
                                },
                                
                      
                                
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
                                "penicillin": {
                                    "urticaria": 1.7,
                                    "joint pain": 1.5,
                                    "diarrhoea": 1.3,
                                    "rashes": 1.6,
                                    "anaphylaxis": 1.6
                                },

                            
                                
                      
                                "diphenhydramine": {
                                    "allergic reaction": 0.5,
                                    "motion sickness": 0.6,
                                    "drowsiness": 1.5,
                                    "dry mouth": 1.3,
                                    "confusion": 1.4
                                },
                                
                              
                                "pantoprazole": {
                                    "GERD": 0.4,
                                    "peptic ulcer": 0.5,
                                    "headache": 1.2,
                                    "nausea": 1.2,
                                    "bone fractures": 1.5
                                },
                                
                          
                                
                                
                                "haloperidol": {
                                    "schizophrenia": 0.4,
                                    "psychosis": 0.4,
                                    "tardive dyskinesia": 1.5,
                                    "akathisia": 1.4,
                                    "sedation": 1.2
                                },
                          
                                "insulin": {
                                    "type 1 diabetes": 0.2,
                                    "type 2 diabetes": 0.3,
                                    "hypoglycemia": 1.8,
                                    "weight gain": 1.3,
                                    "lipodystrophy": 1.4
                                },
                                
                             
                                "spironolactone": {
                                    "heart failure": 0.5,
                                    "hypertension": 0.6,
                                    "hyperkalemia": 1.6,
                                    "gynecomastia": 1.4,
                                    "nausea": 1.2
                                },
                                
                                
                             
                                "dexamethasone": {
                                    "cerebral edema": 0.4,
                                    "allergic reaction": 0.5,
                                    "hyperglycemia": 1.4,
                                    "osteoporosis": 1.5,
                                    "insomnia": 1.2
                                },
                                
                              
                                "heparin": {
                                    "deep vein thrombosis": 0.3,
                                    "pulmonary embolism": 0.3,
                                    "thrombocytopenia": 1.6,
                                    "bleeding": 1.7
                                },
                                
                                
                              
                                "propranolol": {
                                    "hypertension": 0.4,
                                    "migraine": 0.5,
                                    "bradycardia": 1.3,
                                    "fatigue": 1.2,
                                    "dizziness": 1.1
                                },
                                
                           
                                "simvastatin": {
                                    "hyperlipidemia": 0.3,
                                    "cardiovascular disease": 0.4,
                                    "muscle pain": 1.3,
                                    "liver toxicity": 1.4,
                                    "nausea": 1.2
                                },
                                
                               
                                "methimazole": {
                                    "hyperthyroidism": 0.3,
                                    "agranulocytosis": 1.6,
                                    "rash": 1.3,
                                    "hepatotoxicity": 1.5
                                },
                                

                                
                                    "alendronate": { "osteoporosis": 0.65, "esophageal irritation": 1.1, "atypical femur fracture": 1.15, "jaw osteonecrosis": 1.05 },
                                    "lisinopril": { "hypertension": 0.75, "angioedema": 1.2, "hyperkalemia": 1.15, "cough": 1.4 },
                                    "gabapentin": { "epilepsy": 0.7, "neuropathic pain": 0.75, "dizziness": 1.3, "weight gain": 1.2 },
                                    "methotrexate": { "rheumatoid arthritis": 0.75, "psoriasis": 0.8, "liver toxicity": 1.3, "bone marrow suppression": 1.25 },
                                    "hydrocodone": { "severe pain": 0.85, "cough suppression": 0.8, "constipation": 1.3, "respiratory depression": 1.4 },
                                    "losartan": { "hypertension": 0.75, "diabetic nephropathy": 0.8, "hyperkalemia": 1.15, "dizziness": 1.1 },
                                    "insulin glargine": { "type 1 diabetes": 0.85, "type 2 diabetes": 0.8, "hypoglycemia": 1.3, "weight gain": 1.2 },
                                    "duloxetine": { "major depressive disorder": 0.75, "generalized anxiety disorder": 0.8, "nausea": 1.2, "sexual dysfunction": 1.25 },
                                    "venlafaxine": { "major depressive disorder": 0.75, "generalized anxiety disorder": 0.8, "hypertension": 1.2, "withdrawal symptoms": 1.3 },
                                    "empagliflozin": { "type 2 diabetes": 0.8, "heart failure": 0.75, "urinary tract infections": 1.2, "diabetic ketoacidosis": 1.15 },
                                    "tofacitinib": { "rheumatoid arthritis": 0.75, "ulcerative colitis": 0.8, "infections": 1.3, "malignancy": 1.1 },
                                    "albendazole": { "intestinal worms": 0.8, "nausea": 1.15, "abdominal pain": 1.1, "dizziness": 1.05 },
                                    "metoclopramide": { "nausea": 0.75, "vomiting": 0.8, "extrapyramidal symptoms": 1.3, "tardive dyskinesia": 1.2 },
                                    "zinc_sulfate": { "diarrhea in children": 0.75, "common cold": 0.7, "nausea": 1.15, "abdominal cramps": 1.1 },
                                    "cotrimoxazole": { "pneumocystis pneumonia": 0.8, "urinary tract infections": 0.75, "rash": 1.2, "bone marrow suppression": 1.15 },
                                    "misoprostol": { "postpartum hemorrhage": 0.75, "gastric ulcers": 0.8, "diarrhea": 1.3, "abdominal pain": 1.2 },
                                    "diethylcarbamazine": { "lymphatic filariasis": 0.8, "loiasis": 0.75, "fever": 1.2, "headache": 1.15 },
                                    "artesunate": { "severe malaria": 0.85, "neutropenia": 1.2, "anemia": 1.15, "hepatotoxicity": 1.1 },
                                    "rifampicin": { "tuberculosis": 0.75, "leprosy": 0.8, "hepatotoxicity": 1.3, "drug interactions": 1.25 },
                                    "mebendazole": { "intestinal worms": 0.8, "abdominal pain": 1.15, "diarrhea": 1.1, "dizziness": 1.05 },
                                    "fluconazole": { "fungal infections": 0.8, "cryptococcal meningitis": 0.75, "nausea": 1.15, "hepatotoxicity": 1.2 },
                                    "ampicillin": { "bacterial infections": 0.8, "colitis": 0.8, "urticaria": 1.1, "rash": 1.2, "diarrhea": 1.15, "nausea": 1.1 },
                                    "diazepam": { "anxiety": 0.75, "alcohol withdrawal": 0.8, "drowsiness": 1.3, "dependence": 1.25 },
                                    "gentamicin": { "gram-negative bacterial infections": 0.8, "nephrotoxicity": 1.3, "ototoxicity": 1.25, "neuromuscular blockade": 1.2 },
                                    "oxytocin": { "labor induction": 0.8, "postpartum hemorrhage": 0.75, "water intoxication": 1.2, "hypotension": 1.15 },
                                    "folic_acid": { "anemia": 0.75, "neural tube defects prevention": 0.7, "gastrointestinal upset": 1.1, "zinc deficiency": 1.05 },
                                    "metformin": { "type 2 diabetes": 0.8, "polycystic ovary syndrome": 0.75, "lactic acidosis": 1.2, "vitamin B12 deficiency": 1.15 },
                                    "carbamazepine": { "epilepsy": 0.8, "trigeminal neuralgia": 0.75, "Stevens-Johnson syndrome": 1.3, "hyponatremia": 1.2 },
                                    "diclofenac": { "pain": 0.75, "inflammation": 0.8, "gastrointestinal bleeding": 1.3, "cardiovascular events": 1.25 },
                                    "ferrous_sulfate": { "iron deficiency anemia": 0.8, "constipation": 1.2, "nausea": 1.15, "abdominal pain": 1.1 },
                          
                            
                        
                            "Antiretrovirals (ARVs)": {
                                "lactic acidosis": 1.2, 
                                "hepatotoxicity": 1.1, 
                                "lipodystrophy": 1.2, 
                                "insulin resistance": 1.1 
                            },
                            "Antimalarials": {
                                "hemolytic anemia": 1.2, 
                                "neutropenia": 1.1, 
                                "thrombocytopenia": 1.2, 
                                "hepatotoxicity": 1.1 
                            },
                            "Isoniazid": {
                                "hepatotoxicity": 1.2, 
                                "peripheral neuropathy": 1.1, 
                                "seizures": 1.2, 
                                "psychosis": 1.1 
                            },
                           
                            "Ethambutol": {
                                "optic neuritis": 1.2, 
                                "peripheral neuropathy": 1.1, 
                                "nephrotoxicity": 1.2, 
                                "hepatotoxicity": 1.1 
                            },
                            "Pyrazinamide": {
                                "hepatotoxicity": 1.2, 
                                "arthralgia": 1.1, 
                                "gout": 1.2, 
                                "hyperuricemia": 1.1 
                            },
                       
                            "Ciprofloxacin": {
                                "tendinitis": 1.2, 
                                "tendon rupture": 1.1, 
                                "QT prolongation": 1.2, 
                                "seizures": 1.1 
                            },
                            "Metronidazole": {
                                "peripheral neuropathy": 1.2, 
                                "seizures": 1.1, 
                                "encephalopathy": 1.2, 
                                "hepatotoxicity": 1.1 
                            },
                         
                          
                            
                                "abacavir": { "HIV": 0.8, "hypersensitivity reaction": 1.3, "lactic acidosis": 1.2, "lipodystrophy": 1.1 },
                                "acyclovir": { "herpes simplex": 0.75, "varicella zoster": 0.8, "nephrotoxicity": 1.2, "neurotoxicity": 1.15 },
                                "amodiaquine": { "malaria": 0.8, "agranulocytosis": 1.3, "hepatotoxicity": 1.25, "nausea": 1.1 },
                                "amoxicillin_clavulanate": { "vaginitis": 0.9, "gastritis": 1.2, "hepatotoxicity": 1.15, "rash": 1.1 },
                                "amphotericin_b": { "fungal infections": 0.85, "nephrotoxicity": 1.3, "hypokalemia": 1.25, "infusion reactions": 1.2 },
                                "atropine": { "bradycardia": 0.75, "organophosphate poisoning": 0.8, "dry mouth": 1.2, "urinary retention": 1.15 },
                                "baclofen": { "muscle spasticity": 0.75, "drowsiness": 1.2, "dizziness": 1.15, "withdrawal syndrome": 1.3 },
                                "bedaquiline": { "multidrug-resistant tuberculosis": 0.85, "QT prolongation": 1.3, "hepatotoxicity": 1.2, "pancreatitis": 1.15 },
                                "benzyl penicillin": {"angioedema": 1.1},
                                "benzathine_penicillin": { "syphilis": 0.85, "thrombocytopenia": 0.8, "rheumatic fever prophylaxis": 0.8, "anaphylaxis": 1.3, "Jarisch-Herxheimer reaction": 1.2 },
                                "bismuth_subsalicylate": { "diarrhea": 0.75, "H. pylori infection": 0.8, "black stool": 1.1, "tinnitus": 1.05 },
                                "cefixime": { "gonorrhea": 0.85, "urinary tract infections": 0.8, "diarrhea": 1.15, "pseudomembranous colitis": 1.1 },
                                "ceftazidime": { "pseudomonas infections": 0.85, "meningitis": 0.8, "seizures": 1.2, "neutropenia": 1.15 },
                                "chloramphenicol": { "typhoid fever": 0.85, "meningitis": 0.8, "bone marrow suppression": 1.3, "gray baby syndrome": 1.25 },
                                "clofazimine": { "leprosy": 0.85, "skin discoloration": 1.3, "gastrointestinal disturbances": 1.2, "QT prolongation": 1.15 },
                                "cloxacillin": { "staphylococcal infections": 0.85, "candidiasis": 0.9, "hepatitis": 1.2, "neutropenia": 1.15, "interstitial nephritis": 1.1 },
                                "cycloserine": { "multidrug-resistant tuberculosis": 0.8, "psychosis": 1.3, "seizures": 1.25, "peripheral neuropathy": 1.2 },
                                "dapsone": { "leprosy": 0.85, "pneumocystis pneumonia": 0.8, "hemolytic anemia": 1.3, "methemoglobinemia": 1.25 },
                                "delamanid": { "multidrug-resistant tuberculosis": 0.85, "QT prolongation": 1.3, "hepatotoxicity": 1.2, "hypokalemia": 1.15 },
                                "dihydroartemisinin_piperaquine": { "malaria": 0.85, "QT prolongation": 1.2, "hepatotoxicity": 1.15, "gastrointestinal disturbances": 1.1 },
                                "diloxanide": { "amoebiasis": 0.8, "flatulence": 1.15, "nausea": 1.1, "pruritus": 1.05 },
                                "domperidone": { "nausea": 0.75, "vomiting": 0.8, "QT prolongation": 1.3, "galactorrhea": 1.2 },
                                "eflornithine": { "African trypanosomiasis": 0.85, "seizures": 1.2, "bone marrow suppression": 1.15, "alopecia": 1.1 },
                                "etravirine": { "HIV": 0.8, "rash": 1.2, "hepatotoxicity": 1.15, "nausea": 1.1 },
                                "fexinidazole": { "African trypanosomiasis": 0.85, "nausea": 1.2, "vomiting": 1.15, "headache": 1.1 },
                                "flucytosine": { "cryptococcal meningitis": 0.85, "bone marrow suppression": 1.3, "hepatotoxicity": 1.2, "cardiotoxicity": 1.15 },
                                "flucloxacillin": {"urticaria": 1.1, "skin rash": 1, "diarrhoea": 0.8 },
                                "gatifloxacin": { "bacterial infections": 0.8, "dysglycemia": 1.3, "QT prolongation": 1.2, "tendinitis": 1.15 },
                                "halofantrine": { "malaria": 0.8, "QT prolongation": 1.3, "cardiovascular events": 1.25, "gastrointestinal disturbances": 1.1 },
                                "kanamycin": { "multidrug-resistant tuberculosis": 0.85, "ototoxicity": 1.3, "nephrotoxicity": 1.25, "neuromuscular blockade": 1.2 },
                                "lefamulin": { "community-acquired bacterial pneumonia": 0.85, "diarrhea": 1.2, "QT prolongation": 1.15, "hepatotoxicity": 1.1 },
                                "linagliptin": { "type 2 diabetes": 0.8, "pancreatitis": 1.2, "hypersensitivity reactions": 1.15, "arthralgia": 1.1 },
                                "linezolid": { "multidrug-resistant tuberculosis": 0.85, "thrombocytopenia": 1.3, "peripheral neuropathy": 1.25, "lactic acidosis": 1.2 },
                                "loperamide": { "diarrhea": 0.75, "constipation": 1.2, "paralytic ileus": 1.15, "toxic megacolon": 1.1 },
                                "cephalexin": { "vaginal candidiasis": 0.9, "pruritus": 1.1 },
                                "melarsoprol": { "African trypanosomiasis": 0.85, "encephalopathy": 1.3, "peripheral neuropathy": 1.25, "cardiac arrhythmias": 1.2 },
                                "moxifloxacin": { "multidrug-resistant tuberculosis": 0.85, "QT prolongation": 1.3, "tendinitis": 1.2, "dysglycemia": 1.15 },
                                "nitazoxanide": { "cryptosporidiosis": 0.8, "giardiasis": 0.75, "abdominal pain": 1.15, "diarrhea": 1.1 },
                                "oxamniquine": { "schistosomiasis": 0.85, "seizures": 1.2, "dizziness": 1.15, "hepatotoxicity": 1.1 },
                                "pentamidine": { "pneumocystis pneumonia": 0.85, "hypoglycemia": 1.3, "nephrotoxicity": 1.25, "pancreatitis": 1.2 },
                                "pentavalent_antimonials": { "leishmaniasis": 0.85, "cardiotoxicity": 1.3, "hepatotoxicity": 1.25, "pancreatitis": 1.2 },
                                "phenoxymethylpenicillin": { "streptococcal infections": 0.8, "rheumatic fever prophylaxis": 0.75, "anaphylaxis": 1.3, "diarrhea": 1.15 },
                                "posaconazole": { "fungal infections": 0.85, "QT prolongation": 1.2, "hepatotoxicity": 1.15, "hypokalemia": 1.1 },
                                "primaquine": { "malaria": 0.8, "hemolytic anemia": 1.3, "methemoglobinemia": 1.2, "gastrointestinal disturbances": 1.15 },
                                "proguanil": { "malaria prophylaxis": 0.75, "mouth ulcers": 1.15, "hair loss": 1.1, "gastrointestinal disturbances": 1.05 },
                                "pyrantel": { "intestinal worms": 0.8, "abdominal pain": 1.15, "diarrhea": 1.1, "dizziness": 1.05 },
                                "pyrimethamine": { "malaria": 0.75, "toxoplasmosis": 0.8, "megaloblastic anemia": 1.2, "rash": 1.15 },
                                "raltegravir": { "HIV": 0.85, "myopathy": 1.2, "rash": 1.15, "insomnia": 1.1 },
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
                            "Sulfadoxine-Pyrimethamine": {
                                "hemolytic anemia": 1.2, 
                                "neutropenia": 1.1, 
                                "thrombocytopenia": 1.2, 
                                "hepatotoxicity": 1.1 
                            },
                            "Amodiaquine": {
                                "neutropenia": 1.2, 
                                "thrombocytopenia": 1.1, 
                                "hepatotoxicity": 1.2, 
                                "agranulocytosis": 1.1 
                            },
                            "Artemether-Lumefantrine": {
                                "neutropenia": 1.2, 
                                "thrombocytopenia": 1.1, 
                                "hepatotoxicity": 1.2, 
                                "QT prolongation": 1.1 
                            },
                            "Dihydroartemisinin-Piperaquine": {
                                "neutropenia": 1.2, 
                                "thrombocytopenia": 1.1, 
                                "hepatotoxicity": 1.2, 
                                "QT prolongation": 1.1 
                            },
                           
                        
                            "Primaquine": {
                                "hemolytic anemia": 1.2, 
                                "methemoglobinemia": 1.1, 
                                "neutropenia": 1.2, 
                                "thrombocytopenia": 1.1 
                            },
                            "Tetracycline": {
                                "phototoxicity": 1.2, 
                                "hepatotoxicity": 1.1, 
                                "esophagitis": 1.2, 
                                "pseudotumor cerebri": 1.1 
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
                            
                          
                            
                         
                                "ors (oral rehydration solution)": {
                                    "dehydration": 0.2,
                                    "diarrhea": 0.3,
                                    "nausea": 1.1,
                                    "abdominal distension": 1.2
                                },

                                "griseofulvin": {
                                    "tinea infections": 0.4,
                                    "headache": 1.2,
                                    "nausea": 1.3,
                                    "photosensitivity": 1.4,
                                    "fatigue": 1.3
                                },
                            
                                
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
                            
                            
                               
                                
                                "glibenclamide": {
                                    "type 2 diabetes": 0.3,
                                    "hypoglycemia": 1.6,
                                    "weight gain": 1.3,
                                    "nausea": 1.2
                                },
                             
                            
                                
                          
                            
                                
                                "furosemide": {
                                    "heart failure": 0.4,
                                    "hypertension": 0.5,
                                    "edema": 0.4,
                                    "hypokalemia": 1.5,
                                    "dehydration": 1.4
                                },
                         
                              
                            
                                    "abarelix": { "prostate cancer": 0.8, "hot flashes": 1.2, "osteoporosis": 1.15, "anaphylaxis": 1.1 },
                                    "abatacept": { "rheumatoid arthritis": 0.85, "increased infections": 1.2, "headache": 1.15, "nausea": 1.1 },
                                    "acarbose": { "type 2 diabetes": 0.8, "flatulence": 1.2, "diarrhea": 1.15, "elevated liver enzymes": 1.1 },
                                    "acebutolol": { "hypertension": 0.8, "arrhythmias": 0.75, "bronchospasm": 1.2, "fatigue": 1.15 },
                                    "acetazolamide": { "glaucoma": 0.8, "altitude sickness": 0.75, "metabolic acidosis": 1.2, "kidney stones": 1.15 },
                                    "acetylcysteine": { "acetaminophen overdose": 0.85, "bronchitis": 0.8, "anaphylactoid reactions": 1.2, "nausea": 1.15 },
                                    "adapalene": { "acne": 0.8, "skin irritation": 1.2, "dryness": 1.15, "erythema": 1.1 },
                                    "adefovir": { "hepatitis B": 0.85, "nephrotoxicity": 1.2, "lactic acidosis": 1.15, "osteomalacia": 1.1 },
                                    "adenosine": { "paroxysmal supraventricular tachycardia": 0.85, "chest pain": 1.2, "dyspnea": 1.15, "flushing": 1.1 },
                                    "agalsidase_beta": { "Fabry disease": 0.85, "infusion reactions": 1.2, "antibody formation": 1.15, "fever": 1.1 },
                                    "albuterol": { "asthma": 0.85, "COPD": 0.8, "tachycardia": 1.2, "tremor": 1.15 },
                                    "alfuzosin": { "benign prostatic hyperplasia": 0.85, "orthostatic hypotension": 1.2, "dizziness": 1.15, "headache": 1.1 },
                                    "aliskiren": { "hypertension": 0.85, "hyperkalemia": 1.2, "angioedema": 1.15, "diarrhea": 1.1 },
                                    "almotriptan": { "migraine": 0.85, "chest tightness": 1.2, "paresthesia": 1.15, "dizziness": 1.1 },
                                    "alosetron": { "irritable bowel syndrome": 0.85, "constipation": 1.2, "ischemic colitis": 1.15, "abdominal pain": 1.1 },
                                    "alteplase": { "acute ischemic stroke": 0.85, "myocardial infarction": 0.8, "intracranial hemorrhage": 1.3, "anaphylaxis": 1.2 },
                                    "amantadine": { "influenza A": 0.8, "Parkinson's disease": 0.75, "hallucinations": 1.2, "peripheral edema": 1.15 },
                                    "ambrisentan": { "pulmonary arterial hypertension": 0.85, "peripheral edema": 1.2, "nasal congestion": 1.15, "hepatotoxicity": 1.1 },
                                    "amifostine": { "renal toxicity from cisplatin": 0.85, "hypotension": 1.2, "nausea": 1.15, "hypocalcemia": 1.1 },
                                    "amiloride": { "hypertension": 0.8, "congestive heart failure": 0.75, "hyperkalemia": 1.2, "gynecomastia": 1.15 },
                                    "aminocaproic_acid": { "excessive bleeding": 0.85, "thrombosis": 1.2, "myopathy": 1.15, "gastrointestinal upset": 1.1 },
                                    "amiodarone": { "ventricular arrhythmias": 0.85, "thyroid dysfunction": 1.2, "pulmonary toxicity": 1.15, "hepatotoxicity": 1.1 },
                                    "amoxapine": { "depression": 0.85, "anxiety": 0.8, "anticholinergic effects": 1.2, "weight gain": 1.15 },
                                    "amphetamine": { "attention deficit hyperactivity disorder": 0.85, "narcolepsy": 0.8, "addiction": 1.3, "cardiovascular events": 1.2 },
                                    "anagrelide": { "essential thrombocythemia": 0.85, "headache": 1.2, "palpitations": 1.15, "anemia": 1.1 },
                                    "anakinra": { "rheumatoid arthritis": 0.85, "neonatal-onset multisystem inflammatory disease": 0.8, "injection site reactions": 1.2, "increased infections": 1.15 },
                                    "anastrozole": { "breast cancer": 0.85, "hot flashes": 1.2, "arthralgia": 1.15, "osteoporosis": 1.1 },
                                    "anidulafungin": { "candidiasis": 0.85, "hepatotoxicity": 1.2, "histamine-related reactions": 1.15, "rash": 1.1 },
                                    "apremilast": { "psoriatic arthritis": 0.85, "plaque psoriasis": 0.8, "diarrhea": 1.2, "depression": 1.15 },
                                    "argatroban": { "heparin-induced thrombocytopenia": 0.85, "bleeding": 1.2, "hepatic impairment": 1.15, "hypersensitivity reactions": 1.1 },
                                    "aripiprazole": { "schizophrenia": 0.85, "bipolar disorder": 0.8, "akathisia": 1.2, "weight gain": 1.15 },
                                    "armodafinil": { "narcolepsy": 0.85, "obstructive sleep apnea": 0.8, "insomnia": 1.2, "anxiety": 1.15 },
                                    "arsenic_trioxide": { "acute promyelocytic leukemia": 0.85, "QT prolongation": 1.2, "differentiation syndrome": 1.15, "hepatotoxicity": 1.1 },
                                    "artemether": { "malaria": 0.85, "neurotoxicity": 1.2, "QT prolongation": 1.15, "hepatotoxicity": 1.1 },
                                    "asenapine": { "schizophrenia": 0.85, "bipolar disorder": 0.8, "weight gain": 1.2, "extrapyramidal symptoms": 1.15 },
                                    "atazanavir": { "HIV": 0.85, "hyperbilirubinemia": 1.2, "nephrolithiasis": 1.15, "PR interval prolongation": 1.1 },
                                    "atomoxetine": { "attention deficit hyperactivity disorder": 0.85, "suicidal ideation": 1.2, "hepatotoxicity": 1.15, "growth suppression": 1.1 },
                                    "atovaquone": { "pneumocystis pneumonia": 0.85, "toxoplasmosis": 0.8, "rash": 1.2, "gastrointestinal disturbances": 1.15 },
                                    "axitinib": { "renal cell carcinoma": 0.85, "hypertension": 1.2, "proteinuria": 1.15, "thyroid dysfunction": 1.1 },
                                    "azacitidine": { "myelodysplastic syndromes": 0.85, "neutropenia": 1.2, "thrombocytopenia": 1.15, "hepatotoxicity": 1.1 },
                                    "azathioprine": { "rheumatoid arthritis": 0.85, "organ transplant rejection": 0.8, "bone marrow suppression": 1.2, "hepatotoxicity": 1.15 },
                                    "azelaic_acid": { "acne": 0.85, "rosacea": 0.8, "skin irritation": 1.2, "hypopigmentation": 1.15 },
                                    "bacitracin": { "skin infections": 0.85, "nephrotoxicity": 1.2, "anaphylaxis": 1.15, "contact dermatitis": 1.1 },
                                    "balsalazide": { "ulcerative colitis": 0.85, "headache": 1.2, "abdominal pain": 1.15, "exacerbation of colitis": 1.1 },
                                    "basiliximab": { "organ transplant rejection": 0.85, "hypersensitivity reactions": 1.2, "increased infections": 1.15, "lymphoma": 1.1 },
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
                                
                                    
                                
                                    "Minocycline": {
                                        "pseudotumor cerebri": 1.2, 
                                        "hepatotoxicity": 1.1, 
                                        "esophagitis": 1.2, 
                                        "autoimmune disorders": 1.1 
                                    },
                                  
                                    "Norfloxacin": {
                                        "tendinitis": 1.2, 
                                        "tendon rupture": 1.1, 
                                        "QT prolongation": 1.2, 
                                        "seizures": 1.1 
                                    },
                                    "Ofloxacin": {
                                        "tendinitis": 1.2, 
                                        "tendon rupture": 1.1, 
                                        "QT prolongation": 1.2, 
                                        "seizures": 1.1 
                                    },
                                    "Levofloxacin": {
                                        "tendinitis": 1.2, 
                                        "tendon rupture": 1.1, 
                                        "QT prolongation": 1.2, 
                                        "seizures": 1.1 
                                    },
                                    "Moxifloxacin": {
                                        "tendinitis": 1.2, 
                                        "tendon rupture": 1.1, 
                                        "QT prolongation": 1.2, 
                                        "seizures": 1.1 
                                    },
                                    "Gatifloxacin": {
                                        "tendinitis": 1.2, 
                                        "tendon rupture": 1.1, 
                                        "QT prolongation": 1.2, 
                                        "seizures": 1.1 
                                    },
                                    "Gemifloxacin": {
                                        "tendinitis": 1.2, 
                                        "tendon rupture": 1.1, 
                                        "QT prolongation": 1.2, 
                                        "seizures": 1.1 
                                    },
                                   
                                    "Clarithromycin": {
                                        "hepatotoxicity": 1.2, 
                                        "QT prolongation": 1.1, 
                                        "cardiac arrhythmias": 1.2, 
                                        "allergic reactions": 1.1 
                                    },
                                    "Erythromycin": {
                                        "hepatotoxicity": 1.2, 
                                        "QT prolongation": 1.1, 
                                        "cardiac arrhythmias": 1.2, 
                                        "allergic reactions": 1.1 
                                    },
                                    
                                        
                                  
                                       
                                        "ceftriaxone": {
                                            "pneumonia": 0.3,
                                            "gonorrhea": 0.4,
                                            "bacterial meningitis": 0.3,
                                            "rash": 1.2,
                                            "thrombophlebitis": 1.4
                                        },
                                 
                                        "azithromycin": {
                                            "chlamydia": 0.3,
                                            "bacterial pneumonia": 0.4,
                                            "traveler's diarrhea": 0.3,
                                            "nausea": 1.2,
                                            "abdominal pain": 1.2
                                        },
                                      
                                        "clarithromycin": {
                                            "peptic ulcer disease": 0.3,
                                            "pneumonia": 0.4,
                                            "sinusitis": 0.4,
                                            "nausea": 1.2,
                                            "diarrhea": 1.3
                                        },
                                    
                                        
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
                                    
                                    
                                    
                                     
                                        "nifedipine": {
                                            "hypertension": 0.3,
                                            "angina": 0.4,
                                            "headache": 1.3,
                                            "dizziness": 1.2,
                                            "flushing": 1.2
                                        },
                                    
                                        
                                        "glipizide": {
                                            "type 2 diabetes": 0.3,
                                            "hypoglycemia": 1.5,
                                            "weight gain": 1.3,
                                            "nausea": 1.2
                                        },
                                      
                                    
                                        
                                        "diphenoxylate": {
                                            "diarrhea": 0.4,
                                            "constipation": 1.4,
                                            "drowsiness": 1.3,
                                            "dry mouth": 1.2
                                        },
                                    
                                        
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
                                      
                                    
                                        
                                        "methylprednisolone": {
                                            "inflammatory conditions": 0.4,
                                            "asthma": 0.4,
                                            "rheumatoid arthritis": 0.4,
                                            "osteoporosis": 1.5,
                                            "hyperglycemia": 1.4
                                        },
                                    
                                        
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
                                    
                                        
                                        "fluoxetine": {
                                            "depression": 0.4,
                                            "anxiety disorders": 0.4,
                                            "insomnia": 1.3,
                                            "nausea": 1.2,
                                            "sexual dysfunction": 1.4
                                        },
                                   
                                        "amitriptyline": {
                                            "depression": 0.4,
                                            "neuropathic pain": 0.4,
                                            "drowsiness": 1.3,
                                            "dry mouth": 1.2,
                                            "weight gain": 1.3
                                        }
                                      
                                 
                                     
                                    }
                                    
                                    export default drugHistoryWeights;
