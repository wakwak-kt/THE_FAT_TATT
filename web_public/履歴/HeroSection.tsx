
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/the_fat_tatt_top.png"
          alt="THE FAT TATT Studio"
          className="w-full h-full object-cover object-center"
        />
        <div className="bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>

     {/* <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32 relative z-10">
        <div className="text-center space-y-8 bounce-in">
          <div className="inline-block px-8 py-3 bg-brand-yellow text-black text-sm font-black rounded-full shadow-2xl mb-4 border-4 border-black">
            ✨ WELCOME TO THE FAT TATT
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight">
            <span className="block text-white mb-4 drop-shadow-lg" style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.8)' }}>
              唯一無二の
            </span>
            <span className="block text-white drop-shadow-lg" style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.8)' }}>
              アートを、
            </span>
            <span className="block text-brand-yellow mt-4 drop-shadow-lg" style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.8)' }}>
              あなたの肌に
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-bold drop-shadow-lg">
            一人ひとりの想いを大切に、<br />
            世界に一つだけのタトゥーを創り上げます。<br />
            あなたのストーリーを、永遠のアートに。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12">
            <a
              href="https://instagram.com/the_fat_tatt"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="px-12 py-5 bg-brand-yellow text-black text-lg font-black rounded-full hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer whitespace-nowrap border-4 border-black"
            >
              <i className="ri-calendar-line mr-3 text-xl"></i>
              BOOKING OPEN
            </a>
            <a
              href="#gallery"
              className="px-12 py-5 bg-white text-black text-lg font-black rounded-full border-4 border-black hover:bg-brand-yellow hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-image-line mr-3 text-xl"></i>
              作品を見る
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#process" className="w-14 h-14 flex items-center justify-center bg-brand-yellow rounded-full shadow-2xl cursor-pointer hover:scale-110 transition-transform border-4 border-black">
          <i className="ri-arrow-down-line text-2xl text-black"></i>
        </a>
      </div>*/ }
    </section>
  );
};

export default HeroSection;
