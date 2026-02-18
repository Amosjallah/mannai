
export default function FarmTeam() {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our dedicated team of agricultural experts, sustainability specialists, and community leaders work together to make Mennai Farms a success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20African%20male%20agricultural%20manager%20in%20farming%20attire%2C%20confident%20expression%2C%20outdoor%20setting%20with%20pineapple%20plantation%20background%2C%20natural%20lighting%2C%20business%20casual%20style%20mixed%20with%20practical%20farming%20elements%2C%20leadership%20qualities%20visible&width=300&height=400&seq=team001&orientation=portrait" 
              alt="Kwame Asante" 
              className="w-32 h-32 object-cover object-top rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Kwame Asante</h3>
            <p className="text-yellow-600 font-medium mb-3">Founder & CEO</p>
            <p className="text-gray-600 text-sm">
              Agricultural engineer with extensive experience in tropical fruit cultivation and sustainable farming practices.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20African%20female%20agricultural%20scientist%20in%20field%20research%20attire%2C%20intelligent%20expression%2C%20laboratory%20and%20farm%20background%2C%20modern%20agricultural%20technology%20visible%2C%20expertise%20and%20dedication%20shown%20through%20confident%20pose&width=300&height=400&seq=team002&orientation=portrait" 
              alt="Dr. Akosua Mensah" 
              className="w-32 h-32 object-cover object-top rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Akosua Mensah</h3>
            <p className="text-green-600 font-medium mb-3">Head of Research</p>
            <p className="text-gray-600 text-sm">
              PhD in Agricultural Sciences, specializing in tropical fruit genetics and sustainable cultivation methods.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20African%20male%20operations%20manager%20in%20agricultural%20setting%2C%20practical%20work%20clothing%2C%20confident%20leadership%20pose%2C%20farm%20equipment%20and%20pineapple%20fields%20in%20background%2C%20hands-on%20management%20style%20evident&width=300&height=400&seq=team003&orientation=portrait" 
              alt="Emmanuel Osei" 
              className="w-32 h-32 object-cover object-top rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Emmanuel Osei</h3>
            <p className="text-yellow-600 font-medium mb-3">Operations Manager</p>
            <p className="text-gray-600 text-sm">
              Expert in farm operations and logistics with deep knowledge of pineapple cultivation and harvest management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
