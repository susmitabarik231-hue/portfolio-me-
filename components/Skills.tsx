
import React from 'react';
import { Search, Globe, FileText, Settings, BarChart3, TrendingUp, Zap, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const skillList = [
    { name: 'On-page SEO', icon: <FileText className="w-6 h-6" />, desc: 'Content optimization & meta tags' },
    { name: 'Off-page SEO', icon: <Globe className="w-6 h-6" />, desc: 'Backlink building & outreach' },
    { name: 'Keyword Research', icon: <Search className="w-6 h-6" />, desc: 'Finding high-traffic opportunities' },
    { name: 'Technical SEO', icon: <Settings className="w-6 h-6" />, desc: 'Site speed & crawlability basics' },
    { name: 'Google Search Console', icon: <BarChart3 className="w-6 h-6" />, desc: 'Monitoring search performance' },
    { name: 'Google Analytics', icon: <TrendingUp className="w-6 h-6" />, desc: 'Data-driven traffic analysis' },
    { name: 'AI for SEO', icon: <Zap className="w-6 h-6" />, desc: 'ChatGPT & AI tool automation' },
    { name: 'Content Marketing', icon: <Users className="w-6 h-6" />, desc: 'Engaging user-centric content' },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Skills</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto">
            Equipped with modern techniques to ensure websites rank higher and stay ahead of the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillList.map((skill, index) => (
            <div 
              key={index}
              className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{skill.name}</h3>
              <p className="text-sm text-slate-500">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;