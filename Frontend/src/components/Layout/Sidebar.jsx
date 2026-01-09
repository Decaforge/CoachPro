import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, Users, UserCheck, BarChart3, Calendar,
  FileText, BookOpen, ClipboardList, TrendingUp, Bell,
  Award, Target, GraduationCap
} from 'lucide-react';

const Sidebar = ({ role }) => {
  const navigation = {
    admin: [
      { name: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
      { name: 'Students', icon: Users, path: '/admin/students' },
      { name: 'Teachers', icon: UserCheck, path: '/admin/teachers' },
      { name: 'Analytics', icon: BarChart3, path: '/admin/analytics' },
      { name: 'Attendance', icon: Calendar, path: '/admin/attendance' },
      { name: 'Tests & Marks', icon: FileText, path: '/admin/tests' },
      { name: 'AI Insights', icon: Target, path: '/admin/ai-insights' },
      { name: 'Notifications', icon: Bell, path: '/admin/notifications' },
    ],
    teacher: [
      { name: 'Dashboard', icon: LayoutDashboard, path: '/teacher/dashboard' },
      { name: 'My Students', icon: Users, path: '/teacher/students' },
      { name: 'Upload Marks', icon: Award, path: '/teacher/upload-marks' },
      { name: 'Assignments', icon: ClipboardList, path: '/teacher/assignments' },
      { name: 'Lectures', icon: BookOpen, path: '/teacher/lectures' },
      { name: 'Timetable', icon: Calendar, path: '/teacher/timetable' },
      { name: 'Notifications', icon: Bell, path: '/teacher/notifications' },
    ],
    student: [
      { name: 'Dashboard', icon: LayoutDashboard, path: '/student/dashboard' },
      { name: 'Performance', icon: TrendingUp, path: '/student/performance' },
      { name: 'Attendance', icon: Calendar, path: '/student/attendance' },
      { name: 'Tests & Marks', icon: FileText, path: '/student/tests' },
      { name: 'Assignments', icon: ClipboardList, path: '/student/assignments' },
      { name: 'Progress', icon: Target, path: '/student/progress' },
      { name: 'Notifications', icon: Bell, path: '/student/notifications' },
    ],
  };

  const items = navigation[role] || [];

  return (
    <aside className="w-64 bg-dark-100 border-r border-dark-300 h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b border-dark-300">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-gold to-primary rounded-xl flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">CoachPro</h2>
            <p className="text-xs text-gray-400">Management System</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                  ${isActive 
                    ? 'bg-gold text-dark font-semibold' 
                    : 'text-gray-300 hover:bg-dark-200 hover:text-white'
                  }
                `}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-dark-300">
        <div className="bg-dark-200 rounded-lg p-4">
          <p className="text-xs text-gray-400 mb-2">Need Help?</p>
          <p className="text-sm text-white font-medium mb-3">Contact Support</p>
          <a href="mailto:support@coachpro.com" className="text-xs text-primary hover:underline">
            support@coachpro.com
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
