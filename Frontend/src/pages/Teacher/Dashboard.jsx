import React, { useEffect, useState } from 'react';
import { Users, BookOpen, Clock, Star, Upload, ClipboardList, UserCheck, MessageSquare } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import StatCard from '../../components/UI/StatCard';
import Card from '../../components/UI/Card';
import Badge from '../../components/UI/Badge';
import Button from '../../components/UI/Button';
import { mockApi } from '../../api/mockData';

const TeacherDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mockApi.getTeacherDashboard().then(result => {
      setData(result);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Layout role="teacher">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Loading dashboard...</p>
          </div>
        </div>
      </Layout>
    );
  }

  const quickActions = [
    { icon: Upload, title: 'Upload Marks', description: 'Add test results', color: 'bg-primary' },
    { icon: ClipboardList, title: 'Create Assignment', description: 'New homework', color: 'bg-green-500' },
    { icon: UserCheck, title: 'Mark Attendance', description: "Today's class", color: 'bg-purple-500' },
    { icon: MessageSquare, title: 'Give Feedback', description: 'Student feedback', color: 'bg-gold' },
  ];

  return (
    <Layout role="teacher">
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Teacher Dashboard</h1>
          <p className="text-gray-400">Manage your classes and students effectively</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={Users}
            label="My Students"
            value={data.stats.totalStudents}
            iconColor="bg-primary"
          />
          <StatCard
            icon={BookOpen}
            label="Lectures Scheduled"
            value={data.stats.lecturesScheduled}
            iconColor="bg-green-500"
          />
          <StatCard
            icon={Clock}
            label="Total Hours"
            value={data.stats.totalHours}
            iconColor="bg-purple-500"
          />
          <StatCard
            icon={Star}
            label="Average Rating"
            value={data.stats.averageRating}
            iconColor="bg-gold"
          />
        </div>

        {/* My Students */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-white">My Students</h3>
            </div>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.myStudents.slice(0, 6).map((student) => (
              <div
                key={student.id}
                className="bg-dark-200 rounded-xl p-4 hover:bg-dark-300 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-white">
                      {student.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white truncate">{student.name}</h4>
                    <p className="text-sm text-gray-400">{student.rollNumber}</p>
                    <Badge variant="primary" size="sm" className="mt-1">{student.batch}</Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                  <div>
                    <p className="text-sm font-bold text-gold">#{student.rank}</p>
                    <p className="text-xs text-gray-500">Rank</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-green-400">{student.percentage}%</p>
                    <p className="text-xs text-gray-500">Score</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-blue-400">{student.attendance}%</p>
                    <p className="text-xs text-gray-500">Attend</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Lectures & Assignments Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Lectures */}
          <Card>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-white">Recent Lectures</h3>
            </div>
            
            <div className="space-y-3">
              {data.recentLectures.map((lecture) => (
                <div
                  key={lecture.id}
                  className="bg-dark-200 rounded-lg p-4 hover:bg-dark-300 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-white">{lecture.topic}</h4>
                    <Badge 
                      variant={lecture.status === 'Completed' ? 'success' : 'primary'}
                      size="sm"
                    >
                      {lecture.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {lecture.date}
                    </span>
                    <Badge variant="default" size="sm">{lecture.batch}</Badge>
                    <span>{lecture.duration}</span>
                  </div>
                  
                  {lecture.rating && (
                    <div className="mt-2 flex items-center gap-1 text-gold">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{lecture.rating}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Assignments */}
          <Card>
            <div className="flex items-center gap-2 mb-6">
              <ClipboardList className="w-5 h-5 text-green-500" />
              <h3 className="text-lg font-semibold text-white">Recent Assignments</h3>
            </div>
            
            <div className="space-y-3">
              {data.recentAssignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className="bg-dark-200 rounded-lg p-4 hover:bg-dark-300 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-white">{assignment.title}</h4>
                      <p className="text-sm text-gray-400">{assignment.subject}</p>
                    </div>
                    <Badge variant="success" size="sm">{assignment.status}</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="primary" size="sm">{assignment.batch}</Badge>
                    <span className="text-gray-400">Due: {assignment.dueDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-5 h-5 text-gold" />
            <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="bg-gradient-to-br from-dark-200 to-dark-300 border border-dark-300 hover:border-gold/50 rounded-xl p-6 text-left transition-all duration-200 hover:-translate-y-1"
              >
                <div className={`${action.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-1">{action.title}</h4>
                <p className="text-sm text-gray-400">{action.description}</p>
              </button>
            ))}
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default TeacherDashboard;
