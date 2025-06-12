'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Award, Sparkles } from 'lucide-react'
import Container from '@/components/ui/Container'

const values = [
  {
    icon: Heart,
    title: 'Authenticité',
    description: 'Transmettre les vraies saveurs et techniques traditionnelles du Vietnam, héritées de ma famille.',
    color: '#c9a96e'
  },
  {
    icon: Users,
    title: 'Partage',
    description: 'Créer du lien social et des moments conviviaux autour de la passion culinaire commune.',
    color: '#153838'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Offrir une expérience de qualité avec des ingrédients sélectionnés et un enseignement rigoureux.',
    color: '#c9a96e'
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'Adapter les recettes traditionnelles aux goûts modernes tout en respectant leur essence.',
    color: '#153838'
  }
]

export default function ValuesSection() {
  return (
    <section className="py-20" style={{ backgroundColor: '#f9fafb' }}>
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
            style={{ color: '#153838' }}
          >
            Mes Valeurs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: '#6b7280' }}
          >
            Les principes qui guident chaque atelier et chaque rencontre culinaire
          </motion.p>
        </div>

        {/* Grille des valeurs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 text-center h-full transition-all duration-300 hover:shadow-lg">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: value.color }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 
                    className="text-xl font-serif font-semibold mb-4"
                    style={{ color: '#153838' }}
                  >
                    {value.title}
                  </h3>
                  
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ color: '#6b7280' }}
                  >
                    {value.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Section engagement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div 
            className="bg-white rounded-3xl p-12 shadow-lg"
            style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)' }}
          >
            <h3 
              className="text-2xl md:text-3xl font-serif font-bold mb-6"
              style={{ color: '#153838' }}
            >
              Mon Engagement
            </h3>
            
            <p 
              className="text-lg leading-relaxed max-w-3xl mx-auto mb-8"
              style={{ color: '#4b5563' }}
            >
              Je m'engage à vous offrir bien plus qu'un simple cours de cuisine. 
              Ensemble, nous créons des souvenirs, nous tissons des liens, et nous 
              célébrons la richesse de la culture vietnamienne à travers ses saveurs uniques.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div 
                  className="text-3xl font-bold font-serif mb-2"
                  style={{ color: '#c9a96e' }}
                >
                  500+
                </div>
                <p 
                  className="text-sm"
                  style={{ color: '#6b7280' }}
                >
                  Participants satisfaits
                </p>
              </div>

              <div className="text-center">
                <div 
                  className="text-3xl font-bold font-serif mb-2"
                  style={{ color: '#c9a96e' }}
                >
                  150+
                </div>
                <p 
                  className="text-sm"
                  style={{ color: '#6b7280' }}
                >
                  Ateliers organisés
                </p>
              </div>

              <div className="text-center">
                <div 
                  className="text-3xl font-bold font-serif mb-2"
                  style={{ color: '#c9a96e' }}
                >
                  15+
                </div>
                <p 
                  className="text-sm"
                  style={{ color: '#6b7280' }}
                >
                  Années d'expérience
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
