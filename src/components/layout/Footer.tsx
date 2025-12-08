import React from 'react';
import { motion } from 'motion/react';
import { Twitter, Linkedin, Github, Facebook } from 'lucide-react';

export default function Footer() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-black text-white border-t border-white/10 pt-20 pb-10 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tighter">FuturePay</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Revolutionizing the way the world pays. Secure, fast, and built for the future economy.
            </p>
          </motion.div>
          
          <motion.div variants={item}>
            <h4 className="font-semibold mb-6 text-lg">Product</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Global Payments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Billing & Subscriptions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Connect Platforms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fraud Detection</a></li>
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h4 className="font-semibold mb-6 text-lg">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guides & Tutorials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h4 className="font-semibold mb-6 text-lg">Company</h4>
             <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-sm text-gray-500 order-2 md:order-1">
            © {new Date().getFullYear()} FuturePay Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 text-gray-400 order-1 md:order-2">
            <a href="#" className="hover:text-white transition-colors transform hover:scale-110 duration-200"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white transition-colors transform hover:scale-110 duration-200"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-white transition-colors transform hover:scale-110 duration-200"><Github size={20} /></a>
             <a href="#" className="hover:text-white transition-colors transform hover:scale-110 duration-200"><Facebook size={20} /></a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

