
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';

interface Announcement {
  id: number;
  title: string;
  content: string;
  publishDate: string;
  isPublished: boolean;
  createdAt: string;
}

export default function AdminAnnouncements() {
  const navigate = useNavigate();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingAnnouncement, setEditingAnnouncement] = useState<Announcement | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    publishDate: '',
    isPublished: false,
  });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    fetchAnnouncements();
  }, [navigate]);

  const fetchAnnouncements = async () => {
    try {
      // TODO: SpringBoot APIに接続
      const response = await fetch('/api/admin/announcements', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAnnouncements(data);
      }
    } catch (err) {
      console.error('Failed to fetch announcements:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = editingAnnouncement
        ? `/api/admin/announcements/${editingAnnouncement.id}`
        : '/api/admin/announcements';
      
      const method = editingAnnouncement ? 'PUT' : 'POST';

      // TODO: SpringBoot APIに接続
      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        fetchAnnouncements();
        setShowModal(false);
        resetForm();
      }
    } catch (err) {
      console.error('Failed to save announcement:', err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('このお知らせを削除してもよろしいですか?')) return;

    try {
      // TODO: SpringBoot APIに接続
      const response = await fetch(`/api/admin/announcements/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
        },
      });

      if (response.ok) {
        fetchAnnouncements();
      }
    } catch (err) {
      console.error('Failed to delete announcement:', err);
    }
  };

  const openEditModal = (announcement: Announcement) => {
    setEditingAnnouncement(announcement);
    setFormData({
      title: announcement.title,
      content: announcement.content,
      publishDate: announcement.publishDate,
      isPublished: announcement.isPublished,
    });
    setShowModal(true);
  };

  const resetForm = () => {
    setEditingAnnouncement(null);
    setFormData({
      title: '',
      content: '',
      publishDate: '',
      isPublished: false,
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">お知らせ管理</h1>
            <p className="text-sm text-gray-500 mt-1">お知らせの作成・編集・削除</p>
          </div>
          <button
            onClick={() => {
              resetForm();
              setShowModal(true);
            }}
            className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-add-line text-lg"></i>
            新規作成
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">タイトル</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">公開日</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">ステータス</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">操作</th>
                </tr>
              </thead>
              <tbody>
                {announcements.length > 0 ? (
                  announcements.map((announcement) => (
                    <tr key={announcement.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <p className="text-sm font-medium text-gray-900">{announcement.title}</p>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-1">{announcement.content}</p>
                      </td>
                      <td className="py-4 px-6">
                        <p className="text-sm text-gray-900">{announcement.publishDate}</p>
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            announcement.isPublished
                              ? 'bg-emerald-100 text-emerald-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {announcement.isPublished ? '公開中' : '下書き'}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => openEditModal(announcement)}
                            className="text-sm text-black hover:underline cursor-pointer whitespace-nowrap"
                          >
                            編集
                          </button>
                          <button
                            onClick={() => handleDelete(announcement.id)}
                            className="text-sm text-red-600 hover:underline cursor-pointer whitespace-nowrap"
                          >
                            削除
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-12 text-center text-gray-500">
                      お知らせがありません
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                {editingAnnouncement ? 'お知らせ編集' : '新規お知らせ作成'}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-xl text-gray-600"></i>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">タイトル</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none text-sm"
                  placeholder="お知らせのタイトルを入力"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">内容</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  required
                  rows={6}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none text-sm resize-none"
                  placeholder="お知らせの内容を入力（最大500文字）"
                />
                <p className="text-xs text-gray-500 mt-1">{formData.content.length}/500文字</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">公開日</label>
                <input
                  type="date"
                  value={formData.publishDate}
                  onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none text-sm"
                />
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="isPublished"
                  checked={formData.isPublished}
                  onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                  className="w-5 h-5 rounded border-gray-300 text-black focus:ring-black cursor-pointer"
                />
                <label htmlFor="isPublished" className="text-sm font-medium text-gray-700 cursor-pointer">
                  すぐに公開する
                </label>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
                >
                  キャンセル
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap"
                >
                  {editingAnnouncement ? '更新' : '作成'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
