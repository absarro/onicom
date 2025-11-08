import { Search, Compass, Cog, Trophy, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const steps = [
  {
    icon: Search,
    titleKey: 'howItWorks.step1.title',
    subtitleKey: 'howItWorks.step1.subtitle',
    itemsKey: [
      'howItWorks.step1.item1',
      'howItWorks.step1.item2',
      'howItWorks.step1.item3',
      'howItWorks.step1.item4',
    ],
    color: 'from-blue-600 to-blue-400',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Compass,
    titleKey: 'howItWorks.step2.title',
    subtitleKey: 'howItWorks.step2.subtitle',
    itemsKey: [
      'howItWorks.step2.item1',
      'howItWorks.step2.item2',
      'howItWorks.step2.item3',
      'howItWorks.step2.item4',
    ],
    color: 'from-cyan-600 to-cyan-400',
    bgColor: 'bg-cyan-50',
  },
  {
    icon: Cog,
    titleKey: 'howItWorks.step3.title',
    subtitleKey: 'howItWorks.step3.subtitle',
    itemsKey: [
      'howItWorks.step3.item1',
      'howItWorks.step3.item2',
      'howItWorks.step3.item3',
      'howItWorks.step3.item4',
    ],
    color: 'from-blue-600 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Trophy,
    titleKey: 'howItWorks.step4.title',
    subtitleKey: 'howItWorks.step4.subtitle',
    itemsKey: [
      'howItWorks.step4.item1',
      'howItWorks.step4.item2',
      'howItWorks.step4.item3',
      'howItWorks.step4.item4',
    ],
    color: 'from-green-600 to-emerald-500',
    bgColor: 'bg-green-50',
  },
];

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <CheckCircle size={16} />
            <span>{t('howItWorks.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-white/30 to-transparent hidden md:block" />
                )}

                <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="text-white" size={28} />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-900">
                          {index + 1}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {t(step.titleKey)}
                        </h3>
                        <p className="text-cyan-300 font-semibold">
                          {t(step.subtitleKey)}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-3">
                        {step.itemsKey.map((itemKey, idx) => (
                          <div key={idx} className="flex items-start">
                            <ArrowRight className="text-cyan-400 mr-2 mt-0.5 flex-shrink-0" size={18} />
                            <span className="text-gray-300 text-sm">{t(itemKey)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative bg-white text-blue-900 px-10 py-5 rounded-full font-semibold hover:shadow-2xl hover:shadow-white/50 transition-all inline-flex items-center overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              {t('howItWorks.cta')}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </span>
          </button>
        </div>
      </div>

      <style>{`
        .delay-700 { animation-delay: 700ms; }
      `}</style>
    </section>
  );
}
