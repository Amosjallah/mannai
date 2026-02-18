
import Link from 'next/link';
import ScrollAnimation from './ScrollAnimation';

export default function ContactSection({ data }: { data?: any }) {
  const content = data || {};
  const title = content.title || "Get in";
  const titleHighlight = content.title_highlight || "Touch";
  const description = content.description || "Ready to partner with us or learn more about our premium pineapples? We'd love to hear from you.";

  const address = content.address || "Marfokrom, Ayensuano District\nEastern Region, Ghana";
  const phone = content.phone || "+233249240156";
  const email = content.email || "info@mennaifarms.com";

  // Note: HTML in address (newlines) needs handling if passed from JSON
  const formattedAddress = address.split('\n').map((line: string, i: number) => <span key={i}>{line}<br /></span>);

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-yellow-50/50 via-white to-yellow-50/50 border-t border-yellow-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {title} <span className="text-yellow-500">{titleHighlight}</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollAnimation animation="fade-in-left">
            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg mb-8 hover-lift transition-all duration-300 border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <ScrollAnimation animation="fade-in-left" delay={100}>
                    <div className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:bg-yellow-500 transition-all duration-300 group-hover:scale-110">
                        <i className="ri-map-pin-line text-yellow-600 text-xl group-hover:text-white transition-colors duration-300"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors duration-300">Address</h4>
                        <p className="text-gray-600">
                          {formattedAddress}
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animation="fade-in-left" delay={200}>
                    <div className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:bg-yellow-500 transition-all duration-300 group-hover:scale-110">
                        <i className="ri-phone-line text-yellow-600 text-xl group-hover:text-white transition-colors duration-300"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors duration-300">Phone</h4>
                        <p className="text-gray-600">{phone}</p>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animation="fade-in-left" delay={300}>
                    <div className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:bg-yellow-500 transition-all duration-300 group-hover:scale-110">
                        <i className="ri-mail-line text-yellow-600 text-xl group-hover:text-white transition-colors duration-300"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors duration-300">Email</h4>
                        <p className="text-gray-600">{email}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>

              <div className="bg-gray-200 rounded-xl overflow-hidden h-64 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.123456789!2d-0.123456!3d6.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDcnMjQuNCJOIDDCsDAwJzAwLjAiVw!5e0!3m2!1sen!2sgh!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mennai Farms Location"
                ></iframe>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in-right">
            <div className="bg-white p-8 rounded-xl shadow-lg hover-lift transition-all duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Send us a Message</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm transition-all duration-300 hover:border-yellow-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm transition-all duration-300 hover:border-yellow-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm transition-all duration-300 hover:border-yellow-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm transition-all duration-300 hover:border-yellow-300"
                    placeholder="Partnership Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm resize-none transition-all duration-300 hover:border-yellow-300"
                    placeholder="Tell us about your requirements..."
                    maxLength={500}
                  ></textarea>
                </div>

                <Link
                  href="/contact"
                  className="group w-full bg-yellow-500 text-white py-4 px-6 rounded-full font-semibold hover:bg-yellow-600 transition-all duration-300 cursor-pointer whitespace-nowrap inline-block text-center shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  <span className="inline-flex items-center justify-center">
                    Send Message
                    <i className="ri-arrow-right-line ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                  </span>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
