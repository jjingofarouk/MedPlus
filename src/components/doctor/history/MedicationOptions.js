const medicationOptions = [
    'Aspirin', // Indicates potential cardiovascular risk or history of vascular events
    'Warfarin', // Suggests history of thromboembolism or atrial fibrillation
    'Insulin', // Indicates diabetes management; assess for Type 1 or Type 2
    'Metformin', // Suggests Type 2 diabetes; assess for complications like neuropathy
    'Levothyroxine', // Indicates hypothyroidism; assess thyroid function
    'Prednisone', // Suggests autoimmune disease, inflammatory condition, or chronic illness
    'Lithium', // Indicates bipolar disorder; assess for renal function and thyroid status
    'Antipsychotics (e.g., Olanzapine, Risperidone)', // Suggests history of psychiatric disorders; assess for metabolic syndrome
    'Antidepressants (e.g., Sertraline, Fluoxetine)', // Indicates depression or anxiety; assess for side effects
    'Beta-blockers (e.g., Metoprolol, Propranolol)', // Indicates history of cardiovascular issues; assess for bradycardia
    'Statins (e.g., Atorvastatin, Simvastatin)', // Suggests hyperlipidemia; assess for liver function
    'ACE Inhibitors (e.g., Lisinopril, Enalapril)', // Indicates hypertension or heart failure; assess for renal function
    'Diuretics (e.g., Furosemide, Hydrochlorothiazide)', // Suggests fluid retention or heart failure; assess electrolyte levels
    'Anticonvulsants (e.g., Phenytoin, Lamotrigine)', // Indicates seizure disorders; assess for potential drug interactions
    'Benzodiazepines (e.g., Diazepam, Lorazepam)', // Suggests anxiety disorders; assess for dependence and withdrawal symptoms
    'Narcotics (e.g., Morphine, Oxycodone)', // Indicates chronic pain management; assess for potential addiction issues
    'Glucocorticoids (e.g., Dexamethasone)', // Indicates potential adrenal insufficiency; assess for long-term effects
    'Methotrexate', // Suggests rheumatoid arthritis or cancer treatment; assess for liver and bone marrow function
    'Antibiotics (e.g., Ciprofloxacin, Amoxicillin)', // History of infections; assess for resistance or allergies
    'Montelukast', // Suggests asthma management; assess for mood changes or side effects
    'Albuterol', // Indicates asthma or COPD management; assess frequency of use
    'Hormonal contraceptives (e.g., Combined pills, IUD)', // Indicates family planning; assess for side effects or thromboembolic risks
    'Immunosuppressants (e.g., Azathioprine, Cyclosporine)', // Suggests history of organ transplantation or autoimmune diseases; assess for infection risk
    'Proton Pump Inhibitors (e.g., Omeprazole)', // Indicates GERD or peptic ulcer history; assess for long-term effects like malabsorption
    'Clopidogrel', // Suggests history of stent placement or vascular disease; assess for bleeding risk
    'Sildenafil', // Indicates erectile dysfunction; assess for cardiovascular health
    'Folic Acid', // Indicates potential for anemia or pregnancy; assess for dietary considerations
    'Calcium/Vitamin D supplements', // Suggests risk of osteoporosis; assess bone health
    'H2 Blockers (e.g., Ranitidine)', // Suggests peptic ulcer disease or GERD; assess for potential side effects
    'Gabapentin', // Indicates neuropathic pain or seizures; assess for sedation and potential misuse
    'Tamsulosin', // Suggests benign prostatic hyperplasia; assess urinary symptoms
    'Fluticasone', // Indicates asthma or allergic rhinitis; assess for respiratory health
    'Hydroxychloroquine', // Suggests autoimmune disease management; assess for eye health
    'Acetaminophen', // Indicates pain management; assess for liver function with high usage
    'Bupropion', // Indicates depression or smoking cessation; assess for seizure history
    'Valproate', // Suggests seizure disorders or mood stabilization; monitor liver function
    'Corticosteroids (e.g., Methylprednisolone)', // Indicates inflammatory conditions; assess for long-term effects
    'Colchicine', // Suggests history of gout; assess for renal function
    'Dexamethasone', // Indicates severe allergic reactions, inflammation, or cancer; assess for potential side effects
    'Isotretinoin', // Suggests treatment of severe acne; assess for pregnancy status in females
    'Dopamine Agonists (e.g., Pramipexole, Ropinirole)', // Suggests Parkinson's disease; assess for movement disorders
    'Antifungals (e.g., Fluconazole)', // Indicates history of fungal infections; assess for potential liver toxicity
    'Nasal Decongestants (e.g., Phenylephrine)', // Suggests history of sinus issues; assess for hypertension risk
    'Antihistamines (e.g., Cetirizine, Diphenhydramine)', // Indicates allergies; assess for sedation and other side effects
    'Laxatives (e.g., Bisacodyl, Polyethylene glycol)', // Indicates history of constipation; assess bowel habits
  ];
  