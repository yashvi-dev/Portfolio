"use client"

import { Brain, Code2, TrendingUp, MessageSquare } from "lucide-react"
import { FloatingElement } from "./floating-element"
import { ProjectCard } from "./project-card"

const featuredProjects = [
  {
    icon: Brain,
    title: "Exoplanet Transit Detection Pipeline",
    description: "Implements a pipeline to detect exoplanet transits in TESS light curve data.",
  },
  {
    icon: Code2,
    title: "ML Review Analyzer",
    description: "Analyzes fake reviews and provides insights on quality.",
  },
  {
    icon: TrendingUp,
    title: "Growth Catalyst OS - Automation for Growth",
    description: "Listens to the internet, finds your customers, and drafts the emails—before you wake up",
  },
]

export function HeroSection() {
  return (
    <section className="relative z-10 min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Illustration */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Character Illustration */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <img
                  src="/illustrated-female-developer-with-glasses-and-hood.jpg"
                  alt="Yashvi Neema - LLM Engineer illustration"
                  className="w-full h-auto max-w-sm"
                />
              </div>

              {/* Floating UI Elements */}
              <FloatingElement className="absolute top-8 left-0 animate-float">
                <div className="bg-secondary/80 backdrop-blur-sm rounded-lg p-3 text-xs font-mono">
                  <div className="text-cyan-400">{"const model = await"}</div>
                  <div className="text-muted-foreground">{"  loadLLM('gpt-4');"}</div>
                </div>
              </FloatingElement>

              <FloatingElement className="absolute top-16 right-0 animate-float-delayed">
                <div className="bg-secondary/80 backdrop-blur-sm rounded-lg p-2">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                </div>
              </FloatingElement>

              <FloatingElement className="absolute bottom-24 left-4 animate-float-slow">
                <div className="bg-secondary/80 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-cyan-400/60" />
                    ))}
                  </div>
                  <div className="flex gap-1 mt-1 ml-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-cyan-400/40" />
                    ))}
                  </div>
                </div>
              </FloatingElement>

              <FloatingElement className="absolute bottom-12 right-8 animate-float">
                <div className="bg-secondary/80 backdrop-blur-sm rounded-lg p-3">
                  <svg className="w-16 h-12" viewBox="0 0 64 48">
                    <circle cx="16" cy="24" r="4" className="fill-cyan-400/60" />
                    <circle cx="32" cy="12" r="4" className="fill-cyan-400/60" />
                    <circle cx="32" cy="36" r="4" className="fill-cyan-400/60" />
                    <circle cx="48" cy="24" r="4" className="fill-cyan-400/60" />
                    <line x1="16" y1="24" x2="32" y2="12" className="stroke-cyan-400/40" strokeWidth="1" />
                    <line x1="16" y1="24" x2="32" y2="36" className="stroke-cyan-400/40" strokeWidth="1" />
                    <line x1="32" y1="12" x2="48" y2="24" className="stroke-cyan-400/40" strokeWidth="1" />
                    <line x1="32" y1="36" x2="48" y2="24" className="stroke-cyan-400/40" strokeWidth="1" />
                  </svg>
                </div>
              </FloatingElement>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-2">AVA CHEN</h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6">LLM Engineer</p>
            <p className="text-muted-foreground mb-12 max-w-md mx-auto lg:mx-0">
              Building intelligent systems that bridge the gap between human communication and machine understanding.
            </p>

            {/* Featured Projects */}
            <div>
              <h2 className="text-sm font-semibold tracking-wider uppercase mb-6">Featured Projects</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {featuredProjects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    icon={project.icon}
                    title={project.title}
                    description={project.description}
                    variant="featured"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
