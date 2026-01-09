import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';

// Admin Pages
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminStudents from './pages/Admin/AdminStudents';
import AdminTeachers from './pages/Admin/AdminTeachers';
import AdminAnalytics from './pages/Admin/AdminAnalytics';
import AdminAttendance from './pages/Admin/AdminAttendance';
import AdminTestsManagement from './pages/Admin/AdminTestsManagement';
import AdminAIInsights from './pages/Admin/AdminAIInsights';
import AdminNotifications from './pages/Admin/AdminNotifications';

// Teacher Pages
import TeacherDashboard from './pages/Teacher/TeacherDashboard';
import TeacherMyStudents from './pages/Teacher/TeacherMyStudents';
import TeacherUploadMarks from './pages/Teacher/TeacherUploadMarks';
import TeacherAssignments from './pages/Teacher/TeacherAssignments';
import TeacherLectures from './pages/Teacher/TeacherLectures';
import TeacherTimetable from './pages/Teacher/TeacherTimetable';
import TeacherNotifications from './pages/Teacher/TeacherNotifications';

// Student Pages
import StudentDashboard from './pages/Student/StudentDashboard';
import StudentPerformance from './pages/Student/StudentPerformance';
import StudentAttendance from './pages/Student/StudentAttendance';
import StudentTests from './pages/Student/StudentTests';
import StudentAssignments from './pages/Student/StudentAssignments';
import StudentProgress from './pages/Student/StudentProgress';
import StudentNotifications from './pages/Student/StudentNotifications';

// Protected Route Component
const ProtectedRoute = ({ children, role }) => {
  const userStr = localStorage.getItem('user');
  
  if (!userStr) {
    return <Navigate to="/login" replace />;
  }
  
  const user = JSON.parse(userStr);
  
  if (role && user.role !== role) {
    return <Navigate to={`/${user.role}/dashboard`} replace />;
  }
  
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/students" element={<ProtectedRoute role="admin"><AdminStudents /></ProtectedRoute>} />
        <Route path="/admin/teachers" element={<ProtectedRoute role="admin"><AdminTeachers /></ProtectedRoute>} />
        <Route path="/admin/analytics" element={<ProtectedRoute role="admin"><AdminAnalytics /></ProtectedRoute>} />
        <Route path="/admin/attendance" element={<ProtectedRoute role="admin"><AdminAttendance /></ProtectedRoute>} />
        <Route path="/admin/tests" element={<ProtectedRoute role="admin"><AdminTestsManagement /></ProtectedRoute>} />
        <Route path="/admin/ai-insights" element={<ProtectedRoute role="admin"><AdminAIInsights /></ProtectedRoute>} />
        <Route path="/admin/notifications" element={<ProtectedRoute role="admin"><AdminNotifications /></ProtectedRoute>} />

        {/* Teacher Routes */}
        <Route path="/teacher/dashboard" element={<ProtectedRoute role="teacher"><TeacherDashboard /></ProtectedRoute>} />
        <Route path="/teacher/students" element={<ProtectedRoute role="teacher"><TeacherMyStudents /></ProtectedRoute>} />
        <Route path="/teacher/upload-marks" element={<ProtectedRoute role="teacher"><TeacherUploadMarks /></ProtectedRoute>} />
        <Route path="/teacher/assignments" element={<ProtectedRoute role="teacher"><TeacherAssignments /></ProtectedRoute>} />
        <Route path="/teacher/lectures" element={<ProtectedRoute role="teacher"><TeacherLectures /></ProtectedRoute>} />
        <Route path="/teacher/timetable" element={<ProtectedRoute role="teacher"><TeacherTimetable /></ProtectedRoute>} />
        <Route path="/teacher/notifications" element={<ProtectedRoute role="teacher"><TeacherNotifications /></ProtectedRoute>} />

        {/* Student Routes */}
        <Route path="/student/dashboard" element={<ProtectedRoute role="student"><StudentDashboard /></ProtectedRoute>} />
        <Route path="/student/performance" element={<ProtectedRoute role="student"><StudentPerformance /></ProtectedRoute>} />
        <Route path="/student/attendance" element={<ProtectedRoute role="student"><StudentAttendance /></ProtectedRoute>} />
        <Route path="/student/tests" element={<ProtectedRoute role="student"><StudentTests /></ProtectedRoute>} />
        <Route path="/student/assignments" element={<ProtectedRoute role="student"><StudentAssignments /></ProtectedRoute>} />
        <Route path="/student/progress" element={<ProtectedRoute role="student"><StudentProgress /></ProtectedRoute>} />
        <Route path="/student/notifications" element={<ProtectedRoute role="student"><StudentNotifications /></ProtectedRoute>} />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
