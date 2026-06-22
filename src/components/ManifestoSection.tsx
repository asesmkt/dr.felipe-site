import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MandalaDecor } from './MandalaDecor';

export function ManifestoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      className="texture-paper texture-paper-dark section-padding relative overflow-hidden"
      ref={ref}
      style={{ background: 'hsl(var(--dark-bg))' }}
    >
      {/* Mandala — large centered */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{ color: 'hsl(var(--gold))', opacity: 0.07 }}
      >
        <MandalaDecor className="w-full h-full" />
      </div>

      <div className="container-narrow text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex justify-center mb-8">
            <div className="decorative-line" />
          </div>

          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-8 leading-tight text-balance"
            style={{ color: 'hsl(var(--dark-text))' }}
          >
            A sua saúde é uma jornada contínua de{' '}
            <span className="text-gradient">escolhas conscientes</span>
          </h2>

          <p
            className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            style={{ color: 'hsl(var(--dark-muted))' }}
          >
            Meu propósito é guiar você na jornada do autoconhecimento físico, mental e emocional,
            ajudando a construir uma relação mais equilibrada e consciente com a sua saúde.
            Quero que você conquiste autonomia para fazer escolhas alinhadas ao seu bem-estar,
            cultivando um estilo de vida leve, sustentável e transformador.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
