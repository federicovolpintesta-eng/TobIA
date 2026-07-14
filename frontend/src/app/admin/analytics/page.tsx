"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { DateRangePicker } from "@/components/date-range-picker";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, Line } from "recharts";

export default function AnalyticsExplorerPage() {
  const searchParams = useSearchParams();
  const defaultMetric = searchParams.get('metric') || 'adr';
  
  const [metric, setMetric] = useState(defaultMetric);
  const [breakdown, setBreakdown] = useState("channel");
  const [crossWith, setCrossWith] = useState("nps_score");
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({ from: undefined, to: undefined });
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let url = `/api/v1/financials/explore?metric=${metric}&breakdown=${breakdown}&cross_with=${crossWith}`;
    
    const params = new URLSearchParams();
    if (dateRange.from) {
      params.append('start_date', dateRange.from.toISOString().split('T')[0]);
    }
    if (dateRange.to) {
      params.append('end_date', dateRange.to.toISOString().split('T')[0]);
    }
    if (params.toString()) {
      url += `&${params.toString()}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((resData) => {
        const formatted = resData.results.map((item: any) => ({
          name: item[breakdown],
          [metric]: parseFloat(item.primary_value || 0).toFixed(2),
          [crossWith]: parseFloat(item.cross_value || 0).toFixed(2)
        }));
        setData(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [metric, breakdown, crossWith, dateRange]);

  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-transparent">
      <div className="flex-1 p-8 max-w-7xl mx-auto space-y-8">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between md:items-end gap-4"
        >
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Explorador Analítico</h2>
            <p className="text-zinc-500 dark:text-zinc-400 mt-1">Deshuesa tus métricas principales y cruza información operativa con experiencia de cliente.</p>
          </div>
          <div className="flex flex-col gap-1 min-w-[200px]">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Rango de Fechas</label>
            <DateRangePicker onDateChange={setDateRange} />
          </div>
        </motion.div>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Métrica Principal a Explorar</label>
              <select 
                value={metric}
                onChange={(e) => setMetric(e.target.value)}
                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block p-2.5"
              >
                <option value="adr">ADR (Tarifa Promedio)</option>
                <option value="revpar">RevPAR (Ingreso por Hab.)</option>
                <option value="nps_score">NPS (Net Promoter Score)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Desglosar por (Dimensión)</label>
              <select 
                value={breakdown}
                onChange={(e) => setBreakdown(e.target.value)}
                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block p-2.5"
              >
                <option value="channel">Canal de Venta</option>
                <option value="room_type">Tipo de Habitación</option>
                <option value="segment">Segmento de Cliente</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Cruzar con (Métrica Secundaria)</label>
              <select 
                value={crossWith}
                onChange={(e) => setCrossWith(e.target.value)}
                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block p-2.5"
              >
                <option value="nps_score">NPS (Net Promoter Score)</option>
                <option value="adr">ADR (Tarifa Promedio)</option>
                <option value="revpar">RevPAR</option>
              </select>
            </div>
          </div>

          <div className="h-[400px] w-full">
            {loading ? (
              <div className="flex items-center justify-center h-full text-zinc-500">Cargando datos...</div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4e4e7" className="dark:stroke-zinc-800" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#a1a1aa', fontSize: 12}} dy={10} />
                  <YAxis yAxisId="left" orientation="left" axisLine={false} tickLine={false} tick={{fill: '#a1a1aa', fontSize: 12}} />
                  <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{fill: '#a1a1aa', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  />
                  <Legend />
                  <Bar yAxisId="left" dataKey={metric} fill="#10b981" radius={[4, 4, 0, 0]} name={metric.toUpperCase()} />
                  <Line yAxisId="right" type="monotone" dataKey={crossWith} stroke="#3b82f6" strokeWidth={3} name={crossWith.toUpperCase()} />
                </ComposedChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
