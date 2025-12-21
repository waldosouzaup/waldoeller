
import React, { useState } from 'react';
import { supabase } from '../supabase';

interface AdminPortalProps {
  onBack: () => void;
}

const AdminPortal: React.FC<AdminPortalProps> = ({ onBack }) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (mode === 'login') {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) setError("Credenciais inválidas ou e-mail não confirmado.");
    } else {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        setError(error.message);
      } else {
        setSuccess("Conta criada! Verifique seu e-mail para confirmar o acesso (se habilitado no Supabase).");
        setMode('login');
      }
    }
    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-[#0A0A0B] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent opacity-[0.02] blur-[150px] rounded-full -z-0"></div>
      
      <div className="max-w-md w-full bg-[#141416] border border-white/5 rounded-[3rem] p-12 md:p-16 shadow-2xl relative z-10 transition-all duration-500">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-accent/20">
            <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">
            {mode === 'login' ? 'Portal Admin' : 'Novo Acesso'}
          </h2>
          <div className="flex justify-center gap-4 mt-4">
            <button 
              onClick={() => { setMode('login'); setError(null); }}
              className={`text-[9px] uppercase tracking-[0.2em] font-black transition-all ${mode === 'login' ? 'text-accent border-b border-accent pb-1' : 'text-white/20 hover:text-white/40'}`}
            >
              Acessar
            </button>
            <button 
              onClick={() => { setMode('signup'); setError(null); }}
              className={`text-[9px] uppercase tracking-[0.2em] font-black transition-all ${mode === 'signup' ? 'text-accent border-b border-accent pb-1' : 'text-white/20 hover:text-white/40'}`}
            >
              Criar Conta
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] p-4 rounded-xl mb-8 text-center uppercase tracking-wider font-bold animate-pulse">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] p-4 rounded-xl mb-8 text-center uppercase tracking-wider font-bold">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[9px] uppercase tracking-[0.2em] font-black text-white/20 mb-3 ml-1">E-mail Corporativo</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#0A0A0B] border border-white/5 rounded-2xl px-6 py-4 focus:border-accent outline-none transition-all text-white placeholder:text-white/5 font-medium"
              placeholder="admin@waldoeller.com.br"
            />
          </div>

          <div>
            <label className="block text-[9px] uppercase tracking-[0.2em] font-black text-white/20 mb-3 ml-1">Senha</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#0A0A0B] border border-white/5 rounded-2xl px-6 py-4 focus:border-accent outline-none transition-all text-white placeholder:text-white/5 font-medium text-center tracking-[0.5em]"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-black font-black uppercase tracking-[0.3em] py-5 rounded-2xl hover:bg-white transition-all transform hover:scale-[1.02] shadow-xl shadow-accent/10 text-[10px] disabled:opacity-50"
          >
            {loading ? 'Processando...' : mode === 'login' ? 'Entrar no Painel' : 'Finalizar Cadastro'}
          </button>
        </form>

        <div className="mt-12 text-center pt-8 border-t border-white/[0.03]">
          <button onClick={onBack} className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 hover:text-white transition-colors flex items-center gap-3 mx-auto group">
            <svg className="w-3 h-3 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retornar ao Portfólio
          </button>
        </div>
      </div>
      
      <div className="mt-8 text-[8px] text-white/10 uppercase tracking-[0.5em] font-black">
        Secure Access Gate — Powered by Supabase
      </div>
    </section>
  );
};

export default AdminPortal;
