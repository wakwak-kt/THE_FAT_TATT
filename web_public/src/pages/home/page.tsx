import HeroSection from './components/HeroSection';
//import GallerySection from './components/GallerySection';
import ProcessSection from './components/ProcessSection';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HomePage = () => {
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // const [specialtyRef, specialtyInView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });

  // const [artistsRef, artistsInView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });

  const [facilityRef, facilityInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [bookingRef, bookingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [accessRef, accessInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // const specialties = [
  //   {
  //     title: 'ブラック&グレー',
  //     description: '陰影表現を駆使した立体的で深みのあるデザイン。モノトーンの美しさを最大限に引き出します。',
  //     icon: 'ri-contrast-2-line',
  //   },
  //   {
  //     title: 'カスタムデザイン',
  //     description: 'お客様のアイデアを形にする完全オリジナルデザイン。世界に一つだけの作品を創り上げます。',
  //     icon: 'ri-pencil-ruler-2-line',
  //   },
  //   {
  //     title: '細密デザイン',
  //     description: '繊細なラインワークと緻密な表現。小さなスペースでも美しく映えるデザインが得意です。',
  //     icon: 'ri-focus-3-line',
  //   },
  //   {
  //     title: 'リアリズム',
  //     description: '写真のようなリアルな表現。人物や動物など、生命感あふれる作品を実現します。',
  //     icon: 'ri-image-line',
  //   },
  // ];

  // const artists = [
  //   {
  //     name: 'YUKI',
  //     specialty: 'ブラック&グレー',
  //     image: 'https://readdy.ai/api/search-image?query=Professional%20male%20tattoo%20artist%20portrait%20with%20tattooed%20arms%20wearing%20black%20shirt%20in%20modern%20studio%20confident%20pose%20looking%20at%20camera%20on%20clean%20white%20background%20professional%20photography%20style&width=600&height=800&seq=artist001&orientation=portrait',
  //     experience: '15年の経験',
  //     description: 'ブラック&グレーを専門とし、陰影表現に定評があります。リアリズムから抽象的なデザインまで幅広く対応。',
  //     instagram: '@yuki_thefattatt',
  //   },
  //   {
  //     name: 'TATTOO MACHINE',
  //     specialty: 'カスタムデザイン',
  //     image: 'https://readdy.ai/api/search-image?query=Professional%20tattoo%20machine%20equipment%20with%20neon%20green%20accent%20lighting%20on%20dark%20black%20background%20modern%20minimalist%20product%20photography%20high%20contrast%20artistic%20composition&width=600&height=800&seq=artist002&orientation=portrait',
  //     isGraphic: true,
  //     experience: '最新設備',
  //     description: '高品質な機材と厳選されたインクで、美しく長持ちする作品を実現します。',
  //     instagram: '@the_fat_tatt',
  //   },
  //   {
  //     name: 'MIKA',
  //     specialty: '細密デザイン',
  //     image: 'https://readdy.ai/api/search-image?query=Professional%20female%20tattoo%20artist%20portrait%20with%20artistic%20style%20wearing%20casual%20black%20clothing%20friendly%20smile%20in%20modern%20studio%20on%20clean%20white%20background%20professional%20photography%20style&width=600&height=800&seq=artist003&orientation=portrait',
  //     experience: '10年の経験',
  //     description: 'ファインラインと細密なデザインが得意。繊細で美しい作品を丁寧に仕上げます。',
  //     instagram: '@mika_thefattatt',
  //   },
  // ];

  const features = [
    {
      title: '完全予約制',
      description: 'プライベートな空間で、リラックスして施術を受けていただけます',
      icon: 'ri-calendar-check-line',
    },
    {
      title: '衛生管理',
      description: '使い捨て器具の使用と徹底した消毒で、安全性を最優先',
      icon: 'ri-shield-check-line',
    },
    {
      title: '最新設備',
      description: '高品質な機材と厳選されたインクで、美しい仕上がりを実現',
      icon: 'ri-tools-line',
    },
    {
      title: 'アフターケア',
      description: '施術後のケア方法を詳しくご説明し、長期的にサポート',
      icon: 'ri-heart-pulse-line',
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* About Section */}
      <section id="about" ref={aboutRef} className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-7xl font-black text-dark-900 mb-6">
              THE FAT TATTについて
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              一生残るアートだからこそ、妥協しない。<br />
              お客様の想いを形にするため、デザインから施術まで一貫してこだわり抜きます。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <img
                src="/images/nakamura_design.jpg"
                alt="スタジオ内観"
                className="w-full h-[500px] object-cover rounded-3xl shadow-lg"
              />
              <div className="absolute top-6 left-6 flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-dark-900">
                  衛生管理徹底
                </span>
                <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-dark-900">
                  完全予約制
                </span>
                <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-dark-900">
                  カスタムデザイン
                </span>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="inline-block px-4 py-2 bg-dark-900 text-white rounded-full text-sm font-medium mb-4">
                  コンセプト
                </div>
                <h3 className="text-3xl font-bold text-dark-900 mb-4">
                  世界に一つだけのアートを
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  THE FAT TATTは、広島県尾道市を拠点とするニュースクールタトゥースタジオです。THE FAT TATTでは、タトゥーを単なる装飾ではなく、お客様の人生の一部となる芸術作品として捉えています。
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 flex items-center justify-center bg-dark-900 text-white rounded-xl mb-4">
                    <i className="ri-shield-check-line text-2xl"></i>
                  </div>
                  <h4 className="font-bold text-dark-900 mb-2">安全性</h4>
                  <p className="text-sm text-gray-600">
                    使い捨て器具の使用と徹底した衛生管理
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 flex items-center justify-center bg-dark-900 text-white rounded-xl mb-4">
                    <i className="ri-palette-line text-2xl"></i>
                  </div>
                  <h4 className="font-bold text-dark-900 mb-2">芸術性</h4>
                  <p className="text-sm text-gray-600">
                    高い技術力と豊富な経験による美しい仕上がり
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-dark-900 rounded-3xl p-12 lg:p-16 text-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-sm font-medium text-white/60 mb-4">OUR PHILOSOPHY</div>
                <h2 className="text-4xl font-bold mb-6">
                  一生残るアートだからこそ、<br />
                  妥協しない
                </h2>
                <p className="text-white/80 leading-relaxed mb-6">
                  タトゥーは一生残るものだからこそ、一切の妥協を許しません。お客様との綿密なコミュニケーションを通じて、本当に満足いただけるデザインを追求します。
                </p>
                <p className="text-white/80 leading-relaxed">
                  施術後も長く美しい状態を保てるよう、アフターケアまで丁寧にサポートいたします。
                </p>
              </div>

              <div className="relative">
                <img
                  src="/images/nakamura_tatt.jpg"
                  alt="デザインスケッチ"
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialty Section
      <section ref={specialtyRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={specialtyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-dark-900 mb-4">
              得意なスタイル
            </h2>
            <p className="text-gray-600 text-lg">
              多様なスタイルに対応し、お客様の理想を実現します
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={specialtyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-dark-900 text-white rounded-2xl mb-6">
                  <i className={`${specialty.icon} text-3xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-dark-900 mb-4">{specialty.title}</h3>
                <p className="text-gray-600 leading-relaxed">{specialty.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <ProcessSection />

      {/* <div id="gallery">
        <GallerySection />
      </div> */}

      {/* Artists Section */}
      {/* <section id="artists" ref={artistsRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={artistsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-dark-900 mb-4">
              アーティスト紹介
            </h2>
            <p className="text-gray-600 text-lg">
              経験豊富なアーティストがあなたの理想を実現します
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={artistsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[3/4]">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${artist.isGraphic ? 'bg-dark-900' : ''
                      }`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-accent-green text-dark-900 rounded-full text-sm font-bold">
                      {artist.specialty}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-2">{artist.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{artist.experience}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {artist.description}
                  </p>
                  <a
                    href={`https://instagram.com/${artist.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-dark-900 font-medium text-sm hover:text-gray-600 transition-colors"
                  >
                    <i className="ri-instagram-line"></i>
                    <span>{artist.instagram}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Facility Section */}
      <section ref={facilityRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={facilityInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-dark-900 mb-4">
              安心の環境
            </h2>
            <p className="text-gray-600 text-lg">
              初めての方でも安心してご来店いただけます
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={facilityInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-2xl mx-auto mb-6">
                  <i className={`${feature.icon} text-4xl text-dark-900`}></i>
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section id="access" ref={accessRef} className="py-24 bg-[#FEBF00]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={accessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-dark-900 mb-4">
              アクセス
            </h2>
            <p className="text-dark-900 text-lg">
              お気軽にお越しください
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={accessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <div className="space-y-8 flex flex-col">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-dark-900 mb-6">店舗情報</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-dark-900 text-brand-yellow rounded-xl flex-shrink-0">
                      <i className="ri-map-pin-line text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-dark-900 mb-2">住所</h4>
                      <p className="text-dark-600">
                        〒722-0014<br />
                        広島県尾道市三軒屋家町3-26三軒屋アパートメント東館2F
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-dark-900 text-brand-yellow rounded-xl flex-shrink-0">
                      <i className="ri-calendar-check-line text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-dark-900 mb-2">営業時間</h4>
                      <p className="text-dark-600">
                        完全予約制<br />
                        詳細はInstagramのDMでお問い合わせください
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-dark-900 text-brand-yellow rounded-xl flex-shrink-0">
                      <a
                        href="https://instagram.com/the_fat_tatt"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        <i className="ri-instagram-line text-2xl"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className="font-bold text-dark-900 mb-2">Instagram</h4>
                      <a
                        href="https://instagram.com/the_fat_tatt"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="text-dark-900 hover:text-gray-600 transition-colors font-medium"
                      >
                        @the_fat_tatt
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-dark-900 text-brand-yellow rounded-xl flex-shrink-0">
                      <i className="ri-file-text-line text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-dark-900 mb-2">note</h4>
                      <a
                        href="#"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="text-dark-900 hover:text-gray-600 transition-colors font-medium"
                      >
                        noteで最新情報をチェック
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-yellow border-4 border-black rounded-2xl p-6">
                <div className="flex items-start space-x-3">
                  <i className="ri-information-line text-2xl text-dark-900 flex-shrink-0 mt-1"></i>
                  <div>
                    <h4 className="font-bold text-dark-900 mb-2">ご来店の際の注意</h4>
                    <p className="text-dark-900 text-sm leading-relaxed">
                      完全予約制となっております。事前にInstagramのDMでご予約をお願いいたします。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[600px]">
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-lg border-4 border-black">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.838957272248!2d133.18930777604328!3d34.405438998997774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3551017f4cbbeecd%3A0x570359b4476ea913!2sTHE%20FAT%20TATT!5e0!3m2!1sja!2sjp!4v1768816720326!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="THE FAT TATT 地図"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <section ref={bookingRef} className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={bookingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-brand-yellow to-accent-green rounded-3xl p-12 lg:p-16 text-center border-4 border-black shadow-2xl"
          >
            <div className="w-20 h-20 flex items-center justify-center bg-black text-brand-yellow rounded-2xl mx-auto mb-6">
              <i className="ri-instagram-line text-4xl"></i>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-dark-900 mb-6">
              ご予約について
            </h2>
            <p className="text-xl text-dark-900 mb-8 leading-relaxed">
              ご予約は<strong>InstagramのDM</strong>で承っております。<br />
              お気軽にメッセージをお送りください。
            </p>
            <a
              href="https://instagram.com/the_fat_tatt"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center space-x-2 md:space-x-3 px-4 py-3 md:px-10 md:py-5 bg-black text-brand-yellow text-base md:text-lg font-black rounded-full hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer border-4 border-black"
            >
              <i className="ri-instagram-line text-xl md:text-2xl"></i>
              <span>InstagramでDMを送る</span>
            </a>
            <p className="text-sm text-dark-900/70 mt-6">
              @the_fat_tatt をフォローして最新作品もチェック！
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
