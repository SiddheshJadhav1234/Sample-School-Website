import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
import Dashboard from '../../components/Dashboard/Dashboard';
import TableSection from '../../components/Dashboard/TableSection';
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
            overview: () => (
              <div className="space-y-6">
                <TableSection
                  title="Recent Student Enrollments"
                  columns={[
                    { header: 'Name', accessor: 'name' },
                    { header: 'Class', accessor: 'class' },
                    { header: 'Date', accessor: 'date' },
                    { header: 'Status', accessor: 'status' }
                  ]}
                  rows={[
                    { name: 'Arjun Patel', class: 'Class 5A', date: '2024-01-15', status: 'Active' },
                    { name: 'Priya Sharma', class: 'Class 4B', date: '2024-01-14', status: 'Active' },
                    { name: 'Rahul Kumar', class: 'Class 3C', date: '2024-01-13', status: 'Pending' }
                  ]}
                  showAddButton={true}
                  actions={['view', 'edit']}
                />
              </div>
            ),
            students: () => (
              <TableSection
                title="Student Management"
                columns={[
                  { header: 'Student ID', accessor: 'id' },
                  { header: 'Name', accessor: 'name' },
                  { header: 'Class', accessor: 'class' },
                  { header: 'Parent Contact', accessor: 'contact' },
                  { header: 'Fees Status', accessor: 'fees' }
                ]}
                rows={[
                  { id: 'STU001', name: 'Arjun Patel', class: '5A', contact: '+91 98765 43210', fees: 'Paid' },
                  { id: 'STU002', name: 'Priya Sharma', class: '4B', contact: '+91 87654 32109', fees: 'Pending' },
                  { id: 'STU003', name: 'Rahul Kumar', class: '3C', contact: '+91 76543 21098', fees: 'Paid' },
                  { id: 'STU004', name: 'Sneha Singh', class: '5B', contact: '+91 65432 10987', fees: 'Overdue' }
                ]}
                showAddButton={true}
                showSearch={true}
                actions={['view', 'edit', 'delete']}
              />
            ),
            teachers: () => (
              <TableSection
                title="Teacher Management"
                columns={[
                  { header: 'Teacher ID', accessor: 'id' },
                  { header: 'Name', accessor: 'name' },
                  { header: 'Subject', accessor: 'subject' },
                  { header: 'Classes', accessor: 'classes' },
                  { header: 'Experience', accessor: 'experience' }
                ]}
                rows={[
                  { id: 'TCH001', name: 'Mrs. Priya Sharma', subject: 'Mathematics', classes: '5A, 5B', experience: '8 years' },
                  { id: 'TCH002', name: 'Mr. Rajesh Kumar', subject: 'Science', classes: '4A, 4B', experience: '12 years' },
                  { id: 'TCH003', name: 'Ms. Anita Singh', subject: 'English', classes: '3A, 3B', experience: '6 years' },
                  { id: 'TCH004', name: 'Mr. Suresh Patel', subject: 'Hindi', classes: '2A, 2B', experience: '10 years' }
                ]}
                showAddButton={true}
                showSearch={true}
                actions={['view', 'edit']}
              />
            ),
            classes: () => (
              <TableSection
                title="Class Management"
                columns={[
                  { header: 'Class', accessor: 'class' },
                  { header: 'Teacher', accessor: 'teacher' },
                  { header: 'Students', accessor: 'students' },
                  { header: 'Room', accessor: 'room' },
                  { header: 'Schedule', accessor: 'schedule' }
                ]}
                rows={[
                  { class: 'Class 5A', teacher: 'Mrs. Priya Sharma', students: '25', room: 'Room 101', schedule: '9:00 AM - 3:00 PM' },
                  { class: 'Class 5B', teacher: 'Mr. Rajesh Kumar', students: '24', room: 'Room 102', schedule: '9:00 AM - 3:00 PM' },
                  { class: 'Class 4A', teacher: 'Ms. Anita Singh', students: '26', room: 'Room 201', schedule: '9:00 AM - 2:30 PM' },
                  { class: 'Class 4B', teacher: 'Mr. Suresh Patel', students: '23', room: 'Room 202', schedule: '9:00 AM - 2:30 PM' }
                ]}
                showAddButton={true}
                actions={['view', 'edit']}
              />
            ),
            schedule: () => (
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">School Schedule</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Monday</h3>
                    <div className="space-y-2 text-sm">
                      <div>9:00 AM - Assembly</div>
                      <div>9:30 AM - Period 1</div>
                      <div>10:30 AM - Break</div>
                      <div>11:00 AM - Period 2</div>
                      <div>12:00 PM - Lunch</div>
                      <div>1:00 PM - Period 3</div>
                      <div>2:00 PM - Sports</div>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Tuesday</h3>
                    <div className="space-y-2 text-sm">
                      <div>9:00 AM - Assembly</div>
                      <div>9:30 AM - Period 1</div>
                      <div>10:30 AM - Break</div>
                      <div>11:00 AM - Period 2</div>
                      <div>12:00 PM - Lunch</div>
                      <div>1:00 PM - Period 3</div>
                      <div>2:00 PM - Library</div>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Wednesday</h3>
                    <div className="space-y-2 text-sm">
                      <div>9:00 AM - Assembly</div>
                      <div>9:30 AM - Period 1</div>
                      <div>10:30 AM - Break</div>
                      <div>11:00 AM - Period 2</div>
                      <div>12:00 PM - Lunch</div>
                      <div>1:00 PM - Period 3</div>
                      <div>2:00 PM - Art & Craft</div>
                    </div>
                  </div>
                </div>
              </div>
            ),
            finance: () => (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h3 className="text-lg font-semibold mb-2">Monthly Revenue</h3>
                    <p className="text-3xl font-bold text-green-600">₹2,40,000</p>
                    <p className="text-sm text-gray-600">+15% from last month</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h3 className="text-lg font-semibold mb-2">Pending Fees</h3>
                    <p className="text-3xl font-bold text-red-600">₹45,000</p>
                    <p className="text-sm text-gray-600">12 students</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h3 className="text-lg font-semibold mb-2">Expenses</h3>
                    <p className="text-3xl font-bold text-blue-600">₹1,80,000</p>
                    <p className="text-sm text-gray-600">Salaries & Operations</p>
                  </div>
                </div>
                <TableSection
                  title="Fee Collection Status"
                  columns={[
                    { header: 'Student', accessor: 'student' },
                    { header: 'Class', accessor: 'class' },
                    { header: 'Amount', accessor: 'amount' },
                    { header: 'Due Date', accessor: 'dueDate' },
                    { header: 'Status', accessor: 'status' }
                  ]}
                  rows={[
                    { student: 'Arjun Patel', class: '5A', amount: '₹5,000', dueDate: '2024-01-15', status: 'Paid' },
                    { student: 'Priya Sharma', class: '4B', amount: '₹4,500', dueDate: '2024-01-10', status: 'Pending' },
                    { student: 'Rahul Kumar', class: '3C', amount: '₹4,000', dueDate: '2024-01-05', status: 'Overdue' }
                  ]}
                  showSearch={true}
                />
              </div>
            ),
            reports: () => (
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Reports & Analytics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-semibold mb-2">Attendance Report</h3>
                    <p className="text-sm text-gray-600 mb-4">Overall attendance: 92%</p>
                    <button className="bg-amber-500 text-white px-4 py-2 rounded-lg text-sm">Download PDF</button>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-semibold mb-2">Academic Performance</h3>
                    <p className="text-sm text-gray-600 mb-4">Average grade: 85%</p>
                    <button className="bg-amber-500 text-white px-4 py-2 rounded-lg text-sm">Download PDF</button>
                  </div>
                </div>
              </div>
            ),
            settings: () => (
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">System Settings</h2>
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="font-semibold mb-2">School Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input className="border border-gray-300 rounded-lg px-3 py-2" placeholder="School Name" defaultValue="M.M. Vidya Mandir" />
                      <input className="border border-gray-300 rounded-lg px-3 py-2" placeholder="Contact Number" defaultValue="+91 98765 43210" />
                    </div>
                  </div>
                </div>
              </div>
            )
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
            overview: () => (
              <TableSection
                title="Recent Assignments"
                columns={[
                  { header: 'Assignment', accessor: 'assignment' },
                  { header: 'Class', accessor: 'class' },
                  { header: 'Due Date', accessor: 'dueDate' },
                  { header: 'Submissions', accessor: 'submissions' }
                ]}
                rows={[
                  { assignment: 'Math Quiz 1', class: 'Class 5A', dueDate: '2024-01-20', submissions: '23/25' },
                  { assignment: 'Science Project', class: 'Class 5B', dueDate: '2024-01-22', submissions: '18/24' },
                  { assignment: 'English Essay', class: 'Class 4A', dueDate: '2024-01-18', submissions: '20/22' }
                ]}
                showAddButton={true}
                actions={['view', 'edit']}
              />
            ),
            students: () => (
              <TableSection
                title="My Students"
                columns={[
                  { header: 'Student ID', accessor: 'id' },
                  { header: 'Name', accessor: 'name' },
                  { header: 'Class', accessor: 'class' },
                  { header: 'Attendance', accessor: 'attendance' },
                  { header: 'Last Grade', accessor: 'grade' }
                ]}
                rows={[
                  { id: 'STU001', name: 'Arjun Patel', class: '5A', attendance: '95%', grade: 'A' },
                  { id: 'STU002', name: 'Priya Sharma', class: '5A', attendance: '92%', grade: 'B+' },
                  { id: 'STU003', name: 'Rahul Kumar', class: '5B', attendance: '88%', grade: 'B' }
                ]}
                showSearch={true}
                actions={['view', 'edit']}
              />
            ),
            lessons: () => (
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Lesson Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Chapter 5: Fractions</h3>
                    <p className="text-sm text-gray-600 mb-2">Class 5A - Mathematics</p>
                    <p className="text-sm mb-4">Introduction to fractions and basic operations</p>
                  </div>
                </div>
              </div>
            ),
            assignments: () => (
              <TableSection
                title="Assignment Management"
                columns={[
                  { header: 'Assignment', accessor: 'assignment' },
                  { header: 'Class', accessor: 'class' },
                  { header: 'Created', accessor: 'created' },
                  { header: 'Due Date', accessor: 'dueDate' }
                ]}
                rows={[
                  { assignment: 'Fraction Worksheet', class: '5A', created: '2024-01-10', dueDate: '2024-01-20' },
                  { assignment: 'Decimal Problems', class: '5B', created: '2024-01-12', dueDate: '2024-01-22' }
                ]}
                showAddButton={true}
                showSearch={true}
                actions={['view', 'edit', 'delete']}
              />
            ),
            grades: () => (
              <TableSection
                title="Grade Management"
                columns={[
                  { header: 'Student', accessor: 'student' },
                  { header: 'Assignment', accessor: 'assignment' },
                  { header: 'Score', accessor: 'score' },
                  { header: 'Grade', accessor: 'grade' }
                ]}
                rows={[
                  { student: 'Arjun Patel', assignment: 'Math Quiz 1', score: '85/100', grade: 'A' },
                  { student: 'Priya Sharma', assignment: 'Math Quiz 1', score: '78/100', grade: 'B+' }
                ]}
                showSearch={true}
                actions={['edit']}
              />
            ),
            schedule: () => (
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">My Teaching Schedule</h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3">Monday</h3>
                    <div className="space-y-2 text-sm">
                      <div className="p-2 bg-blue-100 rounded">9:30 AM - Math 5A</div>
                      <div className="p-2 bg-green-100 rounded">10:30 AM - Math 5B</div>
                    </div>
                  </div>
                </div>
              </div>
            )
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
            overview: () => (
              <TableSection
                title="Upcoming Assignments"
                columns={[
                  { header: 'Subject', accessor: 'subject' },
                  { header: 'Assignment', accessor: 'assignment' },
                  { header: 'Due Date', accessor: 'dueDate' },
                  { header: 'Status', accessor: 'status' }
                ]}
                rows={[
                  { subject: 'Mathematics', assignment: 'Chapter 5 Problems', dueDate: '2024-01-20', status: 'Pending' },
                  { subject: 'Science', assignment: 'Lab Report', dueDate: '2024-01-22', status: 'In Progress' },
                  { subject: 'English', assignment: 'Book Review', dueDate: '2024-01-25', status: 'Not Started' }
                ]}
                actions={['view']}
              />
            ),
            assignments: () => (
              <TableSection
                title="All Assignments"
                columns={[
                  { header: 'Subject', accessor: 'subject' },
                  { header: 'Assignment', accessor: 'assignment' },
                  { header: 'Due Date', accessor: 'dueDate' },
                  { header: 'Status', accessor: 'status' }
                ]}
                rows={[
                  { subject: 'Mathematics', assignment: 'Fraction Worksheet', dueDate: '2024-01-20', status: 'Pending' },
                  { subject: 'Science', assignment: 'Solar System Project', dueDate: '2024-01-22', status: 'In Progress' },
                  { subject: 'English', assignment: 'Story Writing', dueDate: '2024-01-18', status: 'Submitted' }
                ]}
                showSearch={true}
                actions={['view']}
              />
            ),
            grades: () => (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                    <h3 className="text-lg font-semibold mb-2">Mathematics</h3>
                    <p className="text-3xl font-bold text-blue-600">A</p>
                    <p className="text-sm text-gray-600">85%</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                    <h3 className="text-lg font-semibold mb-2">Science</h3>
                    <p className="text-3xl font-bold text-green-600">A+</p>
                    <p className="text-sm text-gray-600">92%</p>
                  </div>
                </div>
              </div>
            ),
            schedule: () => (
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Class 5A - Weekly Schedule</h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3">Monday</h3>
                    <div className="space-y-2 text-sm">
                      <div className="p-2 bg-blue-100 rounded">9:00 AM - Assembly</div>
                      <div className="p-2 bg-green-100 rounded">9:30 AM - Mathematics</div>
                    </div>
                  </div>
                </div>
              </div>
            ),
            achievements: () => (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <FaTrophy className="text-4xl text-amber-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Math Champion</h3>
                  <p className="text-sm text-gray-600 mb-2">Scored highest in Math Quiz</p>
                  <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs">January 2024</span>
                </div>
              </div>
            )
          }
        };

      default:
        return {
          sidebarItems: [{ id: 'overview', name: 'Overview', icon: FaUsers }],
          header: { title: 'Dashboard', subtitle: 'User', badgeText: 'User' },
          stats: [],
          sections: { overview: () => <div>No content available</div> }
        };
    }
  };

  const dashboardData = getDashboardData();

  return <Dashboard role={user.role} data={dashboardData} />;
};

export default DynamicDashboard;