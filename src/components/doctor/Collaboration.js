import React from 'react';

const Collaboration = () => {
  const inviteCollaborator = () => {
    console.log("Inviting a collaborator...");
    // Implement collaboration features
  };

  return (
    <div className="collaboration">
      <h4 className="text-md font-semibold">Collaboration Tools</h4>
      <p className="text-sm text-gray-600">Invite team members to collaborate on qualitative analysis.</p>
      <button onClick={inviteCollaborator} className="btn btn-primary">Invite Collaborator</button>
    </div>
  );
};

export default Collaboration;
