'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { useRef } from 'react'

const projects = [
  { id: 1, title: 'Brand Identity', category: 'Visual Design', year: '2024' },
  { id: 2, title: 'Mobile App UI', category: 'Interface Design', year: '2024' },
  { id: 3, title: 'Web Platform', category: 'UX Design', year: '2023' },
  { id: 4, title: 'Design System', category: 'Product Design', year: '2023' },
]

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const bgTextY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const bgTextOpacity = useTransform(scrollYProgress, [0, 0.3], [0.15, 0.05])

  return (
    <main ref={containerRef} className="min-h-screen bg-dark-bg overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ y: bgTextY, opacity: bgTextOpacity }}
        >
          <span className="text-[25vw] font-black tracking-tighter text-transparent"
            style={{ WebkitTextStroke: '2px rgba(249, 212, 22, 0.2)' }}
          >
            WMZ
          </span>
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-8xl font-bold mb-6">
              <span className="text-white">Creative</span><br />
              <span style={{ color: '#F9D416' }}>Designer</span>
            </h1>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12"
          >
            Crafting digital experiences with precision and creativity.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex gap-4">
            <button className="group flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black transition-all hover:scale-105" style={{ backgroundColor: '#F9D416' }}>
              View Work<ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
            </button>
            <button className="px-8 py-4 border rounded-full font-semibold transition-all hover:bg-white/5" style={{ borderColor: '#F9D416', color: '#F9D416' }}>
              Contact
            </button>
          </motion.div>
        </div>

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="w-6 h-10 border-2 rounded-full flex justify-center pt-2" style={{ borderColor: '#F9D416' }}>
            <div className="w-1 h-2 rounded-full" style={{ backgroundColor: '#F9D416' }} />
          </div>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-16">
            Selected <span style={{ color: '#F9D416' }}>Work</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-2xl p-8 cursor-pointer overflow-hidden transition-all" style={{ backgroundColor: '#111', border: '1px solid #1a1a1a' }}
              >
                <div className="absolute top-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-500" style={{ backgroundColor: '#F9D416' }} />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-sm text-gray-500">{project.year}</span>
                    <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2" style={{ color: '#F9D416' }}>{project.title}</h3>
                  <p className="text-gray-400">{project.category}</p>
                </div>
                <div className="mt-8 h-48 rounded-xl flex items-center justify-center text-gray-600" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)' }}>
                  <span className="text-sm">Project Preview</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let&apos;s work <span style={{ color: '#F9D416' }}>together</span>
            </h2>
            <p className="text-gray-400 mb-12 text-lg">Open for freelance projects and collaborations.</p>
            <button className="px-10 py-5 rounded-full font-semibold text-black text-lg transition-all hover:scale-105" style={{ backgroundColor: '#F9D416' }}>
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8" style={{ borderTop: '1px solid #1a1a1a' }}>
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-gray-500">
          <span> 2024 Designer Portfolio</span>
          <span>Built with Next.js</span>
        </div>
      </footer>
    </main>
  )
}
