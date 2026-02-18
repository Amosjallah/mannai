'use client';

import { useState } from 'react';

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  message: string;
}

export default function PremiumVarieties() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const openQuotePopup = (productName: string) => {
    setSelectedProduct(productName);
    setFormData(prev => ({ ...prev, product: productName }));
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSubmitStatus('idle');
    setFormData({
      name: '',
      email: '',
      phone: '',
      product: '',
      quantity: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setTimeout(() => {
        closePopup();
      }, 2000);
    }, 1000);
  };

  return (
    <section className="py-16" data-product-shop>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Premium <span className="text-green-600">Pineapple Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From fresh varieties to processed products, each item is carefully crafted to meet the highest standards of taste, quality, and nutritional value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=Premium%20MD2%20Golden%20Sweet%20pineapple%20variety%2C%20perfectly%20ripe%20golden%20yellow%20fruit%20with%20crown%2C%20exceptional%20quality%20tropical%20fruit%2C%20sweet%20and%20juicy%20pineapple%2C%20commercial%20grade%20produce%2C%20clean%20white%20background%20for%20product%20showcase&width=400&height=300&seq=md2001&orientation=landscape"
              alt="MD2 Golden Sweet Pineapple"
              width={400}
              height={300}
              className="w-full h-64 object-cover object-top"
              loading="lazy"
              decoding="async"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">MD2 Golden Sweet</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our flagship variety known for its exceptional sweetness, low acidity, and extended shelf life. Perfect golden color with minimal core.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Sweetness Level:</span>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Size Range:</span>
                  <span className="text-gray-600">1.5 - 3.5 kg</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Shelf Life:</span>
                  <span className="text-gray-600">14-21 days</span>
                </div>
              </div>
              
              <button
                onClick={() => openQuotePopup('MD2 Golden Sweet')}
                className="w-full inline-flex items-center justify-center bg-yellow-500 text-white py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-200 whitespace-nowrap cursor-pointer"
              >
                Request Quote
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=Smooth%20Cayenne%20pineapple%20variety%2C%20traditional%20large%20pineapple%20with%20distinctive%20smooth%20skin%2C%20classic%20tropical%20fruit%20variety%2C%20robust%20and%20flavorful%20pineapple%2C%20commercial%20agricultural%20produce%2C%20clean%20white%20background%20for%20product%20display&width=400&height=300&seq=cayenne001&orientation=landscape"
              alt="Smooth Cayenne Pineapple"
              width={400}
              height={300}
              className="w-full h-64 object-cover object-top"
              loading="lazy"
              decoding="async"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Smooth Cayenne</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A classic variety prized for its robust flavor, firm texture, and excellent processing qualities. Ideal for both fresh consumption and industrial use.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Sweetness Level:</span>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Size Range:</span>
                  <span className="text-gray-600">1.5 - 3.5 kg</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Shelf Life:</span>
                  <span className="text-gray-600">10-14 days</span>
                </div>
              </div>
              
              <button
                onClick={() => openQuotePopup('Smooth Cayenne')}
                className="w-full inline-flex items-center justify-center bg-yellow-500 text-white py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-200 whitespace-nowrap cursor-pointer"
              >
                Request Quote
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/image5.jpg"
              alt="Sugarloaf Pineapple"
              width={400}
              height={300}
              className="w-full h-64 object-cover object-center"
              loading="lazy"
              decoding="async"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Sugarloaf</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A premium variety known for its exceptional sweetness, conical shape, and low acidity. Perfect for fresh consumption with its tender, juicy flesh and aromatic flavor.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Sweetness Level:</span>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Size Range:</span>
                  <span className="text-gray-600">1.5 - 3.5 kg</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Shelf Life:</span>
                  <span className="text-gray-600">12-16 days</span>
                </div>
              </div>
              
              <button
                onClick={() => openQuotePopup('Sugarloaf')}
                className="w-full inline-flex items-center justify-center bg-yellow-500 text-white py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-200 whitespace-nowrap cursor-pointer"
              >
                Request Quote
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=Fresh%20pineapple%20juice%20in%20clear%20glass%20bottle%2C%20golden%20yellow%20natural%20juice%20with%20tropical%20fruit%20pieces%2C%20premium%20beverage%20packaging%2C%20healthy%20drink%20product%2C%20commercial%20food%20photography%2C%20clean%20white%20background%20for%20product%20showcase&width=400&height=300&seq=juice001&orientation=landscape"
              alt="Fresh Pineapple Juice"
              width={400}
              height={300}
              className="w-full h-64 object-cover object-top"
              loading="lazy"
              decoding="async"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fresh Pineapple Juice</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                100% natural pineapple juice with no added sugars or preservatives. Extracted from our finest MD2 variety for maximum nutrition and flavor.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Natural Content:</span>
                  <span className="text-green-600 font-semibold">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Package Size:</span>
                  <span className="text-gray-600">500ml - 1L</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Shelf Life:</span>
                  <span className="text-gray-600">5-7 days</span>
                </div>
              </div>
              
              <button
                onClick={() => openQuotePopup('Fresh Pineapple Juice')}
                className="w-full inline-flex items-center justify-center bg-yellow-500 text-white py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-200 whitespace-nowrap cursor-pointer"
              >
                Request Quote
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=Dried%20pineapple%20rings%20and%20chunks%20in%20premium%20packaging%2C%20golden%20dehydrated%20tropical%20fruit%20snacks%2C%20healthy%20processed%20pineapple%20products%2C%20commercial%20food%20packaging%20design%2C%20clean%20white%20background%20for%20product%20display&width=400&height=300&seq=dried001&orientation=landscape"
              alt="Dried Pineapple Products"
              width={400}
              height={300}
              className="w-full h-64 object-cover object-top"
              loading="lazy"
              decoding="async"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Dried Pineapple</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Premium dried pineapple rings and chunks, naturally dehydrated to preserve nutrients while creating a delicious healthy snack option.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Processing:</span>
                  <span className="text-green-600 font-semibold">Natural</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Package Size:</span>
                  <span className="text-gray-600">100g - 500g</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Shelf Life:</span>
                  <span className="text-gray-600">12 months</span>
                </div>
              </div>
              
              <button
                onClick={() => openQuotePopup('Dried Pineapple')}
                className="w-full inline-flex items-center justify-center bg-yellow-500 text-white py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-200 whitespace-nowrap cursor-pointer"
              >
                Request Quote
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=Canned%20pineapple%20chunks%20in%20natural%20juice%2C%20premium%20tin%20can%20packaging%2C%20processed%20tropical%20fruit%20in%20syrup%2C%20commercial%20food%20product%2C%20professional%20packaging%20design%2C%20clean%20white%20background%20for%20retail%20display&width=400&height=300&seq=canned001&orientation=landscape"
              alt="Canned Pineapple"
              width={400}
              height={300}
              className="w-full h-64 object-cover object-top"
              loading="lazy"
              decoding="async"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Canned Pineapple</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                High-quality canned pineapple chunks and slices in natural juice, perfect for retail distribution and food service applications worldwide.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Packaging:</span>
                  <span className="text-green-600 font-semibold">BPA-Free</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Can Size:</span>
                  <span className="text-gray-600">400g - 850g</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Shelf Life:</span>
                  <span className="text-gray-600">24 months</span>
                </div>
              </div>
              
              <button
                onClick={() => openQuotePopup('Canned Pineapple')}
                className="w-full inline-flex items-center justify-center bg-yellow-500 text-white py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-200 whitespace-nowrap cursor-pointer"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Request Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">Request a Quote</h3>
              <button
                onClick={closePopup}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                aria-label="Close"
              >
                <i className="ri-close-line text-3xl"></i>
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              <div className="mb-4">
                <label htmlFor="product" className="block text-sm font-semibold text-gray-700 mb-2">
                  Product *
                </label>
                <input
                  type="text"
                  id="product"
                  name="product"
                  value={formData.product}
                  readOnly
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 cursor-not-allowed"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="+233249240156"
                  />
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-sm font-semibold text-gray-700 mb-2">
                    Quantity *
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="e.g., 100kg, 500 units"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Tell us about your requirements, delivery location, or any special requests..."
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 font-medium">
                    <i className="ri-checkbox-circle-line mr-2"></i>
                    Thank you! Your quote request has been submitted. We'll contact you soon.
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-yellow-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center">
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Quote Request'
                  )}
                </button>
                <button
                  type="button"
                  onClick={closePopup}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-gray-400 transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
