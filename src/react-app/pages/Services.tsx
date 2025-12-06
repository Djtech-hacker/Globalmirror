import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Monitor, Leaf, DollarSign, Users, TrendingUp, Briefcase, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';

const services = [
  {
    icon: Monitor,
    title: 'ICT Consulting',
    description: 'Transform your business with cutting-edge technology solutions',
    gradient: 'from-blue-500 to-purple-500',
    features: [
      'Digital transformation strategy',
      'Technology roadmap development',
      'IT infrastructure planning',
      'System integration solutions',
      'Cloud migration services',
    ],
  },
  {
    icon: Leaf,
    title: 'Environmental Sustainability Consulting',
    description: 'Build a sustainable future for your organization',
    gradient: 'from-green-500 to-teal-500',
    features: [
      'Sustainability assessments',
      'Environmental compliance',
      'Green business strategies',
      'Carbon footprint reduction',
      'ESG reporting frameworks',
    ],
  },
  {
    icon: DollarSign,
    title: 'Financial Consulting',
    description: 'Strategic financial guidance for business growth',
    gradient: 'from-yellow-500 to-orange-500',
    features: [
      'Financial planning & analysis',
      'Business financial strategy',
      'Investment advisory',
      'Risk management',
      'Budget optimization',
    ],
  },
  {
    icon: Users,
    title: 'Executive & Management Training (Both local and overseas)',
    description: 'Develop leaders who drive organizational success',
    gradient: 'from-pink-500 to-red-500',
    features: [
      'Leadership development programs',
      'Management skills enhancement',
      'Corporate training workshops',
      'Executive coaching',
      'Team building initiatives',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Rebranding & Marketing',
    description: 'Elevate your brand and reach your target audience',
    gradient: 'from-indigo-500 to-blue-500',
    features: [
      'Brand strategy & positioning',
      'Marketing campaign development',
      'Digital marketing solutions',
      'Content strategy',
      'Social media management',
    ],
  },
];

const globalMirrorServices = [
  'Human capital development',
  'Learning and development programs',
  'Competency-based training',
  'Management retreats and conferences',
  'Headhunting/executive search',
  'Change management',
  'Production and labour-related issues',
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive consulting solutions designed to transform your business and drive sustainable growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                    <service.icon className="text-white" size={40} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 gradient-primary text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Get Started
                    </motion.button>
                  </Link>
                </div>
                <div className="flex-1 glass-dark p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What We Offer:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="text-[#2D3E9E] flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Mirror Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Global Mirror <span className="text-gradient">Additional Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Extended human capital development and consulting services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalMirrorServices.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="glass-dark p-6 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start gap-3">
                  <Briefcase className="text-[#2D3E9E] flex-shrink-0" size={24} />
                  <span className="text-gray-800 font-medium">{service}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to discuss how we can help transform your business
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#2D3E9E] rounded-full font-semibold text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
