
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FacilitySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
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
              animate={inView ? { opacity: 1, y: 0 } : {}}
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
  );
};

export default FacilitySection;
