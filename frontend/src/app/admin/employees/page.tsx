"use client";

import { useState, useEffect } from "react";
import { Plus, Users, Award, TrendingUp, Upload } from "lucide-react";
import { toast } from "sonner";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showImport, setShowImport] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    nombre: "",
    rol: "",
    tipo_perfil: "Estándar"
  });

  const fetchEmployees = async () => {
    try {
      const res = await fetch("/api/hr/empleados", {
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      });
      if (res.ok) {
        const data = await res.json();
        setEmployees(data);
      } else {
        toast.error("Error al cargar empleados desde el servidor de entrenamiento");
      }
    } catch (err) {
      toast.error("Servidor de entrenamiento no disponible. Revisa si PostgreSQL está activo.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleImport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast.error("Selecciona un archivo Excel");
      return;
    }
    
    const importData = new FormData();
    importData.append("file", file);

    try {
      const res = await fetch("/api/hr/empleados/import", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: importData
      });
      
      if (res.ok) {
        toast.success("Empleados importados correctamente");
        setShowImport(false);
        setFile(null);
        fetchEmployees();
      } else {
        toast.error("Error importando empleados");
      }
    } catch (err) {
      toast.error("Error al subir archivo");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newEmployeeData = new FormData();
      newEmployeeData.append("nombre", formData.nombre);
      newEmployeeData.append("rol", formData.rol);
      newEmployeeData.append("tipo_perfil", formData.tipo_perfil);
      if (cvFile) {
        newEmployeeData.append("cv", cvFile);
      }

      const res = await fetch("/api/hr/empleados/nuevo", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: newEmployeeData
      });
      
      if (res.ok) {
        toast.success("Empleado registrado exitosamente");
        setShowForm(false);
        setFormData({ nombre: "", rol: "", tipo_perfil: "Estándar" });
        setCvFile(null);
        fetchEmployees();
      } else {
        toast.error("No se pudo guardar el empleado");
      }
    } catch (err) {
      toast.error("Error al comunicarse con el servidor");
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Empleados (Training Server)</h1>
          <p className="text-zinc-500 dark:text-zinc-400">Listado de tu personal sincronizado con el simulador de entrenamiento.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => { setShowImport(!showImport); setShowForm(false); }}
            className="flex items-center gap-2 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 px-4 py-2 rounded-xl transition-colors text-sm font-medium"
          >
            <Upload size={18} />
            {showImport ? "Cancelar Importación" : "Importar Excel"}
          </button>
          <button 
            onClick={() => { setShowForm(!showForm); setShowImport(false); }}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl transition-colors text-sm font-medium"
          >
            <Plus size={18} />
            {showForm ? "Cancelar" : "Nuevo Empleado"}
          </button>
        </div>
      </div>

      {showImport && (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 mb-8 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Importar Empleados Masivamente</h2>
          <form onSubmit={handleImport} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Archivo Excel (.xlsx o .csv)</label>
              <input required type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" className="w-full text-sm text-zinc-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100" onChange={e => setFile(e.target.files?.[0] || null)} />
            </div>
            <div>
              <button type="submit" className="w-full bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-medium py-2 rounded-lg transition-colors text-sm">
                Subir Archivo
              </button>
            </div>
          </form>
          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 text-sm rounded-lg">
            <strong>Formato esperado del Excel:</strong>
            <p>Debe contener al menos las columnas: <code className="bg-white dark:bg-zinc-800 px-1 rounded">nombre</code>, <code className="bg-white dark:bg-zinc-800 px-1 rounded">rol</code>, <code className="bg-white dark:bg-zinc-800 px-1 rounded">tipo_perfil</code>.</p>
          </div>
        </div>
      )}

      {showForm && (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 mb-8 shadow-sm">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Nombre Completo</label>
              <input required type="text" className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-800 text-sm" value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Rol / Puesto</label>
              <input required type="text" className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-800 text-sm" value={formData.rol} onChange={e => setFormData({...formData, rol: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Tipo de Perfil</label>
              <select className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-800 text-sm" value={formData.tipo_perfil} onChange={e => setFormData({...formData, tipo_perfil: e.target.value})}>
                <option value="Estándar">Estándar</option>
                <option value="Front Desk">Front Desk</option>
                <option value="Limpieza">Limpieza</option>
                <option value="Mantenimiento">Mantenimiento</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Currículum Vitae (PDF Opcional)</label>
              <input type="file" accept="application/pdf" className="w-full text-sm text-zinc-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100" onChange={e => setCvFile(e.target.files?.[0] || null)} />
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="w-full bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-medium py-2 rounded-lg transition-colors text-sm">
                Guardar Empleado
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800">
              <th className="py-3 px-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Empleado</th>
              <th className="py-3 px-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Rol</th>
              <th className="py-3 px-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Tipo Perfil</th>
              <th className="py-3 px-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Fecha Ingreso</th>
              <th className="py-3 px-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider text-right">Rendimiento (NPS)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {loading ? (
              <tr><td colSpan={5} className="py-8 text-center text-sm text-zinc-500">Conectando con el Training Server...</td></tr>
            ) : employees.length === 0 ? (
              <tr><td colSpan={5} className="py-8 text-center text-sm text-zinc-500">No hay empleados registrados o el servidor de base de datos no está corriendo.</td></tr>
            ) : employees.map((emp: any) => (
              <tr key={emp.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-300">
                      <Users size={14} />
                    </div>
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{emp.nombre}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-zinc-600 dark:text-zinc-400">{emp.rol}</td>
                <td className="py-3 px-4 text-sm text-zinc-600 dark:text-zinc-400">{emp.tipo_perfil || 'Estándar'}</td>
                <td className="py-3 px-4 text-sm text-zinc-600 dark:text-zinc-400">
                  {emp.fecha_ingreso ? new Date(emp.fecha_ingreso).toLocaleDateString() : 'N/A'}
                </td>
                <td className="py-3 px-4 text-right">
                  <div className="flex justify-end items-center gap-2">
                    <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{emp.nps_global || '-'}</span>
                    <TrendingUp size={16} className="text-zinc-400" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
