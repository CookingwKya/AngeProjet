'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/ui/Container'

export default function PartnersSection() {
  return (
    <section 
      className="py-20"
      style={{ backgroundColor: '#153838' }}
    >
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white"
          >
            Ils nous font confiance
          </motion.h2>
          <div 
            className="w-16 h-1 mx-auto"
            style={{ backgroundColor: '#c9a96e' }}
          ></div>
        </div>

        {/* Image des partenaires */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-4xl w-full">
            <Image
              src="/logos/partners-grid.png"
              alt="Nos partenaires : Amazon, Intermarché, TheFork, Medtronic, Doctolib, ANSM, Allianz, Intégrance, DentalMonitoring, SNCF, RATP, Izivia, Japan Experience, RTE, General Electric, CCG, IBM, IT Coop, BedrockStreaming, Bene, Hermès, Ad Astra, Agora Store, Prodigious, Manpower, Chugai, Komet, Dailymotion"
              width={800}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          <div>
            <div 
              className="text-3xl md:text-4xl font-bold font-serif mb-2"
              style={{ color: '#c9a96e' }}
            >
              50+
            </div>
            <div className="text-white text-sm">
              Partenaires de confiance
            </div>
          </div>
          <div>
            <div 
              className="text-3xl md:text-4xl font-bold font-serif mb-2"
              style={{ color: '#c9a96e' }}
            >
              500+
            </div>
            <div className="text-white text-sm">
              Participants satisfaits
            </div>
          </div>
          <div>
            <div 
              className="text-3xl md:text-4xl font-bold font-serif mb-2"
              style={{ color: '#c9a96e' }}
            >
              150+
            </div>
            <div className="text-white text-sm">
              Ateliers organisés
            </div>
          </div>
          <div>
            <div 
              className="text-3xl md:text-4xl font-bold font-serif mb-2"
              style={{ color: '#c9a96e' }}
            >
              98%
            </div>
            <div className="text-white text-sm">
              Taux de satisfaction
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
