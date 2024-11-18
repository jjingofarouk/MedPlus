import React, { useEffect, useState } from "react";

const SupportGroups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      // Fetch support groups from the backend in the future
      const dummyData = [
        { id: 1, name: "Diabetes Support Group", meetingTime: "Every Tuesday at 6 PM" },
        { id: 2, name: "Mental Health Support Group", meetingTime: "Every Thursday at 7 PM" },
        { id: 3, name: "Cancer Survivor Group", meetingTime: "Every Saturday at 10 AM" },
      ];
      setGroups(dummyData);
    };
    fetchGroups();
  }, []);

  return (
    <div className="support-groups">
      <h3>Support Groups</h3>
      <ul>
        {groups.map((group) => (
          <li key={group.id}>
            <strong>{group.name}</strong> - {group.meetingTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupportGroups;
