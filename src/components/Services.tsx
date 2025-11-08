import { useState } from 'react';
import { Cloud, Shield, Brain, Zap, Users, Eye, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const services = [
  {
    id: 'strategy',
    icon: Zap,
    titleKey: 'services.strategy.title',
    descriptionKey: 'services.strategy.description',
    detailKeys: [
      'services.strategy.detail1',
      'services.strategy.detail2',
      'services.strategy.detail3',
      'services.strategy.detail4'
    ],
    color: 'from-blue-600 to-blue-400',
    bgColor: 'from-blue-500/10 to-blue-600/10'
  },
  {
    id: 'devops',
    icon: Cloud,
    titleKey: 'services.devops.title',
    descriptionKey: 'services.devops.description',
    detailKeys: [
      'services.devops.detail1',
      'services.devops.detail2',
      'services.devops.detail3',
      'services.devops.detail4'
    ],
    color: 'from-cyan-600 to-cyan-400',
    bgColor: 'from-cyan-500/10 to-cyan-600/10'
  },
  {
    id: 'mlops',
    icon: Brain,
    titleKey: 'services.mlops.title',
    descriptionKey: 'services.mlops.description',
    detailKeys: [
      'services.mlops.detail1',
      'services.mlops.detail2',
      'services.mlops.detail3',
      'services.mlops.detail4'
    ],
    color: 'from-blue-600 to-cyan-500',
    bgColor: 'from-blue-500/10 to-cyan-500/10'
  },
  {
    id: 'devsecops',
    icon: Shield,
    titleKey: 'services.devsecops.title',
    descriptionKey: 'services.devsecops.description',
    detailKeys: [
      'services.devsecops.detail1',
      'services.devsecops.detail2',
      'services.devsecops.detail3',
      'services.devsecops.detail4'
    ],
    color: 'from-red-600 to-orange-500',
    bgColor: 'from-red-500/10 to-orange-500/10'
  },
  {
    id: 'agility',
    icon: Users,
    titleKey: 'services.agility.title',
    descriptionKey: 'services.agility.description',
    detailKeys: [
      'services.agility.detail1',
      'services.agility.detail2',
      'services.agility.detail3',
      'services.agility.detail4'
    ],
    color: 'from-green-600 to-emerald-500',
    bgColor: 'from-green-500/10 to-emerald-500/10'
  },
  {
    id: 'tech-watch',
    icon: Eye,
    titleKey: 'services.techWatch.title',
    descriptionKey: 'services.techWatch.description',
    detailKeys: [
      'services.techWatch.detail1',
      'services.techWatch.detail2',
      'services.techWatch.detail3',
      'services.techWatch.detail4'
    ],
    color: 'from-orange-600 to-amber-500',
    bgColor: 'from-orange-500/10 to-amber-500/10'
  }
];

export default function Services() {
  const { t } = useLanguage();
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles size={16} />
            <span>{t('services.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = activeService === service.id;

            return (
              <div
                key={service.id}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  isActive ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
                onClick={() => setActiveService(isActive ? null : service.id)}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"
                  style={{
                    background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                  }}
                />

                <div className={`relative h-full bg-white/80 backdrop-blur-sm rounded-2xl border-2 overflow-hidden ${
                  isActive ? 'border-blue-400 shadow-2xl shadow-blue-500/20' : 'border-gray-200/50 hover:border-blue-300 hover:shadow-xl'
                } transition-all duration-300 p-8`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.bgColor} rounded-full blur-2xl -z-10 opacity-50`} />

                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={28} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {t(service.titleKey)}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {t(service.descriptionKey)}
                    </p>

                    {isActive && (
                      <div className="space-y-3 mb-6 animate-fadeIn">
                        {service.detailKeys.map((detailKey, idx) => (
                          <div key={idx} className="flex items-start group/item">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <ArrowRight className="text-white" size={14} />
                            </div>
                            <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">{t(detailKey)}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <button className={`font-semibold transition-all flex items-center gap-2 ${
                      isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600 group-hover:gap-3'
                    }`}>
                      {isActive ? t('services.cta.less') : t('services.cta.more')}
                      <ArrowRight size={18} className={isActive ? 'rotate-90' : ''} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-5 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all inline-flex items-center overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              {t('services.cta.discuss')}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
