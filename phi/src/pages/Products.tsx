import { useTranslation } from 'react-i18next';
import { FiMessageSquare, FiBarChart, FiEye, FiType, FiArrowRight } from 'react-icons/fi';
import SpotlightCard from '../components/ui/SpotlightCard';

export function Products() {
  const { t } = useTranslation();

  const products = [
    {
      icon: FiMessageSquare,
      name: t('products.phi_assistant'),
      description: t('products.phi_assistant_desc'),
      features: ['Natural Language Processing', 'Task Automation', 'Smart Scheduling', 'Multi-language Support'],
      price: 'Starting at $29/month',
      gradient: 'from-phi-primary-500 to-phi-accent-500',
      popular: false,
    },
    {
      icon: FiBarChart,
      name: t('products.phi_analytics'),
      description: t('products.phi_analytics_desc'),
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Data Visualization'],
      price: 'Starting at $99/month',
      gradient: 'from-phi-accent-500 to-phi-primary-500',
      popular: true,
    },
    {
      icon: FiEye,
      name: t('products.phi_vision'),
      description: t('products.phi_vision_desc'),
      features: ['Image Recognition', 'Object Detection', 'Quality Control', 'Medical Imaging'],
      price: 'Starting at $199/month',
      gradient: 'from-phi-primary-500 to-phi-accent-500',
      popular: false,
    },
    {
      icon: FiType,
      name: t('products.phi_nlp'),
      description: t('products.phi_nlp_desc'),
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Content Generation'],
      price: 'Starting at $149/month',
      gradient: 'from-phi-accent-500 to-phi-primary-500',
      popular: false,
    },
  ];

  return (
    <section id="products" className="relative py-32 bg-black/95 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-phi-primary-500/30 to-phi-accent-500/20 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full bg-gradient-to-tr from-phi-accent-500/25 to-phi-primary-500/10 blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-display font-bold mb-6 gradient-text">{t('products.title')}</h2>
            <p className="text-xl text-phi-neutral-600 dark:text-phi-neutral-300 max-w-3xl mx-auto leading-relaxed">{t('products.subtitle')}</p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <SpotlightCard key={index} className={`glass-card p-8 flex flex-col transition-transform hover:-translate-y-2 group relative`}>
                  {product.popular && <span className="absolute top-4 right-4 bg-white/10 text-white px-3 py-1 rounded-full text-xs font-semibold">{t('products.popular')}</span>}
                  <div
                    className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${product.gradient} flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 gradient-text">{product.name}</h3>
                  <p className="text-base mb-4 text-phi-neutral-600 dark:text-phi-neutral-300 text-center">{product.description}</p>
                  <ul className="list-none mb-4 space-y-1 text-sm text-phi-neutral-500 dark:text-phi-neutral-400">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <FiArrowRight className="w-4 h-4 mr-2 text-phi-primary-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-semibold gradient-text">{product.price}</span>
                    <button className="flex items-center text-sm font-semibold btn btn-secondary px-4 py-2 rounded-lg text-white">
                      {t('products.learn_more')} <FiArrowRight className="ml-2" />
                    </button>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>

          {/* Integration Partners */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold gradient-text mb-8">Seamless Integration with Your Favorite Tools</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['Slack', 'Microsoft Teams', 'Salesforce', 'HubSpot', 'Zapier', 'AWS', 'Google Cloud', 'Azure'].map((partner) => (
                <div
                  key={partner}
                  className="text-phi-neutral-500 dark:text-phi-neutral-400 font-medium hover:text-phi-primary-600 dark:hover:text-phi-primary-400 transition-colors duration-200 cursor-pointer"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
