
import React from 'react';
import { CheckCircle2, Zap, Clock, TrendingUp, ShieldCheck, MessageCircle } from 'lucide-react';

const WhyHireMe: React.FC = () => {
  const reasons = [
    {
      title: 'Quick Learner',
      description: 'I grasp new tools and algorithm updates fast to keep your strategies fresh.',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Updated Knowledge',
      description: 'As a recent graduate, I use current best practices, not outdated tactics.',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Dedicated Work Ethic',
      description: 'I put 100% effort into every keyword research and technical audit.',
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: 'Honest & Reliable',
      description: 'Transparent reporting and ethical white-hat SEO techniques only.',
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  const whatsappUrl = "https://wa.me/917063678515";

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
              Why Hire a Passionate <span className="text-blue-200">Fresher</span> Like Me?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              I might be new to the professional field, but I am filled with updated industry knowledge, 
              energy, and a hunger to prove my skills. I am ready to grow with your company.
            </p>
            <a 
              href={whatsappUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-600 px-10 py-4 rounded-xl font-bold shadow-2xl hover:bg-blue-50 transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Let's Start a Project
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <div className="mb-4 text-blue-200">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                <p className="text-sm text-blue-100 opacity-90">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
