import React, { useState } from 'react';

// Main Tabs Component
export const Tabs = ({ children, className = '', defaultActiveTab = 0, onTabClick }) => {
    const [activeTab, setActiveTab] = useState(defaultActiveTab); // Control active tab

    // Handle tab click event
    const handleTabClick = (index) => {
        setActiveTab(index); // Set active tab on click
        onTabClick && onTabClick(index); // Call the onTabClick prop if provided
    };

    return (
        <div className={`tabs ${className}`}>
            {React.Children.map(children, (child, index) =>
                React.cloneElement(child, {
                    activeTab, // Pass activeTab to children
                    onTabClick: handleTabClick, // Pass the click handler
                })
            )}
        </div>
    );
};

// TabsList Component
export const TabsList = ({ children, className = '', activeTab, onTabClick }) => {
    return (
        <div className={`tabs-list ${className}`}>
            {React.Children.map(children, (child, index) =>
                React.cloneElement(child, {
                    active: activeTab === index, // Set active if the current tab is selected
                    onClick: () => onTabClick(index), // Handle tab click
                })
            )}
        </div>
    );
};

// TabsTrigger Component
export const TabsTrigger = ({ children, className = '', active, onClick }) => {
    return (
        <button
            className={`tabs-trigger ${className} ${active ? 'active' : ''}`}
            onClick={onClick} // Attach onClick handler here
        >
            {children}
        </button>
    );
};

// TabsContent Component
export const TabsContent = ({ children, activeTab, index }) => {
    return activeTab === index ? (
        <div className="tabs-content">
            {children}
        </div>
    ) : null; // Only render the active tab's content
};
