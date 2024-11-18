import React, { useEffect, useState } from "react";

const CaregiverResources = () => {
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchResources = async () => {
      // Fetch caregiver resources from the backend in the future
      const dummyData = [
        { id: 1, title: "Caregiver Support Guide", category: "General", link: "/resources/caregiver-support" },
        { id: 2, title: "Self-Care for Caregivers", category: "Self-Care", link: "/resources/self-care" },
        { id: 3, title: "Local Support Groups for Caregivers", category: "Support Groups", link: "/resources/support-groups" },
        { id: 4, title: "Mental Health Resources for Caregivers", category: "Mental Health", link: "/resources/mental-health" },
        { id: 5, title: "Respite Care Options", category: "Respite Care", link: "/resources/respite-care" },
      ];
      setResources(dummyData);
      setFilteredResources(dummyData);
    };
    fetchResources();
  }, []);

  useEffect(() => {
    // Filter resources based on search input
    const filtered = resources.filter(resource =>
      resource.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredResources(filtered);
  }, [search, resources]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="caregiver-resources">
      <h3>Caregiver Resources</h3>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search resources..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <div className="category-filters">
        <button onClick={() => setFilteredResources(resources.filter(res => res.category === "General"))}>General</button>
        <button onClick={() => setFilteredResources(resources.filter(res => res.category === "Self-Care"))}>Self-Care</button>
        <button onClick={() => setFilteredResources(resources.filter(res => res.category === "Support Groups"))}>Support Groups</button>
        <button onClick={() => setFilteredResources(resources.filter(res => res.category === "Mental Health"))}>Mental Health</button>
        <button onClick={() => setFilteredResources(resources.filter(res => res.category === "Respite Care"))}>Respite Care</button>
        <button onClick={() => setFilteredResources(resources)}>All</button>
      </div>
      <ul>
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <li key={resource.id}>
              <a href={resource.link}>{resource.title}</a>
            </li>
          ))
        ) : (
          <li>No resources found</li>
        )}
      </ul>
    </div>
  );
};

export default CaregiverResources;
