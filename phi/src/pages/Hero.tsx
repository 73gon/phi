import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import DarkVeil from '../components/ui/DarkVeil';
import TextType from '../components/ui/TextType';

export function Hero() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* DarkVeil Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <DarkVeil hueShift={-10} noiseIntensity={0.1} scanlineIntensity={0.12} speed={0.9} scanlineFrequency={12.0} warpAmount={0.08} resolutionScale={1} />
      </div>

      {/* Content */}
      <div className="relative">
        <motion.div className="container mx-auto px-6 py-32 text-center z-10" variants={containerVariants} initial="hidden" animate="visible">
          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="text-display font-black text-phi-neutral-900 dark:text-white mb-6 max-w-4xl mx-auto ">
            <TextType
              text={[t('hero.title1'), t('hero.title2'), t('hero.title3'), t('hero.title4')]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              textColors={['gradient-text', 'gradient-text', 'gradient-text']}
            />
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-xl text-phi-neutral-600 dark:text-phi-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          {/*
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <motion.button className="btn btn-primary px-8 py-4 text-base" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {t('hero.getStarted', 'Get Started')}
              <FiArrowRight className="ml-2" />
            </motion.button>

            <motion.button className="btn btn-secondary px-8 py-4 text-base" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <FiPlay className="mr-2" />
              {t('hero.watchDemo', 'Watch Demo')}
            </motion.button>
          </motion.div>
          */}

          {/* Trust Indicators */}
          {/*
          <motion.div variants={itemVariants} className="mb-16">
            <p className="text-sm text-phi-neutral-500 dark:text-phi-neutral-500 mb-8">{t('hero.trustedBy', 'Trusted by industry leaders')}</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['Microsoft', 'Google', 'Amazon', 'Tesla', 'Apple', 'Meta'].map((company) => (
                <motion.div key={company} className="text-lg font-semibold text-phi-neutral-400 dark:text-phi-neutral-600" whileHover={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
          */}

          {/* Feature Highlights */}

          {/* Feature Cards */}
          {/*
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: '⚡',
                title: t('hero.features.speed.title', 'Lightning Fast'),
                description: t('hero.features.speed.desc', 'Deploy AI solutions in minutes, not months'),
                gradient: 'from-phi-primary-500 to-phi-accent-500',
              },
              {
                icon: '🏢',
                title: t('hero.features.enterprise.title', 'Enterprise Ready'),
                description: t('hero.features.enterprise.desc', 'Built for scale with enterprise-grade security'),
                gradient: 'from-phi-accent-500 to-purple-500',
              },
              {
                icon: '🎯',
                title: t('hero.features.precision.title', 'Precision AI'),
                description: t('hero.features.precision.desc', 'Tailored solutions for your specific needs'),
                gradient: 'from-purple-500 to-phi-primary-500',
              },
            ].map((feature, index) => (
              <motion.div key={index} className="card group cursor-pointer" whileHover={{ y: -8 }} transition={{ duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] as const }}>
                <div className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-phi-neutral-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-phi-neutral-600 dark:text-phi-neutral-400 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          */}

          {/* Scroll Indicator */}
          <motion.div className="flex justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2, duration: 1 }}>
            <motion.div
              className="w-6 h-10 border-2 border-phi-neutral-400 dark:border-phi-neutral-600 rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div className="w-1 h-3 bg-phi-primary-500 rounded-full mt-2" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity }} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
