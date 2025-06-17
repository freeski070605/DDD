const  Services = () => {
  const services = [
    {
      title: "Wedding Decoration",
      description: "Complete wedding decoration packages including ceremony and reception setups",
      features: ["Bridal party decorations", "Ceremony arches", "Reception centerpieces", "Lighting design"],
      price: "Starting at $2,500"
    },
    {
      title: "Birthday Parties",
      description: "Custom birthday party decorations for all ages and themes",
      features: ["Theme-based decorations", "Balloon arrangements", "Photo backdrops", "Table settings"],
      price: "Starting at $500"
    },
    {
      title: "Corporate Events",
      description: "Professional event decoration for corporate functions and meetings",
      features: ["Brand integration", "Stage setups", "Professional lighting", "Audio-visual support"],
      price: "Starting at $1,000"
    },
    {
      title: "Baby Showers",
      description: "Adorable and elegant baby shower decorations",
      features: ["Gender reveal setups", "Themed decorations", "Photo opportunities", "Dessert table styling"],
      price: "Starting at $400"
    },
    {
      title: "Anniversary Celebrations",
      description: "Romantic and memorable anniversary celebration setups",
      features: ["Romantic lighting", "Floral arrangements", "Memory displays", "Intimate dining setups"],
      price: "Starting at $600"
    },
    {
      title: "Graduation Parties",
      description: "Celebrate achievements with stylish graduation decorations",
      features: ["School color themes", "Photo displays", "Achievement showcases", "Refreshment stations"],
      price: "Starting at $450"
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in creating unforgettable experiences through elegant event decoration and design. 
              Every event is unique, and we tailor our services to match your vision perfectly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t pt-4">
                    <p className="text-lg font-semibold text-primary">{service.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-6">Contact us today for a free consultation and custom quote</p>
              <a
                href="/contact"
                className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
 