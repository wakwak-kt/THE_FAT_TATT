
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';

interface DashboardStats {
  totalBookings: number;
  pendingBookings: number;
  totalAnnouncements: number;
  totalArtworks: number;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState<DashboardStats>({
    totalBookings: 0,
    pendingBookings: 0,
    totalAnnouncements: 0,
    totalArtworks: 0,
  });
  const [recentActivities, setRecentActivities] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    fetchDashboardData();
  }, [navigate]);

  const fetchDashboardData = async () => {
    try {
      // TODO: SpringBoot APIに接続
      const response = await fetch('/api/admin/dashboard', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setStats(data.stats);
        setRecentActivities(data.recentActivities);
      }
    } catch (err) {
      console.error('Failed to fetch dashboard data:', err);
    }
  };

  const statCards = [
    {
      title: '総予約数',
      value: stats.totalBookings,
      icon: 'ri-calendar-check-line',
      color: 'bg-emerald-500',
      link: '/admin/bookings',
    },
    {
      title: '保留中の予約',
      value: stats.pendingBookings,
      icon: 'ri-time-line',
      color: 'bg-amber-500',
      link: '/admin/bookings',
    },
    {
      title: 'お知らせ',
      value: stats.totalAnnouncements,
      icon: 'ri-notification-line',
      color: 'bg-sky-500',
      link: '/admin/announcements',
    },
    {
      title: 'アートドロップ',
      value: stats.totalArtworks,
      icon: 'ri-image-line',
      color: 'bg-violet-500',
      link: '/admin/artworks',
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">ダッシュボード</h1>
          <p className="text-sm text-gray-500 mt-1">管理者システムの概要</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.link)}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{card.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{card.value}</p>
                </div>
                <div className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center`}>
                  <i className={`${card.icon} text-2xl text-white`}></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">最近のアクティビティ</h2>
            <div className="space-y-4">
              {recentActivities.length > 0 ? (
                recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-history-line text-gray-600"></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">{activity.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500 text-center py-8">アクティビティがありません</p>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">クイックアクション</h2>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => navigate('/admin/bookings')}
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-black hover:bg-gray-50 transition-all text-left whitespace-nowrap"
              >
                <i className="ri-calendar-line text-xl text-gray-700 mb-2 block"></i>
                <p className="text-sm font-medium text-gray-900">予約管理</p>
              </button>
              <button
                onClick={() => navigate('/admin/announcements')}
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-black hover:bg-gray-50 transition-all text-left whitespace-nowrap"
              >
                <i className="ri-notification-line text-xl text-gray-700 mb-2 block"></i>
                <p className="text-sm font-medium text-gray-900">お知らせ</p>
              </button>
              <button
                onClick={() => navigate('/admin/artworks')}
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-black hover:bg-gray-50 transition-all text-left whitespace-nowrap"
              >
                <i className="ri-image-add-line text-xl text-gray-700 mb-2 block"></i>
                <p className="text-sm font-medium text-gray-900">アート追加</p>
              </button>
              <button
                onClick={() => navigate('/admin/users')}
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-black hover:bg-gray-50 transition-all text-left whitespace-nowrap"
              >
                <i className="ri-user-settings-line text-xl text-gray-700 mb-2 block"></i>
                <p className="text-sm font-medium text-gray-900">ユーザー管理</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
