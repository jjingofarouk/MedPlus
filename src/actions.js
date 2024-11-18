// Action Types
export const SET_ROLE = 'SET_ROLE';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_USER = 'SET_USER';
export const FETCH_APPOINTMENTS = 'FETCH_APPOINTMENTS';
export const BOOK_APPOINTMENT = 'BOOK_APPOINTMENT';
export const CANCEL_APPOINTMENT = 'CANCEL_APPOINTMENT';
export const UPDATE_APPOINTMENT = 'UPDATE_APPOINTMENT';
export const FETCH_DOCTORS = 'FETCH_DOCTORS';
export const SET_DOCTORS = 'SET_DOCTORS';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

// Action Creators
export const setRole = (role) => ({
  type: SET_ROLE,
  payload: role,
});

export const login = (user) => ({
  type: LOGIN,
  payload: user, // user object containing id, username, and userType
});

export const logout = () => ({
  type: LOGOUT,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user, // user object containing user details
});

export const fetchAppointments = (appointments) => ({
  type: FETCH_APPOINTMENTS,
  payload: appointments, // array of appointment objects
});

export const bookAppointment = (appointment) => ({
  type: BOOK_APPOINTMENT,
  payload: appointment, // appointment object
});

export const cancelAppointment = (appointmentId) => ({
  type: CANCEL_APPOINTMENT,
  payload: appointmentId, // ID of the appointment to cancel
});

export const updateAppointment = (appointment) => ({
  type: UPDATE_APPOINTMENT,
  payload: appointment, // updated appointment object
});

export const fetchDoctors = () => ({
  type: FETCH_DOCTORS,
});

export const setDoctors = (doctors) => ({
  type: SET_DOCTORS,
  payload: doctors, // array of doctor objects
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading, // boolean value indicating loading state
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error, // error message or object
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});
