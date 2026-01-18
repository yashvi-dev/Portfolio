import { Code, Brain, Sparkles } from "lucide-react"

const stats = [
  { label: "Years Coding", value: "4+" },
  { label: "Projects", value: "22+" },
  { label: "Research Papers", value: "1" },
  // { label: "Open Source", value: "20+" },
]

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">About</h2>
          <p className="text-muted-foreground leading-relaxed">
            I'm a full-stack engineer with a deep passion for machine learning and AI. My work focuses on building
            production-ready systems that leverage the power of large language models to solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-secondary flex items-center justify-center">
              <Code className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="font-semibold mb-2">LLM Engineer</h3>
            <p className="text-sm text-muted-foreground">
              I Teach machines to do the boring parts so humans can think!
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-secondary flex items-center justify-center">
              <Brain className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="font-semibold mb-2">ML & AI Systems</h3>
            <p className="text-sm text-muted-foreground">
              Designing and deploying machine learning models for production environments.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-secondary flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="font-semibold mb-2">Curiosity-Driven</h3>
            <p className="text-sm text-muted-foreground">
              Always exploring new technologies and pushing the boundaries of what's possible.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
