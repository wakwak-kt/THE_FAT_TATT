
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';

interface AdminUser {
  id: number;
  name: string;
  email: string;
  role: 'super_admin' | 'admin' | 'staff';
  isActive: boolean;
  lastLogin: string;
  createdAt: string;
}

export default function AdminUsers() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<AdminUser | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'staff' as 'super_admin' | 'admin' | 'staff',
    isActive: true,
  });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    fetchUsers();
  }, [navigate]);

  const fetchUsers = async () => {
    try {
      // TODO: SpringBoot APIに接続
      const response = await fetch('/api/admin/users', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      }
    } catch (err) {
      console.error('Failed to fetch users:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = editingUser
        ? `/api/admin/users/${editingUser.id}`
        : '/api/admin/users';
      
      const method = editingUser ? 'PUT' : 'POST';

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
        fetchUsers();
        setShowModal(false);
        resetForm();
      }
    } catch (err) {
      console.error('Failed to save user:', err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('このユーザーを削除してもよろしいですか?')) return;

    try {
      // TODO: SpringBoot APIに接続
      const response = await fetch(`/api/admin/users/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
        },
      });

      if (response.ok) {
        fetchUsers();
      }
    } catch (err) {
      console.error('Failed to delete user:', err);
    }
  };

  const openEditModal = (user: AdminUser) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      password: '',
      role: user.role,
      isActive: user.isActive,
    });
    setShowModal(true);
  };

  const resetForm = () => {
    setEditingUser(null);
    setFormData({
      name: '',
      email: '',
      password: '',
      role: 'staff',
      isActive: true,
    });
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'super_admin':
        return 'スーパー管理者';
      case 'admin':
        return '管理者';
      case 'staff':
        return 'スタッフ';
      default:
        return role;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'super_admin':
        return 'bg-violet-100 text-violet-700';
      case 'admin':
        return 'bg-sky-100 text-sky-700';
      case 'staff':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">管理者ユーザー管理</h1>
            <p className="text-sm text-gray-500 mt-1">管理者アカウントの作成と権限管理</p>
          </div>
          <button
            onClick={() => {
              resetForm();
              setShowModal(true);
            }}
            className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-user-add-line text-lg"></i>
            新規ユーザー追加
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">ユーザー名</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">メールアドレス</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">権限</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">ステータス</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">最終ログイン</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">操作</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      </td>
                      <td className="py-4 px-6">
                        <p className="text-sm text-gray-600">{user.email}</p>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                          {getRoleLabel(user.role)}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            user.isActive
                              ? 'bg-emerald-100 text-emerald-700'
                              : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {user.isActive ? '有効' : '無効'}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <p className="text-sm text-gray-600">{user.lastLogin || '未ログイン'}</p>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => openEditModal(user)}
                            className="text-sm text-black hover:underline cursor-pointer whitespace-nowrap"
                          >
                            編集
                          </button>
                          <button
                            onClick={() => handleDelete(user.id)}
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
                    <td colSpan={6} className="py-12 text-center text-gray-500">
                      ユーザーがありません
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
                {editingUser ? 'ユーザー編集' : '新規ユーザー追加'}
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
                <label className="block text-sm font-medium text-gray-700 mb-2">ユーザー名</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none text-sm"
                  placeholder="山田太郎"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">メールアドレス</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none text-sm"
                  placeholder="user@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  パスワード {editingUser && '（変更する場合のみ入力）'}
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required={!editingUser}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none text-sm"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">権限</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value as any })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none text-sm cursor-pointer"
                >
                  <option value="staff">スタッフ</option>
                  <option value="admin">管理者</option>
                  <option value="super_admin">スーパー管理者</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  className="w-5 h-5 rounded border-gray-300 text-black focus:ring-black cursor-pointer"
                />
                <label htmlFor="isActive" className="text-sm font-medium text-gray-700 cursor-pointer">
                  アカウントを有効にする
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
                  {editingUser ? '更新' : '追加'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
