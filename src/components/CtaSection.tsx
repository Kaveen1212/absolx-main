
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-24 px-4 md:px-8 relative">
      <div className="absolute inset-0 bg-gradient-radial from-absolutex-amber/10 to-transparent opacity-30"></div>
      
      <div className="container max-w-7xl mx-auto relative">
        <motion.div 
          className="glass-card rounded-2xl p-8 md:p-12 overflow-hidden relative border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background decorative elements */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-absolutex-amber rounded-full blur-[100px] opacity-20"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-absolutex-gold rounded-full blur-[100px] opacity-20"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-absolutex-amber/10 text-absolutex-amber text-sm font-medium mb-6">
                Get Started Today
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight">
                Ready to Transform Your<br />
                <span className="text-transparent bg-clip-text bg-yellow-amber-gradient">
                  Marketing Strategy?
                </span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Join the AI revolution and stay ahead of the competition with cutting-edge 
                marketing technology that delivers measurable results.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Free 14-day trial with full access',
                  'No credit card required to start',
                  'Dedicated onboarding specialist',
                  'AI-powered strategy consultation'
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-absolutex-amber mr-3 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.button 
                className="neon-button group w-full md:w-auto"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Start Your AI Marketing Journey Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 shimmer-effect"></span>
              </motion.button>
            </div>
            
            <div className="relative">
              <motion.div 
                className="relative z-10 rounded-xl overflow-hidden border border-white/10 shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2000&q=80" 
                  alt="AI Marketing Dashboard" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-absolutex-darker to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-lg font-semibold mb-2">Absolx AI Dashboard</p>
                  <p className="text-sm text-muted-foreground">Intuitive controls for your AI marketing campaigns</p>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-40 h-40 border-2 border-absolutex-amber/20 rounded-xl -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 border-2 border-absolutex-gold/20 rounded-xl -z-10"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
