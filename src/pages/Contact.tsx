import  { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus('idle');

  try {
    const response = await fetch('https://formspree.io/f/mwpbqlby', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: ''
      });
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    console.error('Error sending message:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start planning your dream event? Get in touch with us today for a free consultation 
              and personalized quote.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you for your inquiry! We'll get back to you within 24 hours.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  Sorry, there was an error sending your message. Please try again or contact us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Type
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select Event Type</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Birthday Party">Birthday Party</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Baby Shower">Baby Shower</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us about your event vision, budget, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-purple-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="text-primary mr-4 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <a href="tel:+15551234567" className="text-gray-600 hover:text-primary">(267) 879-3516</a>
                      <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-primary mr-4 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href="mailto:info@divinedesigns.com" className="text-gray-600 hover:text-primary">info@divinedesigns.com</a>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="text-primary mr-4 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-600">Wilmington, DE</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-primary mr-4 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: By appointment only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-8 rounded-lg text-white">
                <h3 className="text-xl font-bold mb-4">Free Consultation</h3>
                <p className="mb-4">
                  Schedule a free consultation to discuss your event vision and get a personalized quote.
                </p>
                <a
                  href="tel:+12678793516"
                  className="inline-block bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call Now
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-3">Quick Response Guarantee</h3>
                <p className="text-gray-600 text-sm">
                  We understand planning events can be time-sensitive. All inquiries receive a response within 
                  24 hours during business days, and urgent requests within 4 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
 