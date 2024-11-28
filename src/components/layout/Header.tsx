import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Gift } from 'lucide-react';
import { useStore } from '../../store/useStore';

export function Header() {
  const { cart, user } = useStore();
  
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Gift className="h-8 w-8 text-pink-600" />
            <span className="text-2xl font-bold text-gray-900">Mera Bestie</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/categories" className="text-gray-700 hover:text-pink-600">
              Categories
            </Link>
            <Link to="/stationery" className="text-gray-700 hover:text-pink-600">
              Stationery
            </Link>
            <Link to="/greeting-cards" className="text-gray-700 hover:text-pink-600">
              Greeting Cards
            </Link>
            <Link to="/couple-gifts" className="text-gray-700 hover:text-pink-600">
              Couple Gifts
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-pink-600" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
            <Link to={user ? "/account" : "/login"}>
              <User className="h-6 w-6 text-gray-700 hover:text-pink-600" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}