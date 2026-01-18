import type React from "react"
import { cn } from "@/lib/utils"

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
}

export function FloatingElement({ children, className }: FloatingElementProps) {
  return <div className={cn("transition-transform duration-300", className)}>{children}</div>
}
