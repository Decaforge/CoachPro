import React, { useEffect, useState } from 'react';
import { Search, Filter, Plus, User, Award, Calendar } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import Badge from '../../components/UI/Badge';
import { mockApi } from '../../api/mockData';

const AdminStudents = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    batch: 'all',
    course: 'all'
  });

  useEffect(() => {
    mockApi.getStudents().then(result => {
      setStudents(result);
      setFilteredStudents(result);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    let filtered = [...students];

    if (filters.search) {
      const search = filters.search.toLowerCase();
      filtered = filtered.filter(s =>
        s.name.toLowerCase().includes(search) ||
        s.rollNumber.toLowerCase().includes(search) ||
        s.email.toLowerCase().includes(search)
      );
    }

    if (filters.batch !== 'all') {
      filtered = filtered.filter(s => s.batch === filters.batch);
    }

    if (filters.course !== 'all') {
      filtered = filtered.filter(s => s.course === filters.course);
    }

    setFilteredStudents(filtered);
  }, [filters, students]);

  const batches = ['all', ...new Set(students.map(s => s.batch))];
  const courses = ['all', ...new Set(students.map(s => s.course))];

  const getPercentageColor = (percentage) => {
    if (percentage >= 80) return 'text-green-400';
    if (percentage >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getAttendanceColor = (attendance) => {
    if (attendance >= 85) return 'text-green-400';
    if (attendance >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  if (loading) {
    return (
      <Layout role="admin">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Loading students...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout role="admin">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Students Management</h1>
            <p className="text-gray-400">View and manage all enrolled students</p>
          </div>
          <Button icon={Plus}>Add Student</Button>
        </div>

        {/* Filters Bar */}
        <Card>
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                  placeholder="Search by name, email, or roll number..."
                  className="w-full bg-dark-200 border border-dark-300 rounded-lg pl-11 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
            </div>

            {/* Batch Filter */}
            <div className="w-full md:w-48">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={filters.batch}
                  onChange={(e) => setFilters({ ...filters, batch: e.target.value })}
                  className="w-full bg-dark-200 border border-dark-300 rounded-lg pl-11 pr-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent appearance-none"
                >
                  {batches.map(batch => (
                    <option key={batch} value={batch}>
                      {batch === 'all' ? 'All Batches' : batch}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Course Filter */}
            <div className="w-full md:w-48">
              <select
                value={filters.course}
                onChange={(e) => setFilters({ ...filters, course: e.target.value })}
                className="w-full bg-dark-200 border border-dark-300 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent appearance-none"
              >
                {courses.map(course => (
                  <option key={course} value={course}>
                    {course === 'all' ? 'All Courses' : course}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-400">
            Showing {filteredStudents.length} students
          </div>
        </Card>

        {/* Students Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student) => (
            <Card key={student.id} hover className="group">
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-gold to-primary rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {student.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-white mb-1">{student.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{student.rollNumber}</p>
                <div className="flex items-center justify-center gap-2">
                  <Badge variant="primary">{student.batch}</Badge>
                  <Badge variant="gold">{student.course}</Badge>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="text-center">
                  <p className={`text-xl font-bold ${student.rank <= 10 ? 'text-gold' : 'text-white'}`}>
                    #{student.rank}
                  </p>
                  <p className="text-xs text-gray-400">Rank</p>
                </div>
                <div className="text-center">
                  <p className={`text-xl font-bold ${getPercentageColor(student.percentage)}`}>
                    {student.percentage}%
                  </p>
                  <p className="text-xs text-gray-400">Score</p>
                </div>
                <div className="text-center">
                  <p className={`text-xl font-bold ${getAttendanceColor(student.attendance)}`}>
                    {student.attendance}%
                  </p>
                  <p className="text-xs text-gray-400">Attend</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="secondary" size="sm" className="flex-1">
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <div className="text-center py-12">
            <User className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No students found</h3>
            <p className="text-gray-500">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AdminStudents;
