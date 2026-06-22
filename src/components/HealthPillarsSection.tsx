import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Activity, Apple, Brain, Dumbbell, Heart, Leaf,
  Moon, Shield, Sparkles, Sun, Wind, Zap, ArrowRight
} from 'lucide-react';

const pillars = [
  { icon: Activity, title: 'Equilíbrio Hormonal', description: 'Regulação dos hormônios para energia, humor e metabolismo saudáveis.' },
  { icon: Apple, title: 'Nutrição Saudável', description: 'Alimentação personalizada que nutre e fortalece seu organismo.' },
  { icon: Leaf, title: 'Saúde Digestiva', description: 'Cuidado do intestino, nossa segunda mente e base da imunidade.' },
  { icon: Shield, title: 'Controle do Estresse Oxidativo', description: 'Proteção celular contra o envelhecimento precoce.' },
  { icon: Heart, title: 'Controle da Inflamação', description: 'Redução da inflamação silenciosa, raiz de muitas doenças crônicas.' },
  { icon: Wind, title: 'Eliminação de Toxinas', description: 'Desintoxicação de poluentes e substâncias nocivas do ambiente.' },
  { icon: Brain, title: 'Saúde Mental e Emocional', description: 'Equilíbrio entre mente e corpo para uma vida mais plena.' },
  { icon: Zap, title: 'Saúde Mitocondrial', description: 'Otimização da energia celular, a fonte de toda vitalidade.' },
  { icon: Dumbbell, title: 'Exercício Físico', description: 'Movimento como medicina para corpo e mente.' },
  { icon: Sparkles, title: 'Equilíbrio Imunológico', description: 'Sistema imune forte e regulado, sua defesa natural.' },
  { icon: Sun, title: 'Espiritualidade', description: 'Conexão consigo mesmo e propósito de vida.' },
  { icon: Moon, title: 'Sono de Qualidade', description: 'Descanso restaurador para regeneração completa.' },
];

export function HealthPillarsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="pilares"
      className="texture-paper texture-paper-light section-padding relative overflow-hidden"
      ref={ref}
      style={{ background: 'hsl(var(--sand))' }}
    >
      {/* Central mandala decoration */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: 0.06 }}
      >
        <svg width="600" height="600" viewBox="0 0 400 400" fill="none" aria-hidden="true">
          <circle cx="200" cy="200" r="195" stroke="hsl(var(--charcoal))" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="160" stroke="hsl(var(--charcoal))" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="125" stroke="hsl(var(--charcoal))" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="90" stroke="hsl(var(--charcoal))" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="55" stroke="hsl(var(--charcoal))" strokeWidth="0.5" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(a => (
            <line key={a} x1="200" y1="5" x2="200" y2="395"
              stroke="hsl(var(--charcoal))" strokeWidth="0.4"
              transform={`rotate(${a} 200 200)`} />
          ))}
          {[0, 45, 90, 135, 180, 225, 270, 315].map(a => (
            <ellipse key={a} cx="200" cy="110" rx="22" ry="90"
              stroke="hsl(var(--charcoal))" strokeWidth="0.4"
              transform={`rotate(${a} 200 200)`} />
          ))}
        </svg>
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <span className="section-badge justify-center">Visão Integrativa</span>
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-medium mb-4"
            style={{ color: 'hsl(var(--charcoal))' }}
          >
            Pilares da Saúde Integral
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'hsl(var(--charcoal-mid))' }}
          >
            Uma visão completa, preventiva e personalizada da sua saúde
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div
                className="h-full p-5 md:p-6 rounded-2xl transition-all duration-300"
                style={{
                  background: 'hsl(0 0% 100% / 0.65)',
                  border: '1px solid hsl(var(--sand-mid))',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'hsl(0 0% 100% / 0.95)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-elevated)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'hsl(var(--gold) / 0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'hsl(0 0% 100% / 0.65)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'hsl(var(--sand-mid))';
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'hsl(var(--gold) / 0.1)' }}
                  >
                    <pillar.icon
                      className="w-6 h-6 md:w-7 md:h-7"
                      style={{ color: 'hsl(var(--gold))' }}
                    />
                  </div>
                  <h3
                    className="font-serif text-base md:text-[17px] font-medium mb-2 leading-tight"
                    style={{ color: 'hsl(var(--charcoal))' }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="text-xs md:text-sm leading-relaxed"
                    style={{ color: 'hsl(var(--charcoal-mid))' }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="https://wa.me/5513998010394"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-lg hover:gap-3 transition-all duration-300"
            style={{ color: 'hsl(var(--gold))' }}
          >
            Agende sua consulta e construa sua saúde de forma integral
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
