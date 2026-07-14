"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, MapPin } from "lucide-react";
import { toast } from "sonner";

export default function HotelsPage() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    timezone: "UTC"
  });

  const fetchHotels = async () => {
    try {
      const res = await fetch("/api/v1/hotels/", {
        headers: { "Authorization": `Token ${localStorage.getItem("token")}` }
      });
      if (res.ok) {
        const data = await res.json();
        setHotels(data);
      }
    } catch (err) {
      toast.error("Error cargando empresas");
    } finally {
      setLoading(false);
    }
  };

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
    fetchHotels();
  }, []);

  const isStaff = user?.is_staff === true;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStaff) return;
    try {
      const res = await fetch("/api/v1/hotels/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        toast.success("Empresa registrada exitosamente");
        setShowForm(false);
        setFormData({ name: "", location: "", timezone: "UTC" });
        fetchHotels();
      } else {
        toast.error("No se pudo guardar la empresa");
      }
    } catch (err) {
      toast.error("Error al comunicarse con el servidor");
    }
  };

  const handleDelete = async (id: string) => {
    if (!isStaff) return;
    if (!confirm("¿Estás seguro de eliminar esta empresa?")) return;
    try {
      const res = await fetch(`/api/v1/hotels/${id}/`, {
        method: "DELETE",
        headers: { "Authorization": `Token ${localStorage.getItem("token")}` }
      });
      if (res.ok) {
        toast.success("Empresa eliminada");
        fetchHotels();
      }
    } catch (err) {
      toast.error("Error al eliminar");
    }
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Empresas (Hoteles)</h1>
          <p className="text-zinc-500 dark:text-zinc-400">Gestiona las propiedades o sucursales.</p>
        </div>
        {isStaff && (
          <button 
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl transition-colors text-sm font-medium"
          >
            <Plus size={18} />
            {showForm ? "Cancelar" : "Nueva Empresa"}
          </button>
        )}
      </div>

      {showForm && isStaff && (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 mb-8 shadow-sm">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Nombre</label>
              <input required type="text" className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-800 text-sm" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Ej: Los Pinos Resort" />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Ubicación</label>
              <input required type="text" className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-800 text-sm" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} placeholder="Ej: Termas de Río Hondo" />
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="w-full bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-medium py-2 rounded-lg transition-colors text-sm">
                Guardar Empresa
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p className="text-zinc-500 text-sm">Cargando...</p>
        ) : hotels.length === 0 ? (
          <p className="text-zinc-500 text-sm">No hay empresas registradas.</p>
        ) : (
          hotels.map((hotel: any) => (
            <div key={hotel.id} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <MapPin size={24} />
                </div>
                {isStaff && (
                  <button onClick={() => handleDelete(hotel.id)} className="text-zinc-400 hover:text-rose-500 transition-colors">
                    <Trash2 size={18} />
                  </button>
                )}
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{hotel.name}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{hotel.location}</p>
              <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-center text-xs text-zinc-400 font-mono">
                <span>ID: {hotel.id.split("-")[0]}</span>
                <span>{hotel.timezone}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
