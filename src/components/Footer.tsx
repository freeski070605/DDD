import  { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Divine Designs & Decor</h3>
            <p className="text-gray-300">
              Creating magical moments through elegant event decoration and design.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Wedding Decoration</li>
              <li>Birthday Parties</li>
              <li>Corporate Events</li>
              <li>Baby Showers</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>(267) 879-3516</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>info@divinedesigns.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Wilmington, DE</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Facebook size={24} className="text-gray-300 hover:text-primary cursor-pointer" />
              <Instagram size={24} className="text-gray-300 hover:text-primary cursor-pointer" />
              <Twitter size={24} className="text-gray-300 hover:text-primary cursor-pointer" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Divine Designs & Decor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 