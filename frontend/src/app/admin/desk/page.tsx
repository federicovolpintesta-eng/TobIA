"use client";

import { useEffect, useState } from "react";
import { Search, Filter, Timer, Sparkles, Plus, MoreHorizontal } from "lucide-react";
import { toast } from "sonner";
import { 
  DndContext, 
  closestCorners, 
  KeyboardSensor, 
  PointerSensor, 
  useSensor, 
  useSensors, 
  DragEndEvent 
} from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Incident {
  id: string;
  status: string;
  priority: string;
  created_at: string;
  survey_response: string;
  guest_name?: string;
  room?: string;
  issue_type?: string;
  sla_minutes_left?: number;
}

const MOCK_TICKETS: Incident[] = [
  { id: "TCK-8921", status: "OPEN", priority: "CRITICAL", created_at: new Date().toISOString(), survey_response: "", guest_name: "Elena Suárez", room: "105", issue_type: "Limpieza", sla_minutes_left: 14 },
  { id: "TCK-8922", status: "OPEN", priority: "HIGH", created_at: new Date().toISOString(), survey_response: "", guest_name: "Martín Rivas", room: "501", issue_type: "Mantenimiento", sla_minutes_left: 45 },
  { id: "TCK-8910", status: "IN_PROGRESS", priority: "MEDIUM", created_at: new Date().toISOString(), survey_response: "", guest_name: "Carlos Mendoza", room: "101", issue_type: "Atención", sla_minutes_left: 120 }
];

const COLUMNS = [
  { id: 'OPEN', title: 'Nuevos (Triaje IA)', dotColor: 'bg-rose-500' },
  { id: 'IN_PROGRESS', title: 'En Progreso', dotColor: 'bg-amber-400' },
  { id: 'RESOLVED', title: 'Validación Huésped', dotColor: 'bg-indigo-500' },
  { id: 'CLOSED', title: 'Cerrados', dotColor: 'bg-zinc-400' },
];

function SortableTicket({ ticket, selectedTicket, setSelectedTicket, onApplySolution }: { ticket: Incident, selectedTicket: string | null, setSelectedTicket: (id: string | null) => void, onApplySolution: (id: string) => void }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: ticket.id, data: { status: ticket.status } });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "CRITICAL": return <span className="bg-rose-100 text-rose-700 border border-rose-200 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Crítico</span>;
      case "HIGH": return <span className="bg-orange-100 text-orange-700 border border-orange-200 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Alto</span>;
      case "MEDIUM": return <span className="bg-amber-100 text-amber-700 border border-amber-200 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Medio</span>;
      default: return <span className="bg-emerald-100 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Bajo</span>;
    }
  };

  const getSlaColor = (minutes: number | undefined) => {
    if (!minutes) return "text-zinc-400";
    if (minutes < 30) return "text-rose-600 font-bold bg-rose-50 px-1.5 py-0.5 rounded-md";
    if (minutes < 60) return "text-amber-600 font-bold bg-amber-50 px-1.5 py-0.5 rounded-md";
    return "text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded-md";
  };

  return (
    <div 
      ref={setNodeRef} style={style} {...attributes} {...listeners}
      onClick={() => setSelectedTicket(ticket.id)}
      className={`bg-white border rounded-xl p-4 cursor-pointer transition-all ${selectedTicket === ticket.id ? 'border-indigo-500 shadow-md ring-2 ring-indigo-500/20' : 'border-zinc-200 hover:border-zinc-300 hover:shadow-sm'}`}
    >
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs text-zinc-500 font-mono font-medium">#{ticket.id.split('-')[1] || ticket.id}</span>
        {getPriorityBadge(ticket.priority)}
      </div>
      <h4 className="text-sm font-bold text-zinc-900 mb-1">{ticket.issue_type || "Incidente Generado por IA"}</h4>
      <p className="text-xs text-zinc-600 mb-4 line-clamp-2 leading-relaxed">
        Huésped en habitación {ticket.room || "N/A"} ({ticket.guest_name || "Desconocido"}) reporta insatisfacción. Requiere seguimiento inmediato.
      </p>
      <div className="flex justify-between items-center text-xs border-t border-zinc-100 pt-3">
        <div className={`flex items-center gap-1 ${getSlaColor(ticket.sla_minutes_left)}`}>
          <Timer size={14} />
          <span>{ticket.sla_minutes_left ? `${ticket.sla_minutes_left}m restantes` : 'SLA N/A'}</span>
        </div>
        {selectedTicket !== ticket.id && (
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-zinc-200 border-2 border-white flex items-center justify-center text-[9px] font-bold text-zinc-500">IA</div>
          </div>
        )}
      </div>

      {selectedTicket === ticket.id && (
        <div className="mt-4 pt-4 border-t border-indigo-100 bg-indigo-50/50 -mx-4 -mb-4 p-4 rounded-b-xl" onPointerDown={(e) => e.stopPropagation()}>
          <div className="flex items-center gap-1.5 text-indigo-700 font-bold text-xs mb-2">
            <Sparkles size={12} /> Sugerencia de Resolución (IA)
          </div>
          <p className="text-xs text-indigo-900/80 mb-3 leading-relaxed">
            Enviar al equipo de Mantenimiento. Ofrecer un desayuno de cortesía compensatorio utilizando la plantilla #4.
          </p>
          <div className="flex gap-2">
            <button 
              onClick={(e) => { e.stopPropagation(); onApplySolution(ticket.id); }}
              className="flex-1 bg-indigo-600 text-white py-1.5 rounded-lg text-xs font-semibold hover:bg-indigo-500 transition-colors"
            >
              Aplicar Solución
            </button>
            <button onClick={(e) => { e.stopPropagation(); toast.info(`Abriendo detalles de ${ticket.id}...`); }} className="flex-1 bg-white border border-indigo-200 text-indigo-700 py-1.5 rounded-lg text-xs font-semibold hover:bg-indigo-50 transition-colors">
              Ver Detalles
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Column({ id, title, dotColor, tickets, selectedTicket, setSelectedTicket, onApplySolution }: any) {
  const { setNodeRef } = useSortable({ id: `col-${id}`, data: { type: "Column", id } });

  return (
    <div ref={setNodeRef} className="flex flex-col h-[calc(100vh-180px)] bg-zinc-100/50 rounded-2xl border border-zinc-200 overflow-hidden">
      <div className="p-4 border-b border-zinc-200 flex items-center justify-between bg-zinc-50/80 backdrop-blur-sm">
        <div className="flex items-center gap-2 text-zinc-900">
          <div className={`w-2.5 h-2.5 rounded-full ${dotColor}`}></div>
          <h3 className="text-sm font-bold">{title}</h3>
          <span className="bg-zinc-200/60 text-zinc-600 px-2 py-0.5 rounded-full text-xs font-semibold ml-1">{tickets.length}</span>
        </div>
        <button onClick={() => toast.info(`Opciones para la columna ${title}`)} className="text-zinc-400 hover:text-zinc-600 transition-colors"><MoreHorizontal size={16}/></button>
      </div>
      <div className="p-3 overflow-y-auto space-y-3 flex-1 custom-scrollbar">
        {tickets.length === 0 && (
          <div className="text-center p-6 text-zinc-400 text-sm border-2 border-dashed border-zinc-200 rounded-xl">Sin tickets</div>
        )}
        <SortableContext items={tickets.map((t: any) => t.id)} strategy={verticalListSortingStrategy}>
          {tickets.map((ticket: any) => (
            <SortableTicket key={ticket.id} ticket={ticket} selectedTicket={selectedTicket} setSelectedTicket={setSelectedTicket} onApplySolution={onApplySolution} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
}

export default function HelpDeskPage() {
  const [tickets, setTickets] = useState<Incident[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [showTicketModal, setShowTicketModal] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor)
  );

  useEffect(() => {
    fetch("/api/v1/tickets")
      .then((res) => res.json())
      .then((data) => {
        setTickets(data.length > 0 ? data : MOCK_TICKETS);
        setLoading(false);
      })
      .catch(() => {
        setTickets(MOCK_TICKETS);
        setLoading(false);
      });
  }, []);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const ticketId = active.id as string;
    const overId = over.id as string;

    const isOverColumn = overId.startsWith("col-");
    const targetStatus = isOverColumn ? overId.replace("col-", "") : tickets.find(t => t.id === overId)?.status;
    
    if (targetStatus) {
      setTickets(prev => prev.map(t => t.id === ticketId ? { ...t, status: targetStatus } : t));
    }
  };

  const handleApplySolution = (id: string) => {
    setTickets(prev => prev.map(t => t.id === id ? { ...t, status: "IN_PROGRESS" } : t));
    toast.success(`Solución aplicada. Ticket ${id} movido a En Progreso.`);
    setSelectedTicket(null);
  };

  const handleNewTicket = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newTicket = {
      issue_type: formData.get("issue_type"),
      priority: formData.get("priority"),
      room: formData.get("room"),
      guest_name: formData.get("guest_name"),
      status: "OPEN"
    };

    try {
      const res = await fetch("/api/v1/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTicket)
      });
      if (res.ok) {
        const created = await res.json();
        setTickets(prev => [created, ...prev]);
        toast.success("Ticket creado correctamente");
        setShowTicketModal(false);
      } else {
        toast.error("Error al crear el ticket en el backend");
      }
    } catch (err) {
      toast.error("Error de red al crear el ticket");
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-zinc-50/50">
      <div className="flex-1 p-8 max-w-[1600px] mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Gestión de encuestas</h1>
            <p className="text-zinc-500 mt-1">Resolución de incidentes impulsada por IA y SLAs dinámicos con Drag & Drop.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
              <input type="text" placeholder="Buscar ticket..." className="bg-white border border-zinc-300 rounded-lg pl-9 pr-4 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow w-64 shadow-sm" />
            </div>
            <button onClick={() => toast.info("Filtros")} className="bg-white border border-zinc-300 p-2 rounded-lg text-zinc-600 hover:bg-zinc-50 shadow-sm"><Filter size={18} /></button>
            <button onClick={() => setShowTicketModal(true)} className="bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-800 shadow-sm flex items-center gap-2"><Plus size={16}/> Nuevo Ticket</button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div></div>
        ) : (
          <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {COLUMNS.map(col => (
                <Column 
                  key={col.id} 
                  id={col.id} 
                  title={col.title} 
                  dotColor={col.dotColor} 
                  tickets={tickets.filter(t => t.status === col.id)} 
                  selectedTicket={selectedTicket} 
                  setSelectedTicket={setSelectedTicket}
                  onApplySolution={handleApplySolution}
                />
              ))}
            </div>
          </DndContext>
        )}
      </div>

      {showTicketModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md border border-zinc-200">
            <h3 className="text-lg font-bold text-zinc-900 mb-4">Crear Nuevo Ticket</h3>
            <form onSubmit={handleNewTicket}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-zinc-700 mb-1">Título del problema</label>
                <input name="issue_type" type="text" required placeholder="Ej. Fuga de agua en el baño" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-2.5 text-sm outline-none focus:border-indigo-500 text-zinc-900" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-zinc-700 mb-1">Prioridad</label>
                <select name="priority" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-2.5 text-sm outline-none focus:border-indigo-500 text-zinc-900">
                  <option value="LOW">Bajo</option>
                  <option value="MEDIUM">Medio</option>
                  <option value="HIGH">Alto</option>
                  <option value="CRITICAL">Crítico</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">Habitación</label>
                  <input name="room" type="text" placeholder="Ej. 104" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-2.5 text-sm outline-none focus:border-indigo-500 text-zinc-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">Huésped</label>
                  <input name="guest_name" type="text" placeholder="Opcional" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-2.5 text-sm outline-none focus:border-indigo-500 text-zinc-900" />
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <button type="button" onClick={() => setShowTicketModal(false)} className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900">Cancelar</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors">Crear Ticket</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
