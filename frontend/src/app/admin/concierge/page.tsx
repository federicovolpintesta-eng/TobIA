"use client";

import { Send, Phone, MoreVertical, Bot, User, CheckCircle2, Languages, Sparkles, AlertCircle, Image as ImageIcon, Paperclip, Mic } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function ConciergePage() {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [autoTranslate, setAutoTranslate] = useState(true);

  const analyzeMessage = async (msg: string) => {
    setIsTyping(true);
    // Agrega el mensaje del usuario de inmediato
    setMessages(prev => [...prev, { text: msg, trans: "", isAi: false, language: "" }]);

    try {
      const res = await fetch('/api/v1/concierge/guest-messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg })
      });
      const data = await res.json();
      
      // Simulamos la respuesta automática de la IA usando la primera sugerencia
      const aiReply = (data.suggestions && data.suggestions.length > 0) ? data.suggestions[0] : "Entendido, enseguida lo resolvemos.";
      
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: aiReply, 
          trans: data.translation, 
          isAi: true, 
          language: data.language 
        }]);
        setAiSuggestions(data.suggestions && data.suggestions.length > 1 ? data.suggestions.slice(1) : ["Enviar mantenimiento", "Pedir disculpas"]);
        setIsTyping(false);
      }, 800);
    } catch (error) {
      toast.error("Error conectando con la IA");
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-zinc-50/50 dark:bg-zinc-950 transition-colors">
      {/* Header */}
      <div className="px-8 py-5 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex justify-between items-center transition-colors">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight flex items-center gap-2">
            Inbox Inteligente <span className="bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">En Línea</span>
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Interacción omnicanal asistida por TobIA.</p>
        </div>
        <div className="flex gap-3">
          <div 
            className={`flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-lg cursor-pointer transition-colors ${autoTranslate ? 'text-indigo-700 bg-indigo-50 hover:bg-indigo-100' : 'text-zinc-600 bg-zinc-100 hover:bg-zinc-200'}`} 
            onClick={() => {
              setAutoTranslate(!autoTranslate);
              toast.success(autoTranslate ? "Auto-Traducción desactivada" : "Auto-Traducción activada");
            }}
          >
            <Languages size={16} className={autoTranslate ? 'text-indigo-500' : 'text-zinc-400'} /> Auto-Traducción: {autoTranslate ? 'Activada' : 'Desactivada'}
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden p-6 gap-6 max-w-[1600px] mx-auto w-full">
        {/* Chat List */}
        <div className="w-80 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl flex flex-col shadow-sm shrink-0 overflow-hidden transition-colors">
          <div className="p-4 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-sm flex justify-between items-center">
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100">Conversaciones</h3>
            <span className="bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-xs font-bold px-2 py-0.5 rounded-full">12 Activas</span>
          </div>
          <div className="flex-1 overflow-y-auto divide-y divide-zinc-100 dark:divide-zinc-800 custom-scrollbar">
            {[
              { name: "Yuki Tanaka", room: "304", time: "Ahora", msg: "タオルを追加でもらえますか？", translated: "Podrían traerme toallas extra?", active: true, unread: 1, sentiment: "neutral" },
              { name: "Elena Suárez", room: "105", time: "10:15 AM", msg: "El desayuno estuvo frío hoy.", translated: "", active: false, unread: 0, sentiment: "negative" },
              { name: "+54 9 11 4444-5555", room: "Check-in", time: "Ayer", msg: "Quiero hacer late check-out.", translated: "", active: false, unread: 0, sentiment: "neutral" },
            ].map((chat, i) => (
              <div key={i} onClick={() => toast.info(`Abriendo chat con ${chat.name}`)} className={`p-4 cursor-pointer transition-all border-l-2 ${chat.active ? 'bg-indigo-50/50 dark:bg-indigo-500/10 border-indigo-500' : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/50 border-transparent'}`}>
                <div className="flex justify-between items-start mb-1.5">
                  <h4 className={`font-bold text-sm truncate ${chat.active ? 'text-indigo-900 dark:text-indigo-400' : 'text-zinc-900 dark:text-zinc-300'}`}>{chat.name}</h4>
                  <span className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 shrink-0">{chat.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="truncate pr-2 flex-1">
                    <p className={`text-xs truncate ${chat.active ? 'text-indigo-700 dark:text-indigo-300 font-medium' : 'text-zinc-500 dark:text-zinc-500'}`}>{chat.translated || chat.msg}</p>
                  </div>
                  {chat.unread > 0 ? (
                    <span className="w-5 h-5 bg-indigo-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold shadow-sm">
                      {chat.unread}
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">Hab {chat.room}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Window */}
        <div className="flex-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl flex flex-col shadow-sm overflow-hidden relative transition-colors">
          {/* Contact Info Header */}
          <div className="h-16 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-6 bg-white dark:bg-zinc-900 z-10 shadow-sm transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-emerald-100 dark:from-indigo-900 dark:to-emerald-900 flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold border border-indigo-200 dark:border-indigo-800">
                YT
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                  Yuki Tanaka 
                  <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 px-1.5 py-0.5 rounded text-[10px] font-bold border border-zinc-200 dark:border-zinc-700">🇯🇵 Japonés</span>
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Habitación 304 • VIP Pasajero</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-zinc-400 dark:text-zinc-500">
              <button onClick={() => toast.info("Iniciando llamada VoIP...")} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><Phone size={18} /></button>
              <button onClick={() => toast.info("Menú de opciones abierto")} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><MoreVertical size={18} /></button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-zinc-50/50 dark:bg-zinc-950/50" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '20px 20px', color: 'rgba(150, 150, 150, 0.1)' }}>
            
            {/* System Bubble */}
            <div className="flex justify-center">
              <span className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-3 py-1 rounded-full text-xs font-bold text-zinc-500 dark:text-zinc-400 shadow-sm flex items-center gap-1">
                <Sparkles size={12} className="text-emerald-500"/> Chat iniciado por TobIA Bot
              </span>
            </div>

            {/* Static Initial Message */}
            <div className="flex items-end gap-2 max-w-[80%]">
              <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-500 dark:text-zinc-400 shrink-0">
                <User size={14} />
              </div>
              <div className="space-y-1">
                <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-3.5 rounded-2xl rounded-bl-none shadow-sm relative group">
                  <p className="text-sm text-zinc-800 dark:text-zinc-200">タオルを追加でもらえますか？</p>
                  <div className="mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-700 flex items-start gap-1.5">
                    <Languages size={14} className="text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5"/>
                    <p className="text-xs text-indigo-700 dark:text-indigo-300 font-medium">¿Podrían traerme toallas extra?</p>
                  </div>
                </div>
                <span className="text-[10px] text-zinc-400 font-medium pl-1">10:40 AM</span>
              </div>
            </div>

            {/* AI Auto-Response Static */}
            <div className="flex items-end gap-2 max-w-[80%] ml-auto justify-end">
              <div className="space-y-1 flex flex-col items-end">
                <div className="bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 p-3.5 rounded-2xl rounded-br-none shadow-sm relative">
                  <div className="flex items-center gap-1.5 mb-1 text-indigo-600 dark:text-indigo-400">
                    <Sparkles size={12} /> <span className="text-[10px] font-bold uppercase">Respuesta Automática</span>
                  </div>
                  <p className="text-sm text-indigo-900 dark:text-indigo-100 mb-2">かしこまりました。すぐにハウスキーピングが新しいタオルを304号室にお持ちします。</p>
                  <p className="text-xs text-indigo-700/70 dark:text-indigo-300/70 italic border-t border-indigo-200/50 dark:border-indigo-800/50 pt-2">
                    "Entendido. Housekeeping llevará toallas nuevas a la habitación 304 enseguida."
                  </p>
                </div>
                <div className="flex items-center justify-end gap-1 pr-1">
                  <span className="text-[10px] text-zinc-400 font-medium">10:41 AM</span>
                  <CheckCircle2 size={12} className="text-indigo-500 dark:text-indigo-400" />
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500 flex items-center justify-center text-white shrink-0 shadow-md">
                <Bot size={14} />
              </div>
            </div>

            {/* Dynamic AI Suggested Responses */}
            {aiSuggestions.length > 0 && (
              <div className="flex justify-center my-6">
                <div className="bg-white dark:bg-zinc-800 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-4 shadow-lg max-w-lg w-full flex gap-3 items-start">
                  <div className="bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 p-2 rounded-lg"><Sparkles size={18}/></div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Sugerencias de la IA</h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Elige una respuesta rápida para enviar.</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {aiSuggestions.map((sug, idx) => (
                        <button key={idx} onClick={() => {
                          setMessages([...messages, { text: "Sugerencia enviada", trans: sug, isAi: false }]);
                          setAiSuggestions([]);
                          toast.success("Respuesta enviada");
                        }} className="bg-emerald-500 text-white hover:bg-emerald-400 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors">{sug}</button>
                      ))}
                      <button onClick={() => setAiSuggestions([])} className="bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors">Ignorar</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Dynamic Messages Array */}
            {messages.map((m, i) => (
              <div key={i} className={`flex items-end gap-2 max-w-[80%] ${m.isAi ? '' : 'ml-auto justify-end'}`}>
                {m.isAi && (
                  <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-500 dark:text-zinc-400 shrink-0">
                    <User size={14} />
                  </div>
                )}
                <div className={`space-y-1 flex flex-col ${m.isAi ? 'items-start' : 'items-end'}`}>
                  <div className={`border p-3.5 rounded-2xl shadow-sm relative ${m.isAi ? 'bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-bl-none' : 'bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-br-none'}`}>
                    <p className={`text-sm mb-2 ${m.isAi ? 'text-zinc-800 dark:text-zinc-200' : 'text-zinc-900 dark:text-zinc-100'}`}>{m.isAi ? m.text : m.trans}</p>
                    <div className={`mt-2 pt-2 flex items-start gap-1.5 ${m.isAi ? 'border-t border-zinc-100 dark:border-zinc-700' : 'border-t border-zinc-200 dark:border-zinc-700'}`}>
                      {m.isAi && <Languages size={14} className="text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5"/>}
                      <p className={`text-xs font-medium ${m.isAi ? 'text-indigo-700 dark:text-indigo-300' : 'text-zinc-500 dark:text-zinc-400 italic'}`}>{m.isAi ? m.trans : m.text}</p>
                    </div>
                  </div>
                  <div className={`flex items-center gap-1 px-1 ${m.isAi ? 'justify-start' : 'justify-end'}`}>
                    <span className="text-[10px] text-zinc-400 font-medium">Ahora</span>
                    {!m.isAi && <CheckCircle2 size={12} className="text-zinc-400" />}
                  </div>
                </div>
                {!m.isAi && (
                  <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-500 dark:text-zinc-400 shrink-0">
                    <User size={14} />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm">
                <Sparkles size={14} className="animate-pulse text-indigo-500" /> Analizando mensaje...
              </div>
            )}

          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 transition-colors">
            <div className="flex items-center gap-3">
              <button onClick={() => toast.info("Adjuntar archivo (deshabilitado)")} className="p-2 text-zinc-400 dark:text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors">
                <Paperclip size={20} />
              </button>
              
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && inputText.trim() && !isTyping) {
                      analyzeMessage(inputText);
                      setInputText("");
                    }
                  }}
                  placeholder="Simula un mensaje del huésped aquí..."
                  disabled={isTyping}
                  className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-xl pl-4 pr-10 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all disabled:opacity-50"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300">
                  <Mic size={18} />
                </button>
              </div>
              
              <button 
                disabled={isTyping}
                onClick={() => {
                  if (inputText.trim()) {
                    analyzeMessage(inputText);
                    setInputText("");
                  }
                }}
                className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-500 disabled:bg-indigo-400 transition-colors shadow-sm flex items-center justify-center"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="mt-2 flex justify-between items-center px-2">
              <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium flex items-center gap-1">
                <Sparkles size={10} className="text-indigo-500" /> Pruebas IA: Escribe un mensaje (ej. "I need more towels") y la IA lo procesará.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
