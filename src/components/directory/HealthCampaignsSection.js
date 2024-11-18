import React, { useState } from 'react';
import './HealthCampaignsSection.css'; // Import custom CSS for styling

const HealthCampaignsSection = ({ campaigns }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCampaignClick = (campaign) => {
    setSelectedCampaign(campaign);
  };

  const filteredCampaigns = campaigns
    .filter(campaign =>
      campaign.name.toLowerCase().includes(searchTerm)
    )
    .sort((a, b) => {
      const comparison = new Date(a.startDate) - new Date(b.startDate);
      return sortOrder === 'asc' ? comparison : -comparison;
    });

  return (
    <section className="health-campaigns-section">
      <h2>Health Campaigns & Awareness Programs</h2>
      
      {/* Search and Filter */}
      <div className="search-sort-controls">
        <input
          type="text"
          placeholder="Search campaigns..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={sortOrder} onChange={handleSortChange}>
          <option value="asc">Sort by Start Date (Earliest First)</option>
          <option value="desc">Sort by Start Date (Latest First)</option>
        </select>
      </div>
      
      {/* Campaigns List */}
      <ul>
        {filteredCampaigns.map(campaign => (
          <li key={campaign.id} onClick={() => handleCampaignClick(campaign)}>
            <h3>{campaign.name}</h3>
            <p>{campaign.description}</p>
            <p>Start Date: {new Date(campaign.startDate).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>

      {/* Detailed View Modal */}
      {selectedCampaign && (
        <div className="campaign-modal">
          <div className="modal-content">
            <span className="close-button" onClick={() => setSelectedCampaign(null)}>&times;</span>
            <h3>{selectedCampaign.name}</h3>
            <p><strong>Description:</strong> {selectedCampaign.description}</p>
            <p><strong>Start Date:</strong> {new Date(selectedCampaign.startDate).toLocaleDateString()}</p>
            {/* Add more detailed information as needed */}
          </div>
        </div>
      )}
    </section>
  );
};

export default HealthCampaignsSection;
