
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SpecialtySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const specialties = [
    {
      title: 'ブラック&グレー',
      description: '陰影表現を駆使した立体的で深みのあるデザイン。モノトーンの美しさを最大限に引き出します。',
      icon: 'ri-contrast-2-line',
    },
    {
      title: 'カスタムデザイン',
      description: 'お客様のアイデアを形にする完全オリジナルデザイン。世界に一つだけの作品を創り上げます。',
      icon: 'ri-pencil-ruler-2-line',
    },
    {
      title: '細密デザイン',
      description: '繊細なラインワークと緻密な表現。小さなスペースでも美しく映えるデザインが得意です。',
      icon: 'ri-focus-3-line',
    },
    {
      title: 'リアリズム',
      description: '写真のようなリアルな表現。人物や動物など、生命感あふれる作品を実現します。',
      icon: 'ri-image-line',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
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
              animate={inView ? { opacity: 1, y: 0 } : {}}
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
    </section>
  );
};

export default SpecialtySection;
