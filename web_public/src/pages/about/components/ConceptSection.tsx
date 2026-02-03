
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ConceptSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
                タトゥーは一生残るものだからこそ、私たちは一切の妥協を許しません。お客様との綿密なコミュニケーションを通じて、本当に満足いただけるデザインを追求します。
              </p>
              <p className="text-white/80 leading-relaxed">
                施術後も長く美しい状態を保てるよう、アフターケアまで丁寧にサポートいたします。
              </p>
            </div>

            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Tattoo%20artist%20carefully%20drawing%20custom%20design%20sketch%20on%20paper%20with%20pencil%20close%20up%20shot%20showing%20detailed%20line%20work%20and%20artistic%20process%20on%20clean%20white%20background%20professional%20photography%20monochrome%20aesthetic&width=700&height=700&seq=concept001&orientation=squarish"
                alt="デザインスケッチ"
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConceptSection;
