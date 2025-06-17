import  { Award, Users, Star } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Denise Matthews",
      role: "Owner, Creative Director & Lead Designer",
      image: "https://res.cloudinary.com/dvgjpfr6d/image/upload/v1750184785/IMG_6116_jsgpdl.jpg",
      bio: "With over 25 years of experience in event design, Denise brings creativity and vision to every project."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Divine Designs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We are passionate about transforming ordinary spaces into extraordinary experiences. 
            Since 2021, we've been creating magical moments for clients across the region.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Divine Designs was founded with a simple belief: every celebration deserves to be extraordinary. 
                What started as a small passion project has grown into a full-service event decoration company 
                trusted by hundreds of satisfied clients.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Denise combines artistic vision with meticulous attention to detail, ensuring that every 
                event  design reflects the clients' unique style and exceeds their expectations.
              </p>
              <p className="text-lg text-gray-600">
                From intimate gatherings to grand celebrations, the approach to each project is with the same level 
                of dedication and creativity, because we believe that every moment worth celebrating deserves 
                to be truly divine.
              </p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dvgjpfr6d/image/upload/v1750185358/IMG_7951_ji8fr2.jpg"
                alt="Look at tghe detail"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Award size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">100+</h3>
              <p className="text-gray-600">Events Decorated</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Users size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">300+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Star size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">20+ Years</h3>
              <p className="text-gray-600">Design Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Meet The designer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
                />
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Creativity</h3>
              <p>We bring fresh, innovative ideas to every project, ensuring your event is truly unique.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Quality</h3>
              <p>We use only the finest materials and decorations to create lasting, beautiful displays.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Service</h3>
              <p>Our dedicated team works closely with you from concept to completion, ensuring perfection.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
 