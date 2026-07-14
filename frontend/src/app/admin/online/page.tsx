"use client";

import { useEffect, useState } from "react";
import { Globe, Star, TrendingUp } from "lucide-react";

interface ReputationData {
  iro_score: number;
  total_reviews: number;
}

export default function OnlineReputationPage() {
  const [data, setData] = useState<ReputationData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/v1/hotel-data")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching reputation data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-4 border-b border-zinc-100">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight">Reputación Online</h1>
          <p className="text-sm text-zinc-500 mt-1.5 font-light">
            Consolidación de reseñas en plataformas públicas (Booking, TripAdvisor, Google).
          </p>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-6 w-6 border-2 border-zinc-200 border-t-zinc-800"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main KPI Card */}
          <div className="col-span-1 md:col-span-3 bg-white border border-zinc-100 rounded-2xl p-8 flex items-center justify-between shadow-sm">
            <div>
              <h2 className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-3">
                Índice de Reputación (IRO)
              </h2>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-light text-zinc-900 tracking-tight">
                  {data?.iro_score ? data.iro_score.toFixed(1) : "0.0"}%
                </span>
                <span className="text-sm text-emerald-600 flex items-center font-medium bg-emerald-50 px-2 py-0.5 rounded-full">
                  <TrendingUp size={14} className="mr-1.5" /> +2.4% este mes
                </span>
              </div>
              <p className="text-sm text-zinc-400 mt-3 font-light">
                Basado en <span className="font-medium text-zinc-600">{data?.total_reviews || 0}</span> reseñas verificadas.
              </p>
            </div>
            <div className="w-16 h-16 bg-zinc-50 border border-zinc-100 text-zinc-400 rounded-full flex items-center justify-center">
              <Globe size={28} strokeWidth={1.5} />
            </div>
          </div>

          {/* Booking.com Mock */}
          <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-medium text-zinc-800">Booking.com</h3>
              <div className="bg-zinc-50 border border-zinc-200 text-zinc-700 text-xs font-semibold px-2.5 py-1 rounded-md">
                8.5 / 10
              </div>
            </div>
            <div className="w-full bg-zinc-100 rounded-full h-1.5 mb-4">
              <div className="bg-zinc-800 h-1.5 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <p className="text-xs text-zinc-400 font-light">Última actualización: hace 2 horas</p>
          </div>

          {/* TripAdvisor Mock */}
          <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-medium text-zinc-800">TripAdvisor</h3>
              <div className="flex items-center text-zinc-800 gap-0.5">
                <Star size={14} className="fill-current" />
                <Star size={14} className="fill-current" />
                <Star size={14} className="fill-current" />
                <Star size={14} className="fill-current" />
                <Star size={14} className="text-zinc-200" />
              </div>
            </div>
            <div className="w-full bg-zinc-100 rounded-full h-1.5 mb-4">
              <div className="bg-zinc-800 h-1.5 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <p className="text-xs text-zinc-400 font-light">Última actualización: hace 5 horas</p>
          </div>

          {/* Google Mock */}
          <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-medium text-zinc-800">Google Reviews</h3>
              <div className="flex items-center text-zinc-800 gap-0.5">
                <Star size={14} className="fill-current" />
                <Star size={14} className="fill-current" />
                <Star size={14} className="fill-current" />
                <Star size={14} className="fill-current opacity-40" />
                <Star size={14} className="text-zinc-200" />
              </div>
            </div>
            <div className="w-full bg-zinc-100 rounded-full h-1.5 mb-4">
              <div className="bg-zinc-800 h-1.5 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <p className="text-xs text-zinc-400 font-light">Última actualización: hace 1 día</p>
          </div>
        </div>
      )}
    </div>
  );
}
