
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Import components
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import InspirationSection from '../components/InspirationSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';
import Chatbot from '@/components/chatbot';

const Index = () => {
  useEffect(() => {
    // Smooth scroll initialization or any other initialization code
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <InspirationSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
