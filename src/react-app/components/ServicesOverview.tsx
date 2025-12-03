import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Monitor, Leaf, DollarSign, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const services = [
  {
    icon: Monitor,
    title: 'ICT Consulting',
    description: 'Digital transformation, technology strategy, and IT infrastructure planning',
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    icon: Leaf,
    title: 'Environmental Sustainability',
    description: 'Sustainability assessments, environmental compliance, and green strategies',
    gradient: 'from-green-500 to-teal-500',
  },
  {
    icon: DollarSign,
    title: 'Financial Consulting',
    description: 'Financial planning, business strategy, and investment advisory',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Users,
    title: 'Management Training',
    description: 'Leadership development and corporate training programs',
    gradient: 'from-pink-500 to-red-500',
  },
  {
    icon: TrendingUp,
    title: 'Rebranding & Marketing',
    description: 'Brand strategy, positioning, and digital marketing solutions',
    gradient: 'from-indigo-500 to-blue-500',
  },
];

export default function ServicesOverview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#2D3E9E]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#E31E24]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive consulting solutions tailored to transform your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="glass p-8 rounded-2xl h-full backdrop-blur-xl border border-gray-200 hover:border-[#2D3E9E]/30 transition-all duration-300">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-[#2D3E9E] font-medium group-hover:gap-2 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 gradient-primary text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              View All Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
