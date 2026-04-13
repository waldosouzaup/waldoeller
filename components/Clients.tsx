import React from 'react';
import { translations } from '../translations';

interface ClientsProps {
  lang: 'pt' | 'en';
}

const Clients: React.FC<ClientsProps> = ({ lang }) => {
  const t = translations[lang].clients;

  const problems = [
    {
      icon: "📅",
      problem: lang === 'pt' ? "Agenda no WhatsApp" : "WhatsApp scheduling",
      description: lang === 'pt' 
        ? "Você perde clientes porque não consegue gerenciar agenda, orçamentos e follow-ups no WhatsApp?" 
        : "You lose customers because you can't manage schedules, quotes, and follow-ups on WhatsApp?"
    },
    {
      icon: "📊", 
      problem: lang === 'pt' ? "Falta de controle" : "Lack of control",
      description: lang === 'pt'
        ? "Não sabe quanto fatura, quanto deve, nem onde perde dinheiro no mês?"
        : "You don't know how much you earn, how much you owe, or where you lose money?"
    },
    {
      icon: "😤",
      problem: lang === 'pt' ? "Perda de faturamento" : "Lost revenue", 
      description: lang === 'pt'
        ? "Clientes esquecem do agendamento, orçamento expira, e você perde venda sem perceber?"
        : "Customers forget appointments, quotes expire, and you lose sales without noticing?"
    }
  ];

  const solutions = [
    {
      icon: "⚙️",
      title: lang === 'pt' ? "Sistemas simples" : "Simple systems",
      description: lang === 'pt'
        ? "Organização que funciona sem complicação, sem mensalidade cara."
        : "Organization that works without complication, without expensive monthly fees."
    },
    {
      icon: "🤖",
      title: lang === 'pt' ? "Automação" : "Automation", 
      description: lang === 'pt'
        ? "Clientes lembrados automaticamente. Nada caindo no esquecimento."
        : "Customers automatically reminded. Nothing falling through the cracks."
    },
    {
      icon: "📈",
      title: lang === 'pt' ? "Visão de dados" : "Data vision",
      description: lang === 'pt'
        ? "Veja claramente onde você ganha e perde dinheiro. Decisões baseadas em dados."
        : "Clearly see where you make and lose money. Decisions based on data."
    }
  ];

  const whatsappNumber = "5531988447394";
  const message = encodeURIComponent(
    lang === 'pt'
      ? "Olá Waldo, quero melhorar meu negócio. Pode me ajudar?"
      : "Hi Waldo, I want to improve my business. Can you help me?"
  );

  return (
    <section id="clientes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
            {lang === 'pt' ? ' PARA PEQUENOS NEGÓCIOS ' : ' FOR SMALL BUSINESSES '}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {lang === 'pt' ? 'Você perde clientes por falta de organização?' : 'Do you lose customers due to lack of organization?'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {lang === 'pt'
              ? 'A maioria dos pequenos negócios tem potencial de crescer 30% só com os processos corretos. O problema não é falta de clientes — é falta de sistema.'
              : 'Most small businesses have potential to grow 30% just with the right processes. The problem is not lack of customers — it is lack of system.'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.problem}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {lang === 'pt' ? 'A solução:' : 'The solution:'}
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {solutions.map((item, idx) => (
            <div key={idx} className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-white font-bold py-4 px-10 rounded-xl hover:bg-blue-700 transition-colors text-lg shadow-lg shadow-blue-200"
          >
            <span>👉</span>
            {lang === 'pt' ? 'Ver como posso te ajudar' : 'See how I can help you'}
          </a>
          <p className="mt-4 text-sm text-gray-500">
            {lang === 'pt' 
              ? 'Resposta em até 24h. Sem compromisso.' 
              : 'Response within 24h. No commitment.'
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;