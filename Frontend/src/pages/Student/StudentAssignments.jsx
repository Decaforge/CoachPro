import React, { useEffect, useState } from 'react';
import { ClipboardList, AlertCircle } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/UI/Card';
import Badge from '../../components/UI/Badge';
import Button from '../../components/UI/Button';
import { mockApi } from '../../api/mockData';

const StudentAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('pending');

  useEffect(() => {
    mockApi.getStudentAssignments().then(result => {
      setAssignments(result);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Layout role="student">
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
    <Layout role="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">My Assignments</h1>
          <p className="text-gray-400">Track and submit your assignments</p>
        </div>

        <div className="flex gap-4 border-b border-dark-300">
          <button
            onClick={() => setActiveTab('pending')}
            className={`pb-3 px-4 font-medium transition-colors ${
              activeTab === 'pending'
                ? 'text-gold border-b-2 border-gold'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`pb-3 px-4 font-medium transition-colors ${
              activeTab === 'completed'
                ? 'text-gold border-b-2 border-gold'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Completed
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {assignments.map((assignment) => {
            const daysRemaining = Math.floor((new Date(assignment.dueDate) - new Date()) / (1000 * 60 * 60 * 24));
            const isOverdue = daysRemaining < 0;
            const isDueSoon = daysRemaining <= 2 && daysRemaining >= 0;

            return (
              <Card key={assignment.id} hover className={isOverdue ? 'border-red-500/50' : isDueSoon ? 'border-yellow-500/50' : ''}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{assignment.title}</h3>
                    <p className="text-sm text-gray-400">{assignment.subject}</p>
                  </div>
                  {isOverdue ? (
                    <Badge variant="danger" size="sm">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      Overdue
                    </Badge>
                  ) : isDueSoon ? (
                    <Badge variant="warning" size="sm">Due Soon</Badge>
                  ) : (
                    <Badge variant="success" size="sm">Active</Badge>
                  )}
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{assignment.description}</p>

                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Assigned:</span>
                    <span className="text-white">{assignment.assignedDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Due Date:</span>
                    <span className={`font-semibold ${isOverdue ? 'text-red-400' : isDueSoon ? 'text-yellow-400' : 'text-white'}`}>
                      {assignment.dueDate}
                    </span>
                  </div>
                  {assignment.maxMarks && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Max Marks:</span>
                      <span className="text-gold font-semibold">{assignment.maxMarks}</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button variant="secondary" size="sm" className="flex-1">View Details</Button>
                  <Button variant="primary" size="sm">Submit</Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default StudentAssignments;
