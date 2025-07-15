"use client"

import { useState, useEffect } from "react"
import { Sun, Moon, Palette } from "lucide-react"
import { useTheme } from "../../context/ThemeContext"
import { ToggleButton, IconWrapper, GlowEffect } from "./styles"

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <ToggleButton>
        <Palette size={20} />
      </ToggleButton>
    )
  }

  return (
    <ToggleButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={toggleTheme}>
      <IconWrapper
        initial={false}
        animate={{
          rotate: isDark ? 180 : 0,
          scale: isDark ? 0.8 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {isDark ? <Moon size={20} color="#60a5fa" /> : <Sun size={20} color="#f59e0b" />}
      </IconWrapper>

      <GlowEffect
        gradient={
          isDark
            ? "linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)"
            : "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)"
        }
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </ToggleButton>
  )
}
