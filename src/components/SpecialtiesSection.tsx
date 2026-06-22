import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Heart,
  User,
  Activity,
  Scale,
  Stethoscope,
  Pill,
  Cannabis,
  Syringe,
  Dna,
  Apple } from
'lucide-react';

const specialties = [
{
  icon: Heart,
  title: 'Saúde da Mulher',
  description: 'Avaliação nas diferentes fases da vida feminina: fertilidade, climatério, menopausa, distúrbios menstruais, TPM, endometriose e demais condições.'
},
{
  icon: User,
  title: 'Saúde do Homem',
  description: 'Investigação de desequilíbrios hormonais, perda de peso, fadiga, disfunção erétil, apneia e distúrbios do sono, resistência insulínica, performance e saúde sexual.'
},
{
  icon: Stethoscope,
  title: 'Endocrinologia Clínica',
  description: 'Diagnóstico e manejo de doenças endócrinas, incluindo hipotireoidismo, tireoidite de Hashimoto, síndrome metabólica, obesidade, diabetes e dislipidemias.'
},
{
  icon: Scale,
  title: 'Emagrecimento e Composição Corporal',
  description: 'Estratégias para redução de gordura, preservação de massa muscular e melhora do metabolismo, com ou sem terapias farmacológicas.'
},
{
  icon: Pill,
  title: 'Otimização Hormonal e Implantes Subcutâneos',
  description: 'Estratégias individualizadas de ajuste hormonal por vias orais, transdérmicas, injetáveis ou implantes.'
},
{
  icon: Activity,
  title: 'Saúde Intestinal e Microbioma',
  description: 'Investigação para melhora da saúde intestinal, síndrome do intestino irritável, inflamação intestinal e desequilíbrios do microbioma.'
},
{
  icon: Apple,
  title: 'Estratégia Nutricional e Suplementação',
  description: 'Direcionamento nutricional e uso de suplementos para otimização metabólica e suporte clínico.'
},
{
  icon: Cannabis,
  title: 'Cannabis Medicinal',
  description: 'Prescrição e acompanhamento do uso de canabinóides para condições específicas, com critério e segurança.'
},
{
  icon: Syringe,
  title: 'Vitaminas e Terapias Injetáveis',
  description: 'Correção de deficiências e suporte metabólico quando há indicação clínica.'
},
{
  icon: Dna,
  title: 'Mapeamentos Genéticos e Funcionais',
  description: 'Exames genéticos, análises do microbioma intestinal, vaginal e urinário, avaliações imunológicas e de metabolômica, quando indicado.'
}];


export function SpecialtiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="areas"
      className="texture-paper texture-paper-dark section-padding relative overflow-hidden"
      ref={ref}
      style={{ background: 'hsl(var(--dark-bg))' }}>

      {/* Mandala — top right, cropped, larger */}
      <div
        className="absolute top-0 right-0 w-[650px] h-[650px] pointer-events-none translate-x-1/4 -translate-y-1/4"
        style={{ color: 'hsl(var(--gold))', opacity: 0.07 }}>

        <svg viewBox="0 0 400 400" fill="none" aria-hidden="true" className="w-full h-full">
          <circle cx="200" cy="200" r="195" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="165" stroke="currentColor" strokeWidth="0.4" />
          <circle cx="200" cy="200" r="135" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="105" stroke="currentColor" strokeWidth="0.4" />
          <circle cx="200" cy="200" r="75" stroke="currentColor" strokeWidth="0.5" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) =>
          <line key={a} x1="200" y1="5" x2="200" y2="395"
          stroke="currentColor" strokeWidth="0.35"
          transform={`rotate(${a} 200 200)`} />
          )}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) =>
          <ellipse key={a} cx="200" cy="120" rx="20" ry="80"
          stroke="currentColor" strokeWidth="0.35"
          transform={`rotate(${a} 200 200)`} />
          )}
        </svg>
      </div>

      {/* Mandala — bottom left, smaller */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none -translate-x-1/3 translate-y-1/3"
        style={{ color: 'hsl(var(--gold))', opacity: 0.04 }}>

        <svg viewBox="0 0 400 400" fill="none" aria-hidden="true" className="w-full h-full">
          <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="0.5" />
          {[0, 60, 120, 180, 240, 300].map((a) =>
          <line key={a} x1="200" y1="10" x2="200" y2="390"
          stroke="currentColor" strokeWidth="0.4"
          transform={`rotate(${a} 200 200)`} />
          )}
        </svg>
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14">

          <span className="section-badge-light justify-start">Áreas de Atuação</span>

          <h2
            className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-medium mb-5"
            style={{ color: 'hsl(var(--dark-text))' }}>

            Para quem é a consulta?
          </h2>

          <p
            className="text-lg max-w-2xl leading-relaxed"
            style={{ color: 'hsl(var(--dark-muted))' }}>
            Para pessoas que buscam mais do que tratar sintomas, querem investigar a fundo, prevenir doenças e otimizar a saúde como um todo.


          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 auto-rows-fr">
          {specialties.map((specialty, index) =>
          <motion.div
            key={specialty.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative">

              <div
              className="h-full rounded-2xl p-6 transition-all duration-400 cursor-pointer"
              style={{
                background: hoveredIndex === index ?
                'var(--gradient-gold)' :
                'hsl(var(--dark-surface))',
                border: `1px solid ${hoveredIndex === index ?
                'transparent' :
                'hsl(var(--dark-border) / 0.8)'}`,
                transform: hoveredIndex === index ? 'translateY(-4px) scale(1.02)' : 'none',
                boxShadow: hoveredIndex === index ? 'var(--shadow-gold)' : 'none'
              }}>

                <specialty.icon
                className="w-6 h-6 mb-4 transition-all duration-300"
                style={{
                  color: hoveredIndex === index ? 'hsl(0 0% 100%)' : 'hsl(var(--gold))',
                  transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'
                }} />

                <h3
                className="font-serif text-base font-medium mb-2 leading-snug transition-colors duration-300"
                style={{
                  color: hoveredIndex === index ? 'hsl(0 0% 100%)' : 'hsl(var(--dark-text))'
                }}>

                  {specialty.title}
                </h3>

                {/* Description on hover */}
                <div
                className="overflow-hidden transition-all duration-500"
                style={{
                  maxHeight: hoveredIndex === index ? '12rem' : '0',
                  opacity: hoveredIndex === index ? 1 : 0
                }}>

                  <p
                  className="text-xs leading-relaxed mt-1"
                  style={{ color: 'hsl(0 0% 100% / 0.88)' }}>

                    {specialty.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}