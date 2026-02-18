
export default function ContactHero() {
  return (
    <section className="relative h-96 bg-cover bg-center bg-no-repeat" 
             style={{
               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Professional%20business%20meeting%20scene%20with%20African%20farmers%20and%20international%20buyers%20discussing%20pineapple%20export%20deals%2C%20handshake%20agreement%2C%20modern%20office%20setting%20with%20pineapple%20plantation%20view%20through%20windows&width=1200&height=400&seq=contact-hero-001&orientation=landscape')`
             }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-yellow-400">Contact</span> Us
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Ready to partner with Ghana's leading pineapple farm? Get in touch with us today for premium quality produce
          </p>
        </div>
      </div>
    </section>
  );
}
