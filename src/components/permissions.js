// permissions.js

// Define permissions
const permissions = {
    VIEW_RECORDS: 'view_records',
    EDIT_RECORDS: 'edit_records',
    VIEW_APPOINTMENTS: 'view_appointments',
    // add more as needed
  };
  
  // Check if the user has the necessary permissions
  export const hasPermission = (userPermissions, requiredPermission) => {
    return userPermissions.includes(requiredPermission);
  };
  
  export default permissions;
  