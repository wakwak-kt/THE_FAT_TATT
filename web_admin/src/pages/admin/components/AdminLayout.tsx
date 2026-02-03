
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const menuItems = [
    { path: '/admin/dashboard', icon: 'ri-dashboard-line', label: 'ダッシュボード' },
    { path: '/admin/bookings', icon: 'ri-calendar-check-line', label: '予約管理' },
    { path: '/admin/announcements', icon: 'ri-notification-line', label: 'お知らせ管理' },
    { path: '/admin/artworks', icon: 'ri-image-line', label: 'アートドロップ' },
    { path: '/admin/users', icon: 'ri-user-settings-line', label: 'ユーザー管理' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 transition-all duration-300 z-40 ${
          isSidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          {isSidebarOpen && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <i className="ri-admin-line text-xl text-white"></i>
              </div>
              <span className="font-bold text-gray-900">管理者パネル</span>
            </div>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            <i className={`ri-${isSidebarOpen ? 'menu-fold' : 'menu-unfold'}-line text-gray-600`}></i>
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                location.pathname === item.path
                  ? 'bg-black text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <i className={`${item.icon} text-xl`}></i>
              {isSidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-all cursor-pointer whitespace-nowrap"
          >
            <i className="ri-logout-box-line text-xl"></i>
            {isSidebarOpen && <span className="text-sm font-medium">ログアウト</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}
      >
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
