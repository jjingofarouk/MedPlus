import React, { useState } from 'react';

const PatientInfo = () => {
    const [maritalStatusOther, setMaritalStatusOther] = useState(false);
    const [emergencyRelationshipOther, setEmergencyRelationshipOther] = useState(false);
    const [languagePreferenceOther, setLanguagePreferenceOther] = useState(false);
    const [medicalHistoryOther, setMedicalHistoryOther] = useState(false);
    const [medicationDetails, setMedicationDetails] = useState(false);

    const handleMaritalStatusChange = (e) => {
        setMaritalStatusOther(e.target.value === 'other');
    };

    const handleEmergencyContactChange = (e) => {
        setEmergencyRelationshipOther(e.target.value === 'other');
    };

    const handleLanguagePreferenceChange = (e) => {
        setLanguagePreferenceOther(e.target.value === 'other');
    };

    const handleMedicalHistoryChange = (e) => {
        setMedicalHistoryOther(e.target.value === 'other');
    };

    const handleMedicationChange = (e) => {
        setMedicationDetails(e.target.value === 'other');
    };

    return (
        <div className="main-content">

            <form id="patientForm" method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="dob">Date of Birth:</label>
                    <input type="date" id="dob" name="dob" />
                </div>

                <div className="form-group">
                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" name="gender">
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="non-binary">Non-binary</option>
                        <option value="prefer not to say">Prefer not to say</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="district">District:</label>
                    <select id="district" name="district">
                        <option value="">Select District</option>
                        <option value="yumbe">Yumbe</option>
                        <option value="zombo">Zombo</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="phone_number">Phone Number:</label>
                    <select id="country_code" name="country_code" style={{ width: '30%', marginRight: '10px' }}>
                        <option value="">Country Code</option>
                        <option value="+93">+93 Afghanistan</option>
                        <option value="+263">+263 Zimbabwe</option>
                    </select>
                    <input type="tel" id="phone_number" name="phone_number" placeholder="e.g., +256 772 123 456" />
                </div>

                <div className="form-group">
                    <label htmlFor="marital_status">Marital Status:</label>
                    <select id="marital_status" name="marital_status" onChange={handleMaritalStatusChange}>
                        <option value="">Select Marital Status</option>
                        <option value="single">Single</option>
                        <option value="other">Other</option>
                    </select>

                    {maritalStatusOther && (
                        <div className="form-group">
                            <label htmlFor="marital_status_other_input">Please specify:</label>
                            <textarea id="marital_status_other_input" name="marital_status_other_input"></textarea>
                        </div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="smoking_status">Smoking Status:</label>
                    <select id="smoking_status" name="smoking_status">
                        <option value="">Select Smoking Status</option>
                        <option value="non_smoker">Non-smoker</option>
                        <option value="occasional_smoker">Occasional Smoker</option>
                        <option value="regular_smoker">Regular Smoker</option>
                        <option value="former_smoker">Former Smoker</option>
                    </select>
                </div>

                {/* Continue the same pattern for other fields like alcohol consumption, physical activity, medical history, etc. */}
                
                <div className="form-group">
                    <label htmlFor="emergency_contact">Emergency Contact Name:</label>
                    <input type="text" id="emergency_contact" name="emergency_contact" required />
                </div>

                <div className="form-group">
                    <label htmlFor="emergency_phone">Emergency Contact Phone:</label>
                    <input type="tel" id="emergency_phone" name="emergency_phone" required />
                </div>

                <div className="form-group">
                    <label htmlFor="emergency_contact_relationship">Relationship with Emergency Contact:</label>
                    <select id="emergency_contact_relationship" name="emergency_contact_relationship" onChange={handleEmergencyContactChange}>
                        <option value="">Select Relationship</option>
                        <option value="parent">Parent</option>
                        <option value="sibling">Sibling</option>
                        <option value="spouse">Spouse</option>
                        <option value="friend">Friend</option>
                        <option value="colleague">Colleague</option>
                        <option value="guardian">Guardian</option>
                        <option value="other">Other</option>
                    </select>

                    {emergencyRelationshipOther && (
                        <div className="form-group">
                            <label htmlFor="other_relationship_input">Please specify:</label>
                            <textarea id="other_relationship_input" name="other_relationship_input"></textarea>
                        </div>
                    )}
                </div>

                {/* Add all the remaining fields similarly */}
            </form>
        </div>
    );
};

export default PatientInfo;
