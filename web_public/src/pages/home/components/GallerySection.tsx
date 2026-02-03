import { useState } from 'react';

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'すべて', icon: 'ri-grid-line' },
    { id: 'blackwork', label: 'ブラックワーク', icon: 'ri-contrast-2-line' },
    { id: 'color', label: 'カラー', icon: 'ri-palette-line' },
    { id: 'minimal', label: 'ミニマル', icon: 'ri-pencil-line' },
    { id: 'traditional', label: 'トラディショナル', icon: 'ri-ancient-gate-line' },
  ];

  const gallery = [
    {
      id: 1,
      category: 'blackwork',
      title: 'ドラゴン・スリーブ',
      description: '力強さと美しさを表現した和柄デザイン',
      image: 'https://readdy.ai/api/search-image?query=Stunning%20professional%20Japanese%20dragon%20sleeve%20tattoo%20in%20black%20and%20grey%20ink%20with%20intricate%20scales%20and%20flowing%20clouds%20on%20muscular%20arm%20against%20clean%20white%20studio%20background%20with%20soft%20professional%20lighting%20showcasing%20detailed%20shading%20and%20artistic%20craftsmanship&width=600&height=800&seq=gallery1&orientation=portrait',
    },
    {
      id: 2,
      category: 'color',
      title: 'フラワー・バック',
      description: '鮮やかな色彩で描く花々のアート',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20vibrant%20colorful%20floral%20back%20tattoo%20with%20roses%20peonies%20and%20butterflies%20in%20bright%20pink%20purple%20and%20blue%20tones%20on%20smooth%20skin%20against%20clean%20white%20studio%20background%20with%20soft%20professional%20lighting%20showing%20stunning%20color%20saturation&width=600&height=800&seq=gallery2&orientation=portrait',
    },
    {
      id: 3,
      category: 'minimal',
      title: 'ライン・アート',
      description: 'シンプルで洗練された一筆書きデザイン',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20minimalist%20single%20line%20art%20tattoo%20of%20abstract%20face%20profile%20in%20fine%20black%20ink%20on%20forearm%20against%20clean%20white%20studio%20background%20with%20soft%20professional%20lighting%20showcasing%20delicate%20continuous%20line%20work&width=600&height=800&seq=gallery3&orientation=portrait',
    },
    {
      id: 4,
      category: 'traditional',
      title: 'アメリカン・トラディショナル',
      description: 'クラシックなスタイルの王道デザイン',
      image: 'https://readdy.ai/api/search-image?query=Classic%20American%20traditional%20tattoo%20with%20bold%20black%20outlines%20featuring%20eagle%20anchor%20and%20roses%20in%20vibrant%20red%20yellow%20and%20blue%20colors%20on%20upper%20arm%20against%20clean%20white%20studio%20background%20with%20soft%20professional%20lighting&width=600&height=800&seq=gallery4&orientation=portrait',
    },
    {
      id: 5,
      category: 'blackwork',
      title: 'ジオメトリック',
      description: '幾何学模様で構成された現代的デザイン',
      image: 'https://readdy.ai/api/search-image?query=Modern%20geometric%20blackwork%20tattoo%20with%20sacred%20geometry%20patterns%20mandalas%20and%20dotwork%20in%20solid%20black%20ink%20on%20forearm%20against%20clean%20white%20studio%20background%20with%20soft%20professional%20lighting%20showing%20precise%20symmetrical%20design&width=600&height=800&seq=gallery5&orientation=portrait',
    },
    {
      id: 6,
      category: 'color',
      title: 'ウォーターカラー',
      description: '水彩画のような柔らかな色使い',
      image: 'https://readdy.ai/api/search-image?query=Artistic%20watercolor%20style%20tattoo%20with%20soft%20blended%20colors%20featuring%20hummingbird%20and%20flowers%20in%20pastel%20pink%20blue%20and%20purple%20tones%20on%20shoulder%20against%20clean%20white%20studio%20background%20with%20soft%20professional%20lighting&width=600&height=800&seq=gallery6&orientation=portrait',
    },
  ];

  const filteredGallery = activeCategory === 'all' 
    ? gallery 
    : gallery.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-brand-yellow relative overflow-hidden">
      <div className="absolute top-20 left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 slide-up">
          <div className="inline-block px-8 py-3 bg-black text-brand-yellow text-sm font-black rounded-full shadow-xl mb-6 border-4 border-black">
            GALLERY
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-black mb-6" style={{ textShadow: '3px 3px 0px rgba(255, 255, 255, 0.3)' }}>
            作品ギャラリー
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto font-bold">
            これまでに手がけた作品の一部をご紹介します。
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-4 rounded-full font-black text-sm transition-all duration-300 cursor-pointer whitespace-nowrap border-4 ${
                activeCategory === category.id
                  ? 'bg-black text-brand-yellow border-black shadow-2xl scale-110'
                  : 'bg-white text-black border-black hover:bg-black hover:text-brand-yellow hover:scale-105'
              }`}
            >
              <i className={`${category.icon} mr-2 text-base`}></i>
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-2xl transition-all duration-300 bg-white border-4 border-black hover:scale-105">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-black mb-2">{item.title}</h3>
                    <p className="text-sm text-white/90 font-bold">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://instagram.com/the_fat_tatt"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block px-12 py-5 bg-black text-brand-yellow text-lg font-black rounded-full hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer whitespace-nowrap border-4 border-black"
          >
            <i className="ri-instagram-line mr-3 text-xl"></i>
            Instagramで更に見る
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
