import React, { useState, useMemo } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Categories from './components/Categories';
import Cart from './components/Cart';
import { products } from './data/products';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleViewChange = (view: string) => {
    setCurrentView(view);
    if (view === 'products') {
      setSearchTerm('');
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentView('products');
  };

  const handleExploreProducts = () => {
    setCurrentView('products');
    setSearchTerm('');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <Hero onExploreProducts={handleExploreProducts} />;
      case 'products':
        return <ProductGrid products={filteredProducts} />;
      case 'categories':
        return <Categories onCategorySelect={handleCategorySelect} />;
      default:
        return <Hero onExploreProducts={handleExploreProducts} />;
    }
  };

  return (
    <ThemeProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Header
            currentView={currentView}
            onViewChange={handleViewChange}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onCartToggle={() => setIsCartOpen(true)}
          />
          
          <main className={currentView === 'home' ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'}>
            {renderContent()}
          </main>

          <Cart
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
          />

          {/* Footer */}
          <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl">
                      <div className="h-6 w-6 bg-white rounded" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      TechStore
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Your premier destination for the latest technology and electronics. 
                    We bring you cutting-edge products from the world's leading brands.
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-500">
                    © 2025 TechStore. All rights reserved.
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">About Us</a></li>
                    <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
                    <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Shipping Info</a></li>
                    <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Returns</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Support</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Help Center</a></li>
                    <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Live Chat</a></li>
                    <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Terms of Service</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;