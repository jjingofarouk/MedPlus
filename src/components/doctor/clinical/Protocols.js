const dummyData = [
    { 
      id: 1, 
      title: "Hypertension Management", 
      category: "Cardiology", 
      link: "/protocols/hypertension", 
      versions: [
        { version: 1, date: "2023-01-01", changes: "Initial release, based on WHO and AHA guidelines." },
        { version: 2, date: "2024-01-01", changes: "Updated dosage guidelines and added patient education resources." }
      ],
      checklist: [
        "Take a detailed patient history, including family history of hypertension, lifestyle factors, and current medications.",
        "Perform a comprehensive physical examination, including orthostatic blood pressure measurements and evaluation for secondary causes.",
        "Order relevant laboratory tests: Complete Blood Count (CBC), serum electrolytes, renal function tests (BUN, creatinine), fasting glucose, lipid profile, and ECG to assess for left ventricular hypertrophy.",
        "Prescribe first-line medications based on patient's comorbidities: ACE inhibitors (e.g., Lisinopril, Enalapril) for patients with diabetes or heart failure; calcium channel blockers (e.g., Amlodipine) for older adults; thiazide diuretics (e.g., Hydrochlorothiazide) for general hypertension management.",
        "Provide lifestyle modification recommendations, including DASH diet, regular physical activity (at least 150 minutes/week), and weight management (target BMI: 18.5-24.9).",
        "Schedule regular follow-ups every 4-6 weeks until blood pressure targets are met, then every 3-6 months."
      ],
      description: "This protocol covers comprehensive evidence-based management of hypertension, including diagnosis, treatment, and long-term monitoring. It integrates the latest research and guidelines from the World Health Organization (WHO) and the American Heart Association (AHA), with a focus on individual patient-centered care.",
      targetPopulation: "Adults aged 18 and older with a diagnosis of hypertension, including those with comorbid conditions such as diabetes and chronic kidney disease.",
      goals: [
        "Achieve and maintain optimal blood pressure levels (< 130/80 mmHg) in accordance with the latest guidelines.",
        "Reduce the risk of cardiovascular events (stroke, myocardial infarction) and complications related to hypertension."
      ],
      keyReferences: [
        "World Health Organization (WHO) Guidelines for the Management of Hypertension (2021).",
        "American Heart Association (AHA) Hypertension Guidelines (2023).",
        "JNC 8 Guidelines for the Management of Hypertension (2014)."
      ],
      patientResources: [
        { type: "Brochure", title: "Understanding Hypertension: A Patient's Guide", link: "/resources/hypertension-brochure" },
        { type: "Video", title: "Lifestyle Changes for Managing Hypertension", link: "/resources/lifestyle-changes-hypertension" },
        { type: "Webpage", title: "DASH Diet Overview", link: "https://www.nhlbi.nih.gov/health-topics/dash-eating-plan" }
      ]
    },
    { 
      id: 2, 
      title: "Diabetes Treatment Guidelines", 
      category: "Endocrinology", 
      link: "/protocols/diabetes", 
      versions: [
        { version: 1, date: "2023-06-01", changes: "Initial release, focusing on type 1 and type 2 diabetes management." },
        { version: 2, date: "2024-03-01", changes: "Incorporated new insulin analogs and continuous glucose monitoring (CGM) recommendations." }
      ],
      checklist: [
        "Monitor blood glucose levels regularly using Self-Monitoring Blood Glucose (SMBG) or Continuous Glucose Monitoring (CGM) systems to maintain target levels.",
        "Prescribe insulin therapy tailored to the patient's needs, including: basal insulin (e.g., Glargine, Detemir) for long-acting coverage; bolus insulin (e.g., Aspart, Lispro) for mealtime control.",
        "Educate patients on carbohydrate counting and meal planning strategies to manage blood glucose levels effectively.",
        "Assess and manage comorbidities such as hypertension (target BP < 130/80 mmHg) and dyslipidemia (LDL < 100 mg/dL).",
        "Schedule regular follow-ups every 3-6 months to assess glycemic control (via HbA1c testing) and medication adherence."
      ],
      description: "This protocol outlines comprehensive evidence-based management of diabetes mellitus, including diagnosis, pharmacological treatment, lifestyle modifications, and patient education. It emphasizes individualized treatment plans based on the latest research and guidelines from credible diabetes organizations.",
      targetPopulation: "Adults diagnosed with type 1 or type 2 diabetes mellitus, including pregnant women (gestational diabetes management) and elderly patients.",
      goals: [
        "Achieve and maintain target HbA1c levels (< 7% for most adults, < 6.5% for younger patients or those with long life expectancy).",
        "Minimize complications associated with diabetes, including neuropathy, nephropathy, and retinopathy, through effective management strategies."
      ],
      keyReferences: [
        "American Diabetes Association (ADA) Standards of Medical Care in Diabetes (2023).",
        "Endocrine Society Clinical Practice Guidelines on Diabetes Management (2022).",
        "Centers for Disease Control and Prevention (CDC) resources on diabetes prevention and management."
      ],
      patientResources: [
        { type: "Brochure", title: "Living with Diabetes: A Guide for Patients", link: "/resources/living-with-diabetes" },
        { type: "Webinar", title: "Managing Your Diabetes Effectively", link: "/resources/diabetes-webinar" },
        { type: "App", title: "MySugr: Diabetes Management App", link: "https://mysugr.com/" }
      ]
    },
  ];
  