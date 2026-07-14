"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, MapPin, Send, Globe, MessageSquareQuote, Monitor, Bot, 
  Eye, Bell, User, Search, Gamepad2
} from "lucide-react";

const navigation = [
  { name: 'Inicio', href: '/admin/dashboard', icon: Home },
  { name: 'Empleados', href: '/admin/employees', icon: User },
  { name: 'Huéspedes', href: '/admin/guests', icon: User },
  { name: 'InHouse', href: '/admin/onsite', icon: MapPin },
  { name: 'Reseñas', href: '/admin/responses', icon: Send },
  { name: 'Reputación', href: '/admin/online', icon: Eye },
  { name: 'Comentarios', href: '/admin/semantic', icon: MessageSquareQuote },
  { name: 'Gestión de encuestas', href: '/admin/desk', icon: Monitor },
  { name: 'Concierge', href: '/admin/concierge', icon: Bot },
  { name: 'Integraciones', href: '/admin/integrations', icon: Globe },
  { name: 'Simulador', href: '/admin/training', icon: Gamepad2 },
];

import { Toaster, toast } from "sonner";
import { ModeToggle } from "@/components/mode-toggle";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex text-zinc-800 dark:text-zinc-200 font-sans selection:bg-zinc-200 dark:selection:bg-emerald-500/30 transition-colors duration-300">
      <Toaster position="top-right" richColors theme="system" />
      {/* Sidebar (Desktop) */}
      <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-zinc-900 border-r border-zinc-100 dark:border-zinc-800 fixed h-full z-20 transition-colors duration-300">
        <div className="h-20 flex items-center px-8">
          <div className="font-semibold text-xl tracking-tight text-zinc-900 dark:text-zinc-100">
            Tob<span className="text-emerald-500">IA</span>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive 
                  ? 'text-zinc-900 bg-zinc-100/80 dark:text-zinc-100 dark:bg-zinc-800/80' 
                  : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800/50'
                }`}
              >
                <item.icon size={18} strokeWidth={isActive ? 2 : 1.5} className={isActive ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-400 dark:text-zinc-500'} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-zinc-100 dark:border-zinc-800">
          <div className="rounded-xl p-4 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100/50 dark:border-zinc-700/50 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.5)]"></div>
                <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">OTAS Sync</span>
              </div>
              <Eye size={14} className="text-zinc-400 dark:text-zinc-500" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></div>
                <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">PMS Connected</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:pl-64 flex flex-col min-w-0 transition-colors duration-300">
        {/* Top Header */}
        <header className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800 h-20 flex items-center justify-between px-8 z-10 sticky top-0 transition-colors duration-300">
          <div className="flex items-center">
            <h1 className="text-lg font-medium text-zinc-800 dark:text-zinc-200">
              Los Pinos Resort & Spa Termal
            </h1>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative hidden lg:block w-72">
              <Search size={16} strokeWidth={1.5} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-2 border-none rounded-full bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-100 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-shadow"
                placeholder="Buscar..."
              />
            </div>

            <div className="flex items-center gap-3 border-l border-zinc-200 dark:border-zinc-800 pl-6">
              <ModeToggle />
              <button onClick={() => toast.info('No hay notificaciones nuevas')} className="relative p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors">
                <Bell size={20} strokeWidth={1.5} />
                <span className="absolute top-1.5 right-2 w-2 h-2 bg-rose-400 rounded-full border-2 border-white dark:border-zinc-900"></span>
              </button>
              <Link href="/admin/profile" className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                <User size={18} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
