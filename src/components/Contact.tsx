import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase, ContactMessage } from '../lib/supabase';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const contactData: ContactMessage = {
        name: formData.name,
        email: formData.email,
        company: formData.company || undefined,
        subject: formData.subject,
        message: formData.message
      };

      const { error } = await supabase
        .from('contact_messages')
        .insert([contactData]);

      if (error) throw error;

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting contact message:', error);
      setStatus('error');
      setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            {t('contact.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Parlons de votre projet
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Que vous ayez une question sur nos services, que vous souhaitiez discuter d'un projet
              ou simplement en savoir plus sur Onicom, nous sommes là pour vous aider.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900 mb-1">Email</div>
                  <a href="mailto:contact@onicom.io" className="text-gray-600 hover:text-blue-600 transition-colors">
                    contact@onicom.io
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900 mb-1">Head Office</div>
                  <p className="text-gray-600">
                    66 Avenue des Champs-Élysées<br />
                    75008 Paris, France
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-2">{t('contact.guarantee.title')}</h4>
              <p className="text-gray-600 text-sm">
                {t('contact.guarantee.text')}
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            {status === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('contact.success.title')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t('contact.success.message')}
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  {t('contact.success.cta')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="jean.dupont@entreprise.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="contact-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Comment pouvons-nous vous aider ?"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Décrivez votre besoin ou votre question..."
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="text-red-500 mr-3 flex-shrink-0" size={20} />
                    <p className="text-red-700 text-sm">{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-4 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {status === 'loading' ? 'Envoi en cours...' : (
                    <>
                      Envoyer le message
                      <Send className="ml-2" size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
