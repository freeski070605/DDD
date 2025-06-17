import  { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Divine Designs transformed our wedding into a fairy tale. Every detail was perfect!",
      rating: 5
    },
    {
      name: "Michael Chen",
      text: "Professional, creative, and exceeded all expectations for our corporate event.",
      rating: 5
    },
    {
      name: "Emma Davis",
      text: "The baby shower decorations were absolutely stunning. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Divine Designs
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Creating Magical Moments Through Elegant Event Decoration
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-primary hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              Get Started
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Weddings", image: "https://images.unsplash.com/photo-1747115275519-e9b20470ac8e" },
              { title: "Birthdays", image: "https://images.unsplash.com/photo-1625076932159-61a032e2b7ad" },
              { title: "Corporate Events", image: "https://images.unsplash.com/photo-1724855946369-9b4612c40fc2" },
              { title: "Baby Showers", image: "https://images.unsplash.com/photo-1712314947762-039576e58bc6" }
            ].map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">{service.title}</h3>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-primary hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              View Services
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-20 bg-gray-100 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1749491105524-1f38156c43e0",
              "https://images.unsplash.com/photo-1745573674471-e057af420757",
              "https://images.unsplash.com/photo-1707097702231-f0b98d7c2703"
            ].map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center bg-primary hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              View Full Portfolio
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-primary">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
 