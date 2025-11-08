import { useState } from 'react';
import { Cloud, Shield, Brain, Layers, Activity, ArrowRight, CheckCircle, Target, Zap, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Pipeline {
  id: string;
  icon: any;
  titleKey: string;
  forWhoKey: string;
  inputKeys: string[];
  processKeys: string[];
  outputKeys: string[];
  techKey: string;
  durationKey: string;
  caseKey: string;
  caseResultKey: string;
  color: string;
  bgColor: string;
}

const pipelines: Pipeline[] = [
  {
    id: 'cloud-migration',
    icon: Cloud,
    titleKey: 'pipelines.cloudMigration.title',
    forWhoKey: 'pipelines.cloudMigration.forWho',
    inputKeys: [
      'pipelines.cloudMigration.input1',
      'pipelines.cloudMigration.input2',
      'pipelines.cloudMigration.input3',
      'pipelines.cloudMigration.input4',
    ],
    processKeys: [
      'pipelines.cloudMigration.process1',
      'pipelines.cloudMigration.process2',
      'pipelines.cloudMigration.process3',
      'pipelines.cloudMigration.process4',
    ],
    outputKeys: [
      'pipelines.cloudMigration.output1',
      'pipelines.cloudMigration.output2',
      'pipelines.cloudMigration.output3',
      'pipelines.cloudMigration.output4',
      'pipelines.cloudMigration.output5',
      'pipelines.cloudMigration.output6',
    ],
    techKey: 'pipelines.cloudMigration.tech',
    durationKey: 'pipelines.cloudMigration.duration',
    caseKey: 'pipelines.cloudMigration.case',
    caseResultKey: 'pipelines.cloudMigration.caseResult',
    color: 'from-blue-600 to-cyan-500',
    bgColor: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    id: 'devsecops',
    icon: Shield,
    titleKey: 'pipelines.devsecops.title',
    forWhoKey: 'pipelines.devsecops.forWho',
    inputKeys: [
      'pipelines.devsecops.input1',
      'pipelines.devsecops.input2',
      'pipelines.devsecops.input3',
      'pipelines.devsecops.input4',
    ],
    processKeys: [
      'pipelines.devsecops.process1',
      'pipelines.devsecops.process2',
      'pipelines.devsecops.process3',
      'pipelines.devsecops.process4',
    ],
    outputKeys: [
      'pipelines.devsecops.output1',
      'pipelines.devsecops.output2',
      'pipelines.devsecops.output3',
      'pipelines.devsecops.output4',
      'pipelines.devsecops.output5',
      'pipelines.devsecops.output6',
    ],
    techKey: 'pipelines.devsecops.tech',
    durationKey: 'pipelines.devsecops.duration',
    caseKey: 'pipelines.devsecops.case',
    caseResultKey: 'pipelines.devsecops.caseResult',
    color: 'from-red-600 to-orange-500',
    bgColor: 'from-red-500/10 to-orange-500/10',
  },
  {
    id: 'mlops',
    icon: Brain,
    titleKey: 'pipelines.mlops.title',
    forWhoKey: 'pipelines.mlops.forWho',
    inputKeys: [
      'pipelines.mlops.input1',
      'pipelines.mlops.input2',
      'pipelines.mlops.input3',
      'pipelines.mlops.input4',
    ],
    processKeys: [
      'pipelines.mlops.process1',
      'pipelines.mlops.process2',
      'pipelines.mlops.process3',
      'pipelines.mlops.process4',
    ],
    outputKeys: [
      'pipelines.mlops.output1',
      'pipelines.mlops.output2',
      'pipelines.mlops.output3',
      'pipelines.mlops.output4',
      'pipelines.mlops.output5',
      'pipelines.mlops.output6',
    ],
    techKey: 'pipelines.mlops.tech',
    durationKey: 'pipelines.mlops.duration',
    caseKey: 'pipelines.mlops.case',
    caseResultKey: 'pipelines.mlops.caseResult',
    color: 'from-purple-600 to-pink-500',
    bgColor: 'from-purple-500/10 to-pink-500/10',
  },
  {
    id: 'platform',
    icon: Layers,
    titleKey: 'pipelines.platform.title',
    forWhoKey: 'pipelines.platform.forWho',
    inputKeys: [
      'pipelines.platform.input1',
      'pipelines.platform.input2',
      'pipelines.platform.input3',
      'pipelines.platform.input4',
    ],
    processKeys: [
      'pipelines.platform.process1',
      'pipelines.platform.process2',
      'pipelines.platform.process3',
      'pipelines.platform.process4',
    ],
    outputKeys: [
      'pipelines.platform.output1',
      'pipelines.platform.output2',
      'pipelines.platform.output3',
      'pipelines.platform.output4',
      'pipelines.platform.output5',
      'pipelines.platform.output6',
    ],
    techKey: 'pipelines.platform.tech',
    durationKey: 'pipelines.platform.duration',
    caseKey: 'pipelines.platform.case',
    caseResultKey: 'pipelines.platform.caseResult',
    color: 'from-green-600 to-emerald-500',
    bgColor: 'from-green-500/10 to-emerald-500/10',
  },
  {
    id: 'sre',
    icon: Activity,
    titleKey: 'pipelines.sre.title',
    forWhoKey: 'pipelines.sre.forWho',
    inputKeys: [
      'pipelines.sre.input1',
      'pipelines.sre.input2',
      'pipelines.sre.input3',
      'pipelines.sre.input4',
    ],
    processKeys: [
      'pipelines.sre.process1',
      'pipelines.sre.process2',
      'pipelines.sre.process3',
      'pipelines.sre.process4',
    ],
    outputKeys: [
      'pipelines.sre.output1',
      'pipelines.sre.output2',
      'pipelines.sre.output3',
      'pipelines.sre.output4',
      'pipelines.sre.output5',
      'pipelines.sre.output6',
    ],
    techKey: 'pipelines.sre.tech',
    durationKey: 'pipelines.sre.duration',
    caseKey: 'pipelines.sre.case',
    caseResultKey: 'pipelines.sre.caseResult',
    color: 'from-orange-600 to-amber-500',
    bgColor: 'from-orange-500/10 to-amber-500/10',
  },
];

export default function TransformationPipelines() {
  const { t } = useLanguage();
  const [selectedPipeline, setSelectedPipeline] = useState<string | null>(null);

  return (
    <section id="pipelines" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Zap size={16} />
            <span>{t('pipelines.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            {t('pipelines.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('pipelines.subtitle')}
          </p>
        </div>

        {/* Pipeline Selector */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pipelines.map((pipeline) => {
            const Icon = pipeline.icon;
            const isSelected = selectedPipeline === pipeline.id;

            return (
              <button
                key={pipeline.id}
                onClick={() => setSelectedPipeline(isSelected ? null : pipeline.id)}
                className={`relative group text-left p-6 rounded-2xl transition-all duration-300 ${
                  isSelected
                    ? 'bg-white shadow-2xl border-2 border-blue-500 scale-105'
                    : 'bg-white/80 hover:bg-white hover:shadow-xl border-2 border-gray-200/50 hover:border-blue-300'
                }`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pipeline.bgColor} rounded-full blur-2xl -z-10 opacity-50`} />
                
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pipeline.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t(pipeline.titleKey)}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {t(pipeline.forWhoKey)}
                </p>

                <div className="flex items-center text-blue-600 font-semibold text-sm">
                  {isSelected ? t('pipelines.seeLess') : t('pipelines.seeMore')}
                  <ArrowRight size={16} className={`ml-2 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Pipeline Details */}
        {selectedPipeline && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 animate-fadeIn">
            {pipelines
              .filter((p) => p.id === selectedPipeline)
              .map((pipeline) => {
                const Icon = pipeline.icon;
                return (
                  <div key={pipeline.id}>
                    {/* Pipeline Header */}
                    <div className="flex items-center mb-8">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pipeline.color} flex items-center justify-center shadow-lg mr-4`}>
                        <Icon className="text-white" size={28} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">
                          {t(pipeline.titleKey)}
                        </h3>
                        <p className="text-gray-600 mt-1">{t(pipeline.forWhoKey)}</p>
                      </div>
                    </div>

                    {/* Pipeline Flow */}
                    <div className="grid lg:grid-cols-3 gap-8 mb-8">
                      {/* Input */}
                      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
                        <div className="flex items-center mb-4">
                          <Target className="text-red-600 mr-3" size={24} />
                          <h4 className="text-lg font-bold text-gray-900">{t('pipelines.input')}</h4>
                        </div>
                        <ul className="space-y-2">
                          {pipeline.inputKeys.map((key, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-700">
                              <span className="text-red-500 mr-2">✗</span>
                              <span>{t(key)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Process */}
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
                        <div className="flex items-center mb-4">
                          <Zap className="text-blue-600 mr-3" size={24} />
                          <h4 className="text-lg font-bold text-gray-900">{t('pipelines.process')}</h4>
                        </div>
                        <ul className="space-y-2">
                          {pipeline.processKeys.map((key, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-700">
                              <span className="text-blue-500 mr-2">→</span>
                              <span>{t(key)}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 pt-4 border-t border-blue-200">
                          <div className="flex items-center text-xs text-gray-600 mb-2">
                            <Clock size={14} className="mr-2" />
                            <span className="font-semibold">{t(pipeline.durationKey)}</span>
                          </div>
                          <p className="text-xs text-gray-500">{t(pipeline.techKey)}</p>
                        </div>
                      </div>

                      {/* Output */}
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                        <div className="flex items-center mb-4">
                          <CheckCircle className="text-green-600 mr-3" size={24} />
                          <h4 className="text-lg font-bold text-gray-900">{t('pipelines.output')}</h4>
                        </div>
                        <ul className="space-y-2">
                          {pipeline.outputKeys.map((key, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-700">
                              <span className="text-green-500 mr-2">✓</span>
                              <span>{t(key)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Case Study */}
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border-2 border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-2">{t('pipelines.caseStudy')}</h4>
                      <p className="text-sm text-gray-700 mb-1">{t(pipeline.caseKey)}</p>
                      <p className="text-sm text-blue-600 font-semibold">{t(pipeline.caseResultKey)}</p>
                    </div>

                    {/* CTA */}
                    <div className="mt-8 text-center">
                      <button
                        onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all inline-flex items-center"
                      >
                        {t('pipelines.cta')}
                        <ArrowRight className="ml-2" size={20} />
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        )}

        {/* Bottom CTA */}
        {!selectedPipeline && (
          <div className="text-center">
            <p className="text-gray-600 mb-6">{t('pipelines.selectPrompt')}</p>
            <button
              onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all inline-flex items-center"
            >
              {t('pipelines.ctaGeneric')}
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </section>
  );
}
