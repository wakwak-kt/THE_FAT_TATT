
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-7xl font-black text-dark-900 mb-6">
            THE FAT TATTについて
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            一生残るアートだからこそ、妥協しない。<br />
            お客様の想いを形にするため、デザインから施術まで一貫してこだわり抜きます。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=Modern%20minimalist%20tattoo%20studio%20interior%20with%20clean%20white%20walls%20professional%20equipment%20comfortable%20black%20leather%20chair%20and%20warm%20ambient%20lighting%20creating%20welcoming%20atmosphere%20professional%20interior%20photography&width=800&height=600&seq=about001&orientation=landscape"
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
              <h2 className="text-3xl font-bold text-dark-900 mb-4">
                世界に一つだけのアートを
              </h2>
              <p className="text-gray-600 leading-relaxed">
                THE FAT TATTは、東京を拠点とするカスタムタトゥースタジオです。私たちは、タトゥーを単なる装飾ではなく、お客様の人生の一部となる芸術作品として捉えています。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center bg-dark-900 text-white rounded-xl mb-4">
                  <i className="ri-shield-check-line text-2xl"></i>
                </div>
                <h3 className="font-bold text-dark-900 mb-2">安全性</h3>
                <p className="text-sm text-gray-600">
                  使い捨て器具の使用と徹底した衛生管理
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center bg-dark-900 text-white rounded-xl mb-4">
                  <i className="ri-palette-line text-2xl"></i>
                </div>
                <h3 className="font-bold text-dark-900 mb-2">芸術性</h3>
                <p className="text-sm text-gray-600">
                  高い技術力と豊富な経験による美しい仕上がり
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
