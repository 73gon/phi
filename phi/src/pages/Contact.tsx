import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: t('contact.email'),
      value: 'hello@phi.ai',
      link: 'mailto:hello@phi.ai',
    },
    {
      icon: FiPhone,
      title: t('contact.phone'),
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: FiMapPin,
      title: t('contact.address'),
      value: 'San Francisco, CA',
      link: 'https://maps.google.com',
    },
  ];

  return (
    <section id="contact" className="relative py-32 bg-black/95 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-phi-primary-500/30 to-phi-accent-500/20 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full bg-gradient-to-tr from-phi-accent-500/25 to-phi-primary-500/10 blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-display font-bold mb-6 gradient-text">{t('contact.title')}</h2>
            <p className="text-xl text-phi-neutral-600 dark:text-phi-neutral-300 max-w-3xl mx-auto leading-relaxed">{t('contact.subtitle')}</p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, idx) => {
              const IconComponent = info.icon;
              return (
                <a
                  key={idx}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-8 flex flex-col items-center justify-center transition-transform hover:-translate-y-2 group"
                >
                  <div className="w-14 h-14 mb-4 rounded-2xl bg-gradient-to-r from-phi-primary-500 to-phi-accent-500 flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-phi-neutral-900 dark:text-white mb-2 gradient-text">{info.title}</h3>
                  <p className="text-phi-neutral-600 dark:text-phi-neutral-300 text-base text-center">{info.value}</p>
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-3">
              <form className="glass-card p-8 flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-base font-medium text-phi-neutral-700 dark:text-phi-neutral-200 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/10 dark:bg-white/5 border border-phi-neutral-200 dark:border-phi-neutral-700 focus:ring-2 focus:ring-phi-primary-500 outline-none text-phi-neutral-900 dark:text-white"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-base font-medium text-phi-neutral-700 dark:text-phi-neutral-200 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/10 dark:bg-white/5 border border-phi-neutral-200 dark:border-phi-neutral-700 focus:ring-2 focus:ring-phi-primary-500 outline-none text-phi-neutral-900 dark:text-white"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-base font-medium text-phi-neutral-700 dark:text-phi-neutral-200 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/10 dark:bg-white/5 border border-phi-neutral-200 dark:border-phi-neutral-700 focus:ring-2 focus:ring-phi-primary-500 outline-none text-phi-neutral-900 dark:text-white"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold">
                  {t('contact.form.send')}
                  <FiSend className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
