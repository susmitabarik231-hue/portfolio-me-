
import React from 'react';

const Tools: React.FC = () => {
  const toolCategories = [
    {
      name: 'Google Tools',
      items: ['Google Search Console', 'Google Analytics (GA4)', 'Google Keyword Planner', 'Google Trends']
    },
    {
      name: 'SEO Tools',
      items: ['SEMrush (Basic)', 'Ahrefs (Basic)', 'Ubersuggest', 'Yoast SEO', 'Screaming Frog']
    },
    {
      name: 'AI & Others',
      items: ['ChatGPT', 'Perplexity AI', 'Canva (Graphic)', 'Trello (Management)']
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Toolkit</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {toolCategories.map((category, idx) => (
            <div key={idx} className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-200">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item, i) => (
                  <div key={i} className="bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100 text-slate-700 font-medium text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
