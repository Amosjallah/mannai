import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <Link href="/" className="inline-block mb-4 transition-transform duration-300 hover:scale-105">
              <img
                src="/logo.png"
                alt="Mennai Farms Logo"
                width={200}
                height={96}
                className="h-20 md:h-24 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Cultivating premium pineapples in Ghana with sustainable farming practices for local and international markets.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.facebook.com/share/1AJpSVT2Pj/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-green-600/80 rounded-full cursor-pointer hover:bg-green-500 hover:scale-110 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill text-white group-hover:scale-110 transition-transform duration-300"></i>
              </a>
              <a 
                href="https://x.com/mennaifarms" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-green-600/80 rounded-full cursor-pointer hover:bg-green-500 hover:scale-110 transition-all duration-300 group"
                aria-label="Twitter"
              >
                <i className="ri-twitter-fill text-white group-hover:scale-110 transition-transform duration-300"></i>
              </a>
              <a 
                href="https://www.instagram.com/mennaifarms/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-green-600/80 rounded-full cursor-pointer hover:bg-green-500 hover:scale-110 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <i className="ri-instagram-fill text-white group-hover:scale-110 transition-transform duration-300"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-green-400 transition-all duration-300 cursor-pointer inline-block hover:translate-x-1 group">
                  <span className="inline-flex items-center">
                  Home
                    <i className="ri-arrow-right-line ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-green-400 transition-all duration-300 cursor-pointer inline-block hover:translate-x-1 group">
                  <span className="inline-flex items-center">
                  About Us
                    <i className="ri-arrow-right-line ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/farm" className="text-gray-400 hover:text-green-400 transition-all duration-300 cursor-pointer inline-block hover:translate-x-1 group">
                  <span className="inline-flex items-center">
                  Our Farm
                    <i className="ri-arrow-right-line ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-green-400 transition-all duration-300 cursor-pointer inline-block hover:translate-x-1 group">
                  <span className="inline-flex items-center">
                  Products
                    <i className="ri-arrow-right-line ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-green-400 transition-all duration-300 cursor-pointer inline-block hover:translate-x-1 group">
                  <span className="inline-flex items-center">
                  Contact
                    <i className="ri-arrow-right-line ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-green-400 transition-all duration-300 cursor-pointer inline-block hover:translate-x-1 group">
                  <span className="inline-flex items-center">
                    Fresh Pineapples
                    <i className="ri-arrow-right-line ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-green-400 transition-all duration-300 cursor-pointer inline-block hover:translate-x-1 group">
                  <span className="inline-flex items-center">
                    Export Quality
                    <i className="ri-arrow-right-line ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-green-400 transition-all duration-300 cursor-pointer inline-block hover:translate-x-1 group">
                  <span className="inline-flex items-center">
                    Premium Produce
                    <i className="ri-arrow-right-line ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-green-400 transition-all duration-300 cursor-pointer inline-block hover:translate-x-1 group">
                  <span className="inline-flex items-center">
                    Bulk Orders
                    <i className="ri-arrow-right-line ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-6 h-6 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-map-pin-line text-green-400"></i>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Ayensuano, Eastern, Ghana<br />
                  Digital Address: EO-0865-9013
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-phone-line text-green-400"></i>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">+233249240156</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-mail-line text-green-400"></i>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">info@mennaifarms.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Mennai Farms. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link 
              href="https://doctorbarns.com" 
              className="text-gray-400 hover:text-green-400 text-sm cursor-pointer transition-colors duration-300"
            >
              Powered By Doctor Barns Tech
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
