import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export function ImpactBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--gradient-gold)' }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(0 0% 100% / 0.07) 1px, transparent 0)`,
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'hsl(0 0% 100% / 0.06)', transform: 'translate(-30%, -30%)' }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'hsl(0 0% 0% / 0.1)', transform: 'translate(20%, 20%)' }} />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-10 leading-tight text-balance"
            style={{ color: 'hsl(0 0% 100%)' }}
          >
            Quando você cuida de si, tudo ao seu redor se alinha e prospera.
          </h2>

          <motion.a
            href="https://wa.me/5513998010394"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-semibold text-base transition-all duration-300 group"
            style={{
              background: 'hsl(var(--dark-bg))',
              color: 'hsl(var(--dark-text))',
              boxShadow: 'var(--shadow-elevated)',
            }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Dar o primeiro passo
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
