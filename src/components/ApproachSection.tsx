import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Dna, Leaf, Microscope, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Análise Profunda',
    description: 'Investigação criteriosa para compreender além do sintoma.',
  },
  {
    icon: Dna,
    title: 'Conduta Direcionada',
    description: 'Decisões ajustadas ao seu momento, prioridades e objetivos.',
  },
  {
    icon: Leaf,
    title: 'Visão Sistêmica',
    description: 'Interpretação ampla dos fatores que influenciam sua saúde.',
  },
  {
    icon: Microscope,
    title: 'Ação Preventiva',
    description: 'Atuação antecipada para reduzir riscos e preservar qualidade de vida.',
  },
];

export function ApproachSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="abordagem"
      className="texture-paper texture-paper-light section-padding relative overflow-hidden"
      ref={ref}
      style={{ background: 'hsl(var(--sand))' }}
    >
      {/* Mandala — large, cropped right edge, traversing section */}
      <div
        className="absolute -right-40 top-0 bottom-0 w-[700px] pointer-events-none flex items-center"
        style={{ opacity: 0.07 }}
      >
        <svg viewBox="0 0 400 400" fill="none" aria-hidden="true" className="w-full h-full">
          <circle cx="200" cy="200" r="195" stroke="hsl(var(--charcoal))" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="165" stroke="hsl(var(--charcoal))" strokeWidth="0.4" />
          <circle cx="200" cy="200" r="135" stroke="hsl(var(--charcoal))" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="105" stroke="hsl(var(--charcoal))" strokeWidth="0.4" />
          <circle cx="200" cy="200" r="75" stroke="hsl(var(--charcoal))" strokeWidth="0.5" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
            <line key={angle} x1="200" y1="5" x2="200" y2="395"
              stroke="hsl(var(--charcoal))" strokeWidth="0.35"
              transform={`rotate(${angle} 200 200)`} />
          ))}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <ellipse key={angle} cx="200" cy="120" rx="20" ry="80"
              stroke="hsl(var(--charcoal))" strokeWidth="0.35"
              transform={`rotate(${angle} 200 200)`} />
          ))}
        </svg>
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-badge" style={{ color: 'hsl(var(--gold))' }}>
              ABORDAGEM PROATIVA
            </span>

            <h2
              className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-medium mb-6 leading-tight"
              style={{ color: 'hsl(var(--charcoal))' }}
            >
              Como a medicina integrativa pode transformar sua vida?
            </h2>

            <p
              className="text-lg leading-relaxed mb-5"
              style={{ color: 'hsl(var(--charcoal-mid))' }}
            >
              Saúde exige decisão, não apenas intervenção. Com clareza, direcionamento e
              responsabilidade compartilhada, o cuidado ganha consistência.
            </p>

            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: 'hsl(var(--charcoal-mid))' }}
            >
              Mais do que tratar sintomas, trata-se de compreender quem você deseja se tornar
              a partir das escolhas assumidas hoje.
            </p>

            <a
              href="https://wa.me/5513998010394"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all duration-300"
              style={{ color: 'hsl(var(--gold))' }}
            >
              Agende sua consulta
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl p-7 transition-all duration-400 cursor-default"
                style={{
                  background: 'hsl(0 0% 100% / 0.7)',
                  border: '1px solid hsl(var(--sand-mid))',
                  boxShadow: 'var(--shadow-card)',
                }}
                whileHover={{
                  y: -5,
                  boxShadow: 'var(--shadow-elevated)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'hsl(var(--gold) / 0.1)' }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: 'hsl(var(--gold))' }} />
                </div>
                <h3
                  className="font-serif text-xl font-medium mb-2"
                  style={{ color: 'hsl(var(--charcoal))' }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--charcoal-mid))' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
