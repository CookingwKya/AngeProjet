'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Container from '@/components/ui/Container'

const testimonials = [
  {
    name: 'Christina',
    role: 'Participante Atelier',
    rating: 5,
    comment: 'Ange is professional, informative and offers a tasty experience!',
    date: '17 nov. 2024'
  },
  {
    name: 'Kevin',
    role: 'Atelier Pho',
    rating: 5,
    comment: 'On a passé un bon moment. Merci Ange pour les petits tips et les astuces pour faire un bon pho réussi.',
    date: '19 sept. 2024'
  },
  {
    name: 'Arnaud',
    role: 'Atelier Team Building',
    rating: 5,
    comment: 'C\'était top ! Ange et son équipe nous ont préparé un super menu. Elle nous a parfaitement expliqué et guidé dans la préparation des différents plats, tout en distillant des conseils et astuces tout au long de l\'atelier. Je recommande !',
    date: '13 sept. 2024'
  },
  {
    name: 'Everton',
    role: 'Cours de Cuisine',
    rating: 5,
    comment: 'Le cours é dynamique, agréable et nous permet de connaître la cuisine vietnamienne et d\'autres participants du cours.',
    date: '19 mars 2024'
  },
  {
    name: 'Sophie',
    role: 'Atelier Groupe',
    rating: 4,
    comment: 'Ambiance sympa, menu plutôt facile à réaliser, mais pas trop de suivi personnalisé compte tenu que nous étions 14 dont 2 enfants à driver ! Beaucoup de place laissée pour les photos/vidéos souvenirs.',
    date: '23 sept. 2024'
  },
  {
    name: 'Julien',
    role: 'Cours Particulier',
    rating: 5,
    comment: 'Super ! Ange est très dynamique et pédagogue',
    date: '18 mai 2025'
  },
  {
    name: 'Robert',
    role: 'Atelier Dégustation',
    rating: 5,
    comment: 'Très bon moment passé avec Ange et les autres personnes inscrites. Le cours de préparation était sympa et la dégustation était Top. Merci Ange !',
    date: '6 avr. 2025'
  },
  {
    name: 'Christelle',
    role: 'Expérience Culinaire',
    rating: 5,
    comment: 'Moment convivial avec une cheffe Ange dans le partage. Des saveurs qui vous transportent ailleurs. Je recommanderais sans hésitation.',
    date: '9 mars 2025'
  },
  {
    name: 'Thierry',
    role: 'Formation Cuisine',
    rating: 5,
    comment: 'C\'était très bien et instructif. Merci à Ange et son équipe pour leur bonne humeur et leur professionnalisme.',
    date: '3 févr. 2025'
  },
  {
    name: 'Valérie',
    role: 'Groupe Privé',
    rating: 5,
    comment: 'Excellente expérience avec Ange et Harrys en compagnie d\'un groupe charmant. Je recommande +++',
    date: '27 janv. 2025'
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20" style={{ backgroundColor: '#f9fafb' }}>
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
            style={{ color: '#153838' }}
          >
            Ce que disent nos clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: '#6b7280' }}
          >
            Découvrez les témoignages de nos participants qui ont vécu une expérience culinaire authentique
          </motion.p>
        </div>

        {/* Grille de témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div 
                className="bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg relative"
                style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}
              >
                {/* Icône de citation */}
                <div 
                  className="absolute -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#c9a96e' }}
                >
                  <Quote className="w-4 h-4" style={{ color: '#153838' }} />
                </div>

                {/* Étoiles */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-current" 
                      style={{ color: '#c9a96e' }}
                    />
                  ))}
                </div>

                {/* Commentaire */}
                <p 
                  className="text-base leading-relaxed mb-6 italic"
                  style={{ color: '#4b5563' }}
                >
                  "{testimonial.comment}"
                </p>

                {/* Informations client */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {/* Avatar avec initiale */}
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold"
                      style={{ backgroundColor: '#153838' }}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div 
                        className="font-semibold text-sm"
                        style={{ color: '#153838' }}
                      >
                        {testimonial.name}
                      </div>
                      <div 
                        className="text-xs"
                        style={{ color: '#c9a96e' }}
                      >
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <div 
                    className="text-xs"
                    style={{ color: '#9ca3af' }}
                  >
                    {testimonial.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '500+', label: 'Participants satisfaits' },
            { number: '4.9/5', label: 'Note moyenne' },
            { number: '150+', label: 'Ateliers organisés' },
            { number: '98%', label: 'Taux de recommandation' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div 
                className="text-3xl md:text-4xl font-bold font-serif mb-2"
                style={{ color: '#153838' }}
              >
                {stat.number}
              </div>
              <div 
                className="text-sm"
                style={{ color: '#6b7280' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
