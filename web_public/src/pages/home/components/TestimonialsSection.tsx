const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: '田中 美咲',
      age: 28,
      rating: 5,
      comment: '初めてのタトゥーで不安でしたが、丁寧なカウンセリングと説明で安心して施術を受けられました。デザインも想像以上に素敵で大満足です！',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20photo%20of%20smiling%20young%20Japanese%20woman%20with%20modern%20hairstyle%20against%20clean%20white%20background%20with%20soft%20studio%20lighting%20showing%20friendly%20confident%20expression&width=200&height=200&seq=testimonial1&orientation=squarish',
      tattoo: 'フラワー・リストバンド',
    },
    {
      id: 2,
      name: '佐藤 健太',
      age: 35,
      rating: 5,
      comment: '他店で断られたデザインを見事に実現してくれました。技術力の高さと芸術性に感動。これからもお願いしたいです。',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20photo%20of%20smiling%20young%20Japanese%20man%20with%20stylish%20haircut%20against%20clean%20white%20background%20with%20soft%20studio%20lighting%20showing%20friendly%20confident%20expression&width=200&height=200&seq=testimonial2&orientation=squarish',
      tattoo: 'ドラゴン・スリーブ',
    },
    {
      id: 3,
      name: '山田 彩花',
      age: 24,
      rating: 5,
      comment: 'ミニマルなデザインを希望していて、完璧な仕上がりになりました。痛みへの配慮も素晴らしく、リラックスして施術を受けられました。',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20photo%20of%20smiling%20young%20Japanese%20woman%20with%20trendy%20hairstyle%20against%20clean%20white%20background%20with%20soft%20studio%20lighting%20showing%20friendly%20confident%20expression&width=200&height=200&seq=testimonial3&orientation=squarish',
      tattoo: 'ライン・アート',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 slide-up">
          <div className="inline-block px-8 py-3 bg-black text-brand-yellow text-sm font-black rounded-full shadow-xl mb-6 border-4 border-black">
            TESTIMONIALS
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-black mb-6" style={{ textShadow: '3px 3px 0px rgba(255, 215, 0, 0.2)' }}>
            お客様の声
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-bold">
            実際に施術を受けられたお客様からの嬉しいお声をご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-black hover:bg-brand-yellow/10 hover:-translate-y-2 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 ring-4 ring-brand-yellow border-2 border-black">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-black text-black">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 font-bold">{testimonial.age}歳</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-brand-yellow text-xl"></i>
                ))}
              </div>

              <p className="text-sm text-gray-700 leading-relaxed mb-4 font-bold">
                {testimonial.comment}
              </p>

              <div className="pt-4 border-t-2 border-black">
                <p className="text-xs text-black font-black">
                  <i className="ri-brush-line mr-1 text-brand-yellow"></i>
                  施術内容：{testimonial.tattoo}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-brand-yellow rounded-3xl p-12 text-center border-4 border-black shadow-2xl">
          <h3 className="text-4xl md:text-5xl font-black mb-4 text-black" style={{ textShadow: '2px 2px 0px rgba(255, 255, 255, 0.3)' }}>
            あなたも一生の宝物を手に入れませんか？
          </h3>
          <p className="text-lg mb-8 font-bold text-black">
            無料カウンセリングで、あなたの想いをお聞かせください。
          </p>
          <a
            href="https://instagram.com/the_fat_tatt"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block px-12 py-5 bg-black text-brand-yellow text-lg font-black rounded-full hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer whitespace-nowrap border-4 border-black"
          >
            <i className="ri-calendar-line mr-3 text-xl"></i>
            今すぐ予約する
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
