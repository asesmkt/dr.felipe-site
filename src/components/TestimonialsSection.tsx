import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Clara S.',
    text: 'Dr. Felipe mudou minha vida. Após anos lutando com problemas hormonais, finalmente encontrei um médico que ouviu minhas queixas e buscou a causa raiz.',
    rating: 5,
    highlight: 'Transformação real',
  },
  {
    name: 'João Pedro M.',
    text: 'Consulta extremamente detalhada. O Dr. Felipe dedicou tempo para entender minha rotina e criar um plano que realmente funciona para mim.',
    rating: 5,
    highlight: 'Atendimento diferenciado',
  },
  {
    name: 'Ana Beatriz L.',
    text: 'A abordagem integrativa fez toda diferença. Me sinto mais disposta, com energia e finalmente entendendo meu corpo.',
    rating: 5,
    highlight: 'Medicina integrativa',
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="depoimentos"
      className="texture-paper texture-paper-light section-padding relative overflow-hidden"
      ref={ref}
      style={{ background: 'hsl(var(--sand))' }}
    >
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <span className="section-badge justify-center">Depoimentos</span>
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-medium mb-6"
            style={{ color: 'hsl(var(--charcoal))' }}
          >
            O que dizem os pacientes
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'hsl(var(--charcoal-mid))' }}
          >
            Histórias reais de pessoas que transformaram sua saúde com a medicina pró-ativa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl p-8 transition-all duration-500 group"
              style={{
                background: 'hsl(0 0% 100% / 0.7)',
                border: '1px solid hsl(var(--sand-mid))',
                boxShadow: 'var(--shadow-card)',
              }}
              whileHover={{ y: -5, boxShadow: 'var(--shadow-elevated)' }}
            >
              {/* Quote icon */}
              <div
                className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'hsl(var(--gold) / 0.1)' }}
              >
                <Quote className="w-4 h-4" style={{ color: 'hsl(var(--gold))' }} />
              </div>

              {/* Highlight tag */}
              <span
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                style={{
                  background: 'hsl(var(--gold) / 0.1)',
                  color: 'hsl(var(--gold))',
                }}
              >
                {testimonial.highlight}
              </span>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'hsl(var(--gold))' }} />
                ))}
              </div>

              <p
                className="mb-6 leading-relaxed text-[15px]"
                style={{ color: 'hsl(var(--charcoal-mid))' }}
              >
                "{testimonial.text}"
              </p>

              <div
                className="flex items-center gap-3 pt-4"
                style={{ borderTop: '1px solid hsl(var(--sand-mid))' }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: 'hsl(var(--gold) / 0.12)' }}
                >
                  <span className="font-semibold" style={{ color: 'hsl(var(--gold))' }}>
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="font-semibold" style={{ color: 'hsl(var(--charcoal))' }}>
                  {testimonial.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/search?q=Dr+Felipe+Mendon%C3%A7a+endocrinologista+Registro+SP+avalia%C3%A7%C3%B5es"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all duration-300"
            style={{ color: 'hsl(var(--gold))' }}
          >
            Ver comentários no Google
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
