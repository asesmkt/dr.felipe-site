import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'Quanto tempo dura a consulta?',
    answer: 'A consulta inicial tem duração de 1h30 a 2h, permitindo uma avaliação completa da sua história de vida, exames, rotina, alimentação, atividade física e fatores emocionais.',
  },
  {
    question: 'Como faço para agendar uma consulta?',
    answer: 'O agendamento pode ser feito pelo WhatsApp. Basta clicar no botão de agendamento em qualquer lugar do site que você será direcionado para nossa equipe.',
  },
  {
    question: 'A consulta é coberta por convênio?',
    answer: 'Não atendemos convênios diretamente, mas emitimos nota fiscal para que você possa solicitar reembolso junto ao seu plano de saúde, caso tenha direito.',
  },
  {
    question: 'Preciso levar exames para a consulta?',
    answer: 'Sim, leve todos os exames que você tiver, mesmo os antigos. Eles ajudam a entender melhor sua história clínica e evolução.',
  },
  {
    question: 'O que é modulação hormonal?',
    answer: 'É o uso de hormônios bioidênticos para corrigir desequilíbrios hormonais de forma personalizada e segura, sempre baseado em evidências científicas e análise individual.',
  },
  {
    question: 'Como funciona o tratamento com Cannabis medicinal?',
    answer: 'A cannabis medicinal é indicada para condições específicas quando há evidência científica. Após avaliação criteriosa, se houver indicação, é feita a prescrição dentro dos protocolos legais.',
  },
  {
    question: 'Quais são as formas de pagamento?',
    answer: 'Aceitamos PIX, cartão de crédito e débito. O pagamento pode ser feito no dia da consulta ou antecipadamente.',
  },
  {
    question: 'A consulta online é tão completa quanto a presencial?',
    answer: 'Sim! A consulta por telemedicina segue o mesmo protocolo detalhado. A única diferença é a impossibilidade de realizar exame físico e bioimpedância.',
  },
  {
    question: 'Vocês atendem crianças e adolescentes?',
    answer: 'O atendimento é focado em adultos. Para crianças e adolescentes, recomendamos especialistas em endocrinologia pediátrica.',
  },
  {
    question: 'Onde fica a clínica?',
    answer: 'Os atendimentos presenciais são realizados na Clínica Harmony, na Rua Sinfrônio Costa, 935, Centro, Registro/SP (CEP 11900-000). Também atendemos por telemedicina para todo o Brasil.',
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="faq"
      className="texture-paper texture-paper-dark section-padding relative"
      ref={ref}
      style={{ background: 'hsl(var(--dark-bg))' }}
    >
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="section-badge-light justify-center">Dúvidas Frequentes</span>
          <h2
            className="font-serif text-3xl md:text-4xl font-medium"
            style={{ color: 'hsl(var(--dark-text))' }}
          >
            Perguntas e Respostas
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl px-6 border-none"
                style={{
                  background: 'hsl(var(--dark-surface))',
                  border: '1px solid hsl(var(--dark-border) / 0.8)',
                }}
              >
                <AccordionTrigger
                  className="text-left font-medium hover:no-underline py-5"
                  style={{ color: 'hsl(var(--dark-text))' }}
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent
                  className="pb-5"
                  style={{ color: 'hsl(var(--dark-muted))' }}
                >
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
