import { MessageCircleQuestionIcon } from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/accordion'

const data = [
  {
    question: 'O curso é adequado para iniciantes?',
    response:
      'Sim! O curso Smart CriptoTrader - Análise Técnica é projetado tanto para iniciantes quanto para aqueles que já operam no mercado cripto. Começamos do básico e avançamos até estratégias intermediárias, garantindo que todos possam acompanhar e poder tomar suas próprias decisões na hora de investir.',
  },
  {
    question: 'Para quem já opera no mercado, o que o curso oferece?',
    response:
      'Para traders que já têm experiência, o curso proporciona insights valiosos e técnicas avançadas de análise técnica. Você aprenderá a identificar padrões, tendências e oportunidades de negociação de forma mais eficaz, garantindo que todos possam acompanhar e poder tomar suas próprias decisões na hora de investir.',
  },
  {
    question: 'Quanto tempo o curso ficará disponível?',
    response:
      'O curso estará disponível por 1 ano, permitindo que você estude no seu próprio ritmo e revise o conteúdo sempre que precisar.',
  },
  {
    question: 'Quais são as opções de pagamento?',
    response:
      'Você pode efetuar o pagamento via PIX ou cartão de crédito e outras formas de pagamento pela plataforma Hotmart, garantindo uma experiência de compra segura e prática.',
  },
  {
    question: 'Quais são os benefícios de participar deste curso?',
    response:
      'Os participantes terão acesso a: Conteúdo Abrangente: Do básico ao intermediário, para atender a todos os níveis. Suporte: Suporte para dúvidas.',
  },
  {
    question: 'O curso inclui material de apoio?',
    response:
      'Sim! Além das videoaulas, você terá acesso a materiais complementares em pdf.',
  },
  {
    question: 'Como posso acessar o curso após a compra?',
    response:
      'Após a confirmação do pagamento, você receberá um link para acessar o curso diretamente na plataforma Hotmart. Todo o conteúdo estará disponível para você.',
  },
  {
    question: 'Qual o diferencial do Curso?',
    response:
      'As aulas são atuais e de acordo com as Narrativas do Mercado Cripto.',
  },
  {
    question:
      'Que tipo de conteúdo introdutório sobre criptoativos será abordado?',
    response:
      'O curso incluirá conceitos fundamentais sobre criptoativos, como o que são, como funcionam, e os principais tipos de criptomoedas. Também abordaremos tópicos como wallets, exchanges e segurança no mercado.',
  },
]

export const FrequentlyAskedQuestions = () => {
  return (
    <section className="bg-[#161616] pb-[50px]">
      <div className="mx-auto flex max-w-[1140px] flex-col gap-[10px_20px] pt-[60px]">
        <div className="mb-[10px] flex flex-col items-center justify-center gap-x-[15px] p-[10px] md:flex-row">
          <MessageCircleQuestionIcon className="size-[50px]" />
          <h2 className="text-[30px]/[1.3em] font-semibold text-[#f8f8f8] md:text-[40px]">
            Perguntas Frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible>
          {data.map(({ question, response }, index) => (
            <AccordionItem
              key={`${index}-${question}`}
              value={`${index}-${question}`}
            >
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{response}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="px-[10px] text-justify text-xs text-[#cccccc] md:text-sm lg:text-base">
          Aviso Importante: O curso Smart CriptoTrader é exclusivamente
          educacional e tem como objetivo fornecer informações sobre análise
          técnica e o mercado de criptoativos. Nenhuma das aulas e informações
          apresentadas deve ser interpretada como aconselhamento financeiro,
          recomendação de compra ou venda de qualquer criptoativo. Todos os
          exemplos e estratégias ensinados e compartilhados são para fins
          didáticos e podem não refletir as condições reais do mercado. Investir
          em criptoativos envolve riscos, e os participantes devem realizar suas
          próprias pesquisas e análises antes de tomar qualquer decisão de
          investimento.
        </p>
      </div>
    </section>
  )
}
