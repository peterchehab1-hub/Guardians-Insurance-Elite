
import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, Plus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FloatingActionButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '(+961) 71971213';
  const cleanNumber = phoneNumber.replace(/\s/g, '');

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            className="absolute bottom-16 right-0 mb-2 w-48 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
          >
            <a
              href={`tel:${cleanNumber}`}
              className="flex items-center px-4 py-3 hover:bg-teal-primary/10 text-text-dark border-b border-gray-50 transition-colors"
            >
              <Phone className="w-4 h-4 mr-3 text-teal-primary" />
              <span className="text-sm font-medium">Call Us</span>
            </a>
            <a
              href={`https://wa.me/${cleanNumber.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-3 hover:bg-teal-primary/10 text-text-dark border-b border-gray-50 transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-3 text-teal-primary" />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
            <a
              href={`sms:${cleanNumber}`}
              className="flex items-center px-4 py-3 hover:bg-teal-primary/10 text-text-dark transition-colors"
            >
              <Mail className="w-4 h-4 mr-3 text-teal-primary" />
              <span className="text-sm font-medium">SMS</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-teal-primary hover:bg-teal-primary/90 text-white rounded-full flex items-center justify-center shadow-2xl transform transition-transform hover:scale-110 active:scale-95 z-50 focus:outline-none"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </motion.div>
      </button>
    </div>
  );
};

export default FloatingActionButton;
