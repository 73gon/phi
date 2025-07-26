import { useTranslation } from 'react-i18next';
import { FiSettings, FiCode, FiLayers, FiBookOpen, FiArrowRight } from 'react-icons/fi';
import SpotlightCard from '../components/ui/SpotlightCard';

export function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: FiSettings,
      title: t('services.ai_consulting'),
      description: t('services.ai_consulting_desc'),
      features: ['Strategy Development', 'Implementation Roadmap', 'ROI Analysis', 'Risk Assessment'],
      gradient: 'from-phi-primary-500 to-phi-accent-500',
    },
    {
      icon: FiCode,
      title: t('services.custom_development'),
      description: t('services.custom_development_desc'),
      features: ['Custom AI Models', 'API Development', 'Cloud Deployment', 'Performance Optimization'],
      gradient: 'from-phi-accent-500 to-phi-primary-500',
    },
    {
      icon: FiLayers,
      title: t('services.integration'),
      description: t('services.integration_desc'),
      features: ['Legacy System Integration', 'API Connections', 'Data Pipeline Setup', 'Monitoring & Alerts'],
      gradient: 'from-phi-primary-500 to-phi-accent-500',
    },
    {
      icon: FiBookOpen,
      title: t('services.training'),
      description: t('services.training_desc'),
      features: ['Workshops & Seminars', 'Hands-on Training', 'Certification Programs', 'Ongoing Support'],
      gradient: 'from-phi-accent-500 to-phi-primary-500',
    },
  ];

  return (
    <section id="services" className="relative py-32 bg-black/95 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-phi-primary-500/30 to-phi-accent-500/20 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full bg-gradient-to-tr from-phi-accent-500/25 to-phi-primary-500/10 blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-display font-bold mb-6 gradient-text">{t('services.title')}</h2>
            <p className="text-xl text-phi-neutral-600 dark:text-phi-neutral-300 max-w-3xl mx-auto leading-relaxed">{t('services.subtitle')}</p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <SpotlightCard className={`glass-card p-8 flex flex-col transition-transform hover:-translate-y-2 group relative`} key={index}>
                  <div
                    className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-phi-neutral-900 dark:text-white mb-2 gradient-text">{service.title}</h3>
                  <p className="text-phi-neutral-600 dark:text-phi-neutral-300 mb-4 text-base">{service.description}</p>
                  <ul className="list-none text-sm text-phi-neutral-500 dark:text-phi-neutral-400 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <FiArrowRight className="w-4 h-4 mr-2 text-phi-primary-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              );
            })}
          </div>

          {/* Process Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold gradient-text mb-4">Our Process</h3>
              <p className="text-lg text-phi-neutral-600 dark:text-phi-neutral-300 max-w-2xl mx-auto">We follow a proven methodology to ensure successful AI implementation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', description: 'Understanding your business needs and challenges' },
                { step: '02', title: 'Strategy', description: 'Developing a tailored AI strategy and roadmap' },
                { step: '03', title: 'Implementation', description: 'Building and deploying AI solutions' },
                { step: '04', title: 'Optimization', description: 'Continuous monitoring and improvement' },
              ].map((phase, index) => (
                <div key={index} className="text-center relative">
                  {/* Connection Line */}
                  {index < 3 && <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-phi-primary-500 to-phi-accent-500 opacity-30"></div>}

                  {/* Step Number */}
                  <div className="w-16 h-16 bg-gradient-to-r from-phi-primary-500 to-phi-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg">
                    {phase.step}
                  </div>

                  {/* Phase Content */}
                  <h4 className="text-xl font-semibold text-phi-neutral-900 dark:text-white mb-2 gradient-text">{phase.title}</h4>
                  <p className="text-sm text-phi-neutral-600 dark:text-phi-neutral-300">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
