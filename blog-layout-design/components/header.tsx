"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved dark mode preference
    const isDark = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem("darkMode", String(newMode))
    if (newMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-lg font-bold hover:animate-bounce-subtle">
          <span className="text-2xl">⭐</span>
          <span className="hover-rainbow transition-colors">bmo1211.site</span>
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <a href="/#about" className="text-sm font-medium hover-rainbow transition-all hover:animate-bounce-subtle">
            About
          </a>
          <a href="/#posts" className="text-sm font-medium hover-rainbow transition-all hover:animate-bounce-subtle">
            Posts
          </a>
          <a href="/#trash" className="text-sm font-medium hover-rainbow transition-all hover:animate-bounce-subtle">
            Trash
          </a>
          <a href="/#comment" className="text-sm font-medium hover-rainbow transition-all hover:animate-bounce-subtle">
            Comment
          </a>

          {/* Dark mode toggle */}
          <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="ml-2" aria-label="Toggle dark mode">
            {darkMode ? <Sun className="h-5 w-5 text-primary" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>
      </div>
    </header>
  )
}
