
import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-8 md:p-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-bold uppercase tracking-widest">
                <Award className="w-4 h-4 mr-2" />
                Latest Achievement
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                SEO & Digital Marketing Mastercourse
              </h2>
              <p className="text-blue-100 text-lg">
                I successfully completed a comprehensive professional training program focusing on the entire search engine optimization lifecycle.
              </p>
              
              <ul className="space-y-4">
                {[
                  'In-depth Keyword Strategy and Analysis',
                  'Semantic HTML and Content Structure',
                  'Audit Techniques for Search Visibility',
                  'Strategic Link Building Best Practices'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="aspect-[4/3] bg-blue-50/10 rounded-xl overflow-hidden border border-white/30 flex items-center justify-center">
                   <div className="text-center p-6">
                      <Award className="w-16 h-16 text-blue-200 mx-auto mb-4" />
                      <p className="text-white font-bold text-xl uppercase tracking-widest">Certificate</p>
                      <div className="w-12 h-1 bg-blue-400 mx-auto mt-4 rounded-full"></div>
                   </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-blue-100 font-medium italic">"Certified SEO Specialist"</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full blur-xl opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-400 rounded-full blur-xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
