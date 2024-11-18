import React from 'react';
import './Video.css'; // Import the CSS file

const Video = () => {
    return (
        <div className="video-call-page">

            <main>
                <iframe
                    id="jitsi-meet"
                    src="https://meet.jit.si/medhubroom"
                    allow="camera; microphone; fullscreen; display-capture"
                    frameBorder="0"
                    title="Video Call"
                ></iframe>
            </main>

        </div>
    );
};

export default Video;
