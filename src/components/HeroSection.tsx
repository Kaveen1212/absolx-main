import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BarChart, Bar, PieChart, Pie, LineChart, Line, Cell, ResponsiveContainer, Tooltip, Area } from 'recharts';

// Chart data
const conversionData = [
  { name: 'Previous', value: 48 },
  { name: 'Current', value: 93 },
];

const timeData = [
  { name: 'Before', value: 44 },
  { name: 'After', value: 78 },
];

// Enhanced line chart data with more pronounced upward trend
const roiData = [
  { name: 'Jan', x: 0, value: 10, y: 10 },
  { name: 'Feb', x: 1, value: 15, y: 15 },
  { name: 'Mar', x: 2, value: 18, y: 18 },
  { name: 'Apr', x: 3, value: 25, y: 25 },
  { name: 'May', x: 4, value: 30, y: 30 },
  { name: 'Jun', x: 5, value: 40, y: 40 },
  { name: 'Jul', x: 6, value: 48, y: 48 },
  { name: 'Aug', x: 7, value: 60, y: 60 }
];

const aiOptimizationData = [
  { name: 'Coverage', value: 24 },
  { name: 'Remaining', value: 76 },
];

// Enhanced color palette
const COLORS = {
  primary: '#FBBF24',
  primaryLight: '#FEF3C7',
  secondary: '#EAB308',
  accent: '#FACC15',
  background: 'rgba(251, 191, 36, 0.1)'
};

// Custom tooltip component
const CustomTooltip = ({ active, payload, label, valueFormat }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-black/80 backdrop-blur-sm border border-absolutex-amber/20 px-3 py-2 rounded-md shadow-lg">
        <p className="text-absolutex-amber text-xs font-medium">{`${label || payload[0].name}`}</p>
        <p className="text-white text-sm font-semibold">
          {valueFormat ? valueFormat(payload[0].value) : payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

// Horizontal Progress Component
const HorizontalProgress = ({ progress }) => (
  <div className="w-full h-3 bg-absolutex-amber/10 rounded-full overflow-hidden">
    <motion.div 
      className="h-full bg-gradient-to-r from-absolutex-amber to-absolutex-gold"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
    />
  </div>
);

// Circular Progress Component
const CircularProgress = ({ progress }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  return (
    <div className="relative flex items-center justify-center">
      <svg width="80" height="80" viewBox="0 0 100 100">
        <circle 
          cx="50" cy="50" r={radius}
          fill="transparent"
          stroke="rgba(251, 191, 36, 0.1)"
          strokeWidth="8"
        />
        <motion.circle 
          cx="50" cy="50" r={radius}
          fill="transparent"
          stroke="url(#circleGradient)"
          strokeWidth="8"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />
        <defs>
          <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={COLORS.primary} />
            <stop offset="100%" stopColor={COLORS.secondary} />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute text-center">
        <span className="text-xl font-semibold text-transparent bg-clip-text bg-yellow-amber-gradient">{progress}%</span>
      </div>
    </div>
  );
};

// Ring Chart Component for 24/7 display
const RingChart = ({ children }) => (
  <div className="relative flex items-center justify-center">
    <svg width="70" height="70" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={COLORS.accent} />
          <stop offset="100%" stopColor={COLORS.primary} />
        </linearGradient>
      </defs>
      <circle 
        cx="50" cy="50" r="40"
        fill="transparent"
        stroke="rgba(251, 191, 36, 0.1)"
        strokeWidth="8"
      />
      <motion.circle 
        cx="50" cy="50" r="40"
        fill="transparent"
        stroke="url(#ringGradient)"
        strokeWidth="8"
        strokeDasharray="251.2"
        initial={{ strokeDashoffset: 251.2 }}
        animate={{ strokeDashoffset: 62.8 }} // 25% of 251.2
        transition={{ duration: 1.8, delay: 0.5, ease: "easeOut" }}
        transform="rotate(-90 50 50)"
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      {children}
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 px-4 md:px-8">
      {/* Circuit background pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
      
      {/* Animated glow elements */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-absolutex-amber rounded-full blur-[100px] opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-absolutex-gold rounded-full blur-[120px] opacity-15 animate-pulse-slow"></div>
      
      <div className="container max-w-7xl relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-absolutex-amber opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-absolutex-amber"></span>
            </span>
            <span className="text-absolutex-amber font-medium uppercase tracking-wider text-sm">The Future of Marketing</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            <span className="block">AI-Driven Marketing & Content Creation</span>
            <span className="text-transparent bg-clip-text bg-yellow-amber-gradient">Next-Level Brand Growth.</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            AI is revolutionizing marketing, creating hyper-personalized, data-driven experiences that increase engagement 
            and reduce marketing waste. Absolx AI ensures every dollar spent generates maximum ROI.
          </p>
          
          <motion.button 
            className="neon-button group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center justify-center gap-2">
              Get Started with AI-Powered Marketing
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <span className="absolute inset-0 shimmer-effect"></span>
          </motion.button>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Conversion Increase Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-xl p-4 flex flex-col items-center"
            >
              <p className="text-sm text-muted-foreground mb-2">Conversion Increase</p>
              <div className="h-20 w-full flex items-center">
                <HorizontalProgress progress={93} />
              </div>
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-yellow-amber-gradient mt-2">93%</p>
            </motion.div>
            
            {/* Time Saved Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-xl p-4 flex flex-col items-center"
            >
              <p className="text-sm text-muted-foreground mb-2">Time Saved</p>
              <div className="h-20 w-full flex items-center justify-center">
                <CircularProgress progress={78} />
              </div>
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-yellow-amber-gradient mt-2">78%</p>
            </motion.div>
            
            {/* ROI Growth Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-xl p-4 flex flex-col items-center"
            >
              <p className="text-sm text-muted-foreground mb-2">ROI Growth</p>
              <div className="h-20 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={roiData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                    <defs>
                      <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor={COLORS.primary} stopOpacity={0.8} />
                        <stop offset="100%" stopColor={COLORS.accent} stopOpacity={1} />
                      </linearGradient>
                      <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={COLORS.primary} stopOpacity={0.3} />
                        <stop offset="100%" stopColor={COLORS.primary} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Tooltip content={(props) => <CustomTooltip {...props} valueFormat={(val) => `${val}x`} />} />
                    <Line 
                      type="monotone" 
                      dataKey="y" 
                      stroke="url(#lineGradient)" 
                      strokeWidth={3}
                      dot={{ fill: COLORS.accent, strokeWidth: 0, r: 0 }}
                      activeDot={{ fill: COLORS.accent, strokeWidth: 2, r: 5, stroke: "rgba(255,255,255,0.2)" }}
                      animationDuration={1500}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="y" 
                      fill="url(#areaGradient)" 
                      strokeWidth={0}
                      animationDuration={1500}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-yellow-amber-gradient mt-2">3.5x</p>
            </motion.div>
            
            {/* AI Optimization Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-xl p-4 flex flex-col items-center"
            >
              <p className="text-sm text-muted-foreground mb-2">AI Optimization</p>
              <div className="h-20 w-full flex items-center justify-center">
                <RingChart>
                  <div className="text-transparent bg-clip-text bg-yellow-amber-gradient text-lg font-bold">24/7</div>
                </RingChart>
              </div>
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-yellow-amber-gradient mt-2">24/7</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;