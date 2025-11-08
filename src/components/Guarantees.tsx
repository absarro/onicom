import { Shield, Award, BookOpen, HeadphonesIcon, CheckCircle, Lock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const guarantees = [
  {
    icon: CheckCircle,
    titleKey: 'guarantees.guarantee1.title',
    descriptionKey: 'guarantees.guarantee1.description',
    color: 'from-green-600 to-emerald-500',
  },
  {
    icon: Award,
    titleKey: 'guarantees.guarantee2.title',
    descriptionKey: 'guarantees.guarantee2.description',
    color: 'from-blue-600 to-cyan-500',
  },
  {
    icon: BookOpen,
    titleKey: 'guarantees.guarantee3.title',
    descriptionKey: 'guarantees.guarantee3.description',
    color: 'from-purple-600 to-pink-500',
  },
  {
    icon: HeadphonesIcon,
    titleKey: 'guarantees.guarantee4.title',
    descriptionKey: 'guarantees.guarantee4.description',
    color: 'from-orange-600 to-amber-500',
  },
  {
    icon: Lock,
    titleKey: 'guarantees.guarantee5.title',
    descriptionKey: 'guarantees.guarantee5.description',
    color: 'from-red-600 to-orange-500',
  },
];

export default function Guarantees() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Shield size={16} />
            <span>{t('guarantees.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            {t('guarantees.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('guarantees.subtitle')}
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-gray-200/50 hover:border-blue-300 hover:shadow-xl transition-all p-6"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${guarantee.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={24} />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {t(guarantee.titleKey)}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(guarantee.descriptionKey)}
                </p>
              </div>
            );
          })}

          {/* Certifications Badge */}
          <div className="group bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 text-white shadow-2xl hover:shadow-blue-500/50 transition-all">
            <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/30">
              <Award className="text-white" size={24} />
            </div>

            <h3 className="text-lg font-bold mb-3">
              {t('guarantees.certifications.title')}
            </h3>

            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <CheckCircle size={16} className="mr-2 flex-shrink-0" />
                <span>{t('guarantees.certifications.cert1')}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="mr-2 flex-shrink-0" />
                <span>{t('guarantees.certifications.cert2')}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="mr-2 flex-shrink-0" />
                <span>{t('guarantees.certifications.cert3')}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="mr-2 flex-shrink-0" />
                <span>{t('guarantees.certifications.cert4')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Standards */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-blue-200 p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t('guarantees.techStandards.title')}
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                <h4 className="font-bold text-gray-900">{t('guarantees.techStandards.cloud')}</h4>
              </div>
              <p className="text-sm text-gray-600 ml-4">
                AWS, GCP, Azure, Terraform, Ansible
              </p>
            </div>

            <div>
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-2" />
                <h4 className="font-bold text-gray-900">{t('guarantees.techStandards.devsecops')}</h4>
              </div>
              <p className="text-sm text-gray-600 ml-4">
                GitLab/Jenkins, Vault, SonarQube, OWASP
              </p>
            </div>

            <div>
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-2" />
                <h4 className="font-bold text-gray-900">{t('guarantees.techStandards.mlops')}</h4>
              </div>
              <p className="text-sm text-gray-600 ml-4">
                MLflow, Kubeflow, Airflow, Feature Store
              </p>
            </div>

            <div>
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                <h4 className="font-bold text-gray-900">{t('guarantees.techStandards.platform')}</h4>
              </div>
              <p className="text-sm text-gray-600 ml-4">
                Kubernetes, Backstage, ArgoCD, Crossplane
              </p>
            </div>

            <div>
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-2" />
                <h4 className="font-bold text-gray-900">{t('guarantees.techStandards.sre')}</h4>
              </div>
              <p className="text-sm text-gray-600 ml-4">
                Prometheus, Grafana, Loki, OpenTelemetry
              </p>
            </div>

            <div>
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 bg-cyan-600 rounded-full mr-2" />
                <h4 className="font-bold text-gray-900">{t('guarantees.techStandards.methodologies')}</h4>
              </div>
              <p className="text-sm text-gray-600 ml-4">
                ISO 27001, GitOps, IaC, Agile/Scrum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
