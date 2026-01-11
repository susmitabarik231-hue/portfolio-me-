
import React from 'react';
import { ExternalLink, Search, FileText, LineChart } from 'lucide-react';

const Projects: React.FC = () => {
  const projectList = [
    {
      title: 'Keyword Research Practice',
      description: 'Conducted comprehensive keyword research for a niche e-commerce site, identifying low-competition, high-volume terms.',
      icon: <Search className="w-6 h-6 text-blue-600" />,
      tags: ['SEMrush', 'Ahrefs', 'Excel'],
      image: 'https://picsum.photos/seed/keyword/600/400'
    },
    {
      title: 'Content Optimization Audit',
      description: 'Re-structured a blog article for better readability and SEO, resulting in improved heading hierarchy and keyword density.',
      icon: <FileText className="w-6 h-6 text-indigo-600" />,
      tags: ['On-Page SEO', 'Readability', 'Meta Tags'],
      image: 'https://picsum.photos/seed/content/600/400'
    },
    {
      title: 'SEO Audit Report (Sample)',
      description: 'Identified technical issues like missing alt tags, broken links, and slow loading speeds in a practice project.',
      icon: <LineChart className="w-6 h-6 text-green-600" />,
      tags: ['Technical Audit', 'GSC', 'Site Speed'],
      image: 'https://picsum.photos/seed/audit/600/400'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Practice Projects</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto">
            Real-world simulations and audits I performed during my training to master the art of SEO.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-md">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors">
                  Case Study Details
                  <ExternalLink className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;