import { useState, useEffect } from 'react';
import { ChevronRight, TrendingUp, Target, Award } from 'lucide-react';
import { supabase, CaseStudy } from '../lib/supabase';
import { useLanguage } from '../contexts/LanguageContext';

export default function CaseStudies() {
  const { t } = useLanguage();
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data) {
        setCaseStudies(data);
        if (data.length > 0) setSelectedCase(data[0]);
      }
    } catch (error) {
      console.error('Error fetching case studies:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="case-studies" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-pulse text-gray-600">{t('casestudies.loading')}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="case-studies" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{t('casestudies.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            {t('casestudies.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('casestudies.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            {caseStudies.map((caseStudy) => (
              <button
                key={caseStudy.id}
                onClick={() => setSelectedCase(caseStudy)}
                className={`w-full text-left p-6 rounded-xl transition-all ${
                  selectedCase?.id === caseStudy.id
                    ? 'bg-white shadow-lg border-2 border-blue-500'
                    : 'bg-white/50 hover:bg-white hover:shadow-md border-2 border-transparent'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-blue-600 mb-1">
                      {caseStudy.industry}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {caseStudy.client_name}
                    </h3>
                    <div className="text-sm text-gray-600">
                      {caseStudy.service_category}
                    </div>
                  </div>
                  <ChevronRight
                    className={`text-blue-600 flex-shrink-0 transition-transform ${
                      selectedCase?.id === caseStudy.id ? 'rotate-90' : ''
                    }`}
                    size={20}
                  />
                </div>
              </button>
            ))}
          </div>

          {selectedCase && (
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <div className="mb-6">
                <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  {selectedCase.service_category}
                </span>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedCase.title}
                </h3>
                <div className="text-lg text-gray-600">
                  {selectedCase.client_name} • {selectedCase.industry}
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center mb-3">
                    <Target className="text-red-600 mr-3" size={24} />
                    <h4 className="text-xl font-bold text-gray-900">{t('casestudies.challenge')}</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed pl-9">
                    {selectedCase.challenge}
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-3">
                    <Award className="text-blue-600 mr-3" size={24} />
                    <h4 className="text-xl font-bold text-gray-900">{t('casestudies.solution')}</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed pl-9">
                    {selectedCase.solution}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="text-green-600 mr-3" size={24} />
                    <h4 className="text-xl font-bold text-gray-900">{t('casestudies.results')}</h4>
                  </div>
                  <p className="text-gray-700 font-semibold leading-relaxed pl-9">
                    {selectedCase.results}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <button
                  onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                >
                  {t('casestudies.cta')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
