
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative pt-24 pb-12 px-4 md:px-8 border-t border-white/10">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <img src="/logo.webp" alt="" />
            </div>
            <p className="text-muted-foreground mb-6">
              Revolutionizing marketing through AI-powered content creation and strategy optimization.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={18} />, url: '#' },
                { icon: <Twitter size={18} />, url: '#' },
                { icon: <Instagram size={18} />, url: '#' },
                { icon: <Linkedin size={18} />, url: '#' },
                { icon: <Youtube size={18} />, url: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="w-8 h-8 rounded-full bg-absolutex-dark flex items-center justify-center hover:bg-absolutex-amber/20 transition-colors duration-300"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Solutions</h4>
            <ul className="space-y-4">
              {[
                'AI Content Generation',
                'Video Production',
                'Image Creation',
                'Marketing Analytics',
                'Campaign Optimization',
                'Conversion Tracking'
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                'About Us',
                'Our Team',
                'Careers',
                'Blog',
                'Case Studies',
                'Contact'
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="border-t border-white/10 pt-10 mb-10">
          <h4 className="text-lg font-semibold mb-8 text-center">Our Leadership Team</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-absolutex-amber mx-auto mb-4">
                <img 
                  src="harsha.jpg" 
                  alt="Harsha Subasinghe" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h5 className="font-semibold">Harsha Subasinghe</h5>
              <p className="text-sm text-muted-foreground">CEO</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-absolutex-amber mx-auto mb-4">
                <img 
                  src="kavindu.jpg" 
                  alt="Kavindu Eshara" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h5 className="font-semibold">Kavindu Eshara</h5>
              <p className="text-sm text-muted-foreground">Founder</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-absolutex-amber mx-auto mb-4">
                <img 
                  src="danu.jpg" 
                  alt="Danu S Galagoda" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h5 className="font-semibold">Danu S Galagoda</h5>
              <p className="text-sm text-muted-foreground">Co-Founder</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Absolx AI. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((item, index) => (
              <a 
                key={index}
                href="#" 
                className="text-sm text-muted-foreground hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
