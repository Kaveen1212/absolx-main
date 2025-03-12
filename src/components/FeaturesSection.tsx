
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Image, Video, Bot, BarChart, MessageSquare, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6 text-absolutex-amber" />,
    title: 'AI-Powered Content Generation',
    description: 'Generate high-converting ad copy, blog posts, and marketing emails that resonate with your target audience.',
  },
  {
    icon: <Image className="w-6 h-6 text-absolutex-gold" />,
    title: 'AI Image Creation',
    description: 'Create stunning visuals and graphics tailored to your brand identity without needing advanced design skills.',
  },
  {
    icon: <Video className="w-6 h-6 text-absolutex-amber" />,
    title: 'AI Video Production',
    description: 'Transform concepts into compelling video content with AI-powered editing and scene optimization.',
  },
  {
    icon: <Bot className="w-6 h-6 text-absolutex-gold" />,
    title: 'AI Filming & Cinematography',
    description: 'Optimize camera movements, lighting, and scene composition with advanced AI cinematography tools.',
  },
  {
    icon: <BarChart className="w-6 h-6 text-absolutex-amber" />,
    title: 'Predictive Analytics',
    description: 'Leverage AI to predict customer behavior and optimize marketing strategies in real-time.',
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-absolutex-gold" />,
    title: 'AI Conversational Marketing',
    description: 'Engage customers with personalized, context-aware conversations that convert at unprecedented rates.',
  },
];

const FeaturesSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 px-4 md:px-8">
      <div className="container max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-yellow-amber-gradient">
              Cutting-Edge AI Features
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our suite of AI-powered tools revolutionizes how brands create and distribute content,
            delivering exceptional results with unprecedented efficiency.
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass-card rounded-xl p-6 h-full flex flex-col hover:border-absolutex-amber/20 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(234, 179, 8, 0.2)' }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-absolutex-dark mr-4 neon-glow">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground flex-grow">{feature.description}</p>
              <motion.div 
                className="mt-6 flex items-center text-absolutex-amber font-medium cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
