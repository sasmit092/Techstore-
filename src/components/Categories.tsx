import React from 'react';
import { Laptop, Smartphone, Gamepad2, Camera, Home, Headphones, Watch, Plane } from 'lucide-react';
import { categories } from '../data/products';

interface CategoriesProps {
  onCategorySelect: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ onCategorySelect }) => {
  const categoryIcons = {
    'Computers & Laptops': Laptop,
    'Mobile & Smart Devices': Smartphone,
    'Gaming': Gamepad2,
    'Audio & Video': Headphones,
    'Smart Home': Home,
    'Cameras': Camera,
    'Wearables': Watch,
    'Drones': Plane,
  };

  const categoryColors = [
    'from-blue-500 to-blue-600',
    'from-purple-500 to-purple-600',
    'from-green-500 to-green-600',
    'from-red-500 to-red-600',
    'from-yellow-500 to-yellow-600',
    'from-pink-500 to-pink-600',
    'from-indigo-500 to-indigo-600',
    'from-teal-500 to-teal-600',
  ];

  const filteredCategories = categories.filter(category => category !== 'All Categories');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Shop by Category
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore our wide range of technology products across different categories
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCategories.map((category, index) => {
          const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || Camera;
          const colorClass = categoryColors[index % categoryColors.length];

          return (
            <button
              key={category}
              onClick={() => onCategorySelect(category)}
              className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 text-center"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${colorClass} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className="h-8 w-8 text-white" />
              </div>

              {/* Category Name */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {category}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Discover latest {category.toLowerCase()}
              </p>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </button>
          );
        })}
      </div>

      {/* Featured Brands */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Featured Brands
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
          {['Apple', 'Samsung', 'Sony', 'Microsoft', 'Google', 'Dell'].map((brand) => (
            <div
              key={brand}
              className="text-center text-gray-600 dark:text-gray-400 font-semibold hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;