
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d5j35iigbpr25eot43ng', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-dark-900 mb-4">
            予約・お問い合わせ
          </h2>
          <p className="text-gray-600 text-lg">
            ご質問やご予約は、こちらのフォームまたはInstagramのDMからお気軽にどうぞ
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm"
        >
          <form id="contact-form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-dark-900 mb-2">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-900 focus:border-transparent text-sm"
                placeholder="山田太郎"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dark-900 mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-900 focus:border-transparent text-sm"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-dark-900 mb-2">
                電話番号
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-900 focus:border-transparent text-sm"
                placeholder="090-1234-5678"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-dark-900 mb-2">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                maxLength={500}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-900 focus:border-transparent resize-none text-sm"
                placeholder="ご希望のデザインやサイズ、施術箇所などをお聞かせください（500文字以内）"
              />
              <div className="text-right text-xs text-gray-500 mt-1">
                {formData.message.length}/500
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm">
                送信が完了しました。ご連絡ありがとうございます。
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
                送信に失敗しました。もう一度お試しください。
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-dark-900 text-white py-4 rounded-full font-medium hover:bg-dark-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
            >
              {isSubmitting ? '送信中...' : '送信する'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-4">または</p>
              <a
                href="https://instagram.com/the_fat_tatt"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center space-x-2 text-dark-900 font-medium hover:text-gray-600 transition-colors cursor-pointer"
              >
                <i className="ri-instagram-line text-xl"></i>
                <span>InstagramのDMでお問い合わせ</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-white rounded-2xl p-8 shadow-sm"
        >
          <h3 className="text-xl font-bold text-dark-900 mb-4">ご予約前の注意事項</h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="flex items-start space-x-2">
              <i className="ri-checkbox-circle-line text-dark-900 mt-0.5"></i>
              <span>18歳以上の方のみ施術可能です（身分証明書をご持参ください）</span>
            </li>
            <li className="flex items-start space-x-2">
              <i className="ri-checkbox-circle-line text-dark-900 mt-0.5"></i>
              <span>完全予約制となっております</span>
            </li>
            <li className="flex items-start space-x-2">
              <i className="ri-checkbox-circle-line text-dark-900 mt-0.5"></i>
              <span>体調不良の場合は無理せずご連絡ください</span>
            </li>
            <li className="flex items-start space-x-2">
              <i className="ri-checkbox-circle-line text-dark-900 mt-0.5"></i>
              <span>妊娠中・授乳中の方は施術をお断りしております</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
