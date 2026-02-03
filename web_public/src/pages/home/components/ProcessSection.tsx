import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProcessSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const patterns = [
    {
      title: 'オーダー',
      description: 'お客様の欲しいモチーフをお伝えいただき、アーティストがオリジナルデザインとして描き起こします',
      icon: 'ri-pencil-ruler-2-line',
      features: ['完全オリジナル', '世界に一つだけ', 'じっくり相談'],
    },
    {
      title: '持ち込み',
      description: '「このタトゥーを彫りたい」というデザインをお持ちください。ご希望のデザインを忠実に再現します',
      icon: 'ri-image-add-line',
      features: ['お気に入りデザイン', '参考画像OK', '細部まで相談'],
    },
    {
      title: 'アートドロップ',
      description: 'アーティストが事前に描いたデザインの中からお選びいただけます。比較的リーズナブルな価格設定です',
      icon: 'ri-gallery-line',
      features: ['既存デザイン', 'リーズナブル', 'すぐ施術可能'],
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'ご予約',
      description: 'InstagramのDMにてご希望の日時とデザインのイメージをお伝えください',
      icon: 'ri-calendar-check-line',
    },
    {
      number: '02',
      title: 'カウンセリング',
      description: 'デザイン、サイズ、配置などを詳しくご相談。不安な点も遠慮なくお聞きください',
      icon: 'ri-discuss-line',
    },
    {
      number: '03',
      title: 'デザイン確定',
      description: 'ご納得いただけるまでデザインを調整。完全に満足してから施術に進みます',
      icon: 'ri-checkbox-circle-line',
    },
    {
      number: '04',
      title: '施術',
      description: '衛生管理を徹底した環境で、丁寧に施術を行います。痛みへの配慮も万全です',
      icon: 'ri-hand-heart-line',
    },
    {
      number: '05',
      title: 'アフターケア',
      description: '施術後のケア方法を詳しくご説明。不安なことがあればいつでもご相談ください',
      icon: 'ri-heart-pulse-line',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-[#FEBF00]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Design Patterns Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-dark-900 mb-4">
            3つのデザインパターン
          </h2>
          <p className="text-dark-900 text-lg">
            お客様のニーズに合わせた施術方法をご用意しています
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {patterns.map((pattern, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-dark-900 text-brand-yellow rounded-2xl mb-6">
                <i className={`${pattern.icon} text-3xl`}></i>
              </div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4">{pattern.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{pattern.description}</p>
              <div className="space-y-2">
                {pattern.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <i className="ri-check-line text-accent-green text-lg"></i>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Steps Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-dark-900 mb-4">
            施術の流れ
          </h2>
          <p className="text-gray-600 text-lg">
            初めての方でも安心してご利用いただけます
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-dark-900 text-brand-yellow rounded-full mx-auto mb-4 text-2xl font-black">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl mx-auto mb-4">
                    <i className={`${step.icon} text-2xl text-dark-900`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-dark-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-brand-yellow border-4 border-black rounded-2xl px-8 py-6">
            <p className="text-dark-900 font-bold text-lg">
              <i className="ri-information-line mr-2"></i>
              ご不明な点がございましたら、お気軽にInstagramのDMでお問い合わせください
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;