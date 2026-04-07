'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'

const projects = [
  { id: 1, title: 'Brand Identity', category: 'Visual Design', year: '2024' },
  { id: 2, title: 'Mobile App UI', category: 'Interface Design', year: '2024' },
  { id: 3, title: 'Web Platform', category: 'UX Design', year: '2023' },
  { id: 4, title: 'Design System', category: 'Product Design', year: '2023' },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Creative</span>
              <br />
              <span className="text-white">Designer</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-gray-400 max-w-2xl mb-12"
          >
            Crafting digital experiences with precision and creativity.
            Specialized in brand identity, UI/UX, and visual design.
          </motion.p>
          
          <motion.div
            initial={{ y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4"
          >
            <button className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full font-medium transition-all hover:opacity-90">
              View Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 border border-dark-border rounded-full font-medium hover:bg-dark-card transition-colors">
              Contact
            </button>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12"
          >
            Selected Work
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative glass rounded-2xl p-8 cursor-pointer overflow-hidden hover:border-accent-purple/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-accent-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-sm text-gray-500">{project.year}</span>
                    <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-accent-purple transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400">{project.category}</p>
                </div>
                
                <div className="mt-8 h-48 bg-gradient-to-br from-dark-border to-dark-card rounded-xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Let&apos;s work together
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Open for freelance projects and collaborations.
              Let&apos;s create something amazing.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full font-medium hover:opacity-90 transition-opacity">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-dark-border">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-gray-500">
          <span>© 2024 Designer Portfolio</span>
          <span>Built with Next.js</span>
        </div>
      </footer>
    </main>
  )
}
