import { useState, useEffect, useRef } from 'react';
import CountryFlag from 'react-country-flag';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiGlobe, FiMenu, FiX } from 'react-icons/fi';
import GlassSurface from './ui/GlassSurface';

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) setIsDropdownOpen(false);
    }

    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsDropdownOpen(false);
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isDropdownOpen]);

  const navItems = [
    { key: 'home', label: t('nav.home', 'Home'), href: '#home' },
    { key: 'about', label: t('nav.about', 'About'), href: '#about' },
    { key: 'services', label: t('nav.services', 'Services'), href: '#services' },
    { key: 'products', label: t('nav.products', 'Products'), href: '#products' },
    { key: 'contact', label: t('nav.contact', 'Contact'), href: '#contact' },
  ];

  const languages = [
    { key: 'en', label: 'EN', icon: <CountryFlag countryCode="US" svg style={{ width: '1em', height: '1em', borderRadius: '0.375rem' }} /> },
    { key: 'de', label: 'DE', icon: <CountryFlag countryCode="DE" svg style={{ width: '1em', height: '1em', borderRadius: '0.375rem' }} /> },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  return (
    <>
      <motion.nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl mx-auto px-4" variants={navVariants} initial="hidden" animate="visible">
        <GlassSurface width="100%" height={64} borderRadius={50} backgroundOpacity={0.1} displace={5}>
          <div className="flex items-center justify-between h-full w-full">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="size-10 logo-bg rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">Φ</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-5">
              {navItems.map((item) => (
                <a key={item.key} href={item.href} className="text-white/80 hover:text-white font-medium relative group px-3 py-2 hover:-translate-y-0.5 transition-all duration-200">
                  {item.label}
                </a>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-3">
              {/* Language Selector - Desktop */}
              <motion.div
                className="hidden md:flex rounded-2xl bg-white/10 backdrop-blur-sm overflow-hidden"
                animate={{ width: isHovered ? 'auto' : '56px' }}
                transition={{ duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <div className="flex items-center">
                  {/* Globe Icon - Always visible */}
                  <div className="flex items-center justify-center size-12 flex-shrink-0 ml-1">
                    <FiGlobe className="size-5 text-white/80" />
                  </div>

                  {/* Language Options - Expand on hover */}
                  <motion.div
                    className="flex items-center overflow-hidden"
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      width: isHovered ? 'auto' : 0,
                    }}
                    transition={{ duration: 0.3, delay: isHovered ? 0.1 : 0 }}
                  >
                    <div className="flex items-center gap-1">
                      {languages.map((lang) => (
                        <motion.button
                          key={lang.key}
                          onClick={() => changeLanguage(lang.key)}
                          className={`px-3 py-2 rounded-2xl text-xs font-medium transition-all duration-300 flex items-center gap-2 relative cursor-pointer ${
                            i18n.language === lang.key ? 'bg-white/20 text-white shadow-md' : 'text-white/80 hover:text-white'
                          }`}
                          animate={{
                            opacity: 1,
                          }}
                        >
                          {/* Background for selected item */}
                          {i18n.language === lang.key && (
                            <motion.div className="absolute inset-0 bg-white/10 rounded-2xl" layoutId="selectedLangDesktop" transition={{ type: 'spring', stiffness: 300, damping: 30 }} />
                          )}

                          <motion.span
                            className="text-lg relative z-10 pb-1"
                            animate={{
                              scale: i18n.language === lang.key ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {lang.icon}
                          </motion.span>
                          <span className="relative z-10 whitespace-nowrap">{lang.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Language Selector - Mobile (Dropdown) */}
              <div className="relative md:hidden" ref={dropdownRef}>
                <button
                  className="p-2 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center gap-2 group backdrop-blur-sm cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                >
                  <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
                    <FiGlobe className="size-5 text-white/80 group-hover:text-white transition-colors duration-200" />
                  </motion.div>
                  <span className="text-xs font-medium text-white/80 group-hover:text-white uppercase">{i18n.language}</span>
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-200">
                {isMenuOpen ? <FiX className="w-5 h-5 text-white/80" /> : <FiMenu className="w-5 h-5 text-white/80" />}
              </button>
            </div>
          </div>
        </GlassSurface>
      </motion.nav>

      {/* Mobile Menu - Fixed Overlay Outside Navbar */}
      {isMenuOpen && (
        <motion.div className="fixed inset-0 z-[70] bg-black/60 md:hidden flex items-start justify-center" initial="closed" animate="open" variants={menuVariants} onClick={() => setIsMenuOpen(false)}>
          <button
            className="absolute top-8 right-8 z-[71] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 shadow-lg"
            aria-label="Close menu"
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(false);
            }}
          >
            <FiX className="w-6 h-6" />
          </button>
          <div className="w-full max-w-md mx-auto mt-24" onClick={(e) => e.stopPropagation()}>
            <div className="glass-card rounded-3xl shadow-2xl p-6 space-y-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  className="block py-4 px-6 text-xl font-bold text-white/90 hover:text-white rounded-2xl bg-gradient-to-r from-phi-primary-900/60 to-phi-accent-900/60 hover:from-phi-primary-700/80 hover:to-phi-accent-700/80 transition-all duration-200 shadow-md tracking-tight"
                  variants={itemVariants}
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 8, scale: 1.04 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Language Dropdown - Mobile Only - Completely Outside Navbar */}
      <motion.div
        className="fixed left-1/2 transform -translate-x-1/2 top-[76px] z-[60] md:hidden"
        initial={false}
        animate={isDropdownOpen ? 'open' : 'closed'}
        variants={{
          open: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: 'spring',
              stiffness: 300,
              damping: 25,
              duration: 0.3,
            },
          },
          closed: {
            opacity: 0,
            y: -10,
            scale: 0.95,
            transition: {
              duration: 0.2,
              ease: 'easeInOut',
            },
          },
        }}
        style={{ pointerEvents: isDropdownOpen ? 'auto' : 'none' }}
        onClick={(e) => e.stopPropagation()}
      >
        <GlassSurface width={180} height="auto" borderRadius={20} className="shadow-xl">
          <div className="p-2 w-full space-y-1">
            {languages.map((lang, index) => (
              <motion.button
                key={lang.key}
                onClick={(e) => {
                  e.stopPropagation();
                  changeLanguage(lang.key);
                  setIsDropdownOpen(false);
                }}
                className={`w-full text-left px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-3 relative overflow-hidden cursor-pointer ${
                  i18n.language === lang.key ? 'bg-white/20 text-white shadow-md' : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
                initial={false}
                animate={
                  isDropdownOpen
                    ? {
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: (index - 1) * 0.05,
                          duration: 0.3,
                          ease: [0.6, -0.05, 0.01, 0.99] as const,
                        },
                      }
                    : {
                        opacity: 0,
                        x: -20,
                        transition: {
                          delay: (languages.length - index - 1) * 0.02,
                          duration: 0.2,
                        },
                      }
                }
              >
                {/* Background for selected item */}
                {i18n.language === lang.key && (
                  <motion.div className="absolute inset-0 bg-white/10 rounded-lg" layoutId="selectedLangMobile" transition={{ type: 'spring', stiffness: 300, damping: 30 }} />
                )}

                <motion.span
                  className="text-xl relative z-10"
                  animate={{
                    scale: i18n.language === lang.key ? 1.1 : 1,
                    rotate: i18n.language === lang.key ? [0, -10, 10, 0] : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    rotate: { duration: 0.6, ease: 'easeInOut' },
                  }}
                >
                  {lang.icon}
                </motion.span>
                <span className="relative z-10">{lang.label}</span>
              </motion.button>
            ))}
          </div>
        </GlassSurface>
      </motion.div>
    </>
  );
}
