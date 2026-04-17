
import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Globe, Share2, Camera, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-steel-blue py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-white mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Have questions? We are here to help. Reach out to our team via any of the channels below.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Contact Details */}
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-2xl group hover:border-teal-primary/30 transition-all"
              >
                <div className="flex items-center mb-8">
                  <div className="bg-teal-primary/10 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-teal-primary" />
                  </div>
                  <h3 className="text-2xl font-black text-text-dark">Call/SMS</h3>
                </div>
                <div className="space-y-2 text-gray-500 text-lg">
                  <p>Hotline: <span className="text-text-dark font-bold">1234</span> (Local)</p>
                  <p>Intl: <span className="text-text-dark font-bold">(+961) 71971213</span></p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-2xl group hover:border-teal-primary/30 transition-all"
              >
                <div className="flex items-center mb-8">
                  <div className="bg-teal-primary/10 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-teal-primary" />
                  </div>
                  <h3 className="text-2xl font-black text-text-dark">Email Us</h3>
                </div>
                <div className="space-y-2 text-gray-500 text-lg">
                  <p>General: <span className="text-text-dark font-bold">peterchehab98@gmail.com</span></p>
                  <p>Support: <span className="text-text-dark font-bold">support@guardians.lb</span></p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-2xl group hover:border-teal-primary/30 transition-all"
              >
                <div className="flex items-center mb-8">
                  <div className="bg-teal-primary/10 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6 text-teal-primary" />
                  </div>
                  <h3 className="text-2xl font-black text-text-dark">Social Media</h3>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center hover:bg-teal-primary text-text-dark hover:text-white transition-all shadow-xl"><Globe className="w-6 h-6" /></a>
                  <a href="#" className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center hover:bg-teal-primary text-text-dark hover:text-white transition-all shadow-xl"><Camera className="w-6 h-6" /></a>
                  <a href="#" className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center hover:bg-teal-primary text-text-dark hover:text-white transition-all shadow-xl"><Share2 className="w-6 h-6" /></a>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-steel-blue p-12 lg:p-16 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-teal-primary/20 to-transparent"></div>
              <h2 className="text-4xl font-black text-white mb-10">Send a Message</h2>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-xs font-black text-white/50 uppercase tracking-widest">First Name</label>
                    <input type="text" className="w-full bg-deep-blue/20 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-teal-primary transition-all text-lg" placeholder="John" />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-xs font-black text-white/50 uppercase tracking-widest">Last Name</label>
                    <input type="text" className="w-full bg-deep-blue/20 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-teal-primary transition-all text-lg" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="block text-xs font-black text-white/50 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full bg-deep-blue/20 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-teal-primary transition-all text-lg" placeholder="john@example.com" />
                </div>
                <div className="space-y-3">
                  <label className="block text-xs font-black text-white/50 uppercase tracking-widest">Subject</label>
                  <input type="text" className="w-full bg-deep-blue/20 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-teal-primary transition-all text-lg" placeholder="Insurance Inquiry" />
                </div>
                <div className="space-y-3">
                  <label className="block text-xs font-black text-white/50 uppercase tracking-widest">Message</label>
                  <textarea rows={5} className="w-full bg-deep-blue/20 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-teal-primary transition-all text-lg resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="bg-teal-primary hover:bg-teal-primary/90 text-white px-16 py-5 rounded-2xl font-black text-xl shadow-2xl transition-all transform active:scale-95 flex items-center uppercase tracking-widest">
                  <span>Send Message</span>
                  <Send className="w-6 h-6 ml-3" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
