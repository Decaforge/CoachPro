import React, { useEffect, useState } from 'react';
import { Search, Filter, Plus, UserCheck, Award, BookOpen, Star } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import Badge from '../../components/UI/Badge';
import { mockApi } from '../../api/mockData';

const AdminTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    subject: 'all'
  });

  useEffect(() => {
    mockApi.getTeachers().then(result => {
      setTeachers(result);
      setFilteredTeachers(result);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    let filtered = [...teachers];

    if (filters.search) {
      const search = filters.search.toLowerCase();
      filtered = filtered.filter(t =>
        t.name.toLowerCase().includes(search) ||
        t.employeeId.toLowerCase().includes(search) ||
        t.email.toLowerCase().includes(search) ||
        t.subject.toLowerCase().includes(search)
      );
    }

    if (filters.subject !== 'all') {
      filtered = filtered.filter(t => t.subject === filters.subject);
    }

    setFilteredTeachers(filtered);
  }, [filters, teachers]);

  const subjects = ['all', ...new Set(teachers.map(t => t.subject))];

  if (loading) {
    return (
      <Layout role="admin">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Loading teachers...</p>
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
            <h1 className="text-3xl font-bold text-white mb-2">Teachers Management</h1>
            <p className="text-gray-400">View and manage all teaching staff</p>
          </div>
          <Button icon={Plus}>Add Teacher</Button>
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
                  placeholder="Search by name, employee ID, or subject..."
                  className="w-full bg-dark-200 border border-dark-300 rounded-lg pl-11 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
            </div>

            {/* Subject Filter */}
            <div className="w-full md:w-48">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={filters.subject}
                  onChange={(e) => setFilters({ ...filters, subject: e.target.value })}
                  className="w-full bg-dark-200 border border-dark-300 rounded-lg pl-11 pr-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent appearance-none"
                >
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>
                      {subject === 'all' ? 'All Subjects' : subject}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-400">
            Showing {filteredTeachers.length} teachers
          </div>
        </Card>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeachers.map((teacher) => (
            <Card key={teacher.id} hover className="group">
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {teacher.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-white mb-1">{teacher.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{teacher.employeeId}</p>
                <Badge variant="primary">{teacher.subject}</Badge>
              </div>

              {/* Details */}
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center justify-between text-gray-300">
                  <span>Experience:</span>
                  <span className="font-medium text-white">{teacher.experience} years</span>
                </div>
                <div className="flex items-center justify-between text-gray-300">
                  <span>Qualification:</span>
                  <span className="font-medium text-white text-xs">{teacher.qualification}</span>
                </div>
                <div className="flex items-center justify-between text-gray-300">
                  <span>Email:</span>
                  <span className="font-medium text-white text-xs truncate ml-2">{teacher.email}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-4 p-3 bg-dark-200 rounded-lg">
                <div className="text-center">
                  <UserCheck className="w-4 h-4 text-primary mx-auto mb-1" />
                  <p className="text-lg font-bold text-white">{teacher.totalStudents}</p>
                  <p className="text-xs text-gray-400">Students</p>
                </div>
                <div className="text-center">
                  <BookOpen className="w-4 h-4 text-green-500 mx-auto mb-1" />
                  <p className="text-lg font-bold text-white">{teacher.lecturesCompleted}</p>
                  <p className="text-xs text-gray-400">Lectures</p>
                </div>
                <div className="text-center">
                  <Star className="w-4 h-4 text-gold mx-auto mb-1" />
                  <p className="text-lg font-bold text-gold">{teacher.averageRating}</p>
                  <p className="text-xs text-gray-400">Rating</p>
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

        {filteredTeachers.length === 0 && (
          <div className="text-center py-12">
            <UserCheck className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No teachers found</h3>
            <p className="text-gray-500">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AdminTeachers;
