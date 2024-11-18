// TechnicalSupport.js
import React, { useState } from 'react';

const TechnicalSupport = () => {
  const [tickets, setTickets] = useState([
    { id: 1, issue: "Cannot access dashboard", status: "Open" },
    { id: 2, issue: "Error on patient history page", status: "Resolved" },
  ]);
  const [newIssue, setNewIssue] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const handleSubmitTicket = () => {
    if (newIssue) {
      setTickets([...tickets, { id: tickets.length + 1, issue: newIssue, status: "Open" }]);
      setNewIssue("");
    }
  };

  const handleFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const filteredTickets = tickets.filter(ticket =>
    statusFilter === "All" || ticket.status === statusFilter
  );

  return (
    <div>
      <h3>Technical Support</h3>
      <input
        type="text"
        value={newIssue}
        onChange={(e) => setNewIssue(e.target.value)}
        placeholder="Describe your issue..."
      />
      <button onClick={handleSubmitTicket}>Submit Ticket</button>

      <h4>Your Tickets</h4>
      <select value={statusFilter} onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Open">Open</option>
        <option value="Resolved">Resolved</option>
      </select>
      <ul>
        {filteredTickets.map(ticket => (
          <li key={ticket.id}>
            {ticket.issue} - {ticket.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechnicalSupport;
