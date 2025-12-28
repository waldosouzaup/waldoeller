
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';

interface AdminDashboardProps {
  onBack: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBack }) => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({ projectsCount: 0 });
  const [editingProject, setEditingProject] = useState<any | null>(null);

  const emptyProjectTemplate = {
    title: "",
    category: "Dados",
    description: "",
    technologies: [],
    image_url: "",
    gallery_images: [],
    business_problem_image: "",
    context_image: "",
    premises_image: "",
    strategy_image: "",
    results_image: "",
    next_steps_image: "",
    business_problem: "",
    context: "",
    premises: [],
    strategy: [],
    insights: [],
    results: [],
    next_steps: [],
    github_url: "",
    demo_url: "",
    display_order: 1
  };

  const fetchProjectsData = async () => {
    const { data, count, error } = await supabase
      .from('projects')
      .select('*', { count: 'exact' })
      .order('display_order', { ascending: true });

    if (!error) {
      setProjects(data || []);
      setStats({ projectsCount: count || 0 });
    }
  };

  useEffect(() => {
    fetchProjectsData();
  }, []);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      onBack();
    } catch (err: any) {
      alert("Erro ao sair: " + err.message);
    }
  };

  const openNewProjectForm = () => {
    setEditingProject({ ...emptyProjectTemplate, display_order: projects.length + 1 });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const isNew = !editingProject.id;
    const { id, created_at, ...rawPayload } = editingProject;

    const payload = {
      ...rawPayload,
      technologies: Array.isArray(rawPayload.technologies) ? rawPayload.technologies : [],
      gallery_images: Array.isArray(rawPayload.gallery_images) ? rawPayload.gallery_images : [],
      premises: Array.isArray(rawPayload.premises) ? rawPayload.premises : [],
      strategy: Array.isArray(rawPayload.strategy) ? rawPayload.strategy : [],
      insights: Array.isArray(rawPayload.insights) ? rawPayload.insights : [],
      results: Array.isArray(rawPayload.results) ? rawPayload.results : [],
      next_steps: Array.isArray(rawPayload.next_steps) ? rawPayload.next_steps : [],
    };
    
    let error;
    if (isNew) {
      const { error: insertError } = await supabase
        .from('projects')
        .insert([payload]);
      error = insertError;
    } else {
      const { error: updateError } = await supabase
        .from('projects')
        .update(payload)
        .eq('id', id);
      error = updateError;
    }

    if (error) {
      if (error.message.includes('projects_category_check')) {
        alert("ERRO DE BANCO: O valor 'IA' não é permitido pela regra de validação do Supabase.\n\nSOLUÇÃO:\nNo SQL Editor do Supabase, execute:\nALTER TABLE projects DROP CONSTRAINT projects_category_check;\nALTER TABLE projects ADD CONSTRAINT projects_category_check CHECK (category IN ('Dados', 'Web', 'IA'));");
      } else if (error.message.includes('column')) {
        alert("ERRO DE ESTRUTURA: Algumas colunas novas ainda não existem na sua tabela. Verifique seu esquema no Supabase.");
      } else {
        alert("Erro ao salvar: " + error.message);
      }
    } else {
      setEditingProject(null);
      fetchProjectsData();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setLoading(false);
  };

  const deleteProject = async (id: string) => {
    if (window.confirm("Tem certeza que deseja excluir este projeto? Esta ação é irreversível.")) {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) {
        alert("Erro ao excluir: " + error.message);
      } else {
        fetchProjectsData();
      }
    }
  };

  const handleArrayChange = (field: string, value: string) => {
    const array = value.split('\n').map(line => line.trim()).filter(line => line !== '');
    setEditingProject({ ...editingProject, [field]: array });
  };

  return (
    <section className="min-h-screen bg-[#0A0A0B] pt-20 pb-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          <div>
            <h1 className="text-4xl font-black tracking-tighter uppercase mb-2">Painel <span className="text-accent">Mestre</span></h1>
            <p className="text-white/30 text-[10px] uppercase tracking-[0.4em] font-bold">
              {editingProject ? 'Editor de Case Study' : 'Gestão completa de Projetos'}
            </p>
          </div>
          <div className="flex gap-4">
            {!editingProject ? (
              <>
                <button onClick={onBack} className="bg-white/5 border border-white/10 text-white/60 hover:text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                  Ver Site
                </button>
                <button onClick={handleLogout} className="bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                  Sair
                </button>
              </>
            ) : (
              <button 
                onClick={() => { setEditingProject(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="bg-white/5 border border-white/10 text-white/60 hover:text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Cancelar Edição
              </button>
            )}
          </div>
        </header>

        {editingProject ? (
          <div className="bg-[#141416] w-full rounded-[3rem] border border-white/10 shadow-3xl p-10 md:p-20 animate-fade-in">
            <h2 className="text-3xl font-black uppercase mb-16 text-accent tracking-tighter flex items-center gap-4">
              <div className="w-3 h-10 bg-accent"></div>
              {editingProject.id ? 'Refinar Case Study' : 'Novo Projeto Estratégico'}
            </h2>
            
            <form onSubmit={handleSave} className="space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <h3 className="text-[11px] font-black uppercase text-accent tracking-[0.2em]">01. Metadados do Card</h3>
                  <div>
                    <label className="block text-[9px] uppercase font-black text-white/20 mb-4 tracking-widest">Título do Projeto</label>
                    <input type="text" required value={editingProject.title} onChange={(e) => setEditingProject({...editingProject, title: e.target.value})} className="w-full bg-black/40 border border-white/5 rounded-2xl px-8 py-5 focus:border-accent outline-none text-white font-medium" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[9px] uppercase font-black text-white/20 mb-4 tracking-widest">Categoria</label>
                      <select value={editingProject.category} onChange={(e) => setEditingProject({...editingProject, category: e.target.value})} className="w-full bg-black/40 border border-white/5 rounded-2xl px-8 py-5 focus:border-accent outline-none text-white font-medium appearance-none">
                        <option value="Dados">Dados</option>
                        <option value="Web">Web</option>
                        <option value="IA">IA</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[9px] uppercase font-black text-white/20 mb-4 tracking-widest">Ordem de Exibição</label>
                      <input type="number" value={editingProject.display_order} onChange={(e) => setEditingProject({...editingProject, display_order: parseInt(e.target.value)})} className="w-full bg-black/40 border border-white/5 rounded-2xl px-8 py-5 focus:border-accent outline-none text-white font-medium" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[9px] uppercase font-black text-white/20 mb-4 tracking-widest">Resumo Curto (Card)</label>
                    <textarea value={editingProject.description} onChange={(e) => setEditingProject({...editingProject, description: e.target.value})} rows={3} className="w-full bg-black/40 border border-white/5 rounded-2xl px-8 py-5 focus:border-accent outline-none text-white font-medium resize-none" />
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="text-[11px] font-black uppercase text-accent tracking-[0.2em]">02. Mídia Geral</h3>
                  <div>
                    <label className="block text-[9px] uppercase font-black text-white/20 mb-4 tracking-widest">Imagem de Capa (Principal)</label>
                    <input type="text" value={editingProject.image_url} onChange={(e) => setEditingProject({...editingProject, image_url: e.target.value})} className="w-full bg-black/40 border border-white/5 rounded-2xl px-8 py-5 focus:border-accent outline-none text-white font-medium" placeholder="URL da imagem principal..." />
                  </div>
                  <div>
                    <label className="block text-[9px] uppercase font-black text-white/20 mb-4 tracking-widest">Galeria do Case (Uma URL por linha)</label>
                    <textarea 
                      value={editingProject.gallery_images?.join('\n')} 
                      onChange={(e) => handleArrayChange('gallery_images', e.target.value)} 
                      rows={4} 
                      className="w-full bg-black/40 border border-white/5 rounded-2xl px-8 py-5 focus:border-accent outline-none text-white text-xs font-mono" 
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] uppercase font-black text-white/20 mb-4 tracking-widest">Tags/Tecnologias (Uma por linha)</label>
                    <textarea value={editingProject.technologies?.join('\n')} onChange={(e) => handleArrayChange('technologies', e.target.value)} rows={3} className="w-full bg-black/40 border border-white/5 rounded-2xl px-8 py-5 focus:border-accent outline-none text-white text-xs font-mono" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 pt-16">
                <button type="submit" disabled={loading} className="flex-grow bg-accent text-black font-black uppercase tracking-[0.3em] py-7 rounded-2xl hover:bg-white transition-all text-xs">
                  {loading ? 'Sincronizando Banco...' : 'Publicar Case no Portfólio'}
                </button>
                <button type="button" onClick={() => setEditingProject(null)} className="px-16 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white/10 py-7 text-xs">
                  Descartar
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="animate-fade-in">
             <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-[#141416] p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-all"></div>
                  <span className="text-white/20 text-[10px] uppercase font-black tracking-[0.3em] block mb-4">Total de Projetos</span>
                  <div className="text-6xl font-black text-white tracking-tighter">{stats.projectsCount}</div>
                </div>
                
                <div onClick={openNewProjectForm} className="bg-accent p-10 rounded-[2.5rem] text-black shadow-2xl shadow-accent/20 cursor-pointer hover:scale-[1.02] transition-all group relative overflow-hidden">
                  <span className="text-black/40 text-[10px] uppercase font-black tracking-[0.3em] block mb-4">Gerenciamento</span>
                  <div className="text-2xl font-black uppercase leading-tight relative z-10">Adicionar Novo Projeto +</div>
                </div>

                <div className="bg-[#141416] p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
                  <span className="text-white/20 text-[10px] uppercase font-black tracking-[0.3em] block mb-4">Status Banco</span>
                  <div className="text-2xl font-black text-green-500 tracking-tighter uppercase flex items-center gap-3 mt-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    Conectado
                  </div>
                </div>
              </div>

              <div className="bg-[#141416] rounded-[3rem] border border-white/5 p-8 md:p-12 shadow-2xl overflow-hidden">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/5 text-[10px] uppercase tracking-widest font-black text-white/20">
                      <th className="pb-8 px-4">Case / Título</th>
                      <th className="pb-8 px-4">Segmento</th>
                      <th className="pb-8 px-4 text-right">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.03]">
                    {projects.map((project) => (
                      <tr key={project.id} className="group hover:bg-white/[0.01] transition-colors">
                        <td className="py-8 px-4 flex items-center gap-5">
                          <img src={project.image_url} className="w-16 h-16 rounded-xl object-cover grayscale" />
                          <span className="font-bold text-white/80 group-hover:text-white transition-colors">{project.title}</span>
                        </td>
                        <td className="py-8 px-4">
                          <span className="text-[10px] font-black uppercase bg-white/5 px-4 py-1.5 rounded-full text-white/40 group-hover:text-accent group-hover:bg-accent/10">
                            {project.category}
                          </span>
                        </td>
                        <td className="py-8 px-4 text-right">
                          <div className="flex justify-end gap-3">
                            <button onClick={() => { setEditingProject(project); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="p-4 bg-white/5 rounded-2xl text-white/20 hover:text-accent hover:bg-accent/10 transition-all text-[10px] font-black uppercase tracking-widest">
                              Editar
                            </button>
                            <button onClick={() => deleteProject(project.id)} className="p-4 bg-white/5 rounded-2xl text-white/20 hover:text-red-500 hover:bg-red-500/10 transition-all">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminDashboard;
