import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, Heart, PenTool } from 'lucide-react';

export function Home() {
  const categories = [
    {
      title: 'Stationery',
      icon: <PenTool className="h-8 w-8" />,
      description: 'Premium stationery items for all your creative needs',
      link: '/stationery'
    },
    {
      title: 'Greeting Cards',
      icon: <Heart className="h-8 w-8" />,
      description: 'Express your feelings with our beautiful greeting cards',
      link: '/greeting-cards'
    },
    {
      title: 'Couple Gifts',
      icon: <Gift className="h-8 w-8" />,
      description: 'Special gifts for your special someone',
      link: '/couple-gifts'
    }
  ];

  return (
    <div className="space-y-16">
      
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&q=80"
            alt="Gift boxes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-xl">
            <h1 className="text-5xl font-bold mb-6">Welcome to Mera Bestie</h1>
            <p className="text-xl mb-8">
              Discover thoughtful gifts and premium stationery items that make every moment special
            </p>
            <Link
              to="/categories"
              className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={category.link}
              className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8 text-center">
                <div className="inline-block p-4 bg-pink-100 rounded-full text-pink-600 mb-4 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
          </div>
        </div>
      </section>

    
      <section className="bg-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8">Subscribe to our newsletter for exclusive offers and updates</p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-lg text-gray-900"
            />
            <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}