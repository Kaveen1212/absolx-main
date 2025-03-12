
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

const InspirationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 px-4 md:px-8 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-circuit-pattern opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-circuit-pattern opacity-5"></div>
      
      <div className="container max-w-7xl mx-auto relative">
        <motion.div 
          className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto overflow-hidden relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated background glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-absolutex-amber rounded-full blur-[80px] opacity-20 animate-pulse-slow"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-absolutex-gold rounded-full blur-[80px] opacity-20 animate-pulse-slow"></div>
          
          {/* Quote mark */}
          <div className="absolute top-6 left-6 text-8xl font-serif text-absolutex-amber opacity-20">"</div>
          
          <div className="relative">
            <motion.h3 
              className="font-display text-2xl md:text-3xl font-medium mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              What if your marketing campaigns could 
              <span className="text-transparent bg-clip-text bg-yellow-amber-gradient font-semibold"> self-optimize in real time</span>, 
              producing highly engaging, AI-generated content that 
              <span className="text-transparent bg-clip-text bg-yellow-gradient font-semibold"> predicts customer desires </span> 
              before they even search for it?
              <br />
              <span className="block mt-4 font-semibold">That's the Absolx marketing AI advantage.</span>
            </motion.h3>
            
            <motion.div 
              className="flex flex-col md:flex-row items-center justify-between"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center mb-6 md:mb-0">
                <div className="relative">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-absolutex-amber">
                    <img 
                      src="harsha.jpg" 
                      alt="Harsha Subasinghe" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-absolutex-amber rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Harsha Subasinghe</p>
                  <p className="text-sm text-muted-foreground">CEO, Absolx AI</p>
                </div>
              </div>
              
              <motion.button 
                className="neon-button text-sm py-2 px-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center">
                  Watch Demo
                  <PlayCircle className="ml-2 w-4 h-4" />
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-absolutex-amber/20 to-transparent opacity-40"></div>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000&q=80" 
              alt="AI Visualization" 
              className="rounded-xl w-full h-auto object-cover shadow-2xl"
            />
            <div className="absolute inset-0 border border-white/10 rounded-xl"></div>
          </div>
          
          <div>
            <h3 className="text-3xl font-display font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-yellow-amber-gradient">
                AI-Driven Results,<br />Human-Crafted Strategy
              </span>
            </h3>
            
            <div className="space-y-6">
              {[
                { 
                  title: "Predict & Personalize", 
                  description: "Our AI analyzes customer behavior patterns to predict future actions and personalize content accordingly."
                },
                { 
                  title: "Create & Optimize", 
                  description: "Generate high-quality content at scale while continuously optimizing based on performance metrics."
                },
                { 
                  title: "Scale & Adapt", 
                  description: "Effortlessly scale your marketing efforts across channels while adapting to market changes in real-time."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="glass-card rounded-lg p-4 hover:border-absolutex-amber/20 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Partners Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h4 className="text-xl font-semibold mb-8">Our Partners</h4>
          <div className="flex justify-center items-center space-x-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="transition-all duration-300"
            >
              <img src="/nvidia.png" alt="NVIDIA" className="h-12" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InspirationSection;
