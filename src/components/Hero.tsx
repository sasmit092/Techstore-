import React from 'react';
import { ArrowRight, Smartphone, Laptop, Gamepad2, Camera } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreProducts }) => {
  const features = [
    {
      icon: Smartphone,
      title: 'Latest Smartphones',
      description: 'Cutting-edge mobile technology'
    },
    {
      icon: Laptop,
      title: 'Premium Laptops',
      description: 'Professional computing power'
    },
    {
      icon: Gamepad2,
      title: 'Gaming Gear',
      description: 'Ultimate gaming experience'
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Capture perfect moments'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-800 dark:via-purple-800 dark:to-indigo-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              TechStore
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-blue-100 dark:text-blue-200 mb-12 max-w-3xl mx-auto">
            Discover the latest in technology with our curated collection of premium electronics, 
            gadgets, and accessories for the modern lifestyle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={onExploreProducts}
              className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Explore Products</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View Categories
            </button>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-white/20 dark:bg-white/10 rounded-xl p-3 inline-block mb-4 group-hover:bg-white/30 dark:group-hover:bg-white/20 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-blue-100 dark:text-blue-200 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="currentColor"
            className="text-gray-50 dark:text-gray-900"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;