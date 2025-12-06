import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Eye, Users, Award } from 'lucide-react';

export default function About() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Global Mirror Consulting </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Leading the way in consulting excellence and credible journalism since our inception
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={ref} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="glass-dark p-8 rounded-2xl"
            >
              <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be a global management consulting and human capital development company of first choice, 
                recognized for transforming businesses and developing people worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="glass-dark p-8 rounded-2xl"
            >
              <div className="w-16 h-16 rounded-xl gradient-accent flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To inspire and develop people towards solving today's organization problems and preparing 
                for future challenges through innovative consulting and quality service delivery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Guided by experienced professionals committed to excellence
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="glass-dark p-8 rounded-2xl text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#2D3E9E] to-[#E31E24] flex items-center justify-center">
                <Users className="text-white" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Joseph Daramola</h3>
              <p className="text-lg text-[#2D3E9E] font-semibold mb-4">Managing Director</p>
              <p className="text-gray-700 leading-relaxed">
                Leading Global Mirror with a vision to transform businesses through innovative consulting 
                and credible media coverage. With extensive experience in management consulting and business 
                development, Joseph drives our commitment to excellence and client satisfaction.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Mirror Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Comprehensive Services</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto glass-dark p-8 rounded-2xl"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Award className="text-white" size={32} />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">Global Mirror</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Global Mirror offers comprehensive capabilities in human capital development, consulting services, 
              and credible journalism. Our services include learning and development programs, competency-based training, 
              management retreats, executive search services, and truthful news reporting.
            </p>
            <blockquote className="border-l-4 border-[#2D3E9E] pl-6 italic text-gray-600 text-lg">
              "The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. 
              The great teacher inspires."
              <footer className="text-sm text-gray-500 mt-2">— William Arthur Ward</footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Dual Excellence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="glass-dark p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Global Mirror Consulting</h3>
                <p className="text-[#2D3E9E] font-semibold mb-4">RC: 3146467</p>
                <p className="text-lg text-gray-700 italic mb-4">"Empowering growth, Together"</p>
                <p className="text-gray-600">
                  Providing comprehensive consulting services across ICT, environmental sustainability, 
                  financial planning, management training, and brand development.
                </p>
              </div>
              <div className="glass-dark p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Global Mirror Newspaper</h3>
                <p className="text-[#E31E24] font-semibold mb-4">globalmirrornewspaper.com</p>
                <p className="text-lg text-gray-700 italic mb-4">"Credible and Truthful"</p>
                <p className="text-gray-600">
                  Delivering accurate, unbiased news coverage and insights to keep our readers informed 
                  about business, technology, and current affairs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
