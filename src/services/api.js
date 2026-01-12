const API_BASE_URL = 'http://localhost:5000/api';

// Helper function for API calls
const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

// Dashboard APIs
export const dashboardAPI = {
  getStats: () => apiCall('/dashboard/stats'),
  getAdminDashboard: () => apiCall('/dashboard/admin'),
  getTeacherDashboard: (email) => apiCall(`/dashboard/teacher/${email}`),
};

// Student APIs
export const studentAPI = {
  getAll: () => apiCall('/students'),
  getById: (id) => apiCall(`/students/${id}`),
  getStats: () => apiCall('/students/stats'),
  getByClass: (className, section) => apiCall(`/students/class/${className}/${section}`),
  add: (data) => apiCall('/students', { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => apiCall(`/students/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id) => apiCall(`/students/${id}`, { method: 'DELETE' }),
};

// Teacher APIs
export const teacherAPI = {
  getAll: () => apiCall('/teachers'),
  getById: (id) => apiCall(`/teachers/${id}`),
  getStats: () => apiCall('/teachers/stats'),
  add: (data) => apiCall('/teachers', { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => apiCall(`/teachers/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id) => apiCall(`/teachers/${id}`, { method: 'DELETE' }),
};

// Attendance APIs
export const attendanceAPI = {
  mark: (data) => apiCall('/attendance', { method: 'POST', body: JSON.stringify(data) }),
  getStats: () => apiCall('/attendance/stats'),
  getByClassAndDate: (className, section, date) => apiCall(`/attendance/class/${className}/${section}/${date}`),
  getByStudent: (studentId, params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiCall(`/attendance/student/${studentId}${query ? `?${query}` : ''}`);
  },
};

// Marks APIs
export const marksAPI = {
  add: (data) => apiCall('/marks', { method: 'POST', body: JSON.stringify(data) }),
  getByStudent: (studentId) => apiCall(`/marks/student/${studentId}`),
  getByClassAndExam: (className, section, examType) => apiCall(`/marks/class/${className}/${section}/${examType}`),
  getStudentPerformance: (studentId) => apiCall(`/marks/performance/student/${studentId}`),
  getClassPerformance: (className, section) => apiCall(`/marks/performance/class/${className}/${section}`),
  update: (id, data) => apiCall(`/marks/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
};

// Notice APIs
export const noticeAPI = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiCall(`/notices${query ? `?${query}` : ''}`);
  },
  getById: (id) => apiCall(`/notices/${id}`),
  getRecent: () => apiCall('/notices/recent'),
  create: (data) => apiCall('/notices', { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => apiCall(`/notices/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id) => apiCall(`/notices/${id}`, { method: 'DELETE' }),
};

// Auth APIs
export const authAPI = {
  login: (data) => apiCall('/auth/login', { method: 'POST', body: JSON.stringify(data) }),
  signup: (data) => apiCall('/auth/signup', { method: 'POST', body: JSON.stringify(data) }),
};