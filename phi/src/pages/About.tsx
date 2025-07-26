import { useTranslation } from 'react-i18next';
import { FiTarget, FiEye, FiHeart } from 'react-icons/fi';

export function About() {
  const { t } = useTranslation();

  const values = [
    {
      icon: FiTarget,
      title: t('about.innovation'),
      description: t('about.innovation_desc'),
      gradient: 'from-phi-primary-500 to-phi-accent-500',
    },
    {
      icon: FiHeart,
      title: t('about.ethics'),
      description: t('about.ethics_desc'),
      gradient: 'from-phi-accent-500 to-phi-primary-500',
    },
    {
      icon: FiEye,
      title: t('about.accessibility'),
      description: t('about.accessibility_desc'),
      gradient: 'from-phi-primary-500 to-phi-accent-500',
    },
  ];

  return (
    <section id="about" className="relative py-32 bg-black/95 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-phi-primary-500/30 to-phi-accent-500/20 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full bg-gradient-to-tr from-phi-accent-500/25 to-phi-primary-500/10 blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-display font-bold mb-6 gradient-text">{t('about.title')}</h2>
            <p className="text-xl text-phi-neutral-600 dark:text-phi-neutral-300 max-w-3xl mx-auto leading-relaxed">{t('about.description')}</p>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-phi-neutral-900 dark:text-white mb-4 gradient-text">{t('about.values_title')}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="glass-card p-8 flex flex-col items-center justify-center transition-transform hover:-translate-y-2 group">
                  <div
                    className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${value.gradient} flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-phi-neutral-900 dark:text-white mb-2 gradient-text">{value.title}</h3>
                  <p className="text-phi-neutral-600 dark:text-phi-neutral-300 text-base text-center">{value.description}</p>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'AI Models Deployed' },
              { number: '99.9%', label: 'Uptime Guarantee' },
              { number: '150+', label: 'Enterprise Clients' },
              { number: '24/7', label: 'Expert Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-base text-phi-neutral-500 dark:text-phi-neutral-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
