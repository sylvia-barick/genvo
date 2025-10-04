"use client"

import React, { useEffect, useState } from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  defaultActive?: string
}

export function AnimeNavBar({ items, className, defaultActive = "Home" }: NavBarProps) {
  const [mounted, setMounted] = useState(false)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>(defaultActive)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleNavClick = (itemName: string) => {
    setActiveTab(itemName)
    // Scroll to section if it exists
    const element = document.querySelector(itemName.toLowerCase() === 'home' ? 'body' : `#${itemName.toLowerCase()}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed top-5 left-0 right-0 z-[9999]">
      <div className="flex justify-center pt-6">
        <div className="flex items-center gap-3 border border-white/20 backdrop-blur-xl py-3 px-4 rounded-full shadow-2xl relative hover:shadow-primary/20 transition-all duration-500 hover:scale-105" style={{ background: 'var(--gradient-card)' }}>
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name
            const isHovered = hoveredTab === item.name

            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.name)}
                onMouseEnter={() => setHoveredTab(item.name)}
                onMouseLeave={() => setHoveredTab(null)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300",
                  "text-white/70 hover:text-white",
                  isActive && "text-white"
                )}
              >
                {isActive && (
                  <div className="absolute inset-0 rounded-full -z-10 overflow-hidden animate-pulse-glow">
                    <div className="absolute inset-0 bg-primary/25 rounded-full blur-md" />
                    <div className="absolute inset-[-4px] bg-primary/20 rounded-full blur-xl" />
                    <div className="absolute inset-[-8px] bg-primary/15 rounded-full blur-2xl" />
                    <div className="absolute inset-[-12px] bg-primary/5 rounded-full blur-3xl" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 animate-shine" />
                  </div>
                )}

                <span className="hidden md:inline relative z-10 font-bold text-lg tracking-wide font-['Inter'] bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent drop-shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:tracking-wider">
                  {item.name}
                </span>
                <span className="md:hidden relative z-10 transition-all duration-300 hover:scale-110 hover:rotate-12">
                  <Icon size={20} strokeWidth={2.5} className="drop-shadow-sm" />
                </span>

                {isHovered && !isActive && (
                  <div className="absolute inset-0 bg-white/10 rounded-full -z-10 animate-fade-in" />
                )}

                {isActive && (
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none">
                    <div className="relative w-12 h-12">
                      <div className="absolute w-10 h-10 bg-white rounded-full left-1/2 -translate-x-1/2 animate-float">
                        <div className="absolute w-2 h-2 bg-black rounded-full left-[25%] top-[40%] animate-blink" />
                        <div className="absolute w-2 h-2 bg-black rounded-full right-[25%] top-[40%] animate-blink" />
                        <div className="absolute w-2 h-1.5 bg-pink-300 rounded-full left-[15%] top-[55%]" />
                        <div className="absolute w-2 h-1.5 bg-pink-300 rounded-full right-[15%] top-[55%]" />
                        <div className="absolute w-4 h-2 border-b-2 border-black rounded-full left-[30%] top-[60%]" />
                        {hoveredTab && (
                          <>
                            <div className="absolute -top-1 -right-1 w-2 h-2 text-yellow-300 animate-spin">✨</div>
                            <div className="absolute -top-2 left-0 w-2 h-2 text-yellow-300 animate-bounce">✨</div>
                          </>
                        )}
                      </div>
                      <div className="absolute -bottom-1 left-1/2 w-4 h-4 -translate-x-1/2 bg-white rotate-45 animate-bounce-slow" />
                    </div>
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
