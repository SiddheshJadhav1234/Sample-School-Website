import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
import Dashboard from '../../components/Dashboard/Dashboard';
import { FaUsers, FaChalkboardTeacher, FaBook, FaCalendarAlt, FaClipboardList, FaGraduationCap, FaTrophy, FaFileAlt, FaCog, FaChartBar, FaDollarSign, FaBell } from 'react-icons/fa';

const DynamicDashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  const getDashboardData = () => {
    switch (user.role) {
      case 'admin':
        return {
          sidebarItems: [
            { id: 'overview', name: 'Overview', icon: FaChartBar },
            { id: 'students', name: 'Students', icon: FaGraduationCap },
            { id: 'teachers', name: 'Teachers', icon: FaChalkboardTeacher },
            { id: 'classes', name: 'Classes', icon: FaBook },
            { id: 'schedule', name: 'Schedule', icon: FaCalendarAlt },
            { id: 'finance', name: 'Finance', icon: FaDollarSign },
            { id: 'reports', name: 'Reports', icon: FaFileAlt },
            { id: 'settings', name: 'Settings', icon: FaCog }
          ],
          header: {
            title: 'Admin Dashboard',
            subtitle: 'M.M. Vidya Mandir Primary School',
            badgeText: 'Admin'
          },
          stats: [
            { title: 'Total Students', value: '1,234', change: '+12%', color: 'blue' },
            { title: 'Total Teachers', value: '56', change: '+3%', color: 'green' },
            { title: 'Active Classes', value: '24', change: '+8%', color: 'purple' },
            { title: 'Monthly Revenue', value: '₹2.4L', change: '+15%', color: 'amber' }
          ],
          sections: {
            overview: {
              component: 'TableSection',
              props: {
                title: 'Recent Student Enrollments',
                columns: [
                  { header: 'Name', accessor: 'name' },
                  { header: 'Class', accessor: 'class' },
                  { header: 'Date', accessor: 'date' },
                  { header: 'Status', accessor: 'status' }
                ],
                rows: [
                  { name: 'Arjun Patel', class: 'Class 5A', date: '2024-01-15', status: 'Active' },
                  { name: 'Priya Sharma', class: 'Class 4B', date: '2024-01-14', status: 'Active' },
                  { name: 'Rahul Kumar', class: 'Class 3C', date: '2024-01-13', status: 'Pending' }
                ],
                showAddButton: true,
                actions: ['view', 'edit']
              }
            },
            students: {
              component: 'TableSection',
              props: {
                title: 'Student Management', 
                columns: [
                  { header: 'Student ID', accessor: 'id' },
                  { header: 'Name', accessor: 'name' },
                  { header: 'Class', accessor: 'class' },
                  { header: 'Parent Contact', accessor: 'contact' },
                  { header: 'Fees Status', accessor: 'fees' }
                ],
                rows: [
                  { id: 'STU001', name: 'Arjun Patel', class: '5A', contact: '+91 98765 43210', fees: 'Paid' },
                  { id: 'STU002', name: 'Priya Sharma', class: '4B', contact: '+91 87654 32109', fees: 'Pending' },
                  { id: 'STU003', name: 'Rahul Kumar', class: '3C', contact: '+91 76543 21098', fees: 'Paid' },
                  { id: 'STU004', name: 'Sneha Singh', class: '5B', contact: '+91 65432 10987', fees: 'Overdue' }
                ],
                showAddButton: true,
                showSearch: true,
                actions: ['view', 'edit', 'delete']
              }
            },
            teachers: {
              component: 'TableSection',
              props: {
                title: 'Teacher Management',
                columns: [
                  { header: 'Teacher ID', accessor: 'id' },
                  { header: 'Name', accessor: 'name' },
                  { header: 'Subject', accessor: 'subject' },
                  { header: 'Classes', accessor: 'classes' },
                  { header: 'Experience', accessor: 'experience' }
                ],
                rows: [
                  { id: 'TCH001', name: 'Mrs. Priya Sharma', subject: 'Mathematics', classes: '5A, 5B', experience: '8 years' },
                  { id: 'TCH002', name: 'Mr. Rajesh Kumar', subject: 'Science', classes: '4A, 4B', experience: '12 years' },
                  { id: 'TCH003', name: 'Ms. Anita Singh', subject: 'English', classes: '3A, 3B', experience: '6 years' },
                  { id: 'TCH004', name: 'Mr. Suresh Patel', subject: 'Hindi', classes: '2A, 2B', experience: '10 years' }
                ],
                showAddButton: true,
                showSearch: true,
                actions: ['view', 'edit']
              }
            },
            classes: {
              component: 'TableSection',
              props: {
                title: 'Class Management',
                columns: [
                  { header: 'Class', accessor: 'class' },
                  { header: 'Teacher', accessor: 'teacher' },
                  { header: 'Students', accessor: 'students' },
                  { header: 'Room', accessor: 'room' },
                  { header: 'Schedule', accessor: 'schedule' }
                ],
                rows: [
                  { class: 'Class 5A', teacher: 'Mrs. Priya Sharma', students: '25', room: 'Room 101', schedule: '9:00 AM - 3:00 PM' },
                  { class: 'Class 5B', teacher: 'Mr. Rajesh Kumar', students: '24', room: 'Room 102', schedule: '9:00 AM - 3:00 PM' },
                  { class: 'Class 4A', teacher: 'Ms. Anita Singh', students: '26', room: 'Room 201', schedule: '9:00 AM - 2:30 PM' },
                  { class: 'Class 4B', teacher: 'Mr. Suresh Patel', students: '23', room: 'Room 202', schedule: '9:00 AM - 2:30 PM' }
                ],
                showAddButton: true,
                actions: ['view', 'edit']
              }
            },
            schedule: {
              component: 'ScheduleSection',
              props: {
                title: 'School Schedule',
                scheduleData: [
                  {
                    day: 'Monday',
                    periods: [
                      '9:00 AM - Assembly',
                      '9:30 AM - Period 1',
                      '10:30 AM - Break',
                      '11:00 AM - Period 2',
                      '12:00 PM - Lunch',
                      '1:00 PM - Period 3',
                      '2:00 PM - Sports'
                    ]
                  },
                  {
                    day: 'Tuesday',
                    periods: [
                      '9:00 AM - Assembly',
                      '9:30 AM - Period 1',
                      '10:30 AM - Break',
                      '11:00 AM - Period 2',
                      '12:00 PM - Lunch',
                      '1:00 PM - Period 3',
                      '2:00 PM - Library'
                    ]
                  },
                  {
                    day: 'Wednesday',
                    periods: [
                      '9:00 AM - Assembly',
                      '9:30 AM - Period 1',
                      '10:30 AM - Break',
                      '11:00 AM - Period 2',
                      '12:00 PM - Lunch',
                      '1:00 PM - Period 3',
                      '2:00 PM - Art & Craft'
                    ]
                  }
                ]
              }
            },
            finance: {
              component: 'FinanceSection',
              props: {
                revenue: { value: '₹2,40,000', change: '+15%' },
                pending: { value: '₹45,000', students: '12' },
                expenses: { value: '₹1,80,000', type: 'Salaries & Operations' },
                feeData: [
                  { student: 'Arjun Patel', class: '5A', amount: '₹5,000', dueDate: '2024-01-15', status: 'Paid' },
                  { student: 'Priya Sharma', class: '4B', amount: '₹4,500', dueDate: '2024-01-10', status: 'Pending' },
                  { student: 'Rahul Kumar', class: '3C', amount: '₹4,000', dueDate: '2024-01-05', status: 'Overdue' }
                ]
              }
            },
            reports: {
              component: 'ReportsSection',
              props: {
                reports: [
                  { title: 'Attendance Report', description: 'Overall attendance: 92%' },
                  { title: 'Academic Performance', description: 'Average grade: 85%' },
                  { title: 'Financial Report', description: 'Monthly summary' },
                  { title: 'Teacher Performance', description: 'Evaluation summary' }
                ]
              }
            },
            settings: {
              component: 'SettingsSection',
              props: {
                schoolInfo: {
                  name: 'M.M. Vidya Mandir',
                  contact: '+91 98765 43210'
                },
                academicYear: '2024-2025',
                notifications: {
                  emailEnrollments: true,
                  smsPayments: true
                }
              }
            }
          }
        };

      case 'teacher':
        return {
          sidebarItems: [
            { id: 'overview', name: 'Overview', icon: FaChartBar },
            { id: 'students', name: 'My Students', icon: FaUsers },
            { id: 'lessons', name: 'Lesson Plans', icon: FaBook },
            { id: 'assignments', name: 'Assignments', icon: FaClipboardList },
            { id: 'grades', name: 'Grades', icon: FaFileAlt },
            { id: 'schedule', name: 'My Schedule', icon: FaCalendarAlt }
          ],
          header: {
            title: 'Teacher Dashboard',
            subtitle: 'Mrs. Priya Sharma - Mathematics Teacher',
            badgeText: 'Teacher'
          },
          stats: [
            { title: 'My Students', value: '45', change: '+2%', color: 'blue' },
            { title: 'Classes Today', value: '6', change: '0%', color: 'green' },
            { title: 'Pending Grades', value: '12', change: '-5%', color: 'red' },
            { title: 'Assignments', value: '8', change: '+1%', color: 'purple' }
          ],
          sections: {
            overview: {
              component: 'TableSection',
              props: {
                title: 'Recent Assignments',
                columns: [
                  { header: 'Assignment', accessor: 'assignment' },
                  { header: 'Class', accessor: 'class' },
                  { header: 'Due Date', accessor: 'dueDate' },
                  { header: 'Submissions', accessor: 'submissions' }
                ],
                rows: [
                  { assignment: 'Math Quiz 1', class: 'Class 5A', dueDate: '2024-01-20', submissions: '23/25' },
                  { assignment: 'Science Project', class: 'Class 5B', dueDate: '2024-01-22', submissions: '18/24' },
                  { assignment: 'English Essay', class: 'Class 4A', dueDate: '2024-01-18', submissions: '20/22' }
                ],
                showAddButton: true,
                actions: ['view', 'edit']
              }
            },
            students: {
              component: 'TableSection',
              props: {
                title: 'My Students',
                columns: [
                  { header: 'Student ID', accessor: 'id' },
                  { header: 'Name', accessor: 'name' },
                  { header: 'Class', accessor: 'class' },
                  { header: 'Attendance', accessor: 'attendance' },
                  { header: 'Last Grade', accessor: 'grade' }
                ],
                rows: [
                  { id: 'STU001', name: 'Arjun Patel', class: '5A', attendance: '95%', grade: 'A' },
                  { id: 'STU002', name: 'Priya Sharma', class: '5A', attendance: '92%', grade: 'B+' },
                  { id: 'STU003', name: 'Rahul Kumar', class: '5B', attendance: '88%', grade: 'B' }
                ],
                showSearch: true,
                actions: ['view', 'edit']
              }
            },
            lessons: {
              component: 'LessonSection',
              props: {
                lessons: [
                  { title: 'Chapter 5: Fractions', class: 'Class 5A - Mathematics', description: 'Introduction to fractions and basic operations' },
                  { title: 'Chapter 6: Decimals', class: 'Class 5B - Mathematics', description: 'Understanding decimal numbers and place values' },
                  { title: 'Chapter 4: Geometry', class: 'Class 4A - Mathematics', description: 'Basic shapes and their properties' }
                ]
              }
            },
            assignments: {
              component: 'TableSection',
              props: {
                title: 'Assignment Management',
                columns: [
                  { header: 'Assignment', accessor: 'assignment' },
                  { header: 'Class', accessor: 'class' },
                  { header: 'Created', accessor: 'created' },
                  { header: 'Due Date', accessor: 'dueDate' }
                ],
                rows: [
                  { assignment: 'Fraction Worksheet', class: '5A', created: '2024-01-10', dueDate: '2024-01-20' },
                  { assignment: 'Decimal Problems', class: '5B', created: '2024-01-12', dueDate: '2024-01-22' }
                ],
                showAddButton: true,
                showSearch: true,
                actions: ['view', 'edit', 'delete']
              }
            },
            grades: {
              component: 'TableSection',
              props: {
                title: 'Grade Management',
                columns: [
                  { header: 'Student', accessor: 'student' },
                  { header: 'Assignment', accessor: 'assignment' },
                  { header: 'Score', accessor: 'score' },
                  { header: 'Grade', accessor: 'grade' }
                ],
                rows: [
                  { student: 'Arjun Patel', assignment: 'Math Quiz 1', score: '85/100', grade: 'A' },
                  { student: 'Priya Sharma', assignment: 'Math Quiz 1', score: '78/100', grade: 'B+' }
                ],
                showSearch: true,
                actions: ['edit']
              }
            },
            schedule: {
              component: 'TeacherScheduleSection',
              props: {
                schedule: [
                  { day: 'Monday', classes: [{ time: '9:30 AM', subject: 'Math 5A' }, { time: '10:30 AM', subject: 'Math 5B' }] },
                  { day: 'Tuesday', classes: [{ time: '9:30 AM', subject: 'Math 5A' }, { time: '11:00 AM', subject: 'Math 4B' }] },
                  { day: 'Wednesday', classes: [{ time: '9:30 AM', subject: 'Math 4A' }, { time: '10:30 AM', subject: 'Math 5A' }] }
                ]
              }
            }
          }
        };

      case 'student':
        return {
          sidebarItems: [
            { id: 'overview', name: 'Overview', icon: FaChartBar },
            { id: 'assignments', name: 'Assignments', icon: FaClipboardList },
            { id: 'grades', name: 'My Grades', icon: FaFileAlt },
            { id: 'schedule', name: 'Class Schedule', icon: FaCalendarAlt },
            { id: 'achievements', name: 'Achievements', icon: FaTrophy }
          ],
          header: {
            title: 'Student Portal',
            subtitle: 'Arjun Patel - Class 5A',
            badgeText: 'Student'
          },
          stats: [
            { title: 'Assignments Due', value: '3', change: '-1%', color: 'red' },
            { title: 'Average Grade', value: '85%', change: '+5%', color: 'green' },
            { title: 'Attendance', value: '92%', change: '+2%', color: 'blue' },
            { title: 'Achievements', value: '7', change: '+1%', color: 'amber' }
          ],
          sections: {
            overview: {
              component: 'TableSection',
              props: {
                title: 'Upcoming Assignments',
                columns: [
                  { header: 'Subject', accessor: 'subject' },
                  { header: 'Assignment', accessor: 'assignment' },
                  { header: 'Due Date', accessor: 'dueDate' },
                  { header: 'Status', accessor: 'status' }
                ],
                rows: [
                  { subject: 'Mathematics', assignment: 'Chapter 5 Problems', dueDate: '2024-01-20', status: 'Pending' },
                  { subject: 'Science', assignment: 'Lab Report', dueDate: '2024-01-22', status: 'In Progress' },
                  { subject: 'English', assignment: 'Book Review', dueDate: '2024-01-25', status: 'Not Started' }
                ],
                actions: ['view']
              }
            },
            assignments: {
              component: 'TableSection',
              props: {
                title: 'All Assignments',
                columns: [
                  { header: 'Subject', accessor: 'subject' },
                  { header: 'Assignment', accessor: 'assignment' },
                  { header: 'Due Date', accessor: 'dueDate' },
                  { header: 'Status', accessor: 'status' }
                ],
                rows: [
                  { subject: 'Mathematics', assignment: 'Fraction Worksheet', dueDate: '2024-01-20', status: 'Pending' },
                  { subject: 'Science', assignment: 'Solar System Project', dueDate: '2024-01-22', status: 'In Progress' },
                  { subject: 'English', assignment: 'Story Writing', dueDate: '2024-01-18', status: 'Submitted' }
                ],
                showSearch: true,
                actions: ['view']
              }
            },
            grades: {
              component: 'GradesSection',
              props: {
                subjects: [
                  { name: 'Mathematics', grade: 'A', percentage: '85%', color: 'blue' },
                  { name: 'Science', grade: 'A+', percentage: '92%', color: 'green' },
                  { name: 'English', grade: 'B+', percentage: '78%', color: 'purple' },
                  { name: 'Hindi', grade: 'A', percentage: '88%', color: 'amber' }
                ]
              }
            },
            schedule: {
              component: 'StudentScheduleSection',
              props: {
                className: 'Class 5A',
                schedule: [
                  { 
                    day: 'Monday', 
                    periods: [
                      { time: '9:00 AM', subject: 'Assembly' }, 
                      { time: '9:30 AM', subject: 'Mathematics' },
                      { time: '10:30 AM', subject: 'Break' },
                      { time: '11:00 AM', subject: 'Science' },
                      { time: '12:00 PM', subject: 'Lunch' },
                      { time: '1:00 PM', subject: 'English' },
                      { time: '2:00 PM', subject: 'Sports' }
                    ] 
                  },
                  { 
                    day: 'Tuesday', 
                    periods: [
                      { time: '9:00 AM', subject: 'Assembly' }, 
                      { time: '9:30 AM', subject: 'Hindi' },
                      { time: '10:30 AM', subject: 'Break' },
                      { time: '11:00 AM', subject: 'Mathematics' },
                      { time: '12:00 PM', subject: 'Lunch' },
                      { time: '1:00 PM', subject: 'Science' },
                      { time: '2:00 PM', subject: 'Library' }
                    ] 
                  },
                  { 
                    day: 'Wednesday', 
                    periods: [
                      { time: '9:00 AM', subject: 'Assembly' }, 
                      { time: '9:30 AM', subject: 'English' },
                      { time: '10:30 AM', subject: 'Break' },
                      { time: '11:00 AM', subject: 'Hindi' },
                      { time: '12:00 PM', subject: 'Lunch' },
                      { time: '1:00 PM', subject: 'Mathematics' },
                      { time: '2:00 PM', subject: 'Art & Craft' }
                    ] 
                  },
                  { 
                    day: 'Thursday', 
                    periods: [
                      { time: '9:00 AM', subject: 'Assembly' }, 
                      { time: '9:30 AM', subject: 'Science' },
                      { time: '10:30 AM', subject: 'Break' },
                      { time: '11:00 AM', subject: 'English' },
                      { time: '12:00 PM', subject: 'Lunch' },
                      { time: '1:00 PM', subject: 'Hindi' },
                      { time: '2:00 PM', subject: 'Music' }
                    ] 
                  },
                  { 
                    day: 'Friday', 
                    periods: [
                      { time: '9:00 AM', subject: 'Assembly' }, 
                      { time: '9:30 AM', subject: 'Mathematics' },
                      { time: '10:30 AM', subject: 'Break' },
                      { time: '11:00 AM', subject: 'Science' },
                      { time: '12:00 PM', subject: 'Lunch' },
                      { time: '1:00 PM', subject: 'English' },
                      { time: '2:00 PM', subject: 'Games' }
                    ] 
                  },
                  { 
                    day: 'Saturday', 
                    periods: [
                      { time: '9:00 AM', subject: 'Assembly' }, 
                      { time: '9:30 AM', subject: 'Extra Classes' },
                      { time: '10:30 AM', subject: 'Break' },
                      { time: '11:00 AM', subject: 'Activity Time' },
                      { time: '12:00 PM', subject: 'Lunch' },
                      { time: '1:00 PM', subject: 'Sports' },
                      { time: '2:00 PM', subject: 'Free Time' }
                    ] 
                  }                  
                ]
              }
            },
            achievements: {
              component: 'AchievementsSection',
              props: {
                achievements: [
                  { title: 'Math Champion', description: 'Scored highest in Math Quiz', date: 'January 2024', color: 'amber' },
                  { title: 'Perfect Attendance', description: 'No absences this month', date: 'January 2024', color: 'green' },
                  { title: 'Science Star', description: 'Best Science Project', date: 'December 2023', color: 'blue' }
                ]
              }
            }
          }
        };

      default:
        return {
          sidebarItems: [{ id: 'overview', name: 'Overview', icon: FaUsers }],
          header: { title: 'Dashboard', subtitle: 'User', badgeText: 'User' },
          stats: [],
          sections: { overview: { component: 'EmptySection', props: { message: 'No content available' } } }
        };
    }
  };

  const dashboardData = getDashboardData();

  return <Dashboard role={user.role} data={dashboardData} />;
};

export default DynamicDashboard;