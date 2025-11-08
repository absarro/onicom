import { useState } from 'react';
import { Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase, Appointment as AppointmentType } from '../lib/supabase';
import { useLanguage } from '../contexts/LanguageContext';

const serviceKeys = [
  'services.strategy.title',
  'services.devops.title',
  'services.mlops.title',
  'services.devsecops.title',
  'services.agility.title',
  'services.techWatch.title'
];

export default function Appointment() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service_interest: '',
    preferred_date: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const appointmentData: AppointmentType = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        company: formData.company || undefined,
        service_interest: formData.service_interest,
        preferred_date: new Date(formData.preferred_date).toISOString(),
        message: formData.message || undefined
      };

      const { error } = await supabase
        .from('appointments')
        .insert([appointmentData]);

      if (error) throw error;

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service_interest: '',
        preferred_date: '',
        message: ''
      });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting appointment:', error);
      setStatus('error');
      setErrorMessage(t('appointment.error'));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split('T')[0];

  return (
    <section id="appointment" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            {t('appointment.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            {t('appointment.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('appointment.subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          {status === 'success' ? (
            <div className="text-center py-12">
              <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('appointment.success.title')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('appointment.success.message')}
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                {t('appointment.success.cta')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('appointment.form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('appointment.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="jean.dupont@entreprise.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('appointment.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('appointment.form.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label htmlFor="service_interest" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('appointment.form.service')} *
                  </label>
                  <select
                    id="service_interest"
                    name="service_interest"
                    required
                    value={formData.service_interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">{t('appointment.form.service')}</option>
                    {serviceKeys.map(serviceKey => (
                      <option key={serviceKey} value={t(serviceKey)}>{t(serviceKey)}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="preferred_date" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('appointment.form.date')} *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="preferred_date"
                      name="preferred_date"
                      required
                      min={minDateStr}
                      value={formData.preferred_date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    <Calendar className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={20} />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('appointment.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Décrivez brièvement votre projet ou vos besoins..."
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="text-red-500 mr-3 flex-shrink-0" size={20} />
                  <p className="text-red-700 text-sm">{errorMessage}</p>
                </div>
              )}

              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="mr-2" size={18} />
                  <span>{t('appointment.info.title')}</span>
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? t('appointment.form.submitting') : t('appointment.form.submit')}
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            Besoin d'aide ? Contactez-nous directement au{' '}
            <a href="tel:+33123456789" className="text-blue-600 hover:underline font-semibold">
              +33 1 23 45 67 89
            </a>
            {' '}ou par email{' '}
            <a href="mailto:contact@onicom.io" className="text-blue-600 hover:underline font-semibold">
              contact@onicom.io
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
