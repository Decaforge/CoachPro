import React, { useEffect, useState } from 'react';
import { Bell, Send, Filter } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import Badge from '../../components/UI/Badge';
import { mockApi } from '../../api/mockData';

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('received');

  useEffect(() => {
    mockApi.getNotifications('admin').then(result => {
      setNotifications(result);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Layout role="admin">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Loading notifications...</p>
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
            <h1 className="text-3xl font-bold text-white mb-2">Notifications</h1>
            <p className="text-gray-400">Manage and send notifications</p>
          </div>
          <Button icon={Send}>Send Notification</Button>
        </div>

        <div className="flex gap-4 border-b border-dark-300">
          <button
            onClick={() => setActiveTab('received')}
            className={`pb-3 px-4 font-medium transition-colors ${
              activeTab === 'received'
                ? 'text-gold border-b-2 border-gold'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Received
          </button>
          <button
            onClick={() => setActiveTab('sent')}
            className={`pb-3 px-4 font-medium transition-colors ${
              activeTab === 'sent'
                ? 'text-gold border-b-2 border-gold'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Sent
          </button>
        </div>

        <div className="space-y-4">
          {notifications.map((notif) => (
            <Card key={notif.id} hover className={!notif.isRead ? 'border-gold/30' : ''}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">{notif.title}</h3>
                    {!notif.isRead && <Badge variant="gold" size="sm">New</Badge>}
                    <Badge
                      variant={
                        notif.priority === 'high' ? 'danger' :
                        notif.priority === 'normal' ? 'primary' : 'default'
                      }
                      size="sm"
                    >
                      {notif.priority}
                    </Badge>
                  </div>
                  <p className="text-gray-300 mb-3">{notif.message}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>From: {notif.senderName}</span>
                    <span>•</span>
                    <span>{notif.date} at {notif.time}</span>
                    <span>•</span>
                    <Badge variant="default" size="sm">{notif.type}</Badge>
                  </div>
                </div>
                <Bell className="w-5 h-5 text-gray-400" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AdminNotifications;
