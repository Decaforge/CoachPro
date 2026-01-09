import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import AdminDashboard from './pages/Admin/Dashboard';
import AdminStudents from './pages/Admin/Students';
import TeacherDashboard from './pages/Teacher/Dashboard';
import StudentDashboard from './pages/Student/Dashboard';

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
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/students"
          element={
            <ProtectedRoute role="admin">
              <AdminStudents />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute role="admin">
              <div className="flex items-center justify-center h-screen bg-dark">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-2">Page Under Construction</h2>
                  <p className="text-gray-400">This page is coming soon</p>
                </div>
              </div>
            </ProtectedRoute>
          }
        />

        {/* Teacher Routes */}
        <Route
          path="/teacher/dashboard"
          element={
            <ProtectedRoute role="teacher">
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher/*"
          element={
            <ProtectedRoute role="teacher">
              <div className="flex items-center justify-center h-screen bg-dark">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-2">Page Under Construction</h2>
                  <p className="text-gray-400">This page is coming soon</p>
                </div>
              </div>
            </ProtectedRoute>
          }
        />

        {/* Student Routes */}
        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute role="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/*"
          element={
            <ProtectedRoute role="student">
              <div className="flex items-center justify-center h-screen bg-dark">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-2">Page Under Construction</h2>
                  <p className="text-gray-400">This page is coming soon</p>
                </div>
              </div>
            </ProtectedRoute>
          }
        />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
