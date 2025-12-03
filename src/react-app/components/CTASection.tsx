import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router';
import { MessageCircle, Phone, Mail } from 'lucide-react';

export default function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-primary opacity-95" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
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
          className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
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
          className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let's discuss how our consulting services can help you achieve your goals. Get in touch today!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const phone = '2347065435090';
                const message = encodeURIComponent('Hello! I would like to book a consultation with Global Mirror.');
                window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
              }}
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-green-500/20 transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </motion.button>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#2D3E9E] rounded-full font-semibold text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300"
              >
                Book a Consultation
              </motion.button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/90"
          >
            <a 
              href="tel:+2347065435090" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone size={18} />
              +234 706 543 5090
            </a>
            <a 
              href="mailto:globalmirror2020@gmail.com" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail size={18} />
              globalmirror2020@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
