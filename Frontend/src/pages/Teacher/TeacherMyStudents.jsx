import React, { useEffect, useState } from 'react';
import { Users, Search, Award } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/UI/Card';
import Badge from '../../components/UI/Badge';
import Button from '../../components/UI/Button';
import { mockApi } from '../../api/mockData';

const TeacherMyStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    mockApi.getMyStudents().then(result => {
      setStudents(result);
      setLoading(false);
    });
  }, []);

  const filteredStudents = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.rollNumber.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <Layout role="teacher">
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
    <Layout role="teacher">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">My Students</h1>
          <p className="text-gray-400">Teaching {students.length} students</p>
        </div>

        <Card>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search students..."
              className="w-full bg-dark-200 border border-dark-300 rounded-lg pl-11 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            />
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student) => (
            <Card key={student.id} hover>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-primary rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-white">
                    {student.name.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-white mb-1">{student.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{student.rollNumber}</p>
                <Badge variant="primary">{student.batch}</Badge>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4 text-center text-sm">
                <div>
                  <p className="text-gold font-bold">#{student.rank}</p>
                  <p className="text-gray-400 text-xs">Rank</p>
                </div>
                <div>
                  <p className="text-green-400 font-bold">{student.percentage}%</p>
                  <p className="text-gray-400 text-xs">Score</p>
                </div>
                <div>
                  <p className="text-blue-400 font-bold">{student.attendance}%</p>
                  <p className="text-gray-400 text-xs">Attend</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="secondary" size="sm" className="flex-1">View Details</Button>
                <Button variant="outline" size="sm">Feedback</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TeacherMyStudents;
