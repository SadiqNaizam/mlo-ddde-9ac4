import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700 text-gray-400">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <BookOpen className="h-6 w-6 text-amber-400" />
          <div className="text-center md:text-left">
            <p className="font-serif text-lg text-white">The Reading Room</p>
            <p className="text-xs">
              &copy; {currentYear}. All Rights Reserved.
            </p>
          </div>
        </div>
        <nav className="flex gap-4 sm:gap-6 text-sm">
          <Link to="/about" className="hover:text-amber-300 transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-amber-300 transition-colors">Contact</Link>
          <Link to="/terms" className="hover:text-amber-300 transition-colors">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;