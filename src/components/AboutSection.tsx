import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, GraduationCap } from 'lucide-react';
import drFelipeAbout from '@/assets/dr-felipe-about.jpg';

const qualificationGroups = [
  {
    group: 'Formação Médica',
    items: [
      'Médico pela Universidade Privada del Este',
      'Pós-graduação em Endocrinologia pela Afya',
    ],
  },
  {
    group: 'Aperfeiçoamento em Estratégias Metabólicas e Hormonais',
    items: [
      'Pós-graduação em Medicina Integrativa pela Academia Brasileira de Medicina Funcional Integrativa',
      'Curso de Extensão em Reposição Hormonal na Menopausa e Implantes Absorvíveis',
      'Curso de Extensão em Programação Metabólica pela Faculdade de Saúde Avançada',
      'Curso de Extensão em Nutrição Funcional pela Faculdade de Saúde Avançada',
    ],
  },
  {
    group: 'Formação Prévia',
    items: [
      'Graduação em Odontologia pela Universidade de Franca',
      'Atualização em Endodontia pela Universidade de Franca',
      'Especialização em Endodontia pela São Leopoldo Mandic – Brasília',
    ],
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="sobre"
      className="texture-paper texture-paper-light section-padding relative overflow-hidden"
      ref={ref}
      style={{ background: 'hsl(var(--sand))' }}
    >
      {/* Mandala — larger, left edge, cropped */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[700px] pointer-events-none -translate-x-1/2 flex items-center"
        style={{ opacity: 0.07 }}
      >
        <svg viewBox="0 0 400 400" fill="none" aria-hidden="true" className="w-full h-full">
          <circle cx="200" cy="200" r="195" stroke="hsl(var(--charcoal))" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="165" stroke="hsl(var(--charcoal))" strokeWidth="0.4" />
          <circle cx="200" cy="200" r="135" stroke="hsl(var(--charcoal))" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="105" stroke="hsl(var(--charcoal))" strokeWidth="0.4" />
          <circle cx="200" cy="200" r="75" stroke="hsl(var(--charcoal))" strokeWidth="0.5" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(a => (
            <line key={a} x1="200" y1="5" x2="200" y2="395"
              stroke="hsl(var(--charcoal))" strokeWidth="0.35"
              transform={`rotate(${a} 200 200)`} />
          ))}
          {[0, 45, 90, 135, 180, 225, 270, 315].map(a => (
            <ellipse key={a} cx="200" cy="120" rx="20" ry="80"
              stroke="hsl(var(--charcoal))" strokeWidth="0.35"
              transform={`rotate(${a} 200 200)`} />
          ))}
        </svg>
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              {/* Decorative frame */}
              <div
                className="absolute -bottom-5 -right-5 w-full h-full rounded-3xl"
                style={{ border: '1.5px solid hsl(var(--gold) / 0.25)' }}
              />
              <div
                className="absolute -top-5 -left-5 w-28 h-28 rounded-3xl -z-10"
                style={{ background: 'hsl(var(--gold) / 0.08)' }}
              />

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -left-4 md:left-0 bottom-1/4 z-10 rounded-2xl p-4"
                style={{
                  background: 'hsl(var(--charcoal))',
                  boxShadow: 'var(--shadow-elevated)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="icon-container-dark">
                    <GraduationCap className="w-5 h-5" style={{ color: 'hsl(var(--gold))' }} />
                  </div>
                  <div>
                    <p
                      className="font-semibold"
                      style={{ color: 'hsl(var(--dark-text))' }}
                    >
                      CRM-SP 240988
                    </p>
                    <p className="text-xs" style={{ color: 'hsl(var(--dark-muted))' }}>
                      Registro ativo
                    </p>
                  </div>
                </div>
              </motion.div>

              <img
                src={drFelipeAbout}
                alt="Dr. Felipe Mendonça"
                className="relative w-full h-full object-cover object-top rounded-3xl"
                style={{ boxShadow: 'var(--shadow-elevated)' }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-badge">Sobre</span>

            <h2
              className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-medium mb-6 leading-tight"
              style={{ color: 'hsl(var(--charcoal))' }}
            >
              Dr. Felipe Mendonça
            </h2>

            <p
              className="text-lg leading-relaxed mb-5"
              style={{ color: 'hsl(var(--charcoal-mid))' }}
            >
              Minha trajetória na Medicina começou com a convicção de que cuidar da saúde exige
              mais do que tratar diagnósticos isolados. Após uma formação inicial em Odontologia,
              aprofundei meu caminho com a certeza de que cada paciente precisa ser compreendido
              em sua singularidade biológica e no contexto da própria vida.
            </p>

            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: 'hsl(var(--charcoal-mid))' }}
            >
              Minha prática é preventiva e proativa, baseada em raciocínio clínico estruturado e
              decisões bem direcionadas. Mais do que aliviar sintomas, busco identificar causas,
              definir prioridades e conduzir estratégias que tragam consistência e resultado ao
              longo do tempo. Cada consulta é um espaço de análise, clareza e construção de
              responsabilidade sobre a própria saúde.
            </p>

            {/* Qualifications */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: 'hsl(0 0% 100% / 0.6)',
                border: '1px solid hsl(var(--sand-mid))',
              }}
            >
              <h3
                className="font-serif text-lg font-medium mb-5 flex items-center gap-2"
                style={{ color: 'hsl(var(--charcoal))' }}
              >
                <GraduationCap className="w-5 h-5" style={{ color: 'hsl(var(--gold))' }} />
                Formação e Especializações
              </h3>
              <div className="space-y-6">
                {qualificationGroups.map((group, groupIndex) => (
                  <div key={groupIndex}>
                    <p
                      className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-3"
                      style={{ color: 'hsl(var(--gold))' }}
                    >
                      {group.group}
                    </p>
                    <div className="space-y-2.5">
                      {group.items.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: 0.4 + (groupIndex * group.items.length + index) * 0.06,
                          }}
                          className="flex items-start gap-3"
                        >
                          <span
                            className="mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ background: 'hsl(var(--gold) / 0.12)' }}
                          >
                            <Check className="w-3 h-3" style={{ color: 'hsl(var(--gold))' }} />
                          </span>
                          <span
                            className="text-[14px] leading-snug"
                            style={{ color: 'hsl(var(--charcoal-mid))' }}
                          >
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
