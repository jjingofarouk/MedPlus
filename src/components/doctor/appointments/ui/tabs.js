import React, { useState } from 'react';
import './Tabs.css';

export const Tabs = ({ children, className = '', defaultActiveTab = 'approve', ...props }) => {
    const [activeTab, setActiveTab] = useState(defaultActiveTab); // Use default active tab as string

    const handleTabClick = (tabId) => {
        setActiveTab(tabId); // Set active tab on click
    };

    return (
        <div className={`tabs ${className}`} {...props}>
            {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                    activeTab, // Pass activeTab to children
                    setActiveTab: handleTabClick, // Pass the setter function to children
                })
            )}
        </div>
    );
};

export const TabsList = ({ children, className = '', activeTab, setActiveTab, ...props }) => {
    return (
        <div className={`tabs-list ${className}`} {...props}>
            {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                    active: child.props.value === activeTab, // Use child's value to check active state
                    onClick: () => setActiveTab(child.props.value), // Use child's value for setting active tab
                })
            )}
        </div>
    );
};

export const TabsTrigger = ({ children, className = '', active, onClick, ...props }) => {
    return (
        <button
            className={`tabs-trigger ${className} ${active ? 'active' : ''}`}
            onClick={onClick} // Use passed onClick directly
            {...props}
        >
            {children}
        </button>
    );
};

export const TabsContent = ({ children, className = '', activeTab, value, ...props }) => {
    return value === activeTab ? ( // Check against value instead of index
        <div className={`tabs-content ${className}`} {...props}>
            {children}
        </div>
    ) : null; // Only render the active tab's content
};
