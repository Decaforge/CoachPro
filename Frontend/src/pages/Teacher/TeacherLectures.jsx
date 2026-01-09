import React, { useEffect, useState } from 'react';
import { BookOpen, Plus, Calendar } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import Badge from '../../components/UI/Badge';
import { mockApi } from '../../api/mockData';

const TeacherLectures = () => {
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('list');

  useEffect(() => {
    mockApi.getLectures().then(result => {
      setLectures(result);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Layout role="teacher">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Loading lectures...</p>
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
            <h1 className="text-3xl font-bold text-white mb-2">My Lectures</h1>
            <p className="text-gray-400">View and manage lecture schedule</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setView(view === 'calendar' ? 'list' : 'calendar')}>
              {view === 'calendar' ? 'List View' : 'Calendar View'}
            </Button>
            <Button icon={Plus}>Add Lecture</Button>
          </div>
        </div>

        <div className="space-y-4">
          {lectures.map((lecture) => (
            <Card key={lecture.id} hover>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">{lecture.topic}</h3>
                    <Badge
                      variant={
                        lecture.status === 'Completed' ? 'success' :
                        lecture.status === 'Scheduled' ? 'primary' : 'default'
                      }
                      size="sm"
                    >
                      {lecture.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <p className="text-gray-400">Subject: <span className="text-white">{lecture.subject}</span></p>
                      <p className="text-gray-400">Batch: <Badge variant="primary" size="sm">{lecture.batch}</Badge></p>
                    </div>
                    <div>
                      <p className="text-gray-400">Date: <span className="text-white">{lecture.date}</span></p>
                      <p className="text-gray-400">Time: <span className="text-white">{lecture.startTime} - {lecture.endTime}</span></p>
                    </div>
                  </div>

                  {lecture.rating && (
                    <div className="flex items-center gap-1 text-gold text-sm">
                      <span>★ {lecture.rating}</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">View</Button>
                  {lecture.status === 'Scheduled' && (
                    <Button variant="secondary" size="sm">Edit</Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TeacherLectures;
