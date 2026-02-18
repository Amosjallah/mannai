
export default function FarmPhotos() {
  const farmPhotos = [
    {
      id: 1,
      title: "Pineapple Plantation Overview",
      description: "Aerial view of our expansive pineapple fields",
      image: "https://readdy.ai/api/search-image?query=Aerial%20drone%20view%20of%20vast%20pineapple%20plantation%20in%20Ghana%20with%20organized%20rows%20of%20green%20pineapple%20plants%2C%20tropical%20agricultural%20landscape%2C%20morning%20sunlight%2C%20professional%20farm%20photography&width=400&height=300&seq=farm-001&orientation=landscape"
    },
    {
      id: 2,
      title: "Golden Harvest Season",
      description: "Workers harvesting ripe golden pineapples",
      image: "https://readdy.ai/api/search-image?query=African%20farm%20workers%20carefully%20harvesting%20golden%20ripe%20pineapples%20in%20plantation%20field%2C%20traditional%20farming%20methods%2C%20sunny%20day%2C%20authentic%20agricultural%20work%20scene&width=400&height=300&seq=farm-002&orientation=landscape"
    },
    {
      id: 3,
      title: "Fresh Pineapple Plants",
      description: "Young pineapple plants growing in fertile soil",
      image: "https://readdy.ai/api/search-image?query=Close%20up%20view%20of%20young%20green%20pineapple%20plants%20growing%20in%20rich%20dark%20soil%2C%20tropical%20agriculture%2C%20detailed%20plant%20structure%2C%20natural%20farming%20environment&width=400&height=300&seq=farm-003&orientation=landscape"
    },
    {
      id: 4,
      title: "Quality Control Process",
      description: "Sorting and grading fresh pineapples",
      image: "https://readdy.ai/api/search-image?query=Farm%20workers%20sorting%20and%20grading%20fresh%20golden%20pineapples%20on%20wooden%20tables%2C%20quality%20control%20process%2C%20organized%20agricultural%20facility%2C%20professional%20food%20processing&width=400&height=300&seq=farm-004&orientation=landscape"
    },
    {
      id: 5,
      title: "Rain-Fed Agriculture",
      description: "Sustainably grown using natural rainfall",
      image: "/image8.jpg"
    },
    {
      id: 6,
      title: "Packaging Facility",
      description: "Fresh pineapples being prepared for export",
      image: "https://readdy.ai/api/search-image?query=Clean%20modern%20packaging%20facility%20with%20fresh%20pineapples%20being%20prepared%20for%20export%2C%20food%20safety%20standards%2C%20professional%20agricultural%20processing%20center&width=400&height=300&seq=farm-006&orientation=landscape"
    },
    {
      id: 7,
      title: "Farm Equipment",
      description: "Modern machinery supporting our operations",
      image: "https://readdy.ai/api/search-image?query=Modern%20agricultural%20machinery%20and%20tractors%20used%20in%20pineapple%20farming%2C%20efficient%20farm%20equipment%2C%20professional%20agricultural%20tools%20in%20tropical%20setting&width=400&height=300&seq=farm-007&orientation=landscape"
    },
    {
      id: 8,
      title: "Sunset Over Fields",
      description: "Beautiful evening view of our plantation",
      image: "https://readdy.ai/api/search-image?query=Stunning%20sunset%20over%20pineapple%20plantation%20fields%20in%20Ghana%2C%20golden%20hour%20lighting%2C%20peaceful%20agricultural%20landscape%2C%20romantic%20farm%20scenery&width=400&height=300&seq=farm-008&orientation=landscape"
    },
    {
      id: 9,
      title: "Team at Work",
      description: "Our dedicated farming team in action",
      image: "https://readdy.ai/api/search-image?query=Happy%20African%20farming%20team%20working%20together%20in%20pineapple%20plantation%2C%20teamwork%20in%20agriculture%2C%20smiling%20workers%2C%20community%20farming%20spirit&width=400&height=300&seq=farm-009&orientation=landscape"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Farm Life Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a visual journey through our pineapple farm and witness the dedication, 
            passion, and hard work that goes into producing Ghana's finest pineapples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {farmPhotos.map((photo) => (
            <div key={photo.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img 
                  src={photo.image} 
                  alt={photo.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{photo.title}</h3>
                <p className="text-gray-600">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
