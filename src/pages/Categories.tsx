import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { productService } from '../services/api';
import type { Product } from '../types';

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [productsLoading, setProductsLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await productService.getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = async (category: string) => {
    setSelectedCategory(category);
    setProductsLoading(true);
    try {
      const productsData = await productService.getProductsByCategory(category);
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products for category:', error);
    } finally {
      setProductsLoading(false);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "men's clothing":
        return '👔';
      case "women's clothing":
        return '👗';
      case 'jewelery':
        return '💍';
      case 'electronics':
        return '📱';
      default:
        return '📦';
    }
  };

  const getCategoryDescription = (category: string) => {
    switch (category) {
      case "men's clothing":
        return 'Stylish and comfortable clothing for men';
      case "women's clothing":
        return 'Fashionable and trendy clothing for women';
      case 'jewelery':
        return 'Beautiful jewelry and accessories';
      case 'electronics':
        return 'Latest gadgets and electronic devices';
      default:
        return 'Quality products in this category';
    }
  };

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case "men's clothing":
        return 'from-blue-500 to-blue-600';
      case "women's clothing":
        return 'from-pink-500 to-rose-600';
      case 'jewelery':
        return 'from-yellow-500 to-amber-600';
      case 'electronics':
        return 'from-purple-500 to-indigo-600';
      default:
        return 'from-blue-500 to-purple-600';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mx-auto"></div>
            <div className="absolute inset-0 animate-pulse">
              <div className="rounded-full h-16 w-16 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto opacity-20"></div>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Loading Categories</h2>
          <p className="text-gray-600">Finding amazing products for you...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedCategory ? (
          <div>
            {/* Enhanced Header with Back Button */}
            <div className="mb-12">
              <button
                onClick={() => setSelectedCategory(null)}
                className="group flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-6 transition-all duration-200"
              >
                <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Categories
              </button>

              {/* Category Header Card */}
              <div className={`bg-gradient-to-r ${getCategoryColor(selectedCategory)} rounded-2xl shadow-lg p-8 text-white overflow-hidden relative`}>
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
                <div className="relative">
                  <div className="flex items-center gap-6 mb-4">
                    <div className="text-7xl">{getCategoryIcon(selectedCategory)}</div>
                    <div>
                      <h1 className="text-4xl font-bold capitalize mb-2">{selectedCategory}</h1>
                      <p className="text-white/90 text-lg">{getCategoryDescription(selectedCategory)}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-white/80">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                    {products.length} Products Available
                  </div>
                </div>
              </div>
            </div>

            {/* Products Loading State */}
            {productsLoading ? (
              <div className="flex justify-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-16">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="text-gray-400 text-6xl mb-4">📦</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-600 mb-6">
                    No products available in the "{selectedCategory}" category at the moment.
                  </p>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Back to Categories
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-fade-in-up"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: 'both'
                    }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            {/* Categories Header */}
            <div className="mb-16 text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full px-4 py-2 mb-4">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                </svg>
                <span className="text-sm font-semibold">Shop by Category</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Explore Categories
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-xl leading-relaxed">
                Discover our curated collections. Find exactly what you're looking for in our organized categories.
              </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`bg-gradient-to-br ${getCategoryColor(category)} rounded-2xl p-8 text-white text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden relative group cursor-pointer animate-fade-in-up border border-white/10`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-7xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {getCategoryIcon(category)}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 capitalize group-hover:text-white/90 transition-colors duration-200">
                      {category}
                    </h3>
                    <p className="text-white/80 mb-4 text-sm leading-relaxed">
                      {getCategoryDescription(category)}
                    </p>
                    <div className="flex items-center justify-center text-white/90 font-semibold group-hover:text-white transition-colors duration-200">
                      <span>Explore Collection</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Categories;
