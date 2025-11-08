import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { supabase, Testimonial } from '../lib/supabase';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data) setTestimonials(data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="testimonials" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-pulse text-gray-600">Chargement des témoignages...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star size={16} className="text-blue-600" />
            <span>Témoignages</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Ils Nous Font Confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez ce que nos clients disent de notre accompagnement et de nos résultats
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-200/50 hover:border-blue-300 hover:scale-105 duration-300"
            >
              <div className="mb-6">
                <Quote className="text-blue-600 opacity-50" size={40} />
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.client_name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900">
                      {testimonial.client_name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.client_role}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.client_company}
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {testimonial.service_category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Rejoignez nos clients satisfaits et transformez votre infrastructure digitale
          </p>
          <button
            onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
          >
            Commencer votre transformation
          </button>
        </div>
      </div>
    </section>
  );
}
