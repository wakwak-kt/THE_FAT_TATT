
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white relative overflow-hidden border-t-4 border-brand-yellow">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-yellow rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-yellow rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-20 h-20">
                <img 
                  src="https://static.readdy.ai/image/763cd5476cea5c3de6df92252e2f6a79/e523d0c56cb647b86c05dc58a234f0ff.png" 
                  alt="THE FAT TATT Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 text-base leading-relaxed mb-8 font-bold">
              あなただけのアートを一生の宝物に。<br />
              お客様一人ひとりの想いを大切に、<br />
              世界に一つだけのタトゥーを創り上げます。
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/the_fat_tatt"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-brand-yellow hover:bg-white rounded-xl transition-all duration-300 cursor-pointer hover:scale-110 border-2 border-brand-yellow"
              >
                <i className="ri-instagram-line text-xl text-black"></i>
              </a>
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center bg-brand-yellow hover:bg-white rounded-xl transition-all duration-300 cursor-pointer hover:scale-110 border-2 border-brand-yellow"
              >
                <i className="ri-twitter-x-line text-xl text-black"></i>
              </a>
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center bg-brand-yellow hover:bg-white rounded-xl transition-all duration-300 cursor-pointer hover:scale-110 border-2 border-brand-yellow"
              >
                <i className="ri-facebook-line text-xl text-black"></i>
              </a>
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center bg-brand-yellow hover:bg-white rounded-xl transition-all duration-300 cursor-pointer hover:scale-110 border-2 border-brand-yellow"
              >
                <i className="ri-file-text-line text-xl text-black"></i>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-black mb-6 text-brand-yellow tracking-wider">MENU</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-sm text-gray-300 hover:text-brand-yellow transition-colors cursor-pointer font-bold hover:translate-x-1 inline-block">
                    ホーム
                  </Link>
                </li>
                <li>
                  <a href="#about" className="text-sm text-gray-300 hover:text-brand-yellow transition-colors cursor-pointer font-bold hover:translate-x-1 inline-block">
                    スタジオについて
                  </a>
                </li>
                <li>
                  <a href="#artists" className="text-sm text-gray-300 hover:text-brand-yellow transition-colors cursor-pointer font-bold hover:translate-x-1 inline-block">
                    アーティスト
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-sm text-gray-300 hover:text-brand-yellow transition-colors cursor-pointer font-bold hover:translate-x-1 inline-block">
                    ギャラリー
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-black mb-6 text-brand-yellow tracking-wider">CONTACT</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://instagram.com/the_fat_tatt" target="_blank" rel="nofollow noopener noreferrer" className="text-sm text-gray-300 hover:text-brand-yellow transition-colors cursor-pointer font-bold hover:translate-x-1 inline-block">
                    Instagram DM
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-brand-yellow transition-colors cursor-pointer font-bold hover:translate-x-1 inline-block">
                    note
                  </a>
                </li>
                <li>
                  <a href="#access" className="text-sm text-gray-300 hover:text-brand-yellow transition-colors cursor-pointer font-bold hover:translate-x-1 inline-block">
                    アクセス
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-brand-yellow transition-colors cursor-pointer font-bold hover:translate-x-1 inline-block">
                    プライバシーポリシー
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t-2 border-brand-yellow/30">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 font-bold">
              © 2025 THE FAT TATT. All rights reserved.
            </p>
            <a
              href="https://readdy.ai/?ref=logo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-brand-yellow transition-colors cursor-pointer font-bold"
            >
              Powered by Readdy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
