import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// Parallax seam that animates the connection between hero art and the next section
export default function ParallaxSeam({ className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  // Subtle vertical offset and mask expansion to create a moving seam
  const y = useTransform(scrollYProgress, [0, 1], [0, -40])
  const radius = useTransform(scrollYProgress, [0, 1], [96, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.0])

  return (
    <div ref={ref} className={`relative h-24 sm:h-28 ${className}`}>
      {/* Animated blob mask for a dynamic parallax handoff */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(10,10,11,0)" />
              <stop offset="100%" stopColor="#0A0A0B" />
            </linearGradient>
            <filter id="blur" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="8" />
            </filter>
          </defs>
          <motion.path
            d="M0,10 C240,50 360,70 600,70 C840,70 960,50 1200,10 L1200,200 L0,200 Z"
            fill="url(#fade)"
            filter="url(#blur)"
            style={{ pathLength: 1 }}
          />
        </svg>
      </motion.div>

      {/* Extra gradient veil to ensure seamless transition */}
      <motion.div style={{ borderTopLeftRadius: radius, borderTopRightRadius: radius }} className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0B]" />
    </div>
  )
}
