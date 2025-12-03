import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const handleClick = () => {
    const phone = '2347065435090';
    const message = encodeURIComponent('Hello! I would like to learn more about Global Mirror services.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-colors duration-200"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <motion.div
        className="absolute inset-0 rounded-full bg-green-400"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
    </motion.button>
  );
}
