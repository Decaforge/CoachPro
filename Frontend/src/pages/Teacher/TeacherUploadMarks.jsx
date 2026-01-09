import React, { useState } from 'react';
import { Upload, Plus } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';

const TeacherUploadMarks = () => {
  return (
    <Layout role="teacher">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Upload Marks</h1>
            <p className="text-gray-400">Upload test marks for students</p>
          </div>
          <Button icon={Plus}>Create Test</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card hover className="cursor-pointer">
            <div className="text-center py-8">
              <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Manual Entry</h3>
              <p className="text-gray-400">Enter marks for each student individually</p>
            </div>
          </Card>
          <Card hover className="cursor-pointer">
            <div className="text-center py-8">
              <Upload className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Bulk Upload</h3>
              <p className="text-gray-400">Upload marks via CSV file</p>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default TeacherUploadMarks;
