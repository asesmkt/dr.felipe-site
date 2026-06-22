import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Abordagem', href: '#abordagem' },
  { label: 'Especialidades', href: '#areas' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 shadow-elevated'
          : 'py-5'
      }`}
      style={{
        background: isScrolled
          ? 'hsl(210 14% 11% / 0.96)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid hsl(210 10% 22% / 0.6)' : 'none',
      }}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col group">
            <span
              className="font-serif text-xl md:text-2xl font-semibold transition-colors"
              style={{ color: 'hsl(var(--dark-text))' }}
            >
              Dr. Felipe Mendonça
            </span>
            <span
              className="text-[10px] tracking-[0.22em] uppercase"
              style={{ color: 'hsl(var(--gold) / 0.8)' }}
            >
              ENDOCRINOLOGIA • MEDICINA PREVENTIVA
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors duration-300 link-underline"
                style={{ color: 'hsl(var(--dark-text) / 0.75)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'hsl(var(--dark-text))')}
                onMouseLeave={e => (e.currentTarget.style.color = 'hsl(var(--dark-text) / 0.75)')}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.a
              href="https://wa.me/5513998010394"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="w-4 h-4" />
              Agendar Consulta
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl transition-colors"
            style={{ color: 'hsl(var(--dark-text))' }}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'hsl(210 14% 11% / 0.98)',
              borderTop: '1px solid hsl(210 10% 22% / 0.6)',
            }}
          >
            <div className="container-wide py-6 flex flex-col gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-base font-medium py-3 px-4 rounded-xl transition-all"
                  style={{ color: 'hsl(var(--dark-text) / 0.8)' }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="https://wa.me/5513998010394"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="btn-gold text-sm mt-4 w-full justify-center"
              >
                <Calendar className="w-4 h-4" />
                Agendar Consulta
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
