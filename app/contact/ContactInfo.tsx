
export default function ContactInfo() {
  const contactDetails = [
    {
      icon: 'ri-map-pin-line',
      title: 'Our Location',
      details: [
        'Mennai Farms Ltd.',
        'Marfokrom, Ayensuano, Eastern, Ghana',
        'Official Address: Ayensuano, Eastern, Ghana',
        'Digital Address: EO-0865-9013'
      ]
    },
    {
      icon: 'ri-phone-line',
      title: 'Phone Numbers',
      details: [
        'Phone: +233249240156',
        'WhatsApp: +233249240156'
      ]
    },
    {
      icon: 'ri-mail-line',
      title: 'Email Addresses',
      details: [
        'info@mennaifarms.com'
      ]
    },
    {
      icon: 'ri-time-line',
      title: 'Business Hours',
      details: [
        'Monday - Friday: 7:00 AM - 6:00 PM',
        'Saturday: 8:00 AM - 4:00 PM',
        'Sunday: Closed',
        'Farm Tours: By Appointment'
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to answer your questions and discuss how we can meet your pineapple supply needs. 
            Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactDetails.map((contact, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-6">
                <i className={`${contact.icon} text-2xl text-green-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{contact.title}</h3>
              <div className="space-y-2">
                {contact.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Find Us on the Map</h3>
          <div className="w-full h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126646.33088709253!2d-0.3298!3d6.0833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96f349e85eeb%3A0x4c5b8c8b8c8b8c8b!2sKoforidua%2C%20Ghana!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
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
      </div>
    </section>
  );
}
