
import React from 'react';

interface HeroProps {
  onNavigate?: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const profileImageUrl = "https://pmartinsimob.com.br/wp-content/uploads/2025/12/waldo-terno-preto_baixa.png?auto=format&fit=crop&q=80&w=800";
  // Imagem futurista de alta qualidade com foco em processamento e fluxo de dados
  const analyticsBgUrl = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600";

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(id);
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0A0B]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Imagem de Fundo com transparência aumentada (opacidade reduzida para 20%) */}
        <img 
          src={analyticsBgUrl} 
          alt="Data Processing Background" 
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity filter brightness-75 contrast-125 transition-all duration-1000"
        />
        
        {/* Gradiantes de sobreposição (Overlays) para garantir contraste e integração */}
        {/* Esquerda para Direita - Protege o texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-[#0A0A0B]/80 to-transparent z-10"></div>
        {/* Baixo para Cima - Suaviza a transição para a próxima seção */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent z-10"></div>
        {/* Brilho sutil no topo */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/50 via-transparent to-transparent z-10"></div>
      </div>

      {/* Glow de Destaque lateral (Luz ambiente) */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-[#B08D20] opacity-[0.03] blur-[150px] rounded-full z-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-20">
        <div className="order-2 md:order-1">
          <p className="text-accent font-black tracking-[0.5em] uppercase mb-4 animate-fade-in text-[10px]">Olá, seja bem vindo(a)!</p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight text-white tracking-tighter">
            Waldo <span className="text-accent">Eller</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-white/70">
           Especialista em <span className="font-bold text-white">Data Analytics</span>
          </h2>
          <p className="text-[18.72px] text-white/40 mb-12 max-w-xl leading-relaxed font-light">
           Nessa página eu demonstro habilidades de resolver problemas de negócio utilizando conceitos e ferramentas da Ciência de Dados através de projetos com dados públicos.
          </p>
          <div className="flex flex-wrap gap-6">
            <a 
              href="#projetos" 
              onClick={(e) => handleLinkClick(e, 'projetos')}
              className="bg-accent text-black font-black py-5 px-14 rounded-2xl hover:bg-white transition-all transform hover:-translate-y-1 inline-block uppercase tracking-[0.2em] text-[11px] shadow-2xl shadow-accent/20"
            >
              Explorar Portfólio
            </a>
            <a 
              href="#contato" 
              onClick={(e) => handleLinkClick(e, 'contato')}
              className="border border-white/10 bg-white/5 text-white font-black py-5 px-14 rounded-2xl hover:border-accent hover:text-accent transition-all transform hover:-translate-y-1 inline-block uppercase tracking-[0.2em] text-[11px] backdrop-blur-md"
            >
              Fale Comigo
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
          <div className="relative w-80 h-80 md:w-[520px] md:h-[650px] rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl group">
            <img 
              src={profileImageUrl} 
              alt="Waldo Eller Portrait" 
              className="w-full h-full object-cover object-top transition-all duration-1000 group-hover:scale-105"
            />
            {/* Overlay sutil para integração de cores */}
            <div className="absolute inset-0 bg-accent/5 mix-blend-color group-hover:bg-transparent transition-all duration-700"></div>
            {/* Gradiente de base para a foto */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/80 via-transparent to-transparent"></div>
          </div>
          
          {/* Badge de Experiência Flutuante */}
          <div className="absolute -bottom-8 -right-8 bg-[#141416] border border-white/10 p-8 rounded-3xl shadow-2xl hidden lg:block backdrop-blur-xl z-30">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-black font-black text-xl">
                  +5
                </div>
                <div>
                   <p className="text-xs font-black uppercase tracking-widest text-accent">Anos de</p>
                   <p className="text-white font-bold">Experiência</p>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce cursor-pointer z-30" onClick={(e) => handleLinkClick(e, 'sobre')}>
        <span className="text-[8px] uppercase font-black tracking-[0.3em]">Scroll</span>
        <div className="w-0.5 h-8 bg-accent"></div>
      </div>
    </section>
  );
};

export default Hero;
