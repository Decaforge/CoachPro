import React, { useEffect, useState } from 'react';
import { ClipboardList, Plus } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import Badge from '../../components/UI/Badge';
import { mockApi } from '../../api/mockData';

const TeacherAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('active');

  useEffect(() => {
    mockApi.getAssignments(activeTab).then(result => {
      setAssignments(result);
      setLoading(false);
    });
  }, [activeTab]);

  if (loading) {
    return (
      <Layout role="teacher">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Loading assignments...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout role="teacher">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Assignments</h1>
            <p className="text-gray-400">Create and manage assignments</p>
          </div>
          <Button icon={Plus}>Create Assignment</Button>
        </div>

        <div className="flex gap-4 border-b border-dark-300">
          {['active', 'completed', 'draft'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-4 font-medium transition-colors capitalize ${
                activeTab === tab
                  ? 'text-gold border-b-2 border-gold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map((assignment) => (
            <Card key={assignment.id} hover>
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{assignment.title}</h3>
                <Badge
                  variant={
                    assignment.status === 'Active' ? 'success' :
                    assignment.status === 'Completed' ? 'default' : 'warning'
                  }
                  size="sm"
                >
                  {assignment.status}
                </Badge>
              </div>

              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Subject:</span>
                  <span className="text-white">{assignment.subject}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Batch:</span>
                  <Badge variant="primary" size="sm">{assignment.batch}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Due Date:</span>
                  <span className="text-white">{assignment.dueDate}</span>
                </div>
                {assignment.submittedCount !== undefined && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Submitted:</span>
                    <span className="text-gold font-semibold">
                      {assignment.submittedCount}/{assignment.totalStudents}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <Button variant="secondary" size="sm" className="flex-1">View Details</Button>
                <Button variant="outline" size="sm">Edit</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TeacherAssignments;
