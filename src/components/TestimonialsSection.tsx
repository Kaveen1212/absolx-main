
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Absolx AI transformed our marketing strategy overnight. We're seeing a 78% increase in engagement and a 3x ROI on our campaigns.",
    author: "Sarah Johnson",
    position: "CMO, TechVision Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
    company: "TechVision Inc."
  },
  {
    quote: "The AI-generated content is indistinguishable from our best copywriters, but produced in minutes rather than days. It's revolutionized our content pipeline.",
    author: "Michael Chen",
    position: "Content Director, GlobalMedia",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    company: "GlobalMedia"
  },
  {
    quote: "Our video production costs dropped by 65% while output quality improved. Absolx AI's cinematography tools are like having a professional director at your fingertips.",
    author: "Priya Patel",
    position: "Creative Director, Visionary Studios",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
    company: "Visionary Studios"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-circuit-pattern opacity-5"></div>
      
      <div className="container max-w-7xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-blue-purple-gradient">
              Success Stories
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how leading brands have transformed their marketing with our AI-powered solutions.
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-absolutex-blue/10 opacity-30 animate-rotate-slow"></div>
          <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-absolutex-purple/10 opacity-30 animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
          
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12 relative z-10">
            <div className="flex justify-between mb-8">
              <motion.button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-absolutex-dark flex items-center justify-center border border-white/10 hover:border-absolutex-blue/50 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              
              <div className="flex">
                {testimonials.map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-3 h-3 rounded-full mx-1 ${currentIndex === index ? 'bg-absolutex-blue' : 'bg-muted'}`}
                    onClick={() => setCurrentIndex(index)}
                  ></div>
                ))}
              </div>
              
              <motion.button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-absolutex-dark flex items-center justify-center border border-white/10 hover:border-absolutex-blue/50 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-absolutex-blue fill-absolutex-blue" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl mb-8 font-medium leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-absolutex-blue mb-4">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-semibold text-lg">{testimonials[currentIndex].author}</p>
                  <p className="text-muted-foreground">{testimonials[currentIndex].position}</p>
                  
                  <div className="mt-4 py-1 px-3 rounded-full bg-absolutex-dark border border-white/10">
                    <p className="text-sm text-absolutex-blue">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { number: '93%', text: 'Average Conversion Lift' },
                { number: '67%', text: 'Time-to-Market Reduction' },
                { number: '4.2x', text: 'Return on Ad Spend' },
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-blue-purple-gradient">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-24 grid grid-cols-2 md:grid-cols-5 gap-8 opacity-80">
            {[
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
              "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/01-nvidia-logo-horiz-500x200-2c50-p@2x.png"
            ].map((logo, index) => (
              <motion.div 
                key={index}
                className="flex items-center justify-center py-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ opacity: 1 }}
              >
                <img 
                  src={logo} 
                  alt="Brand logo" 
                  className="h-8 md:h-10 object-contain invert" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
