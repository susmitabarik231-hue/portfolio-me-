
import React from 'react';
import { Target, Cpu, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">
              A Passionate Digital Marketer from India
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              I have recently completed an intensive SEO & Digital Marketing course. As a fresher, I bring 
              fresh energy, updated knowledge of the latest search algorithms, and a deep interest in AI-based SEO tools.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              My goal is to help brands rank higher on search engines and reach their target audience organically. 
              I am a lifelong learner, always exploring new ways to optimize content and technical aspects of websites.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3">
                <div className="mt-1 p-2 bg-blue-50 rounded-lg">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Result Focused</h4>
                  <p className="text-sm text-slate-500">I aim for measurable growth in organic traffic.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 p-2 bg-indigo-50 rounded-lg">
                  <Cpu className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">AI Enthusiast</h4>
                  <p className="text-sm text-slate-500">Leveraging AI to scale SEO efficiency.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm">
            <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
              Current Journey
            </h4>
            <div className="space-y-6">
              <div className="relative pl-8 pb-6 border-l-2 border-blue-200 last:border-0 last:pb-0">
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-blue-100"></div>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-wider">2024 - Present</p>
                <h5 className="font-bold text-slate-900 mt-1">SEO Certification Course</h5>
                <p className="text-slate-500 mt-2">Mastered Keyword Research, On-Page SEO, and Technical Audits.</p>
              </div>
              <div className="relative pl-8 border-l-2 border-blue-200 last:border-0">
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-slate-300 rounded-full border-4 border-slate-100"></div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Academic Background</p>
                <h5 className="font-bold text-slate-900 mt-1">Degree Completion</h5>
                <p className="text-slate-500 mt-2">Building a strong foundation in digital marketing principles.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;