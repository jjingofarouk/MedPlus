// permissions.js

// Define permissions as constants for better maintainability and readability
const permissions = {
  // General Permissions
  VIEW_RECORDS: 'view_records',          // Permission to view medical records
  EDIT_RECORDS: 'edit_records',          // Permission to edit medical records
  VIEW_APPOINTMENTS: 'view_appointments', // Permission to view appointment details
  EDIT_APPOINTMENTS: 'edit_appointments', // Permission to edit appointment details
  VIEW_MEDICATIONS: 'view_medications',  // Permission to view medications
  EDIT_MEDICATIONS: 'edit_medications',  // Permission to edit medications
  VIEW_ANALYTICS: 'view_analytics',      // Permission to view analytics and reports
  MANAGE_USERS: 'manage_users',          // Permission to manage user accounts

  // Clinical Permissions
  VIEW_LAB_RESULTS: 'view_lab_results',   // Permission to view lab results
  EDIT_LAB_RESULTS: 'edit_lab_results',   // Permission to edit lab results
  VIEW_TEST_RESULTS: 'view_test_results', // Permission to view test results
  EDIT_TEST_RESULTS: 'edit_test_results', // Permission to edit test results
  VIEW_MEDICAL_HISTORY: 'view_medical_history', // Permission to view medical history

  // Appointment Management Permissions
  CANCEL_APPOINTMENTS: 'cancel_appointments', // Permission to cancel appointments
  RESCHEDULE_APPOINTMENTS: 'reschedule_appointments', // Permission to reschedule appointments
  VIEW_APPOINTMENT_NOTES: 'view_appointment_notes', // Permission to view notes from appointments

  // Educational and Resource Permissions
  ACCESS_EDUCATIONAL_MATERIALS: 'access_educational_materials', // Permission to access educational resources
  REQUEST_REFERRALS: 'request_referrals', // Permission to request referrals
  VIEW_PATIENT_ALERTS: 'view_patient_alerts', // Permission to view patient alerts

  // Billing and Compliance Permissions
  VIEW_BILLING_INFO: 'view_billing_info', // Permission to view billing information
  EDIT_BILLING_INFO: 'edit_billing_info', // Permission to edit billing information
  ACCESS_COMPLIANCE_REPORTS: 'access_compliance_reports', // Permission to access compliance reports

  // Additional Permissions
  VIEW_COMMUNICATIONS: 'view_communications', // Permission to view patient communications
  SEND_COMMUNICATIONS: 'send_communications', // Permission to send communications to patients
  MANAGE_ADMIN_SETTINGS: 'manage_admin_settings', // Permission to manage application settings
  // Add more permissions as necessary
};

// Check if the user has the necessary permissions
export const hasPermission = (userPermissions, requiredPermission) => {
  // Check if userPermissions is an array and requiredPermission is a string
  if (!Array.isArray(userPermissions) || typeof requiredPermission !== 'string') {
    console.error('Invalid arguments passed to hasPermission: userPermissions should be an array and requiredPermission should be a string.');
    return false; // Return false if the input is invalid
  }
  
  // Return true if the user has the required permission, false otherwise
  return userPermissions.includes(requiredPermission);
};

// Export the permissions object for usage in other parts of the application
export default permissions;
