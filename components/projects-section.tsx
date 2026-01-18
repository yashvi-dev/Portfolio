import { Code2, Brain, Network, ImageIcon, FileText } from "lucide-react"
import { ProjectCard } from "./project-card"

const fullstackProjects = [
  {
    icon: Code2,
    title: "E-Commerce Platform",
    description: "Full-featured online store with payment integration and inventory management.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    icon: Code2,
    title: "Content Management Platform",
    description: "Headless CMS with real-time collaboration and content versioning.",
    tags: ["React", "Node.js", "MongoDB"],
  },
]

const mlProjects = [
  {
    icon: Code2,
    title: "Using ML in Recommender System",
    description: "Collaborative filtering and content-based recommendations for e-commerce.",
    tags: ["Python", "TensorFlow", "Redis"],
  },
  {
    icon: Network,
    title: "Neural Network Visualizer",
    description: "Interactive tool for visualizing neural network architectures and training.",
    tags: ["React", "D3.js", "PyTorch"],
  },
  {
    icon: Brain,
    title: "Sentiment Analyzer",
    description: "Real-time sentiment analysis for social media monitoring.",
    tags: ["BERT", "FastAPI", "Docker"],
  },
  {
    icon: ImageIcon,
    title: "Style Transfer & Image Generation",
    description: "Neural style transfer and generative models for creative applications.",
    tags: ["GANs", "PyTorch", "CUDA"],
  },
]

const researchPapers = [
  {
    icon: FileText,
    title: "GANs for Image Synthesis",
    description: "Novel approaches to generative adversarial networks for high-fidelity image generation.",
  },
  {
    icon: FileText,
    title: "Efficient LLM Fine-tuning",
    description: "Parameter-efficient methods for adapting large language models to specific domains.",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Projects</h2>

        {/* Full-Stack Projects */}
        <div className="mb-16">
          <h3 className="text-sm font-semibold tracking-wider uppercase text-cyan-400 mb-6">Fullstack Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {fullstackProjects.map((project) => (
              <ProjectCard
                key={project.title}
                icon={project.icon}
                title={project.title}
                description={project.description}
                tags={project.tags}
                variant="default"
              />
            ))}
          </div>
        </div>

        {/* ML Projects */}
        <div className="mb-16">
          <h3 className="text-sm font-semibold tracking-wider uppercase text-cyan-400 mb-6">ML / AI Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mlProjects.map((project) => (
              <ProjectCard
                key={project.title}
                icon={project.icon}
                title={project.title}
                description={project.description}
                tags={project.tags}
                variant="ml"
              />
            ))}
          </div>
        </div>

        {/* Research Papers */}
        <div>
          <h3 className="text-sm font-semibold tracking-wider uppercase text-cyan-400 mb-6">Research Papers</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {researchPapers.map((paper) => (
              <ProjectCard
                key={paper.title}
                icon={paper.icon}
                title={paper.title}
                description={paper.description}
                variant="paper"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
