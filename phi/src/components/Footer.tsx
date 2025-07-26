import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiTwitter, FiLinkedin, FiGithub, FiMail, FiArrowUp } from 'react-icons/fi';

export function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.products'), href: '#products' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const productLinks = [
    { name: t('products.phi_assistant'), href: '#' },
    { name: t('products.phi_analytics'), href: '#' },
    { name: t('products.phi_vision'), href: '#' },
    { name: t('products.phi_nlp'), href: '#' },
  ];

  const socialLinks = [
    { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FiMail, href: 'mailto:hello@phi.ai', label: 'Email' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black to-black/95 text-white overflow-hidden py-2">
      {/* Animated Gradient Background */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-phi-primary-500/30 to-phi-accent-500/20 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full bg-gradient-to-tr from-phi-accent-500/25 to-phi-primary-500/10 blur-3xl -z-10" />

      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-phi-primary-500 to-phi-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Φ</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-phi-primary-400 to-phi-accent-400 bg-clip-text text-transparent">Phi</span>
            </div>
            <p className="text-phi-neutral-300 mb-6 leading-relaxed">{t('footer.company_desc')}</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-phi-neutral-800 hover:bg-gradient-to-r hover:from-phi-primary-500 hover:to-phi-accent-500 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 gradient-text">{t('footer.quick_links')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-phi-neutral-300 hover:text-phi-primary-400 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 gradient-text">{t('footer.products_services')}</h3>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-phi-neutral-300 hover:text-phi-primary-400 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6 gradient-text">{t('footer.newsletter_title')}</h3>
            <p className="text-phi-neutral-300 mb-4 text-sm">{t('footer.newsletter_desc')}</p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder={t('footer.email_placeholder')}
                className="w-full px-4 py-3 rounded-lg bg-black/10 dark:bg-white/5 border border-phi-neutral-200 dark:border-phi-neutral-700 focus:ring-2 focus:ring-phi-primary-500 outline-none text-phi-neutral-900 dark:text-white"
              />
              <button type="submit" className="btn btn-primary w-full flex items-center justify-center gap-2 px-8 py-3 text-base font-semibold">
                {t('footer.subscribe')}
                <FiMail className="ml-2" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-phi-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-phi-neutral-400 text-sm mb-4 md:mb-0">{t('footer.copyright')}</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-phi-neutral-400 hover:text-phi-primary-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-phi-neutral-400 hover:text-phi-primary-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-phi-neutral-400 hover:text-phi-primary-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
