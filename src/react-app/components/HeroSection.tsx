import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight, Newspaper, Briefcase } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2D3E9E] via-[#3A4B9F] to-[#E31E24]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 px-6 py-2 glass rounded-full"
          >
            <span className="text-white/90 text-sm font-medium">RC: 3146467</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transforming Businesses,
            <br />
            <span className="text-[#FFD700]">Delivering Truth</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Expert consulting services and credible news coverage to empower your growth and keep you informed
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white text-[#2D3E9E] rounded-full font-semibold text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <Briefcase size={20} />
                Explore Consulting
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
            </Link>

            <Link to="/news">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 glass text-white rounded-full font-semibold text-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300 flex items-center gap-2"
              >
                <Newspaper size={20} />
                Read Latest News
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Floating Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="glass p-6 rounded-2xl text-left hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-white font-bold text-xl mb-2">Global Mirror Consulting</h3>
            <p className="text-white/80 text-sm mb-3">Empowering growth, Together</p>
            <p className="text-white/70 text-sm">ICT, Environmental, Financial Consulting & Management Training</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="glass p-6 rounded-2xl text-left hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-white font-bold text-xl mb-2">Global Mirror Newspaper</h3>
            <p className="text-white/80 text-sm mb-3">Credible and Truthful</p>
            <p className="text-white/70 text-sm">Your trusted source for accurate news and insights</p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
