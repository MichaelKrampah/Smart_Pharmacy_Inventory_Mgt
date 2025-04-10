
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pharma-blue-dark text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pharma-blue to-pharma-green rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">Rx</span>
              </div>
              <span className="font-heading font-semibold text-xl">
                SmartRx<span className="text-pharma-green">Inventory</span>
              </span>
            </div>
            <p className="text-sm text-gray-300">
              Revolutionizing pharmacy inventory management with intelligent solutions
              designed for modern healthcare operations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pharma-blue transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-pharma-blue transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-pharma-blue transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/system-overview" className="text-sm text-gray-300 hover:text-white transition-colors">System Overview</Link>
              </li>
              <li>
                <Link to="/features" className="text-sm text-gray-300 hover:text-white transition-colors">Key Features</Link>
              </li>
              <li>
                <Link to="/benefits" className="text-sm text-gray-300 hover:text-white transition-colors">Benefits</Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm text-gray-300 hover:text-white transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-sm text-gray-300 hover:text-white transition-colors">Testimonials</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Knowledge Base</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Product Updates</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="shrink-0" />
                <span className="text-sm text-gray-300">Accra, Ghana<br />GZ-100-111</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="shrink-0" />
                <a href="tel:+18005551234" className="text-sm text-gray-300 hover:text-white transition-colors">024000000</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="shrink-0" />
                <a href="mailto:info@smartrxinventory.com" className="text-sm text-gray-300 hover:text-white transition-colors">info@smartrxinventory.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} SmartRxInventory. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
