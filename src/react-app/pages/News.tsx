import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, Search } from 'lucide-react';
import { useState } from 'react';

const newsArticles = [
  {
    id: 1,
    title: 'Digital Transformation Trends in Nigerian Businesses',
    excerpt: 'Exploring how technology is reshaping the business landscape across Nigeria and what it means for local enterprises...',
    content: 'Full article content here...',
    date: '2025-12-01',
    author: 'Global Mirror Editorial',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  },
  {
    id: 2,
    title: 'Sustainable Business Practices for Environmental Impact',
    excerpt: 'How companies can adopt green strategies for long-term success while contributing to environmental conservation...',
    content: 'Full article content here...',
    date: '2025-11-28',
    author: 'Global Mirror Editorial',
    category: 'Environment',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    id: 3,
    title: 'Leadership Development in Modern Organizations',
    excerpt: 'Key insights on building effective leadership teams in today\'s rapidly evolving workplace environment...',
    content: 'Full article content here...',
    date: '2025-11-25',
    author: 'Global Mirror Editorial',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  },
  {
    id: 4,
    title: 'Financial Planning Strategies for SMEs',
    excerpt: 'Essential financial management tips for small and medium enterprises looking to scale sustainably...',
    content: 'Full article content here...',
    date: '2025-11-20',
    author: 'Global Mirror Editorial',
    category: 'Finance',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
  },
  {
    id: 5,
    title: 'The Future of Work: Remote and Hybrid Models',
    excerpt: 'How Nigerian companies are adapting to new work models and what this means for productivity and culture...',
    content: 'Full article content here...',
    date: '2025-11-15',
    author: 'Global Mirror Editorial',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  },
  {
    id: 6,
    title: 'Brand Strategy in the Digital Age',
    excerpt: 'Modern approaches to building and maintaining strong brands in an increasingly digital marketplace...',
    content: 'Full article content here...',
    date: '2025-11-10',
    author: 'Global Mirror Editorial',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80',
  },
];

const categories = ['All', 'Technology', 'Business', 'Environment', 'Finance', 'Marketing'];

export default function News() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = newsArticles.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Global Mirror News</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Credible and truthful reporting on business, technology, and current affairs
            </p>
            <p>className="text-lg text-white/80">https://www.globalmirrornewspaper.com</p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:border-[#2D3E9E] focus:outline-none focus:ring-2 focus:ring-[#2D3E9E]/20 transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#2D3E9E] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section ref={ref} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#2D3E9E]">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center text-gray-500 text-sm mb-3 gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {new Date(article.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          {article.author}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2D3E9E] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-1">
                        {article.excerpt}
                      </p>
                      <button className="text-[#2D3E9E] font-medium hover:gap-2 transition-all inline-flex items-center">
                        Read Full Article
                        <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
