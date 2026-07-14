"use client";

import { Sparkles, Smile, Frown, Angry, Target, ArrowRight, MessageSquareQuote } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const MOCK_COMMENTS = [
  { id: 1, text: '"Excelente estadía. El personal de recepción fue muy amable."', emotion: 'JOY', tags: ['Recepción', 'Personal'], vader: 0.8521 },
  { id: 2, text: '"Demasiado tiempo esperando el check-in. La cena tardó mucho."', emotion: 'FRUSTRATION', tags: ['Check-in', 'Cena'], vader: -0.4502 },
  { id: 3, text: '"La habitación estaba muy sucia, agua fría en la ducha."', emotion: 'ANGER', tags: ['Limpieza', 'Agua'], vader: -0.8901 },
  { id: 4, text: '"Me encantó el Spa. Muy relajante."', emotion: 'JOY', tags: ['Spa', 'Relax'], vader: 0.9102 },
];

export default function SemanticPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [generating, setGenerating] = useState(false);

  const handleGenerateSummary = () => {
    setGenerating(true);
    setShowSummaryModal(true);
    setTimeout(() => {
      setGenerating(false);
    }, 1500);
  };

  const filteredComments = activeFilter 
    ? MOCK_COMMENTS.filter(c => c.emotion === activeFilter) 
    : MOCK_COMMENTS;

  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-zinc-50/50">
      <div className="flex-1 p-8 max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Comentarios (Análisis Semántico)</h1>
            <p className="text-zinc-500 mt-1">Detección de emociones, sentimientos y clustering de tópicos por Inteligencia Artificial.</p>
          </div>
          <button onClick={handleGenerateSummary} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm flex items-center gap-2">
            <Sparkles size={16} /> Generar Resumen con IA
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Emotion Clustering */}
          <div className="col-span-1 lg:col-span-2 bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-zinc-100 flex items-center gap-3">
              <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                <Target size={18} />
              </div>
              <h3 className="font-bold text-zinc-900">Radar de Emociones (Tiempo Real)</h3>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Joy */}
                <div className={`bg-emerald-50 border ${activeFilter === 'JOY' ? 'border-emerald-500 shadow-md ring-2 ring-emerald-500/20' : 'border-emerald-100'} rounded-xl p-5 relative overflow-hidden group hover:shadow-md cursor-pointer transition-all`} onClick={() => { setActiveFilter(activeFilter === 'JOY' ? null : 'JOY'); toast.success("Filtrando comentarios por Alegría / Satisfacción"); }}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                      <Smile size={24} />
                    </div>
                    <span className="text-2xl font-bold text-emerald-700">62%</span>
                  </div>
                  <h4 className="font-bold text-emerald-900">Alegría / Satisfacción</h4>
                  <p className="text-xs text-emerald-600/80 mt-1">Palabras clave: "Excelente", "Increíble", "Amable"</p>
                </div>

                {/* Frustration */}
                <div className={`bg-amber-50 border ${activeFilter === 'FRUSTRATION' ? 'border-amber-500 shadow-md ring-2 ring-amber-500/20' : 'border-amber-100'} rounded-xl p-5 relative overflow-hidden group hover:shadow-md cursor-pointer transition-all`} onClick={() => { setActiveFilter(activeFilter === 'FRUSTRATION' ? null : 'FRUSTRATION'); toast.success("Filtrando comentarios por Frustración"); }}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
                      <Frown size={24} />
                    </div>
                    <span className="text-2xl font-bold text-amber-700">28%</span>
                  </div>
                  <h4 className="font-bold text-amber-900">Frustración leve</h4>
                  <p className="text-xs text-amber-600/80 mt-1">Palabras clave: "Demora", "Esperaba", "Faltaba"</p>
                </div>

                {/* Anger */}
                <div className={`bg-rose-50 border ${activeFilter === 'ANGER' ? 'border-rose-500 shadow-md ring-2 ring-rose-500/20' : 'border-rose-100'} rounded-xl p-5 relative overflow-hidden group hover:shadow-md cursor-pointer transition-all`} onClick={() => { setActiveFilter(activeFilter === 'ANGER' ? null : 'ANGER'); toast.success("Filtrando comentarios por Enojo / Molestia"); }}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-rose-100 text-rose-600 rounded-lg">
                      <Angry size={24} />
                    </div>
                    <span className="text-2xl font-bold text-rose-700">10%</span>
                  </div>
                  <h4 className="font-bold text-rose-900">Enojo / Molestia</h4>
                  <p className="text-xs text-rose-600/80 mt-1">Palabras clave: "Inaceptable", "Sucio", "Roto"</p>
                </div>

              </div>

              <div className="mt-8 border-t border-zinc-100 pt-6">
                <h4 className="text-sm font-bold text-zinc-900 mb-4">Clustering de Tópicos (K-Means)</h4>
                <div className="flex flex-wrap gap-3">
                  <span onClick={() => toast.info("Explorando el tópico: Desayuno Buffet")} className="px-4 py-2 bg-zinc-100 hover:bg-zinc-200 cursor-pointer transition-colors rounded-lg text-sm font-medium text-zinc-700 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Desayuno Buffet (124 menciones)
                  </span>
                  <span onClick={() => toast.info("Explorando el tópico: Atención en Recepción")} className="px-4 py-2 bg-zinc-100 hover:bg-zinc-200 cursor-pointer transition-colors rounded-lg text-sm font-medium text-zinc-700 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Atención en Recepción (89 menciones)
                  </span>
                  <span onClick={() => toast.info("Explorando el tópico: Limpieza Habitación")} className="px-4 py-2 bg-zinc-100 hover:bg-zinc-200 cursor-pointer transition-colors rounded-lg text-sm font-medium text-zinc-700 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span> Limpieza Habitación (45 menciones)
                  </span>
                  <span onClick={() => toast.info("Explorando el tópico: Velocidad Check-in")} className="px-4 py-2 bg-zinc-100 hover:bg-zinc-200 cursor-pointer transition-colors rounded-lg text-sm font-medium text-zinc-700 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span> Velocidad Check-in (32 menciones)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Automated Actions */}
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 border border-indigo-800 rounded-xl shadow-lg overflow-hidden flex flex-col text-white">
            <div className="px-6 py-5 border-b border-indigo-800/50 flex items-center gap-3">
              <Sparkles className="text-emerald-400" size={18} />
              <h3 className="font-bold">Acciones Automáticas TobIA</h3>
            </div>
            
            <div className="p-6 flex-1 flex flex-col gap-4">
              <p className="text-sm text-indigo-200 mb-2">Basado en el análisis de emociones, la IA ha tomado las siguientes decisiones:</p>
              
              <div className="space-y-3">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/5 cursor-pointer hover:bg-white/20 transition-colors" onClick={() => toast.info("Abriendo detalle de campaña automática...")}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-emerald-400 uppercase">Auto-Respuesta</span>
                    <span className="text-[10px] text-indigo-300">Hace 10 min</span>
                  </div>
                  <p className="text-sm font-medium">Agradecimiento enviado a 12 huéspedes que mencionaron positivamente el Spa.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/5 relative overflow-hidden cursor-pointer hover:bg-white/20 transition-colors" onClick={() => toast.error("Revisando alerta crítica #992...")}>
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500"></div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-rose-400 uppercase">Alerta P0 Generada</span>
                    <span className="text-[10px] text-indigo-300">Hace 45 min</span>
                  </div>
                  <p className="text-sm font-medium">Se detectó la frase "agua fría" en 3 comentarios recientes. Ticket #992 enviado a Mantenimiento.</p>
                </div>
              </div>

              <div className="mt-auto pt-4">
                <button onClick={() => toast.info("Abriendo panel de configuración de NLP...")} className="w-full py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors flex items-center justify-center gap-2">
                  Configurar Reglas NLP <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

        </div>
        
        {/* Feed NLP */}
        <div className="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-zinc-100 flex items-center gap-3">
            <MessageSquareQuote size={18} className="text-zinc-500" />
            <h3 className="font-bold text-zinc-900">Feed de Procesamiento en Vivo</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-zinc-200">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-zinc-500 uppercase tracking-wider">Texto Ingresado</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-zinc-500 uppercase tracking-wider">Emoción Detectada</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-zinc-500 uppercase tracking-wider">Tópicos Extraydos</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-zinc-500 uppercase tracking-wider">Puntaje VADER</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-zinc-200">
                {filteredComments.map((comment) => (
                  <tr key={comment.id} className="hover:bg-zinc-50 cursor-pointer">
                    <td className="px-6 py-4 text-sm text-zinc-900 w-1/3">{comment.text}</td>
                    <td className="px-6 py-4">
                      {comment.emotion === 'JOY' && <span className="bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-md text-xs font-bold flex items-center gap-1 w-max"><Smile size={12}/> ALEGRÍA</span>}
                      {comment.emotion === 'FRUSTRATION' && <span className="bg-amber-100 text-amber-800 px-2.5 py-1 rounded-md text-xs font-bold flex items-center gap-1 w-max"><Frown size={12}/> FRUSTRACIÓN</span>}
                      {comment.emotion === 'ANGER' && <span className="bg-rose-100 text-rose-800 px-2.5 py-1 rounded-md text-xs font-bold flex items-center gap-1 w-max"><Angry size={12}/> ENOJO</span>}
                    </td>
                    <td className="px-6 py-4">
                      {comment.tags.map(tag => (
                        <span key={tag} className="text-xs bg-zinc-100 text-zinc-600 px-2 py-1 rounded mr-1">{tag}</span>
                      ))}
                    </td>
                    <td className="px-6 py-4 text-sm text-zinc-500 font-mono">{comment.vader.toFixed(4)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* AI Summary Modal */}
      {showSummaryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-2xl p-6 w-full max-w-2xl border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-400 mb-2 flex items-center gap-2">
              <Sparkles size={24} className={generating ? "animate-spin text-indigo-500" : ""} /> 
              Veredicto Ejecutivo (TobIA)
            </h3>
            
            {generating ? (
              <div className="py-12 flex flex-col items-center justify-center text-zinc-500">
                <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
                <p>Procesando y agrupando +500 comentarios recientes...</p>
              </div>
            ) : (
              <>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 border-b border-zinc-100 pb-4">
                  Basado en el análisis de Lenguaje Natural de 542 interacciones en las últimas 72 horas.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-lg">
                    <h4 className="text-sm font-bold text-emerald-900 mb-1">Lo más destacado (Sentimiento Positivo)</h4>
                    <p className="text-sm text-emerald-800/80">El 62% de los huéspedes resalta la amabilidad del personal de Recepción y la modernización del Spa. La palabra "Excelente" tuvo un aumento del 12% en uso respecto al mes pasado.</p>
                  </div>
                  
                  <div className="p-4 bg-rose-50 border border-rose-100 rounded-lg">
                    <h4 className="text-sm font-bold text-rose-900 mb-1">Puntos Críticos (Atención Inmediata)</h4>
                    <p className="text-sm text-rose-800/80">Se detectó un patrón de frustración del 28% relacionado exclusivamente a los tiempos de espera (Check-in). Además, el 10% de quejas graves (Enojo) convergen en "Temperatura del agua" en las habitaciones del Piso 4 por la mañana.</p>
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <button type="button" onClick={() => setShowSummaryModal(false)} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors">Cerrar Reporte</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
