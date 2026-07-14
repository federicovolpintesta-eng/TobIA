"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Send, ArrowRight, CheckCircle2 } from "lucide-react";
import { useParams } from "next/navigation";

// Definición de pasos
const STEPS = [
  { id: 'guest_info', title: "Datos de tu estadía" },
  { id: 'nps', title: "¿Qué tan probable es que recomiendes nuestro hotel a un amigo o familiar?" },
  { id: 'csat_reception', title: "Recepción y Bienvenida" },
  { id: 'csat_room', title: "Limpieza y Confort de la Habitación" },
  { id: 'csat_fb', title: "Alimentos y Bebidas" },
  { id: 'feedback', title: "¿Hay algo más que nos quieras comentar?" },
];

export default function SurveyPage() {
  const params = useParams();
  const stayId = params?.stay_id as string;
  
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1); // 1 para adelante, -1 para atrás
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Estado del formulario
  const [guestInfo, setGuestInfo] = useState({ firstName: "", lastName: "", checkIn: "", checkOut: "", room: "" });
  const [npsScore, setNpsScore] = useState<number | null>(null);
  const [csatScores, setCsatScores] = useState<Record<string, number>>({});
  const [feedback, setFeedback] = useState("");

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setDirection(1);
      setCurrentStep(prev => prev + 1);
    } else {
      submitSurvey();
    }
  };

  const submitSurvey = async () => {
    setIsSubmitting(true);
    try {
      const payload = {
        guestName: guestInfo.firstName,
        lastName: guestInfo.lastName,
        checkIn: guestInfo.checkIn,
        checkOut: guestInfo.checkOut,
        roomNumber: guestInfo.room,
        nps: npsScore,
        comment: feedback
      };

      await fetch('/api/v1/submit/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
      setIsCompleted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Variantes para animación fluida entre pasos
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring" as any, stiffness: 300, damping: 30 }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
      transition: { type: "spring" as any, stiffness: 300, damping: 30 }
    })
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center shadow-2xl"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 size={40} />
          </motion.div>
          <h2 className="text-3xl font-light text-zinc-100 mb-4">¡Gracias por tu tiempo!</h2>
          <p className="text-zinc-400">Tus comentarios nos ayudan a crear experiencias inolvidables.</p>
        </motion.div>
      </div>
    );
  }

  const step = STEPS[currentStep];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-emerald-500/30">
      {/* Header Premium / Barra de progreso */}
      <header className="pt-8 px-6 pb-4 max-w-2xl w-full mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="text-xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
            Lumière Hotels
          </div>
          <div className="text-sm font-medium text-zinc-500">
            {currentStep + 1} / {STEPS.length}
          </div>
        </div>
        <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-400"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>
      </header>

      {/* Área del Formulario */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 w-full max-w-2xl mx-auto">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full"
          >
            <h1 className="text-3xl md:text-4xl font-light text-center leading-tight mb-12 text-zinc-100">
              {step.title}
            </h1>

            {/* Paso 0: Guest Info */}
            {step.id === 'guest_info' && (
              <div className="w-full bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8 shadow-xl space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Nombre</label>
                    <input 
                      type="text" 
                      value={guestInfo.firstName}
                      onChange={e => setGuestInfo({...guestInfo, firstName: e.target.value})}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Apellido</label>
                    <input 
                      type="text" 
                      value={guestInfo.lastName}
                      onChange={e => setGuestInfo({...guestInfo, lastName: e.target.value})}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="Tu apellido"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Check-in</label>
                    <input 
                      type="date" 
                      value={guestInfo.checkIn}
                      onChange={e => setGuestInfo({...guestInfo, checkIn: e.target.value})}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Check-out</label>
                    <input 
                      type="date" 
                      value={guestInfo.checkOut}
                      onChange={e => setGuestInfo({...guestInfo, checkOut: e.target.value})}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Número de Habitación</label>
                  <input 
                    type="text" 
                    value={guestInfo.room}
                    onChange={e => setGuestInfo({...guestInfo, room: e.target.value})}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="Ej. 304"
                  />
                </div>

                <button
                  onClick={nextStep}
                  disabled={!guestInfo.firstName || !guestInfo.lastName || !guestInfo.checkIn || !guestInfo.checkOut || !guestInfo.room}
                  className="mt-4 w-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed text-zinc-950 font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300"
                >
                  Continuar <ArrowRight size={18} />
                </button>
              </div>
            )}

            {/* Paso 1: NPS */}
            {step.id === 'nps' && (
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
                  <button
                    key={score}
                    onClick={() => {
                      setNpsScore(score);
                      setTimeout(nextStep, 400); // Auto-advance
                    }}
                    className={`w-12 h-14 md:w-14 md:h-16 rounded-2xl flex flex-col items-center justify-center text-lg md:text-xl transition-all duration-300 ${
                      npsScore === score 
                      ? "bg-emerald-500 text-zinc-950 scale-110 shadow-[0_0_20px_rgba(16,185,129,0.3)] font-semibold" 
                      : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
                    }`}
                  >
                    {score}
                  </button>
                ))}
                <div className="w-full flex justify-between px-2 mt-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  <span>Nada probable</span>
                  <span>Muy probable</span>
                </div>
              </div>
            )}

            {/* Pasos Intermedios: CSAT */}
            {step.id.startsWith('csat_') && (
              <div className="flex justify-center gap-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => {
                      setCsatScores(prev => ({ ...prev, [step.id]: star }));
                      setTimeout(nextStep, 400);
                    }}
                    className="relative group p-2"
                  >
                    <Star 
                      size={48} 
                      fill={csatScores[step.id] >= star ? "currentColor" : "none"}
                      className={`transition-all duration-300 ${
                        csatScores[step.id] >= star 
                        ? "text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)] scale-110 fill-current" 
                        : "text-zinc-700 group-hover:text-zinc-500"
                      }`}
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Paso Final: Texto */}
            {step.id === 'feedback' && (
              <div className="w-full">
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Nos encantaría leer más detalles sobre tu experiencia..."
                  className="w-full h-40 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 resize-none transition-all duration-300 text-lg leading-relaxed"
                />
                <button
                  onClick={nextStep}
                  disabled={isSubmitting}
                  className="mt-8 w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold py-5 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-6 h-6 border-2 border-zinc-950 border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <span>Enviar Comentarios</span>
                      <Send size={20} />
                    </>
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Controles Navigación Inferior (Si no es feedback ni final ni form inicial) */}
      {step.id !== 'feedback' && step.id !== 'guest_info' && (
        <footer className="py-8 px-6 max-w-2xl w-full mx-auto flex justify-end">
          <button
            onClick={nextStep}
            className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors font-medium group"
          >
            Saltar
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </footer>
      )}
    </div>
  );
}
