"use client";

import { useState } from "react";
import { Upload, Mail, CheckCircle, AlertTriangle, FileSpreadsheet, Download } from "lucide-react";
import { toast } from "sonner";

export default function GuestEmailExtractorPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<{ valid: number, invalid: number, total: number } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setResults(null);
    }
  };

  const handleProcess = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast.error("Por favor selecciona un archivo CSV o Excel");
      return;
    }
    
    setLoading(true);
    
    const formData = new FormData();
    formData.append("file", file);
    formData.append("hotel", "75145545-764a-4b3f-bd9e-9f054c9a560e"); // ID de hotel de prueba

    try {
      const res = await fetch("/api/v1/guests/import_excel", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Error procesando archivo");
      
      const data = await res.json();
      setResults({
        total: data.total,
        valid: data.valid,
        invalid: data.invalid
      });
      toast.success(data.message || "Archivo procesado correctamente.");
    } catch (error) {
      console.error(error);
      toast.error("Hubo un problema procesando el archivo.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadTemplate = () => {
    toast.info("Descargando plantilla de ejemplo...");
    // Simulate template download
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Extractor de Correos</h1>
        <p className="text-zinc-500 mt-1">Importa tu listado de huéspedes para extraer correos electrónicos y enviar encuestas masivamente.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Upload Section */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <Upload size={18} className="text-emerald-500" /> Importar Archivo
            </h2>
            <button 
              onClick={handleDownloadTemplate}
              className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 flex items-center gap-1"
            >
              <Download size={14} /> Plantilla
            </button>
          </div>
          
          <form onSubmit={handleProcess}>
            <div className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl p-8 text-center bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors mb-6 relative">
              <input 
                type="file" 
                accept=".csv, .xlsx, .xls"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <FileSpreadsheet size={48} strokeWidth={1} className="mx-auto text-zinc-400 mb-4" />
              <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium mb-1">
                {file ? file.name : "Haz clic o arrastra un archivo aquí"}
              </p>
              <p className="text-xs text-zinc-500">Soporta CSV, XLSX o XLS hasta 10MB</p>
            </div>
            
            <button 
              type="submit" 
              disabled={!file || loading}
              className="w-full flex justify-center items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Procesando...
                </>
              ) : (
                <>
                  <Mail size={18} /> Extraer Correos
                </>
              )}
            </button>
          </form>
        </div>

        {/* Results Section */}
        <div>
          {results ? (
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2">
                <CheckCircle size={18} className="text-emerald-500" /> Resultados de Extracción
              </h2>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">{results.valid}</p>
                  <p className="text-xs font-medium text-emerald-700 dark:text-emerald-500 uppercase tracking-wide">Correos Válidos</p>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-800 rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-rose-600 dark:text-rose-400 mb-1">{results.invalid}</p>
                  <p className="text-xs font-medium text-rose-700 dark:text-rose-500 uppercase tracking-wide">Inválidos / Vacíos</p>
                </div>
              </div>
              
              <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4 mb-6 border border-zinc-100 dark:border-zinc-700">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Próximo Paso</p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Los correos válidos están listos para integrarse con la campaña de encuestas automatizadas. Se ignorarán las filas sin email.</p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => toast.success("Enviando a campaña de encuestas...")}
                className="w-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold py-3 rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                Continuar al Creador de Campañas
              </button>
            </div>
          ) : (
            <div className="h-full bg-zinc-50/50 dark:bg-zinc-900/20 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl flex flex-col items-center justify-center p-8 text-center text-zinc-400">
              <Mail size={48} strokeWidth={1} className="mb-4 opacity-50" />
              <p className="text-sm">Importa un archivo para ver los resultados de la extracción de correos.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
