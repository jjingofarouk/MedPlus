import React, { useState } from 'react';
import './Tabs.css';

export const Tabs = ({ children, className = '', defaultActiveTab = 0, ...props }) => {
    const [activeTab, setActiveTab] = useState(defaultActiveTab); // Control active tab

    const handleTabClick = (index) => {
        setActiveTab(index); // Set active tab on click
    };

    return (
        <div className={`tabs ${className}`} {...props}>
            {React.Children.map(children, (child, index) =>
                React.cloneElement(child, {
                    activeTab, // Pass activeTab to children
                    setActiveTab: handleTabClick, // Pass setter function to children
                    index, // Pass index to help identify the trigger/content
                })
            )}
        </div>
    );
};

export const TabsList = ({ children, className = '', activeTab, setActiveTab, ...props }) => {
    return (
        <div className={`tabs-list ${className}`} {...props}>
            {React.Children.map(children, (child, index) =>
                React.cloneElement(child, {
                    active: activeTab === index, // Set active if the current tab is selected
                    onClick: () => setActiveTab(index), // Handle tab click
                })
            )}
        </div>
    );
};

export const TabsTrigger = ({ children, className = '', active, ...props }) => {
    return (
        <button
            className={`tabs-trigger ${className} ${active ? 'active' : ''}`}
            {...props}
        >
            {children}
        </button>
    );
};

export const TabsContent = ({ children, className = '', activeTab, index, ...props }) => {
    return activeTab === index ? (
        <div className={`tabs-content ${className}`} {...props}>
            {children}
        </div>
    ) : null; // Only render the active tab's content
};
