

import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  icon: LucideIcon
  title: string
  description: string
  variant?: "featured" | "default" | "ml" | "paper"
  tags?: string[]
}

export function ProjectCard({ icon: Icon, title, description, variant = "default", tags }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-xl p-4 transition-all duration-300 cursor-pointer",
        "hover:translate-y-[-4px]",
        variant === "featured" && "bg-card border border-border hover:shadow-lg hover:shadow-cyan-500/5",
        variant === "default" && "bg-card border border-border hover:shadow-lg hover:shadow-cyan-500/5",
        variant === "ml" && "bg-card border border-border hover:shadow-lg hover:shadow-cyan-500/5",
        variant === "paper" && "bg-card border border-border hover:shadow-lg hover:shadow-cyan-500/5",
      )}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div
          className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center mb-3",
            variant === "featured" ? "bg-secondary" : "bg-secondary",
          )}
        >
          <Icon className="w-6 h-6 text-foreground" />
        </div>
        <h3 className="font-semibold text-sm mb-1 text-foreground">{title}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {tags.map((tag) => (
              <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
