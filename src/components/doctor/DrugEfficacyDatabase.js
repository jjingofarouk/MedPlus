import React, { useState, useEffect } from 'react';
import { FaPills } from 'react-icons/fa'; // Import your icon library here
import axios from 'axios'; // For API requests (ensure you have it installed)
import { Select } from './ui/select';

const DrugEfficacyDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [drugData, setDrugData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedDrug, setSelectedDrug] = useState(null);

  useEffect(() => {
    // Fetch drug efficacy data from a hypothetical API
    const fetchDrugData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/api/drug-efficacy'); // Replace with your API endpoint
        setDrugData(response.data);
        setFilteredData(response.data);
      } catch (err) {
        setError('Error fetching drug efficacy data.');
      } finally {
        setLoading(false);
      }
    };

    fetchDrugData();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter the drug data based on the search term
    if (value) {
      const filtered = drugData.filter((drug) =>
        drug.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(drugData);
    }
  };

  const handleSelectDrug = (drug) => {
    setSelectedDrug(drug);
  };

  const closeDetailView = () => {
    setSelectedDrug(null);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <FaPills className="w-8 h-8" />
        <h3 className="text-xl font-semibold ml-2">Drug Efficacy Database</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Searchable database of drug efficacy studies specific to Ugandan populations and local disease strains.
      </p>

      <input
        type="text"
        placeholder="Search for a drug..."
        value={searchTerm}
        onChange={handleSearch}
        className="border rounded p-2 mb-4 w-full"
      />

      {selectedDrug ? (
        <div className="border rounded p-4">
          <h4 className="text-lg font-semibold">{selectedDrug.name}</h4>
          <p><strong>Efficacy Rate:</strong> {selectedDrug.efficacyRate}%</p>
          <p><strong>Description:</strong> {selectedDrug.description}</p>
          <button className="bg-red-500 text-white p-2 rounded" onClick={closeDetailView}>Close</button>
        </div>
      ) : (
        <div>
          <h4 className="text-lg font-semibold">Results:</h4>
          <ul className="list-disc pl-5">
            {filteredData.map((drug) => (
              <li key={drug.id} className="cursor-pointer mb-2" onClick={() => handleSelectDrug(drug)}>
                <span className="font-medium">{drug.name}</span> - Efficacy Rate: {drug.efficacyRate}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DrugEfficacyDatabase;
