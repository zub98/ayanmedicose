import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect } from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Section with Glassmorphism */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30" />
          <div className="absolute inset-0 bg-[url('/medical-bg.jpg')] bg-cover bg-center" />
          
          {/* Animated circles in background */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        {/* Glass Card */}
        <div className="relative z-10 px-4">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-lg bg-white/30 p-8 md:p-12 rounded-2xl shadow-2xl border border-white/20 max-w-3xl mx-auto"
          >
            {/* Glittering Title */}
            <motion.h1 
              className="glitter-text text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Welcome to 
              <span className="block mt-2 glitter-animation">Ayan Medicos</span>
            </motion.h1>
            <motion.p 
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className="text-xl md:text-2xl mb-8"
            >
              Your Trusted Healthcare Partner
            </motion.p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg"
            >
              Explore Our Products
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Products Carousel */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="max-w-7xl mx-auto"
        >
          {/* Add your product slides here */}
          {[1, 2, 3, 4, 5].map((item) => (
            <SwiperSlide key={item}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src={`/product-${item}.jpg`} alt={`Product ${item}`} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-600">Description goes here</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    icon: "🏥",
    title: "24/7 Service",
    description: "Available round the clock for all your medical needs"
  },
  // Add more services...
];

const stats = [
  { value: "10k+", label: "Happy Customers" },
  { value: "5k+", label: "Products" },
  { value: "24/7", label: "Support" },
  { value: "15+", label: "Years Experience" }
];

export default Home; 
