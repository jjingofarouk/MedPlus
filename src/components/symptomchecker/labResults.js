const labResults = {
  bloodPressure: {
    high: {
      diseases: {
        Hypertension: 10,
        HeartDisease: 8,
        KidneyDisease: 7,
        Stroke: 8,
      },
    },
    low: {
      diseases: {
        Hypotension: 5,
        AdrenalInsufficiency: 6,
        SevereInfection: 8,
      },
    },
  },
  bloodGlucose: {
    high: {
      diseases: {
        DiabetesMellitus: 15,
        CushingSyndrome: 12,
        Pancreatitis: 9,
        MetabolicSyndrome: 12,
      },
    },
    low: {
      diseases: {
        Hypoglycemia: 8,
        Insulinoma: 12,
        AdrenalInsufficiency: 9,
      },
    },
  },
  cholesterolLDL: {
    high: {
      diseases: {
        Hyperlipidemia: 10,
        CoronaryArteryDisease: 15,
        Stroke: 15,
        Atherosclerosis: 10,
      },
    },
  },
  cholesterolHDL: {
    low: {
      diseases: {
        CoronaryArteryDisease: 10,
        MetabolicSyndrome: 10,
        PeripheralArteryDisease: 8,
      },
    },
  },
  hemoglobinA1c: {
    high: {
      diseases: {
        DiabetesMellitus: 15,
        Prediabetes: 9,
        ChronicKidneyDisease: 12,
      },
    },
  },
  hemoglobin: {
    low: {
      diseases: {
        Anemia: 10,
        ChronicKidneyDisease: 8,
        BloodLoss: 12,
        BoneMarrowDisorders: 10,
      },
    },
    high: {
      diseases: {
        PolycythemiaVera: 15,
        Dehydration: 10,
        ChronicLungDisease: 8,
      },
    },
  },
  whiteBloodCellCount: {
    high: {
      diseases: {
        Infection: 10,
        Leukemia: 15,
        StressResponse: 8,
        InflammatoryDiseases: 10,
      },
    },
    low: {
      diseases: {
        BoneMarrowDisorders: 10,
        AutoimmuneDiseases: 15,
        ViralInfections: 8,
      },
    },
  },
  plateletCount: {
    high: {
      diseases: {
        Thrombocytosis: 10,
        IronDeficiencyAnemia: 8,
        MyeloproliferativeDisorders: 15,
      },
    },
    low: {
      diseases: {
        Thrombocytopenia: 15,
        AplasticAnemia: 10,
        Leukemia: 8,
      },
    },
  },
  meanCorpuscularVolume: {
    high: {
      diseases: {
        MacrocyticAnemia: 15,
        VitaminB12Deficiency: 10,
        FolateDeficiency: 8,
      },
    },
    low: {
      diseases: {
        MicrocyticAnemia: 15,
        IronDeficiencyAnemia: 10,
        Thalassemia: 8,
      },
    },
  },
  reticulocyteCount: {
    high: {
      diseases: {
        HemolyticAnemia: 15,
        RecoveryFromBloodLoss: 10,
      },
    },
    low: {
      diseases: {
        AplasticAnemia: 15,
        ChronicKidneyDisease: 10,
      },
    },
  },
  thyroidStimulatingHormone: {
    high: {
      diseases: {
        Hypothyroidism: 15,
        PituitaryTumor: 10,
        HashimotosThyroiditis: 8,
      },
    },
    low: {
      diseases: {
        Hyperthyroidism: 15,
        Thyroiditis: 10,
        GravesDisease: 8,
      },
    },
  },
  liverEnzymes: {
    high: {
      diseases: {
        Hepatitis: 15,
        LiverCirrhosis: 10,
        FattyLiverDisease: 8,
      },
    },
    low: {
      diseases: {
        LiverFailure: 15,
      },
    },
  },
  kidneyFunction: {
    high: {
      diseases: {
        AcuteKidneyInjury: 15,
        ChronicKidneyDisease: 10,
        ElectrolyteImbalances: 8,
      },
    },
    low: {
      diseases: {
        RenalFailure: 15,
      },
    },
  },
  malariaTest: {
    positive: {
      diseases: {
        Malaria: 15,
      },
    },
    negative: {
      diseases: {
        NonMalarialFever: 8,
      },
    },
  },
  HIVTest: {
    positive: {
      diseases: {
        HIV: 15,
      },
    },
    negative: {
      diseases: {
        NonHIVInfection: 8,
      },
    },
  },
  hepatitisB: {
    positive: {
      diseases: {
        HepatitisB: 15,
      },
    },
    negative: {
      diseases: {
        NonHepatitisB: 8,
      },
    },
  },
  // Add more lab tests here if necessary
};

export default labResults;
