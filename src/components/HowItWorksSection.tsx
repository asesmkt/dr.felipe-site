import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, MessageCircle, MapPin, Video, Scan, ArrowRight, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Escuta e Compreensão',
    description: 'Consulta de aproximadamente 1h30 dedicada a entender sua história, seus sintomas, seus padrões e o que realmente precisa ser priorizado.',
  },
  {
    number: '02',
    title: 'Clareza e Direção',
    description: 'Organização das informações, definição de prioridades e orientação objetiva sobre os próximos passos.',
  },
  {
    number: '03',
    title: 'Evolução e Ajustes',
    description: 'Retorno em média após 60 dias para analisar resultados, corrigir rotas e fortalecer decisões sustentáveis.',
  },
];

const info = [
  { icon: MapPin, title: 'Presencial', description: 'Rua Sinfrônio Costa, 935 – Clínica Harmony, Registro/SP' },
  { icon: Video, title: 'Online', description: 'Telemedicina para todo Brasil' },
  { icon: Scan, title: 'Bioimpedância InBody', description: 'Para pacientes presenciais' },
  { icon: Clock, title: 'Duração', description: 'Em média 1h30 de consulta' },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="como-funciona"
      className="texture-paper texture-paper-dark section-padding relative overflow-hidden"
      ref={ref}
      style={{ background: 'hsl(var(--dark-bg))' }}
    >
      {/* Mandala — left, cropped, traversing into section */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[600px] pointer-events-none -translate-x-1/2 flex items-center"
        style={{ color: 'hsl(var(--gold))', opacity: 0.06 }}
      >
        <svg viewBox="0 0 400 400" fill="none" aria-hidden="true" className="w-full h-full">
          <circle cx="200" cy="200" r="195" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="165" stroke="currentColor" strokeWidth="0.4" />
          <circle cx="200" cy="200" r="135" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="105" stroke="currentColor" strokeWidth="0.4" />
          <circle cx="200" cy="200" r="75" stroke="currentColor" strokeWidth="0.5" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(a => (
            <line key={a} x1="200" y1="5" x2="200" y2="395"
              stroke="currentColor" strokeWidth="0.35"
              transform={`rotate(${a} 200 200)`} />
          ))}
          {[0, 60, 120, 180, 240, 300].map(a => (
            <ellipse key={a} cx="200" cy="120" rx="20" ry="80"
              stroke="currentColor" strokeWidth="0.35"
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
          <span className="section-badge-light justify-center">Como Funciona</span>
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-medium"
            style={{ color: 'hsl(var(--dark-text))' }}
          >
            Sua jornada para uma saúde melhor
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-12 left-[calc(50%+60px)] w-[calc(100%-120px)] h-px"
                  style={{ background: 'linear-gradient(90deg, hsl(var(--dark-border)), hsl(var(--gold) / 0.3), hsl(var(--dark-border)))' }}
                />
              )}

              <div
                className="rounded-2xl p-8 text-center h-full"
                style={{
                  background: 'hsl(var(--dark-surface))',
                  border: '1px solid hsl(var(--dark-border) / 0.8)',
                }}
              >
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5"
                  style={{ background: 'hsl(var(--gold) / 0.12)', border: '1px solid hsl(var(--gold) / 0.2)' }}
                >
                  <span
                    className="text-2xl font-serif font-semibold"
                    style={{ color: 'hsl(var(--gold))' }}
                  >
                    {step.number}
                  </span>
                </div>
                <h3
                  className="font-serif text-xl font-medium mb-3"
                  style={{ color: 'hsl(var(--dark-text))' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[15px] leading-relaxed"
                  style={{ color: 'hsl(var(--dark-muted))' }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl p-8 md:p-12"
          style={{
            background: 'hsl(var(--dark-surface))',
            border: '1px solid hsl(var(--dark-border) / 0.8)',
          }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {info.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="icon-container-dark flex-shrink-0">
                  <item.icon className="w-5 h-5" style={{ color: 'hsl(var(--gold))' }} />
                </div>
                <div>
                  <h4
                    className="font-semibold mb-1"
                    style={{ color: 'hsl(var(--dark-text))' }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-sm" style={{ color: 'hsl(var(--dark-muted))' }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className="text-center pt-8"
            style={{ borderTop: '1px solid hsl(var(--dark-border))' }}
          >
            <div
              className="flex items-start justify-center gap-2 mb-6"
              style={{ color: 'hsl(var(--dark-muted))' }}
            >
              <CheckCircle2
                className="w-5 h-5 flex-shrink-0 mt-0.5"
                style={{ color: 'hsl(var(--gold))' }}
              />
              <p className="text-[15px]">
                <span
                  className="font-semibold"
                  style={{ color: 'hsl(var(--dark-text))' }}
                >
                  Importante:
                </span>{' '}
                Atendimento exclusivamente particular, sem vínculo com convênios.
              </p>
            </div>

            <motion.a
              href="https://wa.me/5513998010394"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-base px-10 py-4 inline-flex"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              Agendar agora
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
