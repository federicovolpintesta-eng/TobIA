"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { UploadCloud, FileSpreadsheet, CheckCircle, AlertCircle, Info } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function ImportPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      if (selected.name.endsWith('.xlsx') || selected.name.endsWith('.csv')) {
        setFile(selected);
      } else {
        toast.error("Formato no válido", { description: "Por favor sube un archivo .xlsx o .csv" });
      }
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const selected = e.dataTransfer.files[0];
      if (selected.name.endsWith('.xlsx') || selected.name.endsWith('.csv')) {
        setFile(selected);
      } else {
        toast.error("Formato no válido", { description: "Por favor sube un archivo .xlsx o .csv" });
      }
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/v1/financials/upload", {
        method: "POST",
        body: formData,
      });
      
      const data = await res.json();
      
      if (res.ok) {
        toast.success("Importación exitosa", { description: "Las métricas se han calculado y guardado correctamente." });
        setFile(null);
        setTimeout(() => router.push('/admin/dashboard'), 1500);
      } else {
        toast.error("Error al importar", { description: data.error || "Revisa el formato de tu archivo." });
      }
    } catch (err) {
      toast.error("Error de conexión", { description: "No se pudo conectar con el servidor." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-transparent">
      <div className="flex-1 p-8 max-w-4xl mx-auto space-y-8">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Importar Datos Financieros</h2>
            <p className="text-zinc-500 dark:text-zinc-400 mt-1">Sube el reporte de tu PMS (formato Excel o CSV) para automatizar el cálculo de GOPPAR, RevPAR y ADR.</p>
          </div>
        </motion.div>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 shadow-sm">
          
          <div 
            className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors cursor-pointer ${file ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10' : 'border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'}`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept=".xlsx,.csv" 
              onChange={handleFileChange} 
            />
            
            {file ? (
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <FileSpreadsheet size={32} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">{file.name}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{(file.size / 1024).toFixed(2)} KB</p>
                </div>
                <button 
                  onClick={(e) => { e.stopPropagation(); setFile(null); }}
                  className="text-sm text-rose-500 hover:text-rose-600 font-medium mt-2"
                >
                  Quitar archivo
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-zinc-500 dark:text-zinc-400">
                  <UploadCloud size={32} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Arrastra tu archivo aquí</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">o haz clic para buscar en tu computadora</p>
                </div>
                <p className="text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full text-zinc-600 dark:text-zinc-400 mt-2">Soporta .XLSX y .CSV</p>
              </div>
            )}
          </div>

          <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
            <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <Info size={16} />
              <span>Asegúrate de que tu archivo contenga las columnas: Fecha, Ingresos Habitaciones, Total Gastos Operativos, etc.</span>
            </div>
            
            <button
              onClick={handleUpload}
              disabled={!file || loading}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors ${!file || loading ? 'bg-zinc-100 text-zinc-400 cursor-not-allowed dark:bg-zinc-800 dark:text-zinc-500' : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-md'}`}
            >
              {loading ? (
                <>Procesando...</>
              ) : (
                <>
                  <CheckCircle size={18} />
                  Procesar y Calcular
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
