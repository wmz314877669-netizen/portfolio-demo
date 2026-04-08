'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
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

  // Letter split effect on scroll
  const letterW_X = useTransform(scrollYProgress, [0, 0.3], ["0%", "-15%"])
  const letterW_Y = useTransform(scrollYProgress, [0, 0.3], ["0%", "-8%"])
  const letterM_X = useTransform(scrollYProgress, [0, 0.3], ["0%", "0%"])
  const letterM_Y = useTransform(scrollYProgress, [0, 0.3], ["0%", "3%"])
  const letterZ_X = useTransform(scrollYProgress, [0, 0.3], ["0%", "15%"])
  const letterZ_Y = useTransform(scrollYProgress, [0, 0.3], ["0%", "-10%"])

  // Hero content fade
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-20%"])

  return (
    <main ref={containerRef} className="min-h-screen bg-dark-bg overflow-hidden">
      {/* Engineering Grid Background */}
      <div className="engineering-grid" />

      {/* Hero Section - Giant Typography with Letter Split */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Giant WMZ Letters - Split on scroll */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        >
          {/* Letter W - moves left/up */}
          <motion.span
            className="absolute text-[85vw] font-black tracking-tighter"
            style={{
              x: letterW_X,
              y: letterW_Y,
              color: 'transparent',
              WebkitTextStroke: '2px rgba(249, 212, 22, 0.6)',
              left: '-5%',
            }}
          >
            W
          </motion.span>
          
          {/* Letter M - moves down slightly */}
          <motion.span
            className="absolute text-[85vw] font-black tracking-tighter"
            style={{
              x: letterM_X,
              y: letterM_Y,
              color: 'transparent',
              WebkitTextStroke: '2px rgba(249, 212, 22, 0.8)',
            }}
          >
            M
          </motion.span>
          
          {/* Letter Z - moves right/up */}
          <motion.span
            className="absolute text-[85vw] font-black tracking-tighter"
            style={{
              x: letterZ_X,
              y: letterZ_Y,
              color: 'transparent',
              WebkitTextStroke: '2px rgba(249, 212, 22, 0.6)',
              right: '-5%',
            }}
          >
            Z
          </motion.span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border border-yellow-400/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-yellow-400 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16"
          >
            Selected <span style={{ color: '#F9D416' }}>Work</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-2xl p-8 cursor-pointer overflow-hidden transition-all"
                style={{ backgroundColor: '#111', border: '1px solid #1a1a1a' }}
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
      <section className="px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
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
      <footer className="px-6 py-8 relative z-10" style={{ borderTop: '1px solid #1a1a1a' }}>
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-gray-500">
          <span>© 2024 Designer Portfolio</span>
          <span>Built with Next.js</span>
        </div>
      </footer>
    </main>
  )
}