import React from 'react';
import Sidebar from './Sidebar';
import AudioCallHeader from './AudioCallHeader';
import AudioCallContainer from './AudioCallContainer';
import Footer from './Footer';

const AudioCallPage = () => {
  // Replace with actual data
  const doctor = "Dr. Jane Doe";
  const patient = "John Smith";
  const consultationId = "123456";

  return (
    <div>
      <Sidebar />
      <AudioCallHeader />
      <AudioCallContainer doctor={doctor} patient={patient} consultationId={consultationId} />
      <Footer />
    </div>
  );
};

export default AudioCallPage;
