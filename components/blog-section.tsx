import Link from "next/link"
import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "Building Production-Ready LLM Applications",
    excerpt:
      "A comprehensive guide to deploying large language models in production with best practices for scaling and monitoring.",
    date: "Dec 15, 2025",
    slug: "building-production-ready-llm-apps",
  },
  {
    title: "Fine-tuning vs RAG: When to Use What",
    excerpt:
      "Understanding the trade-offs between fine-tuning and retrieval-augmented generation for your specific use case.",
    date: "Nov 28, 2025",
    slug: "fine-tuning-vs-rag",
  },
  {
    title: "The Future of Code Generation AI",
    excerpt:
      "Exploring how AI-powered code generation is transforming software development and what it means for developers.",
    date: "Nov 10, 2025",
    slug: "future-of-code-generation-ai",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Blog</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group relative rounded-xl p-6 bg-card border border-border hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <time className="text-xs text-muted-foreground">{post.date}</time>
                <h3 className="font-semibold text-lg mt-2 mb-3 text-foreground group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
