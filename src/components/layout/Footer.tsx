import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Gift className="h-8 w-8 text-pink-500" />
              <span className="text-xl font-bold">Mera Bestie</span>
            </div>
            <p className="mt-4 text-gray-400">
              Your one-stop shop for thoughtful gifts and stationery items.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-pink-500">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-pink-500">Contact</Link></li>
              <li><Link to="/shipping" className="text-gray-400 hover:text-pink-500">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-pink-500">Returns Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/stationery" className="text-gray-400 hover:text-pink-500">Stationery</Link></li>
              <li><Link to="/greeting-cards" className="text-gray-400 hover:text-pink-500">Greeting Cards</Link></li>
              <li><Link to="/couple-gifts" className="text-gray-400 hover:text-pink-500">Couple Gifts</Link></li>
              <li><Link to="/custom-gifts" className="text-gray-400 hover:text-pink-500">Custom Gifts</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-pink-500" />
                <span className="text-gray-400">support@merabestie.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-pink-500" />
                <span className="text-gray-400">+91 1234567890</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-pink-500" />
                <span className="text-gray-400">Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mera Bestie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}