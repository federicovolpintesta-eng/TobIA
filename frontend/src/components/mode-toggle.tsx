"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 rounded-lg transition-colors flex items-center justify-center relative w-9 h-9"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 absolute transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0" />
      <Moon className="h-5 w-5 absolute transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100" />
    </button>
  )
}
