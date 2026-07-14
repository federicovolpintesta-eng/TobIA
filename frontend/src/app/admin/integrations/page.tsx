"use client";

import { Plug, CheckCircle2, RefreshCw, Server, ShieldCheck, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const INTEGRATIONS = [
  { id: 'opera', name: 'Oracle Opera PMS', type: 'PMS', status: 'connected', lastSync: 'Hace 5 min', logo: 'O' },
  { id: 'mews', name: 'Mews Property Management', type: 'PMS', status: 'available', lastSync: '-', logo: 'M' },
  { id: 'booking', name: 'Booking.com', type: 'OTA', status: 'connected', lastSync: 'Hace 12 min', logo: 'B' },
  { id: 'expedia', name: 'Expedia Group', type: 'OTA', status: 'syncing', lastSync: 'Sincronizando...', logo: 'E' },
  { id: 'tripadvisor', name: 'TripAdvisor', type: 'Reputation', status: 'connected', lastSync: 'Hace 1 hora', logo: 'T' },
  { id: 'despegar', name: 'Despegar', type: 'OTA', status: 'available', lastSync: '-', logo: 'D' },
];

export default function IntegrationsPage() {
  const [integrations, setIntegrations] = useState(INTEGRATIONS);

  const handleConnect = (id: string) => {
    setIntegrations(integrations.map(i => i.id === id ? { ...i, status: 'syncing' } : i));
    toast.info("Iniciando conexión segura...");
    
    setTimeout(() => {
      setIntegrations(integrations.map(i => i.id === id ? { ...i, status: 'connected', lastSync: 'Ahora mismo' } : i));
      toast.success("Integración conectada exitosamente");
    }, 2500);
  };

  const handleDisconnect = (id: string) => {
    setIntegrations(integrations.map(i => i.id === id ? { ...i, status: 'available', lastSync: '-' } : i));
    toast.error("Integración desconectada");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-zinc-50 dark:bg-zinc-950 transition-colors">
      <div className="px-8 py-6 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight flex items-center gap-2">
          <Plug className="text-indigo-500" /> Integraciones <span className="bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">API REST</span>
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Conecta TobIA con tu PMS, Channel Manager y OTAs para sincronización bidireccional en tiempo real.</p>
      </div>

      <div className="flex-1 overflow-y-auto p-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map(integration => (
            <div key={integration.id} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm flex flex-col relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xl font-black text-zinc-400 dark:text-zinc-500">
                  {integration.logo}
                </div>
                {integration.status === 'connected' && <span className="text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 p-1.5 rounded-full"><ShieldCheck size={18} /></span>}
                {integration.status === 'syncing' && <span className="text-indigo-500 bg-indigo-50 dark:bg-indigo-500/10 p-1.5 rounded-full animate-spin"><RefreshCw size={18} /></span>}
                {integration.status === 'available' && <span className="text-zinc-400 bg-zinc-50 dark:bg-zinc-800 p-1.5 rounded-full"><Server size={18} /></span>}
              </div>
              
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg mb-1">{integration.name}</h3>
              <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-4">{integration.type}</p>
              
              <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/50 flex items-center justify-between">
                <span className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                  <RefreshCw size={12} className={integration.status === 'syncing' ? 'animate-spin' : ''} /> {integration.lastSync}
                </span>
                
                {integration.status === 'connected' ? (
                  <button onClick={() => handleDisconnect(integration.id)} className="text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 dark:bg-rose-500/10 dark:hover:bg-rose-500/20 px-3 py-1.5 rounded-lg transition-colors">Desconectar</button>
                ) : integration.status === 'syncing' ? (
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 px-3 py-1.5">Conectando...</span>
                ) : (
                  <button onClick={() => handleConnect(integration.id)} className="text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-lg transition-colors">Conectar</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
