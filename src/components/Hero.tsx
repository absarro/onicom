import { useState, useEffect } from 'react';
import { ArrowRight, Shield, TrendingUp, Users, Sparkles, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const [counters, setCounters] = useState({ cost: 0, security: 0, clients: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        cost: Math.floor(20 * progress),
        security: Math.floor(4 * progress),
        clients: Math.floor(9 * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters({ cost: 20, security: 4, clients: 9 });
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNm0wIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02TTI0IDZjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZtMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9Ii41IiBvcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg">
              <Sparkles className="text-cyan-400" size={18} />
              <span>{t('hero.badge')}</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              {t('hero.title.main')}
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-gradient">
                {t('hero.title.highlight')}
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  {t('hero.cta.start')}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-cyan-400 transition-all"
              >
                {t('hero.cta.discover')}
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl border border-white/10 group-hover:scale-110 transition-transform">
                    <TrendingUp className="text-cyan-400" size={32} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{counters.cost}+</div>
                <div className="text-sm text-gray-400">{t('hero.stats.experience')}</div>
              </div>
              <div className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl border border-white/10 group-hover:scale-110 transition-transform">
                    <Shield className="text-blue-400" size={32} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{counters.security}</div>
                <div className="text-sm text-gray-400">{t('hero.stats.sectors')}</div>
              </div>
              <div className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl border border-white/10 group-hover:scale-110 transition-transform">
                    <Users className="text-cyan-400" size={32} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{counters.clients}+</div>
                <div className="text-sm text-gray-400">{t('hero.stats.projects')}</div>
              </div>
            </div>
          </div>

          <div className="relative lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-3xl opacity-30 animate-pulse" />

              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 space-y-4">
                <div className="flex items-center space-x-4 p-5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl border border-white/10 hover:scale-105 transition-transform">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Shield className="text-white" size={28} />
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{t('hero.card.devsecops')}</div>
                    <div className="text-sm text-gray-300">{t('hero.card.devsecopsSubtitle')}</div>
                  </div>
                  <Zap className="ml-auto text-cyan-400" size={24} />
                </div>

                <div className="flex items-center space-x-4 p-5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl border border-white/10 hover:scale-105 transition-transform">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="text-white" size={28} />
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{t('hero.card.devops')}</div>
                    <div className="text-sm text-gray-300">{t('hero.card.devopsSubtitle')}</div>
                  </div>
                  <Zap className="ml-auto text-blue-400" size={24} />
                </div>

                <div className="flex items-center space-x-4 p-5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl border border-white/10 hover:scale-105 transition-transform">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="text-white" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{t('hero.card.mlops')}</div>
                    <div className="text-sm text-gray-300">{t('hero.card.mlopsSubtitle')}</div>
                  </div>
                  <Zap className="ml-auto text-cyan-400" size={24} />
                </div>

                <div className="pt-4 flex justify-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300" />
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .delay-300 { animation-delay: 300ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-1000 { animation-delay: 1000ms; }
      `}</style>
    </section>
  );
}
