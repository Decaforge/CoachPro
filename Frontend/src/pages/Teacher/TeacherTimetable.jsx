import React from 'react';
import { Calendar } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/UI/Card';

const TeacherTimetable = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const timeSlots = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'];

  return (
    <Layout role="teacher">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">My Timetable</h1>
          <p className="text-gray-400">Weekly class schedule</p>
        </div>

        <Card>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-dark-300 p-3 text-gray-400 bg-dark-200">Time</th>
                  {days.map(day => (
                    <th key={day} className="border border-dark-300 p-3 text-white bg-dark-200">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map(time => (
                  <tr key={time}>
                    <td className="border border-dark-300 p-3 text-gray-400 bg-dark-200 font-medium">{time}</td>
                    {days.map(day => (
                      <td key={`${day}-${time}`} className="border border-dark-300 p-4 hover:bg-dark-200 transition-colors cursor-pointer">
                        {/* Lecture cells would be populated dynamically */}
                      </td>
                    ))}
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

export default TeacherTimetable;
