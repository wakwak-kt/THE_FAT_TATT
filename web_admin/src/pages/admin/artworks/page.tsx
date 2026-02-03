
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';

interface Artwork {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  price: number;
  isAvailable: boolean;
  createdAt: string;
}

export default function AdminArtworks() {
  const navigate = useNavigate();
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingArtwork, setEditingArtwork] = useState<Artwork | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: 0,
    isAvailable: true,
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    fetchArtworks();
  }, [navigate]);

  const fetchArtworks = async () => {
    try {
      // TODO: SpringBoot APIに接続
      const response = await fetch('/api/admin/artworks', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setArtworks(data);
      }
    } catch (err) {
      console.error('Failed to fetch artworks:', err);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('price', formData.price.toString());
      formDataToSend.append('isAvailable', formData.isAvailable.toString());
      
      if (selectedFile) {
        formDataToSend.append('image', selectedFile);
      }

      const url = editingArtwork
        ? `/api/admin/artworks/${editingArtwork.id}`
        : '/api/admin/artworks';
      
      const method = editingArtwork ? 'PUT' : 'POST';

      // TODO: SpringBoot APIに接続
      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
        },
        body: formDataToSend,
      });

      if (response.ok) {
        fetchArtworks();
        setShowModal(false);
        resetForm();
      }
    } catch (err) {
      console.error('Failed to save artwork:', err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('このアートワークを削除してもよろしいですか?')) return;

    try {
      // TODO: SpringBoot APIに接続
      const response = await fetch(`/api/admin/artworks/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
        },
      });

      if (response.ok) {
        fetchArtworks();
      }
    } catch (err) {
      console.error('Failed to delete artwork:', err);
    }
  };

  const openEditModal = (artwork: Artwork) => {
    setEditingArtwork(artwork);
    setFormData({
      title: artwork.title,
      description: artwork.description,
      category: artwork.category,
      price: artwork.price,
      isAvailable: artwork.isAvailable,
    });
    setPreviewUrl(artwork.imageUrl);
    setShowModal(true);
  };

  const resetForm = () => {
    setEditingArtwork(null);
    setFormData({
      title: '',
      description: '',
      category: '',
      price: 0,
      isAvailable: true,
    });
    setSelectedFile(null);
    setPreviewUrl('');
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">アートドロップ管理</h1>
            <p className="text-sm text-gray-500 mt-1">デザイン画像のアップロードと管理</p>
          </div>
          <button
            onClick={() => {
              resetForm();
              setShowModal(true);
            }}
            className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-add-line text-lg"></i>
            新規アップロード
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.length > 0 ? (
            artworks.map((artwork) => (
              <div key={artwork.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all">
                <div className="aspect-square bg-gray-100 relative">
                  <img
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    className="w-full h-full object-cover"
                  />
                  {!artwork.isAvailable && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      非公開
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{artwork.title}</h3>
                  <p className="text-sm text-gray-500 mb-2 line-clamp-2">{artwork.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {artwork.category}
                    </span>
                    <span className="text-sm font-semibold text-gray-900">
                      ¥{artwork.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openEditModal(artwork)}
                      className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      編集
                    </button>
                    <button
                      onClick={() => handleDelete(artwork.id)}
                      className="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      削除
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-gray-500">
              アートワークがありません
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                {editingArtwork ? 'アートワーク編集' : '新規アートワーク追加'}
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
                <label className="block text-sm font-medium text-gray-700 mb-2">画像</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-black transition-colors cursor-pointer">
                  {previewUrl ? (
                    <div className="relative">
                      <img src={previewUrl} alt="Preview" className="max-h-64 mx-auto rounded-lg" />
                      <button
                        type="button"
                        onClick={() => {
                          setPreviewUrl('');
                          setSelectedFile(null);
                        }}
                        className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"
                      >
                        <i className="ri-close-line"></i>
                      </button>
                    </div>
                  ) : (
                    <label className="cursor-pointer">
                      <i className="ri-image-add-line text-4xl text-gray-400 mb-2 block"></i>
                      <p className="text-sm text-gray-600 mb-1">クリックして画像を選択</p>
                      <p className="text-xs text-gray-400">PNG, JPG, GIF (最大10MB)</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">タイトル</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none text-sm"
                  placeholder="アートワークのタイトル"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">説明</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none text-sm resize-none"
                  placeholder="アートワークの説明（最大500文字）"
                />
                <p className="text-xs text-gray-500 mt-1">{formData.description.length}/500文字</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">カテゴリー</label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none text-sm"
                    placeholder="例: トライバル"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">価格（円）</label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                    required
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none text-sm"
                    placeholder="10000"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="isAvailable"
                  checked={formData.isAvailable}
                  onChange={(e) => setFormData({ ...formData, isAvailable: e.target.checked })}
                  className="w-5 h-5 rounded border-gray-300 text-black focus:ring-black cursor-pointer"
                />
                <label htmlFor="isAvailable" className="text-sm font-medium text-gray-700 cursor-pointer">
                  公開する
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
                  {editingArtwork ? '更新' : '追加'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
