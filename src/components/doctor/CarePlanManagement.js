import React, { useEffect, useState } from "react";
import Modal from "react-modal"; 
import Button from "../ui/button"; 
import './CarePlanManagement.css';

const CarePlanManagement = () => {
  const [carePlans, setCarePlans] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);
  const [newPlan, setNewPlan] = useState({ patientName: "", planDetails: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchCarePlans = async () => {
      setLoading(true);
      const dummyData = [
        { id: 1, patientName: "Jjingo Farouk", planDetails: "Diet and exercise regimen." },
        { id: 2, patientName: "Shadrah Flower", planDetails: "Medication schedule." },
      ];
      setCarePlans(dummyData);
      setLoading(false);
    };
    fetchCarePlans();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const openModal = (plan) => {
    setEditingPlan(plan);
    setNewPlan(plan || { patientName: "", planDetails: "" });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEditingPlan(null);
    setNewPlan({ patientName: "", planDetails: "" });
  };

  const handleSave = () => {
    if (!newPlan.patientName || !newPlan.planDetails) {
      alert("Please fill in both fields.");
      return;
    }
    
    if (editingPlan) {
      setCarePlans((prev) =>
        prev.map((plan) => (plan.id === editingPlan.id ? newPlan : plan))
      );
      setMessage("Care plan updated successfully.");
    } else {
      setCarePlans((prev) => [...prev, { ...newPlan, id: prev.length + 1 }]);
      setMessage("Care plan added successfully.");
    }
    closeModal();
  };

  const handleDelete = (id) => {
    setCarePlans((prev) => prev.filter((plan) => plan.id !== id));
    setMessage("Care plan deleted successfully.");
  };

  const filteredCarePlans = carePlans.filter((plan) =>
    plan.patientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCarePlans = [...filteredCarePlans].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.patientName.localeCompare(b.patientName);
    } else {
      return b.patientName.localeCompare(a.patientName);
    }
  });

  return (
    <div className="care-plan-management">
      <h3>Care Plan Management</h3>
      {message && <div className="message">{message}</div>}

      <input
        type="text"
        placeholder="Search by patient name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <Button onClick={() => openModal(null)}>Add New Care Plan</Button>
      <Button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
        Sort by Patient Name {sortOrder === "asc" ? "Descending" : "Ascending"}
      </Button>

      <ul>
        {sortedCarePlans.map((plan) => (
          <li key={plan.id}>
            <strong>{plan.patientName}</strong>: {plan.planDetails}
            <Button onClick={() => openModal(plan)}>Edit</Button>
            <Button onClick={() => handleDelete(plan.id)}>Delete</Button>
          </li>
        ))}
      </ul>

      {/* Modal for Adding/Editing Care Plans */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal" overlayClassName="overlay">
        <h2>{editingPlan ? "Edit Care Plan" : "Add New Care Plan"}</h2>
        <form>
          <input
            type="text"
            placeholder="Patient Name"
            value={newPlan.patientName}
            onChange={(e) => setNewPlan({ ...newPlan, patientName: e.target.value })}
          />
          <textarea
            placeholder="Plan Details"
            value={newPlan.planDetails}
            onChange={(e) => setNewPlan({ ...newPlan, planDetails: e.target.value })}
          />
          <Button onClick={handleSave}>{editingPlan ? "Update" : "Save"}</Button>
          <Button onClick={closeModal}>Cancel</Button>
        </form>
      </Modal>
    </div>
  );
};

export default CarePlanManagement;
