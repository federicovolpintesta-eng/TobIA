"use client";

import { QrCode, Download, Printer, Copy, MapPin, Sparkles, SlidersHorizontal, Activity, Info } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function OnSitePage() {
  const surveyUrl = "/survey/RES-1234";
  const [qrColor, setQrColor] = useState("18181b");


  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-zinc-50/50">
      <div className="flex-1 p-8 max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">InHouse Inteligente</h1>
          <p className="text-zinc-500 mt-1">QRs dinámicos y mapas de calor predictivos impulsados por TobIA.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Generador de QR */}
          <div className="col-span-1 lg:col-span-2 bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-zinc-100 flex justify-between items-center bg-white">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-zinc-100 rounded-lg text-zinc-600">
                  <QrCode size={18} />
                </div>
                <h3 className="font-bold text-zinc-900">QR Generator Builder</h3>
              </div>
              <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full font-semibold flex items-center gap-1">
                <Sparkles size={12} /> Auto-A/B Testing
              </span>
            </div>
            
            <div className="p-6 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1 space-y-6 w-full">
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Ubicación Física del Display</label>
                    <select className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow">
                      <option>Recepción (Check-out)</option>
                      <option>Restaurante Principal (Mesas)</option>
                      <option>Spa / Piscina</option>
                      <option>Habitación (Mesa de noche)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Comportamiento Asignado (Intent)</label>
                    <select className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow">
                      <option>Predictivo IA (Cambia según la hora)</option>
                      <option>Captura de NPS (Fijo)</option>
                      <option>Pedido a Room Service (Fijo)</option>
                    </select>
                    <p className="text-xs text-zinc-500 mt-2 flex items-center gap-1">
                      <Info size={12}/> Predictivo: De mañana ofrece "Pedir Desayuno", de tarde "Valorar Spa".
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Personalización Visual</label>
                    <div className="flex items-center gap-3">
                      <div className="flex gap-2">
                        <button onClick={() => { setQrColor("18181b"); toast.success("Color negro aplicado al QR"); }} className={`w-8 h-8 rounded-full bg-zinc-900 border-2 border-transparent transition-all ${qrColor === "18181b" ? "ring-2 ring-indigo-500 ring-offset-2" : "hover:ring-2 hover:ring-zinc-400 hover:ring-offset-2"}`}></button>
                        <button onClick={() => { setQrColor("059669"); toast.success("Color verde aplicado al QR"); }} className={`w-8 h-8 rounded-full bg-emerald-600 border-2 border-transparent transition-all ${qrColor === "059669" ? "ring-2 ring-emerald-500 ring-offset-2" : "hover:ring-2 hover:ring-emerald-400 hover:ring-offset-2"}`}></button>
                        <button onClick={() => { setQrColor("4f46e5"); toast.success("Color azul aplicado al QR"); }} className={`w-8 h-8 rounded-full bg-indigo-600 border-2 border-transparent transition-all ${qrColor === "4f46e5" ? "ring-2 ring-indigo-500 ring-offset-2" : "hover:ring-2 hover:ring-indigo-400 hover:ring-offset-2"}`}></button>
                      </div>
                      <div className="h-6 w-px bg-zinc-300 mx-2"></div>
                      <button onClick={() => toast.info("Subir logo personalizado (Mockup)")} className="flex items-center gap-2 text-sm text-zinc-600 bg-zinc-100 hover:bg-zinc-200 px-3 py-1.5 rounded-lg transition-colors">
                        <SlidersHorizontal size={14} /> Logo Central
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* QR Preview Box */}
              <div className="flex flex-col items-center justify-center p-8 bg-zinc-50 border border-zinc-200 rounded-xl shrink-0 w-full md:w-[300px]">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${surveyUrl}&color=${qrColor}&bgcolor=ffffff`}
                    alt="QR Code" 
                    className="relative w-48 h-48 border border-zinc-200 rounded-xl p-3 bg-white shadow-sm cursor-pointer"
                    onClick={() => {
                      navigator.clipboard.writeText(surveyUrl);
                      toast.success("Enlace del QR copiado al portapapeles");
                    }}
                  />
                  {/* Fake Logo inside QR */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                      <span className="font-bold text-zinc-900 text-[10px]">TobIA</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-6 w-full">
                  <button onClick={() => {
                    const link = document.createElement('a');
                    link.href = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${surveyUrl}&color=${qrColor}&bgcolor=ffffff`;
                    link.download = 'InHouse_QR.png';
                    link.target = '_blank';
                    link.click();
                    toast.success("Iniciando descarga de InHouse_QR_Recepción.png");
                  }} className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 text-white px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm">
                    <Download size={16} /> Descargar
                  </button>
                  <button onClick={() => toast.info("Enviando a impresora configurada...")} className="flex-1 flex items-center justify-center gap-2 bg-white border border-zinc-300 text-zinc-700 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors shadow-sm">
                    <Printer size={16} /> Imprimir
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* AI Heatmap Sidebar */}
          <div className="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
            <div className="px-6 py-5 border-b border-zinc-100 flex items-center gap-3">
              <div className="p-2 bg-rose-50 rounded-lg text-rose-500">
                <Activity size={18} />
              </div>
              <h3 className="font-bold text-zinc-900">Mapa de Calor Predictivo</h3>
            </div>
            
            <div className="p-6 flex-1 bg-zinc-50 flex flex-col gap-4">
              <p className="text-xs text-zinc-500 mb-2">Zonas con mayor probabilidad de escaneo (próximas 2 horas):</p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-rose-100 shadow-sm relative overflow-hidden hover:shadow-md cursor-pointer transition-shadow" onClick={() => toast.success("Analizando tráfico del Restaurante...")}>
                  <div className="absolute top-0 right-0 bottom-0 w-2 bg-rose-500"></div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-zinc-900">Restaurante Principal</h4>
                      <p className="text-xs text-zinc-500 mt-1">Pico estimado: Almuerzo</p>
                    </div>
                    <span className="text-rose-600 font-bold bg-rose-50 px-2 py-1 rounded text-sm">89%</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-orange-100 shadow-sm relative overflow-hidden hover:shadow-md cursor-pointer transition-shadow" onClick={() => toast.success("Analizando tráfico de la Piscina...")}>
                  <div className="absolute top-0 right-0 bottom-0 w-2 bg-orange-400"></div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-zinc-900">Área de Piscina</h4>
                      <p className="text-xs text-zinc-500 mt-1">Clima: Soleado (+20%)</p>
                    </div>
                    <span className="text-orange-600 font-bold bg-orange-50 px-2 py-1 rounded text-sm">64%</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-emerald-100 shadow-sm relative overflow-hidden hover:shadow-md cursor-pointer transition-shadow" onClick={() => toast.success("Analizando tráfico de Recepción...")}>
                  <div className="absolute top-0 right-0 bottom-0 w-2 bg-emerald-400"></div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-zinc-900">Recepción</h4>
                      <p className="text-xs text-zinc-500 mt-1">Flujo normal</p>
                    </div>
                    <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded text-sm">22%</span>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-4">
                <button onClick={() => toast.info("Generando mapa 3D interactivo...")} className="w-full py-2.5 text-sm font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <MapPin size={16} /> Ver Mapa 3D del Hotel
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
