
import { motion } from 'framer-motion';

const ArtistsHero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6">
              <span className="block text-5xl lg:text-6xl font-light text-gray-400 mb-2">
                Meet Our
              </span>
              <span className="block text-5xl lg:text-7xl font-bold italic text-dark-900 font-serif">
                Artists
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              THE FAT TATTには、それぞれ異なるスタイルと得意分野を持つアーティストが在籍しています。あなたの理想を実現できるアーティストがきっと見つかります。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArtistsHero;
