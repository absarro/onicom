import { Building2, Calendar, Wrench, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Project {
  period: string;
  sector: string;
  titleKey: string;
  descriptionKey: string;
  techKey: string;
  color: string;
}

const projects: Project[] = [
  {
    period: '2024-2025',
    sector: 'FinTech',
    titleKey: 'timeline.project1.title',
    descriptionKey: 'timeline.project1.description',
    techKey: 'timeline.project1.tech',
    color: 'from-blue-600 to-cyan-500',
  },
  {
    period: '2022-Present',
    sector: 'FinTech',
    titleKey: 'timeline.project2.title',
    descriptionKey: 'timeline.project2.description',
    techKey: 'timeline.project2.tech',
    color: 'from-cyan-600 to-blue-500',
  },
  {
    period: '2020-2022',
    sector: 'Automobile',
    titleKey: 'timeline.project3.title',
    descriptionKey: 'timeline.project3.description',
    techKey: 'timeline.project3.tech',
    color: 'from-blue-600 to-purple-500',
  },
  {
    period: '2019',
    sector: 'Retail',
    titleKey: 'timeline.project4.title',
    descriptionKey: 'timeline.project4.description',
    techKey: 'timeline.project4.tech',
    color: 'from-green-600 to-emerald-500',
  },
  {
    period: '2018-2019',
    sector: 'Finance',
    titleKey: 'timeline.project5.title',
    descriptionKey: 'timeline.project5.description',
    techKey: 'timeline.project5.tech',
    color: 'from-purple-600 to-pink-500',
  },
  {
    period: '2016-2018',
    sector: 'Finance',
    titleKey: 'timeline.project6.title',
    descriptionKey: 'timeline.project6.description',
    techKey: 'timeline.project6.tech',
    color: 'from-blue-600 to-cyan-500',
  },
  {
    period: '2015-2016',
    sector: 'Finance',
    titleKey: 'timeline.project7.title',
    descriptionKey: 'timeline.project7.description',
    techKey: 'timeline.project7.tech',
    color: 'from-cyan-600 to-blue-500',
  },
  {
    period: '2013-2014',
    sector: 'Finance',
    titleKey: 'timeline.project8.title',
    descriptionKey: 'timeline.project8.description',
    techKey: 'timeline.project8.tech',
    color: 'from-blue-600 to-purple-500',
  },
  {
    period: '2012-2013',
    sector: 'Finance',
    titleKey: 'timeline.project9.title',
    descriptionKey: 'timeline.project9.description',
    techKey: 'timeline.project9.tech',
    color: 'from-purple-600 to-blue-500',
  },
];

export default function ProjectTimeline() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Building2 size={16} />
            <span>{t('timeline.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            {t('timeline.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('timeline.subtitle')}
          </p>
        </div>

        {/* Sectors Summary */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {[
            { label: 'Finance', icon: '🏦', count: '5' },
            { label: 'Automobile', icon: '🚗', count: '1' },
            { label: 'Retail', icon: '🛒', count: '1' },
            { label: 'FinTech', icon: '💳', count: '2' },
          ].map((sector, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-2 border-gray-200/50 hover:border-blue-300 hover:shadow-lg transition-all text-center"
            >
              <div className="text-4xl mb-2">{sector.icon}</div>
              <div className="font-bold text-gray-900">{sector.label}</div>
              <div className="text-sm text-gray-600">{sector.count} {t('timeline.projects')}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 transform md:-translate-x-1/2" />

          {/* Projects */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full transform md:-translate-x-1/2 shadow-lg border-4 border-white" />

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} ml-8 md:ml-0`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-gray-200/50 hover:border-blue-300 hover:shadow-xl transition-all p-6 group">
                    {/* Period & Sector Badge */}
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                        <Calendar size={14} />
                        <span>{project.period}</span>
                      </div>
                      <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {project.sector}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {t(project.titleKey)}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4">
                      {t(project.descriptionKey)}
                    </p>

                    {/* Technologies */}
                    <div className={`flex items-start gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Wrench className="text-gray-400 mt-0.5 flex-shrink-0" size={16} />
                      <p className="text-sm text-gray-500">
                        {t(project.techKey)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center border-2 border-blue-200">
            <div className="text-5xl font-bold text-blue-600 mb-2">20+</div>
            <div className="text-gray-700 font-semibold">{t('timeline.stat1')}</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 text-center border-2 border-cyan-200">
            <div className="text-5xl font-bold text-cyan-600 mb-2">9</div>
            <div className="text-gray-700 font-semibold">{t('timeline.stat2')}</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center border-2 border-blue-200">
            <div className="text-5xl font-bold text-blue-600 mb-2">4</div>
            <div className="text-gray-700 font-semibold">{t('timeline.stat3')}</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all inline-flex items-center"
          >
            {t('timeline.cta')}
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
