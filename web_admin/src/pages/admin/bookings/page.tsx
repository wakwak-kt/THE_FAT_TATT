
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';

interface Booking {
  id: number;
  customerName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes: string;
  createdAt: string;
}

export default function AdminBookings() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    fetchBookings();
  }, [navigate]);

  const fetchBookings = async () => {
    try {
      // TODO: SpringBoot APIに接続
      const response = await fetch('/api/admin/bookings', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setBookings(data);
      }
    } catch (err) {
      console.error('Failed to fetch bookings:', err);
    }
  };

  const updateBookingStatus = async (bookingId: number, newStatus: string) => {
    try {
      // TODO: SpringBoot APIに接続
      const response = await fetch(`/api/admin/bookings/${bookingId}/status`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        fetchBookings();
        setShowModal(false);
      }
    } catch (err) {
      console.error('Failed to update booking status:', err);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-amber-100 text-amber-700';
      case 'confirmed':
        return 'bg-sky-100 text-sky-700';
      case 'completed':
        return 'bg-emerald-100 text-emerald-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending':
        return '保留中';
      case 'confirmed':
        return '確認済み';
      case 'completed':
        return '完了';
      case 'cancelled':
        return 'キャンセル';
      default:
        return status;
    }
  };

  const filteredBookings = bookings.filter((booking) => {
    const matchesFilter = filter === 'all' || booking.status === filter;
    const matchesSearch =
      booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">予約管理</h1>
            <p className="text-sm text-gray-500 mt-1">予約の確認とステータス管理</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-search-line text-gray-400"></i>
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="名前またはメールで検索..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none text-sm"
                />
              </div>
            </div>
            <div className="flex gap-2">
              {['all', 'pending', 'confirmed', 'completed', 'cancelled'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                    filter === status
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {status === 'all' ? 'すべて' : getStatusLabel(status)}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">顧客名</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">連絡先</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">予約日時</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">サービス</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">ステータス</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">操作</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.length > 0 ? (
                  filteredBookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <p className="text-sm font-medium text-gray-900">{booking.customerName}</p>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-sm text-gray-600">{booking.email}</p>
                        <p className="text-xs text-gray-500">{booking.phone}</p>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-sm text-gray-900">{booking.date}</p>
                        <p className="text-xs text-gray-500">{booking.time}</p>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-sm text-gray-900">{booking.service}</p>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                          {getStatusLabel(booking.status)}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <button
                          onClick={() => {
                            setSelectedBooking(booking);
                            setShowModal(true);
                          }}
                          className="text-sm text-black hover:underline cursor-pointer whitespace-nowrap"
                        >
                          詳細・編集
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-gray-500">
                      予約が見つかりません
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">予約詳細</h2>
              <button
                onClick={() => setShowModal(false)}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-xl text-gray-600"></i>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">顧客名</label>
                <p className="text-base text-gray-900 mt-1">{selectedBooking.customerName}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">メールアドレス</label>
                  <p className="text-base text-gray-900 mt-1">{selectedBooking.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">電話番号</label>
                  <p className="text-base text-gray-900 mt-1">{selectedBooking.phone}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">予約日</label>
                  <p className="text-base text-gray-900 mt-1">{selectedBooking.date}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">時間</label>
                  <p className="text-base text-gray-900 mt-1">{selectedBooking.time}</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">サービス</label>
                <p className="text-base text-gray-900 mt-1">{selectedBooking.service}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">備考</label>
                <p className="text-base text-gray-900 mt-1">{selectedBooking.notes || 'なし'}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">ステータス変更</label>
                <div className="grid grid-cols-2 gap-3">
                  {['pending', 'confirmed', 'completed', 'cancelled'].map((status) => (
                    <button
                      key={status}
                      onClick={() => updateBookingStatus(selectedBooking.id, status)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                        selectedBooking.status === status
                          ? 'bg-black text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {getStatusLabel(status)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
