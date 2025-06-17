import  { useState } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  
  const portfolioItems = [
    {
      id: 1,
      title: "Elegant Wedding Reception",
      category: "Weddings",
      image: "https://res.cloudinary.com/dvgjpfr6d/image/upload/v1750172240/IMG_6271_iaq2er.jpg", // Google Drive
    },
    {
      id: 2,
      title: "Birthday Party Setup",
      category: "Birthdays",
      image: "https://res.cloudinary.com/dvgjpfr6d/image/upload/v1750184647/IMG_9108_pdyuti.jpg"
    },
    {
      id: 3,
      title: "Corporate Event",
      category: "Corporate",
      image: "https://res.cloudinary.com/dvgjpfr6d/image/upload/v1750172137/IMG_5620_xmryk2.jpg", // Google Drive
    },
    {
      id: 4,
      title: "Baby Shower Decor",
      category: "Baby Showers",
      image: "https://res.cloudinary.com/dvgjpfr6d/image/upload/v1750184924/IMG_4676_wortyk.jpg"
    }
  ];

  const categories = ['All', 'Weddings', 'Birthdays', 'Corporate', 'Baby Showers'];
  
  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="pt-16">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of beautifully decorated events. Each project showcases our commitment 
              to creating magical and memorable experiences.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  filter === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
 