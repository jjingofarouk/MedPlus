import React from 'react';
import Sidebar from './Sidebar';
import DashboardTiles from './DashboardTiles';
import MedicalTip from './MedicalTip';
import Calendar from './Calendar';
import Progress from './Progress';
import ActivityFeed from './ActivityFeed';
import Footer from './Footer';

const Dashboard = () => {
    return (
        <div className="main-content">
            <Sidebar />
            <div className="content">
                <div className="flash-messages">
                    {/* Flash messages here */}
                </div>
                <h1>Welcome to MedHub</h1>
                <div className="dashboard">
                    <DashboardTiles />
                    <MedicalTip />
                    <Calendar />
                    <Progress />
                    <ActivityFeed />
                    <div className="more-link">
                        <a href="/forum">See more features</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
