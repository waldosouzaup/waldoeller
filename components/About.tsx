
import React from 'react';

const About: React.FC = () => {
  const profileImageUrl = "https://pmartinsimob.com.br/wp-content/uploads/2025/12/waldo-terno-preto_baixa.png?auto=format&fit=crop&q=80&w=800";

  return (
    <section id="sobre" className="py-32 bg-[#0F0F0F] scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="relative z-10 rounded-3xl overflow-hidden border border-white/5 shadow-2xl aspect-square">
                <img 
                  src={profileImageUrl} 
                  alt="Waldo Eller Profissional" 
                  className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700"
                />
             </div>
            
            {/* Elemento decorativo Dourado */}
            <div className="absolute -bottom-10 -right-10 bg-accent text-black p-10 rounded-[2.5rem] hidden lg:block shadow-2xl z-20 border-8 border-[#0F0F0F]">
              <span className="text-6xl font-black block tracking-tighter">10+</span>
              <span className="text-[10px] font-black uppercase tracking-widest">Projetos Ativos</span>
            </div>
            
            {/* Círculo de background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent opacity-[0.03] blur-[100px] rounded-full -z-10"></div>
          </div>
          
          <div>
            <div className="relative mb-12">
              <span className="text-accent font-black tracking-[0.4em] uppercase text-xs block mb-4">Trajetória</span>
              <h2 className="text-5xl md:text-7xl font-black mb-4">Sobre Mim</h2>
              <div className="w-24 h-2 bg-accent"></div>
            </div>
            
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light italic border-l-4 border-accent pl-8 py-2">
                Waldo Eller é um especialista que une performance técnica e inteligência de negócios. Com sólida experiência em análise de dados e desenvolvimento web, atua na vanguarda das soluções orientadas a resultados.
              </p>

              <p className="text-white/40 leading-relaxed text-lg">
                 Busco constante aprimoramento e estou aberto a novas oportunidades e projetos inovadores nas áreas de BI e Inteligência Artificial.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/5">
                <div className="flex flex-col">
                  <span className="text-accent text-[10px] uppercase tracking-[0.3em] font-black mb-2">Localização</span>
                  <span className="text-xl font-bold text-white">Brasília</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-accent text-[10px] uppercase tracking-[0.3em] font-black mb-2">Em Atualização</span>
                  <span className="text-xl font-bold text-white">Engenharia de Dados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
