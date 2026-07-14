"use client";

import React, { useState, useRef, useEffect } from "react";
import { format, subDays, startOfMonth, endOfMonth, startOfYear } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/style.css";
import { motion, AnimatePresence } from "framer-motion";

interface DateRangePickerProps {
  onDateChange: (range: { from: Date | undefined; to: Date | undefined }) => void;
}

export function DateRangePicker({ onDateChange }: DateRangePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [range, setRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Notify parent on mount and range change
    onDateChange({ from: range?.from, to: range?.to });
  }, [range]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (selectedRange: DateRange | undefined) => {
    setRange(selectedRange);
  };

  const setPreset = (preset: "7days" | "thisMonth" | "ytd") => {
    const today = new Date();
    if (preset === "7days") {
      setRange({ from: subDays(today, 7), to: today });
    } else if (preset === "thisMonth") {
      setRange({ from: startOfMonth(today), to: endOfMonth(today) });
    } else if (preset === "ytd") {
      setRange({ from: startOfYear(today), to: today });
    }
  };

  const formatDate = (date: Date | undefined) => {
    if (!date) return "";
    return format(date, "d MMM, yyyy", { locale: es });
  };

  const displayString = range?.from
    ? range.to
      ? `${formatDate(range.from)} - ${formatDate(range.to)}`
      : formatDate(range.from)
    : "Seleccionar fechas";

  return (
    <div className="relative z-50" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium rounded-lg px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors min-w-[260px] justify-between shadow-sm"
      >
        <div className="flex items-center gap-2">
          <CalendarIcon size={16} className="text-emerald-500" />
          <span className="truncate">{displayString}</span>
        </div>
        <ChevronDown size={14} className="text-zinc-400" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xl flex flex-col md:flex-row gap-4 min-w-[max-content]"
          >
            <div className="flex flex-col gap-2 border-b md:border-b-0 md:border-r border-zinc-100 dark:border-zinc-800 pb-4 md:pb-0 md:pr-4">
              <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Filtros Rápidos</h4>
              <button onClick={() => setPreset("7days")} className="text-left text-sm px-3 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors">Últimos 7 días</button>
              <button onClick={() => setPreset("thisMonth")} className="text-left text-sm px-3 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors">Este mes</button>
              <button onClick={() => setPreset("ytd")} className="text-left text-sm px-3 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors">Año hasta la fecha</button>
            </div>
            
            <div className="day-picker-custom">
              <DayPicker
                mode="range"
                selected={range}
                onSelect={handleSelect}
                locale={es}
                showOutsideDays
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <style dangerouslySetInnerHTML={{__html: `
        .day-picker-custom .rdp-root {
          --rdp-accent-color: #10b981;
          --rdp-accent-background-color: #10b981;
          --rdp-day-font: inherit;
          margin: 0;
        }
        .dark .day-picker-custom .rdp-root {
          --rdp-background-color-dark: #18181b;
          color: #e4e4e7;
        }
        .day-picker-custom .rdp-day_selected {
          font-weight: bold;
        }
      `}} />
    </div>
  );
}
