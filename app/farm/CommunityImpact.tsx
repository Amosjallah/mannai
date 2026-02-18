
export default function CommunityImpact() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://readdy.ai/api/search-image?query=Community%20development%20scene%20in%20Ghanaian%20village%2C%20local%20farmers%20receiving%20training%20and%20education%2C%20modern%20agricultural%20techniques%20being%20taught%2C%20community%20gathering%20with%20diverse%20age%20groups%2C%20empowerment%20and%20learning%20atmosphere%2C%20natural%20outdoor%20setting&width=800&height=600&seq=community001&orientation=landscape" 
              alt="Community Development Programs" 
              className="w-full h-96 object-cover object-top rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Community <span className="text-green-600">Impact</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Mennai Farms is deeply committed to the development of our local community in Marfokrom and surrounding areas. We believe that our success should benefit everyone in our region.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-group-line text-green-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Employment Opportunities</h4>
                  <p className="text-gray-600">Permanent workers are 15 and casual workers around 50, providing direct employment for local residents with fair wages and benefits</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-graduation-cap-line text-green-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Training Programs</h4>
                  <p className="text-gray-600">Agricultural training and skill development for local farmers</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-hospital-line text-green-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Healthcare Support</h4>
                  <p className="text-gray-600">Healthcare initiatives and medical support for community members</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-school-line text-green-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Education Investment</h4>
                  <p className="text-gray-600">Scholarship programs and school infrastructure development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
