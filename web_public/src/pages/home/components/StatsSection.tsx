const StatsSection = () => {
  const stats = [
    {
      icon: 'ri-award-line',
      number: '10+',
      label: '年の経験',
      color: 'from-brand-yellow to-brand-yellow-dark',
    },
    {
      icon: 'ri-user-heart-line',
      number: '500+',
      label: '満足のお客様',
      color: 'from-brand-yellow to-brand-yellow-dark',
    },
    {
      icon: 'ri-palette-line',
      number: '100%',
      label: 'カスタムデザイン',
      color: 'from-brand-yellow to-brand-yellow-dark',
    },
    {
      icon: 'ri-star-line',
      number: '5.0',
      label: '平均評価',
      color: 'from-brand-yellow to-brand-yellow-dark',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-brand-yellow"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-brand-yellow"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-brand-yellow rounded-3xl flex items-center justify-center shadow-xl border-4 border-black transform hover:rotate-12 hover:scale-110 transition-all duration-300">
                <i className={`${stat.icon} text-4xl text-black`}></i>
              </div>
              <p className="text-5xl font-black text-black mb-3" style={{ textShadow: '2px 2px 0px rgba(255, 215, 0, 0.3)' }}>
                {stat.number}
              </p>
              <p className="text-base text-gray-700 font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
