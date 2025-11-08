import { Cloud, Container, Database, Lock, Cpu, GitBranch, Server, Activity } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const technologies = [
  { icon: Cloud, name: 'AWS / Azure / GCP', category: 'Cloud Platforms' },
  { icon: Container, name: 'Docker / Kubernetes', category: 'Containerization' },
  { icon: Database, name: 'PostgreSQL / MongoDB', category: 'Databases' },
  { icon: Lock, name: 'Vault / Secrets Manager', category: 'Security' },
  { icon: Cpu, name: 'TensorFlow / PyTorch', category: 'Machine Learning' },
  { icon: GitBranch, name: 'GitHub / GitLab', category: 'Version Control' },
  { icon: Server, name: 'Terraform / Ansible', category: 'Infrastructure' },
  { icon: Activity, name: 'Prometheus / Grafana', category: 'Monitoring' },
];

export default function TechStack() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Cpu size={16} className="text-cyan-400" />
            <span>{t('techstack.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('techstack.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('techstack.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-cyan-400/50">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/50 transition-shadow">
                      <Icon className="text-white" size={32} />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-1">{tech.name}</div>
                      <div className="text-sm text-gray-400">{tech.category}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-3xl">
            <p className="text-gray-300 leading-relaxed">
              {t('techstack.description')}
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">15+</div>
                <div className="text-sm text-gray-400">{t('techstack.stats.certifications')}</div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">50+</div>
                <div className="text-sm text-gray-400">{t('techstack.stats.technologies')}</div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">100+</div>
                <div className="text-sm text-gray-400">{t('techstack.stats.projects')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
}
