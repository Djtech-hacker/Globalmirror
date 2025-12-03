import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Shield, Heart, Award, Handshake, Users as UsersIcon, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: BookOpen,
    title: 'Learning',
    description: 'Continuous self-development and lifelong learning',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Doing the right things at the right time and place',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Heart,
    title: 'Commitment',
    description: 'Keeping and maintaining our words',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Quality service delivery using international best practices',
    color: 'from-yellow-500 to-green-500',
  },
  {
    icon: Handshake,
    title: 'Professionalism',
    description: 'Conducting activities professionally using best practices',
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: UsersIcon,
    title: 'Corporate Citizenship',
    description: 'Social, cultural and ethical responsibilities',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: TrendingUp,
    title: 'Leadership',
    description: 'Leading and delivering transformative services',
    color: 'from-pink-500 to-purple-500',
  },
];

export default function CoreValues() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2D3E9E]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E31E24]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Core <span className="text-gradient">Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide our every action and decision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="glass-dark p-6 rounded-2xl h-full backdrop-blur-xl border border-gray-200 hover:border-[#2D3E9E]/50 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
