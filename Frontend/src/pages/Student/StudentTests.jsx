import React, { useEffect, useState } from 'react';
import { FileText } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/UI/Card';
import Badge from '../../components/UI/Badge';
import { mockApi } from '../../api/mockData';

const StudentTests = () => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mockApi.getStudentTests().then(result => {
      setTests(result);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Layout role="student">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Loading tests...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout role="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Tests & Marks</h1>
          <p className="text-gray-400">View all your test results</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tests.map((test) => (
            <Card key={test.id} hover>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">{test.testName}</h3>
                  <p className="text-sm text-gray-400">{test.batch}</p>
                </div>
                <Badge
                  variant={test.grade.includes('A') ? 'success' : 'primary'}
                  size="sm"
                >
                  Grade {test.grade}
                </Badge>
              </div>

              <div className="bg-dark-200 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <p className="text-3xl font-bold text-gold">{test.marksObtained}</p>
                    <p className="text-sm text-gray-400">Obtained</p>
                  </div>
                  <div className="text-gray-400 text-2xl">/</div>
                  <div className="text-center flex-1">
                    <p className="text-3xl font-bold text-white">{test.maxMarks}</p>
                    <p className="text-sm text-gray-400">Maximum</p>
                  </div>
                  <div className="text-gray-400 text-2xl">=</div>
                  <div className="text-center flex-1">
                    <p className="text-3xl font-bold text-green-400">{test.percentage}%</p>
                    <p className="text-sm text-gray-400">Percentage</p>
                  </div>
                </div>
              </div>

              {test.remarks && (
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-3">
                  <p className="text-sm text-gray-300">{test.remarks}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default StudentTests;
