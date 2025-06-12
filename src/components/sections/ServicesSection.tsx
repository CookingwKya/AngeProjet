'use client'

import { motion } from 'framer-motion'
import { Users, Utensils, Home, ChefHat } from 'lucide-react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'

const services = [
  {
    icon: Users,
    title: 'Team Building',
    description: 'Renforcez la cohésion de votre équipe autour d\'ateliers culinaires collaboratifs et conviviaux.',
    link: '/team-building'
  },
  {
    icon: Utensils,
    title: 'Nos Services',
    description: 'Découvrez notre gamme complète de prestations culinaires adaptées à tous vos besoins.',
    link: '/services'
  },
  {
    icon: ChefHat,
    title: 'Nos Ateliers',
    description: 'Apprenez les techniques de la cuisine vietnamienne traditionnelle dans nos ateliers interactifs.',
    link: '/ateliers'
  },
  {
    icon: Home,
    title: 'À Domicile',
    description: 'Profitez d\'un service traiteur personnalisé directement chez vous pour vos événements.',
    link: '/domicile'
  }
]

export default function ServicesSection() {
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
            Nos Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: '#6b7280' }}
          >
            Des expériences culinaires uniques pour tous les goûts et toutes les occasions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div 
                  className="bg-white rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg"
                  style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300"
                    style={{ backgroundColor: '#153838' }}
                  >
                    <Icon 
                      className="w-8 h-8"
                      style={{ color: '#c9a96e' }}
                    />
                  </div>
                  
                  <h3 
                    className="text-xl font-serif font-semibold mb-4"
                    style={{ color: '#153838' }}
                  >
                    {service.title}
                  </h3>
                  
                  <p 
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: '#6b7280' }}
                  >
                    {service.description}
                  </p>
                  
                  <button 
                    className="text-sm font-medium transition-colors duration-200 hover:opacity-80"
                    style={{ color: '#c9a96e' }}
                  >
                    En savoir plus →
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
