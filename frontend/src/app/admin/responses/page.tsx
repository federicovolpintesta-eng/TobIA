"use client";

import { useState, useEffect } from "react";
import { Search, Filter, Download, Sparkles, AlertCircle, RefreshCw, GripVertical } from "lucide-react";
import { toast } from "sonner";

type SurveyStatus = "NEW" | "REVIEW" | "ACTION_REQUIRED" | "RESOLVED";

interface SurveyResponse {
  id: string;
  guestName: string;
  room: string;
  stayDates: string;
  nps: number;
  status: SurveyStatus;
  comment: string;
  tags: string[];
  aiSentiment: string;
  submitted_at: string;
}

const COLUMNS: { id: SurveyStatus; title: string; color: string; headerColor: string }[] = [
  { id: "NEW", title: "Nuevas", color: "bg-zinc-50 border-zinc-200", headerColor: "text-zinc-700" },
  { id: "REVIEW", title: "Bajo Revisión", color: "bg-amber-50/30 border-amber-200", headerColor: "text-amber-700" },
  { id: "ACTION_REQUIRED", title: "Acción Requerida", color: "bg-rose-50/30 border-rose-200", headerColor: "text-rose-700" },
  { id: "RESOLVED", title: "Resueltas", color: "bg-emerald-50/30 border-emerald-200", headerColor: "text-emerald-700" }
];

export default function ResponsesPage() {
  const [responses, setResponses] = useState<SurveyResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [draggedItemId, setDraggedItemId] = useState<string | null>(null);

  useEffect(() => {
    fetchResponses();
  }, []);

  const fetchResponses = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/v1/guest-feedback');
      if (res.ok) {
        const data = await res.json();
        setResponses(data);
      }
    } catch (error) {
      console.error("Error fetching responses:", error);
      toast.error("Error al cargar las encuestas");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: SurveyStatus) => {
    // Optimistic update
    const previous = [...responses];
    setResponses(responses.map(r => r.id === id ? { ...r, status: newStatus } : r));
    
    try {
      const res = await fetch(`/api/v1/guest-feedback/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (!res.ok) throw new Error("Failed to update");
      toast.success("Estado actualizado");
    } catch (error) {
      setResponses(previous);
      toast.error("Error al actualizar estado");
    }
  };

  const handleDragStart = (e: React.DragEvent, id: string) => {
    setDraggedItemId(id);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", id);
    setTimeout(() => {
      const el = document.getElementById(`card-${id}`);
      if (el) el.style.opacity = "0.4";
    }, 0);
  };

  const handleDragEnd = (e: React.DragEvent, id: string) => {
    setDraggedItemId(null);
    const el = document.getElementById(`card-${id}`);
    if (el) el.style.opacity = "1";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); 
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, statusId: SurveyStatus) => {
    e.preventDefault();
    if (draggedItemId) {
      const item = responses.find(r => r.id === draggedItemId);
      if (item && item.status !== statusId) {
        updateStatus(draggedItemId, statusId);
      }
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-zinc-50/50">
      <div className="flex-1 p-8 max-w-[1600px] mx-auto space-y-8 flex flex-col h-[calc(100vh-64px)] overflow-hidden">
        
        {/* Header */}
        <div className="shrink-0">
          <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Gestión de Encuestas (Kanban)</h1>
          <p className="text-zinc-500 mt-1">Arrastra las respuestas para actualizar su estado de seguimiento.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              <input
                type="text"
                placeholder="Buscar por huésped o habitación..."
                className="w-full bg-white border border-zinc-300 rounded-lg pl-10 pr-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
              />
            </div>
            <button className="flex items-center gap-2 bg-white border border-zinc-300 px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors">
              <Filter size={16} /> Filtros
            </button>
          </div>
          <button onClick={fetchResponses} className="flex items-center gap-2 bg-zinc-900 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors">
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} /> Refrescar
          </button>
        </div>

        {/* Kanban Board */}
        <div className="flex-1 overflow-x-auto overflow-y-hidden pb-4">
          <div className="flex gap-6 h-full min-w-max">
            {COLUMNS.map((col) => {
              const colResponses = responses.filter(r => r.status === col.id);
              
              return (
                <div 
                  key={col.id}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, col.id)}
                  className={`w-[320px] flex flex-col rounded-xl border ${col.color} shadow-sm overflow-hidden bg-white/40`}
                >
                  <div className="p-4 border-b border-black/5 bg-white/60 backdrop-blur-sm shrink-0">
                    <h3 className={`font-bold text-sm uppercase tracking-wider flex items-center justify-between ${col.headerColor}`}>
                      {col.title}
                      <span className="bg-white/80 px-2 py-0.5 rounded-full text-xs font-bold border border-black/10">
                        {colResponses.length}
                      </span>
                    </h3>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {colResponses.map((res) => (
                      <div
                        key={res.id}
                        id={`card-${res.id}`}
                        draggable
                        onDragStart={(e) => handleDragStart(e, res.id)}
                        onDragEnd={(e) => handleDragEnd(e, res.id)}
                        className="bg-white p-4 rounded-xl shadow-sm border border-zinc-200 cursor-grab active:cursor-grabbing hover:border-indigo-300 hover:shadow-md transition-all relative group"
                      >
                        <div className="absolute top-4 right-4 text-zinc-300 group-hover:text-indigo-400">
                          <GripVertical size={16} />
                        </div>
                        
                        <div className="font-bold text-zinc-900 text-sm pr-6">{res.guestName}</div>
                        <div className="text-xs text-zinc-500 mt-1 mb-3">Hab: {res.room} • {res.stayDates}</div>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-2 py-0.5 text-xs font-bold rounded-md ${
                            res.nps >= 9 ? 'bg-emerald-100 text-emerald-800' :
                            res.nps >= 7 ? 'bg-amber-100 text-amber-800' :
                            'bg-rose-100 text-rose-800'
                          }`}>
                            NPS: {res.nps ?? '-'}
                          </span>
                          {res.aiSentiment === 'POSITIVE' && <span className="text-[10px] uppercase font-bold text-emerald-600 flex items-center gap-1"><Sparkles size={10}/> Positivo</span>}
                          {res.aiSentiment === 'NEGATIVE' && <span className="text-[10px] uppercase font-bold text-rose-600 flex items-center gap-1"><AlertCircle size={10}/> Negativo</span>}
                        </div>
                        
                        <p className="text-sm text-zinc-700 leading-relaxed line-clamp-3">
                          "{res.comment || 'Sin comentarios'}"
                        </p>
                      </div>
                    ))}
                    {colResponses.length === 0 && !loading && (
                      <div className="h-24 flex items-center justify-center border-2 border-dashed border-zinc-300/50 rounded-xl text-zinc-400 text-sm font-medium">
                        Mover aquí
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
