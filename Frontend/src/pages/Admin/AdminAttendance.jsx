import React, { useEffect, useState } from 'react';
import { Calendar, Users, UserCheck, Clock, AlertCircle } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import StatCard from '../../components/UI/StatCard';
import Card from '../../components/UI/Card';
import Badge from '../../components/UI/Badge';
import { mockApi } from '../../api/mockData';

const AdminAttendance = () => {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    date: new Date().toISOString().split('T')[0],
    batch: 'all'
  });

  useEffect(() => {
    mockApi.getAttendance(filters).then(result => {
      setAttendance(result);
      setLoading(false);
    });
  }, [filters]);

  if (loading) {
    return (
      <Layout role="admin">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Loading attendance...</p>
          </div>
        </div>
      </Layout>
    );
  }

  const stats = {
    present: attendance.filter(a => a.status === 'present').length,
    absent: attendance.filter(a => a.status === 'absent').length,
    late: attendance.filter(a => a.status === 'late').length,
    excused: attendance.filter(a => a.status === 'excused').length
  };

  return (
    <Layout role="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Attendance Management</h1>
          <p className="text-gray-400">Track and manage student attendance</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard icon={UserCheck} label="Present" value={stats.present} iconColor="bg-green-500" />
          <StatCard icon={Users} label="Absent" value={stats.absent} iconColor="bg-red-500" />
          <StatCard icon={Clock} label="Late" value={stats.late} iconColor="bg-yellow-500" />
          <StatCard icon={AlertCircle} label="Excused" value={stats.excused} iconColor="bg-blue-500" />
        </div>

        {/* Filters */}
        <Card>
          <div className="flex gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Date</label>
              <input
                type="date"
                value={filters.date}
                onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                className="bg-dark-200 border border-dark-300 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Batch</label>
              <select
                value={filters.batch}
                onChange={(e) => setFilters({ ...filters, batch: e.target.value })}
                className="bg-dark-200 border border-dark-300 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="all">All Batches</option>
                <option value="Batch A">Batch A</option>
                <option value="Batch B">Batch B</option>
                <option value="Batch C">Batch C</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Attendance Table */}
        <Card>
          <h3 className="text-lg font-semibold text-white mb-4">Attendance Records</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dark-300">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Roll No.</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Student Name</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Batch</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Marked By</th>
                </tr>
              </thead>
              <tbody>
                {attendance.map((record) => (
                  <tr key={record.id} className="border-b border-dark-300 hover:bg-dark-200 transition-colors">
                    <td className="py-3 px-4 text-white">{record.rollNumber}</td>
                    <td className="py-3 px-4 text-white font-medium">{record.studentName}</td>
                    <td className="py-3 px-4">
                      <Badge variant="primary" size="sm">{record.batch}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge
                        variant={
                          record.status === 'present' ? 'success' :
                          record.status === 'absent' ? 'danger' :
                          record.status === 'late' ? 'warning' : 'default'
                        }
                        size="sm"
                      >
                        {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-gray-400">{record.markedBy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default AdminAttendance;
