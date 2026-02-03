
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ArtistsGrid = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const artists = [
    {
      name: 'YUKI',
      specialty: 'ブラック&グレー',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20tattoo%20artist%20portrait%20with%20tattooed%20arms%20wearing%20black%20shirt%20in%20modern%20studio%20confident%20pose%20looking%20at%20camera%20on%20clean%20white%20background%20professional%20photography%20style&width=600&height=800&seq=artist001&orientation=portrait',
      experience: '15年の経験',
      description: 'ブラック&グレーを専門とし、陰影表現に定評があります。リアリズムから抽象的なデザインまで幅広く対応。',
      instagram: '@yuki_thefattatt',
    },
    {
      name: 'TATTOO MACHINE',
      specialty: 'カスタムデザイン',
      image: 'https://readdy.ai/api/search-image?query=Professional%20tattoo%20machine%20equipment%20with%20neon%20green%20accent%20lighting%20on%20dark%20black%20background%20modern%20minimalist%20product%20photography%20high%20contrast%20artistic%20composition&width=600&height=800&seq=artist002&orientation=portrait',
      isGraphic: true,
      experience: '最新設備',
      description: '高品質な機材と厳選されたインクで、美しく長持ちする作品を実現します。',
      instagram: '@the_fat_tatt',
    },
    {
      name: 'MIKA',
      specialty: '細密デザイン',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20tattoo%20artist%20portrait%20with%20artistic%20style%20wearing%20casual%20black%20clothing%20friendly%20smile%20in%20modern%20studio%20on%20clean%20white%20background%20professional%20photography%20style&width=600&height=800&seq=artist003&orientation=portrait',
      experience: '10年の経験',
      description: 'ファインラインと細密なデザインが得意。繊細で美しい作品を丁寧に仕上げます。',
      instagram: '@mika_thefattatt',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[3/4]">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    artist.isGraphic ? 'bg-dark-900' : ''
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
    </section>
  );
};

export default ArtistsGrid;
