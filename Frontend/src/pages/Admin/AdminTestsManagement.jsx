import React, { useEffect, useState } from 'react';
import { FileText, Plus, Calendar, Users } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import Badge from '../../components/UI/Badge';
import { mockApi } from '../../api/mockData';

const AdminTestsManagement = () => {
  const [tests, setTests] = useState([]);
  const [marks, setMarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('tests');

  useEffect(() => {
    Promise.all([
      mockApi.getTests(),
      mockApi.getMarks()
    ]).then(([testsData, marksData]) => {
      setTests(testsData);
      setMarks(marksData);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Layout role="admin">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Loading data...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Tests & Marks Management</h1>
            <p className="text-gray-400">Create tests and manage student marks</p>
          </div>
          <Button icon={Plus}>Create Test</Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-dark-300">
          <button
            onClick={() => setActiveTab('tests')}
            className={`pb-3 px-4 font-medium transition-colors ${
              activeTab === 'tests'
                ? 'text-gold border-b-2 border-gold'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Tests
          </button>
          <button
            onClick={() => setActiveTab('marks')}
            className={`pb-3 px-4 font-medium transition-colors ${
              activeTab === 'marks'
                ? 'text-gold border-b-2 border-gold'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Marks
          </button>
        </div>

        {/* Tests Tab */}
        {activeTab === 'tests' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tests.map((test) => (
              <Card key={test.id} hover>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{test.name}</h3>
                  <Badge variant={test.status === 'Completed' ? 'success' : 'primary'} size="sm">
                    {test.status}
                  </Badge>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between text-gray-300">
                    <span>Subject:</span>
                    <span className="font-medium text-white">{test.subject}</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-300">
                    <span>Batch:</span>
                    <Badge variant="primary" size="sm">{test.batch}</Badge>
                  </div>
                  <div className="flex items-center justify-between text-gray-300">
                    <span>Date:</span>
                    <span className="font-medium text-white">{test.date}</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-300">
                    <span>Max Marks:</span>
                    <span className="font-medium text-white">{test.maxMarks}</span>
                  </div>
                  {test.avgMarks && (
                    <div className="flex items-center justify-between text-gray-300">
                      <span>Average:</span>
                      <span className="font-medium text-gold">{test.avgMarks}</span>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex gap-2">
                  <Button variant="secondary" size="sm" className="flex-1">
                    View Results
                  </Button>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Marks Tab */}
        {activeTab === 'marks' && (
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-dark-300">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Student</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Test</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Marks</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Percentage</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Grade</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {marks.map((mark) => (
                    <tr key={mark.id} className="border-b border-dark-300 hover:bg-dark-200 transition-colors">
                      <td className="py-3 px-4">
                        <div>
                          <p className="text-white font-medium">{mark.studentName}</p>
                          <p className="text-sm text-gray-400">{mark.rollNumber}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-white">{mark.testName}</td>
                      <td className="py-3 px-4 text-white">{mark.marksObtained}/{mark.maxMarks}</td>
                      <td className="py-3 px-4">
                        <span className={`font-semibold ${
                          mark.percentage >= 80 ? 'text-green-400' :
                          mark.percentage >= 60 ? 'text-yellow-400' : 'text-red-400'
                        }`}>
                          {mark.percentage}%
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={
                            mark.grade.includes('A') ? 'success' :
                            mark.grade.includes('B') ? 'primary' : 'warning'
                          }
                          size="sm"
                        >
                          {mark.grade}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-gray-400 text-sm">{mark.remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default AdminTestsManagement;
