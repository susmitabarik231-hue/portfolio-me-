
import React from 'react';
import { Linkedin, Twitter, Github, Search, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Search className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Susmita Barik
            </span>
          </div>

          <div className="flex space-x-6">
            <a href="https://wa.me/917063678515" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-[#25D366] transition-colors">
              <MessageCircle className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 text-slate-400 hover:text-blue-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-50 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Susmita Barik. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
