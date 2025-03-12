
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-absolutex-darker bg-opacity-80 backdrop-blur-md shadow-md' : 'py-6'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
              <img src="/logo.webp" alt="" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['Solutions', 'Features', 'Case Studies', 'Pricing', 'Blog'].map((item, index) => (
              <a 
                key={index}
                href="#" 
                className="text-muted-foreground hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-white transition-colors duration-300"
            >
              Sign In
            </a>
            <a 
              href="#" 
              className="bg-absolutex-amber text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
            >
              Get Started
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="lg:hidden fixed inset-0 top-[74px] glass-card z-40 flex flex-col p-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-6 mb-8">
              {['Solutions', 'Features', 'Case Studies', 'Pricing', 'Blog'].map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-lg text-muted-foreground hover:text-white transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
            
            <div className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="text-center text-muted-foreground hover:text-white transition-colors duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </a>
              <a 
                href="#" 
                className="text-center bg-absolutex-amber text-white py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
