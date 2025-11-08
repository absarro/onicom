import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              ONICOM
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">
                  Stratégie Digitale
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">
                  DevOps & FinOps
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">
                  MLOps
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">
                  DevSecOps
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">
                  Agilité & Transformation
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">
                  Veille Technologique
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Entreprise</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('case-studies')} className="text-gray-400 hover:text-white transition-colors">
                  Cas Clients
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('appointment')} className="text-gray-400 hover:text-white transition-colors">
                  Prendre RDV
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400">
                <div className="font-semibold text-white mb-1">Head Office</div>
                <div>66 Avenue des Champs-Élysées</div>
                <div>75008 Paris, France</div>
              </li>
              <li className="flex items-center text-gray-400 mt-4">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <a href="mailto:contact@onicom.io" className="hover:text-white transition-colors">
                  contact@onicom.io
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <button
                onClick={() => scrollToSection('appointment')}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all"
              >
                Prendre RDV
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Onicom. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Confidentialité
              </a>
              <a href="#" className="hover:text-white transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}