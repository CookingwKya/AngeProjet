'use client'

import { motion } from 'framer-motion'
import { MapPin, Heart, Users, Award } from 'lucide-react'
import Container from '@/components/ui/Container'

const timeline = [
  {
    year: '2008',
    title: 'Les Racines',
    location: 'Hô Chi Minh-Ville, Vietnam',
    icon: MapPin,
    color: '#c9a96e',
    description: 'Formation auprès des grands chefs vietnamiens et apprentissage des techniques traditionnelles dans ma ville natale.'
  },
  {
    year: '2012',
    title: 'L\'Arrivée en France',
    location: 'Paris, France',
    icon: Heart,
    color: '#153838',
    description: 'Installation à Paris avec le rêve de partager la richesse de la cuisine vietnamienne authentique.'
  },
  {
    year: '2015',
    title: 'Premiers Ateliers',
    location: 'Paris 11ème',
    icon: Users,
    color: '#c9a96e',
    description: 'Lancement des premiers ateliers culinaires dans un petit local du 11ème arrondissement.'
  },
  {
    year: '2020',
    title: 'Reconnaissance',
    location: 'National',
    icon: Award,
    color: '#153838',
    description: 'Expansion nationale et reconnaissance médiatique. Plus de 500 participants formés.'
  }
]

export default function StorySection() {
  return (
    <section className="py-20" style={{ backgroundColor: 'white' }}>
      <Container>
        {/* Introduction */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
            style={{ color: '#153838' }}
          >
            Un Parcours Authentique
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#6b7280' }}
          >
            De mes premiers pas dans les cuisines de Saigon à la création des Ateliers Culinaires, 
            découvrez le chemin qui m'a menée à partager ma passion pour la cuisine vietnamienne.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="space-y-16">
          {timeline.map((item, index) => {
            const Icon = item.icon
            const isLeft = index % 2 === 0
            
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Contenu */}
                <div className="lg:w-5/12">
                  <div 
                    className={`bg-white rounded-2xl p-8 shadow-lg ${isLeft ? 'lg:mr-8' : 'lg:ml-8'}`}
                    style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)' }}
                  >
                    <div className="flex items-center mb-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                        style={{ backgroundColor: item.color }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div 
                          className="text-2xl font-bold font-serif"
                          style={{ color: item.color }}
                        >
                          {item.year}
                        </div>
                      </div>
                    </div>
                    
                    <h3 
                      className="text-2xl font-serif font-bold mb-2"
                      style={{ color: '#153838' }}
                    >
                      {item.title}
                    </h3>
                    
                    <p 
                      className="text-sm font-medium mb-4"
                      style={{ color: '#c9a96e' }}
                    >
                      📍 {item.location}
                    </p>
                    
                    <p 
                      className="leading-relaxed"
                      style={{ color: '#6b7280' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Ligne centrale */}
                <div className="hidden lg:flex lg:w-2/12 justify-center">
                  <div className="relative">
                    <div 
                      className="w-1 h-32"
                      style={{ backgroundColor: '#e6daca' }}
                    ></div>
                    <div 
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-white"
                      style={{ backgroundColor: item.color }}
                    ></div>
                  </div>
                </div>

                {/* Espace vide pour équilibrer */}
                <div className="hidden lg:block lg:w-5/12"></div>
              </motion.div>
            )
          })}
        </div>

        {/* Section philosophie */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div 
            className="bg-gradient-to-r rounded-3xl p-12"
            style={{ 
              background: 'linear-gradient(135deg, #f0eae0 0%, #e6daca 100%)'
            }}
          >
            <h3 
              className="text-3xl font-serif font-bold mb-6"
              style={{ color: '#153838' }}
            >
              Ma Philosophie
            </h3>
            <p 
              className="text-lg leading-relaxed max-w-4xl mx-auto mb-8"
              style={{ color: '#4b5563' }}
            >
              Pour moi, cuisiner c'est bien plus que préparer un repas. C'est créer du lien, 
              transmettre un héritage, et offrir un moment de bonheur partagé. Chaque atelier 
              est une invitation à découvrir non seulement les saveurs du Vietnam, mais aussi 
              l'âme de cette cuisine généreuse et conviviale.
            </p>
            <div 
              className="w-24 h-1 mx-auto"
              style={{ backgroundColor: '#c9a96e' }}
            ></div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
