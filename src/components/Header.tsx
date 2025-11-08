import { Menu, X, Mail, Languages } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="/Blue_Logo_Design_Transparent_Background.png"
              alt="Onicom Logo"
              className="h-10 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('pipelines')} className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('nav.pipelines')}
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('nav.projects')}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('nav.contact')}
            </button>
            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              title={language === 'fr' ? 'Switch to English' : 'Passer en français'}
            >
              <Languages size={18} />
              <span className="text-sm font-semibold uppercase">{language === 'fr' ? 'EN' : 'FR'}</span>
            </button>
            <button
              onClick={() => scrollToSection('appointment')}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
            >
              {t('nav.appointment')}
            </button>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button onClick={() => scrollToSection('pipelines')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">
              {t('nav.pipelines')}
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">
              {t('nav.projects')}
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">
              {t('nav.contact')}
            </button>
            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="flex items-center gap-2 w-full text-left py-2 text-gray-700 hover:text-blue-600"
            >
              <Languages size={18} />
              <span>{language === 'fr' ? 'English' : 'Français'}</span>
            </button>
            <button
              onClick={() => scrollToSection('appointment')}
              className="block w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
            >
              {t('nav.appointment')}
            </button>
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <a href="mailto:contact@onicom.io" className="flex items-center text-sm text-gray-600 hover:text-blue-600">
                <Mail size={16} className="mr-2" />
                {t('header.email')}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
