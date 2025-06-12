'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function PhoAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Transformations parallax
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8])

  return (
    <div ref={containerRef} className="relative w-full h-96 overflow-hidden">
      {/* Vapeur animée */}
      <div className="absolute inset-0 pointer-events-none">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute w-6 h-6 rounded-full bg-white/20 blur-sm"
            style={{
              left: `${45 + (i % 3) * 3}%`,
              top: '25%',
            }}
            animate={{
              y: [-10, -60, -110],
              opacity: [0, 0.8, 0],
              scale: [0.3, 1, 1.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Bol de Pho */}
      <motion.div
        style={{ y: y1, scale }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative">
          {/* Bol principal */}
          <motion.div
            className="relative w-48 h-32 bg-gradient-to-b from-amber-100 to-amber-200 rounded-full border-4 border-amber-300 shadow-xl"
          >
            {/* Bouillon animé */}
            <motion.div
              animate={{ 
                background: [
                  'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  'linear-gradient(135deg, #d97706 0%, #92400e 100%)',
                  'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-3 rounded-full overflow-hidden"
            >
              {/* Ondulations */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent"
                animate={{
                  y: [20, -20, 20],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Nouilles */}
          <motion.div
            style={{ y: y2 }}
            className="absolute top-6 left-1/2 transform -translate-x-1/2"
          >
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute w-16 h-0.5 bg-yellow-200 rounded-full"
                style={{
                  left: `${-8 + i * 4}px`,
                  top: `${i * 2}px`,
                  rotate: `${i * 15}deg`,
                }}
                animate={{
                  y: [0, -1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </motion.div>

          {/* Viande */}
          <motion.div
            className="absolute top-4 left-1/2 transform -translate-x-1/2"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-3 bg-red-700 rounded-lg"
                style={{
                  left: `${-6 + i * 4}px`,
                  top: `${i * 2}px`,
                }}
                animate={{
                  y: [0, -2, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.7,
                }}
              />
            ))}
          </motion.div>

          {/* Herbes */}
          <motion.div
            className="absolute top-2 left-1/2 transform -translate-x-1/2"
          >
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-4 bg-green-500 rounded-full"
                style={{
                  left: `${-8 + i * 4}px`,
                  top: `${(i % 2) * 3}px`,
                }}
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>

          {/* Baguettes */}
          <motion.div
            className="absolute -right-12 top-1/2 transform -translate-y-1/2"
          >
            <motion.div
              animate={{
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="flex space-x-0.5"
            >
              <div className="w-0.5 h-24 bg-gradient-to-t from-amber-600 to-amber-300 rounded-full"></div>
              <div className="w-0.5 h-24 bg-gradient-to-t from-amber-600 to-amber-300 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Émoji Pho pour plus de simplicité */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-4 left-1/2 transform -translate-x-1/2 text-4xl"
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        🍜
      </motion.div>
    </div>
  )
}
