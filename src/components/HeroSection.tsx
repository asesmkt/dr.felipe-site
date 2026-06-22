import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Star } from 'lucide-react';
import { MandalaDecor } from './MandalaDecor';
import drFelipeHero from '@/assets/dr-felipe-hero.jpg';

const badges = [
  { icon: Shield, text: 'CRM-SP 240988' },
  { icon: Star, text: '5★ Avaliações' },
];

export function HeroSection() {
  return (
    <section
      className="texture-paper texture-paper-dark relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Mandala — large, cropped on right edge */}
      <div
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none"
        style={{ color: 'hsl(var(--gold))', opacity: 0.08 }}
      >
        <MandalaDecor className="w-full h-full animate-spin-slow" />
      </div>

      {/* Second mandala — smaller, top-left, cropped */}
      <div
        className="absolute -left-40 -top-40 w-[500px] h-[500px] pointer-events-none"
        style={{ color: 'hsl(var(--sand-dark))', opacity: 0.04 }}
      >
        <MandalaDecor className="w-full h-full" />
      </div>

      {/* Subtle gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 70% at 80% 50%, hsl(var(--gold) / 0.04) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, hsl(var(--dark-bg) / 0.6))',
        }}
      />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    background: 'hsl(var(--dark-surface))',
                    border: '1px solid hsl(var(--dark-border) / 0.8)',
                    color: 'hsl(var(--dark-muted))',
                  }}
                >
                  <badge.icon className="w-3.5 h-3.5" style={{ color: 'hsl(var(--gold))' }} />
                  {badge.text}
                </motion.div>
              ))}
            </div>

            <h1
              className="font-serif text-4xl md:text-5xl lg:text-[3.4rem] font-medium leading-[1.1] mb-6 text-balance"
              style={{ color: 'hsl(var(--dark-text))' }}
            >
              Cuidar da saúde não é sobre viver mais.{' '}
              <span className="text-gradient">É sobre viver melhor.</span>
            </h1>

            <p
              className="text-lg md:text-xl max-w-xl mb-8 leading-relaxed"
              style={{ color: 'hsl(var(--dark-muted))' }}
            >
              Endocrinologia e Medicina Preventiva com foco em saúde metabólica, longevidade e otimização hormonal como pilares de alta performance, controle de peso e emagrecimento sustentável.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://wa.me/5513998010394"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-base px-8 py-4 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Agende sua consulta
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <a href="#abordagem" className="btn-outline text-base px-8 py-4">
                Conheça a abordagem
              </a>
            </div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-10 pt-8"
              style={{ borderTop: '1px solid hsl(var(--dark-border) / 0.5)' }}
            >
              <p className="text-base md:text-lg" style={{ color: 'hsl(var(--dark-muted))' }}>
                <span className="font-semibold" style={{ color: 'hsl(var(--dark-text))' }}>
                  +1.500 pacientes
                </span>{' '}
                já transformaram sua saúde
              </p>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              {/* Decorative frame */}
              <div
                className="absolute -top-4 -right-4 w-full h-full rounded-3xl"
                style={{ border: '1.5px solid hsl(var(--gold) / 0.25)' }}
              />
              <div
                className="absolute -bottom-6 -left-6 w-40 h-40 rounded-3xl -z-10"
                style={{ background: 'hsl(var(--gold) / 0.06)' }}
              />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -right-4 md:right-0 top-[70%] z-10 rounded-2xl p-4 shadow-elevated"
                style={{
                  background: 'hsl(210 14% 14% / 0.95)',
                  border: '1px solid hsl(var(--dark-border) / 0.8)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="icon-container-dark">
                    <Shield className="w-5 h-5" style={{ color: 'hsl(var(--gold))' }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: 'hsl(var(--dark-text))' }}>
                      Endocrinologia
                    </p>
                    <p className="text-xs" style={{ color: 'hsl(var(--dark-muted))' }}>
                      CRM-SP 240988
                    </p>
                  </div>
                </div>
              </motion.div>

              <img
                alt="Dr. Felipe Mendonça - Médico Endocrinologista"
                className="relative w-full h-full object-cover object-top rounded-3xl"
                style={{ boxShadow: 'var(--shadow-elevated)' }}
                src={drFelipeHero}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
