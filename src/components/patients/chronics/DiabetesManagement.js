import React, { useState } from "react";
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import { FaSyringe, FaAppleAlt, FaWalking, FaNotesMedical } from "react-icons/fa";

const DiabetesManagement = () => {
  const [symptoms, setSymptoms] = useState("");
  const [glucoseLevels, setGlucoseLevels] = useState("");
  const [exercise, setExercise] = useState("");

  const handleSymptomLog = () => {
    // Log symptoms for telemedicine consultations
    console.log("Symptoms logged:", symptoms);
    setSymptoms("");
  };

  const handleGlucoseLevelLog = () => {
    // Log glucose levels for telemedicine review
    console.log("Glucose level logged:", glucoseLevels);
    setGlucoseLevels("");
  };

  const handleExerciseLog = () => {
    // Log exercise activity
    console.log("Exercise logged:", exercise);
    setExercise("");
  };

  return (
    <div className="diabetes-container">
      <Card>
        <CardHeader>
          <Typography variant="h5">Diabetes Management</Typography>
        </CardHeader>
        <CardContent>
          <p>Manage diabetes with long-term strategies that include:</p>
          <ul>
            <li>
              <FaSyringe /> Regular insulin dosage adjustments via telemedicine
            </li>
            <li>
              <FaAppleAlt /> Personalized dietary recommendations based on glycemic index
            </li>
            <li>
              <FaWalking /> Exercise routines for maintaining stable blood sugar levels
            </li>
            <li>
              <FaNotesMedical /> Remote glucose monitoring via devices integrated with your telemedicine system
            </li>
          </ul>

          <h3>Log Your Symptoms</h3>
          <input
            type="text"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="Enter any unusual symptoms"
          />
          <button onClick={handleSymptomLog}>Log Symptoms</button>

          <h3>Log Glucose Levels</h3>
          <input
            type="text"
            value={glucoseLevels}
            onChange={(e) => setGlucoseLevels(e.target.value)}
            placeholder="Enter blood glucose level"
          />
          <button onClick={handleGlucoseLevelLog}>Log Glucose Levels</button>

          <h3>Exercise Tracking</h3>
          <input
            type="text"
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
            placeholder="Enter exercise details"
          />
          <button onClick={handleExerciseLog}>Log Exercise</button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DiabetesManagement;
