'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import ModernButton from '@/components/ui/ModernButton'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #153838 0%, #0f3238 100%)'
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: '#c9a96e' }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: '#d4b67a', animationDelay: '1s' }}
        ></div>
      </div>

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight"
          >
            Les Ateliers Culinaires
            <span className="block" style={{ color: '#c9a96e' }}>d'Ange</span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl font-serif italic"
            style={{ color: '#d4b67a' }}
          >
            By Ange Hong Lan
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#e6daca' }}
          >
            Découvrez les secrets de la cuisine vietnamienne authentique dans nos ateliers 
            conviviaux. Nos chefs passionnés vous attendent pour un voyage culinaire inoubliable.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <ModernButton variant="primary" className="w-full sm:w-auto">
              Réservez vos ateliers
            </ModernButton>
            <ModernButton variant="secondary" className="w-full sm:w-auto">
              Découvrir nos services
            </ModernButton>
          </motion.div>

          {/* Indicateur de scroll */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="pt-16"
          >
            <div className="flex flex-col items-center" style={{ color: '#c9a96e' }}>
              <span className="text-sm font-medium mb-2">Découvrez nos ateliers</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 rounded-full flex justify-center"
                style={{ borderColor: '#c9a96e' }}
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 rounded-full mt-2"
                  style={{ backgroundColor: '#c9a96e' }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
