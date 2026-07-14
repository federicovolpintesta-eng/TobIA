"use client";

import { Info, Sparkles, BrainCircuit, BarChart3, ArrowUpRight, ArrowDownRight, Clock, CheckCircle2, TrendingUp, DollarSign, Wallet, CalendarDays, Activity, Download, Filter, Upload } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { DateRangePicker } from "@/components/date-range-picker";

// Mock Data for Area Chart
const performanceData = [
  { time: "08:00", nps: 45, adr: 120, goppar: 40, revpar: 100, los: 2.1, casos: 15 },
  { time: "10:00", nps: 52, adr: 125, goppar: 42, revpar: 105, los: 2.2, casos: 14 },
  { time: "12:00", nps: 48, adr: 125, goppar: 42, revpar: 102, los: 2.2, casos: 16 },
  { time: "14:00", nps: 60, adr: 135, goppar: 48, revpar: 110, los: 2.4, casos: 12 },
  { time: "16:00", nps: 65, adr: 140, goppar: 50, revpar: 115, los: 2.5, casos: 10 },
  { time: "18:00", nps: 72, adr: 145, goppar: 52, revpar: 118, los: 2.5, casos: 8 },
  { time: "20:00", nps: 80, adr: 150, goppar: 55, revpar: 120, los: 2.6, casos: 5 },
];

export default function DashboardPage() {
  const router = useRouter();
  const [metrics, setMetrics] = useState<any[]>([]);
  const [latestMetric, setLatestMetric] = useState<any>(null);
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({ from: undefined, to: undefined });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('General');
  const [uploading, setUploading] = useState(false);
  const [showRefuerzoModal, setShowRefuerzoModal] = useState(false);
  const [showCampanaModal, setShowCampanaModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showHRModal, setShowHRModal] = useState(false);

  // Filters State
  const [showLine1, setShowLine1] = useState(true);
  const [showLine2, setShowLine2] = useState(true);

  const handleExport = () => {
    if (metrics.length === 0) {
      toast.error("No hay datos para exportar");
      return;
    }
    const headers = ["Fecha", "NPS", "ADR", "GOPPAR", "RevPAR", "LOS", "Casos"];
    const csvRows = [headers.join(",")];
    
    metrics.forEach(row => {
      csvRows.push(`${row.time},${row.nps},${row.adr},${row.goppar},${row.revpar},${row.los},${row.casos}`);
    });
    
    const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "reporte_general.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    toast.success("Archivo CSV descargado con éxito");
  };

  const handleRefuerzoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowRefuerzoModal(false);
    toast.success("Personal extra asignado al área exitosamente.");
  };

  const handleCampanaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCampanaModal(false);
    toast.success("Campaña push enviada a los huéspedes seleccionados.");
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/v1/financials/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Error procesando el archivo");
      const data = await res.json();
      toast.success(data.message || "Archivo financiero subido con éxito");
      
      setDateRange({...dateRange}); // force refresh
    } catch (err) {
      console.error(err);
      toast.error("Hubo un problema al procesar el archivo financiero.");
    } finally {
      setUploading(false);
      if (e.target) e.target.value = '';
    }
  };

  useEffect(() => {
    let url = "/api/v1/financials";
    const params = new URLSearchParams();
    if (dateRange.from) {
      params.append('start_date', dateRange.from.toISOString().split('T')[0]);
    }
    if (dateRange.to) {
      params.append('end_date', dateRange.to.toISOString().split('T')[0]);
    }
    if (params.toString()) {
      url += `?${params.toString()}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Sort by date ascending for the chart
        const sortedData = data.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());
        // Map data for recharts
        const chartData = sortedData.map((d: any) => ({
          time: d.date,
          nps: parseFloat(d.nps),
          adr: parseFloat(d.adr),
          goppar: parseFloat(d.goppar),
          revpar: parseFloat(d.revpar || 0),
          los: parseFloat(d.los || 0),
          casos: parseInt(d.casos || 0),
        }));
        setMetrics(chartData);
        if (sortedData.length > 0) {
          setLatestMetric(sortedData[sortedData.length - 1]);
        } else {
          setLatestMetric(null);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching metrics", err);
        setLoading(false);
      });
  }, [dateRange]);

  const KpiCard = ({ title, value, subtitle, trend, trendUp, icon: Icon, delay = 0 }: any) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
    >
      <div className="absolute -right-6 -top-6 w-24 h-24 bg-zinc-50 dark:bg-zinc-800/50 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out z-0"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-400">
              <Icon size={18} />
            </div>
            <h3 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">{title}</h3>
          </div>
        </div>
        <div className="flex items-end gap-3 mb-1">
          <span className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">{value}</span>
          {trend && (
            <span className={`text-xs font-semibold flex items-center mb-1.5 px-2 py-0.5 rounded-full ${trendUp ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' : 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400'}`}>
              {trendUp ? <ArrowUpRight size={14} className="mr-0.5" /> : <ArrowDownRight size={14} className="mr-0.5" />} 
              {trend}
            </span>
          )}
        </div>
        <p className="text-xs text-zinc-400">{subtitle}</p>
      </div>
    </motion.div>
  );

  const getChartConfig = () => {
    switch(activeTab) {
      case 'Financiero':
        return {
          title: "RevPAR vs GOPPAR",
          subtitle: "Evolución de ingresos y rentabilidad por habitación.",
          line1: { key: "revpar", color: "#3b82f6", label: "RevPAR ($)" },
          line2: { key: "goppar", color: "#10b981", label: "GOPPAR ($)" }
        };
      case 'Operaciones':
        return {
          title: "Tasa de Resolución vs Casos",
          subtitle: "Evolución de los tickets de operación y mantenimiento.",
          line1: { key: "casos", color: "#f43f5e", label: "Casos Abiertos" },
          line2: { key: "los", color: "#8b5cf6", label: "LOS" }
        };
      case 'Atención al Cliente':
      case 'General':
      default:
        return {
          title: "Evolución del NPS en Tiempo Real",
          subtitle: "Satisfacción vs Volumen de interacciones a lo largo del día.",
          line1: { key: "nps", color: "#10b981", label: "NPS" },
          line2: { key: "adr", color: "#3b82f6", label: "ADR ($)" }
        };
    }
  };

  const chartConfig = getChartConfig();

  if (loading && metrics.length === 0) {
    return <div className="p-8 flex justify-center text-zinc-500">Cargando tablero...</div>;
  }

  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-transparent">
      <div className="flex-1 p-8 max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Centro de Control (Live 🚀)</h2>
            <p className="text-zinc-500 dark:text-zinc-400 mt-1">Resumen general de operaciones y satisfacción.</p>
          </div>
          <div className="flex items-center gap-4">
            <DateRangePicker onDateChange={setDateRange} />
            <div className="flex items-center gap-3">
              <label className={`p-2 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer ${uploading ? 'opacity-50' : ''}`} title="Subir reporte financiero (Excel/CSV)">
                <input type="file" className="hidden" accept=".xlsx, .xls, .csv" onChange={handleFileUpload} disabled={uploading} />
                <Upload size={20} className="text-zinc-600 dark:text-zinc-400" />
              </label>
              <button onClick={handleExport} className="p-2 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors" title="Exportar reporte CSV">
                <Download size={20} className="text-zinc-600 dark:text-zinc-400" />
              </button>
              <button onClick={() => setShowFilterModal(true)} className="p-2 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors" title="Filtrar métricas">
                <Filter size={20} className="text-zinc-600 dark:text-zinc-400" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* HR Impact Banner */}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.1 }}
           className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex items-center justify-between shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500/20 text-indigo-700 rounded-lg">
              <BrainCircuit size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-indigo-900">Análisis Cruzado: RRHH vs Satisfacción (IRO)</h4>
              <p className="text-xs text-indigo-700/80 mt-0.5">El sistema ha detectado que el Equipo de Mañana (Turno A) tiene un 15% menos de quejas en check-out. <button onClick={() => setShowHRModal(true)} className="underline font-semibold hover:text-indigo-800">Ver reporte de impacto</button></p>
            </div>
          </div>
        </motion.div>

        {/* Insights 2.0 */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          {/* Card 1: Forecast */}
          <div className="bg-gradient-to-br from-indigo-900 to-indigo-950 rounded-2xl p-5 shadow-lg text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-400/30 transition-all"></div>
            <div className="relative z-10">
               <div className="flex justify-between items-start mb-3">
                 <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-300 backdrop-blur-sm"><Sparkles size={18}/></div>
                 <span className="text-xs font-semibold px-2 py-1 bg-indigo-500/30 rounded-full text-indigo-200">Forecast</span>
               </div>
               <h3 className="font-semibold text-base mb-1">Pico de Ocupación</h3>
               <p className="text-indigo-200/80 text-xs mb-4 leading-relaxed min-h-[48px]">Proyección: 95% para este viernes. Se detecta un posible cuello de botella en el Desayuno Buffet a las 9:00 AM.</p>
               <button onClick={() => setShowRefuerzoModal(true)} className="text-xs font-semibold bg-white/10 hover:bg-white/20 transition-colors px-3 py-1.5 rounded-lg w-full flex items-center justify-center gap-2"><CheckCircle2 size={14}/> Asignar Refuerzo</button>
            </div>
          </div>
          
          {/* Card 2: Alerta */}
          <div className="bg-gradient-to-br from-rose-900 to-rose-950 rounded-2xl p-5 shadow-lg text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/20 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-rose-400/30 transition-all"></div>
            <div className="relative z-10">
               <div className="flex justify-between items-start mb-3">
                 <div className="p-2 bg-rose-500/20 rounded-lg text-rose-300 backdrop-blur-sm"><Activity size={18}/></div>
                 <span className="text-xs font-semibold px-2 py-1 bg-rose-500/30 rounded-full text-rose-200">Alerta</span>
               </div>
               <h3 className="font-semibold text-base mb-1">Demoras Check-in</h3>
               <p className="text-rose-200/80 text-xs mb-4 leading-relaxed min-h-[48px]">Se detectaron 3 quejas recurrentes en los últimos 45 mins. El tiempo de espera promedio supera los 15 min.</p>
               <button onClick={() => { router.push('/admin/desk'); toast.info("Visualizando tickets prioritarios."); }} className="text-xs font-semibold bg-white/10 hover:bg-white/20 transition-colors px-3 py-1.5 rounded-lg w-full flex items-center justify-center gap-2"><Clock size={14}/> Ver Tickets (3)</button>
            </div>
          </div>

          {/* Card 3: Oportunidad */}
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 rounded-2xl p-5 shadow-lg text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-400/30 transition-all"></div>
            <div className="relative z-10">
               <div className="flex justify-between items-start mb-3">
                 <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-300 backdrop-blur-sm"><TrendingUp size={18}/></div>
                 <span className="text-xs font-semibold px-2 py-1 bg-emerald-500/30 rounded-full text-emerald-200">Oportunidad</span>
               </div>
               <h3 className="font-semibold text-base mb-1">Clima Lluvioso</h3>
               <p className="text-emerald-200/80 text-xs mb-4 leading-relaxed min-h-[48px]">Probabilidad de lluvia 80% mañana. Excelente oportunidad para promocionar el Spa Termal in-house.</p>
               <button onClick={() => setShowCampanaModal(true)} className="text-xs font-semibold bg-emerald-500/40 hover:bg-emerald-500/60 text-white transition-colors px-3 py-1.5 rounded-lg w-full flex items-center justify-center gap-2"><Sparkles size={14}/> Lanzar Campaña</button>
            </div>
          </div>
        </motion.div>

        {/* Tabs UI */}
        <div className="flex overflow-x-auto space-x-2 pb-2 mb-2 scrollbar-hide">
          {['General', 'Financiero', 'Operaciones', 'Atención al Cliente'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? 'bg-zinc-900 text-white dark:bg-emerald-500 dark:text-white shadow-sm'
                  : 'bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-50 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {(activeTab === 'General' || activeTab === 'Atención al Cliente') && (
            <div onClick={() => router.push('/admin/analytics?metric=nps_score')} className="cursor-pointer"><KpiCard title="NPS Global" value={latestMetric?.nps || "0"} subtitle="Promedio combinado" trend="4.2%" trendUp={true} icon={BarChart3} delay={0.1} /></div>
          )}
          {(activeTab === 'General' || activeTab === 'Financiero') && (
            <div onClick={() => router.push('/admin/analytics?metric=adr')} className="cursor-pointer"><KpiCard title="ADR" value={`$${latestMetric?.adr || "0"}`} subtitle="Tarifa Media Diaria" trend="2.4%" trendUp={true} icon={DollarSign} delay={0.2} /></div>
          )}
          {(activeTab === 'General' || activeTab === 'Financiero') && (
            <div className="cursor-pointer"><KpiCard title="GOPPAR" value={`$${latestMetric?.goppar || "0"}`} subtitle="Beneficio / Hab" trend="1.1%" trendUp={true} icon={Wallet} delay={0.3} /></div>
          )}
          {(activeTab === 'General' || activeTab === 'Financiero') && (
            <div onClick={() => router.push('/admin/analytics?metric=revpar')} className="cursor-pointer"><KpiCard title="RevPAR" value={`$${latestMetric?.revpar || "0"}`} subtitle="Ingreso / Hab" trend="3.2%" trendUp={true} icon={TrendingUp} delay={0.35} /></div>
          )}
          {(activeTab === 'General' || activeTab === 'Financiero') && (
            <div className="cursor-pointer"><KpiCard title="TRevPAR" value={`$${latestMetric?.trevpar || "0"}`} subtitle="Ingreso Total / Hab" trend="2.8%" trendUp={true} icon={Sparkles} delay={0.4} /></div>
          )}
          {(activeTab === 'General' || activeTab === 'Financiero') && (
            <div className="cursor-pointer"><KpiCard title="GOP" value={`$${latestMetric?.gop || "0"}`} subtitle="Beneficio Bruto" trend="5.1%" trendUp={true} icon={Activity} delay={0.45} /></div>
          )}
          {(activeTab === 'General' || activeTab === 'Operaciones') && (
            <div className="cursor-pointer"><KpiCard title="LOS" value={latestMetric?.los || "0"} subtitle="Estadía Promedio" trend="0.2" trendUp={true} icon={CalendarDays} delay={0.5} /></div>
          )}
          {(activeTab === 'General' || activeTab === 'Operaciones' || activeTab === 'Atención al Cliente') && (
            <div onClick={() => router.push('/admin/desk')} className="cursor-pointer"><KpiCard title="Casos Abiertos" value="12" subtitle="SLA en riesgo: 2" trend="3" trendUp={false} icon={Clock} delay={0.55} /></div>
          )}
          {(activeTab === 'General' || activeTab === 'Operaciones' || activeTab === 'Atención al Cliente') && (
            <div onClick={() => router.push('/admin/desk')} className="cursor-pointer"><KpiCard title="Tasa de Resolución" value="94%" subtitle="Últimas 24hs" trend="2.1%" trendUp={true} icon={CheckCircle2} delay={0.6} /></div>
          )}
          {(activeTab === 'General' || activeTab === 'Atención al Cliente') && (
            <div onClick={() => router.push('/admin/concierge')} className="cursor-pointer"><KpiCard title="Interacciones Bot" value="842" subtitle="Vía WhatsApp" trend="15%" trendUp={true} icon={BrainCircuit} delay={0.65} /></div>
          )}
        </div>

        {/* Gráficos y Pulso de Capacitación */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:col-span-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm flex flex-col"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{chartConfig.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{chartConfig.subtitle}</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                {showLine1 && <span className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full" style={{backgroundColor: chartConfig.line1.color}}></div> {chartConfig.line1.label}</span>}
                {showLine2 && <span className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full" style={{backgroundColor: chartConfig.line2.color}}></div> {chartConfig.line2.label}</span>}
              </div>
            </div>
            <div className="h-72 w-full mt-auto">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={metrics.length > 0 ? metrics : performanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorLine1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={chartConfig.line1.color} stopOpacity={0.3}/>
                      <stop offset="95%" stopColor={chartConfig.line1.color} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4e4e7" className="dark:stroke-zinc-800" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#a1a1aa', fontSize: 12}} dy={10} />
                  <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{fill: '#a1a1aa', fontSize: 12}} />
                  <YAxis yAxisId="right" orientation="right" hide />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', backgroundColor: 'var(--tooltip-bg, white)' }}
                    labelStyle={{ fontWeight: 'bold', color: 'var(--tooltip-text, #3f3f46)', marginBottom: '4px' }}
                  />
                  {showLine2 && <Area yAxisId="right" type="monotone" dataKey={chartConfig.line2.key} stroke={chartConfig.line2.color} strokeWidth={2} fillOpacity={1} fill="transparent" />}
                  {showLine1 && <Area yAxisId="left" type="monotone" dataKey={chartConfig.line1.key} stroke={chartConfig.line1.color} strokeWidth={3} fillOpacity={1} fill="url(#colorLine1)" />}
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Pulso de Capacitación */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2"><BrainCircuit size={20} className="text-indigo-500"/> Pulso de Capacitación</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Efectividad del equipo en simulador por rubro.</p>
            </div>
            <div className="flex-1 flex flex-col justify-center space-y-6">
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Operaciones</span>
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">92%</span>
                </div>
                <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-emerald-500 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: '92%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Financiero</span>
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400">78%</span>
                </div>
                <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: '78%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Atención al Cliente</span>
                  <span className="text-sm font-bold text-amber-600 dark:text-amber-400">65%</span>
                </div>
                <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-amber-500 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: '65%' }}></div>
                </div>
                <p className="text-xs text-rose-500 mt-2 font-medium flex items-center gap-1"><Info size={12}/> Sugerimos reforzar este módulo.</p>
              </div>

            </div>
            <button onClick={() => router.push('/admin/training')} className="mt-6 w-full py-2.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium rounded-lg text-sm transition-colors">
               Ver Reporte Detallado
            </button>
          </motion.div>
        </div>

      </div>
      
      {/* Refuerzo Modal */}
      {showRefuerzoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-2xl p-6 w-full max-w-md border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4">Asignar Refuerzo de Personal</h3>
            <form onSubmit={handleRefuerzoSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Área a reforzar</label>
                <select className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-2.5 text-sm outline-none focus:border-indigo-500 text-zinc-900 dark:text-zinc-100">
                  <option>Desayuno Buffet</option>
                  <option>Recepción</option>
                  <option>Housekeeping</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Cantidad de empleados</label>
                <input type="number" min="1" max="10" defaultValue="2" className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-2.5 text-sm outline-none focus:border-indigo-500 text-zinc-900 dark:text-zinc-100" />
              </div>
              <div className="flex justify-end gap-3">
                <button type="button" onClick={() => setShowRefuerzoModal(false)} className="px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100">Cancelar</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors">Asignar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Campaña Modal */}
      {showCampanaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-2xl p-6 w-full max-w-md border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4">Lanzar Campaña Promocional</h3>
            <form onSubmit={handleCampanaSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Canal de envío</label>
                <select className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-2.5 text-sm outline-none focus:border-emerald-500 text-zinc-900 dark:text-zinc-100">
                  <option>Notificación Push (App)</option>
                  <option>Email a Huéspedes In-House</option>
                  <option>WhatsApp Automatizado</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Mensaje de la campaña</label>
                <textarea rows={3} defaultValue="¡Clima lluvioso ideal para relajarse! 🌧️ Disfruta de un 20% de descuento en el Spa Termal hoy." className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-2.5 text-sm outline-none focus:border-emerald-500 text-zinc-900 dark:text-zinc-100 resize-none"></textarea>
              </div>
              <div className="flex justify-end gap-3">
                <button type="button" onClick={() => setShowCampanaModal(false)} className="px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100">Cancelar</button>
                <button type="submit" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors">Enviar Campaña</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Filter Modal */}
      {showFilterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-2xl p-6 w-full max-w-sm border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2"><Filter size={20} /> Filtros Avanzados</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Línea Principal ({chartConfig.line1.label})</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={showLine1} onChange={(e) => setShowLine1(e.target.checked)} />
                  <div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer dark:bg-zinc-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Línea Secundaria ({chartConfig.line2.label})</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={showLine2} onChange={(e) => setShowLine2(e.target.checked)} />
                  <div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer dark:bg-zinc-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button type="button" onClick={() => setShowFilterModal(false)} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors">Aplicar Filtros</button>
            </div>
          </div>
        </div>
      )}

      {/* HR Predictivo Modal */}
      {showHRModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-2xl p-6 w-full max-w-2xl border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-400 mb-2 flex items-center gap-2"><BrainCircuit size={24} /> Reporte Predictivo RRHH (TobIA)</h3>
            <p className="text-sm text-zinc-500 mb-6">Análisis de correlación entre desempeño del personal y satisfacción del huésped.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-zinc-800/50">
                <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Turno A (Mañana)</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm"><span className="text-zinc-500">Demoras Check-Out:</span><span className="font-medium text-emerald-600">-15%</span></div>
                  <div className="flex justify-between text-sm"><span className="text-zinc-500">Limpieza Hab.:</span><span className="font-medium text-emerald-600">+8% rapidez</span></div>
                  <div className="flex justify-between text-sm"><span className="text-zinc-500">Impacto en IRO:</span><span className="font-medium text-emerald-600">Positivo (+1.2)</span></div>
                </div>
              </div>
              <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-zinc-800/50">
                <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Turno B (Tarde)</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm"><span className="text-zinc-500">Demoras Check-In:</span><span className="font-medium text-rose-600">+22%</span></div>
                  <div className="flex justify-between text-sm"><span className="text-zinc-500">Servicio Cuarto:</span><span className="font-medium text-zinc-600">Estable</span></div>
                  <div className="flex justify-between text-sm"><span className="text-zinc-500">Impacto en IRO:</span><span className="font-medium text-rose-600">Negativo (-0.8)</span></div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 dark:bg-indigo-900/20 dark:border-indigo-800 rounded-lg p-4 mb-6">
              <h4 className="text-sm font-semibold text-indigo-900 dark:text-indigo-300 mb-1">Recomendación de la IA</h4>
              <p className="text-sm text-indigo-800 dark:text-indigo-200/80">Reforzar el equipo de recepción en el Turno B (15:00 a 17:00) para absorber los picos de llegada y nivelar la métrica de satisfacción con el Turno A.</p>
            </div>

            <div className="flex justify-end gap-3">
              <button type="button" onClick={() => setShowHRModal(false)} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors">Entendido</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

