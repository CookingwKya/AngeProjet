'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/ui/Container'

export default function HistoryHeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{ 
        background: 'linear-gradient(135deg, #153838 0%, #0f3238 100%)'
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-40 left-20 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: '#c9a96e' }}
        ></div>
        <div 
          className="absolute bottom-40 right-20 w-80 h-80 rounded-full blur-3xl"
          style={{ backgroundColor: '#d4b67a' }}
        ></div>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenu texte */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight"
            >
              Mon Histoire
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p 
                className="text-xl md:text-2xl leading-relaxed"
                style={{ color: '#e6daca' }}
              >
                <span style={{ color: '#c9a96e' }}>De Saigon à Paris</span>, 
                un voyage culinaire authentique qui mélange tradition familiale 
                et passion pour la transmission.
              </p>
              
              <p 
                className="text-lg leading-relaxed"
                style={{ color: '#e6daca' }}
              >
                Découvrez comment j'ai transformé l'héritage culinaire de ma grand-mère 
                en ateliers passionnants qui rassemblent et créent du lien.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center space-x-4"
            >
              <div 
                className="w-1 h-16"
                style={{ backgroundColor: '#c9a96e' }}
              ></div>
              <div>
                <p 
                  className="text-lg font-serif italic"
                  style={{ color: '#c9a96e' }}
                >
                  "Chaque plat raconte une histoire,<br/>
                  chaque recette porte une émotion."
                </p>
                <p 
                  className="text-sm mt-2"
                  style={{ color: '#e6daca' }}
                >
                  — Ange Hong Lan
                </p>
              </div>
            </motion.div>
          </motion.div>

	{/* Photo d'Ange */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Cadre décoratif */}
              <div 
                className="absolute -inset-4 rounded-3xl"
                style={{ 
                  background: 'linear-gradient(45deg, #c9a96e, #d4b67a)',
                  transform: 'rotate(3deg)'
                }}
              ></div>
              
              {/* Photo d'Ange */}
              <div className="relative bg-white rounded-3xl overflow-hidden">
                <div className="w-full h-96 relative">
                  <Image
                    src="/photos/PhotoElisa.jpg"
                    alt="Ange Hong Lan - Chef Fondatrice"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Badge décoratif */}
              <div 
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: '#153838' }}
              >
                <div className="text-center">
                  <div style={{ color: '#c9a96e' }}>15+</div>
                  <div className="text-xs">Années</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
