import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const offices = [
  {
    name: 'Lagos Office (Headquarters)',
    address: 'Western House, 13th Floor, 8/10 Broad Street, Lagos Island, Lagos State, Nigeria',
    isPrimary: true,
  },
  {
    name: 'Osogbo Office',
    address: 'XM3 Gbongan/Ibadan Road, Opp. MRS Petrol Station, Ago-Oluwa, Osogbo',
    isPrimary: false,
  },
  {
    name: 'Onikan Office',
    address: '29c Araromi Street, 2nd Floor, Onikan, Lagos, Nigeria',
    isPrimary: false,
  },
];

const businessHours = [
  { days: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
  { days: 'Saturday', hours: '9:00 AM - 4:00 PM' },
  { days: 'Sunday', hours: 'Closed' },
];

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = '2347065435090';
    const message = encodeURIComponent(
      `Hello! I'm ${formData.name}.\n\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterested in: ${formData.service}\n\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 gradient-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business. We're here to answer your questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section ref={ref} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2D3E9E] focus:outline-none focus:ring-2 focus:ring-[#2D3E9E]/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2D3E9E] focus:outline-none focus:ring-2 focus:ring-[#2D3E9E]/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2D3E9E] focus:outline-none focus:ring-2 focus:ring-[#2D3E9E]/20 transition-all"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2D3E9E] focus:outline-none focus:ring-2 focus:ring-[#2D3E9E]/20 transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="ICT Consulting">ICT Consulting</option>
                      <option value="Environmental Sustainability">Environmental Sustainability</option>
                      <option value="Financial Consulting">Financial Consulting</option>
                      <option value="Management Training">Management Training</option>
                      <option value="Rebranding & Marketing">Rebranding & Marketing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2D3E9E] focus:outline-none focus:ring-2 focus:ring-[#2D3E9E]/20 transition-all resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    Send via WhatsApp
                  </motion.button>

                  <p className="text-sm text-gray-500 text-center">
                    Your message will be sent directly to our WhatsApp for immediate response
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Quick Contact */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+2347065435090"
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-[#2D3E9E] transition-colors">
                        Phone
                      </p>
                      <p className="text-gray-600">+234 (706) 543 5090</p>
                    </div>
                  </a>

                  <a
                    href="mailto:globalmirror2020@gmail.com"
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-[#2D3E9E] transition-colors">
                        Email
                      </p>
                      <p className="text-gray-600">globalmirror2020@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                    <Clock className="text-white" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((schedule) => (
                    <div key={schedule.days} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="font-medium text-gray-700">{schedule.days}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Offices */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Offices</h3>
                </div>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <div key={office.name} className="pb-4 border-b border-gray-100 last:border-0">
                      <p className="font-semibold text-gray-900 mb-1">
                        {office.name}
                        {office.isPrimary && (
                          <span className="ml-2 px-2 py-0.5 bg-[#2D3E9E] text-white text-xs rounded-full">
                            Primary
                          </span>
                        )}
                      </p>
                      <p className="text-gray-600 text-sm">{office.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
