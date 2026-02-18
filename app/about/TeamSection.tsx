import ScrollAnimation from '../../components/ScrollAnimation';

export default function TeamSection() {
  const team = [
    {
      name: 'Kwame Asante',
      position: 'Farm Manager',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20African%20farm%20manager%20in%20Ghana%2C%20middle-aged%20man%20wearing%20farming%20attire%2C%20confident%20smile%2C%20agricultural%20background%2C%20professional%20headshot%20photography%2C%20natural%20lighting%2C%20farming%20expertise%20visible%2C%20leadership%20qualities&width=300&height=400&seq=team-manager&orientation=portrait',
      description: 'Over 20 years of experience in tropical fruit cultivation and sustainable farming practices.',
      icon: 'ri-user-star-line'
    },
    {
      name: 'Akosua Mensah',
      position: 'Quality Control Supervisor',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20African%20woman%20quality%20control%20supervisor%20in%20Ghana%2C%20wearing%20professional%20attire%2C%20confident%20expression%2C%20agricultural%20facility%20background%2C%20professional%20headshot%20photography%2C%20natural%20lighting%2C%20expertise%20in%20quality%20assurance&width=300&height=400&seq=team-quality&orientation=portrait',
      description: 'Ensures every pineapple meets our high standards with rigorous quality control processes.',
      icon: 'ri-award-line'
    },
    {
      name: 'Kofi Boateng',
      position: 'Sustainability Coordinator',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20African%20sustainability%20coordinator%20in%20Ghana%2C%20young%20professional%20man%2C%20environmental%20focus%2C%20green%20agricultural%20background%2C%20professional%20headshot%20photography%2C%20natural%20lighting%2C%20environmental%20expertise%20visible&width=300&height=400&seq=team-sustainability&orientation=portrait',
      description: 'Leads our environmental initiatives and sustainable farming practice implementation.',
      icon: 'ri-leaf-line'
    },
    {
      name: 'Ama Osei',
      position: 'Export Operations Manager',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20African%20woman%20export%20manager%20in%20Ghana%2C%20professional%20business%20attire%2C%20confident%20demeanor%2C%20international%20trade%20background%2C%20professional%20headshot%20photography%2C%20natural%20lighting%2C%20business%20expertise%20visible&width=300&height=400&seq=team-export&orientation=portrait',
      description: 'Manages international relationships and ensures smooth export operations worldwide.',
      icon: 'ri-global-line'
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-in-up">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-green-600">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated professionals bring decades of combined experience in agriculture, 
            quality control, and sustainable farming practices.
          </p>
        </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, index) => (
            <ScrollAnimation key={index} animation="scale-in" delay={index * 100}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover-lift transition-all duration-300 border border-gray-100 relative">
                <div className="relative overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                    className="w-full h-72 object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <i className={`${member.icon} text-green-600 text-xl`}></i>
                        <span className="text-sm font-semibold text-gray-900">{member.position}</span>
                      </div>
                    </div>
                  </div>
                </div>
              <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-medium mb-3 text-sm">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 flex space-x-3">
                    <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 group/social">
                      <i className="ri-linkedin-fill text-gray-600 group-hover/social:text-white transition-colors duration-300"></i>
                    </a>
                    <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 group/social">
                      <i className="ri-twitter-fill text-gray-600 group-hover/social:text-white transition-colors duration-300"></i>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-in-up">
          <div className="text-center">
            <div className="bg-white p-10 md:p-12 rounded-2xl shadow-lg border border-gray-100 max-w-3xl mx-auto">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-team-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                We're always looking for passionate individuals who share our commitment to sustainable agriculture 
                and excellence in farming.
            </p>
              <button className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl hover:scale-105 transform inline-flex items-center">
                <span>View Open Positions</span>
                <i className="ri-arrow-right-line ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
            </button>
          </div>
        </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
