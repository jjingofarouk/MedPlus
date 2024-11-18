import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Typography, TextField, Button } from '@material-ui/core';

// APACHE II Score Calculator
const ApacheIICalculator = () => {
    const [scores, setScores] = useState({
        age: '',
        temperature: '',
        heartRate: '',
        respiratoryRate: '',
        systolicBP: '',
        oxygen: '',
        arterialPH: '',
        sodium: '',
        potassium: '',
        creatinine: '',
        hematocrit: '',
        whiteBloodCellCount: '',
        glasgowComaScore: '',
    });

    const [totalScore, setTotalScore] = useState(null);

    const calculateAPACHEII = () => {
        // Simplified scoring logic (real calculation requires more parameters)
        let score = 0;
        score += scores.age > 44 ? 1 : 0;
        score += scores.temperature < 30 || scores.temperature > 39 ? 1 : 0;
        score += scores.heartRate > 180 ? 1 : 0;
        score += scores.respiratoryRate > 30 ? 1 : 0;
        score += scores.systolicBP < 70 ? 1 : 0;
        score += scores.oxygen < 60 ? 1 : 0;
        score += scores.arterialPH < 7.2 || scores.arterialPH > 7.5 ? 1 : 0;
        score += scores.sodium < 130 || scores.sodium > 150 ? 1 : 0;
        score += scores.potassium < 3 || scores.potassium > 6 ? 1 : 0;
        score += scores.creatinine > 1.2 ? 1 : 0;
        score += scores.hematocrit < 30 ? 1 : 0;
        score += scores.whiteBloodCellCount < 4000 || scores.whiteBloodCellCount > 12000 ? 1 : 0;
        score += parseInt(scores.glasgowComaScore) < 13 ? 1 : 0;

        setTotalScore(score);
    };

    return (
        <Card>
            <CardHeader title="APACHE II Score Calculator" />
            <CardContent>
                {Object.keys(scores).map((key) => (
                    <TextField
                        key={key}
                        label={key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                        type="number"
                        value={scores[key]}
                        onChange={(e) => setScores({ ...scores, [key]: e.target.value })}
                    />
                ))}
                <Button onClick={calculateAPACHEII}>Calculate Score</Button>
                <Typography variant="h6">Total APACHE II Score: {totalScore}</Typography>
            </CardContent>
        </Card>
    );
};

// SOFA Score Calculator
const SOFACalculator = () => {
    const [scores, setScores] = useState({
        respiratory: '',
        coagulation: '',
        liver: '',
        cardiovascular: '',
        neurological: '',
        renal: '',
    });

    const [totalScore, setTotalScore] = useState(null);

    const calculateSOFA = () => {
        const total = Object.values(scores).reduce((acc, val) => acc + (parseInt(val) || 0), 0);
        setTotalScore(total);
    };

    return (
        <Card>
            <CardHeader title="SOFA Score Calculator" />
            <CardContent>
                {Object.keys(scores).map((key) => (
                    <TextField
                        key={key}
                        label={key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                        type="number"
                        value={scores[key]}
                        onChange={(e) => setScores({ ...scores, [key]: e.target.value })}
                    />
                ))}
                <Button onClick={calculateSOFA}>Calculate Score</Button>
                <Typography variant="h6">Total SOFA Score: {totalScore}</Typography>
            </CardContent>
        </Card>
    );
};

// QSOFA Score Calculator
const QSOFACalculator = () => {
    const [scores, setScores] = useState({
        respiratoryRate: '',
        systolicBP: '',
        alteredMentalStatus: false,
    });

    const [totalScore, setTotalScore] = useState(null);

    const calculateQSOFA = () => {
        let score = 0;
        score += scores.respiratoryRate > 22 ? 1 : 0;
        score += scores.systolicBP < 100 ? 1 : 0;
        score += scores.alteredMentalStatus ? 1 : 0;

        setTotalScore(score);
    };

    return (
        <Card>
            <CardHeader title="QSOFA Score Calculator" />
            <CardContent>
                <TextField
                    label="Respiratory Rate"
                    type="number"
                    value={scores.respiratoryRate}
                    onChange={(e) => setScores({ ...scores, respiratoryRate: e.target.value })}
                />
                <TextField
                    label="Systolic BP"
                    type="number"
                    value={scores.systolicBP}
                    onChange={(e) => setScores({ ...scores, systolicBP: e.target.value })}
                />
                <TextField
                    label="Altered Mental Status"
                    type="checkbox"
                    onChange={(e) => setScores({ ...scores, alteredMentalStatus: e.target.checked })}
                />
                <Button onClick={calculateQSOFA}>Calculate Score</Button>
                <Typography variant="h6">Total QSOFA Score: {totalScore}</Typography>
            </CardContent>
        </Card>
    );
};

// APACHE IV Score Calculator
const ApacheIVCalculator = () => {
    const [scores, setScores] = useState({
        age: '',
        temperature: '',
        heartRate: '',
        respiratoryRate: '',
        systolicBP: '',
        oxygen: '',
        pH: '',
        sodium: '',
        potassium: '',
        creatinine: '',
        hematocrit: '',
        whiteBloodCellCount: '',
        glasgowComaScore: '',
    });

    const [totalScore, setTotalScore] = useState(null);

    const calculateAPACHEIV = () => {
        // Simplified scoring logic for demonstration
        let score = 0;
        // Implement scoring logic similar to APACHE II
        score += (scores.age > 44 ? 1 : 0);
        score += (parseInt(scores.heartRate) > 100 ? 1 : 0);
        // Additional scoring logic goes here
        setTotalScore(score);
    };

    return (
        <Card>
            <CardHeader title="APACHE IV Score Calculator" />
            <CardContent>
                {Object.keys(scores).map((key) => (
                    <TextField
                        key={key}
                        label={key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                        type="number"
                        value={scores[key]}
                        onChange={(e) => setScores({ ...scores, [key]: e.target.value })}
                    />
                ))}
                <Button onClick={calculateAPACHEIV}>Calculate Score</Button>
                <Typography variant="h6">Total APACHE IV Score: {totalScore}</Typography>
            </CardContent>
        </Card>
    );
};

// Vasoactive-Inotropic Score (VIS) Calculator
const VISCalculator = () => {
    const [scores, setScores] = useState({
        dopamine: '',
        dobutamine: '',
        epinephrine: '',
        norepinephrine: '',
        vasopressin: '',
    });

    const [totalScore, setTotalScore] = useState(null);

    const calculateVIS = () => {
        const total = 
            (parseFloat(scores.dopamine) || 0) + 
            (parseFloat(scores.dobutamine) || 0) + 
            (parseFloat(scores.epinephrine) || 0) + 
            (parseFloat(scores.norepinephrine) || 0) + 
            (parseFloat(scores.vasopressin) || 0);
        setTotalScore(total);
    };

    return (
        <Card>
            <CardHeader title="Vasoactive-Inotropic Score (VIS) Calculator" />
            <CardContent>
                {Object.keys(scores).map((key) => (
                    <TextField
                        key={key}
                        label={key.charAt(0).toUpperCase() + key.slice(1)}
                        type="number"
                        value={scores[key]}
                        onChange={(e) => setScores({ ...scores, [key]: e.target.value })}
                    />
                ))}
                <Button onClick={calculateVIS}>Calculate Score</Button>
                <Typography variant="h6">Total VIS Score: {totalScore}</Typography>
            </CardContent>
        </Card>
    );
};

// MODS Score Calculator
const MODSCalculator = () => {
    const [scores, setScores] = useState({
        cardiovascular: '',
        respiratory: '',
        renal: '',
        hepatic: '',
        hematologic: '',
        neurologic: '',
    });

    const [totalScore, setTotalScore] = useState(null);

    const calculateMODS = () => {
        const total = Object.values(scores).reduce((acc, val) => acc + (parseInt(val) || 0), 0);
        setTotalScore(total);
    };

    return (
        <Card>
            <CardHeader title="MODS Score Calculator" />
            <CardContent>
                {Object.keys(scores).map((key) => (
                    <TextField
                        key={key}
                        label={key.charAt(0).toUpperCase() + key.slice(1)}
                        type="number"
                        value={scores[key]}
                        onChange={(e) => setScores({ ...scores, [key]: e.target.value })}
                    />
                ))}
                <Button onClick={calculateMODS}>Calculate Score</Button>
                <Typography variant="h6">Total MODS Score: {totalScore}</Typography>
            </CardContent>
        </Card>
    );
};

// ICU Main Component
const ICU = () => {
    return (
        <div>
            <Typography variant="h4">Intensive Care Unit Calculators</Typography>
            <ApacheIICalculator />
            <SOFACalculator />
            <QSOFACalculator />
            <ApacheIVCalculator />
            <VISCalculator />
            <MODSCalculator />
            {/* Additional calculators can be added here */}
        </div>
    );
};

export default ICU;
