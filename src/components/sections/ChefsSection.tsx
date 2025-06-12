'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/ui/Container'

const chefs = [
  {
    name: 'Ange Hong Lan',
    specialty: 'Cuisine Vietnamienne',
    photo: '/photos/photoAnge.jpg'
  },
  {
    name: 'Nan Rosa Malai',
    specialty: 'Cuisine Thaï',
    photo: '/photos/PhotoRosa.jpg'
  },
  {
    name: 'Shayek Chowdury',
    specialty: 'Cuisine Indienne',
    photo: '/photos/PhotoShayek.png'
  },
  {
    name: 'Graziella Pequignet',
    specialty: 'Ateliers Cuisine',
    photo: '/photos/PhotoGraziella.jpg'
  },
  {
    name: 'Elisa Benini',
    specialty: 'Cuisine Italienne',
    photo: '/photos/PhotoElisa.jpg'
  }
]

export default function ChefsSection() {
  return (
    <section className="py-20" style={{ backgroundColor: 'white' }}>
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
            style={{ color: '#153838' }}
          >
            Notre équipe de Chefs
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chefs.map((chef, index) => (
            <motion.div
              key={chef.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100">
                <div className="relative overflow-hidden">
                  <div className="w-full h-80 relative">
                    <Image
                      src={chef.photo}
                      alt={`Photo de ${chef.name}`}
                      fill
                      className="object-cover"
                      priority={index < 3}
                    />
                  </div>
                </div>

                <div className="p-8 text-center">
                  <h3 
                    className="text-2xl font-serif font-bold mb-2"
                    style={{ color: '#153838' }}
                  >
                    {chef.name}
                  </h3>
                  <p 
                    className="text-lg"
                    style={{ color: '#c9a96e' }}
                  >
                    {chef.specialty}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
