
import React from 'react';
import { ArrowRight, BarChart, Search, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  /**
   * ACTION REQUIRED: Replace the URL below with your actual photo.
   * Option 1: Use a link from Google Drive (shared publicly), LinkedIn, or a hosting site.
   * Option 2: If you have the image file in your project folder, use the filename (e.g., "./my-photo.jpg").
   */
  const profileImage = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&h=800&auto=format&fit=crop";

  return (
    <section id="home" className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Available for New Roles</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Hi, I'm <span className="text-blue-600">Susmita Barik</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 font-medium">
            SEO Executive & Digital Marketing Fresher
          </p>
          
          <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
            I help businesses grow their online presence by using smart SEO strategies, 
            data-driven research, and the latest AI tools to improve website visibility.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl hover:-translate-y-1"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="https://wa.me/917063678515"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-blue-600 border-2 border-blue-100 px-8 py-4 rounded-xl font-bold hover:border-blue-600 transition-all shadow-sm hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5 mr-2 text-[#25D366]" />
              WhatsApp Me
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-blue-200 rounded-3xl rotate-6 opacity-30 animate-pulse"></div>
            <div className="absolute inset-0 bg-indigo-200 rounded-3xl -rotate-3 opacity-30 animate-pulse delay-75"></div>
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white flex items-center justify-center border-4 border-white">
              <img
                src={profileImage}
                alt="Susmita Barik"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback in case the image link fails
                  (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Susmita+Barik&background=0D8ABC&color=fff&size=512";
                }}
              />
            </div>

            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center space-x-3 animate-bounce">
              <div className="p-2 bg-green-50 rounded-lg">
                <BarChart className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Organic Reach</p>
                <p className="text-lg font-bold text-slate-900">+120%</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center space-x-3 animate-pulse">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">SEO Rank</p>
                <p className="text-lg font-bold text-slate-900">#1 Spot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
