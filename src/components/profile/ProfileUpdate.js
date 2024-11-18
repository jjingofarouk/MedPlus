import React from 'react';
import { useSelector } from 'react-redux'; // or any state management library you are using
import patientProfileUpdate from './patientProfileUpdate';
import doctorProfileUpdate from './doctorProfileUpdate';
import hospitalProfileUpdate from './hospitalProfileUpdate';

const ProfileUpdate = () => {
    const user_type = useSelector((state) => state.user_type); // Assuming you have user_type in your state

    return (
        <div>
            {user_type === 'patient' && <patientProfileUpdate />}
            {user_type === 'doctor' && <doctorProfileUpdate />}
            {user_type === 'hospital' && <hospitalProfileUpdate />}
        </div>
    );
};

export default ProfileUpdate;
